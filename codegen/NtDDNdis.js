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
 NET_IF_OPER_STATUS = uint.typedef('NET_IF_OPER_STATUS'),
 NET_IFINDEX = int.typedef('NET_IFINDEX'),
 NET_IF_DIRECTION_TYPE = uint.typedef('NET_IF_DIRECTION_TYPE'),
 NET_IF_MEDIA_CONNECT_STATE = uint.typedef('NET_IF_MEDIA_CONNECT_STATE'),
 NET_IF_MEDIA_DUPLEX_STATE = uint.typedef('NET_IF_MEDIA_DUPLEX_STATE'),
 NDIS_OID = int.typedef('NDIS_OID'),
 NDIS_802_11_MAC_ADDRESS = new ArrayT(ConstantArray).typedef('NDIS_802_11_MAC_ADDRESS'),
 NDIS_802_11_RSSI = int.typedef('NDIS_802_11_RSSI'),
 NDIS_802_11_KEY_RSC = int.typedef('NDIS_802_11_KEY_RSC'),
 NDIS_802_11_RATES = new ArrayT(ConstantArray).typedef('NDIS_802_11_RATES'),
 NDIS_802_11_RATES_EX = new ArrayT(ConstantArray).typedef('NDIS_802_11_RATES_EX'),
 NDIS_802_11_PMKID_VALUE = new ArrayT(ConstantArray).typedef('NDIS_802_11_PMKID_VALUE'),
 IPAddr = int.typedef('IPAddr'),
 SPI_TYPE = int.typedef('SPI_TYPE'),
 NDIS_STATUS = int.typedef('NDIS_STATUS'),
 NDIS_MEDIA_CONNECT_STATE = uint.typedef('NDIS_MEDIA_CONNECT_STATE'),
 NDIS_MEDIA_DUPLEX_STATE = uint.typedef('NDIS_MEDIA_DUPLEX_STATE'),
 NDIS_PORT_NUMBER = int.typedef('NDIS_PORT_NUMBER');

var _NDIS_INTERRUPT_MODERATION = new EnumT('_NDIS_INTERRUPT_MODERATION', {
 Unknown: 0,
 NotSupported: 1,
 Enabled: 2,
 Disabled: 3
});

var _NDIS_802_11_STATUS_TYPE = new EnumT('_NDIS_802_11_STATUS_TYPE', {
 Authentication: 0,
 MediaStreamMode: 1,
 PmkidCandidateList: 2,
 Max: 3
});

var _NDIS_802_11_NETWORK_TYPE = new EnumT('_NDIS_802_11_NETWORK_TYPE', {
 11fh: 0,
 11ds: 1,
 11ofdm5: 2,
 11ofdm24: 3,
 Automode: 4,
 Max: 5
});

var _NDIS_802_11_POWER_MODE = new EnumT('_NDIS_802_11_POWER_MODE', {
 Cam: 0,
 MaxPsp: 1,
 FastPsp: 2,
 Max: 3
});

var _NDIS_802_11_NETWORK_INFRASTRUCTURE = new EnumT('_NDIS_802_11_NETWORK_INFRASTRUCTURE', {
 11ibss: 0,
 Infrastructure: 1,
 AutoUnknown: 2,
 Max: 3
});

var _NDIS_802_11_AUTHENTICATION_MODE = new EnumT('_NDIS_802_11_AUTHENTICATION_MODE', {
 Open: 0,
 Shared: 1,
 AutoSwitch: 2,
 Wpa: 3,
 Wpapsk: 4,
 WpaNone: 5,
 Wpa2: 6,
 Wpa2psk: 7,
 Max: 8
});

var _NDIS_802_11_PRIVACY_FILTER = new EnumT('_NDIS_802_11_PRIVACY_FILTER', {
 AcceptAll: 0,
 8021xwep: 1
});

var _NDIS_802_11_WEP_STATUS = new EnumT('_NDIS_802_11_WEP_STATUS', {
 Enabled: 0,
 EncryptionEnabled: 1,
 Disabled: 2,
 EncryptionDisabled: 3,
 KeyAbsent: 4,
 EncryptionKeyAbsent: 5,
 NotSupported: 6,
 EncryptionNotSupported: 7,
 EncryptionEnabled: 8,
 EncryptionKeyAbsent: 9,
 Encryption3Enabled: 10,
 Encryption3KeyAbsent: 11
});

var _NDIS_802_11_RELOAD_DEFAULTS = new EnumT('_NDIS_802_11_RELOAD_DEFAULTS', {
 WepKeys: 0
});

var _NDIS_802_11_MEDIA_STREAM_MODE = new EnumT('_NDIS_802_11_MEDIA_STREAM_MODE', {
 Off: 0,
 On: 1
});

var _NDIS_802_11_RADIO_STATUS = new EnumT('_NDIS_802_11_RADIO_STATUS', {
 On: 0,
 HardwareOff: 1,
 SoftwareOff: 2,
 HardwareSoftwareOff: 3,
 Max: 4
});

var _OFFLOAD_OPERATION_E = new EnumT('_OFFLOAD_OPERATION_E', {
 Authenticate: 1,
 Encrypt: 1
});

var _OFFLOAD_CONF_ALGO = new EnumT('_OFFLOAD_CONF_ALGO', {
 IpsecNone: 0,
 IpsecDes: 1,
 IpsecReserved: 2,
 Ipsec3Des: 3,
 IpsecMax: 4
});

var _OFFLOAD_INTEGRITY_ALGO = new EnumT('_OFFLOAD_INTEGRITY_ALGO', {
 IpsecNone: 0,
 IpsecMd5: 1,
 IpsecSha: 2,
 IpsecMax: 3
});

