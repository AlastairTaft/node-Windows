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
 WORD = ushort.typedef('WORD'),
 LPWORD = ushort.Δ.typedef('LPWORD'),
 LPDWORD = ulong.Δ.typedef('LPDWORD'),
 LPVOID = _void.Δ.typedef('LPVOID'),
 UINT = uint.typedef('UINT'),
 CHAR = char.typedef('CHAR'),
 SHORT = short.typedef('SHORT'),
 WCHAR = ushort.typedef('WCHAR'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 LPSTR = char.Δ.typedef('LPSTR'),
 LPCSTR = char.Δ.typedef('LPCSTR'),
 HANDLE = _void.Δ.typedef('HANDLE'),
 COLORREF = ulong.typedef('COLORREF');



  PHANDLER_ROUTINE = new CallbackT('PHANDLER_ROUTINE', int, [ulong]),

var COORD = new StructT('COORD', {
 X: SHORT,
 Y: SHORT
});

var SMALL_RECT = new StructT('SMALL_RECT', {
 Left: SHORT,
 Top: SHORT,
 Right: SHORT,
 Bottom: SHORT
});

var KEY_EVENT_RECORD = new StructT('KEY_EVENT_RECORD', {
 bKeyDown: BOOL,
 wRepeatCount: WORD,
 wVirtualKeyCode: WORD,
 wVirtualScanCode: WORD,
 uChar: c:wincon.h@860@S@_KEY_EVENT_RECORD@Ua,
 dwControlKeyState: DWORD
});

var MOUSE_EVENT_RECORD = new StructT('MOUSE_EVENT_RECORD', {
 dwMousePosition: COORD,
 dwButtonState: DWORD,
 dwControlKeyState: DWORD,
 dwEventFlags: DWORD
});

var WINDOW_BUFFER_SIZE_RECORD = new StructT('WINDOW_BUFFER_SIZE_RECORD', {
 dwSize: COORD
});

var MENU_EVENT_RECORD = new StructT('MENU_EVENT_RECORD', {
 dwCommandId: UINT
});

var FOCUS_EVENT_RECORD = new StructT('FOCUS_EVENT_RECORD', {
 bSetFocus: BOOL
});

var INPUT_RECORD = new StructT('INPUT_RECORD', {
 EventType: WORD,
 Event: c:wincon.h@3273@S@_INPUT_RECORD@Ua
});

var CHAR_INFO = new StructT('CHAR_INFO', {
 Char: c:wincon.h@3958@S@_CHAR_INFO@Ua,
 Attributes: WORD
});

var CONSOLE_SCREEN_BUFFER_INFO = new StructT('CONSOLE_SCREEN_BUFFER_INFO', {
 dwSize: COORD,
 dwCursorPosition: COORD,
 wAttributes: WORD,
 srWindow: SMALL_RECT,
 dwMaximumWindowSize: COORD
});

var CONSOLE_SCREEN_BUFFER_INFOEX = new StructT('CONSOLE_SCREEN_BUFFER_INFOEX', {
 cbSize: ULONG,
 dwSize: COORD,
 dwCursorPosition: COORD,
 wAttributes: WORD,
 srWindow: SMALL_RECT,
 dwMaximumWindowSize: COORD,
 wPopupAttributes: WORD,
 bFullscreenSupported: BOOL,
 ColorTable: ARRAY(COLORREF, 16)
});

var CONSOLE_CURSOR_INFO = new StructT('CONSOLE_CURSOR_INFO', {
 dwSize: DWORD,
 bVisible: BOOL
});

var CONSOLE_FONT_INFO = new StructT('CONSOLE_FONT_INFO', {
 nFont: DWORD,
 dwFontSize: COORD
});

var CONSOLE_FONT_INFOEX = new StructT('CONSOLE_FONT_INFOEX', {
 cbSize: ULONG,
 nFont: DWORD,
 dwFontSize: COORD,
 FontFamily: UINT,
 FontWeight: UINT,
 FaceName: ARRAY(WCHAR, LF_FACESIZE)
});

var CONSOLE_HISTORY_INFO = new StructT('CONSOLE_HISTORY_INFO', {
 cbSize: UINT,
 HistoryBufferSize: UINT,
 NumberOfHistoryBuffers: UINT,
 dwFlags: DWORD
});

var CONSOLE_SELECTION_INFO = new StructT('CONSOLE_SELECTION_INFO', {
 dwFlags: DWORD,
 dwSelectionAnchor: COORD,
 srSelection: SMALL_RECT
});

var CONSOLE_READCONSOLE_CONTROL = new StructT('CONSOLE_READCONSOLE_CONTROL', {
 nLength: ULONG,
 nInitialChars: ULONG,
 dwCtrlWakeupMask: ULONG,
 dwControlKeyState: ULONG
});


  PeekConsoleInputA: [ BOOL, { hConsoleInput: HANDLE, lpBuffer: PINPUT_RECORD, nLength: DWORD, lpNumberOfEventsRead: LPDWORD } ],
  PeekConsoleInputW: [ BOOL, { hConsoleInput: HANDLE, lpBuffer: PINPUT_RECORD, nLength: DWORD, lpNumberOfEventsRead: LPDWORD } ],
  ReadConsoleInputA: [ BOOL, { hConsoleInput: HANDLE, lpBuffer: PINPUT_RECORD, nLength: DWORD, lpNumberOfEventsRead: LPDWORD } ],
  ReadConsoleInputW: [ BOOL, { hConsoleInput: HANDLE, lpBuffer: PINPUT_RECORD, nLength: DWORD, lpNumberOfEventsRead: LPDWORD } ],
  WriteConsoleInputA: [ BOOL, { hConsoleInput: HANDLE, lpBuffer: INPUT_RECORD.Δ, nLength: DWORD, lpNumberOfEventsWritten: LPDWORD } ],
  WriteConsoleInputW: [ BOOL, { hConsoleInput: HANDLE, lpBuffer: INPUT_RECORD.Δ, nLength: DWORD, lpNumberOfEventsWritten: LPDWORD } ],
  ReadConsoleOutputA: [ BOOL, { hConsoleOutput: HANDLE, lpBuffer: PCHAR_INFO, dwBufferSize: COORD, dwBufferCoord: COORD, lpReadRegion: PSMALL_RECT } ],
  ReadConsoleOutputW: [ BOOL, { hConsoleOutput: HANDLE, lpBuffer: PCHAR_INFO, dwBufferSize: COORD, dwBufferCoord: COORD, lpReadRegion: PSMALL_RECT } ],
  WriteConsoleOutputA: [ BOOL, { hConsoleOutput: HANDLE, lpBuffer: CHAR_INFO.Δ, dwBufferSize: COORD, dwBufferCoord: COORD, lpWriteRegion: PSMALL_RECT } ],
  WriteConsoleOutputW: [ BOOL, { hConsoleOutput: HANDLE, lpBuffer: CHAR_INFO.Δ, dwBufferSize: COORD, dwBufferCoord: COORD, lpWriteRegion: PSMALL_RECT } ],
  ReadConsoleOutputCharacterA: [ BOOL, { hConsoleOutput: HANDLE, lpCharacter: LPSTR, nLength: DWORD, dwReadCoord: COORD, lpNumberOfCharsRead: LPDWORD } ],
  ReadConsoleOutputCharacterW: [ BOOL, { hConsoleOutput: HANDLE, lpCharacter: LPWSTR, nLength: DWORD, dwReadCoord: COORD, lpNumberOfCharsRead: LPDWORD } ],
  ReadConsoleOutputAttribute: [ BOOL, { hConsoleOutput: HANDLE, lpAttribute: LPWORD, nLength: DWORD, dwReadCoord: COORD, lpNumberOfAttrsRead: LPDWORD } ],
  WriteConsoleOutputCharacterA: [ BOOL, { hConsoleOutput: HANDLE, lpCharacter: LPCSTR, nLength: DWORD, dwWriteCoord: COORD, lpNumberOfCharsWritten: LPDWORD } ],
  WriteConsoleOutputCharacterW: [ BOOL, { hConsoleOutput: HANDLE, lpCharacter: LPCWSTR, nLength: DWORD, dwWriteCoord: COORD, lpNumberOfCharsWritten: LPDWORD } ],
  WriteConsoleOutputAttribute: [ BOOL, { hConsoleOutput: HANDLE, lpAttribute: WORD.Δ, nLength: DWORD, dwWriteCoord: COORD, lpNumberOfAttrsWritten: LPDWORD } ],
  FillConsoleOutputCharacterA: [ BOOL, { hConsoleOutput: HANDLE, cCharacter: CHAR, nLength: DWORD, dwWriteCoord: COORD, lpNumberOfCharsWritten: LPDWORD } ],
  FillConsoleOutputCharacterW: [ BOOL, { hConsoleOutput: HANDLE, cCharacter: WCHAR, nLength: DWORD, dwWriteCoord: COORD, lpNumberOfCharsWritten: LPDWORD } ],
  FillConsoleOutputAttribute: [ BOOL, { hConsoleOutput: HANDLE, wAttribute: WORD, nLength: DWORD, dwWriteCoord: COORD, lpNumberOfAttrsWritten: LPDWORD } ],
  GetConsoleMode: [ BOOL, { hConsoleHandle: HANDLE, lpMode: LPDWORD } ],
  GetNumberOfConsoleInputEvents: [ BOOL, { hConsoleInput: HANDLE, lpNumberOfEvents: LPDWORD } ],
  GetConsoleScreenBufferInfo: [ BOOL, { hConsoleOutput: HANDLE, lpConsoleScreenBufferInfo: PCONSOLE_SCREEN_BUFFER_INFO } ],
  GetConsoleScreenBufferInfoEx: [ BOOL, { hConsoleOutput: HANDLE, lpConsoleScreenBufferInfoEx: PCONSOLE_SCREEN_BUFFER_INFOEX } ],
  SetConsoleScreenBufferInfoEx: [ BOOL, { hConsoleOutput: HANDLE, lpConsoleScreenBufferInfoEx: PCONSOLE_SCREEN_BUFFER_INFOEX } ],
  GetLargestConsoleWindowSize: [ COORD, { hConsoleOutput: HANDLE } ],
  GetConsoleCursorInfo: [ BOOL, { hConsoleOutput: HANDLE, lpConsoleCursorInfo: PCONSOLE_CURSOR_INFO } ],
  GetCurrentConsoleFont: [ BOOL, { hConsoleOutput: HANDLE, bMaximumWindow: BOOL, lpConsoleCurrentFont: PCONSOLE_FONT_INFO } ],
  GetCurrentConsoleFontEx: [ BOOL, { hConsoleOutput: HANDLE, bMaximumWindow: BOOL, lpConsoleCurrentFontEx: PCONSOLE_FONT_INFOEX } ],
  SetCurrentConsoleFontEx: [ BOOL, { hConsoleOutput: HANDLE, bMaximumWindow: BOOL, lpConsoleCurrentFontEx: PCONSOLE_FONT_INFOEX } ],
  GetConsoleHistoryInfo: [ BOOL, { lpConsoleHistoryInfo: PCONSOLE_HISTORY_INFO } ],
  SetConsoleHistoryInfo: [ BOOL, { lpConsoleHistoryInfo: PCONSOLE_HISTORY_INFO } ],
  GetConsoleFontSize: [ COORD, { hConsoleOutput: HANDLE, nFont: DWORD } ],
  GetConsoleSelectionInfo: [ BOOL, { lpConsoleSelectionInfo: PCONSOLE_SELECTION_INFO } ],
  GetNumberOfConsoleMouseButtons: [ BOOL, { lpNumberOfMouseButtons: LPDWORD } ],
  SetConsoleMode: [ BOOL, { hConsoleHandle: HANDLE, dwMode: DWORD } ],
  SetConsoleActiveScreenBuffer: [ BOOL, { hConsoleOutput: HANDLE } ],
  FlushConsoleInputBuffer: [ BOOL, { hConsoleInput: HANDLE } ],
  SetConsoleScreenBufferSize: [ BOOL, { hConsoleOutput: HANDLE, dwSize: COORD } ],
  SetConsoleCursorPosition: [ BOOL, { hConsoleOutput: HANDLE, dwCursorPosition: COORD } ],
  SetConsoleCursorInfo: [ BOOL, { hConsoleOutput: HANDLE, lpConsoleCursorInfo: CONSOLE_CURSOR_INFO.Δ } ],
  ScrollConsoleScreenBufferA: [ BOOL, { hConsoleOutput: HANDLE, lpScrollRectangle: SMALL_RECT.Δ, lpClipRectangle: SMALL_RECT.Δ, dwDestinationOrigin: COORD, lpFill: CHAR_INFO.Δ } ],
  ScrollConsoleScreenBufferW: [ BOOL, { hConsoleOutput: HANDLE, lpScrollRectangle: SMALL_RECT.Δ, lpClipRectangle: SMALL_RECT.Δ, dwDestinationOrigin: COORD, lpFill: CHAR_INFO.Δ } ],
  SetConsoleWindowInfo: [ BOOL, { hConsoleOutput: HANDLE, bAbsolute: BOOL, lpConsoleWindow: SMALL_RECT.Δ } ],
  SetConsoleTextAttribute: [ BOOL, { hConsoleOutput: HANDLE, wAttributes: WORD } ],
  SetConsoleCtrlHandler: [ BOOL, { HandlerRoutine: PHANDLER_ROUTINE, Add: BOOL } ],
  GenerateConsoleCtrlEvent: [ BOOL, { dwCtrlEvent: DWORD, dwProcessGroupId: DWORD } ],
  AllocConsole: [ BOOL, {  } ],
  FreeConsole: [ BOOL, {  } ],
  AttachConsole: [ BOOL, { dwProcessId: DWORD } ],
  GetConsoleTitleA: [ DWORD, { lpConsoleTitle: LPSTR, nSize: DWORD } ],
  GetConsoleTitleW: [ DWORD, { lpConsoleTitle: LPWSTR, nSize: DWORD } ],
  GetConsoleOriginalTitleA: [ DWORD, { lpConsoleTitle: LPSTR, nSize: DWORD } ],
  GetConsoleOriginalTitleW: [ DWORD, { lpConsoleTitle: LPWSTR, nSize: DWORD } ],
  SetConsoleTitleA: [ BOOL, { lpConsoleTitle: LPCSTR } ],
  SetConsoleTitleW: [ BOOL, { lpConsoleTitle: LPCWSTR } ],
  ReadConsoleA: [ BOOL, { hConsoleInput: HANDLE, lpBuffer: LPVOID, nNumberOfCharsToRead: DWORD, lpNumberOfCharsRead: LPDWORD, pInputControl: PCONSOLE_READCONSOLE_CONTROL } ],
  ReadConsoleW: [ BOOL, { hConsoleInput: HANDLE, lpBuffer: LPVOID, nNumberOfCharsToRead: DWORD, lpNumberOfCharsRead: LPDWORD, pInputControl: PCONSOLE_READCONSOLE_CONTROL } ],
  WriteConsoleA: [ BOOL, { hConsoleOutput: HANDLE, lpBuffer: _void.Δ, nNumberOfCharsToWrite: DWORD, lpNumberOfCharsWritten: LPDWORD, lpReserved: LPVOID } ],
  WriteConsoleW: [ BOOL, { hConsoleOutput: HANDLE, lpBuffer: _void.Δ, nNumberOfCharsToWrite: DWORD, lpNumberOfCharsWritten: LPDWORD, lpReserved: LPVOID } ],
  CreateConsoleScreenBuffer: [ HANDLE, { dwDesiredAccess: DWORD, dwShareMode: DWORD, lpSecurityAttributes: SECURITY_ATTRIBUTES.Δ, dwFlags: DWORD, lpScreenBufferData: LPVOID } ],
  GetConsoleCP: [ UINT, {  } ],
  SetConsoleCP: [ BOOL, { wCodePageID: UINT } ],
  GetConsoleOutputCP: [ UINT, {  } ],
  SetConsoleOutputCP: [ BOOL, { wCodePageID: UINT } ],
  GetConsoleDisplayMode: [ BOOL, { lpModeFlags: LPDWORD } ],
  SetConsoleDisplayMode: [ BOOL, { hConsoleOutput: HANDLE, dwFlags: DWORD, lpNewScreenBufferDimensions: PCOORD } ],
  GetConsoleWindow: [ HWND, {  } ],
  GetConsoleProcessList: [ DWORD, { lpdwProcessList: LPDWORD, dwProcessCount: DWORD } ],
  AddConsoleAliasA: [ BOOL, { Source: LPSTR, Target: LPSTR, ExeName: LPSTR } ],
  AddConsoleAliasW: [ BOOL, { Source: LPWSTR, Target: LPWSTR, ExeName: LPWSTR } ],
  GetConsoleAliasA: [ DWORD, { Source: LPSTR, TargetBuffer: LPSTR, TargetBufferLength: DWORD, ExeName: LPSTR } ],
  GetConsoleAliasW: [ DWORD, { Source: LPWSTR, TargetBuffer: LPWSTR, TargetBufferLength: DWORD, ExeName: LPWSTR } ],
  GetConsoleAliasesLengthA: [ DWORD, { ExeName: LPSTR } ],
  GetConsoleAliasesLengthW: [ DWORD, { ExeName: LPWSTR } ],
  GetConsoleAliasExesLengthA: [ DWORD, {  } ],
  GetConsoleAliasExesLengthW: [ DWORD, {  } ],
  GetConsoleAliasesA: [ DWORD, { AliasBuffer: LPSTR, AliasBufferLength: DWORD, ExeName: LPSTR } ],
  GetConsoleAliasesW: [ DWORD, { AliasBuffer: LPWSTR, AliasBufferLength: DWORD, ExeName: LPWSTR } ],
  GetConsoleAliasExesA: [ DWORD, { ExeNameBuffer: LPSTR, ExeNameBufferLength: DWORD } ],
  GetConsoleAliasExesW: [ DWORD, { ExeNameBuffer: LPWSTR, ExeNameBufferLength: DWORD } ],