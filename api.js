var ffi = require('ffi'),
    ref = require('ref'),
    StructT = require('ref-struct'),
    BitfieldT = require('./BitfieldType');

var decorate = require('./utils').decorate,
    inherit = require('./utils').inherit;

var Library = ffi.Library,
    Type = ref.Type,
    VoidT = ref.types.VoidT,
    NULL = ref.NULL;


module.exports = lookup;


var groups = ['libs', 'types', 'structs', 'callbacks', 'enums'];
var data = {};


groups.forEach(function(name){
  data[name] = {};
});

var types = data.types = ref.types;

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


// #############
// ### EnumT ###
// #############

function EnumT(name, values){
  var self = EnumT.typedef(name);
  data.enums[name] = self;

  decorate(self, true, {
    name: name,
    keys: new _,
    vals: new _,
  });

  Object.keys(values).forEach(function(key){
    self.keys[key] = values[key];
    self.vals[values[key]] = key;
  });

  return self;
}
var int = types.int;

EnumT.__proto__ = int;

decorate(EnumT, true, [
  function initialize(instance, offset, value){
    if (arguments.length === 1) {
      return int.initialize(instance, 0, 0);
    } else if (arguments.length === 2) {
      value = offset;
      offset = 0;
    }
    if (value in this.keys) {
      return int.initialize(instance, offset, this.keys[value]);
    } else if (value in this.vals) {
      return int.initialize(instance, offset, value);
    } else {
      throw new Error('Invalid arguments for enum "'+this.name+'"" type: '+ JSON.stringify(value));
    }
  },
  function get(buf, offset){
    var val = int.get(buf, offset);
    return val in this.vals ? this.vals[val] : val;
  },
  function set(buf, offset, val){
    if (val in this.keys) {
      val = this.keys[val];
    }
    return int.set(buf, offset, val);
  },
  function toKey(v){
    return v in this.keys ? v : this.vals[v];
  },
  function toValue(v){
    return v in this.vals ? v : this.keys[v];
  },
]);

inherit(EnumT, int, [
  function inspect(){
    return '<'+this._type.name+'@0x'+this.address().toString(16)+' '+this.lval()+'>';
  }
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