var _UDP_ENCAP_TYPE = new EnumT('_UDP_ENCAP_TYPE', {
 OffloadIpsecUdpespIke: 0,
 OffloadIpsecUdpespOther: 1
});

var _NDIS_MEDIUM = new EnumT('_NDIS_MEDIUM', {
 8023: 0,
 8025: 1,
 Fddi: 2,
 Wan: 3,
 LocalTalk: 4,
 Dix: 5,
 ArcnetRaw: 6,
 Arcnet8782: 7,
 Atm: 8,
 WirelessWan: 9,
 Irda: 10,
 Bpc: 11,
 CoWan: 12,
 1394: 13,
 InfiniBand: 14,
 Tunnel: 15,
 Native80211: 16,
 Loopback: 17,
 WiMax: 18,
 Ip: 19,
 Max: 20
});

var _NDIS_PHYSICAL_MEDIUM = new EnumT('_NDIS_PHYSICAL_MEDIUM', {
 Unspecified: 0,
 WirelessLan: 1,
 CableModem: 2,
 PhoneLine: 3,
 PowerLine: 4,
 Dsl: 5,
 FibreChannel: 6,
 1394: 7,
 WirelessWan: 8,
 Native80211: 9,
 Bluetooth: 10,
 Infiniband: 11,
 WiMax: 12,
 Uwb: 13,
 8023: 14,
 8025: 15,
 Irda: 16,
 WiredWan: 17,
 WiredCoWan: 18,
 Other: 19,
 Max: 20
});

var _NDIS_HARDWARE_STATUS = new EnumT('_NDIS_HARDWARE_STATUS', {
 Ready: 0,
 Initializing: 1,
 Reset: 2,
 Closing: 3,
 NotReady: 4
});

var _NDIS_DEVICE_POWER_STATE = new EnumT('_NDIS_DEVICE_POWER_STATE', {
 Unspecified: 0,
 D0: 1,
 D1: 2,
 D2: 3,
 D3: 4,
 Maximum: 5
});

var _NDIS_FDDI_ATTACHMENT_TYPE = new EnumT('_NDIS_FDDI_ATTACHMENT_TYPE', {
 Isolated: 1,
 LocalA: 1,
 LocalB: 2,
 LocalAb: 3,
 LocalS: 4,
 WrapA: 5,
 WrapB: 6,
 WrapAb: 7,
 WrapS: 8,
 WrapA: 9,
 WrapB: 10,
 WrapS: 11,
 Through: 12
});

var _NDIS_FDDI_RING_MGT_STATE = new EnumT('_NDIS_FDDI_RING_MGT_STATE', {
 Isolated: 1,
 NonOperational: 1,
 Operational: 2,
 Detect: 3,
 NonOperationalDup: 4,
 OperationalDup: 5,
 Directed: 6,
 Trace: 7
});

var _NDIS_FDDI_LCONNECTION_STATE = new EnumT('_NDIS_FDDI_LCONNECTION_STATE', {
 Off: 1,
 Break: 1,
 Trace: 2,
 Connect: 3,
 Next: 4,
 Signal: 5,
 Join: 6,
 Verify: 7,
 Active: 8,
 Maintenance: 9
});

var _NDIS_WAN_MEDIUM_SUBTYPE = new EnumT('_NDIS_WAN_MEDIUM_SUBTYPE', {
 Hub: 0,
 X25: 1,
 Isdn: 2,
 Serial: 3,
 FrameRelay: 4,
 Atm: 5,
 Sonet: 6,
 Sw56k: 7,
 Pptp: 8,
 L2tp: 9,
 Irda: 10,
 Parallel: 11,
 Pppoe: 12,
 Sstp: 13,
 AgileVpn: 14
});

var _NDIS_WAN_HEADER_FORMAT = new EnumT('_NDIS_WAN_HEADER_FORMAT', {
 Native: 0,
 Ethernet: 1
});

var _NDIS_WAN_QUALITY = new EnumT('_NDIS_WAN_QUALITY', {
 Raw: 0,
 ErrorControl: 1,
 Reliable: 2
});

var _NDIS_802_5_RING_STATE = new EnumT('_NDIS_802_5_RING_STATE', {
 Opened: 1,
 Closed: 1,
 Opening: 2,
 Closing: 3,
 OpenFailure: 4,
 Failure: 5
});

var _NDIS_MEDIA_STATE = new EnumT('_NDIS_MEDIA_STATE', {
 Connected: 0,
 Disconnected: 1
});

var _NDIS_SUPPORTED_PAUSE_FUNCTIONS = new EnumT('_NDIS_SUPPORTED_PAUSE_FUNCTIONS', {
 Unsupported: 0,
 SendOnly: 1,
 ReceiveOnly: 2,
 SendAndReceive: 3,
 Unknown: 4
});

var _NDIS_PORT_TYPE = new EnumT('_NDIS_PORT_TYPE', {
 Undefined: 0,
 Bridge: 1,
 RasConnection: 2,
 8021xSupplicant: 3,
 Max: 4
});

var _NDIS_PORT_AUTHORIZATION_STATE = new EnumT('_NDIS_PORT_AUTHORIZATION_STATE', {
 Unknown: 0,
 Authorized: 1,
 Unauthorized: 2,
 Reauthorizing: 3
});

var _NDIS_PORT_CONTROL_STATE = new EnumT('_NDIS_PORT_CONTROL_STATE', {
 Unknown: 0,
 Controlled: 1,
 Uncontrolled: 2
});

var _NDIS_NETWORK_CHANGE_TYPE = new EnumT('_NDIS_NETWORK_CHANGE_TYPE', {
 PossibleChange: 1,
 DefinitelyChange: 1,
 FromMediaConnect: 2,
 Max: 3
});

