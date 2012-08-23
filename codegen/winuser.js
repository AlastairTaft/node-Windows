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
 va_list = char.Δ.typedef('va_list'),
 ULONG = ulong.typedef('ULONG'),
 PULONG = ulong.Δ.typedef('PULONG'),
 USHORT = ushort.typedef('USHORT'),
 UCHAR = uchar.typedef('UCHAR'),
 DWORD = ulong.typedef('DWORD'),
 BOOL = int.typedef('BOOL'),
 BYTE = uchar.typedef('BYTE'),
 WORD = ushort.typedef('WORD'),
 PBYTE = uchar.Δ.typedef('PBYTE'),
 LPBYTE = uchar.Δ.typedef('LPBYTE'),
 LPINT = int.Δ.typedef('LPINT'),
 LPWORD = ushort.Δ.typedef('LPWORD'),
 LPDWORD = ulong.Δ.typedef('LPDWORD'),
 LPVOID = _void.Δ.typedef('LPVOID'),
 INT = int.typedef('INT'),
 UINT = uint.typedef('UINT'),
 PUINT = uint.Δ.typedef('PUINT'),
 UINT32 = uint.typedef('UINT32'),
 INT_PTR = int.typedef('INT_PTR'),
 UINT_PTR = uint.typedef('UINT_PTR'),
 ULONG_PTR = ulong.typedef('ULONG_PTR'),
 DWORD_PTR = ulong.typedef('DWORD_PTR'),
 PDWORD_PTR = ulong.Δ.typedef('PDWORD_PTR'),
 PVOID = _void.Δ.typedef('PVOID'),
 CHAR = char.typedef('CHAR'),
 SHORT = short.typedef('SHORT'),
 LONG = long.typedef('LONG'),
 WCHAR = ushort.typedef('WCHAR'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 LPSTR = char.Δ.typedef('LPSTR'),
 LPCSTR = char.Δ.typedef('LPCSTR'),
 HANDLE = _void.Δ.typedef('HANDLE'),
 LCID = ulong.typedef('LCID'),
 ULONGLONG = ulonglong.typedef('ULONGLONG'),
 PSECURITY_DESCRIPTOR = _void.Δ.typedef('PSECURITY_DESCRIPTOR'),
 ACCESS_MASK = ulong.typedef('ACCESS_MASK'),
 PSECURITY_INFORMATION = ulong.Δ.typedef('PSECURITY_INFORMATION'),
 WPARAM = uint.typedef('WPARAM'),
 LPARAM = long.typedef('LPARAM'),
 LRESULT = long.typedef('LRESULT'),
 ATOM = ushort.typedef('ATOM'),
 COLORREF = ulong.typedef('COLORREF'),
 HDWP = _void.Δ.typedef('HDWP'),
 HDEVNOTIFY = _void.Δ.typedef('HDEVNOTIFY'),
 HPOWERNOTIFY = _void.Δ.typedef('HPOWERNOTIFY');



  WNDPROC = new CallbackT('WNDPROC', long, [HWND__.Δ, uint, uint, long]),
  DLGPROC = new CallbackT('DLGPROC', int, [HWND__.Δ, uint, uint, long]),
  TIMERPROC = new CallbackT('TIMERPROC', _void, [HWND__.Δ, uint, uint, ulong]),
  GRAYSTRINGPROC = new CallbackT('GRAYSTRINGPROC', int, [HDC__.Δ, long, int]),
  WNDENUMPROC = new CallbackT('WNDENUMPROC', int, [HWND__.Δ, long]),
  HOOKPROC = new CallbackT('HOOKPROC', long, [int, uint, long]),
  SENDASYNCPROC = new CallbackT('SENDASYNCPROC', _void, [HWND__.Δ, uint, ulong, long]),
  PROPENUMPROCA = new CallbackT('PROPENUMPROCA', int, [HWND__.Δ, char.Δ, _void.Δ]),
  PROPENUMPROCW = new CallbackT('PROPENUMPROCW', int, [HWND__.Δ, ushort.Δ, _void.Δ]),
  PROPENUMPROCEXA = new CallbackT('PROPENUMPROCEXA', int, [HWND__.Δ, char.Δ, _void.Δ, ulong]),
  PROPENUMPROCEXW = new CallbackT('PROPENUMPROCEXW', int, [HWND__.Δ, ushort.Δ, _void.Δ, ulong]),
  EDITWORDBREAKPROCA = new CallbackT('EDITWORDBREAKPROCA', int, [char.Δ, int, int, int]),
  EDITWORDBREAKPROCW = new CallbackT('EDITWORDBREAKPROCW', int, [ushort.Δ, int, int, int]),
  DRAWSTATEPROC = new CallbackT('DRAWSTATEPROC', int, [HDC__.Δ, long, uint, int, int]),
  PROPENUMPROC = new CallbackT('PROPENUMPROC', int, [HWND__.Δ, char.Δ, _void.Δ]),
  PROPENUMPROCEX = new CallbackT('PROPENUMPROCEX', int, [HWND__.Δ, char.Δ, _void.Δ, ulong]),
  EDITWORDBREAKPROC = new CallbackT('EDITWORDBREAKPROC', int, [char.Δ, int, int, int]),
  NAMEENUMPROCA = new CallbackT('NAMEENUMPROCA', int, [char.Δ, long]),
  NAMEENUMPROCW = new CallbackT('NAMEENUMPROCW', int, [ushort.Δ, long]),
  WINSTAENUMPROCA = new CallbackT('WINSTAENUMPROCA', int, [char.Δ, long]),
  DESKTOPENUMPROCA = new CallbackT('DESKTOPENUMPROCA', int, [char.Δ, long]),
  WINSTAENUMPROCW = new CallbackT('WINSTAENUMPROCW', int, [ushort.Δ, long]),
  DESKTOPENUMPROCW = new CallbackT('DESKTOPENUMPROCW', int, [ushort.Δ, long]),
  WINSTAENUMPROC = new CallbackT('WINSTAENUMPROC', int, [char.Δ, long]),
  DESKTOPENUMPROC = new CallbackT('DESKTOPENUMPROC', int, [char.Δ, long]),
  PREGISTERCLASSNAMEW = new CallbackT('PREGISTERCLASSNAMEW', uchar, [ushort.Δ]),
  MSGBOXCALLBACK = new CallbackT('MSGBOXCALLBACK', _void, [tagHELPINFO.Δ]),
  MONITORENUMPROC = new CallbackT('MONITORENUMPROC', int, [HMONITOR__.Δ, HDC__.Δ, tagRECT.Δ, long]),
  WINEVENTPROC = new CallbackT('WINEVENTPROC', _void, [HWINEVENTHOOK__.Δ, ulong, HWND__.Δ, long, long, ulong, ulong]),

var CBT_CREATEWND = new StructT('CBT_CREATEWND', {
 lpcs: tagCREATESTRUCTA.Δ,
 hwndInsertAfter: HWND
});

var CREATESTRUCT = new StructT('CREATESTRUCT', {
 lpCreateParams: LPVOID,
 hInstance: HINSTANCE,
 hMenu: HMENU,
 hwndParent: HWND,
 cy: int,
 cx: int,
 y: int,
 x: int,
 style: LONG,
 lpszName: LPCSTR,
 lpszClass: LPCSTR,
 dwExStyle: DWORD
});

var CBT_CREATEWNDW = new StructT('CBT_CREATEWNDW', {
 lpcs: tagCREATESTRUCTW.Δ,
 hwndInsertAfter: HWND
});

var CREATESTRUCTW = new StructT('CREATESTRUCTW', {
 lpCreateParams: LPVOID,
 hInstance: HINSTANCE,
 hMenu: HMENU,
 hwndParent: HWND,
 cy: int,
 cx: int,
 y: int,
 x: int,
 style: LONG,
 lpszName: LPCWSTR,
 lpszClass: LPCWSTR,
 dwExStyle: DWORD
});

var CBTACTIVATESTRUCT = new StructT('CBTACTIVATESTRUCT', {
 fMouse: BOOL,
 hWndActive: HWND
});

var WTSSESSION_NOTIFICATION = new StructT('WTSSESSION_NOTIFICATION', {
 cbSize: DWORD,
 dwSessionId: DWORD
});

var SHELLHOOKINFO = new StructT('SHELLHOOKINFO', {
 hwnd: HWND,
 rc: RECT
});

var EVENTMSG = new StructT('EVENTMSG', {
 message: UINT,
 paramL: UINT,
 paramH: UINT,
 time: DWORD,
 hwnd: HWND
});

var CWPSTRUCT = new StructT('CWPSTRUCT', {
 lParam: LPARAM,
 wParam: WPARAM,
 message: UINT,
 hwnd: HWND
});

var CWPRETSTRUCT = new StructT('CWPRETSTRUCT', {
 lResult: LRESULT,
 lParam: LPARAM,
 wParam: WPARAM,
 message: UINT,
 hwnd: HWND
});

var KBDLLHOOKSTRUCT = new StructT('KBDLLHOOKSTRUCT', {
 vkCode: DWORD,
 scanCode: DWORD,
 flags: DWORD,
 time: DWORD,
 dwExtraInfo: ULONG_PTR
});

var MSLLHOOKSTRUCT = new StructT('MSLLHOOKSTRUCT', {
 pt: POINT,
 mouseData: DWORD,
 flags: DWORD,
 time: DWORD,
 dwExtraInfo: ULONG_PTR
});

var DEBUGHOOKINFO = new StructT('DEBUGHOOKINFO', {
 idThread: DWORD,
 idThreadInstaller: DWORD,
 lParam: LPARAM,
 wParam: WPARAM,
 code: int
});

var MOUSEHOOKSTRUCT = new StructT('MOUSEHOOKSTRUCT', {
 pt: POINT,
 hwnd: HWND,
 wHitTestCode: UINT,
 dwExtraInfo: ULONG_PTR
});

var MOUSEHOOKSTRUCTEX = new StructT('MOUSEHOOKSTRUCTEX', {
 mouseData: DWORD
});

var HARDWAREHOOKSTRUCT = new StructT('HARDWAREHOOKSTRUCT', {
 hwnd: HWND,
 message: UINT,
 wParam: WPARAM,
 lParam: LPARAM
});

var MOUSEMOVEPOINT = new StructT('MOUSEMOVEPOINT', {
 x: int,
 y: int,
 time: DWORD,
 dwExtraInfo: ULONG_PTR
});

var USEROBJECTFLAGS = new StructT('USEROBJECTFLAGS', {
 fInherit: BOOL,
 fReserved: BOOL,
 dwFlags: DWORD
});

var WNDCLASSEX = new StructT('WNDCLASSEX', {
 cbSize: UINT,
 style: UINT,
 lpfnWndProc: WNDPROC,
 cbClsExtra: int,
 cbWndExtra: int,
 hInstance: HINSTANCE,
 hIcon: HICON,
 hCursor: HCURSOR,
 hbrBackground: HBRUSH,
 lpszMenuName: LPCSTR,
 lpszClassName: LPCSTR,
 hIconSm: HICON
});

var WNDCLASSEXW = new StructT('WNDCLASSEXW', {
 cbSize: UINT,
 style: UINT,
 lpfnWndProc: WNDPROC,
 cbClsExtra: int,
 cbWndExtra: int,
 hInstance: HINSTANCE,
 hIcon: HICON,
 hCursor: HCURSOR,
 hbrBackground: HBRUSH,
 lpszMenuName: LPCWSTR,
 lpszClassName: LPCWSTR,
 hIconSm: HICON
});

var WNDCLASS = new StructT('WNDCLASS', {
 style: UINT,
 lpfnWndProc: WNDPROC,
 cbClsExtra: int,
 cbWndExtra: int,
 hInstance: HINSTANCE,
 hIcon: HICON,
 hCursor: HCURSOR,
 hbrBackground: HBRUSH,
 lpszMenuName: LPCSTR,
 lpszClassName: LPCSTR
});

var WNDCLASSW = new StructT('WNDCLASSW', {
 style: UINT,
 lpfnWndProc: WNDPROC,
 cbClsExtra: int,
 cbWndExtra: int,
 hInstance: HINSTANCE,
 hIcon: HICON,
 hCursor: HCURSOR,
 hbrBackground: HBRUSH,
 lpszMenuName: LPCWSTR,
 lpszClassName: LPCWSTR
});

var MSG = new StructT('MSG', {
 hwnd: HWND,
 message: UINT,
 wParam: WPARAM,
 lParam: LPARAM,
 time: DWORD,
 pt: POINT
});

var MINMAXINFO = new StructT('MINMAXINFO', {
 ptReserved: POINT,
 ptMaxSize: POINT,
 ptMaxPosition: POINT,
 ptMinTrackSize: POINT,
 ptMaxTrackSize: POINT
});

var COPYDATASTRUCT = new StructT('COPYDATASTRUCT', {
 dwData: ULONG_PTR,
 cbData: DWORD,
 lpData: PVOID
});

var MDINEXTMENU = new StructT('MDINEXTMENU', {
 hmenuIn: HMENU,
 hmenuNext: HMENU,
 hwndNext: HWND
});

var POWERBROADCAST_SETTING = new StructT('POWERBROADCAST_SETTING', {
 PowerSetting: GUID,
 DataLength: DWORD,
 Data: ARRAY(UCHAR, 1)
});

var WINDOWPOS = new StructT('WINDOWPOS', {
 hwnd: HWND,
 hwndInsertAfter: HWND,
 x: int,
 y: int,
 cx: int,
 cy: int,
 flags: UINT
});

var NCCALCSIZE_PARAMS = new StructT('NCCALCSIZE_PARAMS', {
 rgrc: ARRAY(RECT, 3),
 lppos: PWINDOWPOS
});

var TRACKMOUSEEVENT = new StructT('TRACKMOUSEEVENT', {
 cbSize: DWORD,
 dwFlags: DWORD,
 hwndTrack: HWND,
 dwHoverTime: DWORD
});

var ACCEL = new StructT('ACCEL', {
 fVirt: BYTE,
 key: WORD,
 cmd: WORD
});

var PAINTSTRUCT = new StructT('PAINTSTRUCT', {
 hdc: HDC,
 fErase: BOOL,
 rcPaint: RECT,
 fRestore: BOOL,
 fIncUpdate: BOOL,
 rgbReserved: ARRAY(BYTE, 32)
});

var WINDOWPLACEMENT = new StructT('WINDOWPLACEMENT', {
 length: UINT,
 flags: UINT,
 showCmd: UINT,
 ptMinPosition: POINT,
 ptMaxPosition: POINT,
 rcNormalPosition: RECT
});

var NMHDR = new StructT('NMHDR', {
 hwndFrom: HWND,
 idFrom: UINT_PTR,
 code: UINT
});

var STYLESTRUCT = new StructT('STYLESTRUCT', {
 styleOld: DWORD,
 styleNew: DWORD
});

var MEASUREITEMSTRUCT = new StructT('MEASUREITEMSTRUCT', {
 CtlType: UINT,
 CtlID: UINT,
 itemID: UINT,
 itemWidth: UINT,
 itemHeight: UINT,
 itemData: ULONG_PTR
});

var DRAWITEMSTRUCT = new StructT('DRAWITEMSTRUCT', {
 CtlType: UINT,
 CtlID: UINT,
 itemID: UINT,
 itemAction: UINT,
 itemState: UINT,
 hwndItem: HWND,
 hDC: HDC,
 rcItem: RECT,
 itemData: ULONG_PTR
});

var DELETEITEMSTRUCT = new StructT('DELETEITEMSTRUCT', {
 CtlType: UINT,
 CtlID: UINT,
 itemID: UINT,
 hwndItem: HWND,
 itemData: ULONG_PTR
});

var COMPAREITEMSTRUCT = new StructT('COMPAREITEMSTRUCT', {
 CtlType: UINT,
 CtlID: UINT,
 hwndItem: HWND,
 itemID1: UINT,
 itemData1: ULONG_PTR,
 itemID2: UINT,
 itemData2: ULONG_PTR,
 dwLocaleId: DWORD
});

var BSMINFO = new StructT('BSMINFO', {
 cbSize: UINT,
 hdesk: HDESK,
 hwnd: HWND,
 luid: LUID
});

var UPDATELAYEREDWINDOWINFO = new StructT('UPDATELAYEREDWINDOWINFO', {
 cbSize: DWORD,
 hdcDst: HDC,
 pptDst: POINT.Δ,
 psize: SIZE.Δ,
 hdcSrc: HDC,
 pptSrc: POINT.Δ,
 crKey: COLORREF,
 pblend: BLENDFUNCTION.Δ,
 dwFlags: DWORD,
 prcDirty: RECT.Δ
});

var FLASHWINFO = new StructT('FLASHWINFO', {
 cbSize: UINT,
 hwnd: HWND,
 dwFlags: DWORD,
 uCount: UINT,
 dwTimeout: DWORD
});

var DLGTEMPLATE = new StructT('DLGTEMPLATE', {
 style: DWORD,
 dwExtendedStyle: DWORD,
 cdit: WORD,
 x: short,
 y: short,
 cx: short,
 cy: short
});

var DLGITEMTEMPLATE = new StructT('DLGITEMTEMPLATE', {
 style: DWORD,
 dwExtendedStyle: DWORD,
 x: short,
 y: short,
 cx: short,
 cy: short,
 id: WORD
});

var MOUSEINPUT = new StructT('MOUSEINPUT', {
 dx: LONG,
 dy: LONG,
 mouseData: DWORD,
 dwFlags: DWORD,
 time: DWORD,
 dwExtraInfo: ULONG_PTR
});

var KEYBDINPUT = new StructT('KEYBDINPUT', {
 wVk: WORD,
 wScan: WORD,
 dwFlags: DWORD,
 time: DWORD,
 dwExtraInfo: ULONG_PTR
});

var HARDWAREINPUT = new StructT('HARDWAREINPUT', {
 uMsg: DWORD,
 wParamL: WORD,
 wParamH: WORD
});

var INPUT = new StructT('INPUT', {
 type: DWORD
});

var HTOUCHINPUT__ = new StructT('HTOUCHINPUT__', {
 unused: int
});

var TOUCHINPUT = new StructT('TOUCHINPUT', {
 x: LONG,
 y: LONG,
 hSource: HANDLE,
 dwID: DWORD,
 dwFlags: DWORD,
 dwMask: DWORD,
 dwTime: DWORD,
 dwExtraInfo: ULONG_PTR,
 cxContact: DWORD,
 cyContact: DWORD
});

var LASTINPUTINFO = new StructT('LASTINPUTINFO', {
 cbSize: UINT,
 dwTime: DWORD
});

var TPMPARAMS = new StructT('TPMPARAMS', {
 cbSize: UINT,
 rcExclude: RECT
});

var MENUINFO = new StructT('MENUINFO', {
 cbSize: DWORD,
 fMask: DWORD,
 dwStyle: DWORD,
 cyMax: UINT,
 hbrBack: HBRUSH,
 dwContextHelpID: DWORD,
 dwMenuData: ULONG_PTR
});

var MENUGETOBJECTINFO = new StructT('MENUGETOBJECTINFO', {
 dwFlags: DWORD,
 uPos: UINT,
 hmenu: HMENU,
 riid: PVOID,
 pvObj: PVOID
});

var MENUITEMINFO = new StructT('MENUITEMINFO', {
 cbSize: UINT,
 fMask: UINT,
 fType: UINT,
 fState: UINT,
 wID: UINT,
 hSubMenu: HMENU,
 hbmpChecked: HBITMAP,
 hbmpUnchecked: HBITMAP,
 dwItemData: ULONG_PTR,
 dwTypeData: LPSTR,
 cch: UINT,
 hbmpItem: HBITMAP
});

var MENUITEMINFOW = new StructT('MENUITEMINFOW', {
 cbSize: UINT,
 fMask: UINT,
 fType: UINT,
 fState: UINT,
 wID: UINT,
 hSubMenu: HMENU,
 hbmpChecked: HBITMAP,
 hbmpUnchecked: HBITMAP,
 dwItemData: ULONG_PTR,
 dwTypeData: LPWSTR,
 cch: UINT,
 hbmpItem: HBITMAP
});

var DROPSTRUCT = new StructT('DROPSTRUCT', {
 hwndSource: HWND,
 hwndSink: HWND,
 wFmt: DWORD,
 dwData: ULONG_PTR,
 ptDrop: POINT,
 dwControlData: DWORD
});

var DRAWTEXTPARAMS = new StructT('DRAWTEXTPARAMS', {
 cbSize: UINT,
 iTabLength: int,
 iLeftMargin: int,
 iRightMargin: int,
 uiLengthDrawn: UINT
});

var HELPINFO = new StructT('HELPINFO', {
 cbSize: UINT,
 iContextType: int,
 iCtrlId: int,
 hItemHandle: HANDLE,
 dwContextId: DWORD_PTR,
 MousePos: POINT
});

var MSGBOXPARAMS = new StructT('MSGBOXPARAMS', {
 cbSize: UINT,
 hwndOwner: HWND,
 hInstance: HINSTANCE,
 lpszText: LPCSTR,
 lpszCaption: LPCSTR,
 dwStyle: DWORD,
 lpszIcon: LPCSTR,
 dwContextHelpId: DWORD_PTR,
 lpfnMsgBoxCallback: MSGBOXCALLBACK,
 dwLanguageId: DWORD
});

var MSGBOXPARAMSW = new StructT('MSGBOXPARAMSW', {
 cbSize: UINT,
 hwndOwner: HWND,
 hInstance: HINSTANCE,
 lpszText: LPCWSTR,
 lpszCaption: LPCWSTR,
 dwStyle: DWORD,
 lpszIcon: LPCWSTR,
 dwContextHelpId: DWORD_PTR,
 lpfnMsgBoxCallback: MSGBOXCALLBACK,
 dwLanguageId: DWORD
});

var MENUITEMTEMPLATEHEADER = new StructT('MENUITEMTEMPLATEHEADER', {
 versionNumber: WORD,
 offset: WORD
});

var MENUITEMTEMPLATE = new StructT('MENUITEMTEMPLATE', {
 mtOption: WORD,
 mtID: WORD,
 mtString: ARRAY(WCHAR, 1)
});

var ICONINFO = new StructT('ICONINFO', {
 fIcon: BOOL,
 xHotspot: DWORD,
 yHotspot: DWORD,
 hbmMask: HBITMAP,
 hbmColor: HBITMAP
});

var CURSORSHAPE = new StructT('CURSORSHAPE', {
 xHotSpot: int,
 yHotSpot: int,
 cx: int,
 cy: int,
 cbWidth: int,
 Planes: BYTE,
 BitsPixel: BYTE
});

var ICONINFOEX = new StructT('ICONINFOEX', {
 cbSize: DWORD,
 fIcon: BOOL,
 xHotspot: DWORD,
 yHotspot: DWORD,
 hbmMask: HBITMAP,
 hbmColor: HBITMAP,
 wResID: WORD,
 szModName: ARRAY(CHAR, MAX_PATH),
 szResName: ARRAY(CHAR, MAX_PATH)
});

var ICONINFOEXW = new StructT('ICONINFOEXW', {
 cbSize: DWORD,
 fIcon: BOOL,
 xHotspot: DWORD,
 yHotspot: DWORD,
 hbmMask: HBITMAP,
 hbmColor: HBITMAP,
 wResID: WORD,
 szModName: ARRAY(WCHAR, MAX_PATH),
 szResName: ARRAY(WCHAR, MAX_PATH)
});

var SCROLLINFO = new StructT('SCROLLINFO', {
 cbSize: UINT,
 fMask: UINT,
 nMin: int,
 nMax: int,
 nPage: UINT,
 nPos: int,
 nTrackPos: int
});

var MDICREATESTRUCT = new StructT('MDICREATESTRUCT', {
 szClass: LPCSTR,
 szTitle: LPCSTR,
 hOwner: HANDLE,
 x: int,
 y: int,
 cx: int,
 cy: int,
 style: DWORD,
 lParam: LPARAM
});

var MDICREATESTRUCTW = new StructT('MDICREATESTRUCTW', {
 szClass: LPCWSTR,
 szTitle: LPCWSTR,
 hOwner: HANDLE,
 x: int,
 y: int,
 cx: int,
 cy: int,
 style: DWORD,
 lParam: LPARAM
});

var CLIENTCREATESTRUCT = new StructT('CLIENTCREATESTRUCT', {
 hWindowMenu: HANDLE,
 idFirstChild: UINT
});

var MULTIKEYHELP = new StructT('MULTIKEYHELP', {
 mkSize: DWORD,
 mkKeylist: CHAR,
 szKeyphrase: ARRAY(CHAR, 1)
});

var MULTIKEYHELPW = new StructT('MULTIKEYHELPW', {
 mkSize: DWORD,
 mkKeylist: WCHAR,
 szKeyphrase: ARRAY(WCHAR, 1)
});

var HELPWININFO = new StructT('HELPWININFO', {
 wStructSize: int,
 x: int,
 y: int,
 dx: int,
 dy: int,
 wMax: int,
 rgchMember: ARRAY(CHAR, 2)
});

var HELPWININFOW = new StructT('HELPWININFOW', {
 wStructSize: int,
 x: int,
 y: int,
 dx: int,
 dy: int,
 wMax: int,
 rgchMember: ARRAY(WCHAR, 2)
});

var NONCLIENTMETRICS = new StructT('NONCLIENTMETRICS', {
 cbSize: UINT,
 iBorderWidth: int,
 iScrollWidth: int,
 iScrollHeight: int,
 iCaptionWidth: int,
 iCaptionHeight: int,
 lfCaptionFont: LOGFONTA,
 iSmCaptionWidth: int,
 iSmCaptionHeight: int,
 lfSmCaptionFont: LOGFONTA,
 iMenuWidth: int,
 iMenuHeight: int,
 lfMenuFont: LOGFONTA,
 lfStatusFont: LOGFONTA,
 lfMessageFont: LOGFONTA,
 iPaddedBorderWidth: int
});

var NONCLIENTMETRICSW = new StructT('NONCLIENTMETRICSW', {
 cbSize: UINT,
 iBorderWidth: int,
 iScrollWidth: int,
 iScrollHeight: int,
 iCaptionWidth: int,
 iCaptionHeight: int,
 lfCaptionFont: LOGFONTW,
 iSmCaptionWidth: int,
 iSmCaptionHeight: int,
 lfSmCaptionFont: LOGFONTW,
 iMenuWidth: int,
 iMenuHeight: int,
 lfMenuFont: LOGFONTW,
 lfStatusFont: LOGFONTW,
 lfMessageFont: LOGFONTW,
 iPaddedBorderWidth: int
});

var MINIMIZEDMETRICS = new StructT('MINIMIZEDMETRICS', {
 cbSize: UINT,
 iWidth: int,
 iHorzGap: int,
 iVertGap: int,
 iArrange: int
});

var ICONMETRICS = new StructT('ICONMETRICS', {
 cbSize: UINT,
 iHorzSpacing: int,
 iVertSpacing: int,
 iTitleWrap: int,
 lfFont: LOGFONTA
});

var ICONMETRICSW = new StructT('ICONMETRICSW', {
 cbSize: UINT,
 iHorzSpacing: int,
 iVertSpacing: int,
 iTitleWrap: int,
 lfFont: LOGFONTW
});

var ANIMATIONINFO = new StructT('ANIMATIONINFO', {
 cbSize: UINT,
 iMinAnimate: int
});

var SERIALKEYS = new StructT('SERIALKEYS', {
 cbSize: UINT,
 dwFlags: DWORD,
 lpszActivePort: LPSTR,
 lpszPort: LPSTR,
 iBaudRate: UINT,
 iPortState: UINT,
 iActive: UINT
});

var SERIALKEYSW = new StructT('SERIALKEYSW', {
 cbSize: UINT,
 dwFlags: DWORD,
 lpszActivePort: LPWSTR,
 lpszPort: LPWSTR,
 iBaudRate: UINT,
 iPortState: UINT,
 iActive: UINT
});

var HIGHCONTRAST = new StructT('HIGHCONTRAST', {
 cbSize: UINT,
 dwFlags: DWORD,
 lpszDefaultScheme: LPSTR
});

var HIGHCONTRASTW = new StructT('HIGHCONTRASTW', {
 cbSize: UINT,
 dwFlags: DWORD,
 lpszDefaultScheme: LPWSTR
});

var FILTERKEYS = new StructT('FILTERKEYS', {
 cbSize: UINT,
 dwFlags: DWORD,
 iWaitMSec: DWORD,
 iDelayMSec: DWORD,
 iRepeatMSec: DWORD,
 iBounceMSec: DWORD
});

var STICKYKEYS = new StructT('STICKYKEYS', {
 cbSize: UINT,
 dwFlags: DWORD
});

var MOUSEKEYS = new StructT('MOUSEKEYS', {
 cbSize: UINT,
 dwFlags: DWORD,
 iMaxSpeed: DWORD,
 iTimeToMaxSpeed: DWORD,
 iCtrlSpeed: DWORD,
 dwReserved1: DWORD,
 dwReserved2: DWORD
});

var ACCESSTIMEOUT = new StructT('ACCESSTIMEOUT', {
 cbSize: UINT,
 dwFlags: DWORD,
 iTimeOutMSec: DWORD
});

var SOUNDSENTRY = new StructT('SOUNDSENTRY', {
 cbSize: UINT,
 dwFlags: DWORD,
 iFSTextEffect: DWORD,
 iFSTextEffectMSec: DWORD,
 iFSTextEffectColorBits: DWORD,
 iFSGrafEffect: DWORD,
 iFSGrafEffectMSec: DWORD,
 iFSGrafEffectColor: DWORD,
 iWindowsEffect: DWORD,
 iWindowsEffectMSec: DWORD,
 lpszWindowsEffectDLL: LPSTR,
 iWindowsEffectOrdinal: DWORD
});

var SOUNDSENTRYW = new StructT('SOUNDSENTRYW', {
 cbSize: UINT,
 dwFlags: DWORD,
 iFSTextEffect: DWORD,
 iFSTextEffectMSec: DWORD,
 iFSTextEffectColorBits: DWORD,
 iFSGrafEffect: DWORD,
 iFSGrafEffectMSec: DWORD,
 iFSGrafEffectColor: DWORD,
 iWindowsEffect: DWORD,
 iWindowsEffectMSec: DWORD,
 lpszWindowsEffectDLL: LPWSTR,
 iWindowsEffectOrdinal: DWORD
});

var TOGGLEKEYS = new StructT('TOGGLEKEYS', {
 cbSize: UINT,
 dwFlags: DWORD
});

var AUDIODESCRIPTION = new StructT('AUDIODESCRIPTION', {
 cbSize: UINT,
 Enabled: BOOL,
 Locale: LCID
});

var MONITORINFO = new StructT('MONITORINFO', {
 cbSize: DWORD,
 rcMonitor: RECT,
 rcWork: RECT,
 dwFlags: DWORD
});

var MONITORINFOEX = new StructT('MONITORINFOEX', {
 szDevice: ARRAY(CHAR, CCHDEVICENAME)
});

var MONITORINFOEXW = new StructT('MONITORINFOEXW', {
 szDevice: ARRAY(WCHAR, CCHDEVICENAME)
});

var GUITHREADINFO = new StructT('GUITHREADINFO', {
 cbSize: DWORD,
 flags: DWORD,
 hwndActive: HWND,
 hwndFocus: HWND,
 hwndCapture: HWND,
 hwndMenuOwner: HWND,
 hwndMoveSize: HWND,
 hwndCaret: HWND,
 rcCaret: RECT
});

var CURSORINFO = new StructT('CURSORINFO', {
 cbSize: DWORD,
 flags: DWORD,
 hCursor: HCURSOR,
 ptScreenPos: POINT
});

var WINDOWINFO = new StructT('WINDOWINFO', {
 cbSize: DWORD,
 rcWindow: RECT,
 rcClient: RECT,
 dwStyle: DWORD,
 dwExStyle: DWORD,
 dwWindowStatus: DWORD,
 cxWindowBorders: UINT,
 cyWindowBorders: UINT,
 atomWindowType: ATOM,
 wCreatorVersion: WORD
});

var TITLEBARINFO = new StructT('TITLEBARINFO', {
 cbSize: DWORD,
 rcTitleBar: RECT,
 rgstate: ARRAY(DWORD, undefined)
});

var TITLEBARINFOEX = new StructT('TITLEBARINFOEX', {
 cbSize: DWORD,
 rcTitleBar: RECT,
 rgstate: ARRAY(DWORD, undefined),
 rgrect: ARRAY(RECT, undefined)
});

var MENUBARINFO = new StructT('MENUBARINFO', {
 cbSize: DWORD,
 rcBar: RECT,
 hMenu: HMENU,
 hwndMenu: HWND,
 fBarFocused: BOOL,
 fFocused: BOOL
});

var SCROLLBARINFO = new StructT('SCROLLBARINFO', {
 cbSize: DWORD,
 rcScrollBar: RECT,
 dxyLineButton: int,
 xyThumbTop: int,
 xyThumbBottom: int,
 reserved: int,
 rgstate: ARRAY(DWORD, undefined)
});

var COMBOBOXINFO = new StructT('COMBOBOXINFO', {
 cbSize: DWORD,
 rcItem: RECT,
 rcButton: RECT,
 stateButton: DWORD,
 hwndCombo: HWND,
 hwndItem: HWND,
 hwndList: HWND
});

var ALTTABINFO = new StructT('ALTTABINFO', {
 cbSize: DWORD,
 cItems: int,
 cColumns: int,
 cRows: int,
 iColFocus: int,
 iRowFocus: int,
 cxItem: int,
 cyItem: int,
 ptStart: POINT
});

var HRAWINPUT__ = new StructT('HRAWINPUT__', {
 unused: int
});

var RAWINPUTHEADER = new StructT('RAWINPUTHEADER', {
 dwType: DWORD,
 dwSize: DWORD,
 hDevice: HANDLE,
 wParam: WPARAM
});

var RAWMOUSE = new StructT('RAWMOUSE', {
 usFlags: USHORT,
 ulRawButtons: ULONG,
 lLastX: LONG,
 lLastY: LONG,
 ulExtraInformation: ULONG
});

var undefined = new StructT('undefined', {
 usButtonFlags: USHORT,
 usButtonData: USHORT
});

var RAWKEYBOARD = new StructT('RAWKEYBOARD', {
 MakeCode: USHORT,
 Flags: USHORT,
 Reserved: USHORT,
 VKey: USHORT,
 Message: UINT,
 ExtraInformation: ULONG
});

var RAWHID = new StructT('RAWHID', {
 dwSizeHid: DWORD,
 dwCount: DWORD,
 bRawData: ARRAY(BYTE, 1)
});

var RAWINPUT = new StructT('RAWINPUT', {
 header: RAWINPUTHEADER,
 data: c:winuser.h@307660@S@tagRAWINPUT@Ua
});

var RID_DEVICE_INFO_MOUSE = new StructT('RID_DEVICE_INFO_MOUSE', {
 dwId: DWORD,
 dwNumberOfButtons: DWORD,
 dwSampleRate: DWORD,
 fHasHorizontalWheel: BOOL
});

var RID_DEVICE_INFO_KEYBOARD = new StructT('RID_DEVICE_INFO_KEYBOARD', {
 dwType: DWORD,
 dwSubType: DWORD,
 dwKeyboardMode: DWORD,
 dwNumberOfFunctionKeys: DWORD,
 dwNumberOfIndicators: DWORD,
 dwNumberOfKeysTotal: DWORD
});

var RID_DEVICE_INFO_HID = new StructT('RID_DEVICE_INFO_HID', {
 dwVendorId: DWORD,
 dwProductId: DWORD,
 dwVersionNumber: DWORD,
 usUsagePage: USHORT,
 usUsage: USHORT
});

var RID_DEVICE_INFO = new StructT('RID_DEVICE_INFO', {
 cbSize: DWORD,
 dwType: DWORD
});

var RAWINPUTDEVICE = new StructT('RAWINPUTDEVICE', {
 usUsagePage: USHORT,
 usUsage: USHORT,
 dwFlags: DWORD,
 hwndTarget: HWND
});

var RAWINPUTDEVICELIST = new StructT('RAWINPUTDEVICELIST', {
 hDevice: HANDLE,
 dwType: DWORD
});

var CHANGEFILTERSTRUCT = new StructT('CHANGEFILTERSTRUCT', {
 cbSize: DWORD,
 ExtStatus: DWORD
});

var HGESTUREINFO__ = new StructT('HGESTUREINFO__', {
 unused: int
});

var GESTUREINFO = new StructT('GESTUREINFO', {
 cbSize: UINT,
 dwFlags: DWORD,
 dwID: DWORD,
 hwndTarget: HWND,
 ptsLocation: POINTS,
 dwInstanceID: DWORD,
 dwSequenceID: DWORD,
 ullArguments: ULONGLONG,
 cbExtraArgs: UINT
});

var GESTURENOTIFYSTRUCT = new StructT('GESTURENOTIFYSTRUCT', {
 cbSize: UINT,
 dwFlags: DWORD,
 hwndTarget: HWND,
 ptsLocation: POINTS,
 dwInstanceID: DWORD
});

var GESTURECONFIG = new StructT('GESTURECONFIG', {
 dwID: DWORD,
 dwWant: DWORD,
 dwBlock: DWORD
});


  wvsprintfA: [ _void, { LPCSTR: LPCSTR, arglist: va_list } ],
  wvsprintfW: [ _void, { LPCWSTR: LPCWSTR, arglist: va_list } ],
  wsprintfA: [ _void, { LPCSTR: LPCSTR } ],
  wsprintfW: [ _void, { LPCWSTR: LPCWSTR } ],
  LoadKeyboardLayoutA: [ HKL, { pwszKLID: LPCSTR, Flags: UINT } ],
  LoadKeyboardLayoutW: [ HKL, { pwszKLID: LPCWSTR, Flags: UINT } ],
  ActivateKeyboardLayout: [ HKL, { hkl: HKL, Flags: UINT } ],
  ToUnicodeEx: [ _void, { wVirtKey: UINT, wScanCode: UINT, lpKeyState: BYTE.Δ, pwszBuff: LPWSTR, cchBuff: int, wFlags: UINT, dwhkl: HKL } ],
  UnloadKeyboardLayout: [ BOOL, { hkl: HKL } ],
  GetKeyboardLayoutNameA: [ BOOL, { pwszKLID: LPSTR } ],
  GetKeyboardLayoutNameW: [ BOOL, { pwszKLID: LPWSTR } ],
  GetKeyboardLayoutList: [ _void, { nBuff: int, lpList: HKL.Δ } ],
  GetKeyboardLayout: [ HKL, { idThread: DWORD } ],
  GetMouseMovePointsEx: [ _void, { cbSize: UINT, lppt: LPMOUSEMOVEPOINT, lpptBuf: LPMOUSEMOVEPOINT, nBufPoints: int, resolution: DWORD } ],
  CreateDesktopA: [ HDESK, { lpszDesktop: LPCSTR, lpszDevice: LPCSTR, pDevmode: DEVMODEA.Δ, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES } ],
  CreateDesktopW: [ HDESK, { lpszDesktop: LPCWSTR, lpszDevice: LPCWSTR, pDevmode: DEVMODEW.Δ, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES } ],
  CreateDesktopExA: [ HDESK, { lpszDesktop: LPCSTR, lpszDevice: LPCSTR, pDevmode: DEVMODEA.Δ, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES, ulHeapSize: ULONG, pvoid: PVOID } ],
  CreateDesktopExW: [ HDESK, { lpszDesktop: LPCWSTR, lpszDevice: LPCWSTR, pDevmode: DEVMODEW.Δ, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES, ulHeapSize: ULONG, pvoid: PVOID } ],
  OpenDesktopA: [ HDESK, { lpszDesktop: LPCSTR, dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK } ],
  OpenDesktopW: [ HDESK, { lpszDesktop: LPCWSTR, dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK } ],
  OpenInputDesktop: [ HDESK, { dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK } ],
  EnumDesktopsA: [ BOOL, { hwinsta: HWINSTA, lpEnumFunc: DESKTOPENUMPROCA, lParam: LPARAM } ],
  EnumDesktopsW: [ BOOL, { hwinsta: HWINSTA, lpEnumFunc: DESKTOPENUMPROCW, lParam: LPARAM } ],
  EnumDesktopWindows: [ BOOL, { hDesktop: HDESK, lpfn: WNDENUMPROC, lParam: LPARAM } ],
  SwitchDesktop: [ BOOL, { hDesktop: HDESK } ],
  SetThreadDesktop: [ BOOL, { hDesktop: HDESK } ],
  CloseDesktop: [ BOOL, { hDesktop: HDESK } ],
  GetThreadDesktop: [ HDESK, { dwThreadId: DWORD } ],
  CreateWindowStationA: [ HWINSTA, { lpwinsta: LPCSTR, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES } ],
  CreateWindowStationW: [ HWINSTA, { lpwinsta: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES } ],
  OpenWindowStationA: [ HWINSTA, { lpszWinSta: LPCSTR, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK } ],
  OpenWindowStationW: [ HWINSTA, { lpszWinSta: LPCWSTR, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK } ],
  EnumWindowStationsA: [ BOOL, { lpEnumFunc: WINSTAENUMPROCA, lParam: LPARAM } ],
  EnumWindowStationsW: [ BOOL, { lpEnumFunc: WINSTAENUMPROCW, lParam: LPARAM } ],
  CloseWindowStation: [ BOOL, { hWinSta: HWINSTA } ],
  SetProcessWindowStation: [ BOOL, { hWinSta: HWINSTA } ],
  GetProcessWindowStation: [ HWINSTA, {  } ],
  SetUserObjectSecurity: [ BOOL, { hObj: HANDLE, pSIRequested: PSECURITY_INFORMATION, pSID: PSECURITY_DESCRIPTOR } ],
  GetUserObjectSecurity: [ BOOL, { hObj: HANDLE, pSIRequested: PSECURITY_INFORMATION, pSID: PSECURITY_DESCRIPTOR, nLength: DWORD, lpnLengthNeeded: LPDWORD } ],
  GetUserObjectInformationA: [ BOOL, { hObj: HANDLE, nIndex: int, pvInfo: PVOID, nLength: DWORD, lpnLengthNeeded: LPDWORD } ],
  GetUserObjectInformationW: [ BOOL, { hObj: HANDLE, nIndex: int, pvInfo: PVOID, nLength: DWORD, lpnLengthNeeded: LPDWORD } ],
  SetUserObjectInformationA: [ BOOL, { hObj: HANDLE, nIndex: int, pvInfo: PVOID, nLength: DWORD } ],
  SetUserObjectInformationW: [ BOOL, { hObj: HANDLE, nIndex: int, pvInfo: PVOID, nLength: DWORD } ],
  IsHungAppWindow: [ BOOL, { hwnd: HWND } ],
  DisableProcessWindowsGhosting: [ _void, {  } ],
  RegisterWindowMessageA: [ UINT, { lpString: LPCSTR } ],
  RegisterWindowMessageW: [ UINT, { lpString: LPCWSTR } ],
  TrackMouseEvent: [ BOOL, { lpEventTrack: LPTRACKMOUSEEVENT } ],
  DrawEdge: [ BOOL, { hdc: HDC, qrc: LPRECT, edge: UINT, grfFlags: UINT } ],
  DrawFrameControl: [ BOOL, { UINT: UINT } ],
  DrawCaption: [ BOOL, { hwnd: HWND, hdc: HDC, lprect: RECT.Δ, flags: UINT } ],
  DrawAnimatedRects: [ BOOL, { hwnd: HWND, idAni: int, lprcFrom: RECT.Δ, lprcTo: RECT.Δ } ],
  GetMessageA: [ BOOL, { lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT } ],
  GetMessageW: [ BOOL, { lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT } ],
  TranslateMessage: [ BOOL, { lpMsg: MSG.Δ } ],
  DispatchMessageA: [ LRESULT, { lpMsg: MSG.Δ } ],
  DispatchMessageW: [ LRESULT, { lpMsg: MSG.Δ } ],
  SetMessageQueue: [ BOOL, { cMessagesMax: int } ],
  PeekMessageA: [ BOOL, { lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT, wRemoveMsg: UINT } ],
  PeekMessageW: [ BOOL, { lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT, wRemoveMsg: UINT } ],
  RegisterHotKey: [ BOOL, { hWnd: HWND, id: int, fsModifiers: UINT, vk: UINT } ],
  UnregisterHotKey: [ BOOL, { hWnd: HWND, id: int } ],
  ExitWindowsEx: [ BOOL, { uFlags: UINT, dwReason: DWORD } ],
  SwapMouseButton: [ BOOL, { fSwap: BOOL } ],
  GetMessagePos: [ DWORD, {  } ],
  GetMessageTime: [ LONG, {  } ],
  GetMessageExtraInfo: [ LPARAM, {  } ],
  IsWow64Message: [ BOOL, {  } ],
  SetMessageExtraInfo: [ LPARAM, { lParam: LPARAM } ],
  SendMessageA: [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageW: [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageTimeoutA: [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, fuFlags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR } ],
  SendMessageTimeoutW: [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, fuFlags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR } ],
  SendNotifyMessageA: [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendNotifyMessageW: [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendMessageCallbackA: [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: SENDASYNCPROC, dwData: ULONG_PTR } ],
  SendMessageCallbackW: [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: SENDASYNCPROC, dwData: ULONG_PTR } ],
  BroadcastSystemMessageExA: [ _void, { flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM, pbsmInfo: PBSMINFO } ],
  BroadcastSystemMessageExW: [ _void, { flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM, pbsmInfo: PBSMINFO } ],
  BroadcastSystemMessageA: [ _void, { flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  BroadcastSystemMessageW: [ _void, { flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  RegisterDeviceNotificationA: [ HDEVNOTIFY, { hRecipient: HANDLE, NotificationFilter: LPVOID, Flags: DWORD } ],
  RegisterDeviceNotificationW: [ HDEVNOTIFY, { hRecipient: HANDLE, NotificationFilter: LPVOID, Flags: DWORD } ],
  UnregisterDeviceNotification: [ BOOL, { Handle: HDEVNOTIFY } ],
  RegisterPowerSettingNotification: [ HPOWERNOTIFY, { hRecipient: HANDLE, PowerSettingGuid: LPCGUID, Flags: DWORD } ],
  UnregisterPowerSettingNotification: [ BOOL, { Handle: HPOWERNOTIFY } ],
  PostMessageA: [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  PostMessageW: [ BOOL, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  PostThreadMessageA: [ BOOL, { idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  PostThreadMessageW: [ BOOL, { idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  AttachThreadInput: [ BOOL, { idAttach: DWORD, idAttachTo: DWORD, fAttach: BOOL } ],
  ReplyMessage: [ BOOL, { lResult: LRESULT } ],
  WaitMessage: [ BOOL, {  } ],
  WaitForInputIdle: [ DWORD, { hProcess: HANDLE, dwMilliseconds: DWORD } ],
  DefWindowProcA: [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  DefWindowProcW: [ LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  PostQuitMessage: [ _void, { nExitCode: int } ],
  CallWindowProcA: [ LRESULT, { lpPrevWndFunc: WNDPROC, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  CallWindowProcW: [ LRESULT, { lpPrevWndFunc: WNDPROC, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  InSendMessage: [ BOOL, {  } ],
  InSendMessageEx: [ DWORD, { lpReserved: LPVOID } ],
  GetDoubleClickTime: [ UINT, {  } ],
  SetDoubleClickTime: [ BOOL, { UINT: UINT } ],
  RegisterClassA: [ ATOM, { lpWndClass: WNDCLASSA.Δ } ],
  RegisterClassW: [ ATOM, { lpWndClass: WNDCLASSW.Δ } ],
  UnregisterClassA: [ BOOL, { lpClassName: LPCSTR, hInstance: HINSTANCE } ],
  UnregisterClassW: [ BOOL, { lpClassName: LPCWSTR, hInstance: HINSTANCE } ],
  GetClassInfoA: [ BOOL, { hInstance: HINSTANCE, lpClassName: LPCSTR, lpWndClass: LPWNDCLASSA } ],
  GetClassInfoW: [ BOOL, { hInstance: HINSTANCE, lpClassName: LPCWSTR, lpWndClass: LPWNDCLASSW } ],
  RegisterClassExA: [ ATOM, { WNDCLASSEXA.Δ: WNDCLASSEXA.Δ } ],
  RegisterClassExW: [ ATOM, { WNDCLASSEXW.Δ: WNDCLASSEXW.Δ } ],
  GetClassInfoExA: [ BOOL, { hInstance: HINSTANCE, lpszClass: LPCSTR, lpwcx: LPWNDCLASSEXA } ],
  GetClassInfoExW: [ BOOL, { hInstance: HINSTANCE, lpszClass: LPCWSTR, lpwcx: LPWNDCLASSEXW } ],
  CreateWindowExA: [ HWND, { dwExStyle: DWORD, lpClassName: LPCSTR, lpWindowName: LPCSTR, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hMenu: HMENU, hInstance: HINSTANCE, lpParam: LPVOID } ],
  CreateWindowExW: [ HWND, { dwExStyle: DWORD, lpClassName: LPCWSTR, lpWindowName: LPCWSTR, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hMenu: HMENU, hInstance: HINSTANCE, lpParam: LPVOID } ],
  IsWindow: [ BOOL, { hWnd: HWND } ],
  IsMenu: [ BOOL, { hMenu: HMENU } ],
  IsChild: [ BOOL, { hWndParent: HWND, hWnd: HWND } ],
  DestroyWindow: [ BOOL, { hWnd: HWND } ],
  ShowWindow: [ BOOL, { hWnd: HWND, nCmdShow: int } ],
  AnimateWindow: [ BOOL, { hWnd: HWND, dwTime: DWORD, dwFlags: DWORD } ],
  UpdateLayeredWindow: [ BOOL, { hWnd: HWND, hdcDst: HDC, pptDst: POINT.Δ, psize: SIZE.Δ, hdcSrc: HDC, pptSrc: POINT.Δ, crKey: COLORREF, pblend: BLENDFUNCTION.Δ, dwFlags: DWORD } ],
  UpdateLayeredWindowIndirect: [ BOOL, { hWnd: HWND, pULWInfo: UPDATELAYEREDWINDOWINFO.Δ } ],
  GetLayeredWindowAttributes: [ BOOL, { hwnd: HWND, pcrKey: COLORREF.Δ, pbAlpha: BYTE.Δ, pdwFlags: DWORD.Δ } ],
  PrintWindow: [ BOOL, { hwnd: HWND, hdcBlt: HDC, nFlags: UINT } ],
  SetLayeredWindowAttributes: [ BOOL, { hwnd: HWND, crKey: COLORREF, bAlpha: BYTE, dwFlags: DWORD } ],
  ShowWindowAsync: [ BOOL, { hWnd: HWND, nCmdShow: int } ],
  FlashWindow: [ BOOL, { hWnd: HWND, bInvert: BOOL } ],
  FlashWindowEx: [ BOOL, { pfwi: PFLASHWINFO } ],
  ShowOwnedPopups: [ BOOL, { hWnd: HWND, fShow: BOOL } ],
  OpenIcon: [ BOOL, { hWnd: HWND } ],
  CloseWindow: [ BOOL, { hWnd: HWND } ],
  MoveWindow: [ BOOL, { hWnd: HWND, X: int, Y: int, nWidth: int, nHeight: int, bRepaint: BOOL } ],
  SetWindowPos: [ BOOL, { hWnd: HWND, hWndInsertAfter: HWND, X: int, Y: int, cx: int, cy: int, uFlags: UINT } ],
  GetWindowPlacement: [ BOOL, { hWnd: HWND, lpwndpl: WINDOWPLACEMENT.Δ } ],
  SetWindowPlacement: [ BOOL, { hWnd: HWND, lpwndpl: WINDOWPLACEMENT.Δ } ],
  GetWindowDisplayAffinity: [ BOOL, { hWnd: HWND, pdwAffinity: DWORD.Δ } ],
  SetWindowDisplayAffinity: [ BOOL, { hWnd: HWND, dwAffinity: DWORD } ],
  BeginDeferWindowPos: [ HDWP, { nNumWindows: int } ],
  DeferWindowPos: [ HDWP, { hWinPosInfo: HDWP, hWnd: HWND, hWndInsertAfter: HWND, x: int, y: int, cx: int, cy: int, uFlags: UINT } ],
  EndDeferWindowPos: [ BOOL, { hWinPosInfo: HDWP } ],
  IsWindowVisible: [ BOOL, { hWnd: HWND } ],
  IsIconic: [ BOOL, { hWnd: HWND } ],
  AnyPopup: [ BOOL, {  } ],
  BringWindowToTop: [ BOOL, { hWnd: HWND } ],
  IsZoomed: [ BOOL, { hWnd: HWND } ],
  CreateDialogParamA: [ HWND, { hInstance: HINSTANCE, lpTemplateName: LPCSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM } ],
  CreateDialogParamW: [ HWND, { hInstance: HINSTANCE, lpTemplateName: LPCWSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM } ],
  CreateDialogIndirectParamA: [ HWND, { hInstance: HINSTANCE, lpTemplate: LPCDLGTEMPLATEA, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM } ],
  CreateDialogIndirectParamW: [ HWND, { hInstance: HINSTANCE, lpTemplate: LPCDLGTEMPLATEW, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM } ],
  DialogBoxParamA: [ INT_PTR, { hInstance: HINSTANCE, lpTemplateName: LPCSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM } ],
  DialogBoxParamW: [ INT_PTR, { hInstance: HINSTANCE, lpTemplateName: LPCWSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM } ],
  DialogBoxIndirectParamA: [ INT_PTR, { hInstance: HINSTANCE, hDialogTemplate: LPCDLGTEMPLATEA, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM } ],
  DialogBoxIndirectParamW: [ INT_PTR, { hInstance: HINSTANCE, hDialogTemplate: LPCDLGTEMPLATEW, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM } ],
  EndDialog: [ BOOL, { hDlg: HWND, nResult: INT_PTR } ],
  GetDlgItem: [ HWND, { hDlg: HWND, nIDDlgItem: int } ],
  SetDlgItemInt: [ BOOL, { hDlg: HWND, nIDDlgItem: int, uValue: UINT, bSigned: BOOL } ],
  GetDlgItemInt: [ UINT, { hDlg: HWND, nIDDlgItem: int, lpTranslated: BOOL.Δ, bSigned: BOOL } ],
  SetDlgItemTextA: [ BOOL, { hDlg: HWND, nIDDlgItem: int, lpString: LPCSTR } ],
  SetDlgItemTextW: [ BOOL, { hDlg: HWND, nIDDlgItem: int, lpString: LPCWSTR } ],
  GetDlgItemTextA: [ UINT, { hDlg: HWND, nIDDlgItem: int, lpString: LPSTR, cchMax: int } ],
  GetDlgItemTextW: [ UINT, { hDlg: HWND, nIDDlgItem: int, lpString: LPWSTR, cchMax: int } ],
  CheckDlgButton: [ BOOL, { hDlg: HWND, nIDButton: int, uCheck: UINT } ],
  CheckRadioButton: [ BOOL, { hDlg: HWND, nIDFirstButton: int, nIDLastButton: int, nIDCheckButton: int } ],
  IsDlgButtonChecked: [ UINT, { hDlg: HWND, nIDButton: int } ],
  SendDlgItemMessageA: [ LRESULT, { hDlg: HWND, nIDDlgItem: int, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  SendDlgItemMessageW: [ LRESULT, { hDlg: HWND, nIDDlgItem: int, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  GetNextDlgGroupItem: [ HWND, { hDlg: HWND, hCtl: HWND, bPrevious: BOOL } ],
  GetNextDlgTabItem: [ HWND, { hDlg: HWND, hCtl: HWND, bPrevious: BOOL } ],
  GetDlgCtrlID: [ _void, { hWnd: HWND } ],
  GetDialogBaseUnits: [ _void, {  } ],
  DefDlgProcA: [ LRESULT, { hDlg: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  DefDlgProcW: [ LRESULT, { hDlg: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  CallMsgFilterA: [ BOOL, { lpMsg: LPMSG, nCode: int } ],
  CallMsgFilterW: [ BOOL, { lpMsg: LPMSG, nCode: int } ],
  OpenClipboard: [ BOOL, { hWndNewOwner: HWND } ],
  CloseClipboard: [ BOOL, {  } ],
  GetClipboardSequenceNumber: [ DWORD, {  } ],
  GetClipboardOwner: [ HWND, {  } ],
  SetClipboardViewer: [ HWND, { hWndNewViewer: HWND } ],
  GetClipboardViewer: [ HWND, {  } ],
  ChangeClipboardChain: [ BOOL, { hWndRemove: HWND, hWndNewNext: HWND } ],
  SetClipboardData: [ HANDLE, { uFormat: UINT, hMem: HANDLE } ],
  GetClipboardData: [ HANDLE, { uFormat: UINT } ],
  RegisterClipboardFormatA: [ UINT, { lpszFormat: LPCSTR } ],
  RegisterClipboardFormatW: [ UINT, { lpszFormat: LPCWSTR } ],
  CountClipboardFormats: [ _void, {  } ],
  EnumClipboardFormats: [ UINT, { format: UINT } ],
  GetClipboardFormatNameA: [ _void, { format: UINT, lpszFormatName: LPSTR, cchMaxCount: int } ],
  GetClipboardFormatNameW: [ _void, { format: UINT, lpszFormatName: LPWSTR, cchMaxCount: int } ],
  EmptyClipboard: [ BOOL, {  } ],
  IsClipboardFormatAvailable: [ BOOL, { format: UINT } ],
  GetPriorityClipboardFormat: [ _void, { paFormatPriorityList: UINT.Δ, cFormats: int } ],
  GetOpenClipboardWindow: [ HWND, {  } ],
  AddClipboardFormatListener: [ BOOL, { hwnd: HWND } ],
  RemoveClipboardFormatListener: [ BOOL, { hwnd: HWND } ],
  GetUpdatedClipboardFormats: [ BOOL, { lpuiFormats: PUINT, cFormats: UINT, pcFormatsOut: PUINT } ],
  CharToOemA: [ BOOL, { pSrc: LPCSTR, pDst: LPSTR } ],
  CharToOemW: [ BOOL, { pSrc: LPCWSTR, pDst: LPSTR } ],
  OemToCharA: [ BOOL, { pSrc: LPCSTR, pDst: LPSTR } ],
  OemToCharW: [ BOOL, { pSrc: LPCSTR, pDst: LPWSTR } ],
  CharToOemBuffA: [ BOOL, { lpszSrc: LPCSTR, lpszDst: LPSTR, cchDstLength: DWORD } ],
  CharToOemBuffW: [ BOOL, { lpszSrc: LPCWSTR, lpszDst: LPSTR, cchDstLength: DWORD } ],
  OemToCharBuffA: [ BOOL, { lpszSrc: LPCSTR, lpszDst: LPSTR, cchDstLength: DWORD } ],
  OemToCharBuffW: [ BOOL, { lpszSrc: LPCSTR, lpszDst: LPWSTR, cchDstLength: DWORD } ],
  CharUpperA: [ LPSTR, { lpsz: LPSTR } ],
  CharUpperW: [ LPWSTR, { lpsz: LPWSTR } ],
  CharUpperBuffA: [ DWORD, { lpsz: LPSTR, cchLength: DWORD } ],
  CharUpperBuffW: [ DWORD, { lpsz: LPWSTR, cchLength: DWORD } ],
  CharLowerA: [ LPSTR, { lpsz: LPSTR } ],
  CharLowerW: [ LPWSTR, { lpsz: LPWSTR } ],
  CharLowerBuffA: [ DWORD, { lpsz: LPSTR, cchLength: DWORD } ],
  CharLowerBuffW: [ DWORD, { lpsz: LPWSTR, cchLength: DWORD } ],
  CharNextA: [ LPSTR, { lpsz: LPCSTR } ],
  CharNextW: [ LPWSTR, { lpsz: LPCWSTR } ],
  CharPrevA: [ LPSTR, { lpszStart: LPCSTR, lpszCurrent: LPCSTR } ],
  CharPrevW: [ LPWSTR, { lpszStart: LPCWSTR, lpszCurrent: LPCWSTR } ],
  CharNextExA: [ LPSTR, { CodePage: WORD, lpCurrentChar: LPCSTR, dwFlags: DWORD } ],
  CharPrevExA: [ LPSTR, { CodePage: WORD, lpStart: LPCSTR, lpCurrentChar: LPCSTR, dwFlags: DWORD } ],
  IsCharAlphaA: [ BOOL, { ch: CHAR } ],
  IsCharAlphaW: [ BOOL, { ch: WCHAR } ],
  IsCharAlphaNumericA: [ BOOL, { ch: CHAR } ],
  IsCharAlphaNumericW: [ BOOL, { ch: WCHAR } ],
  IsCharUpperA: [ BOOL, { ch: CHAR } ],
  IsCharUpperW: [ BOOL, { ch: WCHAR } ],
  IsCharLowerA: [ BOOL, { ch: CHAR } ],
  IsCharLowerW: [ BOOL, { ch: WCHAR } ],
  SetFocus: [ HWND, { hWnd: HWND } ],
  GetActiveWindow: [ HWND, {  } ],
  GetFocus: [ HWND, {  } ],
  GetKBCodePage: [ UINT, {  } ],
  GetKeyState: [ SHORT, { nVirtKey: int } ],
  GetAsyncKeyState: [ SHORT, { vKey: int } ],
  GetKeyboardState: [ BOOL, { lpKeyState: PBYTE } ],
  SetKeyboardState: [ BOOL, { lpKeyState: LPBYTE } ],
  GetKeyNameTextA: [ _void, { lParam: LONG, lpString: LPSTR, cchSize: int } ],
  GetKeyNameTextW: [ _void, { lParam: LONG, lpString: LPWSTR, cchSize: int } ],
  GetKeyboardType: [ _void, { nTypeFlag: int } ],
  ToAscii: [ _void, { uVirtKey: UINT, uScanCode: UINT, lpKeyState: BYTE.Δ, lpChar: LPWORD, uFlags: UINT } ],
  ToAsciiEx: [ _void, { uVirtKey: UINT, uScanCode: UINT, lpKeyState: BYTE.Δ, lpChar: LPWORD, uFlags: UINT, dwhkl: HKL } ],
  ToUnicode: [ _void, { wVirtKey: UINT, wScanCode: UINT, lpKeyState: BYTE.Δ, pwszBuff: LPWSTR, cchBuff: int, wFlags: UINT } ],
  OemKeyScan: [ DWORD, { wOemChar: WORD } ],
  VkKeyScanA: [ SHORT, { ch: CHAR } ],
  VkKeyScanW: [ SHORT, { ch: WCHAR } ],
  VkKeyScanExA: [ SHORT, { ch: CHAR, dwhkl: HKL } ],
  VkKeyScanExW: [ SHORT, { ch: WCHAR, dwhkl: HKL } ],
  keybd_event: [ _void, { bVk: BYTE, bScan: BYTE, dwFlags: DWORD, dwExtraInfo: ULONG_PTR } ],
  mouse_event: [ _void, { dwFlags: DWORD, dx: DWORD, dy: DWORD, dwData: DWORD, dwExtraInfo: ULONG_PTR } ],
  SendInput: [ UINT, { cInputs: UINT, pInputs: LPINPUT, cbSize: int } ],
  GetTouchInputInfo: [ BOOL, { hTouchInput: HTOUCHINPUT, cInputs: UINT, pInputs: PTOUCHINPUT, cbSize: int } ],
  CloseTouchInputHandle: [ BOOL, { hTouchInput: HTOUCHINPUT } ],
  RegisterTouchWindow: [ BOOL, { hwnd: HWND, ulFlags: ULONG } ],
  UnregisterTouchWindow: [ BOOL, { hwnd: HWND } ],
  IsTouchWindow: [ BOOL, { hwnd: HWND, pulFlags: PULONG } ],
  GetLastInputInfo: [ BOOL, { plii: PLASTINPUTINFO } ],
  MapVirtualKeyA: [ UINT, { uCode: UINT, uMapType: UINT } ],
  MapVirtualKeyW: [ UINT, { uCode: UINT, uMapType: UINT } ],
  MapVirtualKeyExA: [ UINT, { uCode: UINT, uMapType: UINT, dwhkl: HKL } ],
  MapVirtualKeyExW: [ UINT, { uCode: UINT, uMapType: UINT, dwhkl: HKL } ],
  GetInputState: [ BOOL, {  } ],
  GetQueueStatus: [ DWORD, { flags: UINT } ],
  GetCapture: [ HWND, {  } ],
  SetCapture: [ HWND, { hWnd: HWND } ],
  ReleaseCapture: [ BOOL, {  } ],
  MsgWaitForMultipleObjects: [ DWORD, { nCount: DWORD, pHandles: HANDLE.Δ, fWaitAll: BOOL, dwMilliseconds: DWORD, dwWakeMask: DWORD } ],
  MsgWaitForMultipleObjectsEx: [ DWORD, { nCount: DWORD, pHandles: HANDLE.Δ, dwMilliseconds: DWORD, dwWakeMask: DWORD, dwFlags: DWORD } ],
  SetTimer: [ UINT_PTR, { hWnd: HWND, nIDEvent: UINT_PTR, uElapse: UINT, lpTimerFunc: TIMERPROC } ],
  KillTimer: [ BOOL, { hWnd: HWND, uIDEvent: UINT_PTR } ],
  IsWindowUnicode: [ BOOL, { hWnd: HWND } ],
  EnableWindow: [ BOOL, { hWnd: HWND, bEnable: BOOL } ],
  IsWindowEnabled: [ BOOL, { hWnd: HWND } ],
  LoadAcceleratorsA: [ HACCEL, { hInstance: HINSTANCE, lpTableName: LPCSTR } ],
  LoadAcceleratorsW: [ HACCEL, { hInstance: HINSTANCE, lpTableName: LPCWSTR } ],
  CreateAcceleratorTableA: [ HACCEL, { paccel: LPACCEL, cAccel: int } ],
  CreateAcceleratorTableW: [ HACCEL, { paccel: LPACCEL, cAccel: int } ],
  DestroyAcceleratorTable: [ BOOL, { hAccel: HACCEL } ],
  CopyAcceleratorTableA: [ _void, { hAccelSrc: HACCEL, lpAccelDst: LPACCEL, cAccelEntries: int } ],
  CopyAcceleratorTableW: [ _void, { hAccelSrc: HACCEL, lpAccelDst: LPACCEL, cAccelEntries: int } ],
  TranslateAcceleratorA: [ _void, { hWnd: HWND, hAccTable: HACCEL, lpMsg: LPMSG } ],
  TranslateAcceleratorW: [ _void, { hWnd: HWND, hAccTable: HACCEL, lpMsg: LPMSG } ],
  GetSystemMetrics: [ _void, { nIndex: int } ],
  LoadMenuA: [ HMENU, { hInstance: HINSTANCE, lpMenuName: LPCSTR } ],
  LoadMenuW: [ HMENU, { hInstance: HINSTANCE, lpMenuName: LPCWSTR } ],
  LoadMenuIndirectA: [ HMENU, { lpMenuTemplate: MENUTEMPLATEA.Δ } ],
  LoadMenuIndirectW: [ HMENU, { lpMenuTemplate: MENUTEMPLATEW.Δ } ],
  GetMenu: [ HMENU, { hWnd: HWND } ],
  SetMenu: [ BOOL, { hWnd: HWND, hMenu: HMENU } ],
  ChangeMenuA: [ BOOL, { hMenu: HMENU, cmd: UINT, lpszNewItem: LPCSTR, cmdInsert: UINT, flags: UINT } ],
  ChangeMenuW: [ BOOL, { hMenu: HMENU, cmd: UINT, lpszNewItem: LPCWSTR, cmdInsert: UINT, flags: UINT } ],
  HiliteMenuItem: [ BOOL, { hWnd: HWND, hMenu: HMENU, uIDHiliteItem: UINT, uHilite: UINT } ],
  GetMenuStringA: [ _void, { hMenu: HMENU, uIDItem: UINT, lpString: LPSTR, cchMax: int, flags: UINT } ],
  GetMenuStringW: [ _void, { hMenu: HMENU, uIDItem: UINT, lpString: LPWSTR, cchMax: int, flags: UINT } ],
  GetMenuState: [ UINT, { hMenu: HMENU, uId: UINT, uFlags: UINT } ],
  DrawMenuBar: [ BOOL, { hWnd: HWND } ],
  GetSystemMenu: [ HMENU, { hWnd: HWND, bRevert: BOOL } ],
  CreateMenu: [ HMENU, {  } ],
  CreatePopupMenu: [ HMENU, {  } ],
  DestroyMenu: [ BOOL, { hMenu: HMENU } ],
  CheckMenuItem: [ DWORD, { hMenu: HMENU, uIDCheckItem: UINT, uCheck: UINT } ],
  EnableMenuItem: [ BOOL, { hMenu: HMENU, uIDEnableItem: UINT, uEnable: UINT } ],
  GetSubMenu: [ HMENU, { hMenu: HMENU, nPos: int } ],
  GetMenuItemID: [ UINT, { hMenu: HMENU, nPos: int } ],
  GetMenuItemCount: [ _void, { hMenu: HMENU } ],
  InsertMenuA: [ BOOL, { hMenu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCSTR } ],
  InsertMenuW: [ BOOL, { hMenu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR } ],
  AppendMenuA: [ BOOL, { hMenu: HMENU, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCSTR } ],
  AppendMenuW: [ BOOL, { hMenu: HMENU, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR } ],
  ModifyMenuA: [ BOOL, { hMnu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCSTR } ],
  ModifyMenuW: [ BOOL, { hMnu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR } ],
  RemoveMenu: [ BOOL, { hMenu: HMENU, uPosition: UINT, uFlags: UINT } ],
  DeleteMenu: [ BOOL, { hMenu: HMENU, uPosition: UINT, uFlags: UINT } ],
  SetMenuItemBitmaps: [ BOOL, { hMenu: HMENU, uPosition: UINT, uFlags: UINT, hBitmapUnchecked: HBITMAP, hBitmapChecked: HBITMAP } ],
  GetMenuCheckMarkDimensions: [ LONG, {  } ],
  TrackPopupMenu: [ BOOL, { hMenu: HMENU, uFlags: UINT, x: int, y: int, nReserved: int, hWnd: HWND, prcRect: RECT.Δ } ],
  TrackPopupMenuEx: [ BOOL, { LPTPMPARAMS: LPTPMPARAMS } ],
  CalculatePopupWindowPosition: [ BOOL, { anchorPoint: POINT.Δ, windowSize: SIZE.Δ, flags: UINT, excludeRect: RECT.Δ, popupWindowPosition: RECT.Δ } ],
  GetMenuInfo: [ BOOL, { LPMENUINFO: LPMENUINFO } ],
  SetMenuInfo: [ BOOL, { LPCMENUINFO: LPCMENUINFO } ],
  EndMenu: [ BOOL, {  } ],
  InsertMenuItemA: [ BOOL, { hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmi: LPCMENUITEMINFOA } ],
  InsertMenuItemW: [ BOOL, { hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmi: LPCMENUITEMINFOW } ],
  GetMenuItemInfoA: [ BOOL, { hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmii: LPMENUITEMINFOA } ],
  GetMenuItemInfoW: [ BOOL, { hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmii: LPMENUITEMINFOW } ],
  SetMenuItemInfoA: [ BOOL, { hmenu: HMENU, item: UINT, fByPositon: BOOL, lpmii: LPCMENUITEMINFOA } ],
  SetMenuItemInfoW: [ BOOL, { hmenu: HMENU, item: UINT, fByPositon: BOOL, lpmii: LPCMENUITEMINFOW } ],
  GetMenuDefaultItem: [ UINT, { hMenu: HMENU, fByPos: UINT, gmdiFlags: UINT } ],
  SetMenuDefaultItem: [ BOOL, { hMenu: HMENU, uItem: UINT, fByPos: UINT } ],
  GetMenuItemRect: [ BOOL, { hWnd: HWND, hMenu: HMENU, uItem: UINT, lprcItem: LPRECT } ],
  MenuItemFromPoint: [ _void, { hWnd: HWND, hMenu: HMENU, ptScreen: POINT } ],
  DragObject: [ DWORD, { hwndParent: HWND, hwndFrom: HWND, fmt: UINT, data: ULONG_PTR, hcur: HCURSOR } ],
  DragDetect: [ BOOL, { hwnd: HWND, pt: POINT } ],
  DrawIcon: [ BOOL, { hDC: HDC, X: int, Y: int, hIcon: HICON } ],
  DrawTextA: [ _void, { hdc: HDC, lpchText: LPCSTR, cchText: int, lprc: LPRECT, format: UINT } ],
  DrawTextW: [ _void, { hdc: HDC, lpchText: LPCWSTR, cchText: int, lprc: LPRECT, format: UINT } ],
  DrawTextExA: [ _void, { hdc: HDC, lpchText: LPSTR, cchText: int, lprc: LPRECT, format: UINT, lpdtp: LPDRAWTEXTPARAMS } ],
  DrawTextExW: [ _void, { hdc: HDC, lpchText: LPWSTR, cchText: int, lprc: LPRECT, format: UINT, lpdtp: LPDRAWTEXTPARAMS } ],
  GrayStringA: [ BOOL, { hDC: HDC, hBrush: HBRUSH, lpOutputFunc: GRAYSTRINGPROC, lpData: LPARAM, nCount: int, X: int, Y: int, nWidth: int, nHeight: int } ],
  GrayStringW: [ BOOL, { hDC: HDC, hBrush: HBRUSH, lpOutputFunc: GRAYSTRINGPROC, lpData: LPARAM, nCount: int, X: int, Y: int, nWidth: int, nHeight: int } ],
  DrawStateA: [ BOOL, { hdc: HDC, hbrFore: HBRUSH, qfnCallBack: DRAWSTATEPROC, lData: LPARAM, wData: WPARAM, x: int, y: int, cx: int, cy: int, uFlags: UINT } ],
  DrawStateW: [ BOOL, { hdc: HDC, hbrFore: HBRUSH, qfnCallBack: DRAWSTATEPROC, lData: LPARAM, wData: WPARAM, x: int, y: int, cx: int, cy: int, uFlags: UINT } ],
  TabbedTextOutA: [ LONG, { hdc: HDC, x: int, y: int, lpString: LPCSTR, chCount: int, nTabPositions: int, lpnTabStopPositions: INT.Δ, nTabOrigin: int } ],
  TabbedTextOutW: [ LONG, { hdc: HDC, x: int, y: int, lpString: LPCWSTR, chCount: int, nTabPositions: int, lpnTabStopPositions: INT.Δ, nTabOrigin: int } ],
  GetTabbedTextExtentA: [ DWORD, { hdc: HDC, lpString: LPCSTR, chCount: int, nTabPositions: int, lpnTabStopPositions: INT.Δ } ],
  GetTabbedTextExtentW: [ DWORD, { hdc: HDC, lpString: LPCWSTR, chCount: int, nTabPositions: int, lpnTabStopPositions: INT.Δ } ],
  UpdateWindow: [ BOOL, { hWnd: HWND } ],
  SetActiveWindow: [ HWND, { hWnd: HWND } ],
  GetForegroundWindow: [ HWND, {  } ],
  PaintDesktop: [ BOOL, { hdc: HDC } ],
  SwitchToThisWindow: [ _void, { hwnd: HWND, fUnknown: BOOL } ],
  SetForegroundWindow: [ BOOL, { hWnd: HWND } ],
  AllowSetForegroundWindow: [ BOOL, { dwProcessId: DWORD } ],
  LockSetForegroundWindow: [ BOOL, { uLockCode: UINT } ],
  WindowFromDC: [ HWND, { hDC: HDC } ],
  GetDC: [ HDC, { hWnd: HWND } ],
  GetDCEx: [ HDC, { hWnd: HWND, hrgnClip: HRGN, flags: DWORD } ],
  GetWindowDC: [ HDC, { hWnd: HWND } ],
  ReleaseDC: [ _void, { hWnd: HWND, hDC: HDC } ],
  BeginPaint: [ HDC, { hWnd: HWND, lpPaint: LPPAINTSTRUCT } ],
  EndPaint: [ BOOL, { hWnd: HWND, lpPaint: PAINTSTRUCT.Δ } ],
  GetUpdateRect: [ BOOL, { hWnd: HWND, lpRect: LPRECT, bErase: BOOL } ],
  GetUpdateRgn: [ _void, { hWnd: HWND, hRgn: HRGN, bErase: BOOL } ],
  SetWindowRgn: [ _void, { hWnd: HWND, hRgn: HRGN, bRedraw: BOOL } ],
  GetWindowRgn: [ _void, { hWnd: HWND, hRgn: HRGN } ],
  GetWindowRgnBox: [ _void, { hWnd: HWND, lprc: LPRECT } ],
  ExcludeUpdateRgn: [ _void, { hDC: HDC, hWnd: HWND } ],
  InvalidateRect: [ BOOL, { hWnd: HWND, lpRect: RECT.Δ, bErase: BOOL } ],
  ValidateRect: [ BOOL, { hWnd: HWND, lpRect: RECT.Δ } ],
  InvalidateRgn: [ BOOL, { hWnd: HWND, hRgn: HRGN, bErase: BOOL } ],
  ValidateRgn: [ BOOL, { hWnd: HWND, hRgn: HRGN } ],
  RedrawWindow: [ BOOL, { hWnd: HWND, lprcUpdate: RECT.Δ, hrgnUpdate: HRGN, flags: UINT } ],
  LockWindowUpdate: [ BOOL, { hWndLock: HWND } ],
  ScrollWindow: [ BOOL, { hWnd: HWND, XAmount: int, YAmount: int, lpRect: RECT.Δ, lpClipRect: RECT.Δ } ],
  ScrollDC: [ BOOL, { hDC: HDC, dx: int, dy: int, lprcScroll: RECT.Δ, lprcClip: RECT.Δ, hrgnUpdate: HRGN, lprcUpdate: LPRECT } ],
  ScrollWindowEx: [ _void, { hWnd: HWND, dx: int, dy: int, prcScroll: RECT.Δ, prcClip: RECT.Δ, hrgnUpdate: HRGN, prcUpdate: LPRECT, flags: UINT } ],
  SetScrollPos: [ _void, { hWnd: HWND, nBar: int, nPos: int, bRedraw: BOOL } ],
  GetScrollPos: [ _void, { hWnd: HWND, nBar: int } ],
  SetScrollRange: [ BOOL, { hWnd: HWND, nBar: int, nMinPos: int, nMaxPos: int, bRedraw: BOOL } ],
  GetScrollRange: [ BOOL, { hWnd: HWND, nBar: int, lpMinPos: LPINT, lpMaxPos: LPINT } ],
  ShowScrollBar: [ BOOL, { hWnd: HWND, wBar: int, bShow: BOOL } ],
  EnableScrollBar: [ BOOL, { hWnd: HWND, wSBflags: UINT, wArrows: UINT } ],
  SetPropA: [ BOOL, { hWnd: HWND, lpString: LPCSTR, hData: HANDLE } ],
  SetPropW: [ BOOL, { hWnd: HWND, lpString: LPCWSTR, hData: HANDLE } ],
  GetPropA: [ HANDLE, { hWnd: HWND, lpString: LPCSTR } ],
  GetPropW: [ HANDLE, { hWnd: HWND, lpString: LPCWSTR } ],
  RemovePropA: [ HANDLE, { hWnd: HWND, lpString: LPCSTR } ],
  RemovePropW: [ HANDLE, { hWnd: HWND, lpString: LPCWSTR } ],
  EnumPropsExA: [ _void, { hWnd: HWND, lpEnumFunc: PROPENUMPROCEXA, lParam: LPARAM } ],
  EnumPropsExW: [ _void, { hWnd: HWND, lpEnumFunc: PROPENUMPROCEXW, lParam: LPARAM } ],
  EnumPropsA: [ _void, { hWnd: HWND, lpEnumFunc: PROPENUMPROCA } ],
  EnumPropsW: [ _void, { hWnd: HWND, lpEnumFunc: PROPENUMPROCW } ],
  SetWindowTextA: [ BOOL, { hWnd: HWND, lpString: LPCSTR } ],
  SetWindowTextW: [ BOOL, { hWnd: HWND, lpString: LPCWSTR } ],
  GetWindowTextA: [ _void, { hWnd: HWND, lpString: LPSTR, nMaxCount: int } ],
  GetWindowTextW: [ _void, { hWnd: HWND, lpString: LPWSTR, nMaxCount: int } ],
  GetWindowTextLengthA: [ _void, { hWnd: HWND } ],
  GetWindowTextLengthW: [ _void, { hWnd: HWND } ],
  GetClientRect: [ BOOL, { hWnd: HWND, lpRect: LPRECT } ],
  GetWindowRect: [ BOOL, { hWnd: HWND, lpRect: LPRECT } ],
  AdjustWindowRect: [ BOOL, { lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL } ],
  AdjustWindowRectEx: [ BOOL, { lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL, dwExStyle: DWORD } ],
  SetWindowContextHelpId: [ BOOL, { DWORD: DWORD } ],
  GetWindowContextHelpId: [ DWORD, { HWND: HWND } ],
  SetMenuContextHelpId: [ BOOL, { DWORD: DWORD } ],
  GetMenuContextHelpId: [ DWORD, { HMENU: HMENU } ],
  MessageBoxA: [ _void, { hWnd: HWND, lpText: LPCSTR, lpCaption: LPCSTR, uType: UINT } ],
  MessageBoxW: [ _void, { hWnd: HWND, lpText: LPCWSTR, lpCaption: LPCWSTR, uType: UINT } ],
  MessageBoxExA: [ _void, { hWnd: HWND, lpText: LPCSTR, lpCaption: LPCSTR, uType: UINT, wLanguageId: WORD } ],
  MessageBoxExW: [ _void, { hWnd: HWND, lpText: LPCWSTR, lpCaption: LPCWSTR, uType: UINT, wLanguageId: WORD } ],
  MessageBoxIndirectA: [ _void, { lpmbp: MSGBOXPARAMSA.Δ } ],
  MessageBoxIndirectW: [ _void, { lpmbp: MSGBOXPARAMSW.Δ } ],
  MessageBeep: [ BOOL, { uType: UINT } ],
  ShowCursor: [ _void, { bShow: BOOL } ],
  SetCursorPos: [ BOOL, { X: int, Y: int } ],
  SetPhysicalCursorPos: [ BOOL, { X: int, Y: int } ],
  SetCursor: [ HCURSOR, { hCursor: HCURSOR } ],
  GetCursorPos: [ BOOL, { lpPoint: LPPOINT } ],
  GetPhysicalCursorPos: [ BOOL, { lpPoint: LPPOINT } ],
  ClipCursor: [ BOOL, { lpRect: RECT.Δ } ],
  GetClipCursor: [ BOOL, { lpRect: LPRECT } ],
  GetCursor: [ HCURSOR, {  } ],
  CreateCaret: [ BOOL, { hWnd: HWND, hBitmap: HBITMAP, nWidth: int, nHeight: int } ],
  GetCaretBlinkTime: [ UINT, {  } ],
  SetCaretBlinkTime: [ BOOL, { uMSeconds: UINT } ],
  DestroyCaret: [ BOOL, {  } ],
  HideCaret: [ BOOL, { hWnd: HWND } ],
  ShowCaret: [ BOOL, { hWnd: HWND } ],
  SetCaretPos: [ BOOL, { X: int, Y: int } ],
  GetCaretPos: [ BOOL, { lpPoint: LPPOINT } ],
  ClientToScreen: [ BOOL, { hWnd: HWND, lpPoint: LPPOINT } ],
  ScreenToClient: [ BOOL, { hWnd: HWND, lpPoint: LPPOINT } ],
  LogicalToPhysicalPoint: [ BOOL, { hWnd: HWND, lpPoint: LPPOINT } ],
  PhysicalToLogicalPoint: [ BOOL, { hWnd: HWND, lpPoint: LPPOINT } ],
  MapWindowPoints: [ _void, { hWndFrom: HWND, hWndTo: HWND, lpPoints: LPPOINT, cPoints: UINT } ],
  WindowFromPoint: [ HWND, { Point: POINT } ],
  WindowFromPhysicalPoint: [ HWND, { Point: POINT } ],
  ChildWindowFromPoint: [ HWND, { hWndParent: HWND, Point: POINT } ],
  ChildWindowFromPointEx: [ HWND, { hwnd: HWND, pt: POINT, flags: UINT } ],
  GetSysColor: [ DWORD, { nIndex: int } ],
  GetSysColorBrush: [ HBRUSH, { nIndex: int } ],
  SetSysColors: [ BOOL, { cElements: int, lpaElements: INT.Δ, lpaRgbValues: COLORREF.Δ } ],
  DrawFocusRect: [ BOOL, { hDC: HDC, lprc: RECT.Δ } ],
  FillRect: [ _void, { hDC: HDC, lprc: RECT.Δ, hbr: HBRUSH } ],
  FrameRect: [ _void, { hDC: HDC, lprc: RECT.Δ, hbr: HBRUSH } ],
  InvertRect: [ BOOL, { hDC: HDC, lprc: RECT.Δ } ],
  SetRect: [ BOOL, { lprc: LPRECT, xLeft: int, yTop: int, xRight: int, yBottom: int } ],
  SetRectEmpty: [ BOOL, { lprc: LPRECT } ],
  CopyRect: [ BOOL, { lprcDst: LPRECT, lprcSrc: RECT.Δ } ],
  InflateRect: [ BOOL, { lprc: LPRECT, dx: int, dy: int } ],
  IntersectRect: [ BOOL, { lprcDst: LPRECT, lprcSrc1: RECT.Δ, lprcSrc2: RECT.Δ } ],
  UnionRect: [ BOOL, { lprcDst: LPRECT, lprcSrc1: RECT.Δ, lprcSrc2: RECT.Δ } ],
  SubtractRect: [ BOOL, { lprcDst: LPRECT, lprcSrc1: RECT.Δ, lprcSrc2: RECT.Δ } ],
  OffsetRect: [ BOOL, { lprc: LPRECT, dx: int, dy: int } ],
  IsRectEmpty: [ BOOL, { lprc: RECT.Δ } ],
  EqualRect: [ BOOL, { lprc1: RECT.Δ, lprc2: RECT.Δ } ],
  PtInRect: [ BOOL, { lprc: RECT.Δ, pt: POINT } ],
  GetWindowWord: [ WORD, { hWnd: HWND, nIndex: int } ],
  SetWindowWord: [ WORD, { hWnd: HWND, nIndex: int, wNewWord: WORD } ],
  GetWindowLongA: [ LONG, { hWnd: HWND, nIndex: int } ],
  GetWindowLongW: [ LONG, { hWnd: HWND, nIndex: int } ],
  SetWindowLongA: [ LONG, { hWnd: HWND, nIndex: int, dwNewLong: LONG } ],
  SetWindowLongW: [ LONG, { hWnd: HWND, nIndex: int, dwNewLong: LONG } ],
  GetClassWord: [ WORD, { hWnd: HWND, nIndex: int } ],
  SetClassWord: [ WORD, { hWnd: HWND, nIndex: int, wNewWord: WORD } ],
  GetClassLongA: [ DWORD, { hWnd: HWND, nIndex: int } ],
  GetClassLongW: [ DWORD, { hWnd: HWND, nIndex: int } ],
  SetClassLongA: [ DWORD, { hWnd: HWND, nIndex: int, dwNewLong: LONG } ],
  SetClassLongW: [ DWORD, { hWnd: HWND, nIndex: int, dwNewLong: LONG } ],
  GetProcessDefaultLayout: [ BOOL, { pdwDefaultLayout: DWORD.Δ } ],
  SetProcessDefaultLayout: [ BOOL, { dwDefaultLayout: DWORD } ],
  GetDesktopWindow: [ HWND, {  } ],
  GetParent: [ HWND, { hWnd: HWND } ],
  SetParent: [ HWND, { hWndChild: HWND, hWndNewParent: HWND } ],
  EnumChildWindows: [ BOOL, { hWndParent: HWND, lpEnumFunc: WNDENUMPROC, lParam: LPARAM } ],
  FindWindowA: [ HWND, { lpClassName: LPCSTR, lpWindowName: LPCSTR } ],
  FindWindowW: [ HWND, { lpClassName: LPCWSTR, lpWindowName: LPCWSTR } ],
  FindWindowExA: [ HWND, { hWndParent: HWND, hWndChildAfter: HWND, lpszClass: LPCSTR, lpszWindow: LPCSTR } ],
  FindWindowExW: [ HWND, { hWndParent: HWND, hWndChildAfter: HWND, lpszClass: LPCWSTR, lpszWindow: LPCWSTR } ],
  GetShellWindow: [ HWND, {  } ],
  RegisterShellHookWindow: [ BOOL, { hwnd: HWND } ],
  DeregisterShellHookWindow: [ BOOL, { hwnd: HWND } ],
  EnumWindows: [ BOOL, { lpEnumFunc: WNDENUMPROC, lParam: LPARAM } ],
  EnumThreadWindows: [ BOOL, { dwThreadId: DWORD, lpfn: WNDENUMPROC, lParam: LPARAM } ],
  GetClassNameA: [ _void, { hWnd: HWND, lpClassName: LPSTR, nMaxCount: int } ],
  GetClassNameW: [ _void, { hWnd: HWND, lpClassName: LPWSTR, nMaxCount: int } ],
  GetTopWindow: [ HWND, { hWnd: HWND } ],
  GetWindowThreadProcessId: [ DWORD, { hWnd: HWND, lpdwProcessId: LPDWORD } ],
  IsGUIThread: [ BOOL, { bConvert: BOOL } ],
  GetLastActivePopup: [ HWND, { hWnd: HWND } ],
  GetWindow: [ HWND, { hWnd: HWND, uCmd: UINT } ],
  SetWindowsHookA: [ HHOOK, { nFilterType: int, pfnFilterProc: HOOKPROC } ],
  SetWindowsHookW: [ HHOOK, { nFilterType: int, pfnFilterProc: HOOKPROC } ],
  UnhookWindowsHook: [ BOOL, { nCode: int, pfnFilterProc: HOOKPROC } ],
  SetWindowsHookExA: [ HHOOK, { idHook: int, lpfn: HOOKPROC, hmod: HINSTANCE, dwThreadId: DWORD } ],
  SetWindowsHookExW: [ HHOOK, { idHook: int, lpfn: HOOKPROC, hmod: HINSTANCE, dwThreadId: DWORD } ],
  UnhookWindowsHookEx: [ BOOL, { hhk: HHOOK } ],
  CallNextHookEx: [ LRESULT, { hhk: HHOOK, nCode: int, wParam: WPARAM, lParam: LPARAM } ],
  CheckMenuRadioItem: [ BOOL, { hmenu: HMENU, first: UINT, last: UINT, check: UINT, flags: UINT } ],
  LoadBitmapA: [ HBITMAP, { hInstance: HINSTANCE, lpBitmapName: LPCSTR } ],
  LoadBitmapW: [ HBITMAP, { hInstance: HINSTANCE, lpBitmapName: LPCWSTR } ],
  LoadCursorA: [ HCURSOR, { hInstance: HINSTANCE, lpCursorName: LPCSTR } ],
  LoadCursorW: [ HCURSOR, { hInstance: HINSTANCE, lpCursorName: LPCWSTR } ],
  LoadCursorFromFileA: [ HCURSOR, { lpFileName: LPCSTR } ],
  LoadCursorFromFileW: [ HCURSOR, { lpFileName: LPCWSTR } ],
  CreateCursor: [ HCURSOR, { hInst: HINSTANCE, xHotSpot: int, yHotSpot: int, nWidth: int, nHeight: int, pvANDPlane: _void.Δ, pvXORPlane: _void.Δ } ],
  DestroyCursor: [ BOOL, { hCursor: HCURSOR } ],
  SetSystemCursor: [ BOOL, { hcur: HCURSOR, id: DWORD } ],
  LoadIconA: [ HICON, { hInstance: HINSTANCE, lpIconName: LPCSTR } ],
  LoadIconW: [ HICON, { hInstance: HINSTANCE, lpIconName: LPCWSTR } ],
  PrivateExtractIconsA: [ UINT, { szFileName: LPCSTR, nIconIndex: int, cxIcon: int, cyIcon: int, phicon: HICON.Δ, piconid: UINT.Δ, nIcons: UINT, flags: UINT } ],
  PrivateExtractIconsW: [ UINT, { szFileName: LPCWSTR, nIconIndex: int, cxIcon: int, cyIcon: int, phicon: HICON.Δ, piconid: UINT.Δ, nIcons: UINT, flags: UINT } ],
  CreateIcon: [ HICON, { hInstance: HINSTANCE, nWidth: int, nHeight: int, cPlanes: BYTE, cBitsPixel: BYTE, lpbANDbits: BYTE.Δ, lpbXORbits: BYTE.Δ } ],
  DestroyIcon: [ BOOL, { hIcon: HICON } ],
  LookupIconIdFromDirectory: [ _void, { presbits: PBYTE, fIcon: BOOL } ],
  LookupIconIdFromDirectoryEx: [ _void, { presbits: PBYTE, fIcon: BOOL, cxDesired: int, cyDesired: int, Flags: UINT } ],
  CreateIconFromResource: [ HICON, { presbits: PBYTE, dwResSize: DWORD, fIcon: BOOL, dwVer: DWORD } ],
  CreateIconFromResourceEx: [ HICON, { presbits: PBYTE, dwResSize: DWORD, fIcon: BOOL, dwVer: DWORD, cxDesired: int, cyDesired: int, Flags: UINT } ],
  LoadImageA: [ HANDLE, { hInst: HINSTANCE, name: LPCSTR, type: UINT, cx: int, cy: int, fuLoad: UINT } ],
  LoadImageW: [ HANDLE, { hInst: HINSTANCE, name: LPCWSTR, type: UINT, cx: int, cy: int, fuLoad: UINT } ],
  CopyImage: [ HANDLE, { h: HANDLE, type: UINT, cx: int, cy: int, flags: UINT } ],
  DrawIconEx: [ BOOL, { hdc: HDC, xLeft: int, yTop: int, hIcon: HICON, cxWidth: int, cyWidth: int, istepIfAniCur: UINT, hbrFlickerFreeDraw: HBRUSH, diFlags: UINT } ],
  CreateIconIndirect: [ HICON, { piconinfo: PICONINFO } ],
  CopyIcon: [ HICON, { hIcon: HICON } ],
  GetIconInfo: [ BOOL, { hIcon: HICON, piconinfo: PICONINFO } ],
  GetIconInfoExA: [ BOOL, { hicon: HICON, piconinfo: PICONINFOEXA } ],
  GetIconInfoExW: [ BOOL, { hicon: HICON, piconinfo: PICONINFOEXW } ],
  LoadStringA: [ _void, { hInstance: HINSTANCE, uID: UINT, lpBuffer: LPSTR, cchBufferMax: int } ],
  LoadStringW: [ _void, { hInstance: HINSTANCE, uID: UINT, lpBuffer: LPWSTR, cchBufferMax: int } ],
  IsDialogMessageA: [ BOOL, { hDlg: HWND, lpMsg: LPMSG } ],
  IsDialogMessageW: [ BOOL, { hDlg: HWND, lpMsg: LPMSG } ],
  MapDialogRect: [ BOOL, { hDlg: HWND, lpRect: LPRECT } ],
  DlgDirListA: [ _void, { hDlg: HWND, lpPathSpec: LPSTR, nIDListBox: int, nIDStaticPath: int, uFileType: UINT } ],
  DlgDirListW: [ _void, { hDlg: HWND, lpPathSpec: LPWSTR, nIDListBox: int, nIDStaticPath: int, uFileType: UINT } ],
  DlgDirSelectExA: [ BOOL, { hwndDlg: HWND, lpString: LPSTR, chCount: int, idListBox: int } ],
  DlgDirSelectExW: [ BOOL, { hwndDlg: HWND, lpString: LPWSTR, chCount: int, idListBox: int } ],
  DlgDirListComboBoxA: [ _void, { hDlg: HWND, lpPathSpec: LPSTR, nIDComboBox: int, nIDStaticPath: int, uFiletype: UINT } ],
  DlgDirListComboBoxW: [ _void, { hDlg: HWND, lpPathSpec: LPWSTR, nIDComboBox: int, nIDStaticPath: int, uFiletype: UINT } ],
  DlgDirSelectComboBoxExA: [ BOOL, { hwndDlg: HWND, lpString: LPSTR, cchOut: int, idComboBox: int } ],
  DlgDirSelectComboBoxExW: [ BOOL, { hwndDlg: HWND, lpString: LPWSTR, cchOut: int, idComboBox: int } ],
  SetScrollInfo: [ _void, { hwnd: HWND, nBar: int, lpsi: LPCSCROLLINFO, redraw: BOOL } ],
  GetScrollInfo: [ BOOL, { hwnd: HWND, nBar: int, lpsi: LPSCROLLINFO } ],
  DefFrameProcA: [ LRESULT, { hWnd: HWND, hWndMDIClient: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  DefFrameProcW: [ LRESULT, { hWnd: HWND, hWndMDIClient: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  DefMDIChildProcA: [ LRESULT, { hWnd: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  DefMDIChildProcW: [ LRESULT, { hWnd: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM } ],
  TranslateMDISysAccel: [ BOOL, { hWndClient: HWND, lpMsg: LPMSG } ],
  ArrangeIconicWindows: [ UINT, { hWnd: HWND } ],
  CreateMDIWindowA: [ HWND, { lpClassName: LPCSTR, lpWindowName: LPCSTR, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hInstance: HINSTANCE, lParam: LPARAM } ],
  CreateMDIWindowW: [ HWND, { lpClassName: LPCWSTR, lpWindowName: LPCWSTR, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hInstance: HINSTANCE, lParam: LPARAM } ],
  TileWindows: [ WORD, { hwndParent: HWND, wHow: UINT, lpRect: RECT.Δ, cKids: UINT, lpKids: HWND.Δ } ],
  CascadeWindows: [ WORD, { hwndParent: HWND, wHow: UINT, lpRect: RECT.Δ, cKids: UINT, lpKids: HWND.Δ } ],
  WinHelpA: [ BOOL, { hWndMain: HWND, lpszHelp: LPCSTR, uCommand: UINT, dwData: ULONG_PTR } ],
  WinHelpW: [ BOOL, { hWndMain: HWND, lpszHelp: LPCWSTR, uCommand: UINT, dwData: ULONG_PTR } ],
  GetGuiResources: [ DWORD, { hProcess: HANDLE, uiFlags: DWORD } ],
  ChangeDisplaySettingsA: [ LONG, { lpDevMode: DEVMODEA.Δ, dwFlags: DWORD } ],
  ChangeDisplaySettingsW: [ LONG, { lpDevMode: DEVMODEW.Δ, dwFlags: DWORD } ],
  ChangeDisplaySettingsExA: [ LONG, { lpszDeviceName: LPCSTR, lpDevMode: DEVMODEA.Δ, hwnd: HWND, dwflags: DWORD, lParam: LPVOID } ],
  ChangeDisplaySettingsExW: [ LONG, { lpszDeviceName: LPCWSTR, lpDevMode: DEVMODEW.Δ, hwnd: HWND, dwflags: DWORD, lParam: LPVOID } ],
  EnumDisplaySettingsA: [ BOOL, { lpszDeviceName: LPCSTR, iModeNum: DWORD, lpDevMode: DEVMODEA.Δ } ],
  EnumDisplaySettingsW: [ BOOL, { lpszDeviceName: LPCWSTR, iModeNum: DWORD, lpDevMode: DEVMODEW.Δ } ],
  EnumDisplaySettingsExA: [ BOOL, { lpszDeviceName: LPCSTR, iModeNum: DWORD, lpDevMode: DEVMODEA.Δ, dwFlags: DWORD } ],
  EnumDisplaySettingsExW: [ BOOL, { lpszDeviceName: LPCWSTR, iModeNum: DWORD, lpDevMode: DEVMODEW.Δ, dwFlags: DWORD } ],
  EnumDisplayDevicesA: [ BOOL, { lpDevice: LPCSTR, iDevNum: DWORD, lpDisplayDevice: PDISPLAY_DEVICEA, dwFlags: DWORD } ],
  EnumDisplayDevicesW: [ BOOL, { lpDevice: LPCWSTR, iDevNum: DWORD, lpDisplayDevice: PDISPLAY_DEVICEW, dwFlags: DWORD } ],
  GetDisplayConfigBufferSizes: [ LONG, { flags: UINT32, numPathArrayElements: UINT32.Δ, numModeInfoArrayElements: UINT32.Δ } ],
  SetDisplayConfig: [ LONG, { numPathArrayElements: UINT32, pathArray: DISPLAYCONFIG_PATH_INFO.Δ, numModeInfoArrayElements: UINT32, modeInfoArray: DISPLAYCONFIG_MODE_INFO.Δ, flags: UINT32 } ],
  QueryDisplayConfig: [ LONG, { flags: UINT32, numPathArrayElements: UINT32.Δ, pathArray: DISPLAYCONFIG_PATH_INFO.Δ, numModeInfoArrayElements: UINT32.Δ, modeInfoArray: DISPLAYCONFIG_MODE_INFO.Δ, currentTopologyId: DISPLAYCONFIG_TOPOLOGY_ID.Δ } ],
  DisplayConfigGetDeviceInfo: [ LONG, { requestPacket: DISPLAYCONFIG_DEVICE_INFO_HEADER.Δ } ],
  DisplayConfigSetDeviceInfo: [ LONG, { setPacket: DISPLAYCONFIG_DEVICE_INFO_HEADER.Δ } ],
  SystemParametersInfoA: [ BOOL, { uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT } ],
  SystemParametersInfoW: [ BOOL, { uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT } ],
  SoundSentry: [ BOOL, {  } ],
  SetDebugErrorLevel: [ _void, { dwLevel: DWORD } ],
  SetLastErrorEx: [ _void, { dwErrCode: DWORD, dwType: DWORD } ],
  InternalGetWindowText: [ _void, { hWnd: HWND, pString: LPWSTR, cchMaxCount: int } ],
  CancelShutdown: [ BOOL, {  } ],
  MonitorFromPoint: [ HMONITOR, { pt: POINT, dwFlags: DWORD } ],
  MonitorFromRect: [ HMONITOR, { lprc: LPCRECT, dwFlags: DWORD } ],
  MonitorFromWindow: [ HMONITOR, { hwnd: HWND, dwFlags: DWORD } ],
  GetMonitorInfoA: [ BOOL, { hMonitor: HMONITOR, lpmi: LPMONITORINFO } ],
  GetMonitorInfoW: [ BOOL, { hMonitor: HMONITOR, lpmi: LPMONITORINFO } ],
  EnumDisplayMonitors: [ BOOL, { hdc: HDC, lprcClip: LPCRECT, lpfnEnum: MONITORENUMPROC, dwData: LPARAM } ],
  NotifyWinEvent: [ _void, { event: DWORD, hwnd: HWND, idObject: LONG, idChild: LONG } ],
  SetWinEventHook: [ HWINEVENTHOOK, { eventMin: DWORD, eventMax: DWORD, hmodWinEventProc: HMODULE, pfnWinEventProc: WINEVENTPROC, idProcess: DWORD, idThread: DWORD, dwFlags: DWORD } ],
  IsWinEventHookInstalled: [ BOOL, { event: DWORD } ],
  UnhookWinEvent: [ BOOL, { hWinEventHook: HWINEVENTHOOK } ],
  GetGUIThreadInfo: [ BOOL, { idThread: DWORD, pgui: PGUITHREADINFO } ],
  BlockInput: [ BOOL, { fBlockIt: BOOL } ],
  SetProcessDPIAware: [ BOOL, {  } ],
  IsProcessDPIAware: [ BOOL, {  } ],
  GetWindowModuleFileNameA: [ UINT, { hwnd: HWND, pszFileName: LPSTR, cchFileNameMax: UINT } ],
  GetWindowModuleFileNameW: [ UINT, { hwnd: HWND, pszFileName: LPWSTR, cchFileNameMax: UINT } ],
  GetCursorInfo: [ BOOL, { pci: PCURSORINFO } ],
  GetWindowInfo: [ BOOL, { hwnd: HWND, pwi: PWINDOWINFO } ],
  GetTitleBarInfo: [ BOOL, { hwnd: HWND, pti: PTITLEBARINFO } ],
  GetMenuBarInfo: [ BOOL, { hwnd: HWND, idObject: LONG, idItem: LONG, pmbi: PMENUBARINFO } ],
  GetScrollBarInfo: [ BOOL, { hwnd: HWND, idObject: LONG, psbi: PSCROLLBARINFO } ],
  GetComboBoxInfo: [ BOOL, { hwndCombo: HWND, pcbi: PCOMBOBOXINFO } ],
  GetAncestor: [ HWND, { hwnd: HWND, gaFlags: UINT } ],
  RealChildWindowFromPoint: [ HWND, { hwndParent: HWND, ptParentClientCoords: POINT } ],
  RealGetWindowClassA: [ UINT, { hwnd: HWND, ptszClassName: LPSTR, cchClassNameMax: UINT } ],
  RealGetWindowClassW: [ UINT, { hwnd: HWND, ptszClassName: LPWSTR, cchClassNameMax: UINT } ],
  GetAltTabInfoA: [ BOOL, { hwnd: HWND, iItem: int, pati: PALTTABINFO, pszItemText: LPSTR, cchItemText: UINT } ],
  GetAltTabInfoW: [ BOOL, { hwnd: HWND, iItem: int, pati: PALTTABINFO, pszItemText: LPWSTR, cchItemText: UINT } ],
  GetListBoxInfo: [ DWORD, { hwnd: HWND } ],
  LockWorkStation: [ BOOL, {  } ],
  UserHandleGrantAccess: [ BOOL, { hUserHandle: HANDLE, hJob: HANDLE, bGrant: BOOL } ],
  GetRawInputData: [ UINT, { hRawInput: HRAWINPUT, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT, cbSizeHeader: UINT } ],
  GetRawInputDeviceInfoA: [ UINT, { hDevice: HANDLE, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT } ],
  GetRawInputDeviceInfoW: [ UINT, { hDevice: HANDLE, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT } ],
  GetRawInputBuffer: [ UINT, { pData: PRAWINPUT, pcbSize: PUINT, cbSizeHeader: UINT } ],
  RegisterRawInputDevices: [ BOOL, { pRawInputDevices: PCRAWINPUTDEVICE, uiNumDevices: UINT, cbSize: UINT } ],
  GetRegisteredRawInputDevices: [ UINT, { pRawInputDevices: PRAWINPUTDEVICE, puiNumDevices: PUINT, cbSize: UINT } ],
  GetRawInputDeviceList: [ UINT, { pRawInputDeviceList: PRAWINPUTDEVICELIST, puiNumDevices: PUINT, cbSize: UINT } ],
  DefRawInputProc: [ LRESULT, { paRawInput: PRAWINPUT.Δ, nInput: INT, cbSizeHeader: UINT } ],
  ChangeWindowMessageFilter: [ BOOL, { message: UINT, dwFlag: DWORD } ],
  ChangeWindowMessageFilterEx: [ BOOL, { hwnd: HWND, message: UINT, action: DWORD, pChangeFilterStruct: PCHANGEFILTERSTRUCT } ],
  GetGestureInfo: [ BOOL, { hGestureInfo: HGESTUREINFO, pGestureInfo: PGESTUREINFO } ],
  GetGestureExtraArgs: [ BOOL, { hGestureInfo: HGESTUREINFO, cbExtraArgs: UINT, pExtraArgs: PBYTE } ],
  CloseGestureInfoHandle: [ BOOL, { hGestureInfo: HGESTUREINFO } ],
  SetGestureConfig: [ BOOL, { hwnd: HWND, dwReserved: DWORD, cIDs: UINT, pGestureConfig: PGESTURECONFIG, cbSize: UINT } ],
  GetGestureConfig: [ BOOL, { hwnd: HWND, dwReserved: DWORD, dwFlags: DWORD, pcIDs: PUINT, pGestureConfig: PGESTURECONFIG, cbSize: UINT } ],
  ShutdownBlockReasonCreate: [ BOOL, { hWnd: HWND, pwszReason: LPCWSTR } ],
  ShutdownBlockReasonQuery: [ BOOL, { hWnd: HWND, pwszBuff: LPWSTR, pcchBuff: DWORD.Δ } ],
  ShutdownBlockReasonDestroy: [ BOOL, { hWnd: HWND } ],