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
 USHORT = ushort.typedef('USHORT'),
 DWORD = ulong.typedef('DWORD'),
 BOOL = int.typedef('BOOL'),
 WORD = ushort.typedef('WORD'),
 LPWORD = ushort.Δ.typedef('LPWORD'),
 LPDWORD = ulong.Δ.typedef('LPDWORD'),
 LPVOID = _void.Δ.typedef('LPVOID'),
 SIZE_T = ulong.typedef('SIZE_T'),
 LONG = long.typedef('LONG'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 HRESULT = long.typedef('HRESULT'),
 PSECURITY_DESCRIPTOR = _void.Δ.typedef('PSECURITY_DESCRIPTOR'),
 RPC_AUTH_IDENTITY_HANDLE = _void.Δ.typedef('RPC_AUTH_IDENTITY_HANDLE'),
 LPOLESTR = ushort.Δ.typedef('LPOLESTR'),
 LPCOLESTR = ushort.Δ.typedef('LPCOLESTR');

var REGCLS = new EnumT('REGCLS', {
 Singleuse: 0,
 Multipleuse: 1,
 MultiSeparate: 2,
 Suspended: 4,
 Surrogate: 8
});

var COINIT = new EnumT('COINIT', {
 Apartmentthreaded: 0x2,
 Multithreaded: 0x0,
 DisableOle1dde: 0x4,
 SpeedOverMemory: 0x8
});

var COMSD = new EnumT('COMSD', {
 Launchpermissions: 0,
 Accesspermissions: 1,
 Launchrestrictions: 2,
 Accessrestrictions: 3
});

var STDMSHLFLAGS = new EnumT('STDMSHLFLAGS', {
 SmexfServer: 0x01,
 SmexfHandler: 0x02
});

var COWAIT_FLAGS = new EnumT('COWAIT_FLAGS', {
 Waitall: 1,
 Alertable: 2,
 Inputavailable: 4
});


  LPFNGETCLASSOBJECT = new CallbackT('LPFNGETCLASSOBJECT', long, [_GUID.Δ, _GUID.Δ, _void.Δ.Δ]),
  LPFNCANUNLOADNOW = new CallbackT('LPFNCANUNLOADNOW', long, []),

var SOleTlsDataPublic = new StructT('SOleTlsDataPublic', {
 pvReserved0: ARRAY(undefined, 2),
 dwReserved0: ARRAY(DWORD, 3),
 pvReserved1: ARRAY(undefined, 1),
 dwReserved1: ARRAY(DWORD, 3),
 pvReserved2: ARRAY(undefined, 4),
 dwReserved2: ARRAY(DWORD, 1),
 pCurrentCtx: _void.Δ
});

var STGOPTIONS = new StructT('STGOPTIONS', {
 usVersion: USHORT,
 reserved: USHORT,
 ulSectorSize: ULONG,
 pwcsTemplateFile: WCHAR.Δ
});


  CoBuildVersion: [ DWORD, {  } ],
  CoInitialize: [ HRESULT, { pvReserved: LPVOID } ],
  CoUninitialize: [ _void, {  } ],
  CoGetMalloc: [ HRESULT, { dwMemContext: DWORD, ppMalloc: LPMALLOC.Δ } ],
  CoGetCurrentProcess: [ DWORD, {  } ],
  CoRegisterMallocSpy: [ HRESULT, { pMallocSpy: LPMALLOCSPY } ],
  CoRevokeMallocSpy: [ HRESULT, {  } ],
  CoCreateStandardMalloc: [ HRESULT, { memctx: DWORD, ppMalloc: IMalloc.Δ.Δ } ],
  CoInitializeEx: [ HRESULT, { pvReserved: LPVOID, dwCoInit: DWORD } ],
  CoGetCallerTID: [ HRESULT, { lpdwTID: LPDWORD } ],
  CoGetCurrentLogicalThreadId: [ HRESULT, { pguid: GUID.Δ } ],
  CoRegisterInitializeSpy: [ HRESULT, { pSpy: LPINITIALIZESPY, puliCookie: ULARGE_INTEGER.Δ } ],
  CoRevokeInitializeSpy: [ HRESULT, { uliCookie: ULARGE_INTEGER } ],
  CoGetContextToken: [ HRESULT, { pToken: ULONG_PTR.Δ } ],
  CoGetSystemSecurityPermissions: [ HRESULT, { comSDType: COMSD, ppSD: PSECURITY_DESCRIPTOR.Δ } ],
  CoGetApartmentType: [ HRESULT, { pAptType: APTTYPE.Δ, pAptQualifier: APTTYPEQUALIFIER.Δ } ],
  CoGetObjectContext: [ HRESULT, { riid: IID.Δ, ppv: LPVOID.Δ } ],
  CoGetClassObject: [ HRESULT, { rclsid: IID.Δ, dwClsContext: DWORD, pvReserved: LPVOID, riid: IID.Δ, ppv: LPVOID.Δ } ],
  CoRegisterClassObject: [ HRESULT, { rclsid: IID.Δ, pUnk: LPUNKNOWN, dwClsContext: DWORD, flags: DWORD, lpdwRegister: LPDWORD } ],
  CoRevokeClassObject: [ HRESULT, { dwRegister: DWORD } ],
  CoResumeClassObjects: [ HRESULT, {  } ],
  CoSuspendClassObjects: [ HRESULT, {  } ],
  CoAddRefServerProcess: [ ULONG, {  } ],
  CoReleaseServerProcess: [ ULONG, {  } ],
  CoGetPSClsid: [ HRESULT, { riid: IID.Δ, pClsid: CLSID.Δ } ],
  CoRegisterPSClsid: [ HRESULT, { riid: IID.Δ, rclsid: IID.Δ } ],
  CoRegisterSurrogate: [ HRESULT, { pSurrogate: LPSURROGATE } ],
  CoGetMarshalSizeMax: [ HRESULT, { pulSize: ULONG.Δ, riid: IID.Δ, pUnk: LPUNKNOWN, dwDestContext: DWORD, pvDestContext: LPVOID, mshlflags: DWORD } ],
  CoMarshalInterface: [ HRESULT, { pStm: LPSTREAM, riid: IID.Δ, pUnk: LPUNKNOWN, dwDestContext: DWORD, pvDestContext: LPVOID, mshlflags: DWORD } ],
  CoUnmarshalInterface: [ HRESULT, { pStm: LPSTREAM, riid: IID.Δ, ppv: LPVOID.Δ } ],
  CoMarshalHresult: [ HRESULT, { pstm: LPSTREAM, hresult: HRESULT } ],
  CoUnmarshalHresult: [ HRESULT, { pstm: LPSTREAM, phresult: HRESULT.Δ } ],
  CoReleaseMarshalData: [ HRESULT, { pStm: LPSTREAM } ],
  CoDisconnectObject: [ HRESULT, { pUnk: LPUNKNOWN, dwReserved: DWORD } ],
  CoLockObjectExternal: [ HRESULT, { pUnk: LPUNKNOWN, fLock: BOOL, fLastUnlockReleases: BOOL } ],
  CoGetStandardMarshal: [ HRESULT, { riid: IID.Δ, pUnk: LPUNKNOWN, dwDestContext: DWORD, pvDestContext: LPVOID, mshlflags: DWORD, ppMarshal: LPMARSHAL.Δ } ],
  CoGetStdMarshalEx: [ HRESULT, { pUnkOuter: LPUNKNOWN, smexflags: DWORD, ppUnkInner: LPUNKNOWN.Δ } ],
  CoIsHandlerConnected: [ BOOL, { pUnk: LPUNKNOWN } ],
  CoMarshalInterThreadInterfaceInStream: [ HRESULT, { riid: IID.Δ, pUnk: LPUNKNOWN, ppStm: LPSTREAM.Δ } ],
  CoGetInterfaceAndReleaseStream: [ HRESULT, { pStm: LPSTREAM, iid: IID.Δ, ppv: LPVOID.Δ } ],
  CoCreateFreeThreadedMarshaler: [ HRESULT, { punkOuter: LPUNKNOWN, ppunkMarshal: LPUNKNOWN.Δ } ],
  CoLoadLibrary: [ HINSTANCE, { lpszLibName: LPOLESTR, bAutoFree: BOOL } ],
  CoFreeLibrary: [ _void, { hInst: HINSTANCE } ],
  CoFreeAllLibraries: [ _void, {  } ],
  CoFreeUnusedLibraries: [ _void, {  } ],
  CoFreeUnusedLibrariesEx: [ _void, { dwUnloadDelay: DWORD, dwReserved: DWORD } ],
  CoDisconnectContext: [ HRESULT, { dwTimeout: DWORD } ],
  CoInitializeSecurity: [ HRESULT, { pSecDesc: PSECURITY_DESCRIPTOR, cAuthSvc: LONG, asAuthSvc: SOLE_AUTHENTICATION_SERVICE.Δ, pReserved1: _void.Δ, dwAuthnLevel: DWORD, dwImpLevel: DWORD, pAuthList: _void.Δ, dwCapabilities: DWORD, pReserved3: _void.Δ } ],
  CoGetCallContext: [ HRESULT, { riid: IID.Δ, ppInterface: _void.Δ.Δ } ],
  CoQueryProxyBlanket: [ HRESULT, { pProxy: IUnknown.Δ, pwAuthnSvc: DWORD.Δ, pAuthzSvc: DWORD.Δ, pServerPrincName: ushort.Δ.Δ, pAuthnLevel: DWORD.Δ, pImpLevel: DWORD.Δ, pAuthInfo: RPC_AUTH_IDENTITY_HANDLE.Δ, pCapabilites: DWORD.Δ } ],
  CoSetProxyBlanket: [ HRESULT, { pProxy: IUnknown.Δ, dwAuthnSvc: DWORD, dwAuthzSvc: DWORD, pServerPrincName: OLECHAR.Δ, dwAuthnLevel: DWORD, dwImpLevel: DWORD, pAuthInfo: RPC_AUTH_IDENTITY_HANDLE, dwCapabilities: DWORD } ],
  CoCopyProxy: [ HRESULT, { pProxy: IUnknown.Δ, ppCopy: IUnknown.Δ.Δ } ],
  CoQueryClientBlanket: [ HRESULT, { pAuthnSvc: DWORD.Δ, pAuthzSvc: DWORD.Δ, pServerPrincName: ushort.Δ.Δ, pAuthnLevel: DWORD.Δ, pImpLevel: DWORD.Δ, pPrivs: RPC_AUTHZ_HANDLE.Δ, pCapabilities: DWORD.Δ } ],
  CoImpersonateClient: [ HRESULT, {  } ],
  CoRevertToSelf: [ HRESULT, {  } ],
  CoQueryAuthenticationServices: [ HRESULT, { pcAuthSvc: DWORD.Δ, asAuthSvc: tagSOLE_AUTHENTICATION_SERVICE.Δ.Δ } ],
  CoSwitchCallContext: [ HRESULT, { pNewObject: IUnknown.Δ, ppOldObject: IUnknown.Δ.Δ } ],
  CoCreateInstance: [ HRESULT, { rclsid: IID.Δ, pUnkOuter: LPUNKNOWN, dwClsContext: DWORD, riid: IID.Δ, ppv: LPVOID.Δ } ],
  CoGetInstanceFromFile: [ HRESULT, { pServerInfo: COSERVERINFO.Δ, pClsid: CLSID.Δ, punkOuter: IUnknown.Δ, dwClsCtx: DWORD, grfMode: DWORD, pwszName: OLECHAR.Δ, dwCount: DWORD, pResults: MULTI_QI.Δ } ],
  CoGetInstanceFromIStorage: [ HRESULT, { pServerInfo: COSERVERINFO.Δ, pClsid: CLSID.Δ, punkOuter: IUnknown.Δ, dwClsCtx: DWORD, pstg: IStorage.Δ, dwCount: DWORD, pResults: MULTI_QI.Δ } ],
  CoCreateInstanceEx: [ HRESULT, { Clsid: IID.Δ, punkOuter: IUnknown.Δ, dwClsCtx: DWORD, pServerInfo: COSERVERINFO.Δ, dwCount: DWORD, pResults: MULTI_QI.Δ } ],
  CoGetCancelObject: [ HRESULT, { dwThreadId: DWORD, iid: IID.Δ, ppUnk: _void.Δ.Δ } ],
  CoSetCancelObject: [ HRESULT, { pUnk: IUnknown.Δ } ],
  CoCancelCall: [ HRESULT, { dwThreadId: DWORD, ulTimeout: ULONG } ],
  CoTestCancel: [ HRESULT, {  } ],
  CoEnableCallCancellation: [ HRESULT, { pReserved: LPVOID } ],
  CoDisableCallCancellation: [ HRESULT, { pReserved: LPVOID } ],
  CoAllowSetForegroundWindow: [ HRESULT, { pUnk: IUnknown.Δ, lpvReserved: LPVOID } ],
  DcomChannelSetHResult: [ HRESULT, { pvReserved: LPVOID, pulReserved: ULONG.Δ, appsHR: HRESULT } ],
  StringFromCLSID: [ HRESULT, { rclsid: IID.Δ, lplpsz: LPOLESTR.Δ } ],
  CLSIDFromString: [ HRESULT, { lpsz: LPCOLESTR, pclsid: LPCLSID } ],
  StringFromIID: [ HRESULT, { rclsid: IID.Δ, lplpsz: LPOLESTR.Δ } ],
  IIDFromString: [ HRESULT, { lpsz: LPCOLESTR, lpiid: LPIID } ],
  CoIsOle1Class: [ BOOL, { rclsid: IID.Δ } ],
  ProgIDFromCLSID: [ HRESULT, { clsid: IID.Δ, lplpszProgID: LPOLESTR.Δ } ],
  CLSIDFromProgID: [ HRESULT, { lpszProgID: LPCOLESTR, lpclsid: LPCLSID } ],
  CLSIDFromProgIDEx: [ HRESULT, { lpszProgID: LPCOLESTR, lpclsid: LPCLSID } ],
  StringFromGUID2: [ _void, { rguid: GUID.Δ, lpsz: LPOLESTR, cchMax: int } ],
  CoCreateGuid: [ HRESULT, { pguid: GUID.Δ } ],
  CoFileTimeToDosDateTime: [ BOOL, { lpFileTime: FILETIME.Δ, lpDosDate: LPWORD, lpDosTime: LPWORD } ],
  CoDosDateTimeToFileTime: [ BOOL, { nDosDate: WORD, nDosTime: WORD, lpFileTime: FILETIME.Δ } ],
  CoFileTimeNow: [ HRESULT, { lpFileTime: FILETIME.Δ } ],
  CoRegisterMessageFilter: [ HRESULT, { lpMessageFilter: LPMESSAGEFILTER, lplpMessageFilter: LPMESSAGEFILTER.Δ } ],
  CoRegisterChannelHook: [ HRESULT, { ExtensionUuid: GUID.Δ, pChannelHook: IChannelHook.Δ } ],
  CoWaitForMultipleHandles: [ HRESULT, { dwFlags: DWORD, dwTimeout: DWORD, cHandles: ULONG, pHandles: LPHANDLE, lpdwindex: LPDWORD } ],
  CoInvalidateRemoteMachineBindings: [ HRESULT, { pszMachineName: LPOLESTR } ],
  CoGetTreatAsClass: [ HRESULT, { clsidOld: IID.Δ, pClsidNew: LPCLSID } ],
  CoTreatAsClass: [ HRESULT, { clsidOld: IID.Δ, clsidNew: IID.Δ } ],
  DllGetClassObject: [ HRESULT, { rclsid: IID.Δ, riid: IID.Δ, ppv: LPVOID.Δ } ],
  DllCanUnloadNow: [ HRESULT, {  } ],
  CoTaskMemAlloc: [ LPVOID, { cb: SIZE_T } ],
  CoTaskMemRealloc: [ LPVOID, { pv: LPVOID, cb: SIZE_T } ],
  CoTaskMemFree: [ _void, { pv: LPVOID } ],
  CreateDataAdviseHolder: [ HRESULT, { ppDAHolder: LPDATAADVISEHOLDER.Δ } ],
  CreateDataCache: [ HRESULT, { pUnkOuter: LPUNKNOWN, rclsid: IID.Δ, iid: IID.Δ, ppv: LPVOID.Δ } ],
  StgCreateDocfile: [ HRESULT, { pwcsName: WCHAR.Δ, grfMode: DWORD, reserved: DWORD, ppstgOpen: IStorage.Δ.Δ } ],
  StgCreateDocfileOnILockBytes: [ HRESULT, { plkbyt: ILockBytes.Δ, grfMode: DWORD, reserved: DWORD, ppstgOpen: IStorage.Δ.Δ } ],
  StgOpenStorage: [ HRESULT, { pwcsName: WCHAR.Δ, pstgPriority: IStorage.Δ, grfMode: DWORD, snbExclude: SNB, reserved: DWORD, ppstgOpen: IStorage.Δ.Δ } ],
  StgOpenStorageOnILockBytes: [ HRESULT, { plkbyt: ILockBytes.Δ, pstgPriority: IStorage.Δ, grfMode: DWORD, snbExclude: SNB, reserved: DWORD, ppstgOpen: IStorage.Δ.Δ } ],
  StgIsStorageFile: [ HRESULT, { pwcsName: WCHAR.Δ } ],
  StgIsStorageILockBytes: [ HRESULT, { plkbyt: ILockBytes.Δ } ],
  StgSetTimes: [ HRESULT, { lpszName: WCHAR.Δ, pctime: FILETIME.Δ, patime: FILETIME.Δ, pmtime: FILETIME.Δ } ],
  StgOpenAsyncDocfileOnIFillLockBytes: [ HRESULT, { pflb: IFillLockBytes.Δ, grfMode: DWORD, asyncFlags: DWORD, ppstgOpen: IStorage.Δ.Δ } ],
  StgGetIFillLockBytesOnILockBytes: [ HRESULT, { pilb: ILockBytes.Δ, ppflb: IFillLockBytes.Δ.Δ } ],
  StgGetIFillLockBytesOnFile: [ HRESULT, { pwcsName: OLECHAR.Δ, ppflb: IFillLockBytes.Δ.Δ } ],
  StgOpenLayoutDocfile: [ HRESULT, { pwcsDfName: OLECHAR.Δ, grfMode: DWORD, reserved: DWORD, ppstgOpen: IStorage.Δ.Δ } ],
  StgCreateStorageEx: [ HRESULT, { pwcsName: WCHAR.Δ, grfMode: DWORD, stgfmt: DWORD, grfAttrs: DWORD, pStgOptions: STGOPTIONS.Δ, pSecurityDescriptor: PSECURITY_DESCRIPTOR, riid: IID.Δ, ppObjectOpen: _void.Δ.Δ } ],
  StgOpenStorageEx: [ HRESULT, { pwcsName: WCHAR.Δ, grfMode: DWORD, stgfmt: DWORD, grfAttrs: DWORD, pStgOptions: STGOPTIONS.Δ, pSecurityDescriptor: PSECURITY_DESCRIPTOR, riid: IID.Δ, ppObjectOpen: _void.Δ.Δ } ],
  BindMoniker: [ HRESULT, { pmk: LPMONIKER, grfOpt: DWORD, iidResult: IID.Δ, ppvResult: LPVOID.Δ } ],
  CoInstall: [ HRESULT, { pbc: IBindCtx.Δ, dwFlags: DWORD, pClassSpec: uCLSSPEC.Δ, pQuery: QUERYCONTEXT.Δ, pszCodeBase: LPWSTR } ],
  CoGetObject: [ HRESULT, { pszName: LPCWSTR, pBindOptions: BIND_OPTS.Δ, riid: IID.Δ, ppv: _void.Δ.Δ } ],
  MkParseDisplayName: [ HRESULT, { pbc: LPBC, szUserName: LPCOLESTR, pchEaten: ULONG.Δ, ppmk: LPMONIKER.Δ } ],
  MonikerRelativePathTo: [ HRESULT, { pmkSrc: LPMONIKER, pmkDest: LPMONIKER, ppmkRelPath: LPMONIKER.Δ, dwReserved: BOOL } ],
  MonikerCommonPrefixWith: [ HRESULT, { pmkThis: LPMONIKER, pmkOther: LPMONIKER, ppmkCommon: LPMONIKER.Δ } ],
  CreateBindCtx: [ HRESULT, { reserved: DWORD, ppbc: LPBC.Δ } ],
  CreateGenericComposite: [ HRESULT, { pmkFirst: LPMONIKER, pmkRest: LPMONIKER, ppmkComposite: LPMONIKER.Δ } ],
  GetClassFile: [ HRESULT, { szFilename: LPCOLESTR, pclsid: CLSID.Δ } ],
  CreateClassMoniker: [ HRESULT, { rclsid: IID.Δ, ppmk: LPMONIKER.Δ } ],
  CreateFileMoniker: [ HRESULT, { lpszPathName: LPCOLESTR, ppmk: LPMONIKER.Δ } ],
  CreateItemMoniker: [ HRESULT, { lpszDelim: LPCOLESTR, lpszItem: LPCOLESTR, ppmk: LPMONIKER.Δ } ],
  CreateAntiMoniker: [ HRESULT, { ppmk: LPMONIKER.Δ } ],
  CreatePointerMoniker: [ HRESULT, { punk: LPUNKNOWN, ppmk: LPMONIKER.Δ } ],
  CreateObjrefMoniker: [ HRESULT, { punk: LPUNKNOWN, ppmk: LPMONIKER.Δ } ],
  GetRunningObjectTable: [ HRESULT, { reserved: DWORD, pprot: LPRUNNINGOBJECTTABLE.Δ } ],
  CreateStdProgressIndicator: [ HRESULT, { hwndParent: HWND, pszTitle: LPCOLESTR, pIbscCaller: IBindStatusCallback.Δ, ppIbsc: IBindStatusCallback.Δ.Δ } ],