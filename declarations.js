var ffi = require('ffi'),
    ref = require('ref'),
    Struct = require('ref-struct'),
    ReferenceType = require('./ReferenceType'),
    BitfieldType = require('./BitfieldType');

var Library = ffi.Library,
    Type = ref.Type,
    NULL = ref.NULL,
    isNull = ref.isNull;



var groups = ['libs', 'types', 'structs', 'callbacks', 'enums'];

module.exports = lookup;

function lookup(name){
  if (name == null || name.toLowerCase() === 'null') {
    return NULL;
  }
  var i = groups.length;
  while (i--) {
    if (name in lookup[groups[i]]) {
      return lookup[groups[i]][name];
    }
  }
  for (var k in lookup.libs) {
    if (name in lookup.libs[k]) {
      return lookup.libs[k][name];
    }
    if ((name + 'A') in lookup.libs[k]) {
      return lookup.libs[k][name + 'A'];
    }
  }
}


lookup.NULL = ref.NULL;
lookup.isNull = ref.isNull;

groups.forEach(function(name){
  lookup[name] = {};
});

var types = lookup.types;

var
 VOID = types.void = ffi.types.void,
 bool = types.bool = ffi.types.bool,
 int8 = types.int8 = ffi.types.int8,
 uint8 = types.uint8 = ffi.types.uint8,
 int16 = types.int16 = ffi.types.int16,
 uint16 = types.uint16 = ffi.types.uint16,
 int32 = types.int32 = ffi.types.int32,
 uint32 = types.uint32 = ffi.types.uint32,
 int64 = types.int64 = ffi.types.int64,
 uint64 = types.uint64 = ffi.types.uint64,
 float = types.float = ffi.types.float,
 double = types.double = ffi.types.double,
 byte = types.byte = ffi.types.byte,
 char = types.char = ffi.types.char,
 uchar = types.uchar = ffi.types.uchar,
 short = types.short = ffi.types.short,
 ushort = types.ushort = ffi.types.ushort,
 int = types.int = ffi.types.int,
 uint = types.uint = ffi.types.uint,
 long = types.long = ffi.types.long,
 ulong = types.ulong = ffi.types.ulong,
 longlong = types.longlong = ffi.types.longlong,
 ulonglong = types.ulonglong = ffi.types.ulonglong,
 size_t = types.size_t = ffi.types.size_t,
 string = types.CString = ffi.types.CString,
 VOIDPTR = TYPEDEF('VOIDPTR', PTR(VOID));


function PTR(type){
  return ref.refType(type);
}

function TYPEDEF(name, type){
  var newType = type.typedef(name);
  if (!(name in types)) {
    types[name] = newType;
  }
  return newType;
}

function CALLBACK(name, ret, args){
  var f = new Function('cb', 'ret', 'args', 'return function '+name+'(f){ return cb(ret, args, f) }')(ffi.Callback, ret, args);
  lookup.callbacks[name] = f;
  return TYPEDEF(name, VOIDPTR);
}

function STRUCT(name, fields){
  return lookup.structs[name] = new Struct(name, fields);
}

function ENUM(name, values){
  var enumeration = lookup.enums[name] = new Enumeration(values);
  enumeration.name = name;
  return enumeration;
}

function LIBRARY(name, functions){
  return lookup.libs[name] = new Library(name, functions);
}