var _NDIS_PROCESSOR_VENDOR = new EnumT('_NDIS_PROCESSOR_VENDOR', {
 Unknown: 0,
 GenuinIntel: 1,
 GenuineIntel: 2,
 AuthenticAmd: 3
});




var UNALIGNED = new StructT('UNALIGNED', {
 Oid: NDIS_OID,
 DataLength: int,
 Data: ARRAY(undefined, undefined)
});

var UNALIGNED = new StructT('UNALIGNED', {
 Oid: NDIS_OID,
 DataLength: int,
 Length: int,
 Data: ARRAY(undefined, undefined)
});

var NDIS_VAR_DATA_DESC = new StructT('NDIS_VAR_DATA_DESC', {
 Length: int,
 MaximumLength: int,
 Offset: int
});

var NDIS_OBJECT_HEADER = new StructT('NDIS_OBJECT_HEADER', {
 Type: int,
 Revision: int,
 Size: int
});

var NDIS_STATISTICS_INFO = new StructT('NDIS_STATISTICS_INFO', {
 Header: NDIS_OBJECT_HEADER,
 SupportedStatistics: int,
 ifInDiscards: int,
 ifInErrors: int,
 ifHCInOctets: int,
 ifHCInUcastPkts: int,
 ifHCInMulticastPkts: int,
 ifHCInBroadcastPkts: int,
 ifHCOutOctets: int,
 ifHCOutUcastPkts: int,
 ifHCOutMulticastPkts: int,
 ifHCOutBroadcastPkts: int,
 ifOutErrors: int,
 ifOutDiscards: int,
 ifHCInUcastOctets: int,
 ifHCInMulticastOctets: int,
 ifHCInBroadcastOctets: int,
 ifHCOutUcastOctets: int,
 ifHCOutMulticastOctets: int,
 ifHCOutBroadcastOctets: int
});

var NDIS_INTERRUPT_MODERATION_PARAMETERS = new StructT('NDIS_INTERRUPT_MODERATION_PARAMETERS', {
 Header: NDIS_OBJECT_HEADER,
 Flags: int,
 InterruptModeration: NDIS_INTERRUPT_MODERATION
});

var NDIS_TIMEOUT_DPC_REQUEST_CAPABILITIES = new StructT('NDIS_TIMEOUT_DPC_REQUEST_CAPABILITIES', {
 Header: NDIS_OBJECT_HEADER,
 Flags: int,
 TimeoutArrayLength: int,
 TimeoutArray: ARRAY(undefined, undefined)
});

var NDIS_PCI_DEVICE_CUSTOM_PROPERTIES = new StructT('NDIS_PCI_DEVICE_CUSTOM_PROPERTIES', {
 Header: NDIS_OBJECT_HEADER,
 DeviceType: int,
 CurrentSpeedAndMode: int,
 CurrentPayloadSize: int,
 MaxPayloadSize: int,
 MaxReadRequestSize: int,
 CurrentLinkSpeed: int,
 CurrentLinkWidth: int,
 MaxLinkSpeed: int,
 MaxLinkWidth: int,
 PciExpressVersion: int,
 InterruptType: int,
 MaxInterruptMessages: int
});

var _NDIS_802_11_STATUS_INDICATION = new StructT('_NDIS_802_11_STATUS_INDICATION', {
 StatusType: NDIS_802_11_STATUS_TYPE
});

var NDIS_802_11_AUTHENTICATION_REQUEST = new StructT('NDIS_802_11_AUTHENTICATION_REQUEST', {
 Length: int,
 Bssid: ARRAY(NDIS_802_11_MAC_ADDRESS, undefined),
 Flags: int
});

var PMKID_CANDIDATE = new StructT('PMKID_CANDIDATE', {
 BSSID: ARRAY(NDIS_802_11_MAC_ADDRESS, undefined),
 Flags: int
});

var NDIS_802_11_PMKID_CANDIDATE_LIST = new StructT('NDIS_802_11_PMKID_CANDIDATE_LIST', {
 Version: int,
 NumCandidates: int,
 CandidateList: int
});

var NDIS_802_11_NETWORK_TYPE_LIST = new StructT('NDIS_802_11_NETWORK_TYPE_LIST', {
 NumberOfItems: int,
 NetworkType: ARRAY(NDIS_802_11_NETWORK_TYPE, 1)
});

var NDIS_802_11_CONFIGURATION_FH = new StructT('NDIS_802_11_CONFIGURATION_FH', {
 Length: int,
 HopPattern: int,
 HopSet: int,
 DwellTime: int
});

var NDIS_802_11_CONFIGURATION = new StructT('NDIS_802_11_CONFIGURATION', {
 Length: int,
 BeaconPeriod: int,
 ATIMWindow: int,
 DSConfig: int,
 FHConfig: NDIS_802_11_CONFIGURATION_FH
});

var NDIS_802_11_STATISTICS = new StructT('NDIS_802_11_STATISTICS', {
 Length: int,
 TransmittedFragmentCount: int,
 MulticastTransmittedFrameCount: int,
 FailedCount: int,
 RetryCount: int,
 MultipleRetryCount: int,
 RTSSuccessCount: int,
 RTSFailureCount: int,
 ACKFailureCount: int,
 FrameDuplicateCount: int,
 ReceivedFragmentCount: int,
 MulticastReceivedFrameCount: int,
 FCSErrorCount: int,
 TKIPLocalMICFailures: int,
 TKIPICVErrorCount: int,
 TKIPCounterMeasuresInvoked: int,
 TKIPReplays: int,
 CCMPFormatErrors: int,
 CCMPReplays: int,
 CCMPDecryptErrors: int,
 FourWayHandshakeFailures: int,
 WEPUndecryptableCount: int,
 WEPICVErrorCount: int,
 DecryptSuccessCount: int,
 DecryptFailureCount: int
});

