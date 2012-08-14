var ffi = require('ffi'),
    ref = require('ref');


module.exports = Type;

function Type(name, size, indirection, get, set){
  var Ctor = Type.typedef(name, this);
  Ctor.prototype.type = {
    indirection: indirection,
    name: name,
    size: size,
    get: get,
    set: set
  };
  if (!(name in ref.types)) {
    ref.types[name] = Ctor.prototype.type;
  }
  return Ctor;
}

Type.typedef = function typedef(name, prototype){
  if (name === 'void') {
    name = 'voi\\u0064';
  }
  var Ctor = new Function('alloc', 'return function '+name+'(val){ alloc(this, val) }')(alloc);
  Ctor.__proto__ = this;
  Ctor.prototype = prototype || Object.create(this.prototype);
  Ctor.prototype.constructor = Ctor;
  if (!(prototype || name in ref.types)) {
    Ctor.prototype.type = ref.types[name] = Object.create(this.prototype.type);
    Ctor.prototype.type.name = name;
  }
  return Ctor;
};

Type.prototype = Object.create(Buffer.prototype);
Type.prototype.constructor = Type;
Type.prototype.name = 'Type';

function alloc(buffer, value) {
  Buffer.call(buffer, buffer.type.indirection === 1 ? buffer.type.size : ref.sizeof.pointer);
  if (value !== undefined) {
    ref.set(buffer, 0, value, buffer.type);
  }
}

function from(type){
  var Ctor = new Type(type.name, type.size, type.indirection, type.get, type.set);
  if (type.alignment) {
    Ctor.prototype.type.alignment = type.alignment;
  }
  if (type.ffi_type) {
    Ctor.prototype.type.ffi_type = type.ffi_type;
  }
  return Ctor;
}

ref.coerceType = function(coerce){
  return function coerceType(type){
    if (typeof type === 'function' && type.name !== 'StructType') {
      type = type.name;
    }
    return coerce(type);
  };
}(ref.coerceType);




ffi.types.void = from(ffi.types.void);
ffi.types.bool = from(ffi.types.bool);
ffi.types.int8 = from(ffi.types.int8);
ffi.types.uint8 = from(ffi.types.uint8);
ffi.types.int16 = from(ffi.types.int16);
ffi.types.uint16 = from(ffi.types.uint16);
ffi.types.int32 = from(ffi.types.int32);
ffi.types.uint32 = from(ffi.types.uint32);
ffi.types.int64 = from(ffi.types.int64);
ffi.types.uint64 = from(ffi.types.uint64);
ffi.types.float = from(ffi.types.float);
ffi.types.double = from(ffi.types.double);
ffi.types.byte = from(ffi.types.byte);
ffi.types.char = from(ffi.types.char);
ffi.types.uchar = from(ffi.types.uchar);
ffi.types.short = from(ffi.types.short);
ffi.types.ushort = from(ffi.types.ushort);
ffi.types.int = from(ffi.types.int);
ffi.types.uint = from(ffi.types.uint);
ffi.types.long = from(ffi.types.long);
ffi.types.ulong = from(ffi.types.ulong);
ffi.types.longlong = from(ffi.types.longlong);
ffi.types.ulonglong = from(ffi.types.ulonglong);
ffi.types.size_t = from(ffi.types.size_t);
ffi.types.CString = from(ffi.types.CString);
ffi.types.Object = from(ffi.types.Object);

