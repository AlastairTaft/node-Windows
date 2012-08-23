var ffi = require('ffi'),
    ref = require('ref'),
    BitfieldT = require('./BitfieldType');

var decorate = require('./utils').decorate,
    inherit = require('./utils').inherit;

var Library = ffi.Library,
    StructT = ffi.StructT,
    Type = ref.Type,
    NULL = ref.NULL;


module.exports = lookup;


var groups = ['libs', 'types', 'structs', 'callbacks', 'enums'];
var data = {};


groups.forEach(function(name){
  data[name] = {};
});

var types = data.types = ref.types;




function ArrayT(type, length){
  var fields = {};
  Array.apply(null, new Array(length)).forEach(function(x, i){
    fields[i] = type;
  });
  return new StructT(data.name+'x'+length, fields);
}

function _(){}
_.prototype = Object.create(null);


// #############
// ### EnumT ###
// #############

function EnumT(name, values){
  decorate(this, true, {
    name: name,
    _ : new _,
    _k: new Map,
    _v: new Map
  });
  var vals = [], keys = [];
  this._v.set(this._v, vals);
  this._k.set(this._k, keys);

  Object.keys(values).forEach(function(key){
    var val = values[key];
    keys.push(keys);
    vals.push(val);
    this[key] = val;
    this._[val] = key;
    this._k.set(key, val);
    this._v.set(val, key);
  }, this);
}

decorate(EnumT.prototype, false, {
  _type: types.int32,
}, [
  function toKey(v){
    return this._k.has(v) ? v : this._v.get(v);
  },
  function toValue(v){
    return this._v.has(v) ? v : this._k.get(v);
  },
  function getKeys(){
    return this._k.get(this._k);
  },
  function getValues(){
    return this._v.get(this._v);
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