var NDIS_802_11_KEY = new StructT('NDIS_802_11_KEY', {
 Length: int,
 KeyIndex: int,
 KeyLength: int,
 BSSID: ARRAY(NDIS_802_11_MAC_ADDRESS, undefined),
 KeyRSC: NDIS_802_11_KEY_RSC,
 KeyMaterial: ARRAY(undefined, undefined)
});

var NDIS_802_11_REMOVE_KEY = new StructT('NDIS_802_11_REMOVE_KEY', {
 Length: int,
 KeyIndex: int,
 BSSID: ARRAY(NDIS_802_11_MAC_ADDRESS, undefined)
});

var NDIS_802_11_WEP = new StructT('NDIS_802_11_WEP', {
 Length: int,
 KeyIndex: int,
 KeyLength: int,
 KeyMaterial: ARRAY(undefined, undefined)
});

var NDIS_802_11_SSID = new StructT('NDIS_802_11_SSID', {
 SsidLength: int,
 Ssid: ARRAY(undefined, undefined)
});

var NDIS_WLAN_BSSID = new StructT('NDIS_WLAN_BSSID', {
 Length: int,
 MacAddress: ARRAY(NDIS_802_11_MAC_ADDRESS, undefined),
 Reserved: ARRAY(undefined, undefined),
 Ssid: NDIS_802_11_SSID,
 Privacy: int,
 Rssi: NDIS_802_11_RSSI,
 NetworkTypeInUse: NDIS_802_11_NETWORK_TYPE,
 Configuration: NDIS_802_11_CONFIGURATION,
 InfrastructureMode: NDIS_802_11_NETWORK_INFRASTRUCTURE,
 SupportedRates: ARRAY(NDIS_802_11_RATES, undefined)
});

var NDIS_802_11_BSSID_LIST = new StructT('NDIS_802_11_BSSID_LIST', {
 NumberOfItems: int,
 Bssid: int
});

var NDIS_WLAN_BSSID_EX = new StructT('NDIS_WLAN_BSSID_EX', {
 Length: int,
 MacAddress: ARRAY(NDIS_802_11_MAC_ADDRESS, undefined),
 Reserved: ARRAY(undefined, undefined),
 Ssid: NDIS_802_11_SSID,
 Privacy: int,
 Rssi: NDIS_802_11_RSSI,
 NetworkTypeInUse: NDIS_802_11_NETWORK_TYPE,
 Configuration: NDIS_802_11_CONFIGURATION,
 InfrastructureMode: NDIS_802_11_NETWORK_INFRASTRUCTURE,
 SupportedRates: ARRAY(NDIS_802_11_RATES_EX, undefined),
 IELength: int,
 IEs: ARRAY(undefined, undefined)
});

var NDIS_802_11_BSSID_LIST_EX = new StructT('NDIS_802_11_BSSID_LIST_EX', {
 NumberOfItems: int,
 Bssid: int
});

var NDIS_802_11_FIXED_IEs = new StructT('NDIS_802_11_FIXED_IEs', {
 Timestamp: ARRAY(undefined, undefined),
 BeaconInterval: int,
 Capabilities: int
});

var NDIS_802_11_VARIABLE_IEs = new StructT('NDIS_802_11_VARIABLE_IEs', {
 ElementID: int,
 Length: int,
 data: ARRAY(undefined, undefined)
});

var NDIS_802_11_AI_REQFI = new StructT('NDIS_802_11_AI_REQFI', {
 Capabilities: int,
 ListenInterval: int,
 CurrentAPAddress: ARRAY(NDIS_802_11_MAC_ADDRESS, undefined)
});

var NDIS_802_11_AI_RESFI = new StructT('NDIS_802_11_AI_RESFI', {
 Capabilities: int,
 StatusCode: int,
 AssociationId: int
});

var NDIS_802_11_ASSOCIATION_INFORMATION = new StructT('NDIS_802_11_ASSOCIATION_INFORMATION', {
 Length: int,
 AvailableRequestFixedIEs: int,
 RequestFixedIEs: NDIS_802_11_AI_REQFI,
 RequestIELength: int,
 OffsetRequestIEs: int,
 AvailableResponseFixedIEs: int,
 ResponseFixedIEs: NDIS_802_11_AI_RESFI,
 ResponseIELength: int,
 OffsetResponseIEs: int
});

var NDIS_802_11_AUTHENTICATION_EVENT = new StructT('NDIS_802_11_AUTHENTICATION_EVENT', {
 Status: NDIS_802_11_STATUS_INDICATION,
 Request: int
});

var NDIS_802_11_TEST = new StructT('NDIS_802_11_TEST', {
 Length: int,
 Type: int
});

var _BSSID_INFO = new StructT('_BSSID_INFO', {
 BSSID: ARRAY(NDIS_802_11_MAC_ADDRESS, undefined),
 PMKID: ARRAY(NDIS_802_11_PMKID_VALUE, undefined)
});

var NDIS_802_11_PMKID = new StructT('NDIS_802_11_PMKID', {
 Length: int,
 BSSIDInfoCount: int,
 BSSIDInfo: ARRAY(BSSID_INFO, 1)
});

var _NDIS_802_11_AUTHENTICATION_ENCRYPTION = new StructT('_NDIS_802_11_AUTHENTICATION_ENCRYPTION', {
 AuthModeSupported: NDIS_802_11_AUTHENTICATION_MODE,
 EncryptStatusSupported: NDIS_802_11_ENCRYPTION_STATUS
});

