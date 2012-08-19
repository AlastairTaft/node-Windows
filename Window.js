var ReferenceType = require('./ReferenceType'),
    BitfieldType = require('./BitfieldType'),
    decorate = require('./utils').decorate,
    ref = require('ref');

var windows = new WeakMap,
    handles = {};

var bindings = require('./bindings'),
    NULL = bindings.NULL;

var user32 = bindings('user32'),
    dwmapi = bindings('dwmapi'),
    WNDENUMPROC = bindings('WNDENUMPROC'),
    TITLEBARINFO = bindings('TITLEBARINFO'),
    DWM_BLURBEHIND = bindings('DWM_BLURBEHIND'),
    MARGINS = bindings('MARGINS'),
    uchar = bindings('uchar'),
    RECT = bindings('RECT');

var CloseWindow = bindings('CloseWindow'),
    EnumWindows = bindings('EnumWindows'),
    GetAncestor = bindings('GetAncestor'),
    GetLastActivePopup = bindings('GetLastActivePopup'),
    GetLayeredWindowAttributes = bindings('GetLayeredWindowAttributes'),
    GetSystemMetrics = bindings('GetSystemMetrics'),
    GetTitleBarInfo = bindings('GetTitleBarInfo'),
    GetWindowLong = bindings('GetWindowLongA'),
    GetWindowRect = bindings('GetWindowRect'),
    GetWindowText = bindings('GetWindowTextA'),
    IsWindowVisible = bindings('IsWindowVisible'),
    IsWindowVisible = bindings('IsWindowVisible'),
    ReleaseCapture = bindings('ReleaseCapture'),
    SendMessage = bindings('SendMessage'),
    SetLayeredWindowAttributes = bindings('SetLayeredWindowAttributes'),
    SetWindowLong = bindings('SetWindowLongA'),
    SetWindowPos = bindings('SetWindowPos'),
    SetWindowText = bindings('SetWindowTextA'),
    ShowWindow = bindings('ShowWindow');

var DwmExtendFrameIntoClientArea = bindings('DwmExtendFrameIntoClientArea'),
    DwmEnableBlurBehindWindow = bindings('DwmEnableBlurBehindWindow');


var GA = bindings('GA'),
    GWL = bindings('GWL'),
    HT = bindings('HT'),
    HWND_Z = bindings('HWND_Z'),
    LWA = bindings('LWA'),
    STATE_SYSTEM = bindings('STATE_SYSTEM'),
    SW = bindings('SW'),
    SWP = bindings('SWP'),
    WM = bindings('WM'),
    WS = bindings('WS'),
    WS_EX = bindings('WS_EX');




module.exports = Window;

function Window(hwnd){
  var window = new WindowReference(new WindowHandle(hwnd));
  return window;
}

function _(o){
  return ReferenceType.unwrap(o)._handle;
}

