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
 BOOL = int.typedef('BOOL'),
 BYTE = uchar.typedef('BYTE'),
 UINT = uint.typedef('UINT'),
 UINT_PTR = uint.typedef('UINT_PTR'),
 PUINT_PTR = uint.Δ.typedef('PUINT_PTR'),
 LPARAM = long.typedef('LPARAM');





var DDEACK = new StructT('DDEACK', {
 bAppReturnCode: ushort,
 reserved: ushort,
 fBusy: ushort,
 fAck: ushort
});

var DDEADVISE = new StructT('DDEADVISE', {
 reserved: ushort,
 fDeferUpd: ushort,
 fAckReq: ushort,
 cfFormat: short
});

var DDEDATA = new StructT('DDEDATA', {
 unused: ushort,
 fResponse: ushort,
 fRelease: ushort,
 reserved: ushort,
 fAckReq: ushort,
 cfFormat: short,
 Value: ARRAY(BYTE, 1)
});

var DDEPOKE = new StructT('DDEPOKE', {
 unused: ushort,
 fRelease: ushort,
 fReserved: ushort,
 cfFormat: short,
 Value: ARRAY(BYTE, 1)
});

var DDELN = new StructT('DDELN', {
 unused: ushort,
 fRelease: ushort,
 fDeferUpd: ushort,
 fAckReq: ushort,
 cfFormat: short
});

var DDEUP = new StructT('DDEUP', {
 unused: ushort,
 fAck: ushort,
 fRelease: ushort,
 fReserved: ushort,
 fAckReq: ushort,
 cfFormat: short,
 rgb: ARRAY(BYTE, 1)
});


  DdeSetQualityOfService: [ BOOL, { hwndClient: HWND, pqosNew: SECURITY_QUALITY_OF_SERVICE.Δ, pqosPrev: PSECURITY_QUALITY_OF_SERVICE } ],
  ImpersonateDdeClientWindow: [ BOOL, { hWndClient: HWND, hWndServer: HWND } ],
  PackDDElParam: [ LPARAM, { msg: UINT, uiLo: UINT_PTR, uiHi: UINT_PTR } ],
  UnpackDDElParam: [ BOOL, { msg: UINT, lParam: LPARAM, puiLo: PUINT_PTR, puiHi: PUINT_PTR } ],
  FreeDDElParam: [ BOOL, { msg: UINT, lParam: LPARAM } ],
  ReuseDDElParam: [ LPARAM, { lParam: LPARAM, msgIn: UINT, msgOut: UINT, uiLo: UINT_PTR, uiHi: UINT_PTR } ],