var NDIS_802_11_CAPABILITY = new StructT('NDIS_802_11_CAPABILITY', {
 Length: int,
 Version: int,
 NoOfPMKIDs: int,
 NoOfAuthEncryptPairsSupported: int,
 AuthenticationEncryptionSupported: ARRAY(NDIS_802_11_AUTHENTICATION_ENCRYPTION, 1)
});

var NDIS_802_11_NON_BCAST_SSID_LIST = new StructT('NDIS_802_11_NON_BCAST_SSID_LIST', {
 NumberOfItems: int,
 Non_Bcast_Ssid: int
});

var NDIS_CO_DEVICE_PROFILE = new StructT('NDIS_CO_DEVICE_PROFILE', {
 DeviceDescription: NDIS_VAR_DATA_DESC,
 DevSpecificInfo: NDIS_VAR_DATA_DESC,
 ulTAPISupplementaryPassThru: int,
 ulAddressModes: int,
 ulNumAddresses: int,
 ulBearerModes: int,
 ulMaxTxRate: int,
 ulMinTxRate: int,
 ulMaxRxRate: int,
 ulMinRxRate: int,
 ulMediaModes: int,
 ulGenerateToneModes: int,
 ulGenerateToneMaxNumFreq: int,
 ulGenerateDigitModes: int,
 ulMonitorToneMaxNumFreq: int,
 ulMonitorToneMaxNumEntries: int,
 ulMonitorDigitModes: int,
 ulGatherDigitsMinTimeout: int,
 ulGatherDigitsMaxTimeout: int,
 ulDevCapFlags: int,
 ulMaxNumActiveCalls: int,
 ulAnswerMode: int,
 ulUUIAcceptSize: int,
 ulUUIAnswerSize: int,
 ulUUIMakeCallSize: int,
 ulUUIDropSize: int,
 ulUUISendUserUserInfoSize: int,
 ulUUICallInfoSize: int
});

var OFFLOAD_ALGO_INFO = new StructT('OFFLOAD_ALGO_INFO', {
 algoIdentifier: int,
 algoKeylen: int,
 algoRounds: int
});

var OFFLOAD_SECURITY_ASSOCIATION = new StructT('OFFLOAD_SECURITY_ASSOCIATION', {
 Operation: OFFLOAD_OPERATION_E,
 SPI: SPI_TYPE,
 IntegrityAlgo: OFFLOAD_ALGO_INFO,
 ConfAlgo: OFFLOAD_ALGO_INFO,
 Reserved: OFFLOAD_ALGO_INFO
});

var OFFLOAD_IPSEC_ADD_SA = new StructT('OFFLOAD_IPSEC_ADD_SA', {
 SrcAddr: IPAddr,
 SrcMask: int,
 DestAddr: IPAddr,
 DestMask: int,
 Protocol: int,
 SrcPort: int,
 DestPort: int,
 SrcTunnelAddr: IPAddr,
 DestTunnelAddr: IPAddr,
 Flags: int,
 NumSAs: int,
 SecAssoc: int,
 OffloadHandle: int,
 KeyLen: int,
 KeyMat: ARRAY(undefined, undefined)
});

var OFFLOAD_IPSEC_DELETE_SA = new StructT('OFFLOAD_IPSEC_DELETE_SA', {
 OffloadHandle: int
});

var OFFLOAD_IPSEC_UDPESP_ENCAPTYPE_ENTRY = new StructT('OFFLOAD_IPSEC_UDPESP_ENCAPTYPE_ENTRY', {
 UdpEncapType: UDP_ENCAP_TYPE,
 DstEncapPort: int
});

var OFFLOAD_IPSEC_ADD_UDPESP_SA = new StructT('OFFLOAD_IPSEC_ADD_UDPESP_SA', {
 SrcAddr: IPAddr,
 SrcMask: int,
 DstAddr: IPAddr,
 DstMask: int,
 Protocol: int,
 SrcPort: int,
 DstPort: int,
 SrcTunnelAddr: IPAddr,
 DstTunnelAddr: IPAddr,
 Flags: int,
 NumSAs: int,
 SecAssoc: int,
 OffloadHandle: int,
 EncapTypeEntry: OFFLOAD_IPSEC_UDPESP_ENCAPTYPE_ENTRY,
 EncapTypeEntryOffldHandle: int,
 KeyLen: int,
 KeyMat: ARRAY(undefined, undefined)
});

var OFFLOAD_IPSEC_DELETE_UDPESP_SA = new StructT('OFFLOAD_IPSEC_DELETE_UDPESP_SA', {
 OffloadHandle: int,
 EncapTypeEntryOffldHandle: int
});

var TRANSPORT_HEADER_OFFSET = new StructT('TRANSPORT_HEADER_OFFSET', {
 ProtocolType: int,
 HeaderOffset: int
});

var NETWORK_ADDRESS = new StructT('NETWORK_ADDRESS', {
 AddressLength: int,
 AddressType: int,
 Address: ARRAY(undefined, undefined)
});

var NETWORK_ADDRESS_LIST = new StructT('NETWORK_ADDRESS_LIST', {
 AddressCount: int,
 AddressType: int,
 Address: int
});

var NETWORK_ADDRESS_IP = new StructT('NETWORK_ADDRESS_IP', {
 sin_port: int,
 in_addr: int,
 sin_zero: ARRAY(undefined, undefined)
});

var NETWORK_ADDRESS_IPX = new StructT('NETWORK_ADDRESS_IPX', {
 NetworkAddress: int,
 NodeAddress: ARRAY(undefined, undefined),
 Socket: int
});

