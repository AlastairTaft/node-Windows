var ffi = require('ffi'),
    ref = require('ref'),
    Struct = require('ref-struct'),
    Library = require('./Library'),
    NULL = ref.NULL,
    isNull = ref.isNull;

var ReferenceType = require('./ReferenceType'),
    BitfieldType = require('./BitfieldType');

var libs = {};

var
 Void = ffi.types.void,
 bool = ffi.types.bool,
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
 size_t = ffi.types.size_t;


function PTR(type){
  return ref.refType(type);
}

function TYPEDEF(name, type){
  type = Object.create(type);
  type.name = name;
  return type;
}

function CALLBACK(name, ret, args){
  return new Function('cb', 'ret', 'args', 'return function '+name+'(f){ return cb(ret, args, f) }')(ffi.Callback, ret, args);
}


function FUNCTION(lib, name, ret, args){
  lib = lib in libs ? libs[lib] : (libs[lib] = new ffi.DynamicLibrary(lib));
  var params = [];
  var types = Object.keys(args).map(function(key){
    params.push(key);
    return args[key];
  });
  var func = new ffi.ForeignFunction(lib.get(name), ret, types);
  func.params = params;
  return func;
}

function STRUCT(name, fields){
  var struct = new Struct(fields);
  struct.label = name;
  return struct;
}

function ENUM(name, values){
  var enumeration = new Enumeration(values);
  enumeration.name = name;
  return enumeration;
}

function REF(o){
  var buff = new Buffer(ref.sizeof.Object);
  ref.writeObject(buff, 0, o);
  return buff;
}

function DEREF(buff){
  return ref.readObject(buff);
}


function Enumeration(values){
  this._keys = new Map;
  this._values = new Map;
  Object.keys(values).forEach(function(key){
    this._keys.set(key, values[key]);
    this._values.set(values[key], key);
    this[key] = values[key];
  }, this);
}

Enumeration.prototype.toKey = function toKey(v){
  if (this._keys.has(v)) {
    return v;
  } else {
    return this._values.get(v);
  }
};

Enumeration.prototype.toValue = function toValue(v){
  if (this._values.has(v)) {
    return v;
  } else {
    return this._keys.get(v);
  }
};





var GA = ENUM('GA', {
  PARENT: 1,
  ROOT: 2,
  ROOT_OWNER: 3
});

var STATE_SYSTEM = ENUM('STATE_SYSTEM', {
  UNAVAILABLE     : 0x00000001,
  SELECTED        : 0x00000002,
  FOCUSED         : 0x00000004,
  PRESSED         : 0x00000008,
  CHECKED         : 0x00000010,
  MIXED           : 0x00000020,
  READONLY        : 0x00000040,
  HOTTRACKED      : 0x00000080,
  DEFAULT         : 0x00000100,
  EXPANDED        : 0x00000200,
  COLLAPSED       : 0x00000400,
  BUSY            : 0x00000800,
  FLOATING        : 0x00001000,
  MARQUEED        : 0x00002000,
  ANIMATED        : 0x00004000,
  INVISIBLE       : 0x00008000,
  OFFSCREEN       : 0x00010000,
  SIZEABLE        : 0x00020000,
  MOVEABLE        : 0x00040000,
  SELFVOICING     : 0x00080000,
  FOCUSABLE       : 0x00100000,
  SELECTABLE      : 0x00200000,
  LINKED          : 0x00400000,
  TRAVERSED       : 0x00800000,
  MULTISELECTABLE : 0x01000000,
  EXTSELECTABLE   : 0x02000000,
  ALERT_LOW       : 0x04000000,
  ALERT_MEDIUM    : 0x08000000,
  ALERT_HIGH      : 0x10000000,
  PROTECTED       : 0x20000000,
  VALID           : 0x3FFFFFFF,
}
);

