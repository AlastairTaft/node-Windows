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


var
 DWORD = ulong.typedef('DWORD'),
 BOOL = int.typedef('BOOL'),
 WORD = ushort.typedef('WORD'),
 LPVOID = _void.Δ.typedef('LPVOID'),
 INT = int.typedef('INT'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 LPSTR = char.Δ.typedef('LPSTR'),
 LPCSTR = char.Δ.typedef('LPCSTR'),
 HRESULT = long.typedef('HRESULT'),
 LPARAM = long.typedef('LPARAM'),
 HGLOBAL = _void.Δ.typedef('HGLOBAL'),
 COLORREF = ulong.typedef('COLORREF');

var
 LPOFNHOOKPROC = new CallbackT('LPOFNHOOKPROC', uint, [HWND.Δ, uint, uint, long]),
 LPCCHOOKPROC = new CallbackT('LPCCHOOKPROC', uint, [HWND.Δ, uint, uint, long]),
 LPFRHOOKPROC = new CallbackT('LPFRHOOKPROC', uint, [HWND.Δ, uint, uint, long]),
 LPCFHOOKPROC = new CallbackT('LPCFHOOKPROC', uint, [HWND.Δ, uint, uint, long]),
 LPPRINTHOOKPROC = new CallbackT('LPPRINTHOOKPROC', uint, [HWND.Δ, uint, uint, long]),
 LPSETUPHOOKPROC = new CallbackT('LPSETUPHOOKPROC', uint, [HWND.Δ, uint, uint, long]),
 LPPAGEPAINTHOOK = new CallbackT('LPPAGEPAINTHOOK', uint, [HWND.Δ, uint, uint, long]),
 LPPAGESETUPHOOK = new CallbackT('LPPAGESETUPHOOK', uint, [HWND.Δ, uint, uint, long]);

var OPENFILENAME_NT4 = new StructT('OPENFILENAME_NT4', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hInstance: HINSTANCE,
 lpstrFilter: LPCSTR,
 lpstrCustomFilter: LPSTR,
 nMaxCustFilter: DWORD,
 nFilterIndex: DWORD,
 lpstrFile: LPSTR,
 nMaxFile: DWORD,
 lpstrFileTitle: LPSTR,
 nMaxFileTitle: DWORD,
 lpstrInitialDir: LPCSTR,
 lpstrTitle: LPCSTR,
 Flags: DWORD,
 nFileOffset: WORD,
 nFileExtension: WORD,
 lpstrDefExt: LPCSTR,
 lCustData: LPARAM,
 lpfnHook: LPOFNHOOKPROC,
 lpTemplateName: LPCSTR
});

var OPENFILENAME_NT4W = new StructT('OPENFILENAME_NT4W', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hInstance: HINSTANCE,
 lpstrFilter: LPCWSTR,
 lpstrCustomFilter: LPWSTR,
 nMaxCustFilter: DWORD,
 nFilterIndex: DWORD,
 lpstrFile: LPWSTR,
 nMaxFile: DWORD,
 lpstrFileTitle: LPWSTR,
 nMaxFileTitle: DWORD,
 lpstrInitialDir: LPCWSTR,
 lpstrTitle: LPCWSTR,
 Flags: DWORD,
 nFileOffset: WORD,
 nFileExtension: WORD,
 lpstrDefExt: LPCWSTR,
 lCustData: LPARAM,
 lpfnHook: LPOFNHOOKPROC,
 lpTemplateName: LPCWSTR
});

var OPENFILENAME = new StructT('OPENFILENAME', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hInstance: HINSTANCE,
 lpstrFilter: LPCSTR,
 lpstrCustomFilter: LPSTR,
 nMaxCustFilter: DWORD,
 nFilterIndex: DWORD,
 lpstrFile: LPSTR,
 nMaxFile: DWORD,
 lpstrFileTitle: LPSTR,
 nMaxFileTitle: DWORD,
 lpstrInitialDir: LPCSTR,
 lpstrTitle: LPCSTR,
 Flags: DWORD,
 nFileOffset: WORD,
 nFileExtension: WORD,
 lpstrDefExt: LPCSTR,
 lCustData: LPARAM,
 lpfnHook: LPOFNHOOKPROC,
 lpTemplateName: LPCSTR,
 pvReserved: _void.Δ,
 dwReserved: DWORD,
 FlagsEx: DWORD
});

