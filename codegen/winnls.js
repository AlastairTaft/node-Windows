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
 PULONG = ulong.Δ.typedef('PULONG'),
 DWORD = ulong.typedef('DWORD'),
 BOOL = int.typedef('BOOL'),
 BYTE = uchar.typedef('BYTE'),
 LPBOOL = int.Δ.typedef('LPBOOL'),
 LPINT = int.Δ.typedef('LPINT'),
 LPWORD = ushort.Δ.typedef('LPWORD'),
 PDWORD = ulong.Δ.typedef('PDWORD'),
 LPDWORD = ulong.Δ.typedef('LPDWORD'),
 LPVOID = VoidT.Δ.typedef('LPVOID'),
 INT = int.typedef('INT'),
 UINT = uint.typedef('UINT'),
 LONG_PTR = long.typedef('LONG_PTR'),
 CHAR = int8.typedef('CHAR'),
 LONG = long.typedef('LONG'),
 WCHAR = ushort.typedef('WCHAR'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 PWSTR = ushort.Δ.typedef('PWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 PCWSTR = ushort.Δ.typedef('PCWSTR'),
 PZZWSTR = ushort.Δ.typedef('PZZWSTR'),
 PCZZWSTR = ushort.Δ.typedef('PCZZWSTR'),
 PCNZWCH = ushort.Δ.typedef('PCNZWCH'),
 LPSTR = int8.Δ.typedef('LPSTR'),
 LPCSTR = int8.Δ.typedef('LPCSTR'),
 PCNZCH = int8.Δ.typedef('PCNZCH'),
 LCID = ulong.typedef('LCID'),
 LANGID = ushort.typedef('LANGID'),
 ULONGLONG = ulonglong.typedef('ULONGLONG'),
 PULONGLONG = ulonglong.Δ.typedef('PULONGLONG'),
 LPARAM = long.typedef('LPARAM'),
 LGRPID = ulong.typedef('LGRPID'),
 LCTYPE = ulong.typedef('LCTYPE'),
 CALTYPE = ulong.typedef('CALTYPE'),
 CALID = ulong.typedef('CALID'),
 NLS_FUNCTION = ulong.typedef('NLS_FUNCTION'),
 GEOID = long.typedef('GEOID'),
 GEOTYPE = ulong.typedef('GEOTYPE'),
 GEOCLASS = ulong.typedef('GEOCLASS');

var SYSNLS_FUNCTION = new EnumT('SYSNLS_FUNCTION', {
 CompareString: 0x0001
});

var SYSGEOTYPE = new EnumT('SYSGEOTYPE', {
 Nation: 0x0001,
 Latitude: 0x0002,
 Longitude: 0x0003,
 Iso2: 0x0004,
 Iso3: 0x0005,
 Rfc1766: 0x0006,
 Lcid: 0x0007,
 Friendlyname: 0x0008,
 Officialname: 0x0009,
 Timezones: 0x000A,
 Officiallanguages: 0x000B
});

var SYSGEOCLASS = new EnumT('SYSGEOCLASS', {
 Nation: 16,
 Region: 14
});

var _NORM_FORM = new EnumT('_NORM_FORM', {
 NormalizationOther: 0,
 NormalizationC: 0x1,
 NormalizationD: 0x2,
 NormalizationKc: 0x5,
 NormalizationKd: 0x6
});


  LANGUAGEGROUP_ENUMPROCA = new CallbackT('LANGUAGEGROUP_ENUMPROCA', int, { 0: ulong, 1: int8.Δ, 2: int8.Δ, 3: ulong, 4: long }),
  LANGGROUPLOCALE_ENUMPROCA = new CallbackT('LANGGROUPLOCALE_ENUMPROCA', int, { 0: ulong, 1: ulong, 2: int8.Δ, 3: long }),
  UILANGUAGE_ENUMPROCA = new CallbackT('UILANGUAGE_ENUMPROCA', int, { 0: int8.Δ, 1: long }),
  LOCALE_ENUMPROCA = new CallbackT('LOCALE_ENUMPROCA', int, { 0: int8.Δ }),
  CODEPAGE_ENUMPROCA = new CallbackT('CODEPAGE_ENUMPROCA', int, { 0: int8.Δ }),
  DATEFMT_ENUMPROCA = new CallbackT('DATEFMT_ENUMPROCA', int, { 0: int8.Δ }),
  DATEFMT_ENUMPROCEXA = new CallbackT('DATEFMT_ENUMPROCEXA', int, { 0: int8.Δ, 1: ulong }),
  TIMEFMT_ENUMPROCA = new CallbackT('TIMEFMT_ENUMPROCA', int, { 0: int8.Δ }),
  CALINFO_ENUMPROCA = new CallbackT('CALINFO_ENUMPROCA', int, { 0: int8.Δ }),
  CALINFO_ENUMPROCEXA = new CallbackT('CALINFO_ENUMPROCEXA', int, { 0: int8.Δ, 1: ulong }),
  LANGUAGEGROUP_ENUMPROCW = new CallbackT('LANGUAGEGROUP_ENUMPROCW', int, { 0: ulong, 1: ushort.Δ, 2: ushort.Δ, 3: ulong, 4: long }),
  LANGGROUPLOCALE_ENUMPROCW = new CallbackT('LANGGROUPLOCALE_ENUMPROCW', int, { 0: ulong, 1: ulong, 2: ushort.Δ, 3: long }),
  UILANGUAGE_ENUMPROCW = new CallbackT('UILANGUAGE_ENUMPROCW', int, { 0: ushort.Δ, 1: long }),
  LOCALE_ENUMPROCW = new CallbackT('LOCALE_ENUMPROCW', int, { 0: ushort.Δ }),
  CODEPAGE_ENUMPROCW = new CallbackT('CODEPAGE_ENUMPROCW', int, { 0: ushort.Δ }),
  DATEFMT_ENUMPROCW = new CallbackT('DATEFMT_ENUMPROCW', int, { 0: ushort.Δ }),
  DATEFMT_ENUMPROCEXW = new CallbackT('DATEFMT_ENUMPROCEXW', int, { 0: ushort.Δ, 1: ulong }),
  TIMEFMT_ENUMPROCW = new CallbackT('TIMEFMT_ENUMPROCW', int, { 0: ushort.Δ }),
  CALINFO_ENUMPROCW = new CallbackT('CALINFO_ENUMPROCW', int, { 0: ushort.Δ }),
  CALINFO_ENUMPROCEXW = new CallbackT('CALINFO_ENUMPROCEXW', int, { 0: ushort.Δ, 1: ulong }),
  GEO_ENUMPROC = new CallbackT('GEO_ENUMPROC', int, { 0: long }),
  CALINFO_ENUMPROCEXEX = new CallbackT('CALINFO_ENUMPROCEXEX', int, { 0: ushort.Δ, 1: ulong, 2: ushort.Δ, 3: long }),
  DATEFMT_ENUMPROCEXEX = new CallbackT('DATEFMT_ENUMPROCEXEX', int, { 0: ushort.Δ, 1: ulong, 2: long }),
  TIMEFMT_ENUMPROCEX = new CallbackT('TIMEFMT_ENUMPROCEX', int, { 0: ushort.Δ, 1: long }),
  LOCALE_ENUMPROCEX = new CallbackT('LOCALE_ENUMPROCEX', int, { 0: ushort.Δ, 1: ulong, 2: long }),

var _cpinfo = new StructT('_cpinfo', {
 MaxCharSize: UINT,
 DefaultChar: ARRAY(BYTE, MAX_DEFAULTCHAR),
 LeadByte: ARRAY(BYTE, MAX_LEADBYTES)
});

var CPINFOEX = new StructT('CPINFOEX', {
 MaxCharSize: UINT,
 DefaultChar: ARRAY(BYTE, MAX_DEFAULTCHAR),
 LeadByte: ARRAY(BYTE, MAX_LEADBYTES),
 UnicodeDefaultChar: WCHAR,
 CodePage: UINT,
 CodePageName: ARRAY(CHAR, MAX_PATH)
});

var _cpinfoexW = new StructT('_cpinfoexW', {
 MaxCharSize: UINT,
 DefaultChar: ARRAY(BYTE, MAX_DEFAULTCHAR),
 LeadByte: ARRAY(BYTE, MAX_LEADBYTES),
 UnicodeDefaultChar: WCHAR,
 CodePage: UINT,
 CodePageName: ARRAY(WCHAR, MAX_PATH)
});

var NUMBERFMT = new StructT('NUMBERFMT', {
 NumDigits: UINT,
 LeadingZero: UINT,
 Grouping: UINT,
 lpDecimalSep: LPSTR,
 lpThousandSep: LPSTR,
 NegativeOrder: UINT
});

var _numberfmtW = new StructT('_numberfmtW', {
 NumDigits: UINT,
 LeadingZero: UINT,
 Grouping: UINT,
 lpDecimalSep: LPWSTR,
 lpThousandSep: LPWSTR,
 NegativeOrder: UINT
});

var CURRENCYFMT = new StructT('CURRENCYFMT', {
 NumDigits: UINT,
 LeadingZero: UINT,
 Grouping: UINT,
 lpDecimalSep: LPSTR,
 lpThousandSep: LPSTR,
 NegativeOrder: UINT,
 PositiveOrder: UINT,
 lpCurrencySymbol: LPSTR
});

var _currencyfmtW = new StructT('_currencyfmtW', {
 NumDigits: UINT,
 LeadingZero: UINT,
 Grouping: UINT,
 lpDecimalSep: LPWSTR,
 lpThousandSep: LPWSTR,
 NegativeOrder: UINT,
 PositiveOrder: UINT,
 lpCurrencySymbol: LPWSTR
});

var _nlsversioninfo = new StructT('_nlsversioninfo', {
 dwNLSVersionInfoSize: DWORD,
 dwNLSVersion: DWORD,
 dwDefinedVersion: DWORD
});

var _nlsversioninfoex = new StructT('_nlsversioninfoex', {
 dwNLSVersionInfoSize: DWORD,
 dwNLSVersion: DWORD,
 dwDefinedVersion: DWORD,
 dwEffectiveId: DWORD,
 guidCustomVersion: GUID
});

var _FILEMUIINFO = new StructT('_FILEMUIINFO', {
 dwSize: DWORD,
 dwVersion: DWORD,
 dwFileType: DWORD,
 pChecksum: ARRAY(BYTE, 16),
 pServiceChecksum: ARRAY(BYTE, 16),
 dwLanguageNameOffset: DWORD,
 dwTypeIDMainSize: DWORD,
 dwTypeIDMainOffset: DWORD,
 dwTypeNameMainOffset: DWORD,
 dwTypeIDMUISize: DWORD,
 dwTypeIDMUIOffset: DWORD,
 dwTypeNameMUIOffset: DWORD,
 abBuffer: ARRAY(BYTE, 8)
});


  IsValidCodePage: [ int, { CodePage: UINT } ],
  GetACP: [ uint, {  } ],
  GetOEMCP: [ uint, {  } ],
  GetCPInfo: [ int, { CodePage: UINT, lpCPInfo: LPCPINFO } ],
  GetCPInfoExA: [ int, { CodePage: UINT, dwFlags: DWORD, lpCPInfoEx: LPCPINFOEXA } ],
  GetCPInfoExW: [ int, { CodePage: UINT, dwFlags: DWORD, lpCPInfoEx: LPCPINFOEXW } ],
  IsDBCSLeadByte: [ int, { TestChar: BYTE } ],
  IsDBCSLeadByteEx: [ int, { CodePage: UINT, TestChar: BYTE } ],
  MultiByteToWideChar: [ VoidT, { CodePage: UINT, dwFlags: DWORD, lpMultiByteStr: LPCSTR, cbMultiByte: int, lpWideCharStr: LPWSTR, cchWideChar: int } ],
  WideCharToMultiByte: [ VoidT, { CodePage: UINT, dwFlags: DWORD, lpWideCharStr: LPCWSTR, cchWideChar: int, lpMultiByteStr: LPSTR, cbMultiByte: int, lpDefaultChar: LPCSTR, lpUsedDefaultChar: LPBOOL } ],
  CompareStringA: [ VoidT, { Locale: LCID, dwCmpFlags: DWORD, lpString1: PCNZCH, cchCount1: int, lpString2: PCNZCH, cchCount2: int } ],
  CompareStringW: [ VoidT, { Locale: LCID, dwCmpFlags: DWORD, lpString1: PCNZWCH, cchCount1: int, lpString2: PCNZWCH, cchCount2: int } ],
  FindNLSString: [ VoidT, { Locale: LCID, dwFindNLSStringFlags: DWORD, lpStringSource: LPCWSTR, cchSource: int, lpStringValue: LPCWSTR, cchValue: int, pcchFound: LPINT } ],
  FindStringOrdinal: [ VoidT, { dwFindStringOrdinalFlags: DWORD, lpStringSource: LPCWSTR, cchSource: int, lpStringValue: LPCWSTR, cchValue: int, bIgnoreCase: BOOL } ],
  LCMapStringA: [ VoidT, { Locale: LCID, dwMapFlags: DWORD, lpSrcStr: LPCSTR, cchSrc: int, lpDestStr: LPSTR, cchDest: int } ],
  LCMapStringW: [ VoidT, { Locale: LCID, dwMapFlags: DWORD, lpSrcStr: LPCWSTR, cchSrc: int, lpDestStr: LPWSTR, cchDest: int } ],
  GetLocaleInfoA: [ VoidT, { Locale: LCID, LCType: LCTYPE, lpLCData: LPSTR, cchData: int } ],
  GetLocaleInfoW: [ VoidT, { Locale: LCID, LCType: LCTYPE, lpLCData: LPWSTR, cchData: int } ],
  SetLocaleInfoA: [ int, { Locale: LCID, LCType: LCTYPE, lpLCData: LPCSTR } ],
  SetLocaleInfoW: [ int, { Locale: LCID, LCType: LCTYPE, lpLCData: LPCWSTR } ],
  GetCalendarInfoA: [ VoidT, { Locale: LCID, Calendar: CALID, CalType: CALTYPE, lpCalData: LPSTR, cchData: int, lpValue: LPDWORD } ],
  GetCalendarInfoW: [ VoidT, { Locale: LCID, Calendar: CALID, CalType: CALTYPE, lpCalData: LPWSTR, cchData: int, lpValue: LPDWORD } ],
  SetCalendarInfoA: [ int, { Locale: LCID, Calendar: CALID, CalType: CALTYPE, lpCalData: LPCSTR } ],
  SetCalendarInfoW: [ int, { Locale: LCID, Calendar: CALID, CalType: CALTYPE, lpCalData: LPCWSTR } ],
  LCIDToLocaleName: [ VoidT, { Locale: LCID, lpName: LPWSTR, cchName: int, dwFlags: DWORD } ],
  LocaleNameToLCID: [ ulong, { lpName: LPCWSTR, dwFlags: DWORD } ],
  GetTimeFormatA: [ VoidT, { Locale: LCID, dwFlags: DWORD, lpTime: uint.Δ, lpFormat: LPCSTR, lpTimeStr: LPSTR, cchTime: int } ],
  GetTimeFormatW: [ VoidT, { Locale: LCID, dwFlags: DWORD, lpTime: uint.Δ, lpFormat: LPCWSTR, lpTimeStr: LPWSTR, cchTime: int } ],
  GetDurationFormat: [ VoidT, { Locale: LCID, dwFlags: DWORD, lpDuration: uint.Δ, ullDuration: ULONGLONG, lpFormat: LPCWSTR, lpDurationStr: LPWSTR, cchDuration: int } ],
  GetDateFormatA: [ VoidT, { Locale: LCID, dwFlags: DWORD, lpDate: uint.Δ, lpFormat: LPCSTR, lpDateStr: LPSTR, cchDate: int } ],
  GetDateFormatW: [ VoidT, { Locale: LCID, dwFlags: DWORD, lpDate: uint.Δ, lpFormat: LPCWSTR, lpDateStr: LPWSTR, cchDate: int } ],
  GetNumberFormatA: [ VoidT, { Locale: LCID, dwFlags: DWORD, lpValue: LPCSTR, lpFormat: uint.Δ, lpNumberStr: LPSTR, cchNumber: int } ],
  GetNumberFormatW: [ VoidT, { Locale: LCID, dwFlags: DWORD, lpValue: LPCWSTR, lpFormat: uint.Δ, lpNumberStr: LPWSTR, cchNumber: int } ],
  GetCurrencyFormatA: [ VoidT, { Locale: LCID, dwFlags: DWORD, lpValue: LPCSTR, lpFormat: uint.Δ, lpCurrencyStr: LPSTR, cchCurrency: int } ],
  GetCurrencyFormatW: [ VoidT, { Locale: LCID, dwFlags: DWORD, lpValue: LPCWSTR, lpFormat: uint.Δ, lpCurrencyStr: LPWSTR, cchCurrency: int } ],
  EnumCalendarInfoA: [ int, { lpCalInfoEnumProc: CALINFO_ENUMPROCA, Locale: LCID, Calendar: CALID, CalType: CALTYPE } ],
  EnumCalendarInfoW: [ int, { lpCalInfoEnumProc: CALINFO_ENUMPROCW, Locale: LCID, Calendar: CALID, CalType: CALTYPE } ],
  EnumCalendarInfoExA: [ int, { lpCalInfoEnumProcEx: CALINFO_ENUMPROCEXA, Locale: LCID, Calendar: CALID, CalType: CALTYPE } ],
  EnumCalendarInfoExW: [ int, { lpCalInfoEnumProcEx: CALINFO_ENUMPROCEXW, Locale: LCID, Calendar: CALID, CalType: CALTYPE } ],
  EnumTimeFormatsA: [ int, { lpTimeFmtEnumProc: TIMEFMT_ENUMPROCA, Locale: LCID, dwFlags: DWORD } ],
  EnumTimeFormatsW: [ int, { lpTimeFmtEnumProc: TIMEFMT_ENUMPROCW, Locale: LCID, dwFlags: DWORD } ],
  EnumDateFormatsA: [ int, { lpDateFmtEnumProc: DATEFMT_ENUMPROCA, Locale: LCID, dwFlags: DWORD } ],
  EnumDateFormatsW: [ int, { lpDateFmtEnumProc: DATEFMT_ENUMPROCW, Locale: LCID, dwFlags: DWORD } ],
  EnumDateFormatsExA: [ int, { lpDateFmtEnumProcEx: DATEFMT_ENUMPROCEXA, Locale: LCID, dwFlags: DWORD } ],
  EnumDateFormatsExW: [ int, { lpDateFmtEnumProcEx: DATEFMT_ENUMPROCEXW, Locale: LCID, dwFlags: DWORD } ],
  IsValidLanguageGroup: [ int, { LanguageGroup: LGRPID, dwFlags: DWORD } ],
  GetNLSVersion: [ int, { Function: NLS_FUNCTION, Locale: LCID, lpVersionInformation: LPNLSVERSIONINFO } ],
  IsNLSDefinedString: [ int, { Function: NLS_FUNCTION, dwFlags: DWORD, lpVersionInformation: LPNLSVERSIONINFO, lpString: LPCWSTR, cchStr: INT } ],
  IsValidLocale: [ int, { Locale: LCID, dwFlags: DWORD } ],
  GetGeoInfoA: [ VoidT, { Location: GEOID, GeoType: GEOTYPE, lpGeoData: LPSTR, cchData: int, LangId: LANGID } ],
  GetGeoInfoW: [ VoidT, { Location: GEOID, GeoType: GEOTYPE, lpGeoData: LPWSTR, cchData: int, LangId: LANGID } ],
  EnumSystemGeoID: [ int, { GeoClass: GEOCLASS, ParentGeoId: GEOID, lpGeoEnumProc: GEO_ENUMPROC } ],
  GetUserGeoID: [ long, { GeoClass: GEOCLASS } ],
  SetUserGeoID: [ int, { GeoId: GEOID } ],
  ConvertDefaultLocale: [ ulong, { Locale: LCID } ],
  GetThreadLocale: [ ulong, {  } ],
  SetThreadLocale: [ int, { Locale: LCID } ],
  GetSystemDefaultUILanguage: [ ushort, {  } ],
  GetUserDefaultUILanguage: [ ushort, {  } ],
  GetSystemDefaultLangID: [ ushort, {  } ],
  GetUserDefaultLangID: [ ushort, {  } ],
  GetSystemDefaultLCID: [ ulong, {  } ],
  GetUserDefaultLCID: [ ulong, {  } ],
  SetThreadUILanguage: [ ushort, { LangId: LANGID } ],
  GetThreadUILanguage: [ ushort, {  } ],
  GetProcessPreferredUILanguages: [ int, { dwFlags: DWORD, pulNumLanguages: PULONG, pwszLanguagesBuffer: PZZWSTR, pcchLanguagesBuffer: PULONG } ],
  SetProcessPreferredUILanguages: [ int, { dwFlags: DWORD, pwszLanguagesBuffer: PCZZWSTR, pulNumLanguages: PULONG } ],
  GetUserPreferredUILanguages: [ int, { dwFlags: DWORD, pulNumLanguages: PULONG, pwszLanguagesBuffer: PZZWSTR, pcchLanguagesBuffer: PULONG } ],
  GetSystemPreferredUILanguages: [ int, { dwFlags: DWORD, pulNumLanguages: PULONG, pwszLanguagesBuffer: PZZWSTR, pcchLanguagesBuffer: PULONG } ],
  GetThreadPreferredUILanguages: [ int, { dwFlags: DWORD, pulNumLanguages: PULONG, pwszLanguagesBuffer: PZZWSTR, pcchLanguagesBuffer: PULONG } ],
  SetThreadPreferredUILanguages: [ int, { dwFlags: DWORD, pwszLanguagesBuffer: PCZZWSTR, pulNumLanguages: PULONG } ],
  GetFileMUIInfo: [ int, { dwFlags: DWORD, pcwszFilePath: PCWSTR, pFileMUIInfo: PFILEMUIINFO, pcbFileMUIInfo: ulong.Δ } ],
  GetFileMUIPath: [ int, { dwFlags: DWORD, pcwszFilePath: PCWSTR, pwszLanguage: PWSTR, pcchLanguage: PULONG, pwszFileMUIPath: PWSTR, pcchFileMUIPath: PULONG, pululEnumerator: PULONGLONG } ],
  GetUILanguageInfo: [ int, { dwFlags: DWORD, pwmszLanguage: PCZZWSTR, pwszFallbackLanguages: PZZWSTR, pcchFallbackLanguages: PDWORD, pAttributes: PDWORD } ],
  NotifyUILanguageChange: [ int, { dwFlags: DWORD, pcwstrNewLanguage: PCWSTR, pcwstrPreviousLanguage: PCWSTR, dwReserved: DWORD, pdwStatusRtrn: PDWORD } ],
  GetStringTypeExA: [ int, { Locale: LCID, dwInfoType: DWORD, lpSrcStr: LPCSTR, cchSrc: int, lpCharType: LPWORD } ],
  GetStringTypeExW: [ int, { Locale: LCID, dwInfoType: DWORD, lpSrcStr: LPCWSTR, cchSrc: int, lpCharType: LPWORD } ],
  GetStringTypeA: [ int, { Locale: LCID, dwInfoType: DWORD, lpSrcStr: LPCSTR, cchSrc: int, lpCharType: LPWORD } ],
  GetStringTypeW: [ int, { dwInfoType: DWORD, lpSrcStr: LPCWSTR, cchSrc: int, lpCharType: LPWORD } ],
  FoldStringA: [ VoidT, { dwMapFlags: DWORD, lpSrcStr: LPCSTR, cchSrc: int, lpDestStr: LPSTR, cchDest: int } ],
  FoldStringW: [ VoidT, { dwMapFlags: DWORD, lpSrcStr: LPCWSTR, cchSrc: int, lpDestStr: LPWSTR, cchDest: int } ],
  EnumSystemLanguageGroupsA: [ int, { lpLanguageGroupEnumProc: LANGUAGEGROUP_ENUMPROCA, dwFlags: DWORD, lParam: LONG_PTR } ],
  EnumSystemLanguageGroupsW: [ int, { lpLanguageGroupEnumProc: LANGUAGEGROUP_ENUMPROCW, dwFlags: DWORD, lParam: LONG_PTR } ],
  EnumLanguageGroupLocalesA: [ int, { lpLangGroupLocaleEnumProc: LANGGROUPLOCALE_ENUMPROCA, LanguageGroup: LGRPID, dwFlags: DWORD, lParam: LONG_PTR } ],
  EnumLanguageGroupLocalesW: [ int, { lpLangGroupLocaleEnumProc: LANGGROUPLOCALE_ENUMPROCW, LanguageGroup: LGRPID, dwFlags: DWORD, lParam: LONG_PTR } ],
  EnumUILanguagesA: [ int, { lpUILanguageEnumProc: UILANGUAGE_ENUMPROCA, dwFlags: DWORD, lParam: LONG_PTR } ],
  EnumUILanguagesW: [ int, { lpUILanguageEnumProc: UILANGUAGE_ENUMPROCW, dwFlags: DWORD, lParam: LONG_PTR } ],
  EnumSystemLocalesA: [ int, { lpLocaleEnumProc: LOCALE_ENUMPROCA, dwFlags: DWORD } ],
  EnumSystemLocalesW: [ int, { lpLocaleEnumProc: LOCALE_ENUMPROCW, dwFlags: DWORD } ],
  EnumSystemCodePagesA: [ int, { lpCodePageEnumProc: CODEPAGE_ENUMPROCA, dwFlags: DWORD } ],
  EnumSystemCodePagesW: [ int, { lpCodePageEnumProc: CODEPAGE_ENUMPROCW, dwFlags: DWORD } ],
  NormalizeString: [ VoidT, { NormForm: NORM_FORM, lpSrcString: LPCWSTR, cwSrcLength: int, lpDstString: LPWSTR, cwDstLength: int } ],
  IsNormalizedString: [ int, { NormForm: NORM_FORM, lpString: LPCWSTR, cwLength: int } ],
  IdnToAscii: [ VoidT, { dwFlags: DWORD, lpUnicodeCharStr: LPCWSTR, cchUnicodeChar: int, lpASCIICharStr: LPWSTR, cchASCIIChar: int } ],
  IdnToNameprepUnicode: [ VoidT, { dwFlags: DWORD, lpUnicodeCharStr: LPCWSTR, cchUnicodeChar: int, lpNameprepCharStr: LPWSTR, cchNameprepChar: int } ],
  IdnToUnicode: [ VoidT, { dwFlags: DWORD, lpASCIICharStr: LPCWSTR, cchASCIIChar: int, lpUnicodeCharStr: LPWSTR, cchUnicodeChar: int } ],
  VerifyScripts: [ int, { dwFlags: DWORD, lpLocaleScripts: LPCWSTR, cchLocaleScripts: int, lpTestScripts: LPCWSTR, cchTestScripts: int } ],
  GetStringScripts: [ VoidT, { dwFlags: DWORD, lpString: LPCWSTR, cchString: int, lpScripts: LPWSTR, cchScripts: int } ],
  GetLocaleInfoEx: [ VoidT, { lpLocaleName: LPCWSTR, LCType: LCTYPE, lpLCData: LPWSTR, cchData: int } ],
  GetCalendarInfoEx: [ VoidT, { lpLocaleName: LPCWSTR, Calendar: CALID, lpReserved: LPCWSTR, CalType: CALTYPE, lpCalData: LPWSTR, cchData: int, lpValue: LPDWORD } ],
  GetTimeFormatEx: [ VoidT, { lpLocaleName: LPCWSTR, dwFlags: DWORD, lpTime: uint.Δ, lpFormat: LPCWSTR, lpTimeStr: LPWSTR, cchTime: int } ],
  GetDateFormatEx: [ VoidT, { lpLocaleName: LPCWSTR, dwFlags: DWORD, lpDate: uint.Δ, lpFormat: LPCWSTR, lpDateStr: LPWSTR, cchDate: int, lpCalendar: LPCWSTR } ],
  GetDurationFormatEx: [ VoidT, { lpLocaleName: LPCWSTR, dwFlags: DWORD, lpDuration: uint.Δ, ullDuration: ULONGLONG, lpFormat: LPCWSTR, lpDurationStr: LPWSTR, cchDuration: int } ],
  GetNumberFormatEx: [ VoidT, { lpLocaleName: LPCWSTR, dwFlags: DWORD, lpValue: LPCWSTR, lpFormat: uint.Δ, lpNumberStr: LPWSTR, cchNumber: int } ],
  GetCurrencyFormatEx: [ VoidT, { lpLocaleName: LPCWSTR, dwFlags: DWORD, lpValue: LPCWSTR, lpFormat: uint.Δ, lpCurrencyStr: LPWSTR, cchCurrency: int } ],
  GetUserDefaultLocaleName: [ VoidT, { lpLocaleName: LPWSTR, cchLocaleName: int } ],
  GetSystemDefaultLocaleName: [ VoidT, { lpLocaleName: LPWSTR, cchLocaleName: int } ],
  GetNLSVersionEx: [ int, { function: NLS_FUNCTION, lpLocaleName: LPCWSTR, lpVersionInformation: LPNLSVERSIONINFOEX } ],
  CompareStringEx: [ VoidT, { lpLocaleName: LPCWSTR, dwCmpFlags: DWORD, lpString1: LPCWSTR, cchCount1: int, lpString2: LPCWSTR, cchCount2: int, lpVersionInformation: LPNLSVERSIONINFO, lpReserved: LPVOID, lParam: LPARAM } ],
  FindNLSStringEx: [ VoidT, { lpLocaleName: LPCWSTR, dwFindNLSStringFlags: DWORD, lpStringSource: LPCWSTR, cchSource: int, lpStringValue: LPCWSTR, cchValue: int, pcchFound: LPINT, lpVersionInformation: LPNLSVERSIONINFO, lpReserved: LPVOID, lParam: LPARAM } ],
  LCMapStringEx: [ VoidT, { lpLocaleName: LPCWSTR, dwMapFlags: DWORD, lpSrcStr: LPCWSTR, cchSrc: int, lpDestStr: LPWSTR, cchDest: int, lpVersionInformation: LPNLSVERSIONINFO, lpReserved: LPVOID, lParam: LPARAM } ],
  CompareStringOrdinal: [ VoidT, { lpString1: LPCWSTR, cchCount1: int, lpString2: LPCWSTR, cchCount2: int, bIgnoreCase: BOOL } ],
  IsValidLocaleName: [ int, { lpLocaleName: LPCWSTR } ],
  EnumCalendarInfoExEx: [ int, { pCalInfoEnumProcExEx: CALINFO_ENUMPROCEXEX, lpLocaleName: LPCWSTR, Calendar: CALID, lpReserved: LPCWSTR, CalType: CALTYPE, lParam: LPARAM } ],
  EnumDateFormatsExEx: [ int, { lpDateFmtEnumProcExEx: DATEFMT_ENUMPROCEXEX, lpLocaleName: LPCWSTR, dwFlags: DWORD, lParam: LPARAM } ],
  EnumTimeFormatsEx: [ int, { lpTimeFmtEnumProcEx: TIMEFMT_ENUMPROCEX, lpLocaleName: LPCWSTR, dwFlags: DWORD, lParam: LPARAM } ],
  EnumSystemLocalesEx: [ int, { lpLocaleEnumProcEx: LOCALE_ENUMPROCEX, dwFlags: DWORD, lParam: LPARAM, lpReserved: LPVOID } ],
  ResolveLocaleName: [ VoidT, { lpNameToResolve: LPCWSTR, lpLocaleName: LPWSTR, cchLocaleName: int } ],