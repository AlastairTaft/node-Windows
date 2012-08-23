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
 DWORD = ulong.typedef('DWORD'),
 BOOL = int.typedef('BOOL'),
 WORD = ushort.typedef('WORD'),
 LPINT = int.Δ.typedef('LPINT'),
 LPDWORD = ulong.Δ.typedef('LPDWORD'),
 PVOID = _void.Δ.typedef('PVOID'),
 HANDLE = _void.Δ.typedef('HANDLE'),
 u_short = ushort.typedef('u_short'),
 u_int = uint.typedef('u_int'),
 u_long = ulong.typedef('u_long'),
 SOCKET = uint.typedef('SOCKET');





var FD_SET = new StructT('FD_SET', {
 fd_count: u_int,
 fd_array: ARRAY(SOCKET, FD_SETSIZE)
});

var TIMEVAL = new StructT('TIMEVAL', {
 tv_sec: long,
 tv_usec: long
});

var HOSTENT = new StructT('HOSTENT', {
 h_name: char.Δ,
 h_aliases: char.Δ.Δ,
 h_addrtype: short,
 h_length: short,
 h_addr_list: char.Δ.Δ
});

var netent = new StructT('netent', {
 n_name: char.Δ,
 n_aliases: char.Δ.Δ,
 n_addrtype: short,
 n_net: u_long
});

var SERVENT = new StructT('SERVENT', {
 s_name: char.Δ,
 s_aliases: char.Δ.Δ,
 s_port: short,
 s_proto: char.Δ
});

var PROTOENT = new StructT('PROTOENT', {
 p_name: char.Δ,
 p_aliases: char.Δ.Δ,
 p_proto: short
});

var SOCKADDR_IN = new StructT('SOCKADDR_IN', {
 sin_family: short,
 sin_port: u_short,
 sin_addr: in_addr,
 sin_zero: ARRAY(undefined, 8)
});

var WSADATA = new StructT('WSADATA', {
 wVersion: WORD,
 wHighVersion: WORD,
 szDescription: ARRAY(undefined, undefined),
 szSystemStatus: ARRAY(undefined, undefined),
 iMaxSockets: ushort,
 iMaxUdpDg: ushort,
 lpVendorInfo: char.Δ
});

var ip_mreq = new StructT('ip_mreq', {
 imr_multiaddr: in_addr,
 imr_interface: in_addr
});

var SOCKADDR = new StructT('SOCKADDR', {
 sa_family: u_short,
 sa_data: ARRAY(undefined, 14)
});

var sockproto = new StructT('sockproto', {
 sp_family: u_short,
 sp_protocol: u_short
});

var LINGER = new StructT('LINGER', {
 l_onoff: u_short,
 l_linger: u_short
});

