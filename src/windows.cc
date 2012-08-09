#include <v8.h>
#include <node.h>
#include <Psapi.h>

#pragma comment(lib, "Psapi.lib")

using namespace v8;
using namespace node;

#define EXPORT_FUNCTION(n, m) \
  Local<String> name_##n = String::NewSymbol(#n); \
  Local<Function> fn_##n = FunctionTemplate::New(m)->GetFunction(); \
  fn_##n->SetName(name_##n); \
  target->Set(name_##n, fn_##n);

char* JSValToChar(Handle<String> str) {
  int len = str->Utf8Length();
  char* buf = new char[len + 1];
  str->WriteUtf8(buf, len + 1);
  return buf;
}

char* JSValToChar(Local<Value> val) {
  return JSValToChar(val->ToString());
}

wchar_t* JSValToWchar(Handle<String> str) {
  char* buf = JSValToChar(str);
  int len = MultiByteToWideChar(CP_UTF8, 0, buf, -1, NULL, 0);
  wchar_t* wBuf = new wchar_t[len];
  MultiByteToWideChar(CP_UTF8, 0, buf, -1, (LPWSTR)wBuf, len);
  return wBuf;
}

wchar_t* JSValToWchar(Local<Value> val) {
  return JSValToWchar(val->ToString());
}

Handle<Value> GetFileAttrs(const Arguments& args){
  HandleScope scope;
  char* filename = JSValToChar(args[0]);
  return scope.Close(Integer::New(GetFileAttributes(filename)));
}

Handle<Value> SetFileAttrs(const Arguments& args){
  HandleScope scope;
  char* filename = JSValToChar(args[0]);
  int flag = args[1]->Int32Value();
  return scope.Close(Integer::New(SetFileAttributes(filename, flag)));
}

Handle<Value> GetWindowStyle(const Arguments& args) {
  HandleScope scope;
  return scope.Close(Integer::New((long)GetWindowLongPtr((HWND)args[0]->Int32Value(), GWL_STYLE)));
}

Handle<Value> SetWindowStyle(const Arguments& args) {
  HandleScope scope;
  SetWindowLongPtr((HWND)args[0]->Int32Value(), GWL_STYLE, (LONG_PTR)args[1]->Int32Value());
  return scope.Close(Undefined());
}

Handle<Value> GetExtendedWindowStyle(const Arguments& args) {
  HandleScope scope;
  return Integer::New((long)GetWindowLongPtr((HWND)args[0]->Int32Value(), GWL_EXSTYLE));
}

Handle<Value> SetExtendedWindowStyle(const Arguments& args) {
  HandleScope scope;
  SetWindowLongPtr((HWND)args[0]->Int32Value(), GWL_EXSTYLE, args[1]->Int32Value());
  return scope.Close(Undefined());
}



#define STRING_WCHAR(str) String::New((uint16_t*)str, wcslen(str))


BOOL IsAltTabWindow(HWND hwnd) {
  TITLEBARINFO ti;
  HWND hwndTry, hwndWalk = NULL;

  if (!IsWindowVisible(hwnd))
    return false;

  hwndTry = GetAncestor(hwnd, GA_ROOTOWNER);
  while (hwndTry != hwndWalk) {
    hwndWalk = hwndTry;
    hwndTry = GetLastActivePopup(hwndWalk);
    if (IsWindowVisible(hwndTry))
      break;
  }
  if (hwndWalk != hwnd)
    return false;

  ti.cbSize = sizeof(ti);
  GetTitleBarInfo(hwnd, &ti);
  if (ti.rgstate[0] & STATE_SYSTEM_INVISIBLE)
    return true;

  return true;
}

Handle<Value> GetWindowTitle(const Arguments& args) {
  HandleScope scope;
  HWND hwnd = (HWND)args[0]->Int32Value();
  TCHAR title[80];
  ZeroMemory(title, sizeof(title));
  GetWindowText(hwnd, title, 80);
  return scope.Close(String::New(title));
}

Handle<Value> SetWindowTitle(const Arguments& args) {
  HandleScope scope;
  HWND hwnd = (HWND)args[0]->Int32Value();
  wchar_t* title = JSValToWchar(args[1]);
  return scope.Close(Boolean::New(SendMessage(hwnd, WM_SETTEXT, 0, (LPARAM)title)));
}


Handle<Value> GetWindowFilename(const Arguments& args) {
  HandleScope scope;
  HWND hwnd = (HWND)args[0]->Int32Value();
  DWORD pid;
  GetWindowThreadProcessId(hwnd, &pid);
  HANDLE proc = OpenProcess(PROCESS_ALL_ACCESS, false, pid);
  char filename[MAX_PATH];
  ZeroMemory(filename, sizeof(filename));
  GetModuleFileNameExA(proc, 0, filename, MAX_PATH);
  CloseHandle(proc);
  return scope.Close(String::New(filename));
}


BOOL CALLBACK EnumWindowsCallback(HWND hwnd, LPARAM lparam) {
  if (hwnd && IsAltTabWindow(hwnd)) {
    Local<Array> windows = *(reinterpret_cast<Local<Array>*>(lparam));
    windows->Set(windows->Length(), Integer::New((long)hwnd));
  }
  return true;
}

Handle<Value> ListWindows(const Arguments& args) {
  HandleScope scope;
  Local<Array> windows = Array::New();
  EnumWindows(EnumWindowsCallback, reinterpret_cast<LPARAM>(&windows));
  return scope.Close(windows);
}

void init(Handle<Object> target) {
  EXPORT_FUNCTION(getFileAttributes, GetFileAttrs);
  EXPORT_FUNCTION(setFileAttributes, SetFileAttrs);
  EXPORT_FUNCTION(getWindowStyle, GetWindowStyle);
  EXPORT_FUNCTION(setWindowStyle, SetWindowStyle);
  EXPORT_FUNCTION(getExtendedWindowStyle, GetExtendedWindowStyle);
  EXPORT_FUNCTION(setExtendedWindowStyle, SetExtendedWindowStyle);
  EXPORT_FUNCTION(listWindows, ListWindows);
  EXPORT_FUNCTION(getWindowTitle, GetWindowTitle);
  EXPORT_FUNCTION(setWindowTitle, SetWindowTitle);
  EXPORT_FUNCTION(getModuleFilename, GetWindowFilename);
}

NODE_MODULE(windows, init);


