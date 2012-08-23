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
 BYTE = uchar.typedef('BYTE'),
 WORD = ushort.typedef('WORD'),
 FLOAT = float.typedef('FLOAT'),
 PFLOAT = float.Δ.typedef('PFLOAT'),
 LPBYTE = uchar.Δ.typedef('LPBYTE'),
 LPINT = int.Δ.typedef('LPINT'),
 LPWORD = ushort.Δ.typedef('LPWORD'),
 LPDWORD = ulong.Δ.typedef('LPDWORD'),
 LPVOID = _void.Δ.typedef('LPVOID'),
 INT = int.typedef('INT'),
 UINT = uint.typedef('UINT'),
 UINT16 = ushort.typedef('UINT16'),
 UINT32 = uint.typedef('UINT32'),
 UINT64 = ulonglong.typedef('UINT64'),
 ULONG_PTR = ulong.typedef('ULONG_PTR'),
 PVOID = _void.Δ.typedef('PVOID'),
 CHAR = char.typedef('CHAR'),
 SHORT = short.typedef('SHORT'),
 LONG = long.typedef('LONG'),
 WCHAR = ushort.typedef('WCHAR'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 LPSTR = char.Δ.typedef('LPSTR'),
 PSTR = char.Δ.typedef('PSTR'),
 LPCSTR = char.Δ.typedef('LPCSTR'),
 HANDLE = _void.Δ.typedef('HANDLE'),
 LPARAM = long.typedef('LPARAM'),
 HGLOBAL = _void.Δ.typedef('HGLOBAL'),
 HGDIOBJ = _void.Δ.typedef('HGDIOBJ'),
 COLORREF = ulong.typedef('COLORREF'),
 LCSCSTYPE = long.typedef('LCSCSTYPE'),
 LCSGAMUTMATCH = long.typedef('LCSGAMUTMATCH'),
 FXPT2DOT30 = long.typedef('FXPT2DOT30'),
 COLOR16 = ushort.typedef('COLOR16');

var DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY = new EnumT('DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY', {
 Other: 0,
 Hd15: 0,
 Svideo: 1,
 CompositeVideo: 2,
 ComponentVideo: 3,
 Dvi: 4,
 Hdmi: 5,
 Lvds: 6,
 Jpn: 8,
 Sdi: 9,
 DisplayportExternal: 10,
 DisplayportEmbedded: 11,
 UdiExternal: 12,
 UdiEmbedded: 13,
 Sdtvdongle: 14,
 Internal: 15,
 ForceUint32: 16
});

var DISPLAYCONFIG_SCANLINE_ORDERING = new EnumT('DISPLAYCONFIG_SCANLINE_ORDERING', {
 Unspecified: 0,
 Progressive: 1,
 Interlaced: 2,
 InterlacedUpperfieldfirst: 3,
 InterlacedLowerfieldfirst: 3,
 ForceUint32: 5
});

var DISPLAYCONFIG_SCALING = new EnumT('DISPLAYCONFIG_SCALING', {
 Identity: 1,
 Centered: 2,
 Stretched: 3,
 Aspectratiocenteredmax: 4,
 Custom: 5,
 Preferred: 128,
 ForceUint32: 6
});

var DISPLAYCONFIG_ROTATION = new EnumT('DISPLAYCONFIG_ROTATION', {
 Identity: 1,
 Rotate90: 2,
 Rotate180: 3,
 Rotate270: 4,
 ForceUint32: 4
});

var DISPLAYCONFIG_MODE_INFO_TYPE = new EnumT('DISPLAYCONFIG_MODE_INFO_TYPE', {
 Source: 1,
 Target: 2,
 ForceUint32: 2
});

var DISPLAYCONFIG_PIXELFORMAT = new EnumT('DISPLAYCONFIG_PIXELFORMAT', {
 8bpp: 1,
 16bpp: 2,
 24bpp: 3,
 32bpp: 4,
 Nongdi: 5,
 ForceUint32: 5
});

var DISPLAYCONFIG_TOPOLOGY_ID = new EnumT('DISPLAYCONFIG_TOPOLOGY_ID', {
 Internal: 0x00000001,
 Clone: 0x00000002,
 Extend: 0x00000004,
 External: 0x00000008,
 ForceUint32: 4
});

var DISPLAYCONFIG_DEVICE_INFO_TYPE = new EnumT('DISPLAYCONFIG_DEVICE_INFO_TYPE', {
 GetSourceName: 1,
 GetTargetName: 2,
 GetTargetPreferredMode: 3,
 GetAdapterName: 4,
 SetTargetPersistence: 5,
 ForceUint32: 5
});


  OLDFONTENUMPROCA = new CallbackT('OLDFONTENUMPROCA', int, [tagLOGFONTA.Δ, tagTEXTMETRICA.Δ, ulong, long]),
  OLDFONTENUMPROCW = new CallbackT('OLDFONTENUMPROCW', int, [tagLOGFONTW.Δ, tagTEXTMETRICW.Δ, ulong, long]),
  FONTENUMPROCA = new CallbackT('FONTENUMPROCA', int, [tagLOGFONTA.Δ, tagTEXTMETRICA.Δ, ulong, long]),
  FONTENUMPROCW = new CallbackT('FONTENUMPROCW', int, [tagLOGFONTW.Δ, tagTEXTMETRICW.Δ, ulong, long]),
  FONTENUMPROC = new CallbackT('FONTENUMPROC', int, [tagLOGFONTA.Δ, tagTEXTMETRICA.Δ, ulong, long]),
  GOBJENUMPROC = new CallbackT('GOBJENUMPROC', int, [_void.Δ, long]),
  LINEDDAPROC = new CallbackT('LINEDDAPROC', _void, [int, int, long]),
  LPFNDEVMODE = new CallbackT('LPFNDEVMODE', uint, [HWND__.Δ, HINSTANCE__.Δ, _devicemodeA.Δ, char.Δ, char.Δ, _devicemodeA.Δ, char.Δ, uint]),
  LPFNDEVCAPS = new CallbackT('LPFNDEVCAPS', ulong, [char.Δ, char.Δ, uint, char.Δ, _devicemodeA.Δ]),
  MFENUMPROC = new CallbackT('MFENUMPROC', int, [HDC__.Δ, tagHANDLETABLE.Δ, tagMETARECORD.Δ, int, long]),
  ENHMFENUMPROC = new CallbackT('ENHMFENUMPROC', int, [HDC__.Δ, tagHANDLETABLE.Δ, tagENHMETARECORD.Δ, int, long]),
  ABORTPROC = new CallbackT('ABORTPROC', int, [HDC__.Δ, int]),
  ICMENUMPROCA = new CallbackT('ICMENUMPROCA', int, [char.Δ, long]),
  ICMENUMPROCW = new CallbackT('ICMENUMPROCW', int, [ushort.Δ, long]),

var DRAWPATRECT = new StructT('DRAWPATRECT', {
 ptPosition: POINT,
 ptSize: POINT,
 wStyle: WORD,
 wPattern: WORD
});

var PSINJECTDATA = new StructT('PSINJECTDATA', {
 DataBytes: DWORD,
 InjectionPoint: WORD,
 PageNumber: WORD
});

var PSFEATURE_OUTPUT = new StructT('PSFEATURE_OUTPUT', {
 bPageIndependent: BOOL,
 bSetPageDevice: BOOL
});

var PSFEATURE_CUSTPAPER = new StructT('PSFEATURE_CUSTPAPER', {
 lOrientation: LONG,
 lWidth: LONG,
 lHeight: LONG,
 lWidthOffset: LONG,
 lHeightOffset: LONG
});

var XFORM = new StructT('XFORM', {
 eM11: FLOAT,
 eM12: FLOAT,
 eM21: FLOAT,
 eM22: FLOAT,
 eDx: FLOAT,
 eDy: FLOAT
});

var BITMAP = new StructT('BITMAP', {
 bmType: LONG,
 bmWidth: LONG,
 bmHeight: LONG,
 bmWidthBytes: LONG,
 bmPlanes: WORD,
 bmBitsPixel: WORD,
 bmBits: LPVOID
});

var RGBTRIPLE = new StructT('RGBTRIPLE', {
 rgbtBlue: BYTE,
 rgbtGreen: BYTE,
 rgbtRed: BYTE
});

var RGBQUAD = new StructT('RGBQUAD', {
 rgbBlue: BYTE,
 rgbGreen: BYTE,
 rgbRed: BYTE,
 rgbReserved: BYTE
});

var CIEXYZ = new StructT('CIEXYZ', {
 ciexyzX: FXPT2DOT30,
 ciexyzY: FXPT2DOT30,
 ciexyzZ: FXPT2DOT30
});

var CIEXYZTRIPLE = new StructT('CIEXYZTRIPLE', {
 ciexyzRed: CIEXYZ,
 ciexyzGreen: CIEXYZ,
 ciexyzBlue: CIEXYZ
});

var LOGCOLORSPACE = new StructT('LOGCOLORSPACE', {
 lcsSignature: DWORD,
 lcsVersion: DWORD,
 lcsSize: DWORD,
 lcsCSType: LCSCSTYPE,
 lcsIntent: LCSGAMUTMATCH,
 lcsEndpoints: CIEXYZTRIPLE,
 lcsGammaRed: DWORD,
 lcsGammaGreen: DWORD,
 lcsGammaBlue: DWORD,
 lcsFilename: ARRAY(CHAR, MAX_PATH)
});

var LOGCOLORSPACEW = new StructT('LOGCOLORSPACEW', {
 lcsSignature: DWORD,
 lcsVersion: DWORD,
 lcsSize: DWORD,
 lcsCSType: LCSCSTYPE,
 lcsIntent: LCSGAMUTMATCH,
 lcsEndpoints: CIEXYZTRIPLE,
 lcsGammaRed: DWORD,
 lcsGammaGreen: DWORD,
 lcsGammaBlue: DWORD,
 lcsFilename: ARRAY(WCHAR, MAX_PATH)
});

var BITMAPCOREHEADER = new StructT('BITMAPCOREHEADER', {
 bcSize: DWORD,
 bcWidth: WORD,
 bcHeight: WORD,
 bcPlanes: WORD,
 bcBitCount: WORD
});

var BITMAPINFOHEADER = new StructT('BITMAPINFOHEADER', {
 biSize: DWORD,
 biWidth: LONG,
 biHeight: LONG,
 biPlanes: WORD,
 biBitCount: WORD,
 biCompression: DWORD,
 biSizeImage: DWORD,
 biXPelsPerMeter: LONG,
 biYPelsPerMeter: LONG,
 biClrUsed: DWORD,
 biClrImportant: DWORD
});

var BITMAPV4HEADER = new StructT('BITMAPV4HEADER', {
 bV4Size: DWORD,
 bV4Width: LONG,
 bV4Height: LONG,
 bV4Planes: WORD,
 bV4BitCount: WORD,
 bV4V4Compression: DWORD,
 bV4SizeImage: DWORD,
 bV4XPelsPerMeter: LONG,
 bV4YPelsPerMeter: LONG,
 bV4ClrUsed: DWORD,
 bV4ClrImportant: DWORD,
 bV4RedMask: DWORD,
 bV4GreenMask: DWORD,
 bV4BlueMask: DWORD,
 bV4AlphaMask: DWORD,
 bV4CSType: DWORD,
 bV4Endpoints: CIEXYZTRIPLE,
 bV4GammaRed: DWORD,
 bV4GammaGreen: DWORD,
 bV4GammaBlue: DWORD
});

var BITMAPV5HEADER = new StructT('BITMAPV5HEADER', {
 bV5Size: DWORD,
 bV5Width: LONG,
 bV5Height: LONG,
 bV5Planes: WORD,
 bV5BitCount: WORD,
 bV5Compression: DWORD,
 bV5SizeImage: DWORD,
 bV5XPelsPerMeter: LONG,
 bV5YPelsPerMeter: LONG,
 bV5ClrUsed: DWORD,
 bV5ClrImportant: DWORD,
 bV5RedMask: DWORD,
 bV5GreenMask: DWORD,
 bV5BlueMask: DWORD,
 bV5AlphaMask: DWORD,
 bV5CSType: DWORD,
 bV5Endpoints: CIEXYZTRIPLE,
 bV5GammaRed: DWORD,
 bV5GammaGreen: DWORD,
 bV5GammaBlue: DWORD,
 bV5Intent: DWORD,
 bV5ProfileData: DWORD,
 bV5ProfileSize: DWORD,
 bV5Reserved: DWORD
});

var BITMAPINFO = new StructT('BITMAPINFO', {
 bmiHeader: BITMAPINFOHEADER,
 bmiColors: ARRAY(RGBQUAD, 1)
});

var BITMAPCOREINFO = new StructT('BITMAPCOREINFO', {
 bmciHeader: BITMAPCOREHEADER,
 bmciColors: ARRAY(RGBTRIPLE, 1)
});

var BITMAPFILEHEADER = new StructT('BITMAPFILEHEADER', {
 bfType: WORD,
 bfSize: DWORD,
 bfReserved1: WORD,
 bfReserved2: WORD,
 bfOffBits: DWORD
});

var FONTSIGNATURE = new StructT('FONTSIGNATURE', {
 fsUsb: ARRAY(DWORD, 4),
 fsCsb: ARRAY(DWORD, 2)
});

var CHARSETINFO = new StructT('CHARSETINFO', {
 ciCharset: UINT,
 ciACP: UINT,
 fs: FONTSIGNATURE
});

var LOCALESIGNATURE = new StructT('LOCALESIGNATURE', {
 lsUsb: ARRAY(DWORD, 4),
 lsCsbDefault: ARRAY(DWORD, 2),
 lsCsbSupported: ARRAY(DWORD, 2)
});

var HANDLETABLE = new StructT('HANDLETABLE', {
 objectHandle: ARRAY(HGDIOBJ, 1)
});

var METARECORD = new StructT('METARECORD', {
 rdSize: DWORD,
 rdFunction: WORD,
 rdParm: ARRAY(WORD, 1)
});

var METAFILEPICT = new StructT('METAFILEPICT', {
 mm: LONG,
 xExt: LONG,
 yExt: LONG,
 hMF: HMETAFILE
});

var METAHEADER = new StructT('METAHEADER', {
 mtType: WORD,
 mtHeaderSize: WORD,
 mtVersion: WORD,
 mtSize: DWORD,
 mtNoObjects: WORD,
 mtMaxRecord: DWORD,
 mtNoParameters: WORD
});

var ENHMETARECORD = new StructT('ENHMETARECORD', {
 iType: DWORD,
 nSize: DWORD,
 dParm: ARRAY(DWORD, 1)
});

var ENHMETAHEADER = new StructT('ENHMETAHEADER', {
 iType: DWORD,
 nSize: DWORD,
 rclBounds: RECTL,
 rclFrame: RECTL,
 dSignature: DWORD,
 nVersion: DWORD,
 nBytes: DWORD,
 nRecords: DWORD,
 nHandles: WORD,
 sReserved: WORD,
 nDescription: DWORD,
 offDescription: DWORD,
 nPalEntries: DWORD,
 szlDevice: SIZEL,
 szlMillimeters: SIZEL,
 cbPixelFormat: DWORD,
 offPixelFormat: DWORD,
 bOpenGL: DWORD,
 szlMicrometers: SIZEL
});

var TEXTMETRIC = new StructT('TEXTMETRIC', {
 tmHeight: LONG,
 tmAscent: LONG,
 tmDescent: LONG,
 tmInternalLeading: LONG,
 tmExternalLeading: LONG,
 tmAveCharWidth: LONG,
 tmMaxCharWidth: LONG,
 tmWeight: LONG,
 tmOverhang: LONG,
 tmDigitizedAspectX: LONG,
 tmDigitizedAspectY: LONG,
 tmFirstChar: BYTE,
 tmLastChar: BYTE,
 tmDefaultChar: BYTE,
 tmBreakChar: BYTE,
 tmItalic: BYTE,
 tmUnderlined: BYTE,
 tmStruckOut: BYTE,
 tmPitchAndFamily: BYTE,
 tmCharSet: BYTE
});

var TEXTMETRICW = new StructT('TEXTMETRICW', {
 tmHeight: LONG,
 tmAscent: LONG,
 tmDescent: LONG,
 tmInternalLeading: LONG,
 tmExternalLeading: LONG,
 tmAveCharWidth: LONG,
 tmMaxCharWidth: LONG,
 tmWeight: LONG,
 tmOverhang: LONG,
 tmDigitizedAspectX: LONG,
 tmDigitizedAspectY: LONG,
 tmFirstChar: WCHAR,
 tmLastChar: WCHAR,
 tmDefaultChar: WCHAR,
 tmBreakChar: WCHAR,
 tmItalic: BYTE,
 tmUnderlined: BYTE,
 tmStruckOut: BYTE,
 tmPitchAndFamily: BYTE,
 tmCharSet: BYTE
});

var NEWTEXTMETRIC = new StructT('NEWTEXTMETRIC', {
 tmHeight: LONG,
 tmAscent: LONG,
 tmDescent: LONG,
 tmInternalLeading: LONG,
 tmExternalLeading: LONG,
 tmAveCharWidth: LONG,
 tmMaxCharWidth: LONG,
 tmWeight: LONG,
 tmOverhang: LONG,
 tmDigitizedAspectX: LONG,
 tmDigitizedAspectY: LONG,
 tmFirstChar: BYTE,
 tmLastChar: BYTE,
 tmDefaultChar: BYTE,
 tmBreakChar: BYTE,
 tmItalic: BYTE,
 tmUnderlined: BYTE,
 tmStruckOut: BYTE,
 tmPitchAndFamily: BYTE,
 tmCharSet: BYTE,
 ntmFlags: DWORD,
 ntmSizeEM: UINT,
 ntmCellHeight: UINT,
 ntmAvgWidth: UINT
});

var NEWTEXTMETRICW = new StructT('NEWTEXTMETRICW', {
 tmHeight: LONG,
 tmAscent: LONG,
 tmDescent: LONG,
 tmInternalLeading: LONG,
 tmExternalLeading: LONG,
 tmAveCharWidth: LONG,
 tmMaxCharWidth: LONG,
 tmWeight: LONG,
 tmOverhang: LONG,
 tmDigitizedAspectX: LONG,
 tmDigitizedAspectY: LONG,
 tmFirstChar: WCHAR,
 tmLastChar: WCHAR,
 tmDefaultChar: WCHAR,
 tmBreakChar: WCHAR,
 tmItalic: BYTE,
 tmUnderlined: BYTE,
 tmStruckOut: BYTE,
 tmPitchAndFamily: BYTE,
 tmCharSet: BYTE,
 ntmFlags: DWORD,
 ntmSizeEM: UINT,
 ntmCellHeight: UINT,
 ntmAvgWidth: UINT
});

var NEWTEXTMETRICEX = new StructT('NEWTEXTMETRICEX', {
 ntmTm: NEWTEXTMETRICA,
 ntmFontSig: FONTSIGNATURE
});

var NEWTEXTMETRICEXW = new StructT('NEWTEXTMETRICEXW', {
 ntmTm: NEWTEXTMETRICW,
 ntmFontSig: FONTSIGNATURE
});

var PELARRAY = new StructT('PELARRAY', {
 paXCount: LONG,
 paYCount: LONG,
 paXExt: LONG,
 paYExt: LONG,
 paRGBs: BYTE
});

var PATTERN = new StructT('PATTERN', {
 lbStyle: UINT,
 lbColor: COLORREF,
 lbHatch: ULONG_PTR
});

var LOGBRUSH32 = new StructT('LOGBRUSH32', {
 lbStyle: UINT,
 lbColor: COLORREF,
 lbHatch: ULONG
});

var LOGPEN = new StructT('LOGPEN', {
 lopnStyle: UINT,
 lopnWidth: POINT,
 lopnColor: COLORREF
});

var EXTLOGPEN = new StructT('EXTLOGPEN', {
 elpPenStyle: DWORD,
 elpWidth: DWORD,
 elpBrushStyle: UINT,
 elpColor: COLORREF,
 elpHatch: ULONG_PTR,
 elpNumEntries: DWORD,
 elpStyleEntry: ARRAY(DWORD, 1)
});

var EXTLOGPEN32 = new StructT('EXTLOGPEN32', {
 elpPenStyle: DWORD,
 elpWidth: DWORD,
 elpBrushStyle: UINT,
 elpColor: COLORREF,
 elpHatch: ULONG,
 elpNumEntries: DWORD,
 elpStyleEntry: ARRAY(DWORD, 1)
});

var PALETTEENTRY = new StructT('PALETTEENTRY', {
 peRed: BYTE,
 peGreen: BYTE,
 peBlue: BYTE,
 peFlags: BYTE
});

var LOGPALETTE = new StructT('LOGPALETTE', {
 palVersion: WORD,
 palNumEntries: WORD,
 palPalEntry: ARRAY(PALETTEENTRY, 1)
});

var LOGFONT = new StructT('LOGFONT', {
 lfHeight: LONG,
 lfWidth: LONG,
 lfEscapement: LONG,
 lfOrientation: LONG,
 lfWeight: LONG,
 lfItalic: BYTE,
 lfUnderline: BYTE,
 lfStrikeOut: BYTE,
 lfCharSet: BYTE,
 lfOutPrecision: BYTE,
 lfClipPrecision: BYTE,
 lfQuality: BYTE,
 lfPitchAndFamily: BYTE,
 lfFaceName: ARRAY(CHAR, LF_FACESIZE)
});

var LOGFONTW = new StructT('LOGFONTW', {
 lfHeight: LONG,
 lfWidth: LONG,
 lfEscapement: LONG,
 lfOrientation: LONG,
 lfWeight: LONG,
 lfItalic: BYTE,
 lfUnderline: BYTE,
 lfStrikeOut: BYTE,
 lfCharSet: BYTE,
 lfOutPrecision: BYTE,
 lfClipPrecision: BYTE,
 lfQuality: BYTE,
 lfPitchAndFamily: BYTE,
 lfFaceName: ARRAY(WCHAR, LF_FACESIZE)
});

var ENUMLOGFONT = new StructT('ENUMLOGFONT', {
 elfLogFont: LOGFONTA,
 elfFullName: ARRAY(BYTE, LF_FULLFACESIZE),
 elfStyle: ARRAY(BYTE, LF_FACESIZE)
});

var ENUMLOGFONTW = new StructT('ENUMLOGFONTW', {
 elfLogFont: LOGFONTW,
 elfFullName: ARRAY(WCHAR, LF_FULLFACESIZE),
 elfStyle: ARRAY(WCHAR, LF_FACESIZE)
});

var ENUMLOGFONTEX = new StructT('ENUMLOGFONTEX', {
 elfLogFont: LOGFONTA,
 elfFullName: ARRAY(BYTE, LF_FULLFACESIZE),
 elfStyle: ARRAY(BYTE, LF_FACESIZE),
 elfScript: ARRAY(BYTE, LF_FACESIZE)
});

var ENUMLOGFONTEXW = new StructT('ENUMLOGFONTEXW', {
 elfLogFont: LOGFONTW,
 elfFullName: ARRAY(WCHAR, LF_FULLFACESIZE),
 elfStyle: ARRAY(WCHAR, LF_FACESIZE),
 elfScript: ARRAY(WCHAR, LF_FACESIZE)
});

var PANOSE = new StructT('PANOSE', {
 bFamilyType: BYTE,
 bSerifStyle: BYTE,
 bWeight: BYTE,
 bProportion: BYTE,
 bContrast: BYTE,
 bStrokeVariation: BYTE,
 bArmStyle: BYTE,
 bLetterform: BYTE,
 bMidline: BYTE,
 bXHeight: BYTE
});

var EXTLOGFONT = new StructT('EXTLOGFONT', {
 elfLogFont: LOGFONTA,
 elfFullName: ARRAY(BYTE, LF_FULLFACESIZE),
 elfStyle: ARRAY(BYTE, LF_FACESIZE),
 elfVersion: DWORD,
 elfStyleSize: DWORD,
 elfMatch: DWORD,
 elfReserved: DWORD,
 elfVendorId: ARRAY(BYTE, ELF_VENDOR_SIZE),
 elfCulture: DWORD,
 elfPanose: PANOSE
});

var EXTLOGFONTW = new StructT('EXTLOGFONTW', {
 elfLogFont: LOGFONTW,
 elfFullName: ARRAY(WCHAR, LF_FULLFACESIZE),
 elfStyle: ARRAY(WCHAR, LF_FACESIZE),
 elfVersion: DWORD,
 elfStyleSize: DWORD,
 elfMatch: DWORD,
 elfReserved: DWORD,
 elfVendorId: ARRAY(BYTE, ELF_VENDOR_SIZE),
 elfCulture: DWORD,
 elfPanose: PANOSE
});

var DEVMODE = new StructT('DEVMODE', {
 dmDeviceName: ARRAY(BYTE, CCHDEVICENAME),
 dmSpecVersion: WORD,
 dmDriverVersion: WORD,
 dmSize: WORD,
 dmDriverExtra: WORD,
 dmFields: DWORD,
 dmColor: short,
 dmDuplex: short,
 dmYResolution: short,
 dmTTOption: short,
 dmCollate: short,
 dmFormName: ARRAY(BYTE, CCHFORMNAME),
 dmLogPixels: WORD,
 dmBitsPerPel: DWORD,
 dmPelsWidth: DWORD,
 dmPelsHeight: DWORD,
 dmDisplayFrequency: DWORD,
 dmICMMethod: DWORD,
 dmICMIntent: DWORD,
 dmMediaType: DWORD,
 dmDitherType: DWORD,
 dmReserved1: DWORD,
 dmReserved2: DWORD,
 dmPanningWidth: DWORD,
 dmPanningHeight: DWORD
});

var undefined = new StructT('undefined', {
 dmOrientation: short,
 dmPaperSize: short,
 dmPaperLength: short,
 dmPaperWidth: short,
 dmScale: short,
 dmCopies: short,
 dmDefaultSource: short,
 dmPrintQuality: short
});

var undefined = new StructT('undefined', {
 dmPosition: POINTL,
 dmDisplayOrientation: DWORD,
 dmDisplayFixedOutput: DWORD
});

var DEVMODEW = new StructT('DEVMODEW', {
 dmDeviceName: ARRAY(WCHAR, CCHDEVICENAME),
 dmSpecVersion: WORD,
 dmDriverVersion: WORD,
 dmSize: WORD,
 dmDriverExtra: WORD,
 dmFields: DWORD,
 dmColor: short,
 dmDuplex: short,
 dmYResolution: short,
 dmTTOption: short,
 dmCollate: short,
 dmFormName: ARRAY(WCHAR, CCHFORMNAME),
 dmLogPixels: WORD,
 dmBitsPerPel: DWORD,
 dmPelsWidth: DWORD,
 dmPelsHeight: DWORD,
 dmDisplayFrequency: DWORD,
 dmICMMethod: DWORD,
 dmICMIntent: DWORD,
 dmMediaType: DWORD,
 dmDitherType: DWORD,
 dmReserved1: DWORD,
 dmReserved2: DWORD,
 dmPanningWidth: DWORD,
 dmPanningHeight: DWORD
});

var undefined = new StructT('undefined', {
 dmOrientation: short,
 dmPaperSize: short,
 dmPaperLength: short,
 dmPaperWidth: short,
 dmScale: short,
 dmCopies: short,
 dmDefaultSource: short,
 dmPrintQuality: short
});

var undefined = new StructT('undefined', {
 dmPosition: POINTL,
 dmDisplayOrientation: DWORD,
 dmDisplayFixedOutput: DWORD
});

var DISPLAY_DEVICE = new StructT('DISPLAY_DEVICE', {
 cb: DWORD,
 DeviceName: ARRAY(CHAR, 32),
 DeviceString: ARRAY(CHAR, 128),
 StateFlags: DWORD,
 DeviceID: ARRAY(CHAR, 128),
 DeviceKey: ARRAY(CHAR, 128)
});

var DISPLAY_DEVICEW = new StructT('DISPLAY_DEVICEW', {
 cb: DWORD,
 DeviceName: ARRAY(WCHAR, 32),
 DeviceString: ARRAY(WCHAR, 128),
 StateFlags: DWORD,
 DeviceID: ARRAY(WCHAR, 128),
 DeviceKey: ARRAY(WCHAR, 128)
});

var DISPLAYCONFIG_RATIONAL = new StructT('DISPLAYCONFIG_RATIONAL', {
 Numerator: UINT32,
 Denominator: UINT32
});

var DISPLAYCONFIG_2DREGION = new StructT('DISPLAYCONFIG_2DREGION', {
 cx: UINT32,
 cy: UINT32
});

var DISPLAYCONFIG_VIDEO_SIGNAL_INFO = new StructT('DISPLAYCONFIG_VIDEO_SIGNAL_INFO', {
 pixelRate: UINT64,
 hSyncFreq: DISPLAYCONFIG_RATIONAL,
 vSyncFreq: DISPLAYCONFIG_RATIONAL,
 activeSize: DISPLAYCONFIG_2DREGION,
 totalSize: DISPLAYCONFIG_2DREGION,
 videoStandard: UINT32,
 scanLineOrdering: DISPLAYCONFIG_SCANLINE_ORDERING
});

var DISPLAYCONFIG_SOURCE_MODE = new StructT('DISPLAYCONFIG_SOURCE_MODE', {
 width: UINT32,
 height: UINT32,
 pixelFormat: DISPLAYCONFIG_PIXELFORMAT,
 position: POINTL
});

var DISPLAYCONFIG_TARGET_MODE = new StructT('DISPLAYCONFIG_TARGET_MODE', {
 targetVideoSignalInfo: DISPLAYCONFIG_VIDEO_SIGNAL_INFO
});

var DISPLAYCONFIG_MODE_INFO = new StructT('DISPLAYCONFIG_MODE_INFO', {
 infoType: DISPLAYCONFIG_MODE_INFO_TYPE,
 id: UINT32,
 adapterId: LUID
});

var DISPLAYCONFIG_PATH_SOURCE_INFO = new StructT('DISPLAYCONFIG_PATH_SOURCE_INFO', {
 adapterId: LUID,
 id: UINT32,
 modeInfoIdx: UINT32,
 statusFlags: UINT32
});

var DISPLAYCONFIG_PATH_TARGET_INFO = new StructT('DISPLAYCONFIG_PATH_TARGET_INFO', {
 adapterId: LUID,
 id: UINT32,
 modeInfoIdx: UINT32,
 outputTechnology: DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY,
 rotation: DISPLAYCONFIG_ROTATION,
 scaling: DISPLAYCONFIG_SCALING,
 refreshRate: DISPLAYCONFIG_RATIONAL,
 scanLineOrdering: DISPLAYCONFIG_SCANLINE_ORDERING,
 targetAvailable: BOOL,
 statusFlags: UINT32
});

var DISPLAYCONFIG_PATH_INFO = new StructT('DISPLAYCONFIG_PATH_INFO', {
 sourceInfo: DISPLAYCONFIG_PATH_SOURCE_INFO,
 targetInfo: DISPLAYCONFIG_PATH_TARGET_INFO,
 flags: UINT32
});

var DISPLAYCONFIG_DEVICE_INFO_HEADER = new StructT('DISPLAYCONFIG_DEVICE_INFO_HEADER', {
 type: DISPLAYCONFIG_DEVICE_INFO_TYPE,
 size: UINT32,
 adapterId: LUID,
 id: UINT32
});

var DISPLAYCONFIG_SOURCE_DEVICE_NAME = new StructT('DISPLAYCONFIG_SOURCE_DEVICE_NAME', {
 header: DISPLAYCONFIG_DEVICE_INFO_HEADER,
 viewGdiDeviceName: ARRAY(WCHAR, CCHDEVICENAME)
});


var undefined = new StructT('undefined', {
 friendlyNameFromEdid: UINT32,
 friendlyNameForced: UINT32,
 edidIdsValid: UINT32,
 reserved: UINT32
});

var DISPLAYCONFIG_TARGET_DEVICE_NAME = new StructT('DISPLAYCONFIG_TARGET_DEVICE_NAME', {
 header: DISPLAYCONFIG_DEVICE_INFO_HEADER,
 flags: DISPLAYCONFIG_TARGET_DEVICE_NAME_FLAGS,
 outputTechnology: DISPLAYCONFIG_VIDEO_OUTPUT_TECHNOLOGY,
 edidManufactureId: UINT16,
 edidProductCodeId: UINT16,
 connectorInstance: UINT32,
 monitorFriendlyDeviceName: ARRAY(WCHAR, 64),
 monitorDevicePath: ARRAY(WCHAR, 128)
});

var DISPLAYCONFIG_TARGET_PREFERRED_MODE = new StructT('DISPLAYCONFIG_TARGET_PREFERRED_MODE', {
 header: DISPLAYCONFIG_DEVICE_INFO_HEADER,
 width: UINT32,
 height: UINT32,
 targetMode: DISPLAYCONFIG_TARGET_MODE
});

var DISPLAYCONFIG_ADAPTER_NAME = new StructT('DISPLAYCONFIG_ADAPTER_NAME', {
 header: DISPLAYCONFIG_DEVICE_INFO_HEADER,
 adapterDevicePath: ARRAY(WCHAR, 128)
});

var DISPLAYCONFIG_SET_TARGET_PERSISTENCE = new StructT('DISPLAYCONFIG_SET_TARGET_PERSISTENCE', {
 header: DISPLAYCONFIG_DEVICE_INFO_HEADER
});

var undefined = new StructT('undefined', {
 bootPersistenceOn: UINT32,
 reserved: UINT32
});

var RGNDATAHEADER = new StructT('RGNDATAHEADER', {
 dwSize: DWORD,
 iType: DWORD,
 nCount: DWORD,
 nRgnSize: DWORD,
 rcBound: RECT
});

var RGNDATA = new StructT('RGNDATA', {
 rdh: RGNDATAHEADER,
 Buffer: ARRAY(undefined, 1)
});

var ABC = new StructT('ABC', {
 abcA: int,
 abcB: UINT,
 abcC: int
});

var ABCFLOAT = new StructT('ABCFLOAT', {
 abcfA: FLOAT,
 abcfB: FLOAT,
 abcfC: FLOAT
});

var OUTLINETEXTMETRIC = new StructT('OUTLINETEXTMETRIC', {
 otmSize: UINT,
 otmTextMetrics: TEXTMETRICA,
 otmFiller: BYTE,
 otmPanoseNumber: PANOSE,
 otmfsSelection: UINT,
 otmfsType: UINT,
 otmsCharSlopeRise: int,
 otmsCharSlopeRun: int,
 otmItalicAngle: int,
 otmEMSquare: UINT,
 otmAscent: int,
 otmDescent: int,
 otmLineGap: UINT,
 otmsCapEmHeight: UINT,
 otmsXHeight: UINT,
 otmrcFontBox: RECT,
 otmMacAscent: int,
 otmMacDescent: int,
 otmMacLineGap: UINT,
 otmusMinimumPPEM: UINT,
 otmptSubscriptSize: POINT,
 otmptSubscriptOffset: POINT,
 otmptSuperscriptSize: POINT,
 otmptSuperscriptOffset: POINT,
 otmsStrikeoutSize: UINT,
 otmsStrikeoutPosition: int,
 otmsUnderscoreSize: int,
 otmsUnderscorePosition: int,
 otmpFamilyName: PSTR,
 otmpFaceName: PSTR,
 otmpStyleName: PSTR,
 otmpFullName: PSTR
});

var OUTLINETEXTMETRICW = new StructT('OUTLINETEXTMETRICW', {
 otmSize: UINT,
 otmTextMetrics: TEXTMETRICW,
 otmFiller: BYTE,
 otmPanoseNumber: PANOSE,
 otmfsSelection: UINT,
 otmfsType: UINT,
 otmsCharSlopeRise: int,
 otmsCharSlopeRun: int,
 otmItalicAngle: int,
 otmEMSquare: UINT,
 otmAscent: int,
 otmDescent: int,
 otmLineGap: UINT,
 otmsCapEmHeight: UINT,
 otmsXHeight: UINT,
 otmrcFontBox: RECT,
 otmMacAscent: int,
 otmMacDescent: int,
 otmMacLineGap: UINT,
 otmusMinimumPPEM: UINT,
 otmptSubscriptSize: POINT,
 otmptSubscriptOffset: POINT,
 otmptSuperscriptSize: POINT,
 otmptSuperscriptOffset: POINT,
 otmsStrikeoutSize: UINT,
 otmsStrikeoutPosition: int,
 otmsUnderscoreSize: int,
 otmsUnderscorePosition: int,
 otmpFamilyName: PSTR,
 otmpFaceName: PSTR,
 otmpStyleName: PSTR,
 otmpFullName: PSTR
});

var POLYTEXT = new StructT('POLYTEXT', {
 x: int,
 y: int,
 n: UINT,
 lpstr: LPCSTR,
 uiFlags: UINT,
 rcl: RECT,
 pdx: int.Δ
});

var POLYTEXTW = new StructT('POLYTEXTW', {
 x: int,
 y: int,
 n: UINT,
 lpstr: LPCWSTR,
 uiFlags: UINT,
 rcl: RECT,
 pdx: int.Δ
});

var FIXED = new StructT('FIXED', {
 fract: WORD,
 value: short
});

var MAT2 = new StructT('MAT2', {
 eM11: FIXED,
 eM12: FIXED,
 eM21: FIXED,
 eM22: FIXED
});

var GLYPHMETRICS = new StructT('GLYPHMETRICS', {
 gmBlackBoxX: UINT,
 gmBlackBoxY: UINT,
 gmptGlyphOrigin: POINT,
 gmCellIncX: short,
 gmCellIncY: short
});

var POINTFX = new StructT('POINTFX', {
 x: FIXED,
 y: FIXED
});

var TTPOLYCURVE = new StructT('TTPOLYCURVE', {
 wType: WORD,
 cpfx: WORD,
 apfx: ARRAY(POINTFX, 1)
});

var TTPOLYGONHEADER = new StructT('TTPOLYGONHEADER', {
 cb: DWORD,
 dwType: DWORD,
 pfxStart: POINTFX
});

var GCP_RESULTS = new StructT('GCP_RESULTS', {
 lStructSize: DWORD,
 lpOutString: LPSTR,
 lpOrder: UINT.Δ,
 lpDx: int.Δ,
 lpCaretPos: int.Δ,
 lpClass: LPSTR,
 lpGlyphs: LPWSTR,
 nGlyphs: UINT,
 nMaxFit: int
});

var GCP_RESULTSW = new StructT('GCP_RESULTSW', {
 lStructSize: DWORD,
 lpOutString: LPWSTR,
 lpOrder: UINT.Δ,
 lpDx: int.Δ,
 lpCaretPos: int.Δ,
 lpClass: LPSTR,
 lpGlyphs: LPWSTR,
 nGlyphs: UINT,
 nMaxFit: int
});

var RASTERIZER_STATUS = new StructT('RASTERIZER_STATUS', {
 nSize: short,
 wFlags: short,
 nLanguageID: short
});

var PIXELFORMATDESCRIPTOR = new StructT('PIXELFORMATDESCRIPTOR', {
 nSize: WORD,
 nVersion: WORD,
 dwFlags: DWORD,
 iPixelType: BYTE,
 cColorBits: BYTE,
 cRedBits: BYTE,
 cRedShift: BYTE,
 cGreenBits: BYTE,
 cGreenShift: BYTE,
 cBlueBits: BYTE,
 cBlueShift: BYTE,
 cAlphaBits: BYTE,
 cAlphaShift: BYTE,
 cAccumBits: BYTE,
 cAccumRedBits: BYTE,
 cAccumGreenBits: BYTE,
 cAccumBlueBits: BYTE,
 cAccumAlphaBits: BYTE,
 cDepthBits: BYTE,
 cStencilBits: BYTE,
 cAuxBuffers: BYTE,
 iLayerType: BYTE,
 bReserved: BYTE,
 dwLayerMask: DWORD,
 dwVisibleMask: DWORD,
 dwDamageMask: DWORD
});

var WCRANGE = new StructT('WCRANGE', {
 wcLow: WCHAR,
 cGlyphs: USHORT
});

var GLYPHSET = new StructT('GLYPHSET', {
 cbThis: DWORD,
 flAccel: DWORD,
 cGlyphsSupported: DWORD,
 cRanges: DWORD,
 ranges: ARRAY(WCRANGE, 1)
});

var DESIGNVECTOR = new StructT('DESIGNVECTOR', {
 dvReserved: DWORD,
 dvNumAxes: DWORD,
 dvValues: ARRAY(LONG, MM_MAX_NUMAXES)
});

var AXISINFO = new StructT('AXISINFO', {
 axMinValue: LONG,
 axMaxValue: LONG,
 axAxisName: ARRAY(BYTE, MM_MAX_AXES_NAMELEN)
});

var AXISINFOW = new StructT('AXISINFOW', {
 axMinValue: LONG,
 axMaxValue: LONG,
 axAxisName: ARRAY(WCHAR, MM_MAX_AXES_NAMELEN)
});

var AXESLIST = new StructT('AXESLIST', {
 axlReserved: DWORD,
 axlNumAxes: DWORD,
 axlAxisInfo: ARRAY(AXISINFOA, MM_MAX_NUMAXES)
});

var AXESLISTW = new StructT('AXESLISTW', {
 axlReserved: DWORD,
 axlNumAxes: DWORD,
 axlAxisInfo: ARRAY(AXISINFOW, MM_MAX_NUMAXES)
});

var ENUMLOGFONTEXDV = new StructT('ENUMLOGFONTEXDV', {
 elfEnumLogfontEx: ENUMLOGFONTEXA,
 elfDesignVector: DESIGNVECTOR
});

var ENUMLOGFONTEXDVW = new StructT('ENUMLOGFONTEXDVW', {
 elfEnumLogfontEx: ENUMLOGFONTEXW,
 elfDesignVector: DESIGNVECTOR
});

var ENUMTEXTMETRIC = new StructT('ENUMTEXTMETRIC', {
 etmNewTextMetricEx: NEWTEXTMETRICEXA,
 etmAxesList: AXESLISTA
});

var ENUMTEXTMETRICW = new StructT('ENUMTEXTMETRICW', {
 etmNewTextMetricEx: NEWTEXTMETRICEXW,
 etmAxesList: AXESLISTW
});

var TRIVERTEX = new StructT('TRIVERTEX', {
 x: LONG,
 y: LONG,
 Red: COLOR16,
 Green: COLOR16,
 Blue: COLOR16,
 Alpha: COLOR16
});

var GRADIENT_TRIANGLE = new StructT('GRADIENT_TRIANGLE', {
 Vertex1: ULONG,
 Vertex2: ULONG,
 Vertex3: ULONG
});

var GRADIENT_RECT = new StructT('GRADIENT_RECT', {
 UpperLeft: ULONG,
 LowerRight: ULONG
});

var BLENDFUNCTION = new StructT('BLENDFUNCTION', {
 BlendOp: BYTE,
 BlendFlags: BYTE,
 SourceConstantAlpha: BYTE,
 AlphaFormat: BYTE
});

var DIBSECTION = new StructT('DIBSECTION', {
 dsBm: BITMAP,
 dsBmih: BITMAPINFOHEADER,
 dsBitfields: ARRAY(DWORD, 3),
 dshSection: HANDLE,
 dsOffset: DWORD
});

var COLORADJUSTMENT = new StructT('COLORADJUSTMENT', {
 caSize: WORD,
 caFlags: WORD,
 caIlluminantIndex: WORD,
 caRedGamma: WORD,
 caGreenGamma: WORD,
 caBlueGamma: WORD,
 caReferenceBlack: WORD,
 caReferenceWhite: WORD,
 caContrast: SHORT,
 caBrightness: SHORT,
 caColorfulness: SHORT,
 caRedGreenTint: SHORT
});

var DOCINFO = new StructT('DOCINFO', {
 cbSize: int,
 lpszDocName: LPCSTR,
 lpszOutput: LPCSTR,
 lpszDatatype: LPCSTR,
 fwType: DWORD
});

var DOCINFOW = new StructT('DOCINFOW', {
 cbSize: int,
 lpszDocName: LPCWSTR,
 lpszOutput: LPCWSTR,
 lpszDatatype: LPCWSTR,
 fwType: DWORD
});

var KERNINGPAIR = new StructT('KERNINGPAIR', {
 wFirst: WORD,
 wSecond: WORD,
 iKernAmount: int
});

var EMR = new StructT('EMR', {
 iType: DWORD,
 nSize: DWORD
});

var EMRTEXT = new StructT('EMRTEXT', {
 ptlReference: POINTL,
 nChars: DWORD,
 offString: DWORD,
 fOptions: DWORD,
 rcl: RECTL,
 offDx: DWORD
});

var EMRREALIZEPALETTE = new StructT('EMRREALIZEPALETTE', {
 emr: EMR
});

var EMRSETTEXTALIGN = new StructT('EMRSETTEXTALIGN', {
 emr: EMR,
 iMode: DWORD
});

var EMRSETMITERLIMIT = new StructT('EMRSETMITERLIMIT', {
 emr: EMR,
 eMiterLimit: FLOAT
});

var EMRRESTOREDC = new StructT('EMRRESTOREDC', {
 emr: EMR,
 iRelative: LONG
});

var EMRSETARCDIRECTION = new StructT('EMRSETARCDIRECTION', {
 emr: EMR,
 iArcDirection: DWORD
});

var EMRSETMAPPERFLAGS = new StructT('EMRSETMAPPERFLAGS', {
 emr: EMR,
 dwFlags: DWORD
});

var EMRSETTEXTCOLOR = new StructT('EMRSETTEXTCOLOR', {
 emr: EMR,
 crColor: COLORREF
});

var EMRDELETEOBJECT = new StructT('EMRDELETEOBJECT', {
 emr: EMR,
 ihObject: DWORD
});

var EMRSELECTPALETTE = new StructT('EMRSELECTPALETTE', {
 emr: EMR,
 ihPal: DWORD
});

var EMRRESIZEPALETTE = new StructT('EMRRESIZEPALETTE', {
 emr: EMR,
 ihPal: DWORD,
 cEntries: DWORD
});

var EMRSETPALETTEENTRIES = new StructT('EMRSETPALETTEENTRIES', {
 emr: EMR,
 ihPal: DWORD,
 iStart: DWORD,
 cEntries: DWORD,
 aPalEntries: ARRAY(PALETTEENTRY, 1)
});

var EMRSETCOLORADJUSTMENT = new StructT('EMRSETCOLORADJUSTMENT', {
 emr: EMR,
 ColorAdjustment: COLORADJUSTMENT
});

var EMRGDICOMMENT = new StructT('EMRGDICOMMENT', {
 emr: EMR,
 cbData: DWORD,
 Data: ARRAY(BYTE, 1)
});

var EMREOF = new StructT('EMREOF', {
 emr: EMR,
 nPalEntries: DWORD,
 offPalEntries: DWORD,
 nSizeLast: DWORD
});

var EMRMOVETOEX = new StructT('EMRMOVETOEX', {
 emr: EMR,
 ptl: POINTL
});

var EMROFFSETCLIPRGN = new StructT('EMROFFSETCLIPRGN', {
 emr: EMR,
 ptlOffset: POINTL
});

var EMRSTROKEPATH = new StructT('EMRSTROKEPATH', {
 emr: EMR,
 rclBounds: RECTL
});

var EMRINTERSECTCLIPRECT = new StructT('EMRINTERSECTCLIPRECT', {
 emr: EMR,
 rclClip: RECTL
});

var EMRSETBRUSHORGEX = new StructT('EMRSETBRUSHORGEX', {
 emr: EMR,
 ptlOrigin: POINTL
});

var EMRSETWINDOWEXTEX = new StructT('EMRSETWINDOWEXTEX', {
 emr: EMR,
 szlExtent: SIZEL
});

var EMRSCALEWINDOWEXTEX = new StructT('EMRSCALEWINDOWEXTEX', {
 emr: EMR,
 xNum: LONG,
 xDenom: LONG,
 yNum: LONG,
 yDenom: LONG
});

var EMRSETWORLDTRANSFORM = new StructT('EMRSETWORLDTRANSFORM', {
 emr: EMR,
 xform: XFORM
});

var EMRMODIFYWORLDTRANSFORM = new StructT('EMRMODIFYWORLDTRANSFORM', {
 emr: EMR,
 xform: XFORM,
 iMode: DWORD
});

var EMRSETPIXELV = new StructT('EMRSETPIXELV', {
 emr: EMR,
 ptlPixel: POINTL,
 crColor: COLORREF
});

var EMREXTFLOODFILL = new StructT('EMREXTFLOODFILL', {
 emr: EMR,
 ptlStart: POINTL,
 crColor: COLORREF,
 iMode: DWORD
});

var EMRRECTANGLE = new StructT('EMRRECTANGLE', {
 emr: EMR,
 rclBox: RECTL
});

var EMRROUNDRECT = new StructT('EMRROUNDRECT', {
 emr: EMR,
 rclBox: RECTL,
 szlCorner: SIZEL
});

var EMRPIE = new StructT('EMRPIE', {
 emr: EMR,
 rclBox: RECTL,
 ptlStart: POINTL,
 ptlEnd: POINTL
});

var EMRANGLEARC = new StructT('EMRANGLEARC', {
 emr: EMR,
 ptlCenter: POINTL,
 nRadius: DWORD,
 eStartAngle: FLOAT,
 eSweepAngle: FLOAT
});

var EMRPOLYLINETO = new StructT('EMRPOLYLINETO', {
 emr: EMR,
 rclBounds: RECTL,
 cptl: DWORD,
 aptl: ARRAY(POINTL, 1)
});

var EMRPOLYLINETO16 = new StructT('EMRPOLYLINETO16', {
 emr: EMR,
 rclBounds: RECTL,
 cpts: DWORD,
 apts: ARRAY(POINTS, 1)
});

var EMRPOLYDRAW = new StructT('EMRPOLYDRAW', {
 emr: EMR,
 rclBounds: RECTL,
 cptl: DWORD,
 aptl: ARRAY(POINTL, 1),
 abTypes: ARRAY(BYTE, 1)
});

var EMRPOLYDRAW16 = new StructT('EMRPOLYDRAW16', {
 emr: EMR,
 rclBounds: RECTL,
 cpts: DWORD,
 apts: ARRAY(POINTS, 1),
 abTypes: ARRAY(BYTE, 1)
});

var EMRPOLYPOLYGON = new StructT('EMRPOLYPOLYGON', {
 emr: EMR,
 rclBounds: RECTL,
 nPolys: DWORD,
 cptl: DWORD,
 aPolyCounts: ARRAY(DWORD, 1),
 aptl: ARRAY(POINTL, 1)
});

var EMRPOLYPOLYGON16 = new StructT('EMRPOLYPOLYGON16', {
 emr: EMR,
 rclBounds: RECTL,
 nPolys: DWORD,
 cpts: DWORD,
 aPolyCounts: ARRAY(DWORD, 1),
 apts: ARRAY(POINTS, 1)
});

var EMRPAINTRGN = new StructT('EMRPAINTRGN', {
 emr: EMR,
 rclBounds: RECTL,
 cbRgnData: DWORD,
 RgnData: ARRAY(BYTE, 1)
});

var EMRFILLRGN = new StructT('EMRFILLRGN', {
 emr: EMR,
 rclBounds: RECTL,
 cbRgnData: DWORD,
 ihBrush: DWORD,
 RgnData: ARRAY(BYTE, 1)
});

var EMRFRAMERGN = new StructT('EMRFRAMERGN', {
 emr: EMR,
 rclBounds: RECTL,
 cbRgnData: DWORD,
 ihBrush: DWORD,
 szlStroke: SIZEL,
 RgnData: ARRAY(BYTE, 1)
});

var EMREXTSELECTCLIPRGN = new StructT('EMREXTSELECTCLIPRGN', {
 emr: EMR,
 cbRgnData: DWORD,
 iMode: DWORD,
 RgnData: ARRAY(BYTE, 1)
});

var EMREXTTEXTOUTW = new StructT('EMREXTTEXTOUTW', {
 emr: EMR,
 rclBounds: RECTL,
 iGraphicsMode: DWORD,
 exScale: FLOAT,
 eyScale: FLOAT,
 emrtext: EMRTEXT
});

var EMRPOLYTEXTOUTW = new StructT('EMRPOLYTEXTOUTW', {
 emr: EMR,
 rclBounds: RECTL,
 iGraphicsMode: DWORD,
 exScale: FLOAT,
 eyScale: FLOAT,
 cStrings: LONG,
 aemrtext: ARRAY(EMRTEXT, 1)
});

var EMRBITBLT = new StructT('EMRBITBLT', {
 emr: EMR,
 rclBounds: RECTL,
 xDest: LONG,
 yDest: LONG,
 cxDest: LONG,
 cyDest: LONG,
 dwRop: DWORD,
 xSrc: LONG,
 ySrc: LONG,
 xformSrc: XFORM,
 crBkColorSrc: COLORREF,
 iUsageSrc: DWORD,
 offBmiSrc: DWORD,
 cbBmiSrc: DWORD,
 offBitsSrc: DWORD,
 cbBitsSrc: DWORD
});

var EMRSTRETCHBLT = new StructT('EMRSTRETCHBLT', {
 emr: EMR,
 rclBounds: RECTL,
 xDest: LONG,
 yDest: LONG,
 cxDest: LONG,
 cyDest: LONG,
 dwRop: DWORD,
 xSrc: LONG,
 ySrc: LONG,
 xformSrc: XFORM,
 crBkColorSrc: COLORREF,
 iUsageSrc: DWORD,
 offBmiSrc: DWORD,
 cbBmiSrc: DWORD,
 offBitsSrc: DWORD,
 cbBitsSrc: DWORD,
 cxSrc: LONG,
 cySrc: LONG
});

var EMRMASKBLT = new StructT('EMRMASKBLT', {
 emr: EMR,
 rclBounds: RECTL,
 xDest: LONG,
 yDest: LONG,
 cxDest: LONG,
 cyDest: LONG,
 dwRop: DWORD,
 xSrc: LONG,
 ySrc: LONG,
 xformSrc: XFORM,
 crBkColorSrc: COLORREF,
 iUsageSrc: DWORD,
 offBmiSrc: DWORD,
 cbBmiSrc: DWORD,
 offBitsSrc: DWORD,
 cbBitsSrc: DWORD,
 xMask: LONG,
 yMask: LONG,
 iUsageMask: DWORD,
 offBmiMask: DWORD,
 cbBmiMask: DWORD,
 offBitsMask: DWORD,
 cbBitsMask: DWORD
});

var EMRPLGBLT = new StructT('EMRPLGBLT', {
 emr: EMR,
 rclBounds: RECTL,
 aptlDest: ARRAY(POINTL, 3),
 xSrc: LONG,
 ySrc: LONG,
 cxSrc: LONG,
 cySrc: LONG,
 xformSrc: XFORM,
 crBkColorSrc: COLORREF,
 iUsageSrc: DWORD,
 offBmiSrc: DWORD,
 cbBmiSrc: DWORD,
 offBitsSrc: DWORD,
 cbBitsSrc: DWORD,
 xMask: LONG,
 yMask: LONG,
 iUsageMask: DWORD,
 offBmiMask: DWORD,
 cbBmiMask: DWORD,
 offBitsMask: DWORD,
 cbBitsMask: DWORD
});

var EMRSETDIBITSTODEVICE = new StructT('EMRSETDIBITSTODEVICE', {
 emr: EMR,
 rclBounds: RECTL,
 xDest: LONG,
 yDest: LONG,
 xSrc: LONG,
 ySrc: LONG,
 cxSrc: LONG,
 cySrc: LONG,
 offBmiSrc: DWORD,
 cbBmiSrc: DWORD,
 offBitsSrc: DWORD,
 cbBitsSrc: DWORD,
 iUsageSrc: DWORD,
 iStartScan: DWORD,
 cScans: DWORD
});

var EMRSTRETCHDIBITS = new StructT('EMRSTRETCHDIBITS', {
 emr: EMR,
 rclBounds: RECTL,
 xDest: LONG,
 yDest: LONG,
 xSrc: LONG,
 ySrc: LONG,
 cxSrc: LONG,
 cySrc: LONG,
 offBmiSrc: DWORD,
 cbBmiSrc: DWORD,
 offBitsSrc: DWORD,
 cbBitsSrc: DWORD,
 iUsageSrc: DWORD,
 dwRop: DWORD,
 cxDest: LONG,
 cyDest: LONG
});

var EMREXTCREATEFONTINDIRECTW = new StructT('EMREXTCREATEFONTINDIRECTW', {
 emr: EMR,
 ihFont: DWORD,
 elfw: EXTLOGFONTW
});

var EMRCREATEPALETTE = new StructT('EMRCREATEPALETTE', {
 emr: EMR,
 ihPal: DWORD,
 lgpl: LOGPALETTE
});

var EMRCREATEPEN = new StructT('EMRCREATEPEN', {
 emr: EMR,
 ihPen: DWORD,
 lopn: LOGPEN
});

var EMREXTCREATEPEN = new StructT('EMREXTCREATEPEN', {
 emr: EMR,
 ihPen: DWORD,
 offBmi: DWORD,
 cbBmi: DWORD,
 offBits: DWORD,
 cbBits: DWORD,
 elp: EXTLOGPEN32
});

var EMRCREATEBRUSHINDIRECT = new StructT('EMRCREATEBRUSHINDIRECT', {
 emr: EMR,
 ihBrush: DWORD,
 lb: LOGBRUSH32
});

var EMRCREATEMONOBRUSH = new StructT('EMRCREATEMONOBRUSH', {
 emr: EMR,
 ihBrush: DWORD,
 iUsage: DWORD,
 offBmi: DWORD,
 cbBmi: DWORD,
 offBits: DWORD,
 cbBits: DWORD
});

var EMRCREATEDIBPATTERNBRUSHPT = new StructT('EMRCREATEDIBPATTERNBRUSHPT', {
 emr: EMR,
 ihBrush: DWORD,
 iUsage: DWORD,
 offBmi: DWORD,
 cbBmi: DWORD,
 offBits: DWORD,
 cbBits: DWORD
});

var EMRFORMAT = new StructT('EMRFORMAT', {
 dSignature: DWORD,
 nVersion: DWORD,
 cbData: DWORD,
 offData: DWORD
});

var EMRGLSRECORD = new StructT('EMRGLSRECORD', {
 emr: EMR,
 cbData: DWORD,
 Data: ARRAY(BYTE, 1)
});

var EMRGLSBOUNDEDRECORD = new StructT('EMRGLSBOUNDEDRECORD', {
 emr: EMR,
 rclBounds: RECTL,
 cbData: DWORD,
 Data: ARRAY(BYTE, 1)
});

var EMRPIXELFORMAT = new StructT('EMRPIXELFORMAT', {
 emr: EMR,
 pfd: PIXELFORMATDESCRIPTOR
});

var EMRCREATECOLORSPACE = new StructT('EMRCREATECOLORSPACE', {
 emr: EMR,
 ihCS: DWORD,
 lcs: LOGCOLORSPACEA
});

var EMRDELETECOLORSPACE = new StructT('EMRDELETECOLORSPACE', {
 emr: EMR,
 ihCS: DWORD
});

var EMRDRAWESCAPE = new StructT('EMRDRAWESCAPE', {
 emr: EMR,
 iEscape: INT,
 cbEscData: INT,
 EscData: ARRAY(BYTE, 1)
});

var EMRNAMEDESCAPE = new StructT('EMRNAMEDESCAPE', {
 emr: EMR,
 iEscape: INT,
 cbDriver: INT,
 cbEscData: INT,
 EscData: ARRAY(BYTE, 1)
});

var EMRSETICMPROFILEW = new StructT('EMRSETICMPROFILEW', {
 emr: EMR,
 dwFlags: DWORD,
 cbName: DWORD,
 cbData: DWORD,
 Data: ARRAY(BYTE, 1)
});

var EMRCREATECOLORSPACEW = new StructT('EMRCREATECOLORSPACEW', {
 emr: EMR,
 ihCS: DWORD,
 lcs: LOGCOLORSPACEW,
 dwFlags: DWORD,
 cbData: DWORD,
 Data: ARRAY(BYTE, 1)
});

var EMRCOLORMATCHTOTARGET = new StructT('EMRCOLORMATCHTOTARGET', {
 emr: EMR,
 dwAction: DWORD,
 dwFlags: DWORD,
 cbName: DWORD,
 cbData: DWORD,
 Data: ARRAY(BYTE, 1)
});

var EMRCOLORCORRECTPALETTE = new StructT('EMRCOLORCORRECTPALETTE', {
 emr: EMR,
 ihPalette: DWORD,
 nFirstEntry: DWORD,
 nPalEntries: DWORD,
 nReserved: DWORD
});

var EMRALPHABLEND = new StructT('EMRALPHABLEND', {
 emr: EMR,
 rclBounds: RECTL,
 xDest: LONG,
 yDest: LONG,
 cxDest: LONG,
 cyDest: LONG,
 dwRop: DWORD,
 xSrc: LONG,
 ySrc: LONG,
 xformSrc: XFORM,
 crBkColorSrc: COLORREF,
 iUsageSrc: DWORD,
 offBmiSrc: DWORD,
 cbBmiSrc: DWORD,
 offBitsSrc: DWORD,
 cbBitsSrc: DWORD,
 cxSrc: LONG,
 cySrc: LONG
});

var EMRGRADIENTFILL = new StructT('EMRGRADIENTFILL', {
 emr: EMR,
 rclBounds: RECTL,
 nVer: DWORD,
 nTri: DWORD,
 ulMode: ULONG,
 Ver: ARRAY(TRIVERTEX, 1)
});

var EMRTRANSPARENTBLT = new StructT('EMRTRANSPARENTBLT', {
 emr: EMR,
 rclBounds: RECTL,
 xDest: LONG,
 yDest: LONG,
 cxDest: LONG,
 cyDest: LONG,
 dwRop: DWORD,
 xSrc: LONG,
 ySrc: LONG,
 xformSrc: XFORM,
 crBkColorSrc: COLORREF,
 iUsageSrc: DWORD,
 offBmiSrc: DWORD,
 cbBmiSrc: DWORD,
 offBitsSrc: DWORD,
 cbBitsSrc: DWORD,
 cxSrc: LONG,
 cySrc: LONG
});

var POINTFLOAT = new StructT('POINTFLOAT', {
 x: FLOAT,
 y: FLOAT
});

var GLYPHMETRICSFLOAT = new StructT('GLYPHMETRICSFLOAT', {
 gmfBlackBoxX: FLOAT,
 gmfBlackBoxY: FLOAT,
 gmfptGlyphOrigin: POINTFLOAT,
 gmfCellIncX: FLOAT,
 gmfCellIncY: FLOAT
});

var LAYERPLANEDESCRIPTOR = new StructT('LAYERPLANEDESCRIPTOR', {
 nSize: WORD,
 nVersion: WORD,
 dwFlags: DWORD,
 iPixelType: BYTE,
 cColorBits: BYTE,
 cRedBits: BYTE,
 cRedShift: BYTE,
 cGreenBits: BYTE,
 cGreenShift: BYTE,
 cBlueBits: BYTE,
 cBlueShift: BYTE,
 cAlphaBits: BYTE,
 cAlphaShift: BYTE,
 cAccumBits: BYTE,
 cAccumRedBits: BYTE,
 cAccumGreenBits: BYTE,
 cAccumBlueBits: BYTE,
 cAccumAlphaBits: BYTE,
 cDepthBits: BYTE,
 cStencilBits: BYTE,
 cAuxBuffers: BYTE,
 iLayerPlane: BYTE,
 bReserved: BYTE,
 crTransparent: COLORREF
});

var WGLSWAP = new StructT('WGLSWAP', {
 hdc: HDC,
 uiFlags: UINT
});


  AddFontResourceA: [ _void, { LPCSTR: LPCSTR } ],
  AddFontResourceW: [ _void, { LPCWSTR: LPCWSTR } ],
  AnimatePalette: [ BOOL, { hPal: HPALETTE, iStartIndex: UINT, cEntries: UINT, ppe: PALETTEENTRY.Δ } ],
  Arc: [ BOOL, { hdc: HDC, x1: int, y1: int, x2: int, y2: int, x3: int, y3: int, x4: int, y4: int } ],
  BitBlt: [ BOOL, { hdc: HDC, x: int, y: int, cx: int, cy: int, hdcSrc: HDC, x1: int, y1: int, rop: DWORD } ],
  CancelDC: [ BOOL, { hdc: HDC } ],
  Chord: [ BOOL, { hdc: HDC, x1: int, y1: int, x2: int, y2: int, x3: int, y3: int, x4: int, y4: int } ],
  ChoosePixelFormat: [ _void, { hdc: HDC, ppfd: PIXELFORMATDESCRIPTOR.Δ } ],
  CloseMetaFile: [ HMETAFILE, { hdc: HDC } ],
  CombineRgn: [ _void, { hrgnDst: HRGN, hrgnSrc1: HRGN, hrgnSrc2: HRGN, iMode: int } ],
  CopyMetaFileA: [ HMETAFILE, { LPCSTR: LPCSTR } ],
  CopyMetaFileW: [ HMETAFILE, { LPCWSTR: LPCWSTR } ],
  CreateBitmap: [ HBITMAP, { nWidth: int, nHeight: int, nPlanes: UINT, nBitCount: UINT, lpBits: _void.Δ } ],
  CreateBitmapIndirect: [ HBITMAP, { pbm: BITMAP.Δ } ],
  CreateBrushIndirect: [ HBRUSH, { plbrush: LOGBRUSH.Δ } ],
  CreateCompatibleBitmap: [ HBITMAP, { hdc: HDC, cx: int, cy: int } ],
  CreateDiscardableBitmap: [ HBITMAP, { hdc: HDC, cx: int, cy: int } ],
  CreateCompatibleDC: [ HDC, { hdc: HDC } ],
  CreateDCA: [ HDC, { pwszDriver: LPCSTR, pwszDevice: LPCSTR, pszPort: LPCSTR, pdm: DEVMODEA.Δ } ],
  CreateDCW: [ HDC, { pwszDriver: LPCWSTR, pwszDevice: LPCWSTR, pszPort: LPCWSTR, pdm: DEVMODEW.Δ } ],
  CreateDIBitmap: [ HBITMAP, { hdc: HDC, pbmih: BITMAPINFOHEADER.Δ, flInit: DWORD, pjBits: _void.Δ, pbmi: BITMAPINFO.Δ, iUsage: UINT } ],
  CreateDIBPatternBrush: [ HBRUSH, { h: HGLOBAL, iUsage: UINT } ],
  CreateDIBPatternBrushPt: [ HBRUSH, { lpPackedDIB: _void.Δ, iUsage: UINT } ],
  CreateEllipticRgn: [ HRGN, { x1: int, y1: int, x2: int, y2: int } ],
  CreateEllipticRgnIndirect: [ HRGN, { lprect: RECT.Δ } ],
  CreateFontIndirectA: [ HFONT, { lplf: LOGFONTA.Δ } ],
  CreateFontIndirectW: [ HFONT, { lplf: LOGFONTW.Δ } ],
  CreateFontA: [ HFONT, { cHeight: int, cWidth: int, cEscapement: int, cOrientation: int, cWeight: int, bItalic: DWORD, bUnderline: DWORD, bStrikeOut: DWORD, iCharSet: DWORD, iOutPrecision: DWORD, iClipPrecision: DWORD, iQuality: DWORD, iPitchAndFamily: DWORD, pszFaceName: LPCSTR } ],
  CreateFontW: [ HFONT, { cHeight: int, cWidth: int, cEscapement: int, cOrientation: int, cWeight: int, bItalic: DWORD, bUnderline: DWORD, bStrikeOut: DWORD, iCharSet: DWORD, iOutPrecision: DWORD, iClipPrecision: DWORD, iQuality: DWORD, iPitchAndFamily: DWORD, pszFaceName: LPCWSTR } ],
  CreateHatchBrush: [ HBRUSH, { iHatch: int, color: COLORREF } ],
  CreateICA: [ HDC, { pszDriver: LPCSTR, pszDevice: LPCSTR, pszPort: LPCSTR, pdm: DEVMODEA.Δ } ],
  CreateICW: [ HDC, { pszDriver: LPCWSTR, pszDevice: LPCWSTR, pszPort: LPCWSTR, pdm: DEVMODEW.Δ } ],
  CreateMetaFileA: [ HDC, { pszFile: LPCSTR } ],
  CreateMetaFileW: [ HDC, { pszFile: LPCWSTR } ],
  CreatePalette: [ HPALETTE, { plpal: LOGPALETTE.Δ } ],
  CreatePen: [ HPEN, { iStyle: int, cWidth: int, color: COLORREF } ],
  CreatePenIndirect: [ HPEN, { plpen: LOGPEN.Δ } ],
  CreatePolyPolygonRgn: [ HRGN, { pptl: POINT.Δ, pc: INT.Δ, cPoly: int, iMode: int } ],
  CreatePatternBrush: [ HBRUSH, { hbm: HBITMAP } ],
  CreateRectRgn: [ HRGN, { x1: int, y1: int, x2: int, y2: int } ],
  CreateRectRgnIndirect: [ HRGN, { lprect: RECT.Δ } ],
  CreateRoundRectRgn: [ HRGN, { x1: int, y1: int, x2: int, y2: int, w: int, h: int } ],
  CreateScalableFontResourceA: [ BOOL, { fdwHidden: DWORD, lpszFont: LPCSTR, lpszFile: LPCSTR, lpszPath: LPCSTR } ],
  CreateScalableFontResourceW: [ BOOL, { fdwHidden: DWORD, lpszFont: LPCWSTR, lpszFile: LPCWSTR, lpszPath: LPCWSTR } ],
  CreateSolidBrush: [ HBRUSH, { color: COLORREF } ],
  DeleteDC: [ BOOL, { hdc: HDC } ],
  DeleteMetaFile: [ BOOL, { hmf: HMETAFILE } ],
  DeleteObject: [ BOOL, { ho: HGDIOBJ } ],
  DescribePixelFormat: [ _void, { hdc: HDC, iPixelFormat: int, nBytes: UINT, ppfd: LPPIXELFORMATDESCRIPTOR } ],
  DeviceCapabilitiesA: [ _void, { pDevice: LPCSTR, pPort: LPCSTR, fwCapability: WORD, pOutput: LPSTR, pDevMode: DEVMODEA.Δ } ],
  DeviceCapabilitiesW: [ _void, { pDevice: LPCWSTR, pPort: LPCWSTR, fwCapability: WORD, pOutput: LPWSTR, pDevMode: DEVMODEW.Δ } ],
  DrawEscape: [ _void, { hdc: HDC, iEscape: int, cjIn: int, lpIn: LPCSTR } ],
  Ellipse: [ BOOL, { hdc: HDC, left: int, top: int, right: int, bottom: int } ],
  EnumFontFamiliesExA: [ _void, { hdc: HDC, lpLogfont: LPLOGFONTA, lpProc: FONTENUMPROCA, lParam: LPARAM, dwFlags: DWORD } ],
  EnumFontFamiliesExW: [ _void, { hdc: HDC, lpLogfont: LPLOGFONTW, lpProc: FONTENUMPROCW, lParam: LPARAM, dwFlags: DWORD } ],
  EnumFontFamiliesA: [ _void, { hdc: HDC, lpLogfont: LPCSTR, lpProc: FONTENUMPROCA, lParam: LPARAM } ],
  EnumFontFamiliesW: [ _void, { hdc: HDC, lpLogfont: LPCWSTR, lpProc: FONTENUMPROCW, lParam: LPARAM } ],
  EnumFontsA: [ _void, { hdc: HDC, lpLogfont: LPCSTR, lpProc: FONTENUMPROCA, lParam: LPARAM } ],
  EnumFontsW: [ _void, { hdc: HDC, lpLogfont: LPCWSTR, lpProc: FONTENUMPROCW, lParam: LPARAM } ],
  EnumObjects: [ _void, { hdc: HDC, nType: int, lpFunc: GOBJENUMPROC, lParam: LPARAM } ],
  EqualRgn: [ BOOL, { hrgn1: HRGN, hrgn2: HRGN } ],
  Escape: [ _void, { hdc: HDC, iEscape: int, cjIn: int, pvIn: LPCSTR, pvOut: LPVOID } ],
  ExtEscape: [ _void, { hdc: HDC, iEscape: int, cjInput: int, lpInData: LPCSTR, cjOutput: int, lpOutData: LPSTR } ],
  ExcludeClipRect: [ _void, { hdc: HDC, left: int, top: int, right: int, bottom: int } ],
  ExtCreateRegion: [ HRGN, { lpx: XFORM.Δ, nCount: DWORD, lpData: RGNDATA.Δ } ],
  ExtFloodFill: [ BOOL, { hdc: HDC, x: int, y: int, color: COLORREF, type: UINT } ],
  FillRgn: [ BOOL, { hdc: HDC, hrgn: HRGN, hbr: HBRUSH } ],
  FloodFill: [ BOOL, { hdc: HDC, x: int, y: int, color: COLORREF } ],
  FrameRgn: [ BOOL, { hdc: HDC, hrgn: HRGN, hbr: HBRUSH, w: int, h: int } ],
  GetROP2: [ _void, { hdc: HDC } ],
  GetAspectRatioFilterEx: [ BOOL, { hdc: HDC, lpsize: LPSIZE } ],
  GetBkColor: [ COLORREF, { hdc: HDC } ],
  GetDCBrushColor: [ COLORREF, { hdc: HDC } ],
  GetDCPenColor: [ COLORREF, { hdc: HDC } ],
  GetBkMode: [ _void, { hdc: HDC } ],
  GetBitmapBits: [ LONG, { hbit: HBITMAP, cb: LONG, lpvBits: LPVOID } ],
  GetBitmapDimensionEx: [ BOOL, { hbit: HBITMAP, lpsize: LPSIZE } ],
  GetBoundsRect: [ UINT, { hdc: HDC, lprect: LPRECT, flags: UINT } ],
  GetBrushOrgEx: [ BOOL, { hdc: HDC, lppt: LPPOINT } ],
  GetCharWidthA: [ BOOL, { hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: LPINT } ],
  GetCharWidthW: [ BOOL, { hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: LPINT } ],
  GetCharWidth32A: [ BOOL, { hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: LPINT } ],
  GetCharWidth32W: [ BOOL, { hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: LPINT } ],
  GetCharWidthFloatA: [ BOOL, { hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: PFLOAT } ],
  GetCharWidthFloatW: [ BOOL, { hdc: HDC, iFirst: UINT, iLast: UINT, lpBuffer: PFLOAT } ],
  GetCharABCWidthsA: [ BOOL, { hdc: HDC, wFirst: UINT, wLast: UINT, lpABC: LPABC } ],
  GetCharABCWidthsW: [ BOOL, { hdc: HDC, wFirst: UINT, wLast: UINT, lpABC: LPABC } ],
  GetCharABCWidthsFloatA: [ BOOL, { hdc: HDC, iFirst: UINT, iLast: UINT, lpABC: LPABCFLOAT } ],
  GetCharABCWidthsFloatW: [ BOOL, { hdc: HDC, iFirst: UINT, iLast: UINT, lpABC: LPABCFLOAT } ],
  GetClipBox: [ _void, { hdc: HDC, lprect: LPRECT } ],
  GetClipRgn: [ _void, { hdc: HDC, hrgn: HRGN } ],
  GetMetaRgn: [ _void, { hdc: HDC, hrgn: HRGN } ],
  GetCurrentObject: [ HGDIOBJ, { hdc: HDC, type: UINT } ],
  GetCurrentPositionEx: [ BOOL, { hdc: HDC, lppt: LPPOINT } ],
  GetDeviceCaps: [ _void, { hdc: HDC, index: int } ],
  GetDIBits: [ _void, { hdc: HDC, hbm: HBITMAP, start: UINT, cLines: UINT, lpvBits: LPVOID, lpbmi: LPBITMAPINFO, usage: UINT } ],
  GetFontData: [ DWORD, { hdc: HDC, dwTable: DWORD, dwOffset: DWORD, pvBuffer: PVOID, cjBuffer: DWORD } ],
  GetGlyphOutlineA: [ DWORD, { hdc: HDC, uChar: UINT, fuFormat: UINT, lpgm: LPGLYPHMETRICS, cjBuffer: DWORD, pvBuffer: LPVOID, lpmat2: MAT2.Δ } ],
  GetGlyphOutlineW: [ DWORD, { hdc: HDC, uChar: UINT, fuFormat: UINT, lpgm: LPGLYPHMETRICS, cjBuffer: DWORD, pvBuffer: LPVOID, lpmat2: MAT2.Δ } ],
  GetGraphicsMode: [ _void, { hdc: HDC } ],
  GetMapMode: [ _void, { hdc: HDC } ],
  GetMetaFileBitsEx: [ UINT, { hMF: HMETAFILE, cbBuffer: UINT, lpData: LPVOID } ],
  GetMetaFileA: [ HMETAFILE, { lpName: LPCSTR } ],
  GetMetaFileW: [ HMETAFILE, { lpName: LPCWSTR } ],
  GetNearestColor: [ COLORREF, { hdc: HDC, color: COLORREF } ],
  GetNearestPaletteIndex: [ UINT, { h: HPALETTE, color: COLORREF } ],
  GetObjectType: [ DWORD, { h: HGDIOBJ } ],
  GetOutlineTextMetricsA: [ UINT, { hdc: HDC, cjCopy: UINT, potm: LPOUTLINETEXTMETRICA } ],
  GetOutlineTextMetricsW: [ UINT, { hdc: HDC, cjCopy: UINT, potm: LPOUTLINETEXTMETRICW } ],
  GetPaletteEntries: [ UINT, { hpal: HPALETTE, iStart: UINT, cEntries: UINT, pPalEntries: LPPALETTEENTRY } ],
  GetPixel: [ COLORREF, { hdc: HDC, x: int, y: int } ],
  GetPixelFormat: [ _void, { hdc: HDC } ],
  GetPolyFillMode: [ _void, { hdc: HDC } ],
  GetRasterizerCaps: [ BOOL, { lpraststat: LPRASTERIZER_STATUS, cjBytes: UINT } ],
  GetRandomRgn: [ _void, { hdc: HDC, hrgn: HRGN, i: INT } ],
  GetRegionData: [ DWORD, { hrgn: HRGN, nCount: DWORD, lpRgnData: LPRGNDATA } ],
  GetRgnBox: [ _void, { hrgn: HRGN, lprc: LPRECT } ],
  GetStockObject: [ HGDIOBJ, { i: int } ],
  GetStretchBltMode: [ _void, { hdc: HDC } ],
  GetSystemPaletteEntries: [ UINT, { hdc: HDC, iStart: UINT, cEntries: UINT, pPalEntries: LPPALETTEENTRY } ],
  GetSystemPaletteUse: [ UINT, { hdc: HDC } ],
  GetTextCharacterExtra: [ _void, { hdc: HDC } ],
  GetTextAlign: [ UINT, { hdc: HDC } ],
  GetTextColor: [ COLORREF, { hdc: HDC } ],
  GetTextExtentPointA: [ BOOL, { hdc: HDC, lpString: LPCSTR, c: int, lpsz: LPSIZE } ],
  GetTextExtentPointW: [ BOOL, { hdc: HDC, lpString: LPCWSTR, c: int, lpsz: LPSIZE } ],
  GetTextExtentPoint32A: [ BOOL, { hdc: HDC, lpString: LPCSTR, c: int, psizl: LPSIZE } ],
  GetTextExtentPoint32W: [ BOOL, { hdc: HDC, lpString: LPCWSTR, c: int, psizl: LPSIZE } ],
  GetTextExtentExPointA: [ BOOL, { hdc: HDC, lpszString: LPCSTR, cchString: int, nMaxExtent: int, lpnFit: LPINT, lpnDx: LPINT, lpSize: LPSIZE } ],
  GetTextExtentExPointW: [ BOOL, { hdc: HDC, lpszString: LPCWSTR, cchString: int, nMaxExtent: int, lpnFit: LPINT, lpnDx: LPINT, lpSize: LPSIZE } ],
  GetTextCharset: [ _void, { hdc: HDC } ],
  GetTextCharsetInfo: [ _void, { hdc: HDC, lpSig: LPFONTSIGNATURE, dwFlags: DWORD } ],
  TranslateCharsetInfo: [ BOOL, { lpSrc: DWORD.Δ, lpCs: LPCHARSETINFO, dwFlags: DWORD } ],
  GetFontLanguageInfo: [ DWORD, { hdc: HDC } ],
  GetCharacterPlacementA: [ DWORD, { hdc: HDC, lpString: LPCSTR, nCount: int, nMexExtent: int, lpResults: LPGCP_RESULTSA, dwFlags: DWORD } ],
  GetCharacterPlacementW: [ DWORD, { hdc: HDC, lpString: LPCWSTR, nCount: int, nMexExtent: int, lpResults: LPGCP_RESULTSW, dwFlags: DWORD } ],
  GetFontUnicodeRanges: [ DWORD, { hdc: HDC, lpgs: LPGLYPHSET } ],
  GetGlyphIndicesA: [ DWORD, { hdc: HDC, lpstr: LPCSTR, c: int, pgi: LPWORD, fl: DWORD } ],
  GetGlyphIndicesW: [ DWORD, { hdc: HDC, lpstr: LPCWSTR, c: int, pgi: LPWORD, fl: DWORD } ],
  GetTextExtentPointI: [ BOOL, { hdc: HDC, pgiIn: LPWORD, cgi: int, psize: LPSIZE } ],
  GetTextExtentExPointI: [ BOOL, { hdc: HDC, lpwszString: LPWORD, cwchString: int, nMaxExtent: int, lpnFit: LPINT, lpnDx: LPINT, lpSize: LPSIZE } ],
  GetCharWidthI: [ BOOL, { hdc: HDC, giFirst: UINT, cgi: UINT, pgi: LPWORD, piWidths: LPINT } ],
  GetCharABCWidthsI: [ BOOL, { hdc: HDC, giFirst: UINT, cgi: UINT, pgi: LPWORD, pabc: LPABC } ],
  AddFontResourceExA: [ _void, { name: LPCSTR, fl: DWORD, res: PVOID } ],
  AddFontResourceExW: [ _void, { name: LPCWSTR, fl: DWORD, res: PVOID } ],
  RemoveFontResourceExA: [ BOOL, { name: LPCSTR, fl: DWORD, pdv: PVOID } ],
  RemoveFontResourceExW: [ BOOL, { name: LPCWSTR, fl: DWORD, pdv: PVOID } ],
  AddFontMemResourceEx: [ HANDLE, { pFileView: PVOID, cjSize: DWORD, pvResrved: PVOID, pNumFonts: DWORD.Δ } ],
  RemoveFontMemResourceEx: [ BOOL, { h: HANDLE } ],
  CreateFontIndirectExA: [ HFONT, { ENUMLOGFONTEXDVA.Δ: ENUMLOGFONTEXDVA.Δ } ],
  CreateFontIndirectExW: [ HFONT, { ENUMLOGFONTEXDVW.Δ: ENUMLOGFONTEXDVW.Δ } ],
  GetViewportExtEx: [ BOOL, { hdc: HDC, lpsize: LPSIZE } ],
  GetViewportOrgEx: [ BOOL, { hdc: HDC, lppoint: LPPOINT } ],
  GetWindowExtEx: [ BOOL, { hdc: HDC, lpsize: LPSIZE } ],
  GetWindowOrgEx: [ BOOL, { hdc: HDC, lppoint: LPPOINT } ],
  IntersectClipRect: [ _void, { hdc: HDC, left: int, top: int, right: int, bottom: int } ],
  InvertRgn: [ BOOL, { hdc: HDC, hrgn: HRGN } ],
  LineDDA: [ BOOL, { xStart: int, yStart: int, xEnd: int, yEnd: int, lpProc: LINEDDAPROC, data: LPARAM } ],
  LineTo: [ BOOL, { hdc: HDC, x: int, y: int } ],
  MaskBlt: [ BOOL, { hdcDest: HDC, xDest: int, yDest: int, width: int, height: int, hdcSrc: HDC, xSrc: int, ySrc: int, hbmMask: HBITMAP, xMask: int, yMask: int, rop: DWORD } ],
  PlgBlt: [ BOOL, { hdcDest: HDC, lpPoint: POINT.Δ, hdcSrc: HDC, xSrc: int, ySrc: int, width: int, height: int, hbmMask: HBITMAP, xMask: int, yMask: int } ],
  OffsetClipRgn: [ _void, { hdc: HDC, x: int, y: int } ],
  OffsetRgn: [ _void, { hrgn: HRGN, x: int, y: int } ],
  PatBlt: [ BOOL, { hdc: HDC, x: int, y: int, w: int, h: int, rop: DWORD } ],
  Pie: [ BOOL, { hdc: HDC, left: int, top: int, right: int, bottom: int, xr1: int, yr1: int, xr2: int, yr2: int } ],
  PlayMetaFile: [ BOOL, { hdc: HDC, hmf: HMETAFILE } ],
  PaintRgn: [ BOOL, { hdc: HDC, hrgn: HRGN } ],
  PolyPolygon: [ BOOL, { hdc: HDC, apt: POINT.Δ, asz: INT.Δ, csz: int } ],
  PtInRegion: [ BOOL, { hrgn: HRGN, x: int, y: int } ],
  PtVisible: [ BOOL, { hdc: HDC, x: int, y: int } ],
  RectInRegion: [ BOOL, { hrgn: HRGN, lprect: RECT.Δ } ],
  RectVisible: [ BOOL, { hdc: HDC, lprect: RECT.Δ } ],
  Rectangle: [ BOOL, { hdc: HDC, left: int, top: int, right: int, bottom: int } ],
  RestoreDC: [ BOOL, { hdc: HDC, nSavedDC: int } ],
  ResetDCA: [ HDC, { hdc: HDC, lpdm: DEVMODEA.Δ } ],
  ResetDCW: [ HDC, { hdc: HDC, lpdm: DEVMODEW.Δ } ],
  RealizePalette: [ UINT, { hdc: HDC } ],
  RemoveFontResourceA: [ BOOL, { lpFileName: LPCSTR } ],
  RemoveFontResourceW: [ BOOL, { lpFileName: LPCWSTR } ],
  RoundRect: [ BOOL, { hdc: HDC, left: int, top: int, right: int, bottom: int, width: int, height: int } ],
  ResizePalette: [ BOOL, { hpal: HPALETTE, n: UINT } ],
  SaveDC: [ _void, { hdc: HDC } ],
  SelectClipRgn: [ _void, { hdc: HDC, hrgn: HRGN } ],
  ExtSelectClipRgn: [ _void, { hdc: HDC, hrgn: HRGN, mode: int } ],
  SetMetaRgn: [ _void, { hdc: HDC } ],
  SelectObject: [ HGDIOBJ, { hdc: HDC, h: HGDIOBJ } ],
  SelectPalette: [ HPALETTE, { hdc: HDC, hPal: HPALETTE, bForceBkgd: BOOL } ],
  SetBkColor: [ COLORREF, { hdc: HDC, color: COLORREF } ],
  SetDCBrushColor: [ COLORREF, { hdc: HDC, color: COLORREF } ],
  SetDCPenColor: [ COLORREF, { hdc: HDC, color: COLORREF } ],
  SetBkMode: [ _void, { hdc: HDC, mode: int } ],
  SetBitmapBits: [ LONG, { hbm: HBITMAP, cb: DWORD, pvBits: _void.Δ } ],
  SetBoundsRect: [ UINT, { hdc: HDC, lprect: RECT.Δ, flags: UINT } ],
  SetDIBits: [ _void, { hdc: HDC, hbm: HBITMAP, start: UINT, cLines: UINT, lpBits: _void.Δ, lpbmi: BITMAPINFO.Δ, ColorUse: UINT } ],
  SetDIBitsToDevice: [ _void, { hdc: HDC, xDest: int, yDest: int, w: DWORD, h: DWORD, xSrc: int, ySrc: int, StartScan: UINT, cLines: UINT, lpvBits: _void.Δ, lpbmi: BITMAPINFO.Δ, ColorUse: UINT } ],
  SetMapperFlags: [ DWORD, { hdc: HDC, flags: DWORD } ],
  SetGraphicsMode: [ _void, { hdc: HDC, iMode: int } ],
  SetMapMode: [ _void, { hdc: HDC, iMode: int } ],
  SetLayout: [ DWORD, { hdc: HDC, l: DWORD } ],
  GetLayout: [ DWORD, { hdc: HDC } ],
  SetMetaFileBitsEx: [ HMETAFILE, { cbBuffer: UINT, lpData: BYTE.Δ } ],
  SetPaletteEntries: [ UINT, { hpal: HPALETTE, iStart: UINT, cEntries: UINT, pPalEntries: PALETTEENTRY.Δ } ],
  SetPixel: [ COLORREF, { hdc: HDC, x: int, y: int, color: COLORREF } ],
  SetPixelV: [ BOOL, { hdc: HDC, x: int, y: int, color: COLORREF } ],
  SetPixelFormat: [ BOOL, { hdc: HDC, format: int, ppfd: PIXELFORMATDESCRIPTOR.Δ } ],
  SetPolyFillMode: [ _void, { hdc: HDC, mode: int } ],
  StretchBlt: [ BOOL, { hdcDest: HDC, xDest: int, yDest: int, wDest: int, hDest: int, hdcSrc: HDC, xSrc: int, ySrc: int, wSrc: int, hSrc: int, rop: DWORD } ],
  SetRectRgn: [ BOOL, { hrgn: HRGN, left: int, top: int, right: int, bottom: int } ],
  StretchDIBits: [ _void, { hdc: HDC, xDest: int, yDest: int, DestWidth: int, DestHeight: int, xSrc: int, ySrc: int, SrcWidth: int, SrcHeight: int, lpBits: _void.Δ, lpbmi: BITMAPINFO.Δ, iUsage: UINT, rop: DWORD } ],
  SetROP2: [ _void, { hdc: HDC, rop2: int } ],
  SetStretchBltMode: [ _void, { hdc: HDC, mode: int } ],
  SetSystemPaletteUse: [ UINT, { hdc: HDC, use: UINT } ],
  SetTextCharacterExtra: [ _void, { hdc: HDC, extra: int } ],
  SetTextColor: [ COLORREF, { hdc: HDC, color: COLORREF } ],
  SetTextAlign: [ UINT, { hdc: HDC, align: UINT } ],
  SetTextJustification: [ BOOL, { hdc: HDC, extra: int, count: int } ],
  UpdateColors: [ BOOL, { hdc: HDC } ],
  AlphaBlend: [ BOOL, { hdcDest: HDC, xoriginDest: int, yoriginDest: int, wDest: int, hDest: int, hdcSrc: HDC, xoriginSrc: int, yoriginSrc: int, wSrc: int, hSrc: int, ftn: BLENDFUNCTION } ],
  TransparentBlt: [ BOOL, { hdcDest: HDC, xoriginDest: int, yoriginDest: int, wDest: int, hDest: int, hdcSrc: HDC, xoriginSrc: int, yoriginSrc: int, wSrc: int, hSrc: int, crTransparent: UINT } ],
  GradientFill: [ BOOL, { hdc: HDC, pVertex: PTRIVERTEX, nVertex: ULONG, pMesh: PVOID, nMesh: ULONG, ulMode: ULONG } ],
  GdiAlphaBlend: [ BOOL, { hdcDest: HDC, xoriginDest: int, yoriginDest: int, wDest: int, hDest: int, hdcSrc: HDC, xoriginSrc: int, yoriginSrc: int, wSrc: int, hSrc: int, ftn: BLENDFUNCTION } ],
  GdiTransparentBlt: [ BOOL, { hdcDest: HDC, xoriginDest: int, yoriginDest: int, wDest: int, hDest: int, hdcSrc: HDC, xoriginSrc: int, yoriginSrc: int, wSrc: int, hSrc: int, crTransparent: UINT } ],
  GdiGradientFill: [ BOOL, { hdc: HDC, pVertex: PTRIVERTEX, nVertex: ULONG, pMesh: PVOID, nCount: ULONG, ulMode: ULONG } ],
  PlayMetaFileRecord: [ BOOL, { hdc: HDC, lpHandleTable: LPHANDLETABLE, lpMR: LPMETARECORD, noObjs: UINT } ],
  EnumMetaFile: [ BOOL, { hdc: HDC, hmf: HMETAFILE, proc: MFENUMPROC, param: LPARAM } ],
  CloseEnhMetaFile: [ HENHMETAFILE, { hdc: HDC } ],
  CopyEnhMetaFileA: [ HENHMETAFILE, { hEnh: HENHMETAFILE, lpFileName: LPCSTR } ],
  CopyEnhMetaFileW: [ HENHMETAFILE, { hEnh: HENHMETAFILE, lpFileName: LPCWSTR } ],
  CreateEnhMetaFileA: [ HDC, { hdc: HDC, lpFilename: LPCSTR, lprc: RECT.Δ, lpDesc: LPCSTR } ],
  CreateEnhMetaFileW: [ HDC, { hdc: HDC, lpFilename: LPCWSTR, lprc: RECT.Δ, lpDesc: LPCWSTR } ],
  DeleteEnhMetaFile: [ BOOL, { hmf: HENHMETAFILE } ],
  EnumEnhMetaFile: [ BOOL, { hdc: HDC, hmf: HENHMETAFILE, proc: ENHMFENUMPROC, param: LPVOID, lpRect: RECT.Δ } ],
  GetEnhMetaFileA: [ HENHMETAFILE, { lpName: LPCSTR } ],
  GetEnhMetaFileW: [ HENHMETAFILE, { lpName: LPCWSTR } ],
  GetEnhMetaFileBits: [ UINT, { hEMF: HENHMETAFILE, nSize: UINT, lpData: LPBYTE } ],
  GetEnhMetaFileDescriptionA: [ UINT, { hemf: HENHMETAFILE, cchBuffer: UINT, lpDescription: LPSTR } ],
  GetEnhMetaFileDescriptionW: [ UINT, { hemf: HENHMETAFILE, cchBuffer: UINT, lpDescription: LPWSTR } ],
  GetEnhMetaFileHeader: [ UINT, { hemf: HENHMETAFILE, nSize: UINT, lpEnhMetaHeader: LPENHMETAHEADER } ],
  GetEnhMetaFilePaletteEntries: [ UINT, { hemf: HENHMETAFILE, nNumEntries: UINT, lpPaletteEntries: LPPALETTEENTRY } ],
  GetEnhMetaFilePixelFormat: [ UINT, { hemf: HENHMETAFILE, cbBuffer: UINT, ppfd: PIXELFORMATDESCRIPTOR.Δ } ],
  GetWinMetaFileBits: [ UINT, { hemf: HENHMETAFILE, cbData16: UINT, pData16: LPBYTE, iMapMode: INT, hdcRef: HDC } ],
  PlayEnhMetaFile: [ BOOL, { hdc: HDC, hmf: HENHMETAFILE, lprect: RECT.Δ } ],
  PlayEnhMetaFileRecord: [ BOOL, { hdc: HDC, pht: LPHANDLETABLE, pmr: ENHMETARECORD.Δ, cht: UINT } ],
  SetEnhMetaFileBits: [ HENHMETAFILE, { nSize: UINT, pb: BYTE.Δ } ],
  SetWinMetaFileBits: [ HENHMETAFILE, { nSize: UINT, lpMeta16Data: BYTE.Δ, hdcRef: HDC, lpMFP: METAFILEPICT.Δ } ],
  GdiComment: [ BOOL, { hdc: HDC, nSize: UINT, lpData: BYTE.Δ } ],
  GetTextMetricsA: [ BOOL, { hdc: HDC, lptm: LPTEXTMETRICA } ],
  GetTextMetricsW: [ BOOL, { hdc: HDC, lptm: LPTEXTMETRICW } ],
  AngleArc: [ BOOL, { hdc: HDC, x: int, y: int, r: DWORD, StartAngle: FLOAT, SweepAngle: FLOAT } ],
  PolyPolyline: [ BOOL, { hdc: HDC, apt: POINT.Δ, asz: DWORD.Δ, csz: DWORD } ],
  GetWorldTransform: [ BOOL, { hdc: HDC, lpxf: LPXFORM } ],
  SetWorldTransform: [ BOOL, { hdc: HDC, lpxf: XFORM.Δ } ],
  ModifyWorldTransform: [ BOOL, { hdc: HDC, lpxf: XFORM.Δ, mode: DWORD } ],
  CombineTransform: [ BOOL, { lpxfOut: LPXFORM, lpxf1: XFORM.Δ, lpxf2: XFORM.Δ } ],
  CreateDIBSection: [ HBITMAP, { hdc: HDC, lpbmi: BITMAPINFO.Δ, usage: UINT, ppvBits: _void.Δ.Δ, hSection: HANDLE, offset: DWORD } ],
  GetDIBColorTable: [ UINT, { hdc: HDC, iStart: UINT, cEntries: UINT, prgbq: RGBQUAD.Δ } ],
  SetDIBColorTable: [ UINT, { hdc: HDC, iStart: UINT, cEntries: UINT, prgbq: RGBQUAD.Δ } ],
  SetColorAdjustment: [ BOOL, { hdc: HDC, lpca: COLORADJUSTMENT.Δ } ],
  GetColorAdjustment: [ BOOL, { hdc: HDC, lpca: LPCOLORADJUSTMENT } ],
  CreateHalftonePalette: [ HPALETTE, { hdc: HDC } ],
  StartDocA: [ _void, { hdc: HDC, lpdi: DOCINFOA.Δ } ],
  StartDocW: [ _void, { hdc: HDC, lpdi: DOCINFOW.Δ } ],
  EndDoc: [ _void, { hdc: HDC } ],
  StartPage: [ _void, { hdc: HDC } ],
  EndPage: [ _void, { hdc: HDC } ],
  AbortDoc: [ _void, { hdc: HDC } ],
  SetAbortProc: [ _void, { hdc: HDC, proc: ABORTPROC } ],
  AbortPath: [ BOOL, { hdc: HDC } ],
  ArcTo: [ BOOL, { hdc: HDC, left: int, top: int, right: int, bottom: int, xr1: int, yr1: int, xr2: int, yr2: int } ],
  BeginPath: [ BOOL, { hdc: HDC } ],
  CloseFigure: [ BOOL, { hdc: HDC } ],
  EndPath: [ BOOL, { hdc: HDC } ],
  FillPath: [ BOOL, { hdc: HDC } ],
  FlattenPath: [ BOOL, { hdc: HDC } ],
  GetPath: [ _void, { hdc: HDC, apt: LPPOINT, aj: LPBYTE, cpt: int } ],
  PathToRegion: [ HRGN, { hdc: HDC } ],
  PolyDraw: [ BOOL, { hdc: HDC, apt: POINT.Δ, aj: BYTE.Δ, cpt: int } ],
  SelectClipPath: [ BOOL, { hdc: HDC, mode: int } ],
  SetArcDirection: [ _void, { hdc: HDC, dir: int } ],
  SetMiterLimit: [ BOOL, { hdc: HDC, limit: FLOAT, old: PFLOAT } ],
  StrokeAndFillPath: [ BOOL, { hdc: HDC } ],
  StrokePath: [ BOOL, { hdc: HDC } ],
  WidenPath: [ BOOL, { hdc: HDC } ],
  ExtCreatePen: [ HPEN, { iPenStyle: DWORD, cWidth: DWORD, plbrush: LOGBRUSH.Δ, cStyle: DWORD, pstyle: DWORD.Δ } ],
  GetMiterLimit: [ BOOL, { hdc: HDC, plimit: PFLOAT } ],
  GetArcDirection: [ _void, { hdc: HDC } ],
  GetObjectA: [ _void, { h: HANDLE, c: int, pv: LPVOID } ],
  GetObjectW: [ _void, { h: HANDLE, c: int, pv: LPVOID } ],
  MoveToEx: [ BOOL, { hdc: HDC, x: int, y: int, lppt: LPPOINT } ],
  TextOutA: [ BOOL, { hdc: HDC, x: int, y: int, lpString: LPCSTR, c: int } ],
  TextOutW: [ BOOL, { hdc: HDC, x: int, y: int, lpString: LPCWSTR, c: int } ],
  ExtTextOutA: [ BOOL, { hdc: HDC, x: int, y: int, options: UINT, lprect: RECT.Δ, lpString: LPCSTR, c: UINT, lpDx: INT.Δ } ],
  ExtTextOutW: [ BOOL, { hdc: HDC, x: int, y: int, options: UINT, lprect: RECT.Δ, lpString: LPCWSTR, c: UINT, lpDx: INT.Δ } ],
  PolyTextOutA: [ BOOL, { hdc: HDC, ppt: POLYTEXTA.Δ, nstrings: int } ],
  PolyTextOutW: [ BOOL, { hdc: HDC, ppt: POLYTEXTW.Δ, nstrings: int } ],
  CreatePolygonRgn: [ HRGN, { pptl: POINT.Δ, cPoint: int, iMode: int } ],
  DPtoLP: [ BOOL, { hdc: HDC, lppt: LPPOINT, c: int } ],
  LPtoDP: [ BOOL, { hdc: HDC, lppt: LPPOINT, c: int } ],
  Polygon: [ BOOL, { hdc: HDC, apt: POINT.Δ, cpt: int } ],
  Polyline: [ BOOL, { hdc: HDC, apt: POINT.Δ, cpt: int } ],
  PolyBezier: [ BOOL, { hdc: HDC, apt: POINT.Δ, cpt: DWORD } ],
  PolyBezierTo: [ BOOL, { hdc: HDC, apt: POINT.Δ, cpt: DWORD } ],
  PolylineTo: [ BOOL, { hdc: HDC, apt: POINT.Δ, cpt: DWORD } ],
  SetViewportExtEx: [ BOOL, { hdc: HDC, x: int, y: int, lpsz: LPSIZE } ],
  SetViewportOrgEx: [ BOOL, { hdc: HDC, x: int, y: int, lppt: LPPOINT } ],
  SetWindowExtEx: [ BOOL, { hdc: HDC, x: int, y: int, lpsz: LPSIZE } ],
  SetWindowOrgEx: [ BOOL, { hdc: HDC, x: int, y: int, lppt: LPPOINT } ],
  OffsetViewportOrgEx: [ BOOL, { hdc: HDC, x: int, y: int, lppt: LPPOINT } ],
  OffsetWindowOrgEx: [ BOOL, { hdc: HDC, x: int, y: int, lppt: LPPOINT } ],
  ScaleViewportExtEx: [ BOOL, { hdc: HDC, xn: int, dx: int, yn: int, yd: int, lpsz: LPSIZE } ],
  ScaleWindowExtEx: [ BOOL, { hdc: HDC, xn: int, xd: int, yn: int, yd: int, lpsz: LPSIZE } ],
  SetBitmapDimensionEx: [ BOOL, { hbm: HBITMAP, w: int, h: int, lpsz: LPSIZE } ],
  SetBrushOrgEx: [ BOOL, { hdc: HDC, x: int, y: int, lppt: LPPOINT } ],
  GetTextFaceA: [ _void, { hdc: HDC, c: int, lpName: LPSTR } ],
  GetTextFaceW: [ _void, { hdc: HDC, c: int, lpName: LPWSTR } ],
  GetKerningPairsA: [ DWORD, { hdc: HDC, nPairs: DWORD, lpKernPair: LPKERNINGPAIR } ],
  GetKerningPairsW: [ DWORD, { hdc: HDC, nPairs: DWORD, lpKernPair: LPKERNINGPAIR } ],
  GetDCOrgEx: [ BOOL, { hdc: HDC, lppt: LPPOINT } ],
  FixBrushOrgEx: [ BOOL, { hdc: HDC, x: int, y: int, ptl: LPPOINT } ],
  UnrealizeObject: [ BOOL, { h: HGDIOBJ } ],
  GdiFlush: [ BOOL, {  } ],
  GdiSetBatchLimit: [ DWORD, { dw: DWORD } ],
  GdiGetBatchLimit: [ DWORD, {  } ],
  SetICMMode: [ _void, { hdc: HDC, mode: int } ],
  CheckColorsInGamut: [ BOOL, { hdc: HDC, lpRGBTriple: LPRGBTRIPLE, dlpBuffer: LPVOID, nCount: DWORD } ],
  GetColorSpace: [ HCOLORSPACE, { hdc: HDC } ],
  GetLogColorSpaceA: [ BOOL, { hColorSpace: HCOLORSPACE, lpBuffer: LPLOGCOLORSPACEA, nSize: DWORD } ],
  GetLogColorSpaceW: [ BOOL, { hColorSpace: HCOLORSPACE, lpBuffer: LPLOGCOLORSPACEW, nSize: DWORD } ],
  CreateColorSpaceA: [ HCOLORSPACE, { lplcs: LPLOGCOLORSPACEA } ],
  CreateColorSpaceW: [ HCOLORSPACE, { lplcs: LPLOGCOLORSPACEW } ],
  SetColorSpace: [ HCOLORSPACE, { hdc: HDC, hcs: HCOLORSPACE } ],
  DeleteColorSpace: [ BOOL, { hcs: HCOLORSPACE } ],
  GetICMProfileA: [ BOOL, { hdc: HDC, pBufSize: LPDWORD, pszFilename: LPSTR } ],
  GetICMProfileW: [ BOOL, { hdc: HDC, pBufSize: LPDWORD, pszFilename: LPWSTR } ],
  SetICMProfileA: [ BOOL, { hdc: HDC, lpFileName: LPSTR } ],
  SetICMProfileW: [ BOOL, { hdc: HDC, lpFileName: LPWSTR } ],
  GetDeviceGammaRamp: [ BOOL, { hdc: HDC, lpRamp: LPVOID } ],
  SetDeviceGammaRamp: [ BOOL, { hdc: HDC, lpRamp: LPVOID } ],
  ColorMatchToTarget: [ BOOL, { hdc: HDC, hdcTarget: HDC, action: DWORD } ],
  EnumICMProfilesA: [ _void, { hdc: HDC, proc: ICMENUMPROCA, param: LPARAM } ],
  EnumICMProfilesW: [ _void, { hdc: HDC, proc: ICMENUMPROCW, param: LPARAM } ],
  UpdateICMRegKeyA: [ BOOL, { reserved: DWORD, lpszCMID: LPSTR, lpszFileName: LPSTR, command: UINT } ],
  UpdateICMRegKeyW: [ BOOL, { reserved: DWORD, lpszCMID: LPWSTR, lpszFileName: LPWSTR, command: UINT } ],
  ColorCorrectPalette: [ BOOL, { hdc: HDC, hPal: HPALETTE, deFirst: DWORD, num: DWORD } ],
  wglCopyContext: [ BOOL, { UINT: UINT } ],
  wglCreateContext: [ HGLRC, { HDC: HDC } ],
  wglCreateLayerContext: [ HGLRC, { int: int } ],
  wglDeleteContext: [ BOOL, { HGLRC: HGLRC } ],
  wglGetCurrentContext: [ HGLRC, {  } ],
  wglGetCurrentDC: [ HDC, {  } ],
  wglGetProcAddress: [ PROC, { LPCSTR: LPCSTR } ],
  wglMakeCurrent: [ BOOL, { HGLRC: HGLRC } ],
  wglShareLists: [ BOOL, { HGLRC: HGLRC } ],
  wglUseFontBitmapsA: [ BOOL, { DWORD: DWORD } ],
  wglUseFontBitmapsW: [ BOOL, { DWORD: DWORD } ],
  SwapBuffers: [ BOOL, { HDC: HDC } ],
  wglUseFontOutlinesA: [ BOOL, { LPGLYPHMETRICSFLOAT: LPGLYPHMETRICSFLOAT } ],
  wglUseFontOutlinesW: [ BOOL, { LPGLYPHMETRICSFLOAT: LPGLYPHMETRICSFLOAT } ],
  wglDescribeLayerPlane: [ BOOL, { LPLAYERPLANEDESCRIPTOR: LPLAYERPLANEDESCRIPTOR } ],
  wglSetLayerPaletteEntries: [ _void, { COLORREF.Δ: COLORREF.Δ } ],
  wglGetLayerPaletteEntries: [ _void, { COLORREF.Δ: COLORREF.Δ } ],
  wglRealizeLayerPalette: [ BOOL, { BOOL: BOOL } ],
  wglSwapLayerBuffers: [ BOOL, { UINT: UINT } ],
  wglSwapMultipleBuffers: [ DWORD, { WGLSWAP.Δ: WGLSWAP.Δ } ],