function ARRAY(type, length){
  var fields = {};
  Array.apply(null, new Array(length)).forEach(function(x, i){
    fields[i] = type;
  });
  return STRUCT(type.name+'x'+length, fields);
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

Enumeration.prototype._ = Enumeration.prototype.toValue = function toValue(v){
  if (this._values.has(v)) {
    return v;
  } else {
    return this._keys.get(v);
  }
};

var MAX_PATH = 260,
    CCHDEVICENAME = 32,
    CCHFORMNAME = 32,
    SPIF_UPDATEINIFILE = 1,
    SPIF_SENDWININICHANGE = 2;


var
 HANDLE = TYPEDEF('HANDLE', long),
 HKEY = TYPEDEF('HKEY', PTR(uint64)),
 PHKEY = TYPEDEF('PHKEY', PTR(HKEY)),
 HMODULE = TYPEDEF('HMODULE', HANDLE),
 HWND = TYPEDEF('HWND', HANDLE),
 HHOOK = TYPEDEF('HHOOK', HANDLE),
 HACCEL = TYPEDEF('HACCEL', HANDLE),
 HDROP = TYPEDEF('HDROP', HANDLE),
 HBITMAP = TYPEDEF('HBITMAP', HANDLE),
 HBRUSH = TYPEDEF('HBRUSH', HANDLE),
 HCOLORSPACE = TYPEDEF('HCOLORSPACE', HANDLE),
 HDC = TYPEDEF('HDC', HANDLE),
 HGLRC = TYPEDEF('HGLRC', HANDLE),
 HDESK = TYPEDEF('HDESK', HANDLE),
 HGDIOBJ = TYPEDEF('HGDIOBJ', HANDLE),
 HENHMETAFILE = TYPEDEF('HENHMETAFILE', HANDLE),
 HFONT = TYPEDEF('HFONT', HANDLE),
 HICON = TYPEDEF('HICON', HANDLE),
 HMENU = TYPEDEF('HMENU', HANDLE),
 HCURSOR = TYPEDEF('HCURSOR', HANDLE),
 HMETAFILE = TYPEDEF('HMETAFILE', HANDLE),
 HINSTANCE = TYPEDEF('HINSTANCE', HANDLE),
 HPALETTE = TYPEDEF('HPALETTE', HANDLE),
 HMONITOR = TYPEDEF('HMONITOR', HANDLE),
 HPEN = TYPEDEF('HPEN', HANDLE),
 HRGN = TYPEDEF('HRGN', HANDLE),
 HWND = TYPEDEF('HWND', HANDLE),
 CHAR = TYPEDEF('CHAR', char),
 BYTE = TYPEDEF('BYTE', byte),
 BOOL = TYPEDEF('BOOL', bool),
 WORD = TYPEDEF('WORD', ushort),
 DWORD = TYPEDEF('DWORD', ulong),
 INT = TYPEDEF('INT', int),
 UINT = TYPEDEF('UINT', uint),
 UINT32 = TYPEDEF('UINT32', uint32),
 SHORT = TYPEDEF('SHORT', short),
 USHORT = TYPEDEF('USHORT', ushort),
 LONG = TYPEDEF('LONG', long),
 ULONG = TYPEDEF('ULONG', ulong),
 DOUBLE = TYPEDEF('DOUBLE', double),
 ULONGLONG = TYPEDEF('ULONG', ulonglong),
 LPARAM = TYPEDEF('LPARAM', VOIDPTR),
 WCHAR = TYPEDEF('WCHAR', ushort),
 string = TYPEDEF('string', PTR(int8)),
 LPSTR = TYPEDEF('LPSTR', PTR(int8)),
 LPCWSTR = TYPEDEF('LPCWSTR', PTR(ushort)),
 LPWSTR = TYPEDEF('LPWSTR', PTR(ushort)),
 PCWSTR = TYPEDEF('PCWSTR', PTR(ushort)),
 LRESULT = TYPEDEF('LRESULT', VOIDPTR),
 WPARAM = TYPEDEF('WPARAM', uint),
 PDWORD_PTR = TYPEDEF('PDWORD_PTR', PTR(ulong)),
 ULONG_PTR = TYPEDEF('ULONG_PTR', PTR(ulong)),
 UINT_PTR = TYPEDEF('UINT_PTR', PTR(uint)),
 PUINT = TYPEDEF('PUINT', PTR(UINT)),
 INT_PTR = TYPEDEF('INT_PTR', PTR(int)),
 DWORD_PTR = TYPEDEF('DWORD_PTR', PTR(ulong)),
 LPBYTE = TYPEDEF('LPBYTE', PTR(uchar)),
 LPDWORD = TYPEDEF('LPDWORD', PTR(ulong)),
 LPCVOID = TYPEDEF('LPCVOID', VOIDPTR),
 LPVOID = TYPEDEF('LPVOID', VOIDPTR),
 PVOID = TYPEDEF('PVOID', VOIDPTR),
 PLONG = TYPEDEF('PLONG', PTR(long)),
 PSECDESC = TYPEDEF('PSECDESC', VOIDPTR),
 SECINFO = TYPEDEF('SECINFO', ulong),
 HRESULT = TYPEDEF('HRESULT', long),
 REGSAM = TYPEDEF('REGSAM', ulong),
 ATOM = TYPEDEF('ATOM', ushort),
 LSTATUS = TYPEDEF('LSTATUS', long),
 FILEOP_FLAGS = TYPEDEF('FILEOP_FLAGS', ushort),
 PROC_THREAD_ATTRIBUTE_LIST = TYPEDEF('PROC_THREAD_ATTRIBUTE_LIST', VOIDPTR),
 COLORREF = TYPEDEF('COLORREF', ulong),
 LPPROC_THREAD_ATTRIBUTE_LIST = TYPEDEF('LPPROC_THREAD_ATTRIBUTE_LIST', PTR(PROC_THREAD_ATTRIBUTE_LIST)),
 HTHUMBNAIL = TYPEDEF('HTHUMBNAIL', PTR(VOID)),
 DWM_FRAME_COUNT = TYPEDEF('DWM_FRAME_COUNT', ulonglong),
 QPC_TIME = TYPEDEF('QPC_TIME', ulonglong);



ENUM('VK', {
    0: ['Unknown',       'Unknown'],
    1: ['Mouse1',        'Mouse1'],
    2: ['Mouse2',        'Mouse2'],
    3: ['Break',         'Break'],
    4: ['Mouse3',        'Mouse3'],
    5: ['Mouse4',        'Mouse4'],
    6: ['Mouse5',        'Mouse5'],
    8: ['Backspace',     'Backspace'],
    9: ['Tab',           'Tab'],
   12: ['Clear',         'Clear'],
   13: ['Enter',         'Enter'],
   16: ['Shift',         'Shift'],
   17: ['Control',       'Control'],
   18: ['Alt',           'Alt'],
   19: ['Pause',         'Pause'],
   20: ['CapsLock',      'CapsLock'],
   21: ['IMEHangul',     'IMEHangul'],
   23: ['IMEJunja',      'IMEJunja'],
   24: ['IMEFinal',      'IMEFinal'],
   25: ['IMEKanji',      'IMEKanji'],
   27: ['Escape',        'Escape'],
   28: ['IMEConvert',    'IMEConvert'],
   29: ['IMENonconvert', 'IMENonconvert'],
   30: ['IMEAccept',     'IMEAccept'],
   31: ['IMEModechange', 'IMEModechange'],
   32: ['Space',         'Space'],
   33: ['PageUp',        'PageUp'],
   34: ['PageDown',      'PageDown'],
   35: ['End',           'End'],
   36: ['Home',          'Home'],
   37: ['Left',          'Left'],
   38: ['Up',            'Up'],
   39: ['Right',         'Right'],
   40: ['Down',          'Down'],
   41: ['Select',        'Select'],
   42: ['Print',         'Print'],
   43: ['Execute',       'Execute'],
   44: ['Snapshot',      'Snapshot'],
   45: ['Insert',        'Insert'],
   46: ['Delete',        'Delete'],
   47: ['Help',          'Help'],
   48: '0)',
   49: '1!',
   50: '2@',
   51: '3#',
   52: '4$',
   53: '5%',
   54: '6^',
   55: '7&',
   56: '8*',
   57: '9(',
   65: 'aA',
   66: 'bB',
   67: 'cC',
   68: 'dD',
   69: 'eE',
   70: 'fF',
   71: 'gG',
   72: 'hH',
   73: 'iI',
   74: 'jJ',
   75: 'kK',
   76: 'lL',
   77: 'mM',
   78: 'nN',
   79: 'oO',
   80: 'pP',
   81: 'qQ',
   82: 'rR',
   83: 'sS',
   84: 'tT',
   85: 'uU',
   86: 'vV',
   87: 'wW',
   88: 'xX',
   89: 'yY',
   90: 'zZ',
   91: ['MetaLeft',         'MetaLeft'],
   92: ['MetaRight',        'MetaRight'],
   93: ['Menu',             'Menu'],
   95: ['Sleep',            'Sleep'],
   96: ['Num0',             'NumInsert'],
   97: ['Num1',             'NumEnd'],
   98: ['Num2',             'NumDown'],
   99: ['Num3',             'NumPageDown'],
  100: ['Num4',             'NumLeft'],
  101: ['Num5',             'NumClear'],
  102: ['Num6',             'NumRight'],
  103: ['Num7',             'NumHome'],
  104: ['Num8',             'NumUp'],
  105: ['Num9',             'NumPageUp'],
  106: ['Num*',             'Num*'],
  107: ['Num+',             'Num+'],
  108: ['NumEnter',         'NumEnter'],
  109: ['Num-',             'Num-'],
  110: ['Num.',             'NumDelete'],
  111: ['Num/',             'Num/'],
  112: ['F1',               'F1'],
  113: ['F2',               'F2'],
  114: ['F3',               'F3'],
  115: ['F4',               'F4'],
  116: ['F5',               'F5'],
  117: ['F6',               'F6'],
  118: ['F7',               'F7'],
  119: ['F8',               'F8'],
  120: ['F9',               'F9'],
  121: ['F10',              'F10'],
  122: ['F11',              'F11'],
  123: ['F12',              'F12'],
  124: ['F13',              'F13'],
  125: ['F14',              'F14'],
  126: ['F15',              'F15'],
  127: ['F16',              'F16'],
  128: ['F17',              'F17'],
  129: ['F18',              'F18'],
  130: ['F19',              'F19'],
  131: ['F20',              'F20'],
  132: ['F21',              'F21'],
  133: ['F22',              'F22'],
  134: ['F23',              'F23'],
  135: ['F24',              'F24'],
  144: ['NumLock',          'NumLock'],
  145: ['ScrollLock',       'ScrollLock'],
  160: ['ShiftLeft',        'ShiftLeft'],
  161: ['ShiftRight',       'ShiftRight'],
  162: ['ControlLeft',      'ControlLeft'],
  163: ['ControlRight',     'ControlRight'],
  164: ['AltLeft',          'AltLeft'],
  165: ['AltRight',         'AltRight'],
  166: ['BrowserBack',      'BrowserBack'],
  167: ['BrowserForward',   'BrowserForward'],
  168: ['BrowserRefresh',   'BrowserRefresh'],
  169: ['BrowserStop',      'BrowserStop'],
  170: ['BrowserSearch',    'BrowserSearch'],
  171: ['BrowserFavorites', 'BrowserFavorites'],
  172: ['BrowserHome',      'BrowserHome'],
  173: ['VolumeMute',       'VolumeMute'],
  174: ['VolumeDown',       'VolumeDown'],
  175: ['VolumeUp',         'VolumeUp'],
  176: ['NextTrack',        'NextTrack'],
  177: ['PrevTrack',        'PrevTrack'],
  178: ['Stop',             'Stop'],
  179: ['PlayPause',        'PlayPause'],
  180: ['LaunchMail',       'LaunchMail'],
  181: ['LaunchMediaSelect','LaunchMediaSelect'],
  182: ['LaunchApp1',       'LaunchApp1'],
  183: ['LaunchApp2',       'LaunchApp2'],
  186: ';:',
  187: '=+',
  188: ',<',
  189: '-_',
  190: '.>',
  191: '/?',
  192: '`~',
  219: '[{',
  220: '\\',
  221: ']}',
  222: '\'"',
  223: ['Meta',       'Meta'],
  226: ['AltGr',      'AltGr'],
  229: ['IMEProcess', 'IMEProcess'],
  231: ['0x00',       '0x00'],
  246: ['Attention',  'Attention'],
  247: ['Crsel',      'Crsel'],
  248: ['Exsel',      'Exsel'],
  249: ['EraseEOF',   'EraseEOF'],
  250: ['Play',       'Play'],
  251: ['Zoom',       'Zoom'],
  252: ['NoName',     'NoName'],
  254: ['Clear',      'Clear'],
});


ENUM('KEYS', {
 Unknown           :   0,
 Mouse1            :   1,
 Mouse2            :   2,
 Break             :   3,
 Mouse3            :   4,
 Mouse4            :   5,
 Mouse5            :   6,
 Backspace         :   8,
 Tab               :   9,
 Clear             :  12,
 Enter             :  13,
 Shift             :  16,
 Control           :  17,
 Alt               :  18,
 Pause             :  19,
 CapsLock          :  20,
 IMEHangul         :  21,
 IMEJunja          :  23,
 IMEFinal          :  24,
 IMEKanji          :  25,
 Escape            :  27,
 IMEConvert        :  28,
 IMENonconvert     :  29,
 IMEAccept         :  30,
 IMEModechange     :  31,
 Space             :  32,
 PageUp            :  33,
 PageDown          :  34,
 End               :  35,
 Home              :  36,
 Left              :  37,
 Up                :  38,
 Right             :  39,
 Down              :  40,
 Select            :  41,
 Print             :  42,
 Execute           :  43,
 Snapshot          :  44,
 Insert            :  45,
 Delete            :  46,
 Help              :  47,
 0                 :  48,
 1                 :  49,
 2                 :  50,
 3                 :  51,
 4                 :  52,
 5                 :  53,
 6                 :  54,
 7                 :  55,
 8                 :  56,
 9                 :  57,
 A                 :  65,
 B                 :  66,
 C                 :  67,
 D                 :  68,
 E                 :  69,
 F                 :  70,
 G                 :  71,
 H                 :  72,
 I                 :  73,
 J                 :  74,
 K                 :  75,
 L                 :  76,
 M                 :  77,
 N                 :  78,
 O                 :  79,
 P                 :  80,
 Q                 :  81,
 R                 :  82,
 S                 :  83,
 T                 :  84,
 U                 :  85,
 V                 :  86,
 W                 :  87,
 X                 :  88,
 Y                 :  89,
 Z                 :  90,
 MetaLeft          :  91,
 MetaRight         :  92,
 Menu              :  93,
 Sleep             :  95,
 Num0              :  96,
 Num1              :  97,
 Num2              :  98,
 Num3              :  99,
 Num4              : 100,
 Num5              : 101,
 Num6              : 102,
 Num7              : 103,
 Num8              : 104,
 Num9              : 105,
 Num               : 106,
 Num               : 107,
 NumEnter          : 108,
 Num               : 109,
 Num               : 110,
 Num               : 111,
 F1                : 112,
 F2                : 113,
 F3                : 114,
 F4                : 115,
 F5                : 116,
 F6                : 117,
 F7                : 118,
 F8                : 119,
 F9                : 120,
 F10               : 121,
 F11               : 122,
 F12               : 123,
 F13               : 124,
 F14               : 125,
 F15               : 126,
 F16               : 127,
 F17               : 128,
 F18               : 129,
 F19               : 130,
 F20               : 131,
 F21               : 132,
 F22               : 133,
 F23               : 134,
 F24               : 135,
 NumLock           : 144,
 ScrollLock        : 145,
 ShiftLeft         : 160,
 ShiftRight        : 161,
 ControlLeft       : 162,
 ControlRight      : 163,
 AltLeft           : 164,
 AltRight          : 165,
 BrowserBack       : 166,
 BrowserForward    : 167,
 BrowserRefresh    : 168,
 BrowserStop       : 169,
 BrowserSearch     : 170,
 BrowserFavorites  : 171,
 BrowserHome       : 172,
 VolumeMute        : 173,
 VolumeDown        : 174,
 VolumeUp          : 175,
 NextTrack         : 176,
 PrevTrack         : 177,
 Stop              : 178,
 PlayPause         : 179,
 LaunchMail        : 180,
 LaunchMediaSelect : 181,
 LaunchApp1        : 182,
 LaunchApp2        : 183,
 ';'               : 186,
 '='               : 187,
 ','               : 188,
 '-'               : 189,
 '.'               : 190,
 '/'               : 191,
 '`'               : 192,
 '['               : 219,
 '\\'              : 220,
 ']'               : 221,
 '\\'              : 222,
 Meta              : 223,
 AltGr             : 226,
 IMEProcess        : 229,
 0x00              : 231,
 Attention         : 246,
 Crsel             : 247,
 Exsel             : 248,
 EraseEOF          : 249,
 Play              : 250,
 Zoom              : 251,
 NoName            : 252,
 Clear             : 254,
});

ENUM('CS', {
  VREDRAW                        : 0x0001,
  HREDRAW                        : 0x0002,
  KEYCVTWINDOW                   : 0x0004,
  DBLCLKS                        : 0x0008,
  OWNDC                          : 0x0020,
  CLASSDC                        : 0x0040,
  PARENTDC                       : 0x0080,
  NOKEYCVT                       : 0x0100,
  NOCLOSE                        : 0x0200,
  SAVEBITS                       : 0x0800,
  BYTEALIGNCLIENT                : 0x1000,
  BYTEALIGNWINDOW                : 0x2000,
  GLOBALCLASS                    : 0x4000,
  IME                            : 0x10000,
});

ENUM('DT', {
  TOP                            : 0x0000,
  LEFT                           : 0x0000,
  CENTER                         : 0x0001,
  RIGHT                          : 0x0002,
  VCENTER                        : 0x0004,
  BOTTOM                         : 0x0008,
  WORDBREAK                      : 0x0010,
  SINGLELINE                     : 0x0020,
  EXPANDTABS                     : 0x0040,
  TABSTOP                        : 0x0080,
  NOCLIP                         : 0x0100,
  EXTERNALLEADING                : 0x0200,
  CALCRECT                       : 0x0400,
  NOPREFIX                       : 0x0800,
  INTERNAL                       : 0x1000,
});

var WM = ENUM('WM', {
 NULL                           : 0x0000,
 CREATE                         : 0x0001,
 DESTROY                        : 0x0002,
 MOVE                           : 0x0003,
 SIZE                           : 0x0005,
 ACTIVATE                       : 0x0006,
 SETFOCUS                       : 0x0007,
 KILLFOCUS                      : 0x0008,
 ENABLE                         : 0x000A,
 SETREDRAW                      : 0x000B,
 SETTEXT                        : 0x000C,
 GETTEXT                        : 0x000D,
 GETTEXTLENGTH                  : 0x000E,
 PAINT                          : 0x000F,
 CLOSE                          : 0x0010,
 QUERYENDSESSION                : 0x0011,
 QUERYOPEN                      : 0x0013,
 ENDSESSION                     : 0x0016,
 QUIT                           : 0x0012,
 ERASEBKGND                     : 0x0014,
 SYSCOLORCHANGE                 : 0x0015,
 SHOWWINDOW                     : 0x0018,
 WININICHANGE                   : 0x001A,
 DEVMODECHANGE                  : 0x001B,
 ACTIVATEAPP                    : 0x001C,
 FONTCHANGE                     : 0x001D,
 TIMECHANGE                     : 0x001E,
 CANCELMODE                     : 0x001F,
 SETCURSOR                      : 0x0020,
 MOUSEACTIVATE                  : 0x0021,
 CHILDACTIVATE                  : 0x0022,
 QUEUESYNC                      : 0x0023,
 GETMINMAXINFO                  : 0x0024,
 PAINTICON                      : 0x0026,
 ICONERASEBKGND                 : 0x0027,
 NEXTDLGCTL                     : 0x0028,
 SPOOLERSTATUS                  : 0x002A,
 DRAWITEM                       : 0x002B,
 MEASUREITEM                    : 0x002C,
 DELETEITEM                     : 0x002D,
 VKEYTOITEM                     : 0x002E,
 CHARTOITEM                     : 0x002F,
 SETFONT                        : 0x0030,
 GETFONT                        : 0x0031,
 SETHOTKEY                      : 0x0032,
 GETHOTKEY                      : 0x0033,
 QUERYDRAGICON                  : 0x0037,
 COMPAREITEM                    : 0x0039,
 GETOBJECT                      : 0x003D,
 COMPACTING                     : 0x0041,
 WINDOWPOSCHANGING              : 0x0046,
 WINDOWPOSCHANGED               : 0x0047,
 NOTIFY                         : 0x004E,
 INPUTLANGCHANGEREQUEST         : 0x0050,
 INPUTLANGCHANGE                : 0x0051,
 TCARD                          : 0x0052,
 HELP                           : 0x0053,
 USERCHANGED                    : 0x0054,
 NOTIFYFORMAT                   : 0x0055,
 CONTEXTMENU                    : 0x007B,
 STYLECHANGING                  : 0x007C,
 STYLECHANGED                   : 0x007D,
 DISPLAYCHANGE                  : 0x007E,
 GETICON                        : 0x007F,
 SETICON                        : 0x0080,
 NCCREATE                       : 0x0081,
 NCDESTROY                      : 0x0082,
 NCCALCSIZE                     : 0x0083,
 NCHITTEST                      : 0x0084,
 NCPAINT                        : 0x0085,
 NCACTIVATE                     : 0x0086,
 GETDLGCODE                     : 0x0087,
 SYNCPAINT                      : 0x0088,
 NCMOUSEMOVE                    : 0x00A0,
 NCLBUTTONDOWN                  : 0x00A1,
 NCLBUTTONUP                    : 0x00A2,
 NCLBUTTONDBLCLK                : 0x00A3,
 NCRBUTTONDOWN                  : 0x00A4,
 NCRBUTTONUP                    : 0x00A5,
 NCRBUTTONDBLCLK                : 0x00A6,
 NCMBUTTONDOWN                  : 0x00A7,
 NCMBUTTONUP                    : 0x00A8,
 NCMBUTTONDBLCLK                : 0x00A9,
 NCXBUTTONDOWN                  : 0x00AB,
 NCXBUTTONUP                    : 0x00AC,
 NCXBUTTONDBLCLK                : 0x00AD,
 INPUT_DEVICE_CHANGE            : 0x00FE,
 INPUT                          : 0x00FF,
 KEYFIRST                       : 0x0100,
 KEYDOWN                        : 0x0100,
 KEYUP                          : 0x0101,
 CHAR                           : 0x0102,
 DEADCHAR                       : 0x0103,
 SYSKEYDOWN                     : 0x0104,
 SYSKEYUP                       : 0x0105,
 SYSCHAR                        : 0x0106,
 SYSDEADCHAR                    : 0x0107,
 UNICHAR                        : 0x0109,
 KEYLAST                        : 0x0109,
 KEYLAST                        : 0x0108,
 IME_STARTCOMPOSITION           : 0x010D,
 IME_ENDCOMPOSITION             : 0x010E,
 IME_COMPOSITION                : 0x010F,
 IME_KEYLAST                    : 0x010F,
 INITDIALOG                     : 0x0110,
 COMMAND                        : 0x0111,
 SYSCOMMAND                     : 0x0112,
 TIMER                          : 0x0113,
 HSCROLL                        : 0x0114,
 VSCROLL                        : 0x0115,
 INITMENU                       : 0x0116,
 INITMENUPOPUP                  : 0x0117,
 GESTURE                        : 0x0119,
 GESTURENOTIFY                  : 0x011A,
 MENUSELECT                     : 0x011F,
 MENUCHAR                       : 0x0120,
 ENTERIDLE                      : 0x0121,
 MENURBUTTONUP                  : 0x0122,
 MENUDRAG                       : 0x0123,
 MENUGETOBJECT                  : 0x0124,
 UNINITMENUPOPUP                : 0x0125,
 MENUCOMMAND                    : 0x0126,
 CHANGEUISTATE                  : 0x0127,
 UPDATEUISTATE                  : 0x0128,
 QUERYUISTATE                   : 0x0129,
 CTLCOLORMSGBOX                 : 0x0132,
 CTLCOLOREDIT                   : 0x0133,
 CTLCOLORLISTBOX                : 0x0134,
 CTLCOLORBTN                    : 0x0135,
 CTLCOLORDLG                    : 0x0136,
 CTLCOLORSCROLLBAR              : 0x0137,
 CTLCOLORSTATIC                 : 0x0138,
 GETHMENU                       : 0x01E1,
 MOUSEFIRST                     : 0x0200,
 MOUSEMOVE                      : 0x0200,
 LBUTTONDOWN                    : 0x0201,
 LBUTTONUP                      : 0x0202,
 LBUTTONDBLCLK                  : 0x0203,
 RBUTTONDOWN                    : 0x0204,
 RBUTTONUP                      : 0x0205,
 RBUTTONDBLCLK                  : 0x0206,
 MBUTTONDOWN                    : 0x0207,
 MBUTTONUP                      : 0x0208,
 MBUTTONDBLCLK                  : 0x0209,
 MOUSEWHEEL                     : 0x020A,
 XBUTTONDOWN                    : 0x020B,
 XBUTTONUP                      : 0x020C,
 XBUTTONDBLCLK                  : 0x020D,
 MOUSEHWHEEL                    : 0x020E,
 MOUSELAST                      : 0x0209,
 PARENTNOTIFY                   : 0x0210,
 ENTERMENULOOP                  : 0x0211,
 EXITMENULOOP                   : 0x0212,
 NEXTMENU                       : 0x0213,
 SIZING                         : 0x0214,
 CAPTURECHANGED                 : 0x0215,
 MOVING                         : 0x0216,
 POWERBROADCAST                 : 0x0218,
 DEVICECHANGE                   : 0x0219,
 MDICREATE                      : 0x0220,
 MDIDESTROY                     : 0x0221,
 MDIACTIVATE                    : 0x0222,
 MDIRESTORE                     : 0x0223,
 MDINEXT                        : 0x0224,
 MDIMAXIMIZE                    : 0x0225,
 MDITILE                        : 0x0226,
 MDICASCADE                     : 0x0227,
 MDIICONARRANGE                 : 0x0228,
 MDIGETACTIVE                   : 0x0229,
 MDISETMENU                     : 0x0230,
 ENTERSIZEMOVE                  : 0x0231,
 EXITSIZEMOVE                   : 0x0232,
 DROPFILES                      : 0x0233,
 MDIREFRESHMENU                 : 0x0234,
 TOUCH                          : 0x0240,
 IME_SETCONTEXT                 : 0x0281,
 IME_NOTIFY                     : 0x0282,
 IME_CONTROL                    : 0x0283,
 IME_COMPOSITIONFULL            : 0x0284,
 IME_SELECT                     : 0x0285,
 IME_CHAR                       : 0x0286,
 IME_REQUEST                    : 0x0288,
 IME_KEYDOWN                    : 0x0290,
 IME_KEYUP                      : 0x0291,
 MOUSEHOVER                     : 0x02A1,
 MOUSELEAVE                     : 0x02A3,
 NCMOUSEHOVER                   : 0x02A0,
 NCMOUSELEAVE                   : 0x02A2,
 WTSSESSION_CHANGE              : 0x02B1,
 TABLET_FIRST                   : 0x02c0,
 TABLET_LAST                    : 0x02df,
 CUT                            : 0x0300,
 COPY                           : 0x0301,
 PASTE                          : 0x0302,
 CLEAR                          : 0x0303,
 UNDO                           : 0x0304,
 RENDERFORMAT                   : 0x0305,
 RENDERALLFORMATS               : 0x0306,
 DESTROYCLIPBOARD               : 0x0307,
 DRAWCLIPBOARD                  : 0x0308,
 PAINTCLIPBOARD                 : 0x0309,
 VSCROLLCLIPBOARD               : 0x030A,
 SIZECLIPBOARD                  : 0x030B,
 ASKCBFORMATNAME                : 0x030C,
 CHANGECBCHAIN                  : 0x030D,
 HSCROLLCLIPBOARD               : 0x030E,
 QUERYNEWPALETTE                : 0x030F,
 PALETTEISCHANGING              : 0x0310,
 PALETTECHANGED                 : 0x0311,
 HOTKEY                         : 0x0312,
 PRINT                          : 0x0317,
 PRINTCLIENT                    : 0x0318,
 APPCOMMAND                     : 0x0319,
 THEMECHANGED                   : 0x031A,
 CLIPBOARDUPDATE                : 0x031D,
 DWMCOMPOSITIONCHANGED          : 0x031E,
 DWMNCRENDERINGCHANGED          : 0x031F,
 DWMCOLORIZATIONCOLORCHANGED    : 0x0320,
 DWMWINDOWMAXIMIZEDCHANGE       : 0x0321,
 DWMSENDICONICTHUMBNAIL         : 0x0323,
 DWMSENDICONICLIVEPREVIEWBITMAP : 0x0326,
 GETTITLEBARINFOEX              : 0x033F,
 HANDHELDFIRST                  : 0x0358,
 HANDHELDLAST                   : 0x035F,
 AFXFIRST                       : 0x0360,
 AFXLAST                        : 0x037F,
 PENWINFIRST                    : 0x0380,
 PENWINLAST                     : 0x038F,
});

var PM = ENUM('PM', {
  NOREMOVE: 0x0000,
  REMOVE  : 0x0001,
  NOYIELD : 0x0002,
});

var GWL = ENUM('GWL', {
  EXSTYLE   : -20,
  STYLE     : -16,
  WNDPROC   :  -4,
  HINSTANCE :  -6,
  HWNDPARENT:  -8,
  ID        : -12,
  USERDATA  : -21,
  DLGPROC   :   4,
  MSGRESULT :   0,
  USER      :   8,
});

var HT = ENUM('HT', {
 BORDER     : 18,
 BOTTOM     : 15,
 BOTTOMLEFT : 16,
 BOTTOMRIGHT: 17,
 CAPTION    :  2,
 CLIENT     :  1,
 CLOSE      : 20,
 ERROR      : -2,
 GROWBOX    :  4,
 HELP       : 21,
 HSCROLL    :  6,
 LEFT       : 10,
 MENU       :  5,
 MAXBUTTON  :  9,
 MINBUTTON  :  8,
 NOWHERE    :  0,
 RIGHT      : 11,
 SYSMENU    :  3,
 TOP        : 12,
 TOPLEFT    : 13,
 TOPRIGHT   : 14,
 TRANSPARENT: -1,
 VSCROLL    :  7,
});

var HWND_Z = ENUM('HWND_Z', {
  NOTOPMOST: -2,
  TOPMOST  : -1,
  TOP      :  0,
  BOTTOM   :  1
});

var LWA = ENUM('LWA', {
  COLORKEY: 1,
  ALPHA: 2
});

var SW = ENUM('SW', {
  HIDE           : 0,
  MAXIMIZE       : 3,
  MINIMIZE       : 6,
  RESTORE        : 9,
  SHOW           : 5,
  SHOWDEFAULT    : 10,
  SHOWMAXIMIZED  : 3,
  SHOWMINIMIZED  : 2,
  SHOWMINNOACTIVE: 7,
  SHOWNA         : 8,
  SHOWNOACTIVATE : 4,
  SHOWNORMAL     : 1,
});

var SWP = ENUM('SWP', {
  NOSIZE        : 0x0001,
  NOMOVE        : 0x0002,
  NOZORDER      : 0x0004,
  NOREDRAW      : 0x0008,
  NOACTIVATE    : 0x0010,
  DRAWFRAME     : 0x0020,
  FRAMECHANGED  : 0x0020,
  SHOWWINDOW    : 0x0040,
  HIDEWINDOW    : 0x0080,
  NOCOPYBITS    : 0x0100,
  NOOWNERZORDER : 0x0200,
  NOREPOSITION  : 0x0200,
  NOSENDCHANGING: 0x0400,
  DEFERERASE    : 0x2000,
  ASYNCWINDOWPOS: 0x4000
});
SWP.ONLYFRAME = SWP.FRAMECHANGED | SWP.NOMOVE | SWP.NOSIZE | SWP.NOZORDER | SWP.NOOWNERZORDER;

var WS = ENUM('WS', {
 BORDER          : 0x00800000,
 CAPTION         : 0x00C00000,
 CHILD           : 0x40000000,
 CHILDWINDOW     : 0x40000000,
 CLIPCHILDREN    : 0x02000000,
 CLIPSIBLINGS    : 0x04000000,
 DISABLED        : 0x08000000,
 DLGFRAME        : 0x00400000,
 GROUP           : 0x00020000,
 HSCROLL         : 0x00100000,
 ICONIC          : 0x20000000,
 MAXIMIZE        : 0x01000000,
 MAXIMIZEBOX     : 0x00010000,
 MINIMIZE        : 0x20000000,
 MINIMIZEBOX     : 0x00020000,
 OVERLAPPED      : 0x00000000,
 OVERLAPPEDWINDOW: 0x20CD0000,
 POPUP           : 0x80000000,
 POPUPWINDOW     : 0x80880000,
 SIZEBOX         : 0x00040000,
 SYSMENU         : 0x00080000,
 TABSTOP         : 0x00010000,
 THICKFRAME      : 0x00040000,
 TILED           : 0x00000000,
 TILEDWINDOW     : 0x20CD0000,
 VISIBLE         : 0x10000000,
 VSCROLL         : 0x00200000
});

WS.CHROME = WS.CAPTION | WS.SIZEBOX;
WS.CONTROLS = WS.MINIMIZEBOX | WS.MAXIMIZEBOX | WS.SIZEBOX;

var WS_EX = ENUM('WS_EX', {
 ACCEPTFILES     : 0x00000010,
 APPWINDOW       : 0x00040000,
 CLIENTEDGE      : 0x00000200,
 COMPOSITED      : 0x02000000,
 CONTEXTHELP     : 0x00000400,
 CONTROLPARENT   : 0x00010000,
 DLGMODALFRAME   : 0x00000001,
 LAYERED         : 0x00080000,
 LAYOUTRTL       : 0x00400000,
 LEFT            : 0x00000000,
 LEFTSCROLLBAR   : 0x00004000,
 LTRREADING      : 0x00000000,
 MDICHILD        : 0x00000040,
 NOACTIVATE      : 0x08000000,
 NOINHERITLAYOUT : 0x00100000,
 NOPARENTNOTIFY  : 0x00000004,
 OVERLAPPEDWINDOW: 0x00000300,
 PALETTEWINDOW   : 0x00000188,
 RIGHT           : 0x00001000,
 RIGHTSCROLLBAR  : 0x00000000,
 RTLREADING      : 0x00002000,
 STATICEDGE      : 0x00020000,
 TOOLWINDOW      : 0x00000080,
 TOPMOST         : 0x00000008,
 TRANSPARENT     : 0x00000020,
 WINDOWEDGE      : 0x00000100,
});

var IDI = ENUM('IDI', {
  APPLICATION : 32512,
  HAND        : 32513,
  QUESTION    : 32514,
  EXCLAMATION : 32515,
  ASTERISK    : 32516,
  WINLOGO     : 32517,
});

var IDC = ENUM('IDC', {
  ARROW      : 32512,
  IBEAM      : 32513,
  WAIT       : 32514,
  CROSS      : 32515,
  UPARROW    : 32516,
  SIZENWSE   : 32642,
  SIZENESW   : 32643,
  SIZEWE     : 32644,
  SIZENS     : 32645,
  SIZEALL    : 32646,
  NO         : 32648,
  HAND       : 32649,
  APPSTARTING: 32650,
  HELP       : 32651,
});


var SO = ENUM('SO', {
  WHITE_BRUSH         :  0,
  LTGRAY_BRUSH        :  1,
  GRAY_BRUSH          :  2,
  DKGRAY_BRUSH        :  3,
  BLACK_BRUSH         :  4,
  HOLLOW_BRUSH        :  5,
  NULL_BRUSH          :  5,
  WHITE_PEN           :  6,
  BLACK_PEN           :  7,
  NULL_PEN            : 08,
  OEM_FIXED_FONT      : 10,
  ANSI_FIXED_FONT     : 11,
  ANSI_VAR_FONT       : 12,
  SYSTEM_FONT         : 13,
  DEVICE_DEFAULT_FONT : 14,
  DEFAULT_PALETTE     : 15,
  SYSTEM_FIXED_FONT   : 16,
  DEFAULT_GUI_FONT    : 17,
});

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

var SEE_MASK = ENUM('SEE_MASK', {
  DEFAULT           : 0x00000000,
  CLASSNAME         : 0x00000001,
  CLASSKEY          : 0x00000003,
  IDLIST            : 0x00000004,
  INVOKEIDLIST      : 0x0000000c,
  HOTKEY            : 0x00000020,
  NOCLOSEPROCESS    : 0x00000040,
  CONNECTNETDRV     : 0x00000080,
  NOASYNC           : 0x00000100,
  DOENVSUBST        : 0x00000200,
  FLAG_NO_UI        : 0x00000400,
  UNICODE           : 0x00004000,
  NO_CONSOLE        : 0x00008000,
  ASYNCOK           : 0x00100000,
  HMONITOR          : 0x00200000,
  NOZONECHECKS      : 0x00800000,
  NOQUERYCLASSSTORE : 0x01000000,
  WAITFORINPUTIDLE  : 0x02000000,
  FLAG_LOG_USAGE    : 0x04000000
});

var HOOKTYPE = ENUM('HOOKTYPE', {
  CALLWNDPROC    :  4,
  CALLWNDPROCRET : 12,
  CBT            :  5,
  DEBUG          :  9,
  FOREGROUNDIDLE : 11,
  GETMESSAGE     :  3,
  JOURNALPLAYBACK:  1,
  JOURNALRECORD  :  0,
  KEYBOARD       :  2,
  KEYBOARD_LL    : 13,
  MOUSE          :  7,
  MOUSE_LL       : 14,
  MSGFILTER      : -1,
  SHELL          : 10,
  SYSMSGFILTER   :  6,
});

var WM = ENUM('WM', {
  MOUSEMOVE    : 0x200,
  LBUTTONDOWN  : 0x201,
  LBUTTONUP    : 0x202,
  LBUTTONDBLCLK: 0x203,
  RBUTTONDOWN  : 0x204,
  RBUTTONUP    : 0x205,
  RBUTTONDBLCLK: 0x206,
  MBUTTONDOWN  : 0x207,
  MBUTTONUP    : 0x208,
  MBUTTONDBLCLK: 0x209,
  MOUSEWHEEL   : 0x20A,
  XBUTTONDOWN  : 0x20B,
  XBUTTONUP    : 0x20C,
  XBUTTONDBLCLK: 0x20D,
  MOUSEHWHEEL  : 0x20E
});


var ASSOCCLASS = ENUM('ASSOCCLASS', {
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

var QUERY_USER_NOTIFICATION_STATE = ENUM('QUERY_USER_NOTIFICATION_STATE', {
 QunsPresent: 1,
 QunsBusy: 2,
 QunsRunningD3dFullScreen: 3,
 QunsPresentationMode: 4,
 QunsAcceptsNotifications: 5,
 QunsQuietTime: 6
});

var SHSTOCKICONID = ENUM('SHSTOCKICONID', {
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





var SPI = ENUM('SystemParametersInfo', {
 GETBEEP:                     0x0001,
 SETBEEP:                     0x0002,
 GETMOUSE:                    0x0003,
 SETMOUSE:                    0x0004,
 GETBORDER:                   0x0005,
 SETBORDER:                   0x0006,
 GETKEYBOARDSPEED:            0x000A,
 SETKEYBOARDSPEED:            0x000B,
 LANGDRIVER:                  0x000C,
 ICONHORIZONTALSPACING:       0x000D,
 GETSCREENSAVETIMEOUT:        0x000E,
 SETSCREENSAVETIMEOUT:        0x000F,
 GETSCREENSAVEACTIVE:         0x0010,
 SETSCREENSAVEACTIVE:         0x0011,
 GETGRIDGRANULARITY:          0x0012,
 SETGRIDGRANULARITY:          0x0013,
 SETDESKWALLPAPER:            0x0014,
 SETDESKPATTERN:              0x0015,
 GETKEYBOARDDELAY:            0x0016,
 SETKEYBOARDDELAY:            0x0017,
 ICONVERTICALSPACING:         0x0018,
 GETICONTITLEWRAP:            0x0019,
 SETICONTITLEWRAP:            0x001A,
 GETMENUDROPALIGNMENT:        0x001B,
 SETMENUDROPALIGNMENT:        0x001C,
 SETDOUBLECLKWIDTH:           0x001D,
 SETDOUBLECLKHEIGHT:          0x001E,
 GETICONTITLELOGFONT:         0x001F,
 SETDOUBLECLICKTIME:          0x0020,
 SETMOUSEBUTTONSWAP:          0x0021,
 SETICONTITLELOGFONT:         0x0022,
 GETFASTTASKSWITCH:           0x0023,
 SETFASTTASKSWITCH:           0x0024,
 SETDRAGFULLWINDOWS:          0x0025,
 GETDRAGFULLWINDOWS:          0x0026,
 GETNONCLIENTMETRICS:         0x0029,
 SETNONCLIENTMETRICS:         0x002A,
 GETMINIMIZEDMETRICS:         0x002B,
 SETMINIMIZEDMETRICS:         0x002C,
 GETICONMETRICS:              0x002D,
 SETICONMETRICS:              0x002E,
 SETWORKAREA:                 0x002F,
 GETWORKAREA:                 0x0030,
 SETPENWINDOWS:               0x0031,
 GETHIGHCONTRAST:             0x0042,
 SETHIGHCONTRAST:             0x0043,
 GETKEYBOARDPREF:             0x0044,
 SETKEYBOARDPREF:             0x0045,
 GETSCREENREADER:             0x0046,
 SETSCREENREADER:             0x0047,
 GETANIMATION:                0x0048,
 SETANIMATION:                0x0049,
 GETFONTSMOOTHING:            0x004A,
 SETFONTSMOOTHING:            0x004B,
 SETDRAGWIDTH:                0x004C,
 SETDRAGHEIGHT:               0x004D,
 SETHANDHELD:                 0x004E,
 GETLOWPOWERTIMEOUT:          0x004F,
 GETPOWEROFFTIMEOUT:          0x0050,
 SETLOWPOWERTIMEOUT:          0x0051,
 SETPOWEROFFTIMEOUT:          0x0052,
 GETLOWPOWERACTIVE:           0x0053,
 GETPOWEROFFACTIVE:           0x0054,
 SETLOWPOWERACTIVE:           0x0055,
 SETPOWEROFFACTIVE:           0x0056,
 SETCURSORS:                  0x0057,
 SETICONS:                    0x0058,
 GETDEFAULTINPUTLANG:         0x0059,
 SETDEFAULTINPUTLANG:         0x005A,
 SETLANGTOGGLE:               0x005B,
 GETWINDOWSEXTENSION:         0x005C,
 SETMOUSETRAILS:              0x005D,
 GETMOUSETRAILS:              0x005E,
 SETSCREENSAVERRUNNING:       0x0061,
 GETFILTERKEYS:               0x0032,
 SETFILTERKEYS:               0x0033,
 GETTOGGLEKEYS:               0x0034,
 SETTOGGLEKEYS:               0x0035,
 GETMOUSEKEYS:                0x0036,
 SETMOUSEKEYS:                0x0037,
 GETSHOWSOUNDS:               0x0038,
 SETSHOWSOUNDS:               0x0039,
 GETSTICKYKEYS:               0x003A,
 SETSTICKYKEYS:               0x003B,
 GETACCESSTIMEOUT:            0x003C,
 SETACCESSTIMEOUT:            0x003D,
 GETSERIALKEYS:               0x003E,
 SETSERIALKEYS:               0x003F,
 GETSOUNDSENTRY:              0x0040,
 SETSOUNDSENTRY:              0x0041,
 GETSNAPTODEFBUTTON:          0x005F,
 SETSNAPTODEFBUTTON:          0x0060,
 GETMOUSEHOVERWIDTH:          0x0062,
 SETMOUSEHOVERWIDTH:          0x0063,
 GETMOUSEHOVERHEIGHT:         0x0064,
 SETMOUSEHOVERHEIGHT:         0x0065,
 GETMOUSEHOVERTIME:           0x0066,
 SETMOUSEHOVERTIME:           0x0067,
 GETWHEELSCROLLLINES:         0x0068,
 SETWHEELSCROLLLINES:         0x0069,
 GETMENUSHOWDELAY:            0x006A,
 SETMENUSHOWDELAY:            0x006B,
 GETWHEELSCROLLCHARS:         0x006C,
 SETWHEELSCROLLCHARS:         0x006D,
 GETSHOWIMEUI:                0x006E,
 SETSHOWIMEUI:                0x006F,
 GETMOUSESPEED:               0x0070,
 SETMOUSESPEED:               0x0071,
 GETSCREENSAVERRUNNING:       0x0072,
 GETDESKWALLPAPER:            0x0073,
 GETAUDIODESCRIPTION:         0x0074,
 SETAUDIODESCRIPTION:         0x0075,
 GETSCREENSAVESECURE:         0x0076,
 SETSCREENSAVESECURE:         0x0077,
 GETHUNGAPPTIMEOUT:           0x0078,
 SETHUNGAPPTIMEOUT:           0x0079,
 GETWAITTOKILLTIMEOUT:        0x007A,
 SETWAITTOKILLTIMEOUT:        0x007B,
 GETWAITTOKILLSERVICETIMEOUT: 0x007C,
 SETWAITTOKILLSERVICETIMEOUT: 0x007D,
 GETMOUSEDOCKTHRESHOLD:       0x007E,
 SETMOUSEDOCKTHRESHOLD:       0x007F,
 GETPENDOCKTHRESHOLD:         0x0080,
 SETPENDOCKTHRESHOLD:         0x0081,
 GETWINARRANGING:             0x0082,
 SETWINARRANGING:             0x0083,
 GETMOUSEDRAGOUTTHRESHOLD:    0x0084,
 SETMOUSEDRAGOUTTHRESHOLD:    0x0085,
 GETPENDRAGOUTTHRESHOLD:      0x0086,
 SETPENDRAGOUTTHRESHOLD:      0x0087,
 GETMOUSESIDEMOVETHRESHOLD:   0x0088,
 SETMOUSESIDEMOVETHRESHOLD:   0x0089,
 GETPENSIDEMOVETHRESHOLD:     0x008A,
 SETPENSIDEMOVETHRESHOLD:     0x008B,
 GETDRAGFROMMAXIMIZE:         0x008C,
 SETDRAGFROMMAXIMIZE:         0x008D,
 GETSNAPSIZING:               0x008E,
 SETSNAPSIZING:               0x008F,
 GETDOCKMOVING:               0x0090,
 SETDOCKMOVING:               0x0091,
 GETACTIVEWINDOWTRACKING:     0x1000,
 SETACTIVEWINDOWTRACKING:     0x1001,
 GETMENUANIMATION:            0x1002,
 SETMENUANIMATION:            0x1003,
 GETCOMBOBOXANIMATION:        0x1004,
 SETCOMBOBOXANIMATION:        0x1005,
 GETLISTBOXSMOOTHSCROLLING:   0x1006,
 SETLISTBOXSMOOTHSCROLLING:   0x1007,
 GETGRADIENTCAPTIONS:         0x1008,
 SETGRADIENTCAPTIONS:         0x1009,
 GETKEYBOARDCUES:             0x100A,
 SETKEYBOARDCUES:             0x100B,
 GETACTIVEWNDTRKZORDER:       0x100C,
 SETACTIVEWNDTRKZORDER:       0x100D,
 GETHOTTRACKING:              0x100E,
 SETHOTTRACKING:              0x100F,
 GETMENUFADE:                 0x1012,
 SETMENUFADE:                 0x1013,
 GETSELECTIONFADE:            0x1014,
 SETSELECTIONFADE:            0x1015,
 GETTOOLTIPANIMATION:         0x1016,
 SETTOOLTIPANIMATION:         0x1017,
 GETTOOLTIPFADE:              0x1018,
 SETTOOLTIPFADE:              0x1019,
 GETCURSORSHADOW:             0x101A,
 SETCURSORSHADOW:             0x101B,
 GETMOUSESONAR:               0x101C,
 SETMOUSESONAR:               0x101D,
 GETMOUSECLICKLOCK:           0x101E,
 SETMOUSECLICKLOCK:           0x101F,
 GETMOUSEVANISH:              0x1020,
 SETMOUSEVANISH:              0x1021,
 GETFLATMENU:                 0x1022,
 SETFLATMENU:                 0x1023,
 GETDROPSHADOW:               0x1024,
 SETDROPSHADOW:               0x1025,
 GETBLOCKSENDINPUTRESETS:     0x1026,
 SETBLOCKSENDINPUTRESETS:     0x1027,
 GETUIEFFECTS:                0x103E,
 SETUIEFFECTS:                0x103F,
 GETDISABLEOVERLAPPEDCONTENT: 0x1040,
 SETDISABLEOVERLAPPEDCONTENT: 0x1041,
 GETCLIENTAREAANIMATION:      0x1042,
 SETCLIENTAREAANIMATION:      0x1043,
 GETCLEARTYPE:                0x1048,
 SETCLEARTYPE:                0x1049,
 GETSPEECHRECOGNITION:        0x104A,
 SETSPEECHRECOGNITION:        0x104B,
 GETFOREGROUNDLOCKTIMEOUT:    0x2000,
 SETFOREGROUNDLOCKTIMEOUT:    0x2001,
 GETACTIVEWNDTRKTIMEOUT:      0x2002,
 SETACTIVEWNDTRKTIMEOUT:      0x2003,
 GETFOREGROUNDFLASHCOUNT:     0x2004,
 SETFOREGROUNDFLASHCOUNT:     0x2005,
 GETCARETWIDTH:               0x2006,
 SETCARETWIDTH:               0x2007,
 GETMOUSECLICKLOCKTIME:       0x2008,
 SETMOUSECLICKLOCKTIME:       0x2009,
 GETFONTSMOOTHINGTYPE:        0x200A,
 SETFONTSMOOTHINGTYPE:        0x200B,
 GETFONTSMOOTHINGCONTRAST:    0x200C,
 SETFONTSMOOTHINGCONTRAST:    0x200D,
 GETFOCUSBORDERWIDTH:         0x200E,
 SETFOCUSBORDERWIDTH:         0x200F,
 GETFOCUSBORDERHEIGHT:        0x2010,
 SETFOCUSBORDERHEIGHT:        0x2011,
 GETFONTSMOOTHINGORIENTATION: 0x2012,
 SETFONTSMOOTHINGORIENTATION: 0x2013,
 GETMINIMUMHITRADIUS:         0x2014,
 SETMINIMUMHITRADIUS:         0x2015,
 GETMESSAGEDURATION:          0x2016,
 SETMESSAGEDURATION:          0x2017,
});



var RECT = STRUCT('RECT', {
  left: long,
  top: long,
  right: long,
  bottom: long
});
var LPRECT = TYPEDEF('LPRECT', PTR(RECT));

var POINT = STRUCT('POINT', {
 x: long,
 y: long
});
var LPPOINT = TYPEDEF('LPPOINT', PTR(POINT));

var UUID = STRUCT('UUID', {
 Data1: ulong,
 Data2: ushort,
 Data3: ushort,
 Data4: ARRAY(BYTE, 8)
});

var SIZE = STRUCT('SIZEL', {
 cx: LONG,
 cy: LONG
});

var PSIZE = TYPEDEF('PSIZE', PTR(SIZE));

var GUID = TYPEDEF('GUID', UUID);

var MONITORINFO = STRUCT('MONITORINFO', {
 cbSize: DWORD,
 rcMonitor: RECT,
 rcWork: RECT,
 dwFlags: DWORD
});

var MONITORINFOEX = STRUCT('MONITORINFOEX', {
 szDevice: ARRAY(CHAR, CCHDEVICENAME)
});

var MONITORINFOEXW = STRUCT('MONITORINFOEXW', {
 szDevice: ARRAY(WCHAR, CCHDEVICENAME)
});

var GUITHREADINFO = STRUCT('GUITHREADINFO', {
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

var CURSORINFO = STRUCT('CURSORINFO', {
 cbSize: DWORD,
 flags: DWORD,
 hCursor: HCURSOR,
 ptScreenPos: POINT
});

var WINDOWINFO = STRUCT('WINDOWINFO', {
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

var TITLEBARINFO = STRUCT('TITLEBARINFO', {
 cbSize: DWORD,
 rcTitleBar: RECT,
 state: ulong,
 reserved: ulong,
 minState: ulong,
 maxState: ulong,
 helpState: ulong,
 closeState: ulong
});

var TITLEBARINFOEX = STRUCT('TITLEBARINFOEX', {
 cbSize: DWORD,
 rcTitleBar: RECT,
 state: ulong,
 reserved: ulong,
 minState: ulong,
 maxState: ulong,
 helpState: ulong,
 closeState: ulong,
 rect: RECT,
 reserved: RECT,
 minRect: RECT,
 maxRect: RECT,
 helpRect: RECT,
 closeRect: RECT,
});

var MENUBARINFO = STRUCT('MENUBARINFO', {
 cbSize: DWORD,
 rcBar: RECT,
 hMenu: HMENU,
 hwndMenu: HWND,
 fBarFocused: BOOL,
 fFocused: BOOL
});

var SCROLLBARINFO = STRUCT('SCROLLBARINFO', {
 cbSize: DWORD,
 rcScrollBar: RECT,
 dxyLineButton: int,
 xyThumbTop: int,
 xyThumbBottom: int,
 reserved: int,
 state: ulong,
 reserved: ulong,
 minState: ulong,
 maxState: ulong,
 helpState: ulong,
 closeState: ulong
});

var COMBOBOXINFO = STRUCT('COMBOBOXINFO', {
 cbSize: DWORD,
 rcItem: RECT,
 rcButton: RECT,
 stateButton: DWORD,
 hwndCombo: HWND,
 hwndItem: HWND,
 hwndList: HWND
});

var ALTTABINFO = STRUCT('ALTTABINFO', {
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

var FILETIME = STRUCT('FILETIME', {
  low: DWORD,
  high: DWORD
});
var PFILETIME = TYPEDEF('PFILETIME', PTR(FILETIME));

var MSG = STRUCT('MSG', {
 hwnd: HWND,
 message: UINT,
 wParam: WPARAM,
 lParam: LPARAM,
 time: DWORD,
 pt: POINT
});

var LPMSG = TYPEDEF('LPMSG', PTR(MSG));

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
var LPSECATTRS = TYPEDEF('LPSECATTRS', PTR(SECATTRS));


var WNDENUMPROC = CALLBACK('WNDENUMPROC', int, [HWND, VOIDPTR]);
var PQUERYHANDLER = CALLBACK('PQUERYHANDLER', ulong, [VOIDPTR, PTR(val_context), ulong, VOIDPTR, LPDWORD, ulong]);
var SENDASYNCPROC = CALLBACK('SENDASYNCPROC', VOID, [HWND, uint, ulong, long]);
var HOOKPROC = CALLBACK('HOOKPROC', LRESULT, [int, WPARAM, LPARAM]);
var WNDPROC = CALLBACK('WNDPROC', LRESULT, [HWND, uint, uint, long]);
var PFNCANSHAREFOLDERW = CALLBACK('PFNCANSHAREFOLDERW', long, [LPCWSTR]);
var PFNSHOWSHAREFOLDERUIW = CALLBACK('PFNSHOWSHAREFOLDERUIW', long, [HWND, PTR(ushort)]);


var REG_PROVIDER = STRUCT('REG_PROVIDER', {
  R0_1val     : PQUERYHANDLER,
  R0_allvals  : PQUERYHANDLER,
  R3_1val     : PQUERYHANDLER,
  R3_allvals  : PQUERYHANDLER,
  flags       : DWORD,
  key_context : VOIDPTR
});


var DRAGINFO = STRUCT('DRAGINFO', {
 uSize: UINT,
 pt: POINT,
 fNC: BOOL,
 lpFileList: LPSTR,
 grfKeyState: DWORD
});

var DRAGINFOW = STRUCT('DRAGINFOW', {
 uSize: UINT,
 pt: POINT,
 fNC: BOOL,
 lpFileList: LPWSTR,
 grfKeyState: DWORD
});



var APPBARDATA = STRUCT('APPBARDATA', {
 cbSize: DWORD,
 hWnd: HWND,
 uCallbackMessage: UINT,
 uEdge: UINT,
 rc: RECT,F
 lParam: LPARAM
});

var SHFILEOPSTRUCTA = STRUCT('SHFILEOPSTRUCTA', {
 hwnd: HWND,
 wFunc: UINT,
 pFrom: string,
 pTo: string,
 fFlags: FILEOP_FLAGS,
 fAnyOperationsAborted: BOOL,
 hNameMappings: LPVOID,
 lpszProgressTitle: string
});

var SHFILEOPSTRUCTW = STRUCT('SHFILEOPSTRUCTW', {
 hwnd: HWND,
 wFunc: UINT,
 pFrom: LPCWSTR,
 pTo: LPCWSTR,
 fFlags: FILEOP_FLAGS,
 fAnyOperationsAborted: BOOL,
 hNameMappings: LPVOID,
 lpszProgressTitle: LPCWSTR
});

var SHNAMEMAPPING = STRUCT('SHNAMEMAPPING', {
 pszOldPath: LPSTR,
 pszNewPath: LPSTR,
 cchOldPath: int,
 cchNewPath: int
});

var SHNAMEMAPPINGW = STRUCT('SHNAMEMAPPINGW', {
 pszOldPath: LPWSTR,
 pszNewPath: LPWSTR,
 cchOldPath: int,
 cchNewPath: int
});

var SHELLEXECUTEINFOA = STRUCT('SHELLEXECUTEINFOA', {
 cbSize: DWORD,
 fMask: ULONG,
 hwnd: HWND,
 lpVerb: string,
 lpFile: string,
 lpParameters: string,
 lpDirectory: string,
 nShow: int,
 hInstApp: HINSTANCE,
 lpIDList: VOIDPTR,
 lpClass: string,
 hkeyClass: HKEY,
 dwHotKey: DWORD,
 hProcess: HANDLE
});

var SHELLEXECUTEINFOW = STRUCT('SHELLEXECUTEINFOW', {
 cbSize: DWORD,
 fMask: ULONG,
 hwnd: HWND,
 lpVerb: LPCWSTR,
 lpFile: LPCWSTR,
 lpParameters: LPCWSTR,
 lpDirectory: LPCWSTR,
 nShow: int,
 hInstApp: HINSTANCE,
 lpIDList: VOIDPTR,
 lpClass: LPCWSTR,
 hkeyClass: HKEY,
 dwHotKey: DWORD,
 hProcess: HANDLE
});

var PROCESS_INFORMATION = STRUCT('PROCESS_INFORMATION', {
 hProcess: HANDLE,
 hThread: HANDLE,
 dwProcessId: DWORD,
 dwThreadId: DWORD
});

var STARTUPINFOA = STRUCT('STARTUPINFOA', {
 cb: DWORD,
 lpReserved: LPSTR,
 lpDesktop: LPSTR,
 lpTitle: LPSTR,
 dwX: DWORD,
 dwY: DWORD,
 dwXSize: DWORD,
 dwYSize: DWORD,
 dwXCountChars: DWORD,
 dwYCountChars: DWORD,
 dwFillAttribute: DWORD,
 dwFlags: DWORD,
 wShowWindow: WORD,
 cbReserved2: WORD,
 lpReserved2: LPBYTE,
 hStdInput: HANDLE,
 hStdOutput: HANDLE,
 hStdError: HANDLE
});

var STARTUPINFOW = STRUCT('STARTUPINFOW', {
 cb: DWORD,
 lpReserved: LPWSTR,
 lpDesktop: LPWSTR,
 lpTitle: LPWSTR,
 dwX: DWORD,
 dwY: DWORD,
 dwXSize: DWORD,
 dwYSize: DWORD,
 dwXCountChars: DWORD,
 dwYCountChars: DWORD,
 dwFillAttribute: DWORD,
 dwFlags: DWORD,
 wShowWindow: WORD,
 cbReserved2: WORD,
 lpReserved2: LPBYTE,
 hStdInput: HANDLE,
 hStdOutput: HANDLE,
 hStdError: HANDLE
});

var KBDLLHOOKSTRUCT = STRUCT('KBDLLHOOKSTRUCT', {
 vkCode: DWORD,
 scanCode: DWORD,
 flags: DWORD,
 time: DWORD,
 dwExtraInfo: ULONG_PTR
});

var MSLLHOOKSTRUCT = STRUCT('MSLLHOOKSTRUCT', {
 pt: POINT,
 mouseData: DWORD,
 flags: DWORD,
 time: DWORD,
 dwExtraInfo: ULONG_PTR
});

var STARTUPINFOEXA = STRUCT('STARTUPINFOEXA', {
 StartupInfo: STARTUPINFOA,
 lpAttributeList: LPPROC_THREAD_ATTRIBUTE_LIST
});

var STARTUPINFOEXW = STRUCT('STARTUPINFOEXW', {
 StartupInfo: STARTUPINFOW,
 lpAttributeList: LPPROC_THREAD_ATTRIBUTE_LIST
});

var SECURITY_ATTRIBUTES = STRUCT('SECURITY_ATTRIBUTES', {
 nLength: DWORD,
 lpSecurityDescriptor: LPVOID,
 bInheritHandle: BOOL
});

var LPSECURITY_ATTRIBUTES = TYPEDEF('SECURITY_ATTRIBUTES', PTR(SECURITY_ATTRIBUTES));


var SHCREATEPROCESSINFOW = STRUCT('SHCREATEPROCESSINFOW', {
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
 lpStartupInfo: PTR(STARTUPINFOW),
 lpProcessInformation: PTR(PROCESS_INFORMATION)
});

var ASSOCIATIONELEMENT = STRUCT('ASSOCIATIONELEMENT', {
 ac: DWORD,
 hkClass: HKEY,
 pszClass: PCWSTR
});

var SHQUERYRBINFO = STRUCT('SHQUERYRBINFO', {
 cbSize: DWORD,
 i64Size: longlong,
 i64NumItems: longlong
});

var NOTIFYICONDATAA = STRUCT('NOTIFYICONDATAA', {
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

var NOTIFYICONDATAW = STRUCT('NOTIFYICONDATAW', {
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

var NOTIFYICONIDENTIFIER = STRUCT('NOTIFYICONIDENTIFIER', {
 cbSize: DWORD,
 hWnd: HWND,
 uID: UINT,
 guidItem: GUID
});

var SHFILEINFO = STRUCT('SHFILEINFO', {
 hIcon: HICON,
 iIcon: int,
 dwAttributes: DWORD,
 szDisplayName: ARRAY(CHAR, MAX_PATH),
 szTypeName: ARRAY(CHAR, 80)
});

var SHFILEINFOW = STRUCT('SHFILEINFOW', {
 hIcon: HICON,
 iIcon: int,
 dwAttributes: DWORD,
 szDisplayName: ARRAY(WCHAR, MAX_PATH),
 szTypeName: ARRAY(WCHAR, 80)
});

var SHSTOCKICONINFO = STRUCT('SHSTOCKICONINFO', {
 cbSize: DWORD,
 hIcon: HICON,
 iSysImageIndex: int,
 iIcon: int,
 szPath: ARRAY(WCHAR, MAX_PATH)
});

var OPEN_PRINTER_PROPS_INFOA = STRUCT('OPEN_PRINTER_PROPS_INFOA', {
 dwSize: DWORD,
 pszSheetName: LPSTR,
 uSheetIndex: UINT,
 dwFlags: DWORD,
 bModal: BOOL
});

var OPEN_PRINTER_PROPS_INFOW = STRUCT('OPEN_PRINTER_PROPS_INFOW', {
 dwSize: DWORD,
 pszSheetName: LPWSTR,
 uSheetIndex: UINT,
 dwFlags: DWORD,
 bModal: BOOL
});

var NC_ADDRESS = STRUCT('NC_ADDRESS', {
 pAddrInfo: VOIDPTR,
 PortNumber: USHORT,
 PrefixLength: BYTE
});

var DWMWINDOWATTRIBUTE = ENUM('DWMWINDOWATTRIBUTE', {
 DwmwaNcrenderingEnabled: 1,
 DwmwaNcrenderingPolicy: 1,
 DwmwaTransitionsForcedisabled: 2,
 DwmwaAllowNcpaint: 3,
 DwmwaCaptionButtonBounds: 4,
 DwmwaNonclientRtlLayout: 5,
 DwmwaForceIconicRepresentation: 6,
 DwmwaFlip3dPolicy: 7,
 DwmwaExtendedFrameBounds: 8,
 DwmwaHasIconicBitmap: 9,
 DwmwaDisallowPeek: 10,
 DwmwaExcludedFromPeek: 11,
 DwmwaLast: 12
});

var DWMNCRENDERINGPOLICY = ENUM('DWMNCRENDERINGPOLICY', {
 DwmncrpUsewindowstyle: 0,
 DwmncrpDisabled: 1,
 DwmncrpEnabled: 2,
 DwmncrpLast: 3
});

var DWMFLIP3DWINDOWPOLICY = ENUM('DWMFLIP3DWINDOWPOLICY', {
 Default: 0,
 Excludebelow: 1,
 Excludeabove: 2,
 Last: 3
});

var DWM_SOURCE_FRAME_SAMPLING = ENUM('DWM_SOURCE_FRAME_SAMPLING', {
 Point: 0,
 Coverage: 1,
 Last: 2
});

var DWM_BLURBEHIND = STRUCT('DWM_BLURBEHIND', {
 dwFlags: DWORD,
 fEnable: BOOL,
 hRgnBlur: PTR(HRGN),
 fTransitionOnMaximized: BOOL
});

var DWM_THUMBNAIL_PROPERTIES = STRUCT('DWM_THUMBNAIL_PROPERTIES', {
 dwFlags: DWORD,
 rcDestination: RECT,
 rcSource: RECT,
 opacity: BYTE,
 fVisible: BOOL,
 fSourceClientAreaOnly: BOOL
});

var UNSIGNED_RATIO = STRUCT('UNSIGNED_RATIO', {
 uiNumerator: UINT32,
 uiDenominator: UINT32
});

var DWM_TIMING_INFO = STRUCT('DWM_TIMING_INFO', {
 cbSize: UINT32,
 rateRefresh: UNSIGNED_RATIO,
 qpcRefreshPeriod: QPC_TIME,
 rateCompose: UNSIGNED_RATIO,
 qpcVBlank: QPC_TIME,
 cRefresh: DWM_FRAME_COUNT,
 cDXRefresh: UINT,
 qpcCompose: QPC_TIME,
 cFrame: DWM_FRAME_COUNT,
 cDXPresent: UINT,
 cRefreshFrame: DWM_FRAME_COUNT,
 cFrameSubmitted: DWM_FRAME_COUNT,
 cDXPresentSubmitted: UINT,
 cFrameConfirmed: DWM_FRAME_COUNT,
 cDXPresentConfirmed: UINT,
 cRefreshConfirmed: DWM_FRAME_COUNT,
 cDXRefreshConfirmed: UINT,
 cFramesLate: DWM_FRAME_COUNT,
 cFramesOutstanding: UINT,
 cFrameDisplayed: DWM_FRAME_COUNT,
 qpcFrameDisplayed: QPC_TIME,
 cRefreshFrameDisplayed: DWM_FRAME_COUNT,
 cFrameComplete: DWM_FRAME_COUNT,
 qpcFrameComplete: QPC_TIME,
 cFramePending: DWM_FRAME_COUNT,
 qpcFramePending: QPC_TIME,
 cFramesDisplayed: DWM_FRAME_COUNT,
 cFramesComplete: DWM_FRAME_COUNT,
 cFramesPending: DWM_FRAME_COUNT,
 cFramesAvailable: DWM_FRAME_COUNT,
 cFramesDropped: DWM_FRAME_COUNT,
 cFramesMissed: DWM_FRAME_COUNT,
 cRefreshNextDisplayed: DWM_FRAME_COUNT,
 cRefreshNextPresented: DWM_FRAME_COUNT,
 cRefreshesDisplayed: DWM_FRAME_COUNT,
 cRefreshesPresented: DWM_FRAME_COUNT,
 cRefreshStarted: DWM_FRAME_COUNT,
 cPixelsReceived: ULONGLONG,
 cPixelsDrawn: ULONGLONG,
 cBuffersEmpty: DWM_FRAME_COUNT
});

var DWM_PRESENT_PARAMETERS = STRUCT('DWM_PRESENT_PARAMETERS', {
 cbSize: UINT32,
 fQueue: BOOL,
 cRefreshStart: DWM_FRAME_COUNT,
 cBuffer: UINT,
 fUseSourceRate: BOOL,
 rateSource: UNSIGNED_RATIO,
 cRefreshesPerFrame: UINT,
 eSampling: DWORD
});

var MIL_MATRIX3X2D = STRUCT('MIL_MATRIX3X2D', {
 S_11: DOUBLE,
 S_12: DOUBLE,
 S_21: DOUBLE,
 S_22: DOUBLE,
 DX: DOUBLE,
 DY: DOUBLE
});

var MARGINS = STRUCT('MARGINS', {
  left: int,
  right: int,
  top: int,
  bottom: int,
});


var WNDCLASSEXA = STRUCT('WNDCLASSEXA', {
 cbSize: UINT,
 style: UINT,
 lpfnWndProc: WNDPROC,
 cbClsExtra: int,
 cbWndExtra: int,
 hInstance: HINSTANCE,
 hIcon: HICON,
 hCursor: HCURSOR,
 hbrBackground: HBRUSH,
 lpszMenuName: string,
 lpszClassName: string,
 hIconSm: HICON
});

var WNDCLASSEXW = STRUCT('WNDCLASSEXW', {
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

var WNDCLASSA = STRUCT('WNDCLASSA', {
 style: UINT,
 lpfnWndProc: WNDPROC,
 cbClsExtra: int,
 cbWndExtra: int,
 hInstance: HINSTANCE,
 hIcon: HICON,
 hCursor: HCURSOR,
 hbrBackground: HBRUSH,
 lpszMenuName: string,
 lpszClassName: string
});

var WNDCLASSW = STRUCT('WNDCLASSW', {
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

var HRAWINPUT = TYPEDEF('HRAWINPUT', HANDLE);


var RI_KEY = ENUM('RI_KEY', {
  RELEASED: 1,
  LEFT    : 2,
  RIGHT   : 4,
});


var RIDEV = ENUM('RIDEV', {
  APPKEYS     : 0x0400,
  CAPTUREMOUSE: 0x0200,
  DEVNOTIFY   : 0x2000,
  EXCLUDE     : 0x0010,
  EXINPUTSINK : 0x1000,
  INPUTSINK   : 0x0100,
  NOHOTKEYS   : 0x0200,
  NOLEGACY    : 0x0030,
  PAGEONLY    : 0x0020,
  REMOVE      : 0x0001,
});
var RI_MOUSE_FLAGS = ENUM('RI_MOUSE_FLAGS', {
  MOVE_RELATIVE: 0,
  MOVE_ABSOLUTE: 1,
  VIRTUAL_DESKTOP: 2,
  ATTRIBUTES_CHANGED: 4,
});


var RI_BUTTON_FLAGS = ENUM('RI_BUTTON_FLAGS', {
  DOWN1 : 0x0001,
  UP1   : 0x0002,
  DOWN2 : 0x0004,
  UP2   : 0x0008,
  DOWN3 : 0x0010,
  UP3   : 0x0020,
  DOWN4 : 0x0040,
  UP4   : 0x0080,
  DOWN5 : 0x0100,
  UP5   : 0x0200,
  WHEEL : 0x0400,
  HWHEEL: 0x0800
});


var RAWINPUTHEADER = STRUCT('RAWINPUTHEADER', {
 dwType: DWORD,
 dwSize: DWORD,
 hDevice: HANDLE,
 wParam: WPARAM
});

var RAWMOUSE = STRUCT('RAWMOUSE', {
 usFlags: USHORT,
 usButtonFlags: USHORT,
 usButtonData: USHORT,
 lLastX: LONG,
 lLastY: LONG,
 ulExtraInformation: ULONG
});


var RAWKEYBOARD = STRUCT('RAWKEYBOARD', {
 MakeCode: USHORT,
 Flags: USHORT,
 Reserved: USHORT,
 VKey: USHORT,
 Message: UINT,
 ExtraInformation: ULONG
});

var RAWHID = STRUCT('RAWHID', {
 dwSizeHid: DWORD,
 dwCount: DWORD,
 bRawData: ARRAY(BYTE, 1)
});
// console.log(RAWINPUTHEADER)

// var RAWINPUT = new Type({
//   name: 'RAWINPUT',
//   size: 16,
//   indirection: 1,
//   get: function (buffer, offset) {
//     var header = RAWINPUTHEADER.get(buffer, offset);
//     var TYPE = RAWINPUT.subtypes[header.dwType];
//     buffer = buffer.reinterpret(16 + TYPE.size);
//     return TYPE.get(buffer, 16);
//   },
//   set: RAWINPUTHEADER.set
// });

// RAWINPUT.subtypes = [RAWMOUSE, RAWKEYBOARD, RAWHID];



var RID_DEVICE_INFO_MOUSE = STRUCT('RID_DEVICE_INFO_MOUSE', {
 dwId: DWORD,
 dwNumberOfButtons: DWORD,
 dwSampleRate: DWORD,
 fHasHorizontalWheel: BOOL
});

var RID_DEVICE_INFO_KEYBOARD = STRUCT('RID_DEVICE_INFO_KEYBOARD', {
 dwType: DWORD,
 dwSubType: DWORD,
 dwKeyboardMode: DWORD,
 dwNumberOfFunctionKeys: DWORD,
 dwNumberOfIndicators: DWORD,
 dwNumberOfKeysTotal: DWORD
});

var RID_DEVICE_INFO_HID = STRUCT('RID_DEVICE_INFO_HID', {
 dwVendorId: DWORD,
 dwProductId: DWORD,
 dwVersionNumber: DWORD,
 usUsagePage: USHORT,
 usUsage: USHORT
});

var RID_DEVICE_INFO = STRUCT('RID_DEVICE_INFO', {
 cbSize: DWORD,
 dwType: DWORD
});

RID_DEVICE_INFO.types = [RID_DEVICE_INFO_MOUSE, RID_DEVICE_INFO_KEYBOARD, RID_DEVICE_INFO_HID];

var RAWINPUTDEVICE = STRUCT('RAWINPUTDEVICE', {
 usUsagePage: USHORT,
 usUsage: USHORT,
 dwFlags: DWORD,
 hwndTarget: HWND
});

var RAWINPUTDEVICELIST = STRUCT('RAWINPUTDEVICELIST', {
 hDevice: HANDLE,
 dwType: DWORD
});



var MONITORENUMPROC = CALLBACK('MONITORENUMPROC', int, [HMONITOR, HDC, LPRECT, long]);


LIBRARY('gdi32', {
  GetStockObject: [HGDIOBJ, { i: int }]
});

LIBRARY('kernel32', {
  LoadLibraryA:       [HMODULE, { lpLibFileName: string } ],
  LoadLibraryW:       [HMODULE, { lpLibFileName: LPCWSTR } ],
  LoadLibraryExA:     [HMODULE, { lpLibFileName: string, hFile: HANDLE, dwFlags: DWORD } ],
  LoadLibraryExW:     [HMODULE, { lpLibFileName: LPCWSTR, hFile: HANDLE, dwFlags: DWORD } ],
  GetModuleFileNameA: [DWORD,   { hModule: HMODULE, lpFilename: LPSTR, nSize: DWORD } ],
  GetModuleFileNameW: [DWORD,   { hModule: HMODULE, lpFilename: LPWSTR, nSize: DWORD } ],
  GetModuleHandleA:   [HMODULE, { lpModuleName: string } ],
  GetModuleHandleW:   [HMODULE, { lpModuleName: LPCWSTR } ],
  GetModuleHandleExA: [BOOL,    { dwFlags: DWORD, lpModuleName: string, phModule: PTR(VOIDPTR) } ],
  GetModuleHandleExW: [BOOL,    { dwFlags: DWORD, lpModuleName: LPCWSTR, phModule: PTR(VOIDPTR) } ],
  GetFileAttributesA: [DWORD,   { lpFileName: string }],
  GetFileAttributesW: [DWORD,   { lpFileName: LPCWSTR }],
  SetFileAttributesA: [BOOL,    { lpFileName: string, dwFileAttributes: DWORD }],
  SetFileAttributesW: [BOOL,    { lpFileName: LPCWSTR, dwFileAttributes: DWORD }],
  GetLastError:       [DWORD,   { }],
  Sleep:              [VOID,    { dwMilliseconds: DWORD }],
});

LIBRARY('user32', {
 keybd_event:                [VOID,    { bVk: BYTE, bScan: BYTE, dwFlags: DWORD, dwExtraInfo: ULONG_PTR }],
 mouse_event:                [VOID,    { dwFlags: DWORD, dx: DWORD, dy: DWORD, dwData: DWORD, dwExtraInfo: ULONG_PTR }],
 GetKeyState:                [SHORT,   { nVirtKey: int }],
 AdjustWindowRect:           [BOOL,    { lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL }],
 AdjustWindowRectEx:         [BOOL,    { lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL, dwExStyle: DWORD }],
 AllowSetForegroundWindow:   [BOOL,    { dwProcessId: DWORD }],
 AnimateWindow:              [BOOL,    { hWnd: HWND, dwTime: DWORD, dwFlags: DWORD }],
 AttachThreadInput:          [ BOOL,   { idAttach: DWORD, idAttachTo: DWORD, fAttach: BOOL } ],
 CallNextHookEx:             [LRESULT, { hhk: HHOOK, nCode: int, wParam: WPARAM, lParam: LPARAM } ],
 CallWindowProcA:            [LRESULT, { lpPrevWndFunc: VOIDPTR, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM }],
 CallWindowProcW:            [LRESULT, { lpPrevWndFunc: VOIDPTR, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM }],
 CreateWindowExA:            [HWND,    { dwExStyle: DWORD, lpClassName: string, lpWindowName: string, dwStyle: DWORD, X: uint32, Y: uint32, nWidth: uint32, nHeight: uint32, hWndParent: uint32, hMenu: uint32, hInstance: HINSTANCE, lpParam: LPVOID } ],
 CreateWindowExW:            [HWND,    { dwExStyle: DWORD, lpClassName: LPCWSTR, lpWindowName: LPCWSTR, dwStyle: DWORD, X: uint32, Y: uint32, nWidth: uint32, nHeight: uint32, hWndParent: uint32, hMenu: uint32, hInstance: HINSTANCE, lpParam: LPVOID } ],
 DefRawInputProc:             [LRESULT, { paRawInput: PTR(VOIDPTR), nInput: INT, cbSizeHeader: UINT } ],
 DefWindowProcA:             [LRESULT, { hWnd: HWND, message: UINT, wParam: WPARAM, lParam: LPARAM }],
 DefWindowProcW:             [LRESULT, { hWnd: HWND, message: UINT, wParam: WPARAM, lParam: LPARAM }],
 DestroyWindow:              [BOOL,    { hWnd: HWND }],
 EnumChildWindows:           [BOOL,    { hWndParent: HWND, lpEnumFunc: WNDENUMPROC, lParam: LPARAM }],
 EnumThreadWindows:          [BOOL,    { dwThreadId: DWORD, lpfn: WNDENUMPROC, lParam: LPARAM }],
 EnumWindows:                [bool,    { enumFunc: WNDENUMPROC, lparam: LPARAM }],
 FindWindowA:                [HWND,    { lpClassName: string, lpWindowName: string }],
 FindWindowExA:              [HWND,    { hWndParent: HWND, hWndChildAfter: HWND, lpszClass: string, lpszWindow: string }],
 FindWindowExW:              [HWND,    { hWndParent: HWND, hWndChildAfter: HWND, lpszClass: LPCWSTR, lpszWindow: LPCWSTR }],
 FindWindowW:                [HWND,    { lpClassName: LPCWSTR, lpWindowName: LPCWSTR }],
 GetAncestor:                [HWND,    { hwnd: HWND, gaFlags: uint }],
 GetCapture:                 [HWND,    { } ],
 GetClassLongA:              [DWORD,   { hWnd: HWND, nIndex: int }],
 GetClassLongW:              [DWORD,   { hWnd: HWND, nIndex: int }],
 GetClassNameA:              [VOID,    { hWnd: HWND, lpClassName: LPSTR, nMaxCount: int }],
 GetClassNameW:              [VOID,    { hWnd: HWND, lpClassName: LPWSTR, nMaxCount: int }],
 GetClientRect:              [BOOL,    { hWnd: HWND, lpRect: LPRECT }],
 GetCursor:                   [HCURSOR, { }],
 GetDesktopWindow:           [HWND,    { }],
 GetForegroundWindow:        [HWND,    { }],
 GetInputState:              [BOOL,    { } ],
 GetLastActivePopup:         [HWND,    { hWnd: HWND }],
 GetLayeredWindowAttributes: [BOOL,    { hwnd: HWND, pcrKey: PTR(COLORREF), pbAlpha: PTR(uchar), pdwFlags: PTR(ulong) }],
 GetMonitorInfoA:            [BOOL,    { hMonitor: HMONITOR, lpmi: PTR(MONITORINFO) } ],
 GetMonitorInfoW:            [BOOL,    { hMonitor: HMONITOR, lpmi: PTR(MONITORINFO) } ],
 GetParent:                  [HWND,    { hWnd: HWND }],
 GetQueueStatus:             [DWORD,   { flags: UINT } ],
 GetRawInputBuffer:           [UINT,    { pData: VOIDPTR/*PTR(RAWINPUT)*/, pcbSize: PUINT, cbSizeHeader: UINT } ],
 GetRawInputData:             [UINT,    { hRawInput: VOIDPTR/*HRAWINPUT*/, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT, cbSizeHeader: UINT } ],
 GetRawInputDeviceInfoA:      [UINT,    { hDevice: HANDLE, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT } ],
 GetRawInputDeviceInfoW:      [UINT,    { hDevice: HANDLE, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT } ],
 GetRawInputDeviceList:       [UINT,    { pRawInputDeviceList: PTR(RAWINPUTDEVICELIST), puiNumDevices: PTR(UINT), cbSize: UINT } ],
 GetRegisteredRawInputDevices:[UINT,    { pRawInputDevices: PTR(RAWINPUTDEVICE), puiNumDevices: PUINT, cbSize: UINT } ],
 GetShellWindow:             [HWND,    { }],
 DestroyWindow:              [BOOL,    { hWnd: HWND }],
 UpdateWindow:               [BOOL,    { hWnd: HWND }],
 SetActiveWindow:            [HWND,    { hWnd: HWND }],
 GetForegroundWindow:        [HWND,    { }],
 PaintDesktop:               [BOOL,    { hdc: HDC }],
 WindowFromDC:               [HWND,    { hDC: HDC }],
 GetTitleBarInfo:            [bool,    { hwnd: HWND, pti: PTR(TITLEBARINFO) }],
 GetTopWindow:               [HWND,    { hWnd: HWND }],
 GetWindow:                  [HWND,    { hWnd: HWND, uCmd: UINT }],
 GetWindowLongA:             [LONG,    { hWnd: HWND, nIndex: int }],
 GetWindowLongW:             [LONG,    { hWnd: HWND, nIndex: int }],
 GetWindowPlacement:         [BOOL,    { hWnd: HWND, lpwndpl: PTR(uint) }],
 GetWindowRect:              [BOOL,    { hWnd: HWND, lpRect: LPRECT }],
 GetWindowTextA:             [VOID,    { hWnd: HWND, lpString: LPSTR, nMaxCount: int }],
 GetWindowTextW:             [VOID,    { hWnd: HWND, lpString: LPWSTR, nMaxCount: int }],
 InSendMessage:              [BOOL,    { }],
 InSendMessageEx:            [DWORD,   { lpReserved: LPVOID }],
 InternalGetWindowText:      [VOID,    { hWnd: HWND, pString: LPWSTR, cchMaxCount: int } ],
 IsIconic:                   [BOOL,    { hWnd: HWND }],
 IsWindowVisible:            [BOOL,    { hWnd: HWND }],
 LoadCursorA:                 [HCURSOR, { hInstance: HINSTANCE, lpCursorName: UINT }],
 LoadCursorW:                 [HCURSOR, { hInstance: HINSTANCE, lpCursorName: UINT }],
 LoadIconA:                   [HICON,   { hInstance: HINSTANCE, lpIconName: UINT }],
 LoadIconW:                   [HICON,   { hInstance: HINSTANCE, lpIconName: UINT }],
 MonitorFromPoint:           [HMONITOR,{ pt: POINT, dwFlags: DWORD } ],
 MonitorFromRect:            [HMONITOR,{ lprc: LPRECT, dwFlags: DWORD } ],
 MonitorFromWindow:          [HMONITOR,{ hwnd: HWND, dwFlags: DWORD } ],
 MoveWindow:                 [BOOL,    { hWnd: HWND, X: int, Y: int, nWidth: int, nHeight: int, bRepaint: BOOL }],
 PeekMessageA:                [bool,    { lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT, wRemoveMsg: UINT } ],
 PeekMessageW:                [bool,    { lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT, wRemoveMsg: UINT } ],
 PostMessageA:               [BOOL,    { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM }],
 PostMessageW:               [BOOL,    { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM }],
 PostThreadMessageA:         [BOOL,    { idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM }],
 PostThreadMessageW:         [BOOL,    { idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM }],
 RegisterClassA:             [ATOM,    { lpWndClass:  PTR(WNDCLASSA) } ],
 RegisterClassW:             [ATOM,    { lpWndClass:  PTR(WNDCLASSW) } ],
 RegisterClassExA:           [ATOM,    { lpcx: PTR(WNDCLASSEXA) } ],
 RegisterClassExW:           [ATOM,    { lpwcx: PTR(WNDCLASSEXW) } ],
 RegisterClassW:             [ATOM,    { lpWndClass: PTR(uint) } ],
 RegisterRawInputDevices:     [BOOL,    { pRawInputDevices: PTR(PTR(RAWINPUTDEVICE)), uiNumDevices: UINT, cbSize: UINT } ],
 ReleaseCapture:             [BOOL,    { } ],
 ReplyMessage:               [BOOL,    { lResult: LRESULT }],
 SendMessageA:               [LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM }],
 SendMessageCallbackA:       [BOOL,    { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: SENDASYNCPROC, dwData: ULONG_PTR }],
 SendMessageCallbackW:       [BOOL,    { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: SENDASYNCPROC, dwData: ULONG_PTR }],
 SendMessageTimeoutA:        [LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, flags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR }],
 SendMessageTimeoutW:        [LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, flags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR }],
 SendMessageW:               [LRESULT, { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM }],
 SendNotifyMessageA:         [BOOL,    { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM }],
 SendNotifyMessageW:         [BOOL,    { hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM }],
 SetCapture:                 [HWND,    { hWnd: HWND } ],
 SetClassLongA:              [DWORD,   { hWnd: HWND, nIndex: int, dwNewLong: LONG }],
 SetClassLongW:              [DWORD,   { hWnd: HWND, nIndex: int, dwNewLong: LONG }],
 SetCursor:                   [HCURSOR, { hCursor: HCURSOR }],
 SetLayeredWindowAttributes: [BOOL,    { hwnd: HWND, crKey: COLORREF, bAlpha: uchar, dwFlags: DWORD }],
 SetParent:                  [HWND,    { hWndChild: HWND, hWndNewParent: HWND }],
 SetWindowLongA:             [LONG,    { hWnd: HWND, nIndex: int, dwNewLong: LONG }],
 SetWindowLongW:             [LONG,    { hWnd: HWND, nIndex: int, dwNewLong: LONG }],
 SetWindowPlacement:         [BOOL,    { hWnd: HWND, lpwndpl: PTR(uint) }],
 SetWindowPos:               [BOOL,    { hWnd: HWND, hWndInsertAfter: HWND, X: int, Y: int, cx: int, cy: int, uFlags: UINT }],
 SetWindowsHookA:            [HHOOK,   { nFilterType: int, pfnFilterProc: HOOKPROC } ],
 SetWindowsHookExA:          [HHOOK,   { idHook: int, lpfn: HOOKPROC, hmod: HINSTANCE, dwThreadId: DWORD } ],
 SetWindowsHookExW:          [HHOOK,   { idHook: int, lpfn: HOOKPROC, hmod: HINSTANCE, dwThreadId: DWORD } ],
 SetWindowsHookW:            [HHOOK,   { nFilterType: int, pfnFilterProc: HOOKPROC } ],
 SetWindowTextA:             [bool,    { hWnd: HWND, lpString: string }],
 SetWindowTextW:             [bool,    { hWnd: HWND, lpString: LPCWSTR }],
 ShowCursor:                  [VOID,    { bShow: BOOL }],
 ShowWindow:                 [BOOL,    { hWnd: HWND, nCmdShow: int }],
 SystemParametersInfoA:      [BOOL,    { uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT } ],
 SystemParametersInfoW:      [BOOL,    { uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT } ],
 UnhookWindowsHook:          [BOOL,    { nCode: int, pfnFilterProc: HOOKPROC } ],
 UnhookWindowsHookEx:        [BOOL,    { hhk: HHOOK } ],
 UnregisterClassA:           [BOOL,    { lpClassName: string, hInstance: HINSTANCE } ],
 UnregisterClassW:           [BOOL,    { lpClassName: LPCWSTR, hInstance: HINSTANCE } ],
 UpdateLayeredWindow:        [BOOL,    { hWnd: HWND, hdcDst: HDC, pptDst: PTR(uint), psize: PTR(uint), hdcSrc: HDC, pptSrc: PTR(uint), crKey: COLORREF, pblend: PTR(uint), dwFlags: DWORD }],
 UpdateLayeredWindowIndirect:[BOOL,    { hWnd: HWND, pULWInfo: PTR(uint) }],
 WaitForInputIdle:           [DWORD,   { hProcess: HANDLE, dwMilliseconds: DWORD }],
 WaitMessage:                [BOOL,    { }],
});

LIBRARY('dwmapi', {
  DwmDefWindowProc:                  [BOOL,    { hWnd: HWND, msg: UINT, wParam: WPARAM, lParam: LPARAM, plResult: PTR(long) }],
  DwmEnableBlurBehindWindow:         [HRESULT, { hWnd: HWND, pBlurBehind: PTR(uint) }],
  DwmEnableComposition:              [HRESULT, { uCompositionAction: UINT }],
  DwmEnableMMCSS:                    [HRESULT, { fEnableMMCSS: BOOL }],
  DwmExtendFrameIntoClientArea:      [HRESULT, { hWnd: HWND, pMarInset: PTR(uint) }],
  DwmGetColorizationColor:           [HRESULT, { pcrColorization: PTR(ulong), pfOpaqueBlend: PTR(int) }],
  DwmGetCompositionTimingInfo:       [HRESULT, { hwnd: HWND, pTimingInfo: PTR(uint) }],
  DwmGetWindowAttribute:             [HRESULT, { hwnd: HWND, dwAttribute: DWORD, pvAttribute: PVOID, cbAttribute: DWORD }],
  DwmIsCompositionEnabled:           [HRESULT, { pfEnabled: PTR(int) }],
  DwmModifyPreviousDxFrameDuration:  [HRESULT, { hwnd: HWND, cRefreshes: INT, fRelative: BOOL }],
  DwmQueryThumbnailSourceSize:       [HRESULT, { hThumbnail: HTHUMBNAIL, pSize: PSIZE }],
  DwmRegisterThumbnail:              [HRESULT, { hwndDestination: HWND, hwndSource: HWND, phThumbnailId: PTR(HTHUMBNAIL) }],
  DwmSetDxFrameDuration:             [HRESULT, { hwnd: HWND, cRefreshes: INT }],
  DwmSetPresentParameters:           [HRESULT, { hwnd: HWND, pPresentParams: PTR(uint) }],
  DwmSetWindowAttribute:             [HRESULT, { hwnd: HWND, dwAttribute: DWORD, pvAttribute: LPCVOID, cbAttribute: DWORD }],
  DwmUnregisterThumbnail:            [HRESULT, { hThumbnailId: HTHUMBNAIL }],
  DwmUpdateThumbnailProperties:      [HRESULT, { hThumbnailId: HTHUMBNAIL, ptnProperties: PTR(uint) }],
  DwmSetIconicThumbnail:             [HRESULT, { hwnd: HWND, hbmp: HBITMAP, dwSITFlags: DWORD }],
  DwmSetIconicLivePreviewBitmap:     [HRESULT, { hwnd: HWND, hbmp: HBITMAP, pptClient: PTR(uint), dwSITFlags: DWORD }],
  DwmInvalidateIconicBitmaps:        [HRESULT, { hwnd: HWND }],
  DwmAttachMilContent:               [HRESULT, { hwnd: HWND }],
  DwmDetachMilContent:               [HRESULT, { hwnd: HWND }],
  DwmFlush:                          [HRESULT, { }],
  DwmGetGraphicsStreamTransformHint: [HRESULT, { uIndex: UINT, pTransform: PTR(uint) }],
  DwmGetGraphicsStreamClient:        [HRESULT, { uIndex: UINT, pClientUuid: PTR(uint) }],
  DwmGetTransportAttributes:         [HRESULT, { pfIsRemoting: PTR(int), pfIsConnected: PTR(int), pDwGeneration: PTR(ulong) }],
});

LIBRARY('shell32', {
  AssocCreateForClasses          : [HRESULT,   { rgClasses: PTR(uint), cClasses: ULONG, riid: PTR(uint), ppv: PTR(VOIDPTR) }],
  CommandLineToArgvW             : [LPWSTR,    { lpCmdLine: LPCWSTR, pNumArgs: PTR(int) }],
  DoEnvironmentSubstA            : [DWORD,     { szString: LPSTR, cchString: UINT }],
  DoEnvironmentSubstW            : [DWORD,     { szString: LPWSTR, cchString: UINT }],
  DragAcceptFiles                : [VOID,      { hWnd: HWND, fAccept: BOOL }],
  DragFinish                     : [VOID,      { hDrop: HDROP }],
  DragQueryFileA                 : [UINT,      { hDrop: HDROP, iFile: UINT, lpszFile: LPSTR, cch: UINT }],
  DragQueryFileW                 : [UINT,      { hDrop: HDROP, iFile: UINT, lpszFile: LPWSTR, cch: UINT }],
  DragQueryPoint                 : [BOOL,      { hDrop: HDROP, lppt: LPPOINT }],
  DuplicateIcon                  : [HICON,     { hInst: HINSTANCE, hIcon: HICON }],
  ExtractAssociatedIconA         : [HICON,     { hInst: HINSTANCE, pszIconPath: LPSTR, piIcon: PTR(ushort) }],
  ExtractAssociatedIconExA       : [HICON,     { hInst: HINSTANCE, pszIconPath: LPSTR, piIconIndex: PTR(ushort), piIconId: PTR(ushort) }],
  ExtractAssociatedIconExW       : [HICON,     { hInst: HINSTANCE, pszIconPath: LPWSTR, piIconIndex: PTR(ushort), piIconId: PTR(ushort) }],
  ExtractAssociatedIconW         : [HICON,     { hInst: HINSTANCE, pszIconPath: LPWSTR, piIcon: PTR(ushort) }],
  ExtractIconA                   : [HICON,     { hInst: HINSTANCE, lpszExeFileName: string, nIconIndex: UINT }],
  ExtractIconExA                 : [UINT,      { lpszFile: string, nIconIndex: int, phiconLarge: PTR(VOIDPTR), phiconSmall: PTR(VOIDPTR), nIcons: UINT }],
  ExtractIconExW                 : [UINT,      { lpszFile: LPCWSTR, nIconIndex: int, phiconLarge: PTR(VOIDPTR), phiconSmall: PTR(VOIDPTR), nIcons: UINT }],
  ExtractIconW                   : [HICON,     { hInst: HINSTANCE, lpszExeFileName: LPCWSTR, nIconIndex: UINT }],
  FindExecutableA                : [HINSTANCE, { lpFile: string, lpDirectory: string, lpResult: LPSTR }],
  FindExecutableW                : [HINSTANCE, { lpFile: LPCWSTR, lpDirectory: LPCWSTR, lpResult: LPWSTR }],
  InitNetworkAddressControl      : [BOOL,      { }],
  IsLFNDriveA                    : [BOOL,      { pszPath: string }],
  IsLFNDriveW                    : [BOOL,      { pszPath: LPCWSTR }],
  SHAppBarMessage                : [UINT_PTR,  { dwMessage: DWORD, pData: PTR(APPBARDATA) }],
  SHCreateProcessAsUserW         : [BOOL,      { pscpi: PTR(SHCREATEPROCESSINFOW) }],
  Shell_NotifyIconA              : [BOOL,      { dwMessage: DWORD, lpData: PTR(NOTIFYICONDATAA) }],
  Shell_NotifyIconGetRect        : [HRESULT,   { identifier: PTR(uint), iconLocation: PTR(uint) }],
  Shell_NotifyIconW              : [BOOL,      { dwMessage: DWORD, lpData: PTR(NOTIFYICONDATAW) }],
  ShellAboutA                    : [INT,       { hWnd: HWND, szApp: string, szOtherStuff: string, hIcon: HICON }],
  ShellAboutW                    : [INT,       { hWnd: HWND, szApp: LPCWSTR, szOtherStuff: LPCWSTR, hIcon: HICON }],
  ShellExecuteA                  : [HINSTANCE, { hwnd: HWND, lpOperation: string, lpFile: string, lpParameters: string, lpDirectory: string, nShowCmd: INT }],
  ShellExecuteExA                : [BOOL,      { pExecInfo: PTR(SHELLEXECUTEINFOA) }],
  ShellExecuteExW                : [BOOL,      { pExecInfo: PTR(SHELLEXECUTEINFOW) }],
  ShellExecuteW                  : [HINSTANCE, { hwnd: HWND, lpOperation: LPCWSTR, lpFile: LPCWSTR, lpParameters: LPCWSTR, lpDirectory: LPCWSTR, nShowCmd: INT }],
  ShellMessageBoxA               : [VOID,      { hAppInst: HINSTANCE, hWnd: HWND, lpcText: string, lpcTitle: string, fuStyle: UINT }],
  ShellMessageBoxW               : [VOID,      { hAppInst: HINSTANCE, hWnd: HWND, lpcText: LPCWSTR, lpcTitle: LPCWSTR, fuStyle: UINT }],
  SHEmptyRecycleBinA             : [HRESULT,   { hwnd: HWND, pszRootPath: string, dwFlags: DWORD }],
  SHEmptyRecycleBinW             : [HRESULT,   { hwnd: HWND, pszRootPath: LPCWSTR, dwFlags: DWORD }],
  SHEnumerateUnreadMailAccountsA : [HRESULT,   { hKeyUser: HKEY, dwIndex: DWORD, pszMailAddress: LPSTR, cchMailAddress: int }],
  SHEnumerateUnreadMailAccountsW : [HRESULT,   { hKeyUser: HKEY, dwIndex: DWORD, pszMailAddress: LPWSTR, cchMailAddress: int }],
  SHEvaluateSystemCommandTemplate: [HRESULT,   { pszCmdTemplate: PCWSTR, ppszApplication: PTR(PTR(ushort)), ppszCommandLine: PTR(PTR(ushort)), ppszParameters: PTR(PTR(ushort)) }],
  SHFileOperationA               : [VOID,      { lpFileOp: PTR(SHFILEOPSTRUCTA) }],
  SHFileOperationW               : [VOID,      { lpFileOp: PTR(SHFILEOPSTRUCTW) }],
  SHFreeNameMappings             : [VOID,      { hNameMappings: HANDLE }],
  SHGetDiskFreeSpaceExA          : [BOOL,      { pszDirectoryName: string, pulFreeBytesAvailableToCaller: PTR(uint), pulTotalNumberOfBytes: PTR(uint), pulTotalNumberOfFreeBytes: PTR(uint) }],
  SHGetDiskFreeSpaceExW          : [BOOL,      { pszDirectoryName: LPCWSTR, pulFreeBytesAvailableToCaller: PTR(uint), pulTotalNumberOfBytes: PTR(uint), pulTotalNumberOfFreeBytes: PTR(uint) }],
  SHGetDriveMedia                : [HRESULT, { pszDrive: LPCWSTR, pdwMediaContent: PTR(ulong) }],
  SHGetFileInfoA                 : [DWORD_PTR, { pszPath: string, dwFileAttributes: DWORD, psfi: PTR(uint), cbFileInfo: UINT, uFlags: UINT }],
  SHGetFileInfoW                 : [DWORD_PTR, { pszPath: LPCWSTR, dwFileAttributes: DWORD, psfi: PTR(uint), cbFileInfo: UINT, uFlags: UINT }],
  SHGetImageList                 : [HRESULT,   { iImageList: int, riid: PTR(uint), ppvObj: PTR(VOIDPTR) }],
  SHGetLocalizedName             : [HRESULT,   { pszPath: LPCWSTR, pszResModule: LPWSTR, cch: UINT, pidsRes: PTR(int) }],
  SHGetNewLinkInfoA              : [BOOL,      { pszLinkTo: string, pszDir: string, pszName: LPSTR, pfMustCopy: PTR(int), uFlags: UINT }],
  SHGetNewLinkInfoW              : [BOOL,      { pszLinkTo: LPCWSTR, pszDir: LPCWSTR, pszName: LPWSTR, pfMustCopy: PTR(int), uFlags: UINT }],
  SHGetPropertyStoreForWindow    : [HRESULT,   { hwnd: HWND, riid: PTR(uint), ppv: PTR(VOIDPTR) }],
  SHGetStockIconInfo             : [HRESULT,   { siid: SHSTOCKICONID, uFlags: UINT, psii: PTR(uint) }],
  SHGetUnreadMailCountA          : [HRESULT,   { hKeyUser: HKEY, pszMailAddress: string, pdwCount: PTR(ulong), pFileTime: PTR(uint), pszShellExecuteCommand: LPSTR, cchShellExecuteCommand: int }],
  SHGetUnreadMailCountW          : [HRESULT,   { hKeyUser: HKEY, pszMailAddress: LPCWSTR, pdwCount: PTR(ulong), pFileTime: PTR(uint), pszShellExecuteCommand: LPWSTR, cchShellExecuteCommand: int }],
  SHInvokePrinterCommandA        : [BOOL,      { hwnd: HWND, uAction: UINT, lpBuf1: string, lpBuf2: string, fModal: BOOL }],
  SHInvokePrinterCommandW        : [BOOL,      { hwnd: HWND, uAction: UINT, lpBuf1: LPCWSTR, lpBuf2: LPCWSTR, fModal: BOOL }],
  SHIsFileAvailableOffline       : [HRESULT,   { pwszPath: LPCWSTR, pdwStatus: LPDWORD }],
  SHLoadNonloadedIconOverlayIdentifiers: [HRESULT, { }],
  SHQueryRecycleBinA             : [HRESULT,   { pszRootPath: string, pSHQueryRBInfo: PTR(SHQUERYRBINFO) }],
  SHQueryRecycleBinW             : [HRESULT,   { pszRootPath: LPCWSTR, pSHQueryRBInfo: PTR(SHQUERYRBINFO) }],
  SHQueryUserNotificationState   : [HRESULT,   { pquns: PTR(uint) }],
  SHRemoveLocalizedName          : [HRESULT,   { pszPath: LPCWSTR }],
  SHSetLocalizedName             : [HRESULT,   { pszPath: LPCWSTR, pszResModule: LPCWSTR, idsRes: int }],
  SHSetUnreadMailCountA          : [HRESULT,   { pszMailAddress: string, dwCount: DWORD, pszShellExecuteCommand: string }],
  SHSetUnreadMailCountW          : [HRESULT,   { pszMailAddress: LPCWSTR, dwCount: DWORD, pszShellExecuteCommand: LPCWSTR }],
  SHTestTokenMembership          : [BOOL,      { hToken: HANDLE, ulRID: ULONG }],
});


LIBRARY('advapi32', {
 AbortSystemShutdownA       : [bool,    { machineName: LPSTR }],
 AbortSystemShutdownW       : [bool,    { machineName: LPWSTR }],
 InitiateShutdownA          : [DWORD,   { machineName: LPSTR, message: LPSTR, gracePeriod: DWORD, shutdownFlags: DWORD, reason: DWORD }],
 InitiateShutdownW          : [DWORD,   { machineName: LPWSTR, message: LPWSTR, gracePeriod: DWORD, shutdownFlags: DWORD, reason: DWORD }],
 InitiateSystemShutdownA    : [bool,    { machineName: LPSTR, message: LPSTR, dwTimeout: DWORD, forceAppsClosed: bool, rebootAfterShutdown: bool }],
 InitiateSystemShutdownExA  : [bool,    { machineName: LPSTR, message: LPSTR, dwTimeout: DWORD, forceAppsClosed: bool, rebootAfterShutdown: bool, reason: DWORD }],
 InitiateSystemShutdownExW  : [bool,    { machineName: LPWSTR, message: LPWSTR, dwTimeout: DWORD, forceAppsClosed: bool, rebootAfterShutdown: bool, reason: DWORD }],
 InitiateSystemShutdownW    : [bool,    { machineName: LPWSTR, message: LPWSTR, dwTimeout: DWORD, forceAppsClosed: bool, rebootAfterShutdown: bool }],
 RegCloseKey                : [LSTATUS, { hKey: HKEY }],
 RegConnectRegistryA        : [LSTATUS, { machineName: string, hKey: HKEY, result: PHKEY }],
 RegConnectRegistryExA      : [LSTATUS, { machineName: string, hKey: HKEY, Flags: ulong, result: PHKEY }],
 RegConnectRegistryExW      : [LSTATUS, { machineName: LPCWSTR, hKey: HKEY, Flags: ulong, result: PHKEY }],
 RegConnectRegistryW        : [LSTATUS, { machineName: LPCWSTR, hKey: HKEY, result: PHKEY }],
 RegCopyTreeA               : [LSTATUS, { hKeySrc: HKEY, subkey: string, hKeyDest: HKEY }],
 RegCopyTreeW               : [LSTATUS, { hKeySrc: HKEY, subkey: LPCWSTR, hKeyDest: HKEY }],
 RegCreateKeyA              : [LSTATUS, { hKey: HKEY, subkey: string, result: PHKEY }],
 RegCreateKeyExA            : [LSTATUS, { hKey: HKEY, subkey: string, _: DWORD, class: LPSTR, options: DWORD, sam: REGSAM, secAttrs: LPSECATTRS, result: PHKEY, disposition: LPDWORD }],
 RegCreateKeyExW            : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, _: DWORD, class: LPWSTR, options: DWORD, sam: REGSAM, secAttrs: LPSECATTRS, result: PHKEY, disposition: LPDWORD }],
 RegCreateKeyTransactedA    : [LSTATUS, { hKey: HKEY, subkey: string, _: DWORD, class: LPSTR, options: DWORD, sam: REGSAM, secAttrs: LPSECATTRS, result: PHKEY, disposition: LPDWORD, hTransaction: HANDLE, pExtParam: PVOID }],
 RegCreateKeyTransactedW    : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, _: DWORD, class: LPWSTR, options: DWORD, sam: REGSAM, secAttrs: LPSECATTRS, result: PHKEY, disposition: LPDWORD, hTransaction: HANDLE, pExtParam: PVOID }],
 RegCreateKeyW              : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, result: PHKEY }],
 RegDeleteKeyA              : [LSTATUS, { hKey: HKEY, subkey: string }],
 RegDeleteKeyExA            : [LSTATUS, { hKey: HKEY, subkey: string, sam: REGSAM, _: DWORD }],
 RegDeleteKeyExW            : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, sam: REGSAM, _: DWORD }],
 RegDeleteKeyTransactedA    : [LSTATUS, { hKey: HKEY, subkey: string, sam: REGSAM, _: DWORD, hTransaction: HANDLE, pExtParam: PVOID }],
 RegDeleteKeyTransactedW    : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, sam: REGSAM, _: DWORD, hTransaction: HANDLE, pExtParam: PVOID }],
 RegDeleteKeyValueA         : [LSTATUS, { hKey: HKEY, subkey: string, valName: string }],
 RegDeleteKeyValueW         : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, valName: LPCWSTR }],
 RegDeleteKeyW              : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR }],
 RegDeleteTreeA             : [LSTATUS, { hKey: HKEY, subkey: string }],
 RegDeleteTreeW             : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR }],
 RegDeleteValueA            : [LSTATUS, { hKey: HKEY, valName: string }],
 RegDeleteValueW            : [LSTATUS, { hKey: HKEY, valName: LPCWSTR }],
 RegDisablePredefinedCache  : [LSTATUS, { }],
 RegDisablePredefinedCacheEx: [LSTATUS, { }],
 RegDisableReflectionKey    : [long,    { hBase: HKEY }],
 RegEnableReflectionKey     : [long,    { hBase: HKEY }],
 RegEnumKeyA                : [LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPSTR, cchName: DWORD }],
 RegEnumKeyExA              : [LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPSTR, lpcchName: LPDWORD, lpReserved: LPDWORD, class: LPSTR, lpcchClass: LPDWORD, lpftLastWriteTime: PFILETIME }],
 RegEnumKeyExW              : [LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPWSTR, lpcchName: LPDWORD, lpReserved: LPDWORD, class: LPWSTR, lpcchClass: LPDWORD, lpftLastWriteTime: PFILETIME }],
 RegEnumKeyW                : [LSTATUS, { hKey: HKEY, dwIndex: DWORD, lpName: LPWSTR, cchName: DWORD }],
 RegEnumValueA              : [LSTATUS, { hKey: HKEY, dwIndex: DWORD, valName: LPSTR, lpcchValueName: LPDWORD, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD }],
 RegEnumValueW              : [LSTATUS, { hKey: HKEY, dwIndex: DWORD, valName: LPWSTR, lpcchValueName: LPDWORD, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD }],
 RegFlushKey                : [LSTATUS, { hKey: HKEY }],
 RegGetKeySecurity          : [LSTATUS, { hKey: HKEY, secInfo: SECINFO, pSecDesc: PSECDESC, lpcbSecDesc: LPDWORD }],
 RegGetValueA               : [LSTATUS, { hkey: HKEY, subkey: string, lpValue: string, dwFlags: DWORD, pdwType: LPDWORD, pvData: PVOID, pcbData: LPDWORD }],
 RegGetValueW               : [LSTATUS, { hkey: HKEY, subkey: LPCWSTR, lpValue: LPCWSTR, dwFlags: DWORD, pdwType: LPDWORD, pvData: PVOID, pcbData: LPDWORD }],
 RegLoadAppKeyA             : [LSTATUS, { lpFile: string, result: PHKEY, sam: REGSAM, options: DWORD, _: DWORD }],
 RegLoadAppKeyW             : [LSTATUS, { lpFile: LPCWSTR, result: PHKEY, sam: REGSAM, options: DWORD, _: DWORD }],
 RegLoadKeyA                : [LSTATUS, { hKey: HKEY, subkey: string, lpFile: string }],
 RegLoadKeyW                : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, lpFile: LPCWSTR }],
 RegLoadMUIStringA          : [LSTATUS, { hKey: HKEY, pszValue: string, pszOutBuf: LPSTR, cbOutBuf: DWORD, pcbData: LPDWORD, Flags: DWORD, pszDirectory: string }],
 RegLoadMUIStringW          : [LSTATUS, { hKey: HKEY, pszValue: LPCWSTR, pszOutBuf: LPWSTR, cbOutBuf: DWORD, pcbData: LPDWORD, Flags: DWORD, pszDirectory: LPCWSTR }],
 RegNotifyChangeKeyValue    : [LSTATUS, { hKey: HKEY, bWatchSubtree: bool, dwNotifyFilter: DWORD, hEvent: HANDLE, fAsynchronous: bool }],
 RegOpenCurrentUser         : [LSTATUS, { sam: REGSAM, result: PHKEY }],
 RegOpenKeyA                : [LSTATUS, { hKey: HKEY, subkey: string, result: PHKEY }],
 RegOpenKeyExA              : [LSTATUS, { hKey: HKEY, subkey: string, ulOptions: DWORD, sam: REGSAM, result: PHKEY }],
 RegOpenKeyExW              : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, ulOptions: DWORD, sam: REGSAM, result: PHKEY }],
 RegOpenKeyTransactedA      : [LSTATUS, { hKey: HKEY, subkey: string, ulOptions: DWORD, sam: REGSAM, result: PHKEY, hTransaction: HANDLE, pExtParam: PVOID }],
 RegOpenKeyTransactedW      : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, ulOptions: DWORD, sam: REGSAM, result: PHKEY, hTransaction: HANDLE, pExtParam: PVOID }],
 RegOpenKeyW                : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, result: PHKEY }],
 RegOpenUserClassesRoot     : [LSTATUS, { hToken: HANDLE, options: DWORD, sam: REGSAM, result: PHKEY }],
 RegOverridePredefKey       : [LSTATUS, { hKey: HKEY, hNewHKey: HKEY }],
 RegQueryInfoKeyA           : [LSTATUS, { hKey: HKEY, class: LPSTR, lpcchClass: LPDWORD, lpReserved: LPDWORD, lpcSubKeys: LPDWORD, lpcbMaxSubKeyLen: LPDWORD, lpcbMaxClassLen: LPDWORD, lpcValues: LPDWORD, lpcbMaxValueNameLen: LPDWORD, lpcbMaxValueLen: LPDWORD, lpcbSecDesc: LPDWORD, lpftLastWriteTime: PFILETIME }],
 RegQueryInfoKeyW           : [LSTATUS, { hKey: HKEY, class: LPWSTR, lpcchClass: LPDWORD, lpReserved: LPDWORD, lpcSubKeys: LPDWORD, lpcbMaxSubKeyLen: LPDWORD, lpcbMaxClassLen: LPDWORD, lpcValues: LPDWORD, lpcbMaxValueNameLen: LPDWORD, lpcbMaxValueLen: LPDWORD, lpcbSecDesc: LPDWORD, lpftLastWriteTime: PFILETIME }],
 RegQueryMultipleValuesA    : [LSTATUS, { hKey: HKEY, values: PTR(VALENTA), count: DWORD, lpValueBuf: LPSTR, ldwTotsize: LPDWORD }],
 RegQueryMultipleValuesW    : [LSTATUS, { hKey: HKEY, values: PTR(VALENTW), count: DWORD, lpValueBuf: LPWSTR, ldwTotsize: LPDWORD }],
 RegQueryReflectionKey      : [long,    { hBase: HKEY, bIsReflectionDisabled: PTR(int) }],
 RegQueryValueA             : [LSTATUS, { hKey: HKEY, subkey: string, lpData: LPSTR, lpcbData: PLONG }],
 RegQueryValueExA           : [LSTATUS, { hKey: HKEY, valName: string, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD }],
 RegQueryValueExW           : [LSTATUS, { hKey: HKEY, valName: LPCWSTR, lpReserved: LPDWORD, lpType: LPDWORD, lpData: LPBYTE, lpcbData: LPDWORD }],
 RegQueryValueW             : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, lpData: LPWSTR, lpcbData: PLONG }],
 RegRenameKey               : [LSTATUS, { hKey: HKEY, subkeyName: LPCWSTR, lpNewKeyName: LPCWSTR }],
 RegReplaceKeyA             : [LSTATUS, { hKey: HKEY, subkey: string, lpNewFile: string, lpOldFile: string }],
 RegReplaceKeyW             : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, lpNewFile: LPCWSTR, lpOldFile: LPCWSTR }],
 RegRestoreKeyA             : [LSTATUS, { hKey: HKEY, lpFile: string, dwFlags: DWORD }],
 RegRestoreKeyW             : [LSTATUS, { hKey: HKEY, lpFile: LPCWSTR, dwFlags: DWORD }],
 RegSaveKeyA                : [LSTATUS, { hKey: HKEY, lpFile: string, secAttrs: LPSECATTRS }],
 RegSaveKeyExA              : [LSTATUS, { hKey: HKEY, lpFile: string, secAttrs: LPSECATTRS, Flags: DWORD }],
 RegSaveKeyExW              : [LSTATUS, { hKey: HKEY, lpFile: LPCWSTR, secAttrs: LPSECATTRS, Flags: DWORD }],
 RegSaveKeyW                : [LSTATUS, { hKey: HKEY, lpFile: LPCWSTR, secAttrs: LPSECATTRS }],
 RegSetKeySecurity          : [LSTATUS, { hKey: HKEY, secInfo: SECINFO, pSecDesc: PSECDESC }],
 RegSetKeyValueA            : [LSTATUS, { hKey: HKEY, subkey: string, valName: string, dwType: DWORD, lpData: LPCVOID, cbData: DWORD }],
 RegSetKeyValueW            : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, valName: LPCWSTR, dwType: DWORD, lpData: LPCVOID, cbData: DWORD }],
 RegSetValueA               : [LSTATUS, { hKey: HKEY, subkey: string, dwType: DWORD, lpData: string, cbData: DWORD }],
 RegSetValueExA             : [LSTATUS, { hKey: HKEY, valName: string, _: DWORD, dwType: DWORD, lpData: LPBYTE, cbData: DWORD }],
 RegSetValueExW             : [LSTATUS, { hKey: HKEY, valName: LPCWSTR, _: DWORD, dwType: DWORD, lpData: LPBYTE, cbData: DWORD }],
 RegSetValueW               : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR, dwType: DWORD, lpData: LPCWSTR, cbData: DWORD }],
 RegUnLoadKeyA              : [LSTATUS, { hKey: HKEY, subkey: string }],
 RegUnLoadKeyW              : [LSTATUS, { hKey: HKEY, subkey: LPCWSTR }],
});