decorate(Window.prototype, [
  function setNCWidth(left, top, right, bottom){
    switch (arguments.length) {
      case 0: left = 0;
      case 1: top = left;
      case 2: right = left;
      case 3: bottom = top;
    }
    var margins = new MARGINS({
      left: left,
      top: top,
      right: right,
      bottom: bottom,
    });
    DwmExtendFrameIntoClientArea(_(this), margins.ref());
  },
  function minimize(){
    ShowWindow(_(this), SW.MINIMIZE);
  },
  function maximize(){
    ShowWindow(_(this), SW.MAXIMIZE);
  },
  function restore(){
    ShowWindow(_(this), SW.RESTORE);
  },
  function show(){
    ShowWindow(_(this), SW.SHOWNORMAL);
    //forceToForeground(hwnd);
  },
  function hide(){
    ShowWindow(_(this), SW.HIDE);
  },
  function destroy(){
    CloseWindow(_(this));
  },
  function drag(){
    ReleaseCapture();
    SendMessage(_(this), WM.NCLBUTTONDOWN, HT.TOP, 0);
  },
  function resizeTop(){
    ReleaseCapture();
    SendMessage(_(this), WM.NCLBUTTONDOWN, HT.CAPTION, 0);
  },
  function nonClientClick(target){
    if (typeof target === 'string') {
      target = target.toUpperCase();
    }
    var val = HT.toValue(target);
    if (val != null) {
      ReleaseCapture();
      SendMessage(_(this), WM.NCLBUTTONDOWN, val, 0);
    }
  },
  function move(left, top, width, height){
    if (arguments.length === 3) {
      width = height = NULL;
    }
    SetWindowPos(_(this), NULL, left, top, width, height, NULL);
  },
  function resize(width, height){
    SetWindowPos(_(this), NULL, NULL, NULL, width, height, SWP.NOMOVE);
  },
  function isAltTabWindow(hwnd){
    var hwnd = _(this);
    if (!IsWindowVisible(hwnd)) {
      return false;
    }
    var hwndWalk = NULL;
    var hwndTry = GetAncestor(hwnd, GA.ROOT_OWNER);

    while (hwndTry != hwndWalk) {
      hwndWalk = hwndTry;
      hwndTry = GetLastActivePopup(hwndWalk);
      if (IsWindowVisible(hwndTry)) {
        break;
      }
    }
    if (hwndWalk != hwnd) {
      return false;
    }
    return true;

    var ti = new TITLEBARINFO;
    ti.size = TITLEBARINFO.size;
    GetTitleBarInfo(hwnd, ti.ref());
    return !(ti.state & STATE_SYSTEM.INVISIBLE);
  }
]);


function Rect(rect){
  rect = rect || new RECT;
  return new RectReference(rect);
}
var RectReference = new ReferenceType('Rect', ['top', 'left', 'right', 'bottom']);

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
  this.styles = new Styles(hwnd);
  this.exStyles = new ExtendedStyles(hwnd);
}

decorate(WindowHandle.prototype, [
  function _getStyle(type){
    return GetWindowLong(this._handle, type);
  },
  function _hasStyle(type, value){
    return (GetWindowLong(this._handle, type) & value) > 0;
  },
  function _updateStyle(type, value){
    var style = GetWindowLong(this._handle, type);
    SetWindowLong(this._handle, type, value < 0 ? style & value : style | value);
    SetWindowPos(this._handle, NULL, 0, 0, 0, 0, SWP.ONLYFRAME);
  },
  function _overwriteStyle(type, value){
    SetWindowLong(this._handle, type, value);
    SetWindowPos(this._handle, NULL, 0, 0, 0, 0, SWP.ONLYFRAME);
  },
  function _pos(loc){
    if (!this._rect) {
      this._rect = new RECT;
      this._rect.last = Date.now() - 10000;
    }
    if (Date.now() - this._rect.last > 100) {
      GetWindowRect(this._handle, this._rect);
    }
    return this._rect[loc];
  }
]);

var bb = new DWM_BLURBEHIND;
bb.hRgnBlur = 0;
bb.dwFlags = 1;

var WindowReference = new ReferenceType('Window', [], {
  get title(){
    titleBuffer.fill();
    GetWindowText(this._handle, titleBuffer, 160);
    return titleBuffer.readCString();
  },
  set title(v){
    titleBuffer.writeCString(v);
    SetWindowText(this._handle, titleBuffer);
  },
  set resizable(v){
    this._updateStyle(GWL.STYLE, v ? WS.CONTROLS : ~WS.CONTROLS);
  },
  get resizable(){
    return this._hasStyle(GWL.STYLE, WS.SIZEBOX);
  },
  set caption(v){
    this._updateStyle(GWL.STYLE, v ? WS.CAPTION : ~WS.CAPTION);
  },
  get caption(){
    return this._hasStyle(GWL.STYLE, WS.CAPTION);
  },
  set blur(v){
    this._blur = !!v;
    bb.fEnable = this._blur;
    DwmEnableBlurBehindWindow(this._handle, bb.ref());
  },
  get blur(){
    return this._blur || false;
  },
  set topmost(v){
    this._updateStyle(GWL.EXSTYLE, v ? WS_EX.TOPMOST : ~WS_EX.TOPMOST);
    SetWindowPos(this._handle, v ? HWND_Z.TOPMOST : HWND_Z.NOTOPMOST, 0, 0, 0, 0, SWP.NOSIZE | SWP.NOMOVE);
  },
  get topmost(){
    return this._hasStyle(GWL.EXSTYLE, WS_EX.TOPMOST);
  },
  set opacity(v) {
    this._opacity = v * 255 + .5 | 0;
    this._updateStyle(GWL.EXSTYLE, v < 1 ? WS_EX.LAYERED : ~WS_EX.LAYERED);
    SetLayeredWindowAttributes(this._handle, NULL, this._opacity, LWA.ALPHA);
  },
  get opacity(){
    return this._opacity === undefined ? 1 : this._opacity / 255;
  },
  get top(){
    return this._pos('top');
  },
  get left(){
    return this._pos('left');
  },
  get right(){
    return this._pos('right');
  },
  get bottom(){
    return this._pos('bottom');
  },
});