var REG = ENUM('REG', {
  NONE                       : 0,
  SZ                         : 1,
  EXPAND_SZ                  : 2,
  BINARY                     : 3,
  DWORD                      : 4,
  DWORD_BIG_ENDIAN           : 5,
  LINK                       : 6,
  MULTI_SZ                   : 7,
  RESOURCE_LIST              : 8,
  FULL_RESOURCE_DESCRIPTOR   : 9,
  RESOURCE_REQUIREMENTS_LIST : 10,
  QWORD                      : 11,
});



var VOIDPTR = PTR(Void),
    HANDLE = TYPEDEF('HANDLE', VOIDPTR),
    HKEY = TYPEDEF('HKEY', PTR(uint64)),
    PHKEY = TYPEDEF('PHKEY', PTR(HKEY)),
    HWND = TYPEDEF('HWND', long),
    BOOL = TYPEDEF('BOOL', bool),
    DWORD = TYPEDEF('DWORD', ulong),
    UINT = TYPEDEF('UINT', uint),
    LPARAM = TYPEDEF('LPARAM', VOIDPTR),
    LPCSTR = TYPEDEF('LPCSTR', PTR(int8)),
    LPSTR = TYPEDEF('LPSTR', PTR(int8)),
    LPCWSTR = TYPEDEF('LPCWSTR', PTR(ushort)),
    LPWSTR = TYPEDEF('LPWSTR', PTR(ushort)),
    LRESULT = TYPEDEF('LRESULT', VOIDPTR),
    WPARAM = TYPEDEF('WPARAM', uint),
    PDWORD_PTR = TYPEDEF('PDWORD_PTR', PTR(ulong)),
    ULONG_PTR = TYPEDEF('ULONG_PTR', PTR(ulong)),

    LPBYTE = TYPEDEF('LPBYTE', PTR(uchar)),
    LPDWORD = TYPEDEF('LPDWORD', PTR(ulong)),
    LPCVOID = TYPEDEF('LPCVOID', VOIDPTR),
    LPVOID = TYPEDEF('LPVOID', VOIDPTR),
    DWORD_PTR = TYPEDEF('DWORD_PTR', ulong),
    PVOID = TYPEDEF('PVOID', VOIDPTR),
    PLONG = TYPEDEF('PLONG', PTR(long)),
    PSECDESC = TYPEDEF('PSECDESC', VOIDPTR),
    SECINFO = TYPEDEF('SECINFO', ulong),
    REGSAM = TYPEDEF('REGSAM', ulong),
    LSTATUS = TYPEDEF('LSTATUS', long);


var RECT = STRUCT('RECT', {
  left: long,
  top: long,
  right: long,
  bottom: long
});

var TITLEBARINFO = STRUCT('TITLEBARINFO', {
  size: ulong,
  rect: RECT,
  state: ulong,
  reserved: ulong,
  minState: ulong,
  maxState: ulong,
  helpState: ulong,
  closeState: ulong
});

var FILETIME = STRUCT('FILETIME', {
  low: DWORD,
  high: DWORD
});


var val_context = STRUCT('val_context', {
  len: int,
  context: VOIDPTR,
  buff_ptr: VOIDPTR
});


var VALENTA = STRUCT('VALENTA', {
  name: LPSTR,
  len: DWORD,
  ptr: DWORD_PTR,
  type: DWORD
});

var VALENTW = STRUCT('VALENTW', {
  name: LPWSTR,
  len: DWORD,
  ptr: DWORD_PTR,
  type: DWORD
});

var SECATTRS = STRUCT('SECATTRS', {
  nLength: DWORD,
  lpSecDesc: VOIDPTR,
  bInheritHandle: bool
});

var LPSECATTRS = TYPEDEF('LPSECATTRS', PTR(SECATTRS)),
    PTITLEBARINFO = TYPEDEF('PTITLEBARINFO', PTR(TITLEBARINFO)),
    PFILETIME = TYPEDEF('PFILETIME', PTR(FILETIME));

