var ffi = require('ffi');

var
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
 voidΔ = ffi.types.voidΔ,
 FFI_TYPEΔ = ffi.types.FFI_TYPEΔ,
 intΔ = ffi.types.intΔ,
 charΔΔ = ffi.types.charΔΔ;



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
 return exports.functions[name] = new ffi.ForeignFunction(name, 'NtRegistry', ret, params);
}


function DEF(name, ffiType, type){
  return ffiType;
}

var
 ULONG = int.typedef('ULONG'),
 USHORT = int.typedef('USHORT'),
 NTSTATUS = int.typedef('NTSTATUS'),
 DWORD = ulong.typedef('DWORD'),
 WCHAR = ushort.typedef('WCHAR');

var KEY_INFORMATION_CLASS = new EnumT('KEY_INFORMATION_CLASS', {
 BasicInformation: 0,
 NodeInformation: 1,
 FullInformation: 2,
 NameInformation: 3
});

var KEY_SET_INFORMATION_CLASS = new EnumT('KEY_SET_INFORMATION_CLASS', {
 WriteTimeInformation: 0
});

var KEY_VALUE_INFORMATION_CLASS = new EnumT('KEY_VALUE_INFORMATION_CLASS', {
 BasicInformation: 0,
 FullInformation: 1,
 PartialInformation: 2
});


  LPLSACREATEACCOUNT = new CallbackT('LPLSACREATEACCOUNT', int, [_void.Δ, _void.Δ, int, _void.Δ.Δ]),
  LPLSAOPENACCOUNT = new CallbackT('LPLSAOPENACCOUNT', int, [_void.Δ, _void.Δ, int, _void.Δ.Δ]),
  LPLSALOOKUPPRIVILEGEVALUE = new CallbackT('LPLSALOOKUPPRIVILEGEVALUE', int, [_void.Δ, _UNICODE_STRING, _LUID]),
  LPLSAGETSYSTEMACCESSACCOUNT = new CallbackT('LPLSAGETSYSTEMACCESSACCOUNT', int, [_void.Δ, int.Δ]),
  LPLSASETSYSTEMACCESSACCOUNT = new CallbackT('LPLSASETSYSTEMACCESSACCOUNT', int, [_void.Δ, int]),
  LPLSAADDPRIVILEGESTOACCOUNT = new CallbackT('LPLSAADDPRIVILEGESTOACCOUNT', int, [_void.Δ, _PRIVILEGE_SET]),
  LPLSAREMOVEPRIVILEGESFROMACCOUNT = new CallbackT('LPLSAREMOVEPRIVILEGESFROMACCOUNT', int, [_void.Δ, _PRIVILEGE_SET, uchar]),

var UNICODE_STRING = new StructT('UNICODE_STRING', {
 Length: USHORT,
 MaximumLength: USHORT,
 Buffer: int
});

var ANSI_STRING = new StructT('ANSI_STRING', {
 Length: USHORT,
 MaximumLength: USHORT,
 Buffer: int
});

var KEY_BASIC_INFORMATION = new StructT('KEY_BASIC_INFORMATION', {
 LastWriteTime: int,
 TitleIndex: ULONG,
 NameLength: ULONG,
 Name: ARRAY(undefined, undefined)
});

var KEY_FULL_INFORMATION = new StructT('KEY_FULL_INFORMATION', {
 LastWriteTime: int,
 TitleIndex: ULONG,
 ClassOffset: ULONG,
 ClassLength: ULONG,
 SubKeys: ULONG,
 MaxNameLen: ULONG,
 MaxClassLen: ULONG,
 Values: ULONG,
 MaxValueNameLen: ULONG,
 MaxValueDataLen: ULONG,
 Class: ARRAY(undefined, undefined)
});

var KEY_NODE_INFORMATION = new StructT('KEY_NODE_INFORMATION', {
 LastWriteTime: int,
 TitleIndex: ULONG,
 ClassOffset: ULONG,
 ClassLength: ULONG,
 NameLength: ULONG,
 Name: ARRAY(undefined, undefined)
});

var KEY_NAME_INFORMATION = new StructT('KEY_NAME_INFORMATION', {
 NameLength: ULONG,
 Name: ARRAY(undefined, undefined)
});

var KEY_WRITE_TIME_INFORMATION = new StructT('KEY_WRITE_TIME_INFORMATION', {
 LastWriteTime: int
});

var KEY_VALUE_BASIC_INFORMATION = new StructT('KEY_VALUE_BASIC_INFORMATION', {
 TitleIndex: ULONG,
 Type: ULONG,
 NameLength: ULONG,
 Name: ARRAY(undefined, undefined)
});

var KEY_VALUE_FULL_INFORMATION = new StructT('KEY_VALUE_FULL_INFORMATION', {
 TitleIndex: ULONG,
 Type: ULONG,
 DataOffset: ULONG,
 DataLength: ULONG,
 NameLength: ULONG,
 Name: ARRAY(undefined, undefined)
});

var KEY_VALUE_PARTIAL_INFORMATION = new StructT('KEY_VALUE_PARTIAL_INFORMATION', {
 TitleIndex: ULONG,
 Type: ULONG,
 DataLength: ULONG,
 Data: ARRAY(undefined, undefined)
});

var KEY_VALUE_ENTRY = new StructT('KEY_VALUE_ENTRY', {
 ValueName: PUNICODE_STRING,
 DataLength: ULONG,
 DataOffset: ULONG,
 Type: ULONG
});

var KEY_MULTIPLE_VALUE_INFORMATION = new StructT('KEY_MULTIPLE_VALUE_INFORMATION', {
 ValueName: PUNICODE_STRING,
 DataLength: ULONG,
 DataOffset: ULONG,
 Type: ULONG
});

var IO_STATUS_BLOCK = new StructT('IO_STATUS_BLOCK', {
 Information: int
});

var CLIENT_ID = new StructT('CLIENT_ID', {
 UniqueProcess: int,
 UniqueThread: int
});

var OBJECT_ATTRIBUTES = new StructT('OBJECT_ATTRIBUTES', {
 Length: ULONG,
 RootDirectory: int,
 ObjectName: PUNICODE_STRING,
 Attributes: ULONG,
 SecurityDescriptor: int,
 SecurityQualityOfService: int
});

var VALUE_DATA = new StructT('VALUE_DATA', {
 szName: char.Δ,
 nNameLen: int,
 wszName: ushort.Δ,
 usNameLen: USHORT,
 dwType: DWORD,
 szData: uchar.Δ,
 usDataLen: USHORT
});

var KEY_DATA = new StructT('KEY_DATA', {
 hKey: HKEY,
 csRootKey: int,
 csSubKey: int,
 wszRootKey: ARRAY(WCHAR, 256),
 usRootLen: USHORT,
 wszSubKey: ARRAY(WCHAR, 1024),
 usSubKeyLen: USHORT,
 nNULLCount: int,
 pValueData: _VALUE_DATA
});