WindowReference.prototype = Window.prototype;


Window.enumerate = function enumerate(){
  var out = [];

  EnumWindows(WNDENUMPROC(function(hwnd, lparam){
    var window = new Window(hwnd);
    if (window.title && window.isAltTabWindow()) {
      out.push(window);
    }
    return 1;
  }), NULL);

  return out;
}

Window.screen = function screen(){
  return {
    width: GetSystemMetrics(0),
    height: GetSystemMetrics(1)
  };
}


var Styles = new BitfieldType({
  get: function(hwnd){
    return GetWindowLong(hwnd, GWL.STYLE);
  },
  set: function(hwnd, value){
    SetWindowLong(hwnd, GWL.STYLE, value);
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
    return GetWindowLong(hwnd, GWL.EXSTYLE);
  },
  set: function(hwnd, value){
    SetWindowLong(hwnd, GWL.EXSTYLE, value);
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
  }
});


// function forceToForeground(hwnd){
//   var lockTime = new DWORD(0);
//   var localTID = kernel32.GetCurrentThreadId();
//   var activeTID = kernel32.GetWindowThreadProcessId(user32.GetForegroundWindow(), 0);

//   if (localTID != activeTID) {
//     user32.AttachThreadInput(localTID, activeTID, true);
//     user32.SystemParametersInfo(SPI.GETFOREGROUNDLOCKTIMEOUT, 0, lockTime.ref(), 0);
//     user32.SystemParametersInfo(SPI.SETFOREGROUNDLOCKTIMEOUT, 0, 0, SPIF.SENDWININICHANGE | SPIF.UPDATEINIFILE);
//     user32.AllowSetForegroundWindow(ASFW_ANY);
//   }

//   kernel32.SetForegroundWindow(hwnd);

//   if (localTID != activeTID) {
//     user32.SystemParametersInfo(SPI.SETFOREGROUNDLOCKTIMEOUT, 0, lockTime.ref(), SPIF.SENDWININICHANGE | SPIF.UPDATEINIFILE);
//     kernel32.AttachThreadInput(localTID, activeTID, false);
//   }
// }

var CR = ClientRectangle, VB = VIRTUALBORDER;

function Rect(left, top, width, height){

}



R1 = new RECT(CR.X, CR.Y, VB, VB);
R2 = new RECT(CR.X + R1.Width, CR.Y, CR.Width - R1.Width * 2, R1.Height);
R3 = new RECT(CR.X + R1.Width + R2.Width, CR.Y, VB, VB);
R4 = new RECT(CR.X, CR.Y + R1.Height, R1.Width, CR.Height - R1.Width * 2);
R5 = new RECT(CR.X + R4.Width, CR.Y + R1.Height, R2.Width, R4.Height);
R6 = new RECT(CR.X + R4.Width + R5.Width, CR.Y + R1.Height, R3.Width, R4.Height);
R7 = new RECT(CR.X, CR.Y + R1.Height + R4.Height, VB, VB);
R8 = new RECT(CR.X + R7.Width, CR.Y + R1.Height + R4.Height, CR.Width - R7.Width * 2, R7.Height);
R9 = new RECT(CR.X + R7.Width + R8.Width,