var OPENFILENAMEW = new StructT('OPENFILENAMEW', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hInstance: HINSTANCE,
 lpstrFilter: LPCWSTR,
 lpstrCustomFilter: LPWSTR,
 nMaxCustFilter: DWORD,
 nFilterIndex: DWORD,
 lpstrFile: LPWSTR,
 nMaxFile: DWORD,
 lpstrFileTitle: LPWSTR,
 nMaxFileTitle: DWORD,
 lpstrInitialDir: LPCWSTR,
 lpstrTitle: LPCWSTR,
 Flags: DWORD,
 nFileOffset: WORD,
 nFileExtension: WORD,
 lpstrDefExt: LPCWSTR,
 lCustData: LPARAM,
 lpfnHook: LPOFNHOOKPROC,
 lpTemplateName: LPCWSTR,
 pvReserved: _void.Δ,
 dwReserved: DWORD,
 FlagsEx: DWORD
});

var OFNOTIFY = new StructT('OFNOTIFY', {
 hdr: NMHDR,
 lpOFN: LPOPENFILENAMEA,
 pszFile: LPSTR
});

var OFNOTIFYW = new StructT('OFNOTIFYW', {
 hdr: NMHDR,
 lpOFN: LPOPENFILENAMEW,
 pszFile: LPWSTR
});

var OFNOTIFYEX = new StructT('OFNOTIFYEX', {
 hdr: NMHDR,
 lpOFN: LPOPENFILENAMEA,
 psf: LPVOID,
 pidl: LPVOID
});

var OFNOTIFYEXW = new StructT('OFNOTIFYEXW', {
 hdr: NMHDR,
 lpOFN: LPOPENFILENAMEW,
 psf: LPVOID,
 pidl: LPVOID
});

var CHOOSECOLOR = new StructT('CHOOSECOLOR', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hInstance: HWND,
 rgbResult: COLORREF,
 lpCustColors: COLORREF.Δ,
 Flags: DWORD,
 lCustData: LPARAM,
 lpfnHook: LPCCHOOKPROC,
 lpTemplateName: LPCSTR
});

var CHOOSECOLORW = new StructT('CHOOSECOLORW', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hInstance: HWND,
 rgbResult: COLORREF,
 lpCustColors: COLORREF.Δ,
 Flags: DWORD,
 lCustData: LPARAM,
 lpfnHook: LPCCHOOKPROC,
 lpTemplateName: LPCWSTR
});

var FINDREPLACE = new StructT('FINDREPLACE', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hInstance: HINSTANCE,
 Flags: DWORD,
 lpstrFindWhat: LPSTR,
 lpstrReplaceWith: LPSTR,
 wFindWhatLen: WORD,
 wReplaceWithLen: WORD,
 lCustData: LPARAM,
 lpfnHook: LPFRHOOKPROC,
 lpTemplateName: LPCSTR
});

var FINDREPLACEW = new StructT('FINDREPLACEW', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hInstance: HINSTANCE,
 Flags: DWORD,
 lpstrFindWhat: LPWSTR,
 lpstrReplaceWith: LPWSTR,
 wFindWhatLen: WORD,
 wReplaceWithLen: WORD,
 lCustData: LPARAM,
 lpfnHook: LPFRHOOKPROC,
 lpTemplateName: LPCWSTR
});

var CHOOSEFONT = new StructT('CHOOSEFONT', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hDC: HDC,
 lpLogFont: LPLOGFONTA,
 iPointSize: INT,
 Flags: DWORD,
 rgbColors: COLORREF,
 lCustData: LPARAM,
 lpfnHook: LPCFHOOKPROC,
 lpTemplateName: LPCSTR,
 hInstance: HINSTANCE,
 lpszStyle: LPSTR,
 nFontType: WORD,
 ___MISSING_ALIGNMENT__: WORD,
 nSizeMin: INT,
 nSizeMax: INT
});

var CHOOSEFONTW = new StructT('CHOOSEFONTW', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hDC: HDC,
 lpLogFont: LPLOGFONTW,
 iPointSize: INT,
 Flags: DWORD,
 rgbColors: COLORREF,
 lCustData: LPARAM,
 lpfnHook: LPCFHOOKPROC,
 lpTemplateName: LPCWSTR,
 hInstance: HINSTANCE,
 lpszStyle: LPWSTR,
 nFontType: WORD,
 ___MISSING_ALIGNMENT__: WORD,
 nSizeMin: INT,
 nSizeMax: INT
});