// var Reg = { A: {}, W: {} }
// Object.keys(advapi32).sort().forEach(function(key){
//   var func = advapi32[key];
//   key = key.replace(/^Reg/, '');
//   if (key[key.length - 1] === 'A') {
//     Reg.A[key.slice(0,-1)] = func;
//   } else if (key[key.length - 1] === 'W') {
//     Reg.W[key.slice(0,-1)] = func;
//   } else {
//     Reg.A[key] = Reg.W[key] = func;
//   }
// });


var AB = {
  M: { NEW              : 0,
       REMOVE           : 1,
       QUERYPOS         : 2,
       SETPOS           : 3,
       GETSTATE         : 4,
       GETTASKBARPOS    : 5,
       ACTIVATE         : 6,
       GETAUTOHIDEBAR   : 7,
       SETAUTOHIDEBAR   : 8,
       WINDOWPOSCHANGED : 9,
       SETSTATE         : 10 },
  N: { STATECHANGE      : 0,
       POSCHANGED       : 1,
       FULLSCREENAPP    : 2,
       WINDOWARRANGE    : 3 },
  S: { AUTOHIDE         : 1,
       ALWAYSONTOP      : 2 },
  E: { LEFT             : 0,
       TOP              : 1,
       RIGHT            : 2,
       BOTTOM           : 3 } };


var GetLastError = module.exports('GetLastError');

Object.defineProperty(module.exports, 'errno', {
  get: function(){ return GetLastError() }
});

