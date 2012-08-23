var ffi = require('ffi');

var
 VoidT = ffi.types.void,
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
 BYTE = uchar.typedef('BYTE'),
 WORD = ushort.typedef('WORD'),
 LPDWORD = ulong.Δ.typedef('LPDWORD'),
 LPVOID = VoidT.Δ.typedef('LPVOID'),
 INT = int.typedef('INT'),
 UINT = uint.typedef('UINT'),
 UINT_PTR = uint.typedef('UINT_PTR'),
 DWORD_PTR = ulong.typedef('DWORD_PTR'),
 CHAR = int8.typedef('CHAR'),
 WCHAR = ushort.typedef('WCHAR'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 PWSTR = ushort.Δ.typedef('PWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 PCWSTR = ushort.Δ.typedef('PCWSTR'),
 LPSTR = int8.Δ.typedef('LPSTR'),
 LPCSTR = int8.Δ.typedef('LPCSTR'),
 HANDLE = VoidT.Δ.typedef('HANDLE'),
 HRESULT = long.typedef('HRESULT'),
 LPARAM = long.typedef('LPARAM'),
 FILEOP_FLAGS = ushort.typedef('FILEOP_FLAGS');

var ASSOCCLASS = new EnumT('ASSOCCLASS', {
 ShellKey: 0,
 ProgidKey: 1,
 ProgidStr: 2,
 ClsidKey: 3,
 ClsidStr: 4,
 AppKey: 5,
 AppStr: 6,
 SystemStr: 7,
 Folder: 8,
 Star: 9
});


var SHSTOCKICONID = new EnumT('SHSTOCKICONID', {
 SiidDocnoassoc: 0,
 SiidDocassoc: 1,
 SiidApplication: 2,
 SiidFolder: 3,
 SiidFolderopen: 4,
 SiidDrive525: 5,
 SiidDrive35: 6,
 SiidDriveremove: 7,
 SiidDrivefixed: 8,
 SiidDrivenet: 9,
 SiidDrivenetdisabled: 10,
 SiidDrivecd: 11,
 SiidDriveram: 12,
 SiidWorld: 13,
 SiidServer: 15,
 SiidPrinter: 16,
 SiidMynetwork: 17,
 SiidFind: 22,
 SiidHelp: 23,
 SiidShare: 28,
 SiidLink: 29,
 SiidSlowfile: 30,
 SiidRecycler: 31,
 SiidRecyclerfull: 32,
 SiidMediacdaudio: 40,
 SiidLock: 47,
 SiidAutolist: 49,
 SiidPrinternet: 50,
 SiidServershare: 51,
 SiidPrinterfax: 52,
 SiidPrinterfaxnet: 53,
 SiidPrinterfile: 54,
 SiidStack: 55,
 SiidMediasvcd: 56,
 SiidStuffedfolder: 57,
 SiidDriveunknown: 58,
 SiidDrivedvd: 59,
 SiidMediadvd: 60,
 SiidMediadvdram: 61,
 SiidMediadvdrw: 62,
 SiidMediadvdr: 63,
 SiidMediadvdrom: 64,
 SiidMediacdaudioplus: 65,
 SiidMediacdrw: 66,
 SiidMediacdr: 67,
 SiidMediacdburn: 68,
 SiidMediablankcd: 69,
 SiidMediacdrom: 70,
 SiidAudiofiles: 71,
 SiidImagefiles: 72,
 SiidVideofiles: 73,
 SiidMixedfiles: 74,
 SiidFolderback: 75,
 SiidFolderfront: 76,
 SiidShield: 77,
 SiidWarning: 78,
 SiidInfo: 79,
 SiidError: 80,
 SiidKey: 81,
 SiidSoftware: 82,
 SiidRename: 83,
 SiidDelete: 84,
 SiidMediaaudiodvd: 85,
 SiidMediamoviedvd: 86,
 SiidMediaenhancedcd: 87,
 SiidMediaenhanceddvd: 88,
 SiidMediahddvd: 89,
 SiidMediabluray: 90,
 SiidMediavcd: 91,
 SiidMediadvdplusr: 92,
 SiidMediadvdplusrw: 93,
 SiidDesktoppc: 94,
 SiidMobilepc: 95,
 SiidUsers: 96,
 SiidMediasmartmedia: 97,
 SiidMediacompactflash: 98,
 SiidDevicecellphone: 99,
 SiidDevicecamera: 100,
 SiidDevicevideocamera: 101,
 SiidDeviceaudioplayer: 102,
 SiidNetworkconnect: 103,
 SiidInternet: 104,
 SiidZipfile: 105,
 SiidSettings: 106,
 SiidDrivehddvd: 132,
 SiidDrivebd: 133,
 SiidMediahddvdrom: 134,
 SiidMediahddvdr: 135,
 SiidMediahddvdram: 136,
 SiidMediabdrom: 137,
 SiidMediabdr: 138,
 SiidMediabdre: 139,
 SiidClustereddrive: 140,
 SiidMaxIcons: 174
});


  PFNCANSHAREFOLDERW = new CallbackT('PFNCANSHAREFOLDERW', long, { 0: ushort.Δ }),
  PFNSHOWSHAREFOLDERUIW = new CallbackT('PFNSHOWSHAREFOLDERUIW', long, { 0: HWND__.Δ, 1: ushort.Δ }),

var HDROP__ = new StructT('HDROP__', {
 unused: int
});

var DRAGINFO = new StructT('DRAGINFO', {
 uSize: UINT,
 pt: POINT,
 fNC: BOOL,
 lpFileList: LPSTR,
 grfKeyState: DWORD
});

var _DRAGINFOW = new StructT('_DRAGINFOW', {
 uSize: UINT,
 pt: POINT,
 fNC: BOOL,
 lpFileList: LPWSTR,
 grfKeyState: DWORD
});

var _AppBarData = new StructT('_AppBarData', {
 cbSize: DWORD,
 hWnd: HWND,
 uCallbackMessage: UINT,
 uEdge: UINT,
 rc: RECT,
 lParam: LPARAM
});

var SHFILEOPSTRUCT = new StructT('SHFILEOPSTRUCT', {
 hwnd: HWND,
 wFunc: UINT,
 pFrom: LPCSTR,
 pTo: LPCSTR,
 fFlags: FILEOP_FLAGS,
 fAnyOperationsAborted: BOOL,
 hNameMappings: LPVOID,
 lpszProgressTitle: LPCSTR
});

var _SHFILEOPSTRUCTW = new StructT('_SHFILEOPSTRUCTW', {
 hwnd: HWND,
 wFunc: UINT,
 pFrom: LPCWSTR,
 pTo: LPCWSTR,
 fFlags: FILEOP_FLAGS,
 fAnyOperationsAborted: BOOL,
 hNameMappings: LPVOID,
 lpszProgressTitle: LPCWSTR
});

var SHNAMEMAPPING = new StructT('SHNAMEMAPPING', {
 pszOldPath: LPSTR,
 pszNewPath: LPSTR,
 cchOldPath: int,
 cchNewPath: int
});

var _SHNAMEMAPPINGW = new StructT('_SHNAMEMAPPINGW', {
 pszOldPath: LPWSTR,
 pszNewPath: LPWSTR,
 cchOldPath: int,
 cchNewPath: int
});

var SHELLEXECUTEINFO = new StructT('SHELLEXECUTEINFO', {
 cbSize: DWORD,
 fMask: ULONG,
 hwnd: HWND,
 lpVerb: LPCSTR,
 lpFile: LPCSTR,
 lpParameters: LPCSTR,
 lpDirectory: LPCSTR,
 nShow: int,
 hInstApp: HINSTANCE,
 lpIDList: VoidT.Δ,
 lpClass: LPCSTR,
 hkeyClass: HKEY,
 dwHotKey: DWORD,
 hProcess: HANDLE
});

var _SHELLEXECUTEINFOW = new StructT('_SHELLEXECUTEINFOW', {
 cbSize: DWORD,
 fMask: ULONG,
 hwnd: HWND,
 lpVerb: LPCWSTR,
 lpFile: LPCWSTR,
 lpParameters: LPCWSTR,
 lpDirectory: LPCWSTR,
 nShow: int,
 hInstApp: HINSTANCE,
 lpIDList: VoidT.Δ,
 lpClass: LPCWSTR,
 hkeyClass: HKEY,
 dwHotKey: DWORD,
 hProcess: HANDLE
});

var _SHCREATEPROCESSINFOW = new StructT('_SHCREATEPROCESSINFOW', {
 cbSize: DWORD,
 fMask: ULONG,
 hwnd: HWND,
 pszFile: LPCWSTR,
 pszParameters: LPCWSTR,
 pszCurrentDirectory: LPCWSTR,
 hUserToken: HANDLE,
 lpProcessAttributes: LPSECURITY_ATTRIBUTES,
 lpThreadAttributes: LPSECURITY_ATTRIBUTES,
 bInheritHandles: BOOL,
 dwCreationFlags: DWORD,
 lpStartupInfo: LPSTARTUPINFOW,
 lpProcessInformation: LPPROCESS_INFORMATION
});

var ASSOCIATIONELEMENT_ = new StructT('ASSOCIATIONELEMENT_', {
 ac: ASSOCCLASS,
 hkClass: HKEY,
 pszClass: PCWSTR
});

var _SHQUERYRBINFO = new StructT('_SHQUERYRBINFO', {
 cbSize: DWORD,
 i64Size: longlong,
 i64NumItems: longlong
});

var NOTIFYICONDATA = new StructT('NOTIFYICONDATA', {
 cbSize: DWORD,
 hWnd: HWND,
 uID: UINT,
 uFlags: UINT,
 uCallbackMessage: UINT,
 hIcon: HICON,
 szTip: ARRAY(CHAR, 128),
 dwState: DWORD,
 dwStateMask: DWORD,
 szInfo: ARRAY(CHAR, 256),
 szInfoTitle: ARRAY(CHAR, 64),
 dwInfoFlags: DWORD,
 guidItem: GUID,
 hBalloonIcon: HICON
});

var _NOTIFYICONDATAW = new StructT('_NOTIFYICONDATAW', {
 cbSize: DWORD,
 hWnd: HWND,
 uID: UINT,
 uFlags: UINT,
 uCallbackMessage: UINT,
 hIcon: HICON,
 szTip: ARRAY(WCHAR, 128),
 dwState: DWORD,
 dwStateMask: DWORD,
 szInfo: ARRAY(WCHAR, 256),
 szInfoTitle: ARRAY(WCHAR, 64),
 dwInfoFlags: DWORD,
 guidItem: GUID,
 hBalloonIcon: HICON
});

var _NOTIFYICONIDENTIFIER = new StructT('_NOTIFYICONIDENTIFIER', {
 cbSize: DWORD,
 hWnd: HWND,
 uID: UINT,
 guidItem: GUID
});

var SHFILEINFO = new StructT('SHFILEINFO', {
 hIcon: HICON,
 iIcon: int,
 dwAttributes: DWORD,
 szDisplayName: ARRAY(CHAR, MAX_PATH),
 szTypeName: ARRAY(CHAR, 80)
});

var _SHFILEINFOW = new StructT('_SHFILEINFOW', {
 hIcon: HICON,
 iIcon: int,
 dwAttributes: DWORD,
 szDisplayName: ARRAY(WCHAR, MAX_PATH),
 szTypeName: ARRAY(WCHAR, 80)
});

var _SHSTOCKICONINFO = new StructT('_SHSTOCKICONINFO', {
 cbSize: DWORD,
 hIcon: HICON,
 iSysImageIndex: int,
 iIcon: int,
 szPath: ARRAY(WCHAR, MAX_PATH)
});

var OPEN_PRINTER_PROPS_INFO = new StructT('OPEN_PRINTER_PROPS_INFO', {
 dwSize: DWORD,
 pszSheetName: LPSTR,
 uSheetIndex: UINT,
 dwFlags: DWORD,
 bModal: BOOL
});

var _OPEN_PRINTER_PROPS_INFOW = new StructT('_OPEN_PRINTER_PROPS_INFOW', {
 dwSize: DWORD,
 pszSheetName: LPWSTR,
 uSheetIndex: UINT,
 dwFlags: DWORD,
 bModal: BOOL
});

var tagNC_ADDRESS = new StructT('tagNC_ADDRESS', {
 pAddrInfo: NET_ADDRESS_INFO_.Δ,
 PortNumber: USHORT,
 PrefixLength: BYTE
});



  DragQueryFileA: [ uint, { hDrop: HDROP, iFile: UINT, lpszFile: LPSTR, cch: UINT } ],
  DragQueryFileW: [ uint, { hDrop: HDROP, iFile: UINT, lpszFile: LPWSTR, cch: UINT } ],
  DragQueryPoint: [ int, { hDrop: HDROP, lppt: LPPOINT } ],
  DragFinish: [ VoidT, { hDrop: HDROP } ],
  DragAcceptFiles: [ VoidT, { hWnd: HWND, fAccept: BOOL } ],
  ShellExecuteA: [ VOIDPTR, { hwnd: HWND, lpOperation: LPCSTR, lpFile: LPCSTR, lpParameters: LPCSTR, lpDirectory: LPCSTR, nShowCmd: INT } ],
  ShellExecuteW: [ VOIDPTR, { hwnd: HWND, lpOperation: LPCWSTR, lpFile: LPCWSTR, lpParameters: LPCWSTR, lpDirectory: LPCWSTR, nShowCmd: INT } ],
  FindExecutableA: [ VOIDPTR, { lpFile: LPCSTR, lpDirectory: LPCSTR, lpResult: LPSTR } ],
  FindExecutableW: [ VOIDPTR, { lpFile: LPCWSTR, lpDirectory: LPCWSTR, lpResult: LPWSTR } ],
  CommandLineToArgvW: [ ushort.Δ, { lpCmdLine: LPCWSTR, pNumArgs: int.Δ } ],
  ShellAboutA: [ int, { hWnd: HWND, szApp: LPCSTR, szOtherStuff: LPCSTR, hIcon: HICON } ],
  ShellAboutW: [ int, { hWnd: HWND, szApp: LPCWSTR, szOtherStuff: LPCWSTR, hIcon: HICON } ],
  DuplicateIcon: [ VOIDPTR, { hInst: HINSTANCE, hIcon: HICON } ],
  ExtractAssociatedIconA: [ VOIDPTR, { hInst: HINSTANCE, pszIconPath: LPSTR, piIcon: ushort.Δ } ],
  ExtractAssociatedIconW: [ VOIDPTR, { hInst: HINSTANCE, pszIconPath: LPWSTR, piIcon: ushort.Δ } ],
  ExtractAssociatedIconExA: [ VOIDPTR, { hInst: HINSTANCE, pszIconPath: LPSTR, piIconIndex: ushort.Δ, piIconId: ushort.Δ } ],
  ExtractAssociatedIconExW: [ VOIDPTR, { hInst: HINSTANCE, pszIconPath: LPWSTR, piIconIndex: ushort.Δ, piIconId: ushort.Δ } ],
  ExtractIconA: [ VOIDPTR, { hInst: HINSTANCE, lpszExeFileName: LPCSTR, nIconIndex: UINT } ],
  ExtractIconW: [ VOIDPTR, { hInst: HINSTANCE, lpszExeFileName: LPCWSTR, nIconIndex: UINT } ],
  SHAppBarMessage: [ uint, { dwMessage: DWORD, pData: PAPPBARDATA } ],
  DoEnvironmentSubstA: [ ulong, { szString: LPSTR, cchString: UINT } ],
  DoEnvironmentSubstW: [ ulong, { szString: LPWSTR, cchString: UINT } ],
  ExtractIconExA: [ uint, { lpszFile: LPCSTR, nIconIndex: int, phiconLarge: VOIDPTR.Δ, phiconSmall: VOIDPTR.Δ, nIcons: UINT } ],
  ExtractIconExW: [ uint, { lpszFile: LPCWSTR, nIconIndex: int, phiconLarge: VOIDPTR.Δ, phiconSmall: VOIDPTR.Δ, nIcons: UINT } ],
  SHFileOperationA: [ VoidT, { lpFileOp: LPSHFILEOPSTRUCTA } ],
  SHFileOperationW: [ VoidT, { lpFileOp: LPSHFILEOPSTRUCTW } ],
  SHFreeNameMappings: [ VoidT, { hNameMappings: HANDLE } ],
  ShellExecuteExA: [ int, { pExecInfo: uint.Δ } ],
  ShellExecuteExW: [ int, { pExecInfo: uint.Δ } ],
  SHCreateProcessAsUserW: [ int, { pscpi: PSHCREATEPROCESSINFOW } ],
  SHEvaluateSystemCommandTemplate: [ long, { pszCmdTemplate: PCWSTR, ppszApplication: ushort.Δ.Δ, ppszCommandLine: ushort.Δ.Δ, ppszParameters: ushort.Δ.Δ } ],
  AssocCreateForClasses: [ long, { rgClasses: uint.Δ, cClasses: ULONG, riid: uint.Δ, ppv: VoidT.Δ.Δ } ],
  SHQueryRecycleBinA: [ long, { pszRootPath: LPCSTR, pSHQueryRBInfo: LPSHQUERYRBINFO } ],
  SHQueryRecycleBinW: [ long, { pszRootPath: LPCWSTR, pSHQueryRBInfo: LPSHQUERYRBINFO } ],
  SHEmptyRecycleBinA: [ long, { hwnd: HWND, pszRootPath: LPCSTR, dwFlags: DWORD } ],
  SHEmptyRecycleBinW: [ long, { hwnd: HWND, pszRootPath: LPCWSTR, dwFlags: DWORD } ],
  SHQueryUserNotificationState: [ long, { pquns: uint.Δ } ],
  SHGetPropertyStoreForWindow: [ long, { hwnd: HWND, riid: uint.Δ, ppv: VoidT.Δ.Δ } ],
  Shell_NotifyIconA: [ int, { dwMessage: DWORD, lpData: PNOTIFYICONDATAA } ],
  Shell_NotifyIconW: [ int, { dwMessage: DWORD, lpData: PNOTIFYICONDATAW } ],
  Shell_NotifyIconGetRect: [ long, { identifier: uint.Δ, iconLocation: uint.Δ } ],
  SHGetFileInfoA: [ ulong, { pszPath: LPCSTR, dwFileAttributes: DWORD, psfi: uint.Δ, cbFileInfo: UINT, uFlags: UINT } ],
  SHGetFileInfoW: [ ulong, { pszPath: LPCWSTR, dwFileAttributes: DWORD, psfi: uint.Δ, cbFileInfo: UINT, uFlags: UINT } ],
  SHGetStockIconInfo: [ long, { siid: SHSTOCKICONID, uFlags: UINT, psii: uint.Δ } ],
  SHGetDiskFreeSpaceExA: [ int, { pszDirectoryName: LPCSTR, pulFreeBytesAvailableToCaller: uint.Δ, pulTotalNumberOfBytes: uint.Δ, pulTotalNumberOfFreeBytes: uint.Δ } ],
  SHGetDiskFreeSpaceExW: [ int, { pszDirectoryName: LPCWSTR, pulFreeBytesAvailableToCaller: uint.Δ, pulTotalNumberOfBytes: uint.Δ, pulTotalNumberOfFreeBytes: uint.Δ } ],
  SHGetNewLinkInfoA: [ int, { pszLinkTo: LPCSTR, pszDir: LPCSTR, pszName: LPSTR, pfMustCopy: int.Δ, uFlags: UINT } ],
  SHGetNewLinkInfoW: [ int, { pszLinkTo: LPCWSTR, pszDir: LPCWSTR, pszName: LPWSTR, pfMustCopy: int.Δ, uFlags: UINT } ],
  SHInvokePrinterCommandA: [ int, { hwnd: HWND, uAction: UINT, lpBuf1: LPCSTR, lpBuf2: LPCSTR, fModal: BOOL } ],
  SHInvokePrinterCommandW: [ int, { hwnd: HWND, uAction: UINT, lpBuf1: LPCWSTR, lpBuf2: LPCWSTR, fModal: BOOL } ],
  SHLoadNonloadedIconOverlayIdentifiers: [ long, {  } ],
  SHIsFileAvailableOffline: [ long, { pwszPath: LPCWSTR, pdwStatus: LPDWORD } ],
  SHSetLocalizedName: [ long, { pszPath: LPCWSTR, pszResModule: LPCWSTR, idsRes: int } ],
  SHRemoveLocalizedName: [ long, { pszPath: LPCWSTR } ],
  SHGetLocalizedName: [ long, { pszPath: LPCWSTR, pszResModule: LPWSTR, cch: UINT, pidsRes: int.Δ } ],
  ShellMessageBoxA: [ VoidT, { hAppInst: HINSTANCE, hWnd: HWND, lpcText: LPCSTR, lpcTitle: LPCSTR, fuStyle: UINT } ],
  ShellMessageBoxW: [ VoidT, { hAppInst: HINSTANCE, hWnd: HWND, lpcText: LPCWSTR, lpcTitle: LPCWSTR, fuStyle: UINT } ],
  IsLFNDriveA: [ int, { pszPath: LPCSTR } ],
  IsLFNDriveW: [ int, { pszPath: LPCWSTR } ],
  SHEnumerateUnreadMailAccountsA: [ long, { hKeyUser: HKEY, dwIndex: DWORD, pszMailAddress: LPSTR, cchMailAddress: int } ],
  SHEnumerateUnreadMailAccountsW: [ long, { hKeyUser: HKEY, dwIndex: DWORD, pszMailAddress: LPWSTR, cchMailAddress: int } ],
  SHGetUnreadMailCountA: [ long, { hKeyUser: HKEY, pszMailAddress: LPCSTR, pdwCount: ulong.Δ, pFileTime: uint.Δ, pszShellExecuteCommand: LPSTR, cchShellExecuteCommand: int } ],
  SHGetUnreadMailCountW: [ long, { hKeyUser: HKEY, pszMailAddress: LPCWSTR, pdwCount: ulong.Δ, pFileTime: uint.Δ, pszShellExecuteCommand: LPWSTR, cchShellExecuteCommand: int } ],
  SHSetUnreadMailCountA: [ long, { pszMailAddress: LPCSTR, dwCount: DWORD, pszShellExecuteCommand: LPCSTR } ],
  SHSetUnreadMailCountW: [ long, { pszMailAddress: LPCWSTR, dwCount: DWORD, pszShellExecuteCommand: LPCWSTR } ],
  SHTestTokenMembership: [ int, { hToken: HANDLE, ulRID: ULONG } ],
  SHGetImageList: [ long, { iImageList: int, riid: uint.Δ, ppvObj: VoidT.Δ.Δ } ],
  InitNetworkAddressControl: [ int, {  } ],
  SHGetDriveMedia: [ long, { pszDrive: LPCWSTR, pdwMediaContent: ulong.Δ } ],