var GEN_GET_TIME_CAPS = new StructT('GEN_GET_TIME_CAPS', {
 Flags: int,
 ClockPrecision: int
});

var GEN_GET_NETCARD_TIME = new StructT('GEN_GET_NETCARD_TIME', {
 ReadTime: int
});

var NDIS_PM_PACKET_PATTERN = new StructT('NDIS_PM_PACKET_PATTERN', {
 Priority: int,
 Reserved: int,
 MaskSize: int,
 PatternOffset: int,
 PatternSize: int,
 PatternFlags: int
});

var _NDIS_PM_WAKE_UP_CAPABILITIES = new StructT('_NDIS_PM_WAKE_UP_CAPABILITIES', {
 MinMagicPacketWakeUp: NDIS_DEVICE_POWER_STATE,
 MinPatternWakeUp: NDIS_DEVICE_POWER_STATE,
 MinLinkChangeWakeUp: NDIS_DEVICE_POWER_STATE
});

var NDIS_PNP_CAPABILITIES = new StructT('NDIS_PNP_CAPABILITIES', {
 Flags: int,
 WakeUpCapabilities: NDIS_PM_WAKE_UP_CAPABILITIES
});

var NDIS_WAN_PROTOCOL_CAPS = new StructT('NDIS_WAN_PROTOCOL_CAPS', {
 Flags: int,
 Reserved: int
});

var NDIS_CO_LINK_SPEED = new StructT('NDIS_CO_LINK_SPEED', {
 Outbound: int,
 Inbound: int
});

var NDIS_LINK_SPEED = new StructT('NDIS_LINK_SPEED', {
 XmitLinkSpeed: int,
 RcvLinkSpeed: int
});

var NDIS_GUID = new StructT('NDIS_GUID', {
 Guid: GUID,
 Size: int,
 Flags: int
});

var NDIS_IRDA_PACKET_INFO = new StructT('NDIS_IRDA_PACKET_INFO', {
 ExtraBOFs: int,
 MinTurnAroundTime: int
});

var NDIS_LINK_STATE = new StructT('NDIS_LINK_STATE', {
 Header: NDIS_OBJECT_HEADER,
 MediaConnectState: NDIS_MEDIA_CONNECT_STATE,
 MediaDuplexState: NDIS_MEDIA_DUPLEX_STATE,
 XmitLinkSpeed: int,
 RcvLinkSpeed: int,
 PauseFunctions: NDIS_SUPPORTED_PAUSE_FUNCTIONS,
 AutoNegotiationFlags: int
});

var NDIS_LINK_PARAMETERS = new StructT('NDIS_LINK_PARAMETERS', {
 Header: NDIS_OBJECT_HEADER,
 MediaDuplexState: NDIS_MEDIA_DUPLEX_STATE,
 XmitLinkSpeed: int,
 RcvLinkSpeed: int,
 PauseFunctions: NDIS_SUPPORTED_PAUSE_FUNCTIONS,
 AutoNegotiationFlags: int
});

var NDIS_OPER_STATE = new StructT('NDIS_OPER_STATE', {
 Header: NDIS_OBJECT_HEADER,
 OperationalStatus: NET_IF_OPER_STATUS,
 OperationalStatusFlags: int
});

var NDIS_IP_OPER_STATUS = new StructT('NDIS_IP_OPER_STATUS', {
 AddressFamily: int,
 OperationalStatus: NET_IF_OPER_STATUS,
 OperationalStatusFlags: int
});

var NDIS_IP_OPER_STATUS_INFO = new StructT('NDIS_IP_OPER_STATUS_INFO', {
 Header: NDIS_OBJECT_HEADER,
 Flags: int,
 NumberofAddressFamiliesReturned: int,
 IpOperationalStatus: int
});

var NDIS_IP_OPER_STATE = new StructT('NDIS_IP_OPER_STATE', {
 Header: NDIS_OBJECT_HEADER,
 Flags: int,
 IpOperationalStatus: NDIS_IP_OPER_STATUS
});

var NDIS_OFFLOAD_PARAMETERS = new StructT('NDIS_OFFLOAD_PARAMETERS', {
 Header: NDIS_OBJECT_HEADER,
 IPv4Checksum: int,
 TCPIPv4Checksum: int,
 UDPIPv4Checksum: int,
 TCPIPv6Checksum: int,
 UDPIPv6Checksum: int,
 LsoV1: int,
 IPsecV1: int,
 LsoV2IPv4: int,
 LsoV2IPv6: int,
 TcpConnectionIPv4: int,
 TcpConnectionIPv6: int,
 Flags: int
});

var NDIS_TCP_LARGE_SEND_OFFLOAD_V1 = new StructT('NDIS_TCP_LARGE_SEND_OFFLOAD_V1', {
 IPv4:
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 MaxOffLoadSize: int,
 MinSegmentCount: int,
 TcpOptions: int,
 IpOptions: int
});

var NDIS_TCP_IP_CHECKSUM_OFFLOAD = new StructT('NDIS_TCP_IP_CHECKSUM_OFFLOAD', {
 IPv4Transmit: ,
 IPv4Receive: ,
 IPv6Transmit: ,
 IPv6Receive:
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 IpOptionsSupported: int,
 TcpOptionsSupported: int,
 TcpChecksum: int,
 UdpChecksum: int,
 IpChecksum: int
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 IpOptionsSupported: int,
 TcpOptionsSupported: int,
 TcpChecksum: int,
 UdpChecksum: int,
 IpChecksum: int
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 IpExtensionHeadersSupported: int,
 TcpOptionsSupported: int,
 TcpChecksum: int,
 UdpChecksum: int
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 IpExtensionHeadersSupported: int,
 TcpOptionsSupported: int,
 TcpChecksum: int,
 UdpChecksum: int
});

