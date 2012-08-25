var ffi = require('ffi'),
    ref = require('ref'),
    StructT = require('ref-struct');

var decorate = require('./utils').decorate,
    inherit = require('./utils').inherit;

var Library = ffi.Library,
    Type = ref.Type,
    NULL = ref.NULL;



module.exports = lookup;


var groups = ['libs', 'types', 'structs', 'callbacks', 'enums', 'bitfields'];
var data = {};


groups.forEach(function(name){
  data[name] = {};
});

var types = data.types = ref.types;
var int = types.int;
var VoidT = types.VoidT;


Library.on('create', function(lib){
  data.libs[lib.name] = lib;
});


function ArrayT(type, length){
  var fields = {};
  Array.apply(null, new Array(length)).forEach(function(x, i){
    fields[i] = type;
  });
  return new StructT(type.name+'x'+length, fields);
}

function _(){}
_.prototype = Object.create(null);


function typeFit(n){
  if (n < 0) return types.VoidT;
  if (n < 0x100) return types.uint8;
  if (n < 0x10000) return types.uint16;
  if (n < 0x100000000) return types.uint32;
  return types.uint64;
}


function bitfieldToValue(fields, val){
  if (!val) {
    return 0;
  } else if (typeof val === 'number') {
    return isFinite(val) ? val : 0;
  } else if (typeof val === 'object') {
    var o = val;
    val = 0;
    for (var k in o) {
      if (k in fields) {
        o[k] ? (val |= fields[k]) : (val &= ~fields[k]);
      }
    }
    return val;
  } else {
    return 0;
  }
}



function BitfieldT(name, type, values){
  var self = BitfieldT.typedef(name);
  data.bitfields[name] = self;

  if (!(type instanceof Type)) {
    values || (values = type);
    var max = Object.keys(Object(values)).reduce(function(max, key){
      return Math.max(max, +values[key]);
    }, 0);
    type = typeFit(max);
  }

  self.fields = new _;
  self.type = type;

  Object.keys(values).forEach(function(k){
    var value = self.fields[k] = values[k];
    Object.defineProperty(self.prototype, k, {
      enumerable: true,
      configurable: true,
      get: function(){
        return (value & type.get(this)) > 0;
      },
      set: function(v){
        var current = type.get(this);
        type.set(this, v ? current | value : current & ~value);
      }
    });
  });

  Object.freeze(self.fields);

  return self;
}

int.adopt(BitfieldT);

decorate(BitfieldT, true, [
  function initialize(instance, offset, val){
    if (arguments.length === 1) {
      return this.type.initialize(instance, 0, 0);
    } else if (arguments.length === 2) {
      val = offset;
      offset = 0;
    }
    offset = offset || 0;
    return this.type.initialize.call(this, instance, offset, bitfieldToValue(this.fields, val));
  },
  function get(buf, offset){
    var val = this.type.get(buf, offset),
        out = {};
    for (var k in this.fields) {
      out[k] = (this.fields[k] & val) > 0;
    }
    return out;
  },
  function set(buf, offset, val){
    return this.type.set(buf, offset, bitfieldToValue(this.fields, val));
  },
]);


// #############
// ### EnumT ###
// #############

function EnumT(name, values){
  var self = EnumT.typedef(name);
  data.enums[name] = self;

  decorate(self, true, {
    name: name,
    vals: new _,
  });

  Object.keys(values).forEach(function(key){
    self[key] = values[key];
    self.vals[values[key]] = key;
  });

  return self;
}

int.adopt(EnumT);

decorate(EnumT, true, [
  function initialize(instance, offset, value){
    if (arguments.length === 1) {
      return int.initialize(instance, 0, 0);
    } else if (arguments.length === 2) {
      value = offset;
      offset = 0;
    }
    if (value in this) {
      return int.initialize(instance, offset, this[value]);
    } else if (value in this.vals) {
      return int.initialize(instance, offset, value);
    } else {
    }
    return int.initialize(instance, offset, 0);
  },
  function get(buf, offset){
    var val = int.get(buf, offset);
    return val in this.vals ? this.vals[val] : val;
  },
  function set(buf, offset, val){
    if (val in this) {
      val = this[val];
    }
    return int.set(buf, offset, val);
  },
  function toKey(v){
    return v in this ? v : this.vals[v];
  },
  function toValue(v){
    return v in this.vals ? v : this[v];
  },
]);




// ################
// ### Callback ###
// ################

function CallbackT(name, returns, argTypes){
  data.callbacks[name] = this;
  this.name = name;
  this.iface = new Function('self', 'return function '+name+'(f){ return self.construct(f) }')(this);
  this.returns = returns;
  this.argTypes = argTypes;
  return VoidT;
}

CallbackT.__proto__ = ref.Type;

decorate(CallbackT, true, {
  _size: ref.sizeof.pointer,
  indirection: 2,
  get: function get(buf, offset){
  },
  set: function set(buf, off, setval){
  }
});

decorate(CallbackT.prototype, {
  _type: CallbackT,
}, [
  function toString(){
    return '[object '+this._type.name+'Callback]'
  },
  function construct(fn){
    return ffi.Callback(this.returns, this.argTypes, fn);
  },
  function typedef(name){
    return new CallbackT(name, this.returns, this.argTypes);
  }
]);

function lookup(name){
  if (name === '___') {
    return data;
  }
  if (name == null || name.toLowerCase() === 'null') {
    return NULL;
  }
  if (name in lookup) {
    return lookup[name];
  }
  var i = groups.length;
  while (i--) {
    if (name in data[groups[i]]) {
      return data[groups[i]][name];
    }
  }
  for (var k in data.libs) {
    if (name in data.libs[k]) {
      return data.libs[k][name];
    }
    if ((name + 'A') in data.libs[k]) {
      return data.libs[k][name + 'A'];
    }
  }
}

decorate(lookup, {
  NULL: data.NULL = ref.NULL,
  Library: Library,
  Type: Type,

  ArrayT: ArrayT,
  BitfieldT: BitfieldT,
  EnumT: EnumT,
  CallbackT: CallbackT,
  StructT: require('ref-struct'),
  VoidT: types.void.Δ.typedef('VoidT'),
});



/*
var
 VOID      = types.void,
 VoidT     = VOID.Δ.typedef('VoidT'),
 int8      = types.int8,
 uint8     = types.uint8,
 int16     = types.int16,
 uint16    = types.uint16,
 int32     = types.int32,
 uint32    = types.uint32,
 int64     = types.int64,
 uint64    = types.uint64,
 float     = types.float,
 double    = types.double,
 CString   = types.CString,
 WString   = types.WString,
 bool      = types.bool,
 byte      = types.byte,
 char      = types.char,
 uchar     = types.uchar,
 short     = types.short,
 ushort    = types.ushort,
 int       = types.int,
 uint      = types.uint,
 long      = types.long,
 ulong     = types.ulong,
 longlong  = types.longlong,
 ulonglong = types.ulonglong,
 size_t    = types.size_t,
 charΔ     = types.charΔ,
 wcharΔ    = types.charΔ,
 voidΔ     = types.voidΔ,
 intΔ      = types.intΔ;
*/

