var ffi = require('ffi');

var
 voi\u0064 = ffi.types.voi\u0064,
 _void = ffi.types.void,
 int8 = ffi.types.int8,
 uint8 = ffi.types.uint8,
 int16 = ffi.types.int16,
 uint16 = ffi.types.uint16,
 int32 = ffi.types.int32,
 uint32 = ffi.types.uint32,
 int64 = ffi.types.int64,
 uint64 = ffi.types.uint64,
 float = ffi.types.float,
 double = ffi.types.double,
 CString = ffi.types.CString,
 WString = ffi.types.WString,
 bool = ffi.types.bool,
 byte = ffi.types.byte,
 char = ffi.types.char,
 uchar = ffi.types.uchar,
 short = ffi.types.short,
 ushort = ffi.types.ushort,
 int = ffi.types.int,
 uint = ffi.types.uint,
 long = ffi.types.long,
 ulong = ffi.types.ulong,
 longlong = ffi.types.longlong,
 ulonglong = ffi.types.ulonglong,
 size_t = ffi.types.size_t,
 charΔ = ffi.types.charΔ,
 wchar = ffi.types.wchar,
 wcharΔ = ffi.types.wcharΔ,
 voidΔ = ffi.types.voidΔ,
 FFI_TYPEΔ = ffi.types.FFI_TYPEΔ,
 intΔ = ffi.types.intΔ,
 CStringΔ = ffi.types.CStringΔ;



data.enums = {};
data.callbacks = {};
data.structs = {};
data.functions = {};


function ENUM(name, def){
 return data.enums[name] = new Enum(name, def);
}

function CallbackT(ret, params){}

function STRUCT(name, def){
 return data.structs[name] = new Struct(name, def);
}

function FUNCTION(name, ret, params){
 return exports.functions[name] = new ffi.ForeignFunction(name, 'windows', ret, params);
}


function DEF(name, ffiType, type){
  return ffiType;
}

var
 WORD = ushort.typedef('WORD'),
 INT = int.typedef('INT'),
 LONG = long.typedef('LONG'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPSTR = char.Δ.typedef('LPSTR');







  LZStart: [ INT, {  } ],
  LZDone: [ _void, {  } ],
  CopyLZFile: [ LONG, { hfSource: INT, hfDest: INT } ],
  LZCopy: [ LONG, { hfSource: INT, hfDest: INT } ],
  LZInit: [ INT, { hfSource: INT } ],
  GetExpandedNameA: [ INT, { lpszSource: LPSTR, lpszBuffer: LPSTR } ],
  GetExpandedNameW: [ INT, { lpszSource: LPWSTR, lpszBuffer: LPWSTR } ],
  LZOpenFileA: [ INT, { lpFileName: LPSTR, lpReOpenBuf: LPOFSTRUCT, wStyle: WORD } ],
  LZOpenFileW: [ INT, { lpFileName: LPWSTR, lpReOpenBuf: LPOFSTRUCT, wStyle: WORD } ],
  LZSeek: [ LONG, { hFile: INT, lOffset: LONG, iOrigin: INT } ],
  LZRead: [ INT, { hFile: INT, lpBuffer: CHAR.Δ, cbRead: INT } ],
  LZClose: [ _void, { hFile: INT } ],