var WindowEnumProc = CALLBACK('WNDENUMPROC', int, [HWND, VOIDPTR]);
var PQUERYHANDLER = CALLBACK('PQUERYHANDLER', ulong, [ VOIDPTR, PTR(val_context), ulong, VOIDPTR, LPDWORD, ulong]);
var SENDASYNCPROC = CALLBACK('SENDASYNCPROC', Void, [HWND, uint, ulong, long]);

var REG_PROVIDER = STRUCT('REG_PROVIDER', {
  R0_1val     : VOIDPTR, // PQUERYHANDLER,
  R0_allvals  : VOIDPTR, // PQUERYHANDLER,
  R3_1val     : VOIDPTR, // PQUERYHANDLER,
  R3_allvals  : VOIDPTR, // PQUERYHANDLER,
  flags       : DWORD,
  key_context : VOIDPTR
});



var user32 = new Library('user32', {
  SetWindowTextA:       [ bool, { hWnd: HWND, lpString: LPCSTR }],
  GetWindowTextA:       [ Void, { hWnd: HWND, lpString: LPSTR, nMaxCount: int }],
  IsWindowVisible:      [ bool, { hWnd: HWND }],
  EnumWindows:          [ bool, { enumFunc: VOIDPTR, lparam: LPARAM }],
  GetAncestor:          [ HWND, { hwnd: HWND, gaFlags: uint }],
  GetLastActivePopup:   [ HWND, { hWnd: HWND }],
  GetTitleBarInfo:      [ bool, { hwnd: HWND, pti: PTITLEBARINFO }],
  SendMessageA:         [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageTimeoutA:  [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, flags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR } ],
  SendNotifyMessageA:   [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageCallbackA: [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: VOIDPTR, dwData: ULONG_PTR } ],
  PostMessageA:         [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  PostThreadMessageA:   [ BOOL, { idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  ReplyMessage:         [ BOOL, { lResult: LRESULT } ],
  WaitMessage:          [ BOOL, {  } ],
  WaitForInputIdle:     [ DWORD, { hProcess: HANDLE, dwMilliseconds: DWORD } ],
  DefWindowProcA:       [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  CallWindowProcA:      [ LRESULT, { lpPrevWndFunc: VOIDPTR, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  InSendMessage:        [ BOOL, {  } ],
  InSendMessageEx:      [ DWORD, { lpReserved: LPVOID } ],

  SetWindowTextW:       [ bool, { hWnd: HWND, lpString: LPCWSTR }],
  GetWindowTextW:       [ Void, { hWnd: HWND, lpString: LPWSTR, nMaxCount: int }],
  SendMessageW:         [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageTimeoutW:  [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, flags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR } ],
  SendNotifyMessageW:   [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageCallbackW: [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: VOIDPTR, dwData: ULONG_PTR } ],
  PostMessageW:         [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  PostThreadMessageW:   [ BOOL, { idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  DefWindowProcW:       [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  CallWindowProcW:      [ LRESULT, { lpPrevWndFunc: VOIDPTR, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
});

Linux: [32bit](http://s3.amazonaws.com/node-webkit/nw_release_linux_x32.tar.gz) / [64bit](https://s3.amazonaws.com/node-webkit/nw_release_linux_x64.tar.gz)
Windows: [win32](http://s3.amazonaws.com/node-webkit/nw_release_win32.zip)
Mac: [32bit](http://s3.amazonaws.com/node-webkit/nw_release_mac.zip)
var user32 = new Library('user32', {
  SetWindowTextA:       [ bool, { hWnd: HWND, lpString: LPCSTR }],
  GetWindowTextA:       [ Void, { hWnd: HWND, lpString: LPSTR, nMaxCount: int }],
  IsWindowVisible:      [ bool, { hWnd: HWND }],
  EnumWindows:          [ bool, { enumFunc: VOIDPTR, lparam: LPARAM }],
  GetAncestor:          [ HWND, { hwnd: HWND, gaFlags: uint }],
  GetLastActivePopup:   [ HWND, { hWnd: HWND }],
  GetTitleBarInfo:      [ bool, { hwnd: HWND, pti: PTITLEBARINFO }],
  SendMessageA:         [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageTimeoutA:  [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, flags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR } ],
  SendNotifyMessageA:   [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageCallbackA: [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: VOIDPTR, dwData: ULONG_PTR } ],
  PostMessageA:         [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  PostThreadMessageA:   [ BOOL, { idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  ReplyMessage:         [ BOOL, { lResult: LRESULT } ],
  WaitMessage:          [ BOOL, {  } ],
  WaitForInputIdle:     [ DWORD, { hProcess: HANDLE, dwMilliseconds: DWORD } ],
  DefWindowProcA:       [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  CallWindowProcA:      [ LRESULT, { lpPrevWndFunc: VOIDPTR, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  InSendMessage:        [ BOOL, {  } ],
  InSendMessageEx:      [ DWORD, { lpReserved: LPVOID } ],

  SetWindowTextW:       [ bool, { hWnd: HWND, lpString: LPCWSTR }],
  GetWindowTextW:       [ Void, { hWnd: HWND, lpString: LPWSTR, nMaxCount: int }],
  SendMessageW:         [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageTimeoutW:  [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, flags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR } ],
  SendNotifyMessageW:   [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageCallbackW: [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: VOIDPTR, dwData: ULONG_PTR } ],
  PostMessageW:         [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  PostThreadMessageW:   [ BOOL, { idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  DefWindowProcW:       [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  CallWindowProcW:      [ LRESULT, { lpPrevWndFunc: VOIDPTR, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
});


var advapi32 = new Library('advapi32', {
  RegCloseKey: [ LSTATUS, { hKey: HKEY }],
  RegDisablePredefinedCache: [ LSTATUS, {  }],
  RegDisablePredefinedCacheEx: [ LSTATUS, {  }],
  RegDisableReflectionKey: [ long, { hBase: HKEY }],
  RegEnableReflectionKey: [ long, { hBase: HKEY }],
  RegFlushKey: [ LSTATUS, { hKey: HKEY }],
  RegGetKeySecurity: [ LSTATUS, { hKey: HKEY, secInfo: SECINFO, pSecDesc: PSECDESC, lpcbSecDesc: LPDWORD }],
  RegNotifyChangeKeyValue: [ LSTATUS, { hKey: HKEY, bWatchSubtree: bool, dwNotifyFilter: DWORD, hEvent: HANDLE, fAsynchronous: bool }],
  RegOpenCurrentUser: [ LSTATUS, { sam: REGSAM, result: PHKEY }],
  RegOpenUserClassesRoot: [ LSTATUS, { hToken: HANDLE, options: DWORD, sam: REGSAM, result: PHKEY }],
  RegOverridePredefKey: [ LSTATUS, { hKey: HKEY, hNewHKey: HKEY }],
  RegQueryReflectionKey: [ long, { hBase: HKEY, bIsReflectionDisabled: PTR(int) }],
  RegRenameKey: [ LSTATUS, { hKey: HKEY, subkeyName: LPCWSTR, lpNewKeyName: LPCWSTR }],
  RegSetKeySecurity: [ LSTATUS, { hKey: HKEY, secInfo: SECINFO, pSecDesc: PSECDESC }],

  // Ascii
  AbortSystemShutdownA: [ bool, { machineName: LPSTR }],
  InitiateShutdownA: [ DWORD, { machineName: LPSTR, message: LPSTR, gracePeriod: DWORD, shutdownFlags: DWORD, reason: DWORD }],
  InitiateSystemShutdownA: [ bool, { machineName: LPSTR, message: LPSTR, dwTimeout: DWORD, forceAppsClosed: bool, rebootAfterShutdown: bool }],
  InitiateSystemShutdownExA: [ bool, { machineName: LPSTR, message: LPSTR, dwTimeout: DWORD, forceAppsClosed: bool, rebootAfterShutdown: bool, reason: DWORD }],
  RegConnectRegistryA: [ LSTATUS, { machineName: LPCSTR, hKey: HKEY, result: PHKEY }],
  RegConnectRegistryExA: [ LSTATUS, { machineName: LPCSTR, hKey: HKEY, Flags: ulong, result: PHKEY }],
  RegCopyTreeA: [ LSTATUS, { hKeySrc: HKEY, subkey: LPCSTR, hKeyDest: HKEY }],
  RegCreateKeyA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, result: PHKEY }],
  RegCreateKeyExA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, _: DWORD, class: LPSTR, options: DWORD, sam: REGSAM, secAttrs: LPSECATTRS, result: PHKEY, disposition: LPDWORD }],
  RegCreateKeyTransactedA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, _: DWORD, class: LPSTR, options: DWORD, sam: REGSAM, secAttrs: LPSECATTRS, result: PHKEY, disposition: LPDWORD, hTransaction: HANDLE, pExtParam: PVOID }],
  RegDeleteKeyA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR }],
  RegDeleteKeyExA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, sam: REGSAM, _: DWORD }],
  RegDeleteKeyTransactedA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, sam: REGSAM, _: DWORD, hTransaction: HANDLE, pExtParam: PVOID }],
  RegDeleteKeyValueA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, valName: LPCSTR }],
  RegDeleteTreeA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR }],
  RegDeleteValueA: [ LSTATUS, { hKey: HKEY, valName: LPCSTR }],
  RegEnumKeyA: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPSTR, cchName: DWORD }],
  RegEnumKeyExA: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPSTR, lpcchName: LPDWORD, lpReserved: LPDWORD, class: LPSTR, lpcchClass: LPDWORD, lpftLastWriteTime: PFILETIME }],
  RegEnumValueA: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, valName: LPSTR, lpcchValueName: LPDWORD, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD }],
  RegGetValueA: [ LSTATUS, { hkey: HKEY, subkey: LPCSTR, lpValue: LPCSTR, dwFlags: DWORD, pdwType: LPDWORD, pvData: PVOID, pcbData: LPDWORD }],
  RegLoadAppKeyA: [ LSTATUS, { lpFile: LPCSTR, result: PHKEY, sam: REGSAM, options: DWORD, _: DWORD }],
  RegLoadKeyA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, lpFile: LPCSTR }],
  RegLoadMUIStringA: [ LSTATUS, { hKey: HKEY, pszValue: LPCSTR, pszOutBuf: LPSTR, cbOutBuf: DWORD, pcbData: LPDWORD, Flags: DWORD, pszDirectory: LPCSTR }],
  RegOpenKeyA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, result: PHKEY }],
  RegOpenKeyExA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, ulOptions: DWORD, sam: REGSAM, result: PHKEY }],
  RegOpenKeyTransactedA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, ulOptions: DWORD, sam: REGSAM, result: PHKEY, hTransaction: HANDLE, pExtParam: PVOID }],
  RegQueryInfoKeyA: [ LSTATUS, { hKey: HKEY, class: LPSTR, lpcchClass: LPDWORD, lpReserved: LPDWORD, lpcSubKeys: LPDWORD, lpcbMaxSubKeyLen: LPDWORD, lpcbMaxClassLen: LPDWORD, lpcValues: LPDWORD, lpcbMaxValueNameLen: LPDWORD, lpcbMaxValueLen: LPDWORD, lpcbSecDesc: LPDWORD, lpftLastWriteTime: PFILETIME }],
  RegQueryMultipleValuesA: [ LSTATUS, { hKey: HKEY, values: PTR(VALENTA), count: DWORD, lpValueBuf: LPSTR, ldwTotsize: LPDWORD }],
  RegQueryValueA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, lpData: LPSTR, lpcbData: PLONG }],
  RegQueryValueExA: [ LSTATUS, { hKey: HKEY, valName: LPCSTR, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD }],
  RegReplaceKeyA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, lpNewFile: LPCSTR, lpOldFile: LPCSTR }],
  RegRestoreKeyA: [ LSTATUS, { hKey: HKEY, lpFile: LPCSTR, dwFlags: DWORD }],
  RegSaveKeyA: [ LSTATUS, { hKey: HKEY, lpFile: LPCSTR, secAttrs: LPSECATTRS }],
  RegSaveKeyExA: [ LSTATUS, { hKey: HKEY, lpFile: LPCSTR, secAttrs: LPSECATTRS, Flags: DWORD }],
  RegSetKeyValueA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, valName: LPCSTR, dwType: DWORD, lpData: LPCVOID, cbData: DWORD }],
  RegSetValueA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR, dwType: DWORD, lpData: LPCSTR, cbData: DWORD }],
  RegSetValueExA: [ LSTATUS, { hKey: HKEY, valName: LPCSTR, _: DWORD, dwType: DWORD, lpData: LPBYTE, cbData: DWORD }],
  RegUnLoadKeyA: [ LSTATUS, { hKey: HKEY, subkey: LPCSTR }],

  // Unicode
  AbortSystemShutdownW: [ bool, { machineName: LPWSTR }],
  InitiateShutdownW: [ DWORD, { machineName: LPWSTR, message: LPWSTR, gracePeriod: DWORD, shutdownFlags: DWORD, reason: DWORD }],
  InitiateSystemShutdownExW: [ bool, { machineName: LPWSTR, message: LPWSTR, dwTimeout: DWORD, forceAppsClosed: bool, rebootAfterShutdown: bool, reason: DWORD }],
  InitiateSystemShutdownW: [ bool, { machineName: LPWSTR, message: LPWSTR, dwTimeout: DWORD, forceAppsClosed: bool, rebootAfterShutdown: bool }],
  RegConnectRegistryExW: [ LSTATUS, { machineName: LPCWSTR, hKey: HKEY, Flags: ulong, result: PHKEY }],
  RegConnectRegistryW: [ LSTATUS, { machineName: LPCWSTR, hKey: HKEY, result: PHKEY }],
  RegCopyTreeW: [ LSTATUS, { hKeySrc: HKEY, subkey: LPCWSTR, hKeyDest: HKEY }],
  RegCreateKeyExW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, _: DWORD, class: LPWSTR, options: DWORD, sam: REGSAM, secAttrs: LPSECATTRS, result: PHKEY, disposition: LPDWORD }],
  RegCreateKeyTransactedW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, _: DWORD, class: LPWSTR, options: DWORD, sam: REGSAM, secAttrs: LPSECATTRS, result: PHKEY, disposition: LPDWORD, hTransaction: HANDLE, pExtParam: PVOID }],
  RegCreateKeyW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, result: PHKEY }],
  RegDeleteKeyExW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, sam: REGSAM, _: DWORD }],
  RegDeleteKeyTransactedW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, sam: REGSAM, _: DWORD, hTransaction: HANDLE, pExtParam: PVOID }],
  RegDeleteKeyValueW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, valName: LPCWSTR }],
  RegDeleteKeyW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR }],
  RegDeleteTreeW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR }],
  RegDeleteValueW: [ LSTATUS, { hKey: HKEY, valName: LPCWSTR }],
  RegEnumKeyExW: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPWSTR, lpcchName: LPDWORD, lpReserved: LPDWORD, class: LPWSTR, lpcchClass: LPDWORD, lpftLastWriteTime: PFILETIME }],
  RegEnumKeyW: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPWSTR, cchName: DWORD }],
  RegEnumValueW: [ LSTATUS, { hKey: HKEY, dwIndex: DWORD, valName: LPWSTR, lpcchValueName: LPDWORD, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD }],
  RegGetValueW: [ LSTATUS, { hkey: HKEY, subkey: LPCWSTR, lpValue: LPCWSTR, dwFlags: DWORD, pdwType: LPDWORD, pvData: PVOID, pcbData: LPDWORD }],
  RegLoadAppKeyW: [ LSTATUS, { lpFile: LPCWSTR, result: PHKEY, sam: REGSAM, options: DWORD, _: DWORD }],
  RegLoadKeyW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, lpFile: LPCWSTR }],
  RegLoadMUIStringW: [ LSTATUS, { hKey: HKEY, pszValue: LPCWSTR, pszOutBuf: LPWSTR, cbOutBuf: DWORD, pcbData: LPDWORD, Flags: DWORD, pszDirectory: LPCWSTR }],
  RegOpenKeyExW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, ulOptions: DWORD, sam: REGSAM, result: PHKEY }],
  RegOpenKeyTransactedW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, ulOptions: DWORD, sam: REGSAM, result: PHKEY, hTransaction: HANDLE, pExtParam: PVOID }],
  RegOpenKeyW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, result: PHKEY }],
  RegQueryInfoKeyW: [ LSTATUS, { hKey: HKEY, class: LPWSTR, lpcchClass: LPDWORD, lpReserved: LPDWORD, lpcSubKeys: LPDWORD, lpcbMaxSubKeyLen: LPDWORD, lpcbMaxClassLen: LPDWORD, lpcValues: LPDWORD, lpcbMaxValueNameLen: LPDWORD, lpcbMaxValueLen: LPDWORD, lpcbSecDesc: LPDWORD, lpftLastWriteTime: PFILETIME }],
  RegQueryMultipleValuesW: [ LSTATUS, { hKey: HKEY, values: PTR(VALENTW), count: DWORD, lpValueBuf: LPWSTR, ldwTotsize: LPDWORD }],
  RegQueryValueExW: [ LSTATUS, { hKey: HKEY, valName: LPCWSTR, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD }],
  RegQueryValueW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, lpData: LPWSTR, lpcbData: PLONG }],
  RegReplaceKeyW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, lpNewFile: LPCWSTR, lpOldFile: LPCWSTR }],
  RegRestoreKeyW: [ LSTATUS, { hKey: HKEY, lpFile: LPCWSTR, dwFlags: DWORD }],
  RegSaveKeyExW: [ LSTATUS, { hKey: HKEY, lpFile: LPCWSTR, secAttrs: LPSECATTRS, Flags: DWORD }],
  RegSaveKeyW: [ LSTATUS, { hKey: HKEY, lpFile: LPCWSTR, secAttrs: LPSECATTRS }],
  RegSetKeyValueW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, valName: LPCWSTR, dwType: DWORD, lpData: LPCVOID, cbData: DWORD }],
  RegSetValueExW: [ LSTATUS, { hKey: HKEY, valName: LPCWSTR, _: DWORD, dwType: DWORD, lpData: LPBYTE, cbData: DWORD }],
  RegSetValueW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR, dwType: DWORD, lpData: LPCWSTR, cbData: DWORD }],
  RegUnLoadKeyW: [ LSTATUS, { hKey: HKEY, subkey: LPCWSTR }],
});

var Reg = { A: {}, W: {} }
Object.keys(advapi32).sort().forEach(function(key){
  var func = advapi32[key];
  key = key.replace(/^Reg/, '');
  if (key[key.length - 1] === 'A') {
    Reg.A[key.slice(0,-1)] = func;
  } else if (key[key.length - 1] === 'W') {
    Reg.W[key.slice(0,-1)] = func;
  } else {
    Reg.A[key] = Reg.W[key] = func;
  }
});
