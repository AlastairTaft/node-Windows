var bindings       = require('./api'),
    decorate       = require('./utils').decorate,
    ref            = require('ref');

var NULL           = bindings.NULL;

var hookcb         = bindings('HOOKPROC'),
    wndcb          = bindings('WNDPROC'),
    MouseHookData  = bindings('MSLLHOOKSTRUCT'),
    WndClassEx     = bindings('WNDCLASSEXA'),
    WndClass       = bindings('WNDCLASSA'),
    Handle         = bindings('HHOOK'),
    Msg            = bindings('MSG'),
    MsgPtr         = bindings('LPMSG'),
    LPCSTR         = bindings('LPCSTR'),
    HOOKTYPE       = bindings('HOOKTYPE'),
    LRESULT        = bindings('LRESULT'),
    IDI            = bindings('IDI'),
    IDC            = bindings('IDC'),
    WS             = bindings('WS'),
    VK             = bindings('VK'),
    KEYS           = bindings('KEYS'),
    CS             = bindings('CS'),
    WS_EX          = bindings('WS_EX'),
    WM             = bindings('WM'),
    SO             = bindings('SO'),
    PM             = bindings('PM');

var HCURSOR        = bindings('HCURSOR'),
    HBRUSH         = bindings('HBRUSH'),
    LPVOID         = bindings('LPVOID'),
    HICON          = bindings('HICON');

var nextHook       = bindings('CallNextHookEx'),
    mouseEvent     = bindings('mouse_event'),
    addHook        = bindings('SetWindowsHookEx'),
    removeHook     = bindings('UnhookWindowsHookEx'),
    dispatchMsg    = bindings('DispatchMessage'),
    getHandle      = bindings('GetModuleHandle'),
    createWindow   = bindings('CreateWindowEx'),
    registerClass  = bindings('RegisterClass'),
    keyState       = bindings('GetKeyState'),
    registerClassEx= bindings('RegisterClassEx'),
    peekMsg        = bindings('PeekMessage'),
    defaultValue   = bindings('DefWindowProc'),
    moduleHandle   = bindings('GetModuleHandle'),
    loadIcon       = bindings('LoadIcon'),
    loadCursor     = bindings('LoadCursor'),
    getStockObject = bindings('GetStockObject'),
    updateWindow   = bindings('UpdateWindow'),
    showWindow     = bindings('ShowWindow');



var CW_USEDEFAULT = 0x80000000;



function LOBYTE(n){ return n & 0xff }
function HIBYTE(n){ return n >> 8 & 0xff }
function LOWORD(n){ return n & 0xffff }
function HIWORD(n){ return n >> 16 & 0xffff }

function isKeyDown(code){
  var state = keyState(code);
  return (state & 0x10000) === 0x10000;
}

function XB(){
  if (isKeyDown(5)) return 4;
  if (isKeyDown(6)) return 5;
  return 0;
}
// mouse_event: [VOID,    { dwFlags: DWORD, dx: DWORD, dy: DWORD, dwData: DWORD, dwExtraInfo: ULONG_PTR }],
// mouseEvent()

function MouseEvent(type, button, nc){
  this.type = type;
  this.button = button;
  if (nc) this.nonclient = true;
}

function crackMouseEvent(event){
  switch (event) {
    case 0x200: return new MouseEvent('mousemove'  ,   0   ,  true);
    case 0x201: return new MouseEvent('mousedown'  ,   1   ,  true);
    case 0x202: return new MouseEvent('mouseup'    ,   1   ,  true);
    case 0x203: return new MouseEvent('dblclick'   ,   1   ,  true);
    case 0x204: return new MouseEvent('mousedown'  ,   2   ,  true);
    case 0x205: return new MouseEvent('mouseup'    ,   2   ,  true);
    case 0x206: return new MouseEvent('dblclick'   ,   2   ,  true);
    case 0x207: return new MouseEvent('mousedown'  ,   3   ,  true);
    case 0x208: return new MouseEvent('mouseup'    ,   3   ,  true);
    case 0x209: return new MouseEvent('dblclick'   ,   3   ,  true);
    case 0x20A: return new MouseEvent('mousewheel' ,  'v'  ,  true);
    case 0x20B: return new MouseEvent('mousedown'  ,  XB() ,  true);
    case 0x20C: return new MouseEvent('mouseup'    ,  XB() ,  true);
    case 0x20D: return new MouseEvent('dblclick'   ,  XB() ,  true);
    case 0x20E: return new MouseEvent('mousewheel' ,  'h'  ,  true);
    case 0x0A0: return new MouseEvent('mousemove'  ,   0   , false);
    case 0x0A1: return new MouseEvent('mousedown'  ,   1   , false);
    case 0x0A2: return new MouseEvent('mouseup'    ,   1   , false);
    case 0x0A3: return new MouseEvent('dblclick'   ,   1   , false);
    case 0x0A4: return new MouseEvent('mousedown'  ,   2   , false);
    case 0x0A5: return new MouseEvent('mouseup'    ,   2   , false);
    case 0x0A6: return new MouseEvent('dblclick'   ,   2   , false);
    case 0x0A7: return new MouseEvent('mousedown'  ,   3   , false);
    case 0x0A8: return new MouseEvent('mouseup'    ,   3   , false);
    case 0x0A9: return new MouseEvent('dblclick'   ,   3   , false);
    case 0x0AA: return new MouseEvent('mousewheel' ,  'v'  , false);
    case 0x0AB: return new MouseEvent('mousedown'  ,  XB() , false);
    case 0x0AC: return new MouseEvent('mouseup'    ,  XB() , false);
    case 0x0AD: return new MouseEvent('dblclick'   ,  XB() , false);
    case 0x0AE: return new MouseEvent('mousewheel' ,  'H'  , false);
  }
}












