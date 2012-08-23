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
 DWORD = ulong.typedef('DWORD'),
 BOOL = int.typedef('BOOL'),
 WORD = ushort.typedef('WORD'),
 LPDWORD = ulong.Δ.typedef('LPDWORD'),
 LPVOID = _void.Δ.typedef('LPVOID'),
 ULONG_PTR = ulong.typedef('ULONG_PTR'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 LPSTR = char.Δ.typedef('LPSTR'),
 LPCSTR = char.Δ.typedef('LPCSTR'),
 HANDLE = _void.Δ.typedef('HANDLE');





var NETRESOURCE = new StructT('NETRESOURCE', {
 dwScope: DWORD,
 dwType: DWORD,
 dwDisplayType: DWORD,
 dwUsage: DWORD,
 lpLocalName: LPSTR,
 lpRemoteName: LPSTR,
 lpComment: LPSTR,
 lpProvider: LPSTR
});

var NETRESOURCEW = new StructT('NETRESOURCEW', {
 dwScope: DWORD,
 dwType: DWORD,
 dwDisplayType: DWORD,
 dwUsage: DWORD,
 lpLocalName: LPWSTR,
 lpRemoteName: LPWSTR,
 lpComment: LPWSTR,
 lpProvider: LPWSTR
});

var CONNECTDLGSTRUCT = new StructT('CONNECTDLGSTRUCT', {
 cbStructure: DWORD,
 hwndOwner: HWND,
 lpConnRes: LPNETRESOURCEA,
 dwFlags: DWORD,
 dwDevNum: DWORD
});

var CONNECTDLGSTRUCTW = new StructT('CONNECTDLGSTRUCTW', {
 cbStructure: DWORD,
 hwndOwner: HWND,
 lpConnRes: LPNETRESOURCEW,
 dwFlags: DWORD,
 dwDevNum: DWORD
});

var DISCDLGSTRUCT = new StructT('DISCDLGSTRUCT', {
 cbStructure: DWORD,
 hwndOwner: HWND,
 lpLocalName: LPSTR,
 lpRemoteName: LPSTR,
 dwFlags: DWORD
});

var DISCDLGSTRUCTW = new StructT('DISCDLGSTRUCTW', {
 cbStructure: DWORD,
 hwndOwner: HWND,
 lpLocalName: LPWSTR,
 lpRemoteName: LPWSTR,
 dwFlags: DWORD
});

var UNIVERSAL_NAME_INFO = new StructT('UNIVERSAL_NAME_INFO', {
 lpUniversalName: LPSTR
});

var UNIVERSAL_NAME_INFOW = new StructT('UNIVERSAL_NAME_INFOW', {
 lpUniversalName: LPWSTR
});

var REMOTE_NAME_INFO = new StructT('REMOTE_NAME_INFO', {
 lpUniversalName: LPSTR,
 lpConnectionName: LPSTR,
 lpRemainingPath: LPSTR
});

var REMOTE_NAME_INFOW = new StructT('REMOTE_NAME_INFOW', {
 lpUniversalName: LPWSTR,
 lpConnectionName: LPWSTR,
 lpRemainingPath: LPWSTR
});

var NETINFOSTRUCT = new StructT('NETINFOSTRUCT', {
 cbStructure: DWORD,
 dwProviderVersion: DWORD,
 dwStatus: DWORD,
 dwCharacteristics: DWORD,
 dwHandle: ULONG_PTR,
 wNetType: WORD,
 dwPrinters: DWORD,
 dwDrives: DWORD
});

var NETCONNECTINFOSTRUCT = new StructT('NETCONNECTINFOSTRUCT', {
 cbStructure: DWORD,
 dwFlags: DWORD,
 dwSpeed: DWORD,
 dwDelay: DWORD,
 dwOptDataSize: DWORD
});


  WNetAddConnectionA: [ DWORD, { lpRemoteName: LPCSTR, lpPassword: LPCSTR, lpLocalName: LPCSTR } ],
  WNetAddConnectionW: [ DWORD, { lpRemoteName: LPCWSTR, lpPassword: LPCWSTR, lpLocalName: LPCWSTR } ],
  WNetAddConnection2A: [ DWORD, { lpNetResource: LPNETRESOURCEA, lpPassword: LPCSTR, lpUserName: LPCSTR, dwFlags: DWORD } ],
  WNetAddConnection2W: [ DWORD, { lpNetResource: LPNETRESOURCEW, lpPassword: LPCWSTR, lpUserName: LPCWSTR, dwFlags: DWORD } ],
  WNetAddConnection3A: [ DWORD, { hwndOwner: HWND, lpNetResource: LPNETRESOURCEA, lpPassword: LPCSTR, lpUserName: LPCSTR, dwFlags: DWORD } ],
  WNetAddConnection3W: [ DWORD, { hwndOwner: HWND, lpNetResource: LPNETRESOURCEW, lpPassword: LPCWSTR, lpUserName: LPCWSTR, dwFlags: DWORD } ],
  WNetCancelConnectionA: [ DWORD, { lpName: LPCSTR, fForce: BOOL } ],
  WNetCancelConnectionW: [ DWORD, { lpName: LPCWSTR, fForce: BOOL } ],
  WNetCancelConnection2A: [ DWORD, { lpName: LPCSTR, dwFlags: DWORD, fForce: BOOL } ],
  WNetCancelConnection2W: [ DWORD, { lpName: LPCWSTR, dwFlags: DWORD, fForce: BOOL } ],
  WNetGetConnectionA: [ DWORD, { lpLocalName: LPCSTR, lpRemoteName: LPSTR, lpnLength: LPDWORD } ],
  WNetGetConnectionW: [ DWORD, { lpLocalName: LPCWSTR, lpRemoteName: LPWSTR, lpnLength: LPDWORD } ],
  WNetRestoreSingleConnectionW: [ DWORD, { hwndParent: HWND, lpDevice: LPCWSTR, fUseUI: BOOL } ],
  WNetUseConnectionA: [ DWORD, { hwndOwner: HWND, lpNetResource: LPNETRESOURCEA, lpPassword: LPCSTR, lpUserId: LPCSTR, dwFlags: DWORD, lpAccessName: LPSTR, lpBufferSize: LPDWORD, lpResult: LPDWORD } ],
  WNetUseConnectionW: [ DWORD, { hwndOwner: HWND, lpNetResource: LPNETRESOURCEW, lpPassword: LPCWSTR, lpUserId: LPCWSTR, dwFlags: DWORD, lpAccessName: LPWSTR, lpBufferSize: LPDWORD, lpResult: LPDWORD } ],
  WNetConnectionDialog: [ DWORD, { hwnd: HWND, dwType: DWORD } ],
  WNetDisconnectDialog: [ DWORD, { hwnd: HWND, dwType: DWORD } ],
  WNetConnectionDialog1A: [ DWORD, { lpConnDlgStruct: LPCONNECTDLGSTRUCTA } ],
  WNetConnectionDialog1W: [ DWORD, { lpConnDlgStruct: LPCONNECTDLGSTRUCTW } ],
  WNetDisconnectDialog1A: [ DWORD, { lpConnDlgStruct: LPDISCDLGSTRUCTA } ],
  WNetDisconnectDialog1W: [ DWORD, { lpConnDlgStruct: LPDISCDLGSTRUCTW } ],
  WNetOpenEnumA: [ DWORD, { dwScope: DWORD, dwType: DWORD, dwUsage: DWORD, lpNetResource: LPNETRESOURCEA, lphEnum: LPHANDLE } ],
  WNetOpenEnumW: [ DWORD, { dwScope: DWORD, dwType: DWORD, dwUsage: DWORD, lpNetResource: LPNETRESOURCEW, lphEnum: LPHANDLE } ],
  WNetEnumResourceA: [ DWORD, { hEnum: HANDLE, lpcCount: LPDWORD, lpBuffer: LPVOID, lpBufferSize: LPDWORD } ],
  WNetEnumResourceW: [ DWORD, { hEnum: HANDLE, lpcCount: LPDWORD, lpBuffer: LPVOID, lpBufferSize: LPDWORD } ],
  WNetCloseEnum: [ DWORD, { hEnum: HANDLE } ],
  WNetGetResourceParentA: [ DWORD, { lpNetResource: LPNETRESOURCEA, lpBuffer: LPVOID, lpcbBuffer: LPDWORD } ],
  WNetGetResourceParentW: [ DWORD, { lpNetResource: LPNETRESOURCEW, lpBuffer: LPVOID, lpcbBuffer: LPDWORD } ],
  WNetGetResourceInformationA: [ DWORD, { lpNetResource: LPNETRESOURCEA, lpBuffer: LPVOID, lpcbBuffer: LPDWORD, lplpSystem: LPSTR.Δ } ],
  WNetGetResourceInformationW: [ DWORD, { lpNetResource: LPNETRESOURCEW, lpBuffer: LPVOID, lpcbBuffer: LPDWORD, lplpSystem: LPWSTR.Δ } ],
  WNetGetUniversalNameA: [ DWORD, { lpLocalPath: LPCSTR, dwInfoLevel: DWORD, lpBuffer: LPVOID, lpBufferSize: LPDWORD } ],
  WNetGetUniversalNameW: [ DWORD, { lpLocalPath: LPCWSTR, dwInfoLevel: DWORD, lpBuffer: LPVOID, lpBufferSize: LPDWORD } ],
  WNetGetUserA: [ DWORD, { lpName: LPCSTR, lpUserName: LPSTR, lpnLength: LPDWORD } ],
  WNetGetUserW: [ DWORD, { lpName: LPCWSTR, lpUserName: LPWSTR, lpnLength: LPDWORD } ],
  WNetGetProviderNameA: [ DWORD, { dwNetType: DWORD, lpProviderName: LPSTR, lpBufferSize: LPDWORD } ],
  WNetGetProviderNameW: [ DWORD, { dwNetType: DWORD, lpProviderName: LPWSTR, lpBufferSize: LPDWORD } ],
  WNetGetNetworkInformationA: [ DWORD, { lpProvider: LPCSTR, lpNetInfoStruct: LPNETINFOSTRUCT } ],
  WNetGetNetworkInformationW: [ DWORD, { lpProvider: LPCWSTR, lpNetInfoStruct: LPNETINFOSTRUCT } ],
  WNetGetLastErrorA: [ DWORD, { lpError: LPDWORD, lpErrorBuf: LPSTR, nErrorBufSize: DWORD, lpNameBuf: LPSTR, nNameBufSize: DWORD } ],
  WNetGetLastErrorW: [ DWORD, { lpError: LPDWORD, lpErrorBuf: LPWSTR, nErrorBufSize: DWORD, lpNameBuf: LPWSTR, nNameBufSize: DWORD } ],
  MultinetGetConnectionPerformanceA: [ DWORD, { lpNetResource: LPNETRESOURCEA, lpNetConnectInfoStruct: LPNETCONNECTINFOSTRUCT } ],
  MultinetGetConnectionPerformanceW: [ DWORD, { lpNetResource: LPNETRESOURCEW, lpNetConnectInfoStruct: LPNETCONNECTINFOSTRUCT } ],