var ReferenceType = require('./ReferenceType'),
    BitfieldType = require('./BitfieldType');

var windows = new WeakMap,
    handles = {};

var user32 = require('bindings').user32;



module.exports = Window;

function Window(hwnd){
  var window = new WindowReference(new WindowHandle(hwnd));
  window.styles = new Styles(hwnd);
  window.exStyles = new ExtendedStyles(hwnd);
  return window;
}



var GWL_STYLE = -16,
    GWL_EXSTYLE = -20;

function getStyle(hwnd, index){
  return user32.GetWindowLong(hwnd, GWL_STYLE, index);
}

function setStyle(hwnd, index, value){
  user32.SetWindowLong(hwnd, GWL_STYLE, index, value);
}

function getExStyle(hwnd, index){
  return user32.GetWindowLong(hwnd, GWL_EXSTYLE, index);
}

function setExStyle(hwnd, index, value){
  user32.SetWindowLong(hwnd, GWL_EXSTYLE, index, value);
}

function getTitle(hwnd, buffer){
  buffer = Buffer.isBuffer(buffer) ? buffer : new Buffer(160);
  buffer.fill();
  user32.GetWindowTextA(hwnd, buffer, 160);
  return buffer.readCString();
}



var Styles = new BitfieldType({
  get: getWindowStyle,
  set: setWindowStyle,
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
  get: getWindowExStyle,
  set: setWindowExStyle,
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
    return bindings.getWindowTitle(this._handle);
  },
  set title(title){
    return bindings.setWindowTitle(this._handle, title);
  },
  get filename(){
    return bindings.getModuleFilename(this._handle);
  }
};




var WindowReference = new ReferenceType('Window', ReferenceType.listAccessors(WindowHandle.prototype));

WindowReference.prototype = Window.prototype;






function enumerateWindows(){
  var out = [],
      buff = new Buffer(160);

  user32.EnumWindows(WindowEnumProc(function(hwnd, lparam){
    if (isAltTabWindow(hwnd)) {
      user32.GetWindowTextA(hwnd, buff, 160);
      out.push({ hwnd: hwnd, title: buff.readCString() });
    }
    return 1;
  }), NULL);

  return out;
}



function isAltTabWindow(hwnd){
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

  var ti = new TITLEBARINFO;
  ti.size = TITLEBARINFO.size;
  user32.GetTitleBarInfo(hwnd, ti.ref());
  return !(ti.state & STATE_SYSTEM.INVISIBLE);
}