function createMouseHook(callback){
  return new MouseObserver(callback);
};


module.exports = createMouseHook;


var hInst = moduleHandle("node-ffi");

var hook = createMouseHook(function(evt){
  console.log(evt);
});

function GetKeyStates(){
  var v = 0;
  if (HIWORD(keyState(KEYS.Mouse1)))  v +=1;
  if (HIWORD(keyState(KEYS.Mouse2)))  v +=2;
  if (HIWORD(keyState(KEYS.Shift)))   v +=4;
  if (HIWORD(keyState(KEYS.Control))) v +=8;
  if (HIWORD(keyState(KEYS.Mouse3)))  v +=16;
  if (HIWORD(keyState(KEYS.Mouse4)))  v +=32;
  if (HIWORD(keyState(KEYS.Mouse5)))  v +=64;
  return v;
}

function MouseObserver(callback){
  var self = this;
  this.messageLoop = new MessageLoop;
  this.observing = false;
  this.callback = callback;

  process.on('exit', function(){
    if (self.observing) {
      self.destroy();
    }
  });
}


decorate(MouseObserver.prototype, [
  function enable(){
    if (!this.observing && this.messageLoop.ready) {
      var self = this;
      var events = [];
      var last = Date.now();

      var hookproc = hookcb(function(code, wparam, lparam){
        if (code > -1 && wparam != 0x200 || Date.now() - last > 10) {
          events.push(crackMouseEvent(wparam));
        }
        return nextHook(self.hook, code, wparam, lparam);
      });

      this.hook = addHook(HOOKTYPE.MOUSE_LL, hookproc, hInst, 0);
      if (!this.hook) {
        console.log(new Error("SetWindowsHookEx() failed with code " + bindings.errno));
      }
      this.observing = true;
      this.messageLoop.run();

      void function dispatcher(){
        while (events.length) {
          self.callback(events.pop());
        }

        self.observing && setTimeout(dispatcher, 15);
      }();
    }
    return this;
  },
  function disable(){
    if (this.observing) {
      this.lastResult = removeHook(this.hook) || bindings.errno;
      this.hook = null;
      this.observing = false;
    }
    this.messageLoop.halt();
    return this;
  },
  function destroy(){
    this.destroy = function(){};
    this.disable();
    this.messageLoop.destroy();
    this.messageLoop = null;
    return this;
  }
]);


function MessageLoop(){
  var self = this;
  var msg = this.msg = new Msg();
  var result;
  this.looping = false;
  this.work = function work(){
    while (result = peekMsg(msg.ref(), self.hwnd, 0, 0, PM.REMOVE)) {
      console.log(msg.toObject());
      //defaultValue(msg.hWnd, msg.Msg, msg.wParam, msg.lParam);
      dispatchMsg(msg.ref());
    }
    self.looping && setTimeout(work, 10);
  }
}

decorate(MessageLoop.prototype, [
  function provideHwnd(hwnd){
    this.hwnd = hwnd;
    this.ready = true;
  },
  function destroy(){
    this.destroy = function(){};
    this.halt();
    this.lastMessage = null;
    this.work = null;
  },
  function run(){
    if (!this.looping && this.ready) {
      this.looping = true;
      this.work();
    }
    return this;
  },
  function halt(){
    this.looping = false;
    return this;
  }
]);


var wndproc = wndcb(function(hwnd, message, wparam, lparam){
  console.log(hwnd, message, wparam, lparam);
    switch (message) {
      case WM.CREATE:
        user32.ShowWindow(hwnd, SW.SHOWNORMAL);
        user32.UpdateWindow(hwnd);
        return 0;
    }

  return defaultValue(hwnd, message, wparam, lparam);
});

var className = 'MSGLOOPWINDOW';

var wndclass = new WndClass;
wndclass.style = CS.HREDRAW | CS.VREDRAW;
wndclass.lpfnWndProc = wndproc.Δ;
wndclass.cbClsExtra = 0;
wndclass.cbWndExtra = 0;
wndclass.hInstance = hInst;
wndclass.hIcon = loadIcon(NULL, IDI.APPLICATION);
wndclass.hCursor = loadCursor(NULL, IDC.ARROW);
wndclass.hbrBackground = getStockObject(SO.WHITE_BRUSH);
wndclass.lpszMenuName = 'menumenu';
wndclass.lpszClassName = className;

if (!registerClass(wndclass)) {
  return console.log('failed register', wndclass,  bindings.errno);
}


var msgHwnd = createWindow(0, className, 'MSG WINDOW', WS.OVERLAPPEDWINDOW,
                           CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT,
                           0, 0, hInst, NULL);


hook.messageLoop.provideHwnd(msgHwnd);
hook.enable();



//[HWND,{ dwExStyle: DWORD, lpClassName: string, lpWindowName: string, dwStyle: DWORD, X: int, Y: int, nWidth: int, nHeight: int, hWndParent: HWND, hMenu: HMENU, hInstance: HINSTANCE, lpParam: LPVOID } ],
