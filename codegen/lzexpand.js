var api = require('windows/api');

var
 CallbackT = api.CallbackT,
 StructT = api.StructT,
 Library = api.Library,
 ArrayT = api.ArrayT,
 EnumT = api.EnumT,
 NULL = api.NULL

var
 _void     = api('void'),
 int8      = api('int8'),
 uint8     = api('uint8'),
 int16     = api('int16'),
 uint16    = api('uint16'),
 int32     = api('int32'),
 uint32    = api('uint32'),
 int64     = api('int64'),
 uint64    = api('uint64'),
 float     = api('float'),
 double    = api('double'),
 CString   = api('CString'),
 WString   = api('WString'),
 bool      = api('bool'),
 byte      = api('byte'),
 char      = api('char'),
 uchar     = api('uchar'),
 short     = api('short'),
 ushort    = api('ushort'),
 int       = api('int'),
 uint      = api('uint'),
 long      = api('long'),
 ulong     = api('ulong'),
 longlong  = api('longlong'),
 ulonglong = api('ulonglong'),
 size_t    = api('size_t'),
 charΔ     = api('charΔ'),
 voidΔ     = api('voidΔ'),
 intΔ      = api('intΔ'),
 NULL      = api('NULL'),
 VoidT     = api('VoidT');

var
 WORD = ushort.typedef('WORD'),
 INT = int.typedef('INT'),
 BYTE = uchar.typedef('BYTE'),
 CHAR = char.typedef('CHAR'),
 LONG = long.typedef('LONG'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPSTR = char.Δ.typedef('LPSTR');


var OFSTRUCT = new StructT('OFSTRUCT', {
 cBytes: BYTE,
 fFixedDisk: BYTE,
 nErrCode: WORD,
 Reserved1: WORD,
 Reserved2: WORD,
 szPathName: new ArrayT(CHAR, 128)
});

var LPOFSTRUCT = OFSTRUCT.Δ;

var lz32 = new Library('lz32', 'LZ', {
  LZStart: [ INT, {  } ],
  LZDone: [ _void, {  } ],
  CopyLZFile: [ LONG, { hfSource: INT, hfDest: INT } ],
  LZCopy: [ LONG, { hfSource: INT, hfDest: INT } ],
  LZInit: [ INT, { hfSource: INT } ],
  GetExpandedNameA: [ INT, { lpszSource: LPSTR, lpszBuffer: LPSTR } ],
  GetExpandedNameW: [ INT, { lpszSource: LPWSTR, lpszBuffer: LPWSTR } ],
  LZOpenFileA: [ INT, { lpFileName: LPSTR, lpReOpenBuf: LPOFSTRUCT, wStyle: WORD } ],
  LZOpenFileW: [ INT, { lpFileName: LPWSTR, lpReOpenBuf: LPOFSTRUCT, wStyle: WORD } ],
  LZSeek: [ LONG, { hFile: INT, lOffset: LONG, iOrigin: INT } ],
  LZRead: [ INT, { hFile: INT, lpBuffer: CHAR.Δ, cbRead: INT } ],
  LZClose: [ _void, { hFile: INT } ],
});