var NDIS_IPSEC_OFFLOAD_V1 = new StructT('NDIS_IPSEC_OFFLOAD_V1', {
 Supported: ,
 IPv4AH: ,
 IPv4ESP:
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 AhEspCombined: int,
 TransportTunnelCombined: int,
 IPv4Options: int,
 Flags: int
});

var undefined = new StructT('undefined', {
 Md5: int,
 Sha_1: int,
 Transport: int,
 Tunnel: int,
 Send: int,
 Receive: int
});

var undefined = new StructT('undefined', {
 Des: int,
 Reserved: int,
 TripleDes: int,
 NullEsp: int,
 Transport: int,
 Tunnel: int,
 Send: int,
 Receive: int
});

var NDIS_TCP_LARGE_SEND_OFFLOAD_V2 = new StructT('NDIS_TCP_LARGE_SEND_OFFLOAD_V2', {
 IPv4: ,
 IPv6:
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 MaxOffLoadSize: int,
 MinSegmentCount: int
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 MaxOffLoadSize: int,
 MinSegmentCount: int,
 IpExtensionHeadersSupported: int,
 TcpOptionsSupported: int
});

var NDIS_OFFLOAD = new StructT('NDIS_OFFLOAD', {
 Header: NDIS_OBJECT_HEADER,
 Checksum: NDIS_TCP_IP_CHECKSUM_OFFLOAD,
 LsoV1: NDIS_TCP_LARGE_SEND_OFFLOAD_V1,
 IPsecV1: NDIS_IPSEC_OFFLOAD_V1,
 LsoV2: NDIS_TCP_LARGE_SEND_OFFLOAD_V2,
 Flags: int
});

var NDIS_WMI_TCP_LARGE_SEND_OFFLOAD_V1 = new StructT('NDIS_WMI_TCP_LARGE_SEND_OFFLOAD_V1', {
 IPv4:
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 MaxOffLoadSize: int,
 MinSegmentCount: int,
 TcpOptions: int,
 IpOptions: int
});

var NDIS_WMI_TCP_IP_CHECKSUM_OFFLOAD = new StructT('NDIS_WMI_TCP_IP_CHECKSUM_OFFLOAD', {
 IPv4Transmit: ,
 IPv4Receive: ,
 IPv6Transmit: ,
 IPv6Receive:
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 IpOptionsSupported: int,
 TcpOptionsSupported: int,
 TcpChecksum: int,
 UdpChecksum: int,
 IpChecksum: int
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 IpOptionsSupported: int,
 TcpOptionsSupported: int,
 TcpChecksum: int,
 UdpChecksum: int,
 IpChecksum: int
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 IpExtensionHeadersSupported: int,
 TcpOptionsSupported: int,
 TcpChecksum: int,
 UdpChecksum: int
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 IpExtensionHeadersSupported: int,
 TcpOptionsSupported: int,
 TcpChecksum: int,
 UdpChecksum: int
});

var NDIS_WMI_IPSEC_OFFLOAD_V1 = new StructT('NDIS_WMI_IPSEC_OFFLOAD_V1', {
 Supported: ,
 IPv4AH: ,
 IPv4ESP:
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 AhEspCombined: int,
 TransportTunnelCombined: int,
 IPv4Options: int,
 Flags: int
});

var undefined = new StructT('undefined', {
 Md5: int,
 Sha_1: int,
 Transport: int,
 Tunnel: int,
 Send: int,
 Receive: int
});

var undefined = new StructT('undefined', {
 Des: int,
 Reserved: int,
 TripleDes: int,
 NullEsp: int,
 Transport: int,
 Tunnel: int,
 Send: int,
 Receive: int
});

var NDIS_WMI_TCP_LARGE_SEND_OFFLOAD_V2 = new StructT('NDIS_WMI_TCP_LARGE_SEND_OFFLOAD_V2', {
 IPv4: ,
 IPv6:
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 MaxOffLoadSize: int,
 MinSegmentCount: int
});

var undefined = new StructT('undefined', {
 Encapsulation: int,
 MaxOffLoadSize: int,
 MinSegmentCount: int,
 IpExtensionHeadersSupported: int,
 TcpOptionsSupported: int
});

var NDIS_WMI_OFFLOAD = new StructT('NDIS_WMI_OFFLOAD', {
 Header: NDIS_OBJECT_HEADER,
 Checksum: NDIS_WMI_TCP_IP_CHECKSUM_OFFLOAD,
 LsoV1: NDIS_WMI_TCP_LARGE_SEND_OFFLOAD_V1,
 IPsecV1: NDIS_WMI_IPSEC_OFFLOAD_V1,
 LsoV2: NDIS_WMI_TCP_LARGE_SEND_OFFLOAD_V2,
 Flags: int
});

var NDIS_TCP_CONNECTION_OFFLOAD = new StructT('NDIS_TCP_CONNECTION_OFFLOAD', {
 Header: NDIS_OBJECT_HEADER,
 Encapsulation: int,
 SupportIPv4: int,
 SupportIPv6: int,
 SupportIPv6ExtensionHeaders: int,
 SupportSack: int,
 TcpConnectionOffloadCapacity: int,
 Flags: int
});

var NDIS_WMI_TCP_CONNECTION_OFFLOAD = new StructT('NDIS_WMI_TCP_CONNECTION_OFFLOAD', {
 Header: NDIS_OBJECT_HEADER,
 Encapsulation: int,
 SupportIPv4: int,
 SupportIPv6: int,
 SupportIPv6ExtensionHeaders: int,
 SupportSack: int,
 TcpConnectionOffloadCapacity: int,
 Flags: int
});

