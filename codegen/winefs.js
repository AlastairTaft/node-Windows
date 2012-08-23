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
 PBYTE = uchar.Δ.typedef('PBYTE'),
 PDWORD = ulong.Δ.typedef('PDWORD'),
 LPVOID = _void.Δ.typedef('LPVOID'),
 LPWSTR = ushort.Δ.typedef('LPWSTR'),
 LPCWSTR = ushort.Δ.typedef('LPCWSTR'),
 ALG_ID = uint.typedef('ALG_ID');





var EFS_CERTIFICATE_BLOB = new StructT('EFS_CERTIFICATE_BLOB', {
 dwCertEncodingType: DWORD,
 cbData: DWORD,
 pbData: PBYTE
});

var EFS_HASH_BLOB = new StructT('EFS_HASH_BLOB', {
 cbData: DWORD,
 pbData: PBYTE
});

var EFS_RPC_BLOB = new StructT('EFS_RPC_BLOB', {
 cbData: DWORD,
 pbData: PBYTE
});

var EFS_PIN_BLOB = new StructT('EFS_PIN_BLOB', {
 cbPadding: DWORD,
 cbData: DWORD,
 pbData: PBYTE
});

var EFS_KEY_INFO = new StructT('EFS_KEY_INFO', {
 dwVersion: DWORD,
 Entropy: ULONG,
 Algorithm: ALG_ID,
 KeyLength: ULONG
});

var EFS_COMPATIBILITY_INFO = new StructT('EFS_COMPATIBILITY_INFO', {
 EfsVersion: DWORD
});

var EFS_DECRYPTION_STATUS_INFO = new StructT('EFS_DECRYPTION_STATUS_INFO', {
 dwDecryptionError: DWORD,
 dwHashOffset: DWORD,
 cbHash: DWORD
});

var EFS_ENCRYPTION_STATUS_INFO = new StructT('EFS_ENCRYPTION_STATUS_INFO', {
 bHasCurrentKey: BOOL,
 dwEncryptionError: DWORD
});

var ENCRYPTION_CERTIFICATE = new StructT('ENCRYPTION_CERTIFICATE', {
 cbTotalLength: DWORD,
 pUserSid: SID.Δ,
 pCertBlob: PEFS_CERTIFICATE_BLOB
});

var ENCRYPTION_CERTIFICATE_HASH = new StructT('ENCRYPTION_CERTIFICATE_HASH', {
 cbTotalLength: DWORD,
 pUserSid: SID.Δ,
 pHash: PEFS_HASH_BLOB,
 lpDisplayInformation: LPWSTR
});

var ENCRYPTION_CERTIFICATE_HASH_LIST = new StructT('ENCRYPTION_CERTIFICATE_HASH_LIST', {
 nCert_Hash: DWORD,
 pUsers: PENCRYPTION_CERTIFICATE_HASH.Δ
});

var ENCRYPTION_CERTIFICATE_LIST = new StructT('ENCRYPTION_CERTIFICATE_LIST', {
 nUsers: DWORD,
 pUsers: PENCRYPTION_CERTIFICATE.Δ
});

var ENCRYPTED_FILE_METADATA_SIGNATURE = new StructT('ENCRYPTED_FILE_METADATA_SIGNATURE', {
 dwEfsAccessType: DWORD,
 pCertificatesAdded: PENCRYPTION_CERTIFICATE_HASH_LIST,
 pEncryptionCertificate: PENCRYPTION_CERTIFICATE,
 pEfsStreamSignature: PEFS_RPC_BLOB
});


  QueryUsersOnEncryptedFile: [ DWORD, { lpFileName: LPCWSTR, pUsers: PENCRYPTION_CERTIFICATE_HASH_LIST.Δ } ],
  QueryRecoveryAgentsOnEncryptedFile: [ DWORD, { lpFileName: LPCWSTR, pRecoveryAgents: PENCRYPTION_CERTIFICATE_HASH_LIST.Δ } ],
  RemoveUsersFromEncryptedFile: [ DWORD, { lpFileName: LPCWSTR, pHashes: PENCRYPTION_CERTIFICATE_HASH_LIST } ],
  AddUsersToEncryptedFile: [ DWORD, { lpFileName: LPCWSTR, pEncryptionCertificates: PENCRYPTION_CERTIFICATE_LIST } ],
  SetUserFileEncryptionKey: [ DWORD, { pEncryptionCertificate: PENCRYPTION_CERTIFICATE } ],
  SetUserFileEncryptionKeyEx: [ DWORD, { pEncryptionCertificate: PENCRYPTION_CERTIFICATE, dwCapabilities: DWORD, dwFlags: DWORD, pvReserved: LPVOID } ],
  FreeEncryptionCertificateHashList: [ _void, { pUsers: PENCRYPTION_CERTIFICATE_HASH_LIST } ],
  EncryptionDisable: [ BOOL, { DirPath: LPCWSTR, Disable: BOOL } ],
  DuplicateEncryptionInfoFile: [ DWORD, { SrcFileName: LPCWSTR, DstFileName: LPCWSTR, dwCreationDistribution: DWORD, dwAttributes: DWORD, lpSecurityAttributes: LPSECURITY_ATTRIBUTES } ],
  GetEncryptedFileMetadata: [ DWORD, { lpFileName: LPCWSTR, pcbMetadata: PDWORD, ppbMetadata: PBYTE.Δ } ],
  SetEncryptedFileMetadata: [ DWORD, { lpFileName: LPCWSTR, pbOldMetadata: PBYTE, pbNewMetadata: PBYTE, pOwnerHash: PENCRYPTION_CERTIFICATE_HASH, dwOperation: DWORD, pCertificatesAdded: PENCRYPTION_CERTIFICATE_HASH_LIST } ],
  FreeEncryptedFileMetadata: [ _void, { pbMetadata: PBYTE } ],