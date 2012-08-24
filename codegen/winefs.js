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