var PRINTDLG = new StructT('PRINTDLG', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hDevMode: HGLOBAL,
 hDevNames: HGLOBAL,
 hDC: HDC,
 Flags: DWORD,
 nFromPage: WORD,
 nToPage: WORD,
 nMinPage: WORD,
 nMaxPage: WORD,
 nCopies: WORD,
 hInstance: HINSTANCE,
 lCustData: LPARAM,
 lpfnPrintHook: LPPRINTHOOKPROC,
 lpfnSetupHook: LPSETUPHOOKPROC,
 lpPrintTemplateName: LPCSTR,
 lpSetupTemplateName: LPCSTR,
 hPrintTemplate: HGLOBAL,
 hSetupTemplate: HGLOBAL
});

var PRINTDLGW = new StructT('PRINTDLGW', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hDevMode: HGLOBAL,
 hDevNames: HGLOBAL,
 hDC: HDC,
 Flags: DWORD,
 nFromPage: WORD,
 nToPage: WORD,
 nMinPage: WORD,
 nMaxPage: WORD,
 nCopies: WORD,
 hInstance: HINSTANCE,
 lCustData: LPARAM,
 lpfnPrintHook: LPPRINTHOOKPROC,
 lpfnSetupHook: LPSETUPHOOKPROC,
 lpPrintTemplateName: LPCWSTR,
 lpSetupTemplateName: LPCWSTR,
 hPrintTemplate: HGLOBAL,
 hSetupTemplate: HGLOBAL
});

var IPrintDialogCallback = new StructT('IPrintDialogCallback', {
 lpVtbl: IPrintDialogCallbackVtbl.Δ
});

var IPrintDialogCallbackVtbl = new StructT('IPrintDialogCallbackVtbl', {
 QueryInterface: new CallbackT(long, [IPrintDialogCallback.Δ, _GUID.Δ, _void.Δ.Δ]).Δ,
 AddRef: new CallbackT(ulong, [IPrintDialogCallback.Δ]).Δ,
 Release: new CallbackT(ulong, [IPrintDialogCallback.Δ]).Δ,
 InitDone: new CallbackT(long, [IPrintDialogCallback.Δ]).Δ,
 SelectionChange: new CallbackT(long, [IPrintDialogCallback.Δ]).Δ,
 HandleMessage: new CallbackT(long, [IPrintDialogCallback.Δ, HWND.Δ, uint, uint, long, long.Δ]).Δ
});

var IPrintDialogServices = new StructT('IPrintDialogServices', {
 lpVtbl: IPrintDialogServicesVtbl.Δ
});

var IPrintDialogServicesVtbl = new StructT('IPrintDialogServicesVtbl', {
 QueryInterface: new CallbackT(long, [IPrintDialogServices.Δ, _GUID.Δ, _void.Δ.Δ]).Δ,
 AddRef: new CallbackT(ulong, [IPrintDialogServices.Δ]).Δ,
 Release: new CallbackT(ulong, [IPrintDialogServices.Δ]).Δ,
 GetCurrentDevMode: new CallbackT(long, [IPrintDialogServices.Δ, _devicemodeA.Δ, uint.Δ]).Δ,
 GetCurrentPrinterName: new CallbackT(long, [IPrintDialogServices.Δ, ushort.Δ, uint.Δ]).Δ,
 GetCurrentPortName: new CallbackT(long, [IPrintDialogServices.Δ, ushort.Δ, uint.Δ]).Δ
});

var PRINTPAGERANGE = new StructT('PRINTPAGERANGE', {
 nFromPage: DWORD,
 nToPage: DWORD
});

var PRINTDLGEX = new StructT('PRINTDLGEX', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hDevMode: HGLOBAL,
 hDevNames: HGLOBAL,
 hDC: HDC,
 Flags: DWORD,
 Flags2: DWORD,
 ExclusionFlags: DWORD,
 nPageRanges: DWORD,
 nMaxPageRanges: DWORD,
 lpPageRanges: LPPRINTPAGERANGE,
 nMinPage: DWORD,
 nMaxPage: DWORD,
 nCopies: DWORD,
 hInstance: HINSTANCE,
 lpPrintTemplateName: LPCSTR,
 lpCallback: LPUNKNOWN,
 nPropertyPages: DWORD,
 lphPropertyPages: HPROPSHEETPAGE.Δ,
 nStartPage: DWORD,
 dwResultAction: DWORD
});

