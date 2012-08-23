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
 USHORT = ushort.typedef('USHORT'),
 DWORD = ulong.typedef('DWORD'),
 BOOL = int.typedef('BOOL'),
 PBYTE = uchar.Δ.typedef('PBYTE'),
 LPBYTE = uchar.Δ.typedef('LPBYTE'),
 LPDWORD = ulong.Δ.typedef('LPDWORD'),
 LPVOID = _void.Δ.typedef('LPVOID'),
 PVOID = _void.Δ.typedef('PVOID'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 LPSTR = char.Δ.typedef('LPSTR'),
 LPCSTR = char.Δ.typedef('LPCSTR'),
 BOOLEAN = uchar.typedef('BOOLEAN'),
 PSECURITY_DESCRIPTOR = _void.Δ.typedef('PSECURITY_DESCRIPTOR'),
 SECURITY_INFORMATION = ulong.typedef('SECURITY_INFORMATION'),
 SC_LOCK = _void.Δ.typedef('SC_LOCK');

var SC_ACTION_TYPE = new EnumT('SC_ACTION_TYPE', {
 None: 0,
 Restart: 1,
 Reboot: 2,
 RunCommand: 3
});

var SC_STATUS_TYPE = new EnumT('SC_STATUS_TYPE', {
 ProcessInfo: 0
});

var SC_ENUM_TYPE = new EnumT('SC_ENUM_TYPE', {
 ProcessInfo: 0
});


  LPSERVICE_MAIN_FUNCTIONW = new CallbackT('LPSERVICE_MAIN_FUNCTIONW', _void, [ulong, ushort.Δ.Δ]),
  LPSERVICE_MAIN_FUNCTIONA = new CallbackT('LPSERVICE_MAIN_FUNCTIONA', _void, [ulong, char.Δ.Δ]),
  LPHANDLER_FUNCTION = new CallbackT('LPHANDLER_FUNCTION', _void, [ulong]),
  LPHANDLER_FUNCTION_EX = new CallbackT('LPHANDLER_FUNCTION_EX', ulong, [ulong, ulong, _void.Δ, _void.Δ]),
  PFN_SC_NOTIFY_CALLBACK = new CallbackT('PFN_SC_NOTIFY_CALLBACK', _void, [_void.Δ]),

var SERVICE_DESCRIPTION = new StructT('SERVICE_DESCRIPTION', {
 lpDescription: LPSTR
});

var SERVICE_DESCRIPTIONW = new StructT('SERVICE_DESCRIPTIONW', {
 lpDescription: LPWSTR
});

var SC_ACTION = new StructT('SC_ACTION', {
 Type: SC_ACTION_TYPE,
 Delay: DWORD
});

var SERVICE_FAILURE_ACTIONS = new StructT('SERVICE_FAILURE_ACTIONS', {
 dwResetPeriod: DWORD,
 lpRebootMsg: LPSTR,
 lpCommand: LPSTR,
 cActions: DWORD,
 lpsaActions: SC_ACTION.Δ
});

var SERVICE_FAILURE_ACTIONSW = new StructT('SERVICE_FAILURE_ACTIONSW', {
 dwResetPeriod: DWORD,
 lpRebootMsg: LPWSTR,
 lpCommand: LPWSTR,
 cActions: DWORD,
 lpsaActions: SC_ACTION.Δ
});

var SERVICE_DELAYED_AUTO_START_INFO = new StructT('SERVICE_DELAYED_AUTO_START_INFO', {
 fDelayedAutostart: BOOL
});

var SERVICE_FAILURE_ACTIONS_FLAG = new StructT('SERVICE_FAILURE_ACTIONS_FLAG', {
 fFailureActionsOnNonCrashFailures: BOOL
});

var SERVICE_SID_INFO = new StructT('SERVICE_SID_INFO', {
 dwServiceSidType: DWORD
});

var SERVICE_REQUIRED_PRIVILEGES_INFO = new StructT('SERVICE_REQUIRED_PRIVILEGES_INFO', {
 pmszRequiredPrivileges: LPSTR
});

var SERVICE_REQUIRED_PRIVILEGES_INFOW = new StructT('SERVICE_REQUIRED_PRIVILEGES_INFOW', {
 pmszRequiredPrivileges: LPWSTR
});

var SERVICE_PRESHUTDOWN_INFO = new StructT('SERVICE_PRESHUTDOWN_INFO', {
 dwPreshutdownTimeout: DWORD
});

var SERVICE_TRIGGER_SPECIFIC_DATA_ITEM = new StructT('SERVICE_TRIGGER_SPECIFIC_DATA_ITEM', {
 dwDataType: DWORD,
 cbData: DWORD,
 pData: PBYTE
});

var SERVICE_TRIGGER = new StructT('SERVICE_TRIGGER', {
 dwTriggerType: DWORD,
 dwAction: DWORD,
 pTriggerSubtype: GUID.Δ,
 cDataItems: DWORD,
 pDataItems: PSERVICE_TRIGGER_SPECIFIC_DATA_ITEM
});

var SERVICE_TRIGGER_INFO = new StructT('SERVICE_TRIGGER_INFO', {
 cTriggers: DWORD,
 pTriggers: PSERVICE_TRIGGER,
 pReserved: PBYTE
});

var SERVICE_PREFERRED_NODE_INFO = new StructT('SERVICE_PREFERRED_NODE_INFO', {
 usPreferredNode: USHORT,
 fDelete: BOOLEAN
});

var SERVICE_TIMECHANGE_INFO = new StructT('SERVICE_TIMECHANGE_INFO', {
 liNewTime: LARGE_INTEGER,
 liOldTime: LARGE_INTEGER
});

var SC_HANDLE__ = new StructT('SC_HANDLE__', {
 unused: int
});

var SERVICE_STATUS_HANDLE__ = new StructT('SERVICE_STATUS_HANDLE__', {
 unused: int
});

var SERVICE_STATUS = new StructT('SERVICE_STATUS', {
 dwServiceType: DWORD,
 dwCurrentState: DWORD,
 dwControlsAccepted: DWORD,
 dwWin32ExitCode: DWORD,
 dwServiceSpecificExitCode: DWORD,
 dwCheckPoint: DWORD,
 dwWaitHint: DWORD
});

var SERVICE_STATUS_PROCESS = new StructT('SERVICE_STATUS_PROCESS', {
 dwServiceType: DWORD,
 dwCurrentState: DWORD,
 dwControlsAccepted: DWORD,
 dwWin32ExitCode: DWORD,
 dwServiceSpecificExitCode: DWORD,
 dwCheckPoint: DWORD,
 dwWaitHint: DWORD,
 dwProcessId: DWORD,
 dwServiceFlags: DWORD
});

var ENUM_SERVICE_STATUS = new StructT('ENUM_SERVICE_STATUS', {
 lpServiceName: LPSTR,
 lpDisplayName: LPSTR,
 ServiceStatus: SERVICE_STATUS
});

var ENUM_SERVICE_STATUSW = new StructT('ENUM_SERVICE_STATUSW', {
 lpServiceName: LPWSTR,
 lpDisplayName: LPWSTR,
 ServiceStatus: SERVICE_STATUS
});

var ENUM_SERVICE_STATUS_PROCESS = new StructT('ENUM_SERVICE_STATUS_PROCESS', {
 lpServiceName: LPSTR,
 lpDisplayName: LPSTR,
 ServiceStatusProcess: SERVICE_STATUS_PROCESS
});

var ENUM_SERVICE_STATUS_PROCESSW = new StructT('ENUM_SERVICE_STATUS_PROCESSW', {
 lpServiceName: LPWSTR,
 lpDisplayName: LPWSTR,
 ServiceStatusProcess: SERVICE_STATUS_PROCESS
});

var QUERY_SERVICE_LOCK_STATUS = new StructT('QUERY_SERVICE_LOCK_STATUS', {
 fIsLocked: DWORD,
 lpLockOwner: LPSTR,
 dwLockDuration: DWORD
});

var QUERY_SERVICE_LOCK_STATUSW = new StructT('QUERY_SERVICE_LOCK_STATUSW', {
 fIsLocked: DWORD,
 lpLockOwner: LPWSTR,
 dwLockDuration: DWORD
});

var QUERY_SERVICE_CONFIG = new StructT('QUERY_SERVICE_CONFIG', {
 dwServiceType: DWORD,
 dwStartType: DWORD,
 dwErrorControl: DWORD,
 lpBinaryPathName: LPSTR,
 lpLoadOrderGroup: LPSTR,
 dwTagId: DWORD,
 lpDependencies: LPSTR,
 lpServiceStartName: LPSTR,
 lpDisplayName: LPSTR
});

var QUERY_SERVICE_CONFIGW = new StructT('QUERY_SERVICE_CONFIGW', {
 dwServiceType: DWORD,
 dwStartType: DWORD,
 dwErrorControl: DWORD,
 lpBinaryPathName: LPWSTR,
 lpLoadOrderGroup: LPWSTR,
 dwTagId: DWORD,
 lpDependencies: LPWSTR,
 lpServiceStartName: LPWSTR,
 lpDisplayName: LPWSTR
});

var SERVICE_TABLE_ENTRY = new StructT('SERVICE_TABLE_ENTRY', {
 lpServiceName: LPSTR,
 lpServiceProc: LPSERVICE_MAIN_FUNCTIONA
});

var SERVICE_TABLE_ENTRYW = new StructT('SERVICE_TABLE_ENTRYW', {
 lpServiceName: LPWSTR,
 lpServiceProc: LPSERVICE_MAIN_FUNCTIONW
});

var SERVICE_NOTIFY_1 = new StructT('SERVICE_NOTIFY_1', {
 dwVersion: DWORD,
 pfnNotifyCallback: PFN_SC_NOTIFY_CALLBACK,
 pContext: PVOID,
 dwNotificationStatus: DWORD,
 ServiceStatus: SERVICE_STATUS_PROCESS
});

var SERVICE_NOTIFY = new StructT('SERVICE_NOTIFY', {
 dwVersion: DWORD,
 pfnNotifyCallback: PFN_SC_NOTIFY_CALLBACK,
 pContext: PVOID,
 dwNotificationStatus: DWORD,
 ServiceStatus: SERVICE_STATUS_PROCESS,
 dwNotificationTriggered: DWORD,
 pszServiceNames: LPSTR
});

var SERVICE_NOTIFYW = new StructT('SERVICE_NOTIFYW', {
 dwVersion: DWORD,
 pfnNotifyCallback: PFN_SC_NOTIFY_CALLBACK,
 pContext: PVOID,
 dwNotificationStatus: DWORD,
 ServiceStatus: SERVICE_STATUS_PROCESS,
 dwNotificationTriggered: DWORD,
 pszServiceNames: LPWSTR
});

var SERVICE_CONTROL_STATUS_REASON_PARAMS = new StructT('SERVICE_CONTROL_STATUS_REASON_PARAMS', {
 dwReason: DWORD,
 pszComment: LPSTR,
 ServiceStatus: SERVICE_STATUS_PROCESS
});

var SERVICE_CONTROL_STATUS_REASON_PARAMSW = new StructT('SERVICE_CONTROL_STATUS_REASON_PARAMSW', {
 dwReason: DWORD,
 pszComment: LPWSTR,
 ServiceStatus: SERVICE_STATUS_PROCESS
});


  ChangeServiceConfigA: [ BOOL, { hService: SC_HANDLE, dwServiceType: DWORD, dwStartType: DWORD, dwErrorControl: DWORD, lpBinaryPathName: LPCSTR, lpLoadOrderGroup: LPCSTR, lpdwTagId: LPDWORD, lpDependencies: LPCSTR, lpServiceStartName: LPCSTR, lpPassword: LPCSTR, lpDisplayName: LPCSTR } ],
  ChangeServiceConfigW: [ BOOL, { hService: SC_HANDLE, dwServiceType: DWORD, dwStartType: DWORD, dwErrorControl: DWORD, lpBinaryPathName: LPCWSTR, lpLoadOrderGroup: LPCWSTR, lpdwTagId: LPDWORD, lpDependencies: LPCWSTR, lpServiceStartName: LPCWSTR, lpPassword: LPCWSTR, lpDisplayName: LPCWSTR } ],
  ChangeServiceConfig2A: [ BOOL, { hService: SC_HANDLE, dwInfoLevel: DWORD, lpInfo: LPVOID } ],
  ChangeServiceConfig2W: [ BOOL, { hService: SC_HANDLE, dwInfoLevel: DWORD, lpInfo: LPVOID } ],
  CloseServiceHandle: [ BOOL, { hSCObject: SC_HANDLE } ],
  ControlService: [ BOOL, { hService: SC_HANDLE, dwControl: DWORD, lpServiceStatus: LPSERVICE_STATUS } ],
  CreateServiceA: [ SC_HANDLE, { hSCManager: SC_HANDLE, lpServiceName: LPCSTR, lpDisplayName: LPCSTR, dwDesiredAccess: DWORD, dwServiceType: DWORD, dwStartType: DWORD, dwErrorControl: DWORD, lpBinaryPathName: LPCSTR, lpLoadOrderGroup: LPCSTR, lpdwTagId: LPDWORD, lpDependencies: LPCSTR, lpServiceStartName: LPCSTR, lpPassword: LPCSTR } ],
  CreateServiceW: [ SC_HANDLE, { hSCManager: SC_HANDLE, lpServiceName: LPCWSTR, lpDisplayName: LPCWSTR, dwDesiredAccess: DWORD, dwServiceType: DWORD, dwStartType: DWORD, dwErrorControl: DWORD, lpBinaryPathName: LPCWSTR, lpLoadOrderGroup: LPCWSTR, lpdwTagId: LPDWORD, lpDependencies: LPCWSTR, lpServiceStartName: LPCWSTR, lpPassword: LPCWSTR } ],
  DeleteService: [ BOOL, { hService: SC_HANDLE } ],
  EnumDependentServicesA: [ BOOL, { hService: SC_HANDLE, dwServiceState: DWORD, lpServices: LPENUM_SERVICE_STATUSA, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD, lpServicesReturned: LPDWORD } ],
  EnumDependentServicesW: [ BOOL, { hService: SC_HANDLE, dwServiceState: DWORD, lpServices: LPENUM_SERVICE_STATUSW, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD, lpServicesReturned: LPDWORD } ],
  EnumServicesStatusA: [ BOOL, { hSCManager: SC_HANDLE, dwServiceType: DWORD, dwServiceState: DWORD, lpServices: LPENUM_SERVICE_STATUSA, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD, lpServicesReturned: LPDWORD, lpResumeHandle: LPDWORD } ],
  EnumServicesStatusW: [ BOOL, { hSCManager: SC_HANDLE, dwServiceType: DWORD, dwServiceState: DWORD, lpServices: LPENUM_SERVICE_STATUSW, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD, lpServicesReturned: LPDWORD, lpResumeHandle: LPDWORD } ],
  EnumServicesStatusExA: [ BOOL, { hSCManager: SC_HANDLE, InfoLevel: SC_ENUM_TYPE, dwServiceType: DWORD, dwServiceState: DWORD, lpServices: LPBYTE, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD, lpServicesReturned: LPDWORD, lpResumeHandle: LPDWORD, pszGroupName: LPCSTR } ],
  EnumServicesStatusExW: [ BOOL, { hSCManager: SC_HANDLE, InfoLevel: SC_ENUM_TYPE, dwServiceType: DWORD, dwServiceState: DWORD, lpServices: LPBYTE, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD, lpServicesReturned: LPDWORD, lpResumeHandle: LPDWORD, pszGroupName: LPCWSTR } ],
  GetServiceKeyNameA: [ BOOL, { hSCManager: SC_HANDLE, lpDisplayName: LPCSTR, lpServiceName: LPSTR, lpcchBuffer: LPDWORD } ],
  GetServiceKeyNameW: [ BOOL, { hSCManager: SC_HANDLE, lpDisplayName: LPCWSTR, lpServiceName: LPWSTR, lpcchBuffer: LPDWORD } ],
  GetServiceDisplayNameA: [ BOOL, { hSCManager: SC_HANDLE, lpServiceName: LPCSTR, lpDisplayName: LPSTR, lpcchBuffer: LPDWORD } ],
  GetServiceDisplayNameW: [ BOOL, { hSCManager: SC_HANDLE, lpServiceName: LPCWSTR, lpDisplayName: LPWSTR, lpcchBuffer: LPDWORD } ],
  LockServiceDatabase: [ SC_LOCK, { hSCManager: SC_HANDLE } ],
  NotifyBootConfigStatus: [ BOOL, { BootAcceptable: BOOL } ],
  OpenSCManagerA: [ SC_HANDLE, { lpMachineName: LPCSTR, lpDatabaseName: LPCSTR, dwDesiredAccess: DWORD } ],
  OpenSCManagerW: [ SC_HANDLE, { lpMachineName: LPCWSTR, lpDatabaseName: LPCWSTR, dwDesiredAccess: DWORD } ],
  OpenServiceA: [ SC_HANDLE, { hSCManager: SC_HANDLE, lpServiceName: LPCSTR, dwDesiredAccess: DWORD } ],
  OpenServiceW: [ SC_HANDLE, { hSCManager: SC_HANDLE, lpServiceName: LPCWSTR, dwDesiredAccess: DWORD } ],
  QueryServiceConfigA: [ BOOL, { hService: SC_HANDLE, lpServiceConfig: LPQUERY_SERVICE_CONFIGA, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD } ],
  QueryServiceConfigW: [ BOOL, { hService: SC_HANDLE, lpServiceConfig: LPQUERY_SERVICE_CONFIGW, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD } ],
  QueryServiceConfig2A: [ BOOL, { hService: SC_HANDLE, dwInfoLevel: DWORD, lpBuffer: LPBYTE, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD } ],
  QueryServiceConfig2W: [ BOOL, { hService: SC_HANDLE, dwInfoLevel: DWORD, lpBuffer: LPBYTE, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD } ],
  QueryServiceLockStatusA: [ BOOL, { hSCManager: SC_HANDLE, lpLockStatus: LPQUERY_SERVICE_LOCK_STATUSA, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD } ],
  QueryServiceLockStatusW: [ BOOL, { hSCManager: SC_HANDLE, lpLockStatus: LPQUERY_SERVICE_LOCK_STATUSW, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD } ],
  QueryServiceObjectSecurity: [ BOOL, { hService: SC_HANDLE, dwSecurityInformation: SECURITY_INFORMATION, lpSecurityDescriptor: PSECURITY_DESCRIPTOR, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD } ],
  QueryServiceStatus: [ BOOL, { hService: SC_HANDLE, lpServiceStatus: LPSERVICE_STATUS } ],
  QueryServiceStatusEx: [ BOOL, { hService: SC_HANDLE, InfoLevel: SC_STATUS_TYPE, lpBuffer: LPBYTE, cbBufSize: DWORD, pcbBytesNeeded: LPDWORD } ],
  RegisterServiceCtrlHandlerA: [ SERVICE_STATUS_HANDLE, { lpServiceName: LPCSTR, lpHandlerProc: LPHANDLER_FUNCTION } ],
  RegisterServiceCtrlHandlerW: [ SERVICE_STATUS_HANDLE, { lpServiceName: LPCWSTR, lpHandlerProc: LPHANDLER_FUNCTION } ],
  RegisterServiceCtrlHandlerExA: [ SERVICE_STATUS_HANDLE, { lpServiceName: LPCSTR, lpHandlerProc: LPHANDLER_FUNCTION_EX, lpContext: LPVOID } ],
  RegisterServiceCtrlHandlerExW: [ SERVICE_STATUS_HANDLE, { lpServiceName: LPCWSTR, lpHandlerProc: LPHANDLER_FUNCTION_EX, lpContext: LPVOID } ],
  SetServiceObjectSecurity: [ BOOL, { hService: SC_HANDLE, dwSecurityInformation: SECURITY_INFORMATION, lpSecurityDescriptor: PSECURITY_DESCRIPTOR } ],
  SetServiceStatus: [ BOOL, { hServiceStatus: SERVICE_STATUS_HANDLE, lpServiceStatus: LPSERVICE_STATUS } ],
  StartServiceCtrlDispatcherA: [ BOOL, { lpServiceStartTable: SERVICE_TABLE_ENTRYA.Δ } ],
  StartServiceCtrlDispatcherW: [ BOOL, { lpServiceStartTable: SERVICE_TABLE_ENTRYW.Δ } ],
  StartServiceA: [ BOOL, { hService: SC_HANDLE, dwNumServiceArgs: DWORD, lpServiceArgVectors: LPCSTR.Δ } ],
  StartServiceW: [ BOOL, { hService: SC_HANDLE, dwNumServiceArgs: DWORD, lpServiceArgVectors: LPCWSTR.Δ } ],
  UnlockServiceDatabase: [ BOOL, { ScLock: SC_LOCK } ],
  NotifyServiceStatusChangeA: [ DWORD, { hService: SC_HANDLE, dwNotifyMask: DWORD, pNotifyBuffer: PSERVICE_NOTIFYA } ],
  NotifyServiceStatusChangeW: [ DWORD, { hService: SC_HANDLE, dwNotifyMask: DWORD, pNotifyBuffer: PSERVICE_NOTIFYW } ],
  ControlServiceExA: [ BOOL, { hService: SC_HANDLE, dwControl: DWORD, dwInfoLevel: DWORD, pControlParams: PVOID } ],
  ControlServiceExW: [ BOOL, { hService: SC_HANDLE, dwControl: DWORD, dwInfoLevel: DWORD, pControlParams: PVOID } ],