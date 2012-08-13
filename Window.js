var ReferenceType = require('./ReferenceType'),
    BitfieldType = require('./BitfieldType');

var windows = new WeakMap,
    handles = {};

var bindings = require('./bindings'),
    NULL = bindings.NULL;

var user32 = bindings('user32'),
    WNDENUMPROC = bindings('WNDENUMPROC'),
    TITLEBARINFO = bindings('TITLEBARINFO'),
    GA = bindings('GA'),
    RECT = bindings('RECT'),
    STATE_SYSTEM = bindings('STATE_SYSTEM');



module.exports = Window;

function Window(hwnd){
  var window = new WindowReference(new WindowHandle(hwnd));
  window.styles = new Styles(hwnd);
  window.exStyles = new ExtendedStyles(hwnd);
  return window;
}

Window.prototype.isAltTabWindow = function isAltTabWindow(hwnd){
  var hwnd = ReferenceType.unwrap(this)._handle;
  if (!user32.IsWindowVisible(hwnd)) {
    return false;
  }
  var hwndWalk = NULL;
  var hwndTry = user32.GetAncestor(hwnd, GA.ROOT_OWNER);

  while (hwndTry != hwndWalk) {
    hwndWalk = hwndTry;
    hwndTry = user32.GetLastActivePopup(hwndWalk);
    if (user32.IsWindowVisible(hwndTry)) {
      break;
    }
  }
  if (hwndWalk != hwnd) {
    return false;
  }
  return true;

  var ti = new TITLEBARINFO;
  ti.size = TITLEBARINFO.size;
  user32.GetTitleBarInfo(hwnd, ti.ref());
  return !(ti.state & STATE_SYSTEM.INVISIBLE);
};



var GWL_STYLE = -16,
    GWL_EXSTYLE = -20;



var Styles = new BitfieldType({
  get: function(hwnd){
    return user32.GetWindowLongA(hwnd, GWL_STYLE);
  },
  set: function(hwnd, value){
    user32.SetWindowLongA(hwnd, GWL_STYLE, value);
  },
  cooldown: 1000,
  fields: {
    overlapped       : 0x00000000,
    maximizeBox      : 0x00010000,
    minimizeBox      : 0x00020000,
    sizeBox          : 0x00040000,
    sysMenu          : 0x00080000,
    hScroll          : 0x00100000,
    vScroll          : 0x00200000,
    dlgFrame         : 0x00400000,
    border           : 0x00800000,
    caption          : 0x00C00000,
    maximize         : 0x01000000,
    clipChildren     : 0x02000000,
    clipSiblings     : 0x04000000,
    disabled         : 0x08000000,
    visible          : 0x10000000,
    minimize         : 0x20000000,
    child            : 0x40000000,
    popup            : 0x80000000,
    overlappedWindow : 0x00CF0000,
    popupWindow      : 0x80880000
  }
});

var ExtendedStyles = new BitfieldType({
  get: function(hwnd){
    return user32.GetWindowLongA(hwnd, GWL_EXSTYLE);
  },
  set: function(hwnd, value){
    user32.SetWindowLongA(hwnd, GWL_EXSTYLE, value);
  },
  cooldown: 1000,
  fields: {
    left             : 0x00000000,
    dlgModalFrame    : 0x00000001,
    noParentNotify   : 0x00000004,
    topMost          : 0x00000008,
    acceptFiles      : 0x00000010,
    transparent      : 0x00000020,
    mdiChild         : 0x00000040,
    toolWindow       : 0x00000080,
    windowEdge       : 0x00000100,
    clientEdge       : 0x00000200,
    overlappedWindow : 0x00000300,
    contextHelp      : 0x00000400,
    rightScrollbar   : 0x00001000,
    rtlReading       : 0x00002000,
    controlParent    : 0x00010000,
    staticEdge       : 0x00020000,
    appWindow        : 0x00040000,
    layered          : 0x00080000,
    noInheritLayout  : 0x00100000,
    layoutRtl        : 0x00400000,
    composited       : 0x02000000,
    noActivate       : 0x08000000,
    paletteWindow    : 0x00000188
  }
});

  //GetClientRect:        [ BOOL, { hWnd: HWND, lpRect: LPRECT }],
  //GetWindowRect:        [ BOOL, { hWnd: HWND, lpRect: LPRECT }],
  //AdjustWindowRect:     [ BOOL, { lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL }],
  //AdjustWindowRectEx:   [ BOOL, { lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL, dwExStyle: DWORD }],




function Rect(rect){
  rect = rect || new RECT;
  return new RectReference(rect);
}
var RectReference = new ReferenceType('Rect', ReferenceType.listAccessors(RECT.prototype));

RectReference.prototype = Rect.prototype;

var titleBuffer = new Buffer(160);


function WindowHandle(hwnd){
  if (hwnd in handles) {
    return windows.get(handles[hwnd]);
  }
  handles[hwnd] = new Number(hwnd);
  windows.set(handles[hwnd], this);
  Object.defineProperty(this, '_handle', {
    value: hwnd
  });
}

WindowHandle.prototype = {
  constructor: WindowHandle,
  get title(){
    titleBuffer.fill();
    user32.GetWindowTextA(this._handle, titleBuffer, 160);
    return titleBuffer.readCString();
  },
  set title(title){
    titleBuffer.writeCString(title);
    user32.SetWindowTextA(this._handle, titleBuffer);
  },
  get rect(){
    if (!this._rect) {
      var rect = new RECT;
      this._rect = new Rect(rect);
      this._rectPtr = rect.ref();
    }
    user32.GetWindowRect(this._handle, this._rectPtr);
    return this._rect;
  },
  // get filename(){
  //   return bindings.getModuleFilename(this._handle);
  // }
};


var WindowReference = new ReferenceType('Window', ReferenceType.listAccessors(WindowHandle.prototype));

WindowReference.prototype = Window.prototype;


Window.enumerate = function enumerate(){
  var out = [];

  user32.EnumWindows(WNDENUMPROC(function(hwnd, lparam){
    var window = new Window(hwnd);
    if (window.title && window.isAltTabWindow()) {
      out.push(window);
    }
    return 1;
  }), NULL);

  return out;
}

