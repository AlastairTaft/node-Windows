var api = require('windows/api');

var
 CallbackT = api.CallbackT,
 StructT = api.StructT,
 Library = api.Library,
 ArrayT = api.ArrayT,
 EnumT = api.EnumT,
 NULL = api.NULL

var
 _void     = api('void'),
 int8      = api('int8'),
 uint8     = api('uint8'),
 int16     = api('int16'),
 uint16    = api('uint16'),
 int32     = api('int32'),
 uint32    = api('uint32'),
 int64     = api('int64'),
 uint64    = api('uint64'),
 float     = api('float'),
 double    = api('double'),
 CString   = api('CString'),
 WString   = api('WString'),
 bool      = api('bool'),
 byte      = api('byte'),
 char      = api('char'),
 uchar     = api('uchar'),
 short     = api('short'),
 ushort    = api('ushort'),
 int       = api('int'),
 uint      = api('uint'),
 long      = api('long'),
 ulong     = api('ulong'),
 longlong  = api('longlong'),
 ulonglong = api('ulonglong'),
 size_t    = api('size_t'),
 charΔ     = api('charΔ'),
 voidΔ     = api('voidΔ'),
 intΔ      = api('intΔ'),
 NULL      = api('NULL'),
 VoidT     = api('VoidT');

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