var TRANSMIT_FILE_BUFFERS = new StructT('TRANSMIT_FILE_BUFFERS', {
 Head: PVOID,
 HeadLength: DWORD,
 Tail: PVOID,
 TailLength: DWORD
});


  __WSAFDIsSet: [ _void, { fd_set.Δ: fd_set.Δ } ],
  accept: [ SOCKET, { s: SOCKET, addr: sockaddr.Δ, addrlen: int.Δ } ],
  bind: [ _void, { s: SOCKET, addr: sockaddr.Δ, namelen: int } ],
  closesocket: [ _void, { s: SOCKET } ],
  connect: [ _void, { s: SOCKET, name: sockaddr.Δ, namelen: int } ],
  ioctlsocket: [ _void, { s: SOCKET, cmd: long, argp: u_long.Δ } ],
  getpeername: [ _void, { s: SOCKET, name: sockaddr.Δ, namelen: int.Δ } ],
  getsockname: [ _void, { s: SOCKET, name: sockaddr.Δ, namelen: int.Δ } ],
  getsockopt: [ _void, { s: SOCKET, level: int, optname: int, optval: char.Δ, optlen: int.Δ } ],
  htonl: [ u_long, { hostlong: u_long } ],
  htons: [ u_short, { hostshort: u_short } ],
  inet_addr: [ _void, { cp: char.Δ } ],
  inet_ntoa: [ _void, { in: in_addr } ],
  listen: [ _void, { s: SOCKET, backlog: int } ],
  ntohl: [ u_long, { netlong: u_long } ],
  ntohs: [ u_short, { netshort: u_short } ],
  recv: [ _void, { s: SOCKET, buf: char.Δ, len: int, flags: int } ],
  recvfrom: [ _void, { s: SOCKET, buf: char.Δ, len: int, flags: int, from: sockaddr.Δ, fromlen: int.Δ } ],
  select: [ _void, { nfds: int, readfds: fd_set.Δ, writefds: fd_set.Δ, exceptfds: fd_set.Δ, timeout: timeval.Δ } ],
  send: [ _void, { s: SOCKET, buf: char.Δ, len: int, flags: int } ],
  sendto: [ _void, { s: SOCKET, buf: char.Δ, len: int, flags: int, to: sockaddr.Δ, tolen: int } ],
  setsockopt: [ _void, { s: SOCKET, level: int, optname: int, optval: char.Δ, optlen: int } ],
  shutdown: [ _void, { s: SOCKET, how: int } ],
  socket: [ SOCKET, { af: int, type: int, protocol: int } ],
  gethostbyaddr: [ HOSTENT, { addr: char.Δ, len: int, type: int } ],
  gethostbyname: [ HOSTENT, { name: char.Δ } ],
  gethostname: [ _void, { name: char.Δ, namelen: int } ],
  getservbyport: [ SERVENT, { port: int, proto: char.Δ } ],
  getservbyname: [ SERVENT, { name: char.Δ, proto: char.Δ } ],
  getprotobynumber: [ PROTOENT, { proto: int } ],
  getprotobyname: [ PROTOENT, { name: char.Δ } ],
  WSAStartup: [ _void, { wVersionRequired: WORD, lpWSAData: LPWSADATA } ],
  WSACleanup: [ _void, {  } ],
  WSASetLastError: [ _void, { iError: int } ],
  WSAGetLastError: [ _void, {  } ],
  WSAIsBlocking: [ BOOL, {  } ],
  WSAUnhookBlockingHook: [ _void, {  } ],
  WSASetBlockingHook: [ FARPROC, { lpBlockFunc: FARPROC } ],
  WSACancelBlockingCall: [ _void, {  } ],
  WSAAsyncGetServByName: [ HANDLE, { hWnd: HWND, wMsg: u_int, name: char.Δ, proto: char.Δ, buf: char.Δ, buflen: int } ],
  WSAAsyncGetServByPort: [ HANDLE, { hWnd: HWND, wMsg: u_int, port: int, proto: char.Δ, buf: char.Δ, buflen: int } ],
  WSAAsyncGetProtoByName: [ HANDLE, { hWnd: HWND, wMsg: u_int, name: char.Δ, buf: char.Δ, buflen: int } ],
  WSAAsyncGetProtoByNumber: [ HANDLE, { hWnd: HWND, wMsg: u_int, number: int, buf: char.Δ, buflen: int } ],
  WSAAsyncGetHostByName: [ HANDLE, { hWnd: HWND, wMsg: u_int, name: char.Δ, buf: char.Δ, buflen: int } ],
  WSAAsyncGetHostByAddr: [ HANDLE, { hWnd: HWND, wMsg: u_int, addr: char.Δ, len: int, type: int, buf: char.Δ, buflen: int } ],
  WSACancelAsyncRequest: [ _void, { hAsyncTaskHandle: HANDLE } ],
  WSAAsyncSelect: [ _void, { s: SOCKET, hWnd: HWND, wMsg: u_int, lEvent: long } ],
  WSARecvEx: [ _void, { s: SOCKET, buf: char.Δ, len: int, flags: int.Δ } ],
  TransmitFile: [ BOOL, { hSocket: SOCKET, hFile: HANDLE, nNumberOfBytesToWrite: DWORD, nNumberOfBytesPerSend: DWORD, lpOverlapped: LPOVERLAPPED, lpTransmitBuffers: LPTRANSMIT_FILE_BUFFERS, dwReserved: DWORD } ],
  AcceptEx: [ BOOL, { sListenSocket: SOCKET, sAcceptSocket: SOCKET, lpOutputBuffer: PVOID, dwReceiveDataLength: DWORD, dwLocalAddressLength: DWORD, dwRemoteAddressLength: DWORD, lpdwBytesReceived: LPDWORD, lpOverlapped: LPOVERLAPPED } ],
  GetAcceptExSockaddrs: [ _void, { lpOutputBuffer: PVOID, dwReceiveDataLength: DWORD, dwLocalAddressLength: DWORD, dwRemoteAddressLength: DWORD, LocalSockaddr: sockaddr.Δ.Δ, LocalSockaddrLength: LPINT, RemoteSockaddr: sockaddr.Δ.Δ, RemoteSockaddrLength: LPINT } ],