var NDIS_PORT_STATE = new StructT('NDIS_PORT_STATE', {
 Header: NDIS_OBJECT_HEADER,
 MediaConnectState: NDIS_MEDIA_CONNECT_STATE,
 XmitLinkSpeed: int,
 RcvLinkSpeed: int,
 Direction: NET_IF_DIRECTION_TYPE,
 SendControlState: NDIS_PORT_CONTROLL_STATE,
 RcvControlState: NDIS_PORT_CONTROLL_STATE,
 SendAuthorizationState: NDIS_PORT_AUTHORIZATION_STATE,
 RcvAuthorizationState: NDIS_PORT_AUTHORIZATION_STATE,
 Flags: int
});

var NDIS_PORT_AUTHENTICATION_PARAMETERS = new StructT('NDIS_PORT_AUTHENTICATION_PARAMETERS', {
 Header: NDIS_OBJECT_HEADER,
 SendControlState: NDIS_PORT_CONTROLL_STATE,
 RcvControlState: NDIS_PORT_CONTROLL_STATE,
 SendAuthorizationState: NDIS_PORT_AUTHORIZATION_STATE,
 RcvAuthorizationState: NDIS_PORT_AUTHORIZATION_STATE
});

var NDIS_PORT_CHARACTERISTICS = new StructT('NDIS_PORT_CHARACTERISTICS', {
 Header: NDIS_OBJECT_HEADER,
 PortNumber: NDIS_PORT_NUMBER,
 Flags: int,
 Type: NDIS_PORT_TYPE,
 MediaConnectState: NDIS_MEDIA_CONNECT_STATE,
 XmitLinkSpeed: int,
 RcvLinkSpeed: int,
 Direction: NET_IF_DIRECTION_TYPE,
 SendControlState: NDIS_PORT_CONTROLL_STATE,
 RcvControlState: NDIS_PORT_CONTROLL_STATE,
 SendAuthorizationState: NDIS_PORT_AUTHORIZATION_STATE,
 RcvAuthorizationState: NDIS_PORT_AUTHORIZATION_STATE
});

var _NDIS_PORT = new StructT('_NDIS_PORT', {
 Next: PNDIS_PORT,
 NdisReserved: int,
 MiniportReserved: int,
 ProtocolReserved: int,
 PortCharacteristics: NDIS_PORT_CHARACTERISTICS
});

var NDIS_PORT_ARRAY = new StructT('NDIS_PORT_ARRAY', {
 Header: NDIS_OBJECT_HEADER,
 NumberOfPorts: int,
 OffsetFirstPort: int,
 ElementSize: int,
 Ports: int
});

var NDIS_WMI_METHOD_HEADER = new StructT('NDIS_WMI_METHOD_HEADER', {
 Header: NDIS_OBJECT_HEADER,
 PortNumber: NDIS_PORT_NUMBER,
 NetLuid: NET_LUID,
 RequestId: int,
 Timeout: int,
 Padding: ARRAY(undefined, undefined)
});

var NDIS_WMI_SET_HEADER = new StructT('NDIS_WMI_SET_HEADER', {
 Header: NDIS_OBJECT_HEADER,
 PortNumber: NDIS_PORT_NUMBER,
 NetLuid: NET_LUID,
 RequestId: int,
 Timeout: int,
 Padding: ARRAY(undefined, undefined)
});

var NDIS_WMI_EVENT_HEADER = new StructT('NDIS_WMI_EVENT_HEADER', {
 Header: NDIS_OBJECT_HEADER,
 IfIndex: NET_IFINDEX,
 NetLuid: NET_LUID,
 RequestId: int,
 PortNumber: NDIS_PORT_NUMBER,
 DeviceNameLength: int,
 DeviceNameOffset: int,
 Padding: ARRAY(undefined, undefined)
});

var NDIS_WMI_ENUM_ADAPTER = new StructT('NDIS_WMI_ENUM_ADAPTER', {
 Header: NDIS_OBJECT_HEADER,
 IfIndex: NET_IFINDEX,
 NetLuid: NET_LUID,
 DeviceNameLength: int,
 DeviceName: ARRAY(undefined, undefined)
});

var NDIS_WMI_OUTPUT_INFO = new StructT('NDIS_WMI_OUTPUT_INFO', {
 Header: NDIS_OBJECT_HEADER,
 Flags: int,
 SupportedRevision: int,
 DataOffset: int
});

var NDIS_RECEIVE_SCALE_CAPABILITIES = new StructT('NDIS_RECEIVE_SCALE_CAPABILITIES', {
 Header: NDIS_OBJECT_HEADER,
 CapabilitiesFlags: int,
 NumberOfInterruptMessages: int,
 NumberOfReceiveQueues: int
});

var NDIS_RECEIVE_SCALE_PARAMETERS = new StructT('NDIS_RECEIVE_SCALE_PARAMETERS', {
 Header: NDIS_OBJECT_HEADER,
 Flags: int,
 BaseCpuNumber: int,
 HashInformation: int,
 IndirectionTableSize: int,
 IndirectionTableOffset: int,
 HashSecretKeySize: int,
 HashSecretKeyOffset: int
});

var NDIS_RECEIVE_HASH_PARAMETERS = new StructT('NDIS_RECEIVE_HASH_PARAMETERS', {
 Header: NDIS_OBJECT_HEADER,
 Flags: int,
 HashInformation: int,
 HashSecretKeySize: int,
 HashSecretKeyOffset: int
});


