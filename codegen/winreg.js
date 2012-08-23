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
 ULONG = ulong.typedef('ULONG'),
 DWORD = ulong.typedef('DWORD'),
 BOOL = int.typedef('BOOL'),
 LPBYTE = uchar.Δ.typedef('LPBYTE'),
 LPDWORD = ulong.Δ.typedef('LPDWORD'),
 LPVOID = _void.Δ.typedef('LPVOID'),
 LPCVOID = _void.Δ.typedef('LPCVOID'),
 DWORD_PTR = ulong.typedef('DWORD_PTR'),
 PVOID = _void.Δ.typedef('PVOID'),
 LONG = long.typedef('LONG'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 LPSTR = char.Δ.typedef('LPSTR'),
 LPCSTR = char.Δ.typedef('LPCSTR'),
 PLONG = long.Δ.typedef('PLONG'),
 HANDLE = _void.Δ.typedef('HANDLE'),
 PSECURITY_DESCRIPTOR = _void.Δ.typedef('PSECURITY_DESCRIPTOR'),
 SECURITY_INFORMATION = ulong.typedef('SECURITY_INFORMATION'),
 REGSAM = ulong.typedef('REGSAM'),
 LSTATUS = long.typedef('LSTATUS');



  PQUERYHANDLER = new CallbackT('PQUERYHANDLER', ulong, [_void.Δ, val_context.Δ, ulong, _void.Δ, ulong.Δ, ulong]),

var val_context = new StructT('val_context', {
 valuelen: int,
 value_context: LPVOID,
 val_buff_ptr: LPVOID
});

var PVALUE = new StructT('PVALUE', {
 pv_valuename: LPSTR,
 pv_valuelen: int,
 pv_value_context: LPVOID,
 pv_type: DWORD
});

var PVALUEW = new StructT('PVALUEW', {
 pv_valuename: LPWSTR,
 pv_valuelen: int,
 pv_value_context: LPVOID,
 pv_type: DWORD
});

var REG_PROVIDER = new StructT('REG_PROVIDER', {
 pi_R0_1val: PQUERYHANDLER,
 pi_R0_allvals: PQUERYHANDLER,
 pi_R3_1val: PQUERYHANDLER,
 pi_R3_allvals: PQUERYHANDLER,
 pi_flags: DWORD,
 pi_key_context: LPVOID
});

var VALENT = new StructT('VALENT', {
 ve_valuename: LPSTR,
 ve_valuelen: DWORD,
 ve_valueptr: DWORD_PTR,
 ve_type: DWORD
});

var VALENTW = new StructT('VALENTW', {
 ve_valuename: LPWSTR,
 ve_valuelen: DWORD,
 ve_valueptr: DWORD_PTR,
 ve_type: DWORD
});

  RegCloseKey: [ LSTATUS, { hKey: HKEY } ],
  RegConnectRegistryA: [ LSTATUS, { lpMachineName: LPCSTR, hKey: HKEY, phkResult: PHKEY } ],
  RegConnectRegistryExA: [ LSTATUS, { lpMachineName: LPCSTR, hKey: HKEY, Flags: ULONG, phkResult: PHKEY } ],
  RegConnectRegistryExW: [ LSTATUS, { lpMachineName: LPCWSTR, hKey: HKEY, Flags: ULONG, phkResult: PHKEY } ],
  RegConnectRegistryW: [ LSTATUS, { lpMachineName: LPCWSTR, hKey: HKEY, phkResult: PHKEY } ],
  RegCopyTreeA: [ LSTATUS, { hKeySrc: HKEY, lpSubKey: LPCSTR, hKeyDest: HKEY } ],
  RegCopyTreeW: [ LSTATUS, { hKeySrc: HKEY, lpSubKey: LPCWSTR, hKeyDest: HKEY } ],
  RegCreateKeyA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, phkResult: PHKEY } ],
  RegCreateKeyExA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, Reserved: DWORD, lpClass: LPSTR, dwOptions: DWORD, samDesired: REGSAM, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, phkResult: PHKEY, lpdwDisposition: LPDWORD } ],
  RegCreateKeyExW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, Reserved: DWORD, lpClass: LPWSTR, dwOptions: DWORD, samDesired: REGSAM, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, phkResult: PHKEY, lpdwDisposition: LPDWORD } ],
  RegCreateKeyTransactedA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, Reserved: DWORD, lpClass: LPSTR, dwOptions: DWORD, samDesired: REGSAM, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, phkResult: PHKEY, lpdwDisposition: LPDWORD, hTransaction: HANDLE, pExtendedParemeter: PVOID } ],
  RegCreateKeyTransactedW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, Reserved: DWORD, lpClass: LPWSTR, dwOptions: DWORD, samDesired: REGSAM, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, phkResult: PHKEY, lpdwDisposition: LPDWORD, hTransaction: HANDLE, pExtendedParemeter: PVOID } ],
  RegCreateKeyW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, phkResult: PHKEY } ],
  RegDeleteKeyA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR } ],
  RegDeleteKeyExA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, samDesired: REGSAM, Reserved: DWORD } ],
  RegDeleteKeyExW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, samDesired: REGSAM, Reserved: DWORD } ],
  RegDeleteKeyTransactedA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, samDesired: REGSAM, Reserved: DWORD, hTransaction: HANDLE, pExtendedParameter: PVOID } ],
  RegDeleteKeyTransactedW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, samDesired: REGSAM, Reserved: DWORD, hTransaction: HANDLE, pExtendedParameter: PVOID } ],
  RegDeleteKeyValueA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, lpValueName: LPCSTR } ],
  RegDeleteKeyValueW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, lpValueName: LPCWSTR } ],
  RegDeleteKeyW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR } ],
  RegDeleteTreeA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR } ],
  RegDeleteTreeW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR } ],
  RegDeleteValueA: [ LSTATUS, { hKey: HKEY, lpValueName: LPCSTR } ],
  RegDeleteValueW: [ LSTATUS, { hKey: HKEY, lpValueName: LPCWSTR } ],
  RegDisablePredefinedCache: [ LSTATUS, {  } ],
  RegDisablePredefinedCacheEx: [ LSTATUS, {  } ],
  RegDisableReflectionKey: [ LONG, { hBase: HKEY } ],
  RegEnableReflectionKey: [ LONG, { hBase: HKEY } ],
  RegEnumKeyA: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPSTR, cchName: DWORD } ],
  RegEnumKeyExA: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPSTR, lpcchName: LPDWORD, lpReserved: LPDWORD, lpClass: LPSTR, lpcchClass: LPDWORD, lpftLastWriteTime: PFILETIME } ],
  RegEnumKeyExW: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPWSTR, lpcchName: LPDWORD, lpReserved: LPDWORD, lpClass: LPWSTR, lpcchClass: LPDWORD, lpftLastWriteTime: PFILETIME } ],
  RegEnumKeyW: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPWSTR, cchName: DWORD } ],
  RegEnumValueA: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpValueName: LPSTR, lpcchValueName: LPDWORD, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD } ],
  RegEnumValueW: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpValueName: LPWSTR, lpcchValueName: LPDWORD, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD } ],
  RegFlushKey: [ LSTATUS, { hKey: HKEY } ],
  RegGetKeySecurity: [ LSTATUS, { hKey: HKEY, SecurityInformation: SECURITY_INFORMATION, pSecurityDescriptor: PSECURITY_DESCRIPTOR, lpcbSecurityDescriptor: LPDWORD } ],
  RegGetValueA: [ LSTATUS, { hkey: HKEY, lpSubKey: LPCSTR, lpValue: LPCSTR, dwFlags: DWORD, pdwType: LPDWORD, pvData: PVOID, pcbData: LPDWORD } ],
  RegGetValueW: [ LSTATUS, { hkey: HKEY, lpSubKey: LPCWSTR, lpValue: LPCWSTR, dwFlags: DWORD, pdwType: LPDWORD, pvData: PVOID, pcbData: LPDWORD } ],
  RegLoadAppKeyA: [ LSTATUS, { lpFile: LPCSTR, phkResult: PHKEY, samDesired: REGSAM, dwOptions: DWORD, Reserved: DWORD } ],
  RegLoadAppKeyW: [ LSTATUS, { lpFile: LPCWSTR, phkResult: PHKEY, samDesired: REGSAM, dwOptions: DWORD, Reserved: DWORD } ],
  RegLoadKeyA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, lpFile: LPCSTR } ],
  RegLoadKeyW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, lpFile: LPCWSTR } ],
  RegLoadMUIStringA: [ LSTATUS, { hKey: HKEY, pszValue: LPCSTR, pszOutBuf: LPSTR, cbOutBuf: DWORD, pcbData: LPDWORD, Flags: DWORD, pszDirectory: LPCSTR } ],
  RegLoadMUIStringW: [ LSTATUS, { hKey: HKEY, pszValue: LPCWSTR, pszOutBuf: LPWSTR, cbOutBuf: DWORD, pcbData: LPDWORD, Flags: DWORD, pszDirectory: LPCWSTR } ],
  RegNotifyChangeKeyValue: [ LSTATUS, { hKey: HKEY, bWatchSubtree: BOOL, dwNotifyFilter: DWORD, hEvent: HANDLE, fAsynchronous: BOOL } ],
  RegOpenCurrentUser: [ LSTATUS, { samDesired: REGSAM, phkResult: PHKEY } ],
  RegOpenKeyA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, phkResult: PHKEY } ],
  RegOpenKeyExA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, ulOptions: DWORD, samDesired: REGSAM, phkResult: PHKEY } ],
  RegOpenKeyExW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, ulOptions: DWORD, samDesired: REGSAM, phkResult: PHKEY } ],
  RegOpenKeyTransactedA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, ulOptions: DWORD, samDesired: REGSAM, phkResult: PHKEY, hTransaction: HANDLE, pExtendedParemeter: PVOID } ],
  RegOpenKeyTransactedW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, ulOptions: DWORD, samDesired: REGSAM, phkResult: PHKEY, hTransaction: HANDLE, pExtendedParemeter: PVOID } ],
  RegOpenKeyW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, phkResult: PHKEY } ],
  RegOpenUserClassesRoot: [ LSTATUS, { hToken: HANDLE, dwOptions: DWORD, samDesired: REGSAM, phkResult: PHKEY } ],
  RegOverridePredefKey: [ LSTATUS, { hKey: HKEY, hNewHKey: HKEY } ],
  RegQueryInfoKeyA: [ LSTATUS, { hKey: HKEY, lpClass: LPSTR, lpcchClass: LPDWORD, lpReserved: LPDWORD, lpcSubKeys: LPDWORD, lpcbMaxSubKeyLen: LPDWORD, lpcbMaxClassLen: LPDWORD, lpcValues: LPDWORD, lpcbMaxValueNameLen: LPDWORD, lpcbMaxValueLen: LPDWORD, lpcbSecurityDescriptor: LPDWORD, lpftLastWriteTime: PFILETIME } ],
  RegQueryInfoKeyW: [ LSTATUS, { hKey: HKEY, lpClass: LPWSTR, lpcchClass: LPDWORD, lpReserved: LPDWORD, lpcSubKeys: LPDWORD, lpcbMaxSubKeyLen: LPDWORD, lpcbMaxClassLen: LPDWORD, lpcValues: LPDWORD, lpcbMaxValueNameLen: LPDWORD, lpcbMaxValueLen: LPDWORD, lpcbSecurityDescriptor: LPDWORD, lpftLastWriteTime: PFILETIME } ],
  RegQueryMultipleValuesA: [ LSTATUS, { hKey: HKEY, val_list: PVALENTA, num_vals: DWORD, lpValueBuf: LPSTR, ldwTotsize: LPDWORD } ],
  RegQueryMultipleValuesW: [ LSTATUS, { hKey: HKEY, val_list: PVALENTW, num_vals: DWORD, lpValueBuf: LPWSTR, ldwTotsize: LPDWORD } ],
  RegQueryReflectionKey: [ LONG, { hBase: HKEY, bIsReflectionDisabled: BOOL.Δ } ],
  RegQueryValueA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, lpData: LPSTR, lpcbData: PLONG } ],
  RegQueryValueExA: [ LSTATUS, { hKey: HKEY, lpValueName: LPCSTR, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD } ],
  RegQueryValueExW: [ LSTATUS, { hKey: HKEY, lpValueName: LPCWSTR, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD } ],
  RegQueryValueW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, lpData: LPWSTR, lpcbData: PLONG } ],
  RegRenameKey: [ LSTATUS, { hKey: HKEY, lpSubKeyName: LPCWSTR, lpNewKeyName: LPCWSTR } ],
  RegReplaceKeyA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, lpNewFile: LPCSTR, lpOldFile: LPCSTR } ],
  RegReplaceKeyW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, lpNewFile: LPCWSTR, lpOldFile: LPCWSTR } ],
  RegRestoreKeyA: [ LSTATUS, { hKey: HKEY, lpFile: LPCSTR, dwFlags: DWORD } ],
  RegRestoreKeyW: [ LSTATUS, { hKey: HKEY, lpFile: LPCWSTR, dwFlags: DWORD } ],
  RegSaveKeyA: [ LSTATUS, { hKey: HKEY, lpFile: LPCSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES } ],
  RegSaveKeyExA: [ LSTATUS, { hKey: HKEY, lpFile: LPCSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, Flags: DWORD } ],
  RegSaveKeyExW: [ LSTATUS, { hKey: HKEY, lpFile: LPCWSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES, Flags: DWORD } ],
  RegSaveKeyW: [ LSTATUS, { hKey: HKEY, lpFile: LPCWSTR, lpSecurityAttributes: LPSECURITY_ATTRIBUTES } ],
  RegSetKeySecurity: [ LSTATUS, { hKey: HKEY, SecurityInformation: SECURITY_INFORMATION, pSecurityDescriptor: PSECURITY_DESCRIPTOR } ],
  RegSetKeyValueA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, lpValueName: LPCSTR, dwType: DWORD, lpData: LPCVOID, cbData: DWORD } ],
  RegSetKeyValueW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, lpValueName: LPCWSTR, dwType: DWORD, lpData: LPCVOID, cbData: DWORD } ],
  RegSetValueA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR, dwType: DWORD, lpData: LPCSTR, cbData: DWORD } ],
  RegSetValueExA: [ LSTATUS, { hKey: HKEY, lpValueName: LPCSTR, Reserved: DWORD, dwType: DWORD, lpData: BYTE.Δ, cbData: DWORD } ],
  RegSetValueExW: [ LSTATUS, { hKey: HKEY, lpValueName: LPCWSTR, Reserved: DWORD, dwType: DWORD, lpData: BYTE.Δ, cbData: DWORD } ],
  RegSetValueW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR, dwType: DWORD, lpData: LPCWSTR, cbData: DWORD } ],
  RegUnLoadKeyA: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCSTR } ],
  RegUnLoadKeyW: [ LSTATUS, { hKey: HKEY, lpSubKey: LPCWSTR } ],