var PRINTDLGEXW = new StructT('PRINTDLGEXW', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hDevMode: HGLOBAL,
 hDevNames: HGLOBAL,
 hDC: HDC,
 Flags: DWORD,
 Flags2: DWORD,
 ExclusionFlags: DWORD,
 nPageRanges: DWORD,
 nMaxPageRanges: DWORD,
 lpPageRanges: LPPRINTPAGERANGE,
 nMinPage: DWORD,
 nMaxPage: DWORD,
 nCopies: DWORD,
 hInstance: HINSTANCE,
 lpPrintTemplateName: LPCWSTR,
 lpCallback: LPUNKNOWN,
 nPropertyPages: DWORD,
 lphPropertyPages: HPROPSHEETPAGE.Δ,
 nStartPage: DWORD,
 dwResultAction: DWORD
});

var DEVNAMES = new StructT('DEVNAMES', {
 wDriverOffset: WORD,
 wDeviceOffset: WORD,
 wOutputOffset: WORD,
 wDefault: WORD
});

var PAGESETUPDLG = new StructT('PAGESETUPDLG', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hDevMode: HGLOBAL,
 hDevNames: HGLOBAL,
 Flags: DWORD,
 ptPaperSize: POINT,
 rtMinMargin: RECT,
 rtMargin: RECT,
 hInstance: HINSTANCE,
 lCustData: LPARAM,
 lpfnPageSetupHook: LPPAGESETUPHOOK,
 lpfnPagePaintHook: LPPAGEPAINTHOOK,
 lpPageSetupTemplateName: LPCSTR,
 hPageSetupTemplate: HGLOBAL
});

var PAGESETUPDLGW = new StructT('PAGESETUPDLGW', {
 lStructSize: DWORD,
 hwndOwner: HWND,
 hDevMode: HGLOBAL,
 hDevNames: HGLOBAL,
 Flags: DWORD,
 ptPaperSize: POINT,
 rtMinMargin: RECT,
 rtMargin: RECT,
 hInstance: HINSTANCE,
 lCustData: LPARAM,
 lpfnPageSetupHook: LPPAGESETUPHOOK,
 lpfnPagePaintHook: LPPAGEPAINTHOOK,
 lpPageSetupTemplateName: LPCWSTR,
 hPageSetupTemplate: HGLOBAL
});


var commdlg = new Library('commdlg', {
  GetOpenFileNameA: [ BOOL, { LPOPENFILENAMEA: LPOPENFILENAMEA } ],
  GetOpenFileNameW: [ BOOL, { LPOPENFILENAMEW: LPOPENFILENAMEW } ],
  GetSaveFileNameA: [ BOOL, { LPOPENFILENAMEA: LPOPENFILENAMEA } ],
  GetSaveFileNameW: [ BOOL, { LPOPENFILENAMEW: LPOPENFILENAMEW } ],
  GetFileTitleA: [ _void, { LPCSTR: LPCSTR, Buf: LPSTR, cchSize: WORD } ],
  GetFileTitleW: [ _void, { LPCWSTR: LPCWSTR, Buf: LPWSTR, cchSize: WORD } ],
  ChooseColorA: [ BOOL, { LPCHOOSECOLORA: LPCHOOSECOLORA } ],
  ChooseColorW: [ BOOL, { LPCHOOSECOLORW: LPCHOOSECOLORW } ],
  FindTextA: [ HWND, { LPFINDREPLACEA: LPFINDREPLACEA } ],
  FindTextW: [ HWND, { LPFINDREPLACEW: LPFINDREPLACEW } ],
  ReplaceTextA: [ HWND, { LPFINDREPLACEA: LPFINDREPLACEA } ],
  ReplaceTextW: [ HWND, { LPFINDREPLACEW: LPFINDREPLACEW } ],
  ChooseFontA: [ BOOL, { LPCHOOSEFONTA: LPCHOOSEFONTA } ],
  ChooseFontW: [ BOOL, { LPCHOOSEFONTW: LPCHOOSEFONTW } ],
  PrintDlgA: [ BOOL, { pPD: LPPRINTDLGA } ],
  PrintDlgW: [ BOOL, { pPD: LPPRINTDLGW } ],
  PrintDlgExA: [ HRESULT, { pPD: LPPRINTDLGEXA } ],
  PrintDlgExW: [ HRESULT, { pPD: LPPRINTDLGEXW } ],
  CommDlgExtendedError: [ DWORD, {  } ],
  PageSetupDlgA: [ BOOL, { LPPAGESETUPDLGA: LPPAGESETUPDLGA } ],
  PageSetupDlgW: [ BOOL, { LPPAGESETUPDLGW: LPPAGESETUPDLGW } ]
});
