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
 DWORD = ulong.typedef('DWORD'),
 BYTE = uchar.typedef('BYTE'),
 WORD = ushort.typedef('WORD'),
 DWORD64 = ulonglong.typedef('DWORD64'),
 PVOID = VoidT.Δ.typedef('PVOID'),
 CHAR = int8.typedef('CHAR'),
 WCHAR = ushort.typedef('WCHAR'),
 HANDLE = VoidT.Δ.typedef('HANDLE'),
 LONGLONG = longlong.typedef('LONGLONG'),
 USN = longlong.typedef('USN'),
 DWORDLONG = ulonglong.typedef('DWORDLONG'),
 BOOLEAN = uchar.typedef('BOOLEAN'),
 ACCESS_MASK = ulong.typedef('ACCESS_MASK'),
 DEVICE_DATA_MANAGEMENT_SET_ACTION = ulong.typedef('DEVICE_DATA_MANAGEMENT_SET_ACTION');

var _STORAGE_MEDIA_TYPE = new EnumT('_STORAGE_MEDIA_TYPE', {
 Dds4mm: 0x20,
 MiniQic: 1,
 Travan: 2,
 Qic: 3,
 Mp8mm: 4,
 Ame8mm: 5,
 Ait18mm: 6,
 Dlt: 7,
 Nctp: 8,
 Ibm3480: 9,
 Ibm3490e: 10,
 IbmMagstar3590: 11,
 IbmMagstarMp: 12,
 StkDataD3: 13,
 SonyDtf: 14,
 Dv6mm: 15,
 Dmi: 16,
 SonyD2: 17,
 CleanerCartridge: 18,
 CdRom: 19,
 CdR: 20,
 CdRw: 21,
 DvdRom: 22,
 DvdR: 23,
 DvdRw: 24,
 Mo3Rw: 25,
 Mo5Wo: 26,
 Mo5Rw: 27,
 Mo5Limdow: 28,
 Pc5Wo: 29,
 Pc5Rw: 30,
 Pd5Rw: 31,
 Abl5Wo: 32,
 PinnacleApex5Rw: 33,
 Sony12Wo: 34,
 Philips12Wo: 35,
 Hitachi12Wo: 36,
 Cygnet12Wo: 37,
 Kodak14Wo: 38,
 MoNfr525: 39,
 Nikon12Rw: 40,
 IomegaZip: 41,
 IomegaJaz: 42,
 SyquestEz135: 43,
 SyquestEzflyer: 44,
 SyquestSyjet: 45,
 AvatarF2: 46,
 Mp28mm: 47,
 DstS: 48,
 DstM: 49,
 DstL: 50,
 VxaTape1: 51,
 VxaTape2: 52,
 Stk9840: 53,
 LtoUltrium: 54,
 LtoAccelis: 55,
 DvdRam: 56,
 Ait8mm: 57,
 Adr1: 58,
 Adr2: 59,
 Stk9940: 60,
 Sait: 61,
 VxaTape: 62
});

var _STORAGE_BUS_TYPE = new EnumT('_STORAGE_BUS_TYPE', {
 Unknown: 0x00,
 Scsi: 1,
 Atapi: 2,
 Ata: 3,
 1394: 4,
 Ssa: 5,
 Fibre: 6,
 Usb: 7,
 Raid: 8,
 TypeiScsi: 9,
 Sas: 10,
 Sata: 11,
 Sd: 12,
 Mmc: 13,
 Virtual: 14,
 FileBackedVirtual: 15,
 Max: 16,
 MaxReserved: 0x7F
});

var _STORAGE_QUERY_TYPE = new EnumT('_STORAGE_QUERY_TYPE', {
 PropertyStandardQuery: 0,
 PropertyExistsQuery: 1,
 PropertyMaskQuery: 2,
 PropertyMaxDefined: 3
});

var _STORAGE_PROPERTY_ID = new EnumT('_STORAGE_PROPERTY_ID', {
 DeviceProperty: 0,
 AdapterProperty: 1,
 DeviceProperty: 2,
 DeviceUniqueProperty: 3,
 DeviceWriteCacheProperty: 4,
 MiniportProperty: 5,
 AccessAlignmentProperty: 6,
 DeviceSeekPenaltyProperty: 7,
 DeviceTrimProperty: 8,
 DeviceWriteAggregationProperty: 9
});

var _STORAGE_PORT_CODE_SET = new EnumT('_STORAGE_PORT_CODE_SET', {
 Reserved: 0,
 Storport: 1,
 ScsIport: 2
});

var _STORAGE_IDENTIFIER_CODE_SET = new EnumT('_STORAGE_IDENTIFIER_CODE_SET', {
 Reserved: 0,
 Binary: 1,
 Ascii: 2,
 Utf8: 3
});

var _STORAGE_IDENTIFIER_TYPE = new EnumT('_STORAGE_IDENTIFIER_TYPE', {
 VendorSpecific: 0,
 VendorId: 1,
 Eui64: 2,
 FcphName: 3,
 PortRelative: 4,
 TargetPortGroup: 5,
 LogicalUnitGroup: 6,
 Md5LogicalUnitIdentifier: 7,
 ScsiNameString: 8
});

var _STORAGE_ID_NAA_FORMAT = new EnumT('_STORAGE_ID_NAA_FORMAT', {
 IeeeExtended: 2,
 IeeeRegistered: 3,
 IeeeeRegisteredExtended: 5
});

var _STORAGE_ASSOCIATION_TYPE = new EnumT('_STORAGE_ASSOCIATION_TYPE', {
 IdDevice: 0,
 IdPort: 1,
 IdTarget: 2
});

var _WRITE_CACHE_TYPE = new EnumT('_WRITE_CACHE_TYPE', {
 Unknown: 0,
 None: 1,
 Back: 2,
 Through: 3
});

var _WRITE_CACHE_ENABLE = new EnumT('_WRITE_CACHE_ENABLE', {
 Unknown: 0,
 Disabled: 1,
 Enabled: 2
});

var _WRITE_CACHE_CHANGE = new EnumT('_WRITE_CACHE_CHANGE', {
 Unknown: 0,
 NotChangeable: 1,
 Changeable: 2
});

var _WRITE_THROUGH = new EnumT('_WRITE_THROUGH', {
 Unknown: 0,
 NotSupported: 1,
 Supported: 2
});

var _MEDIA_TYPE = new EnumT('_MEDIA_TYPE', {
 Unknown: 0,
 F51Pt2512: 1,
 F31Pt44512: 2,
 F32Pt88512: 3,
 F320Pt8512: 4,
 F3720512: 5,
 F5360512: 6,
 F5320512: 7,
 F53201024: 8,
 F5180512: 9,
 F5160512: 10,
 RemovableMedia: 11,
 FixedMedia: 12,
 F3120m512: 13,
 F3640512: 14,
 F5640512: 15,
 F5720512: 16,
 F31Pt2512: 17,
 F31Pt231024: 18,
 F51Pt231024: 19,
 F3128Mb512: 20,
 F3230Mb512: 21,
 F8256128: 22,
 F3200Mb512: 23,
 F3240m512: 24,
 F332m512: 25
});

var _PARTITION_STYLE = new EnumT('_PARTITION_STYLE', {
 Mbr: 0,
 Gpt: 1,
 Raw: 2
});

var _DETECTION_TYPE = new EnumT('_DETECTION_TYPE', {
 None: 0,
 Int13: 1,
 ExInt13: 2
});


var _BIN_TYPES = new EnumT('_BIN_TYPES', {
 RequestSize: 0,
 RequestLocation: 1
});

var _ELEMENT_TYPE = new EnumT('_ELEMENT_TYPE', {
 AllElements: 0,
 ChangerTransport: 1,
 ChangerSlot: 2,
 ChangerIePort: 3,
 ChangerDrive: 4,
 ChangerDoor: 5,
 ChangerKeypad: 6,
 ChangerMaxElement: 7
});

var _CHANGER_DEVICE_PROBLEM_TYPE = new EnumT('_CHANGER_DEVICE_PROBLEM_TYPE', {
 None: 0,
 Hardware: 1,
 ChmError: 2,
 DoorOpen: 3,
 CalibrationError: 4,
 TargetFailure: 5,
 ChmMoveError: 6,
 ChmZeroError: 7,
 CartridgeInsertError: 8,
 PositionError: 9,
 SensorError: 10,
 CartridgeEjectError: 11,
 GripperError: 12,
 DriveError: 13
});

var _SHRINK_VOLUME_REQUEST_TYPES = new EnumT('_SHRINK_VOLUME_REQUEST_TYPES', {
 Prepare: 1,
 Commit: 1,
 Abort: 2
});




var _STORAGE_HOTPLUG_INFO = new StructT('_STORAGE_HOTPLUG_INFO', {
 Size: DWORD,
 MediaRemovable: BOOLEAN,
 MediaHotplug: BOOLEAN,
 DeviceHotplug: BOOLEAN,
 WriteCacheEnableOverride: BOOLEAN
});

var _STORAGE_DEVICE_NUMBER = new StructT('_STORAGE_DEVICE_NUMBER', {
 DeviceType: DWORD,
 DeviceNumber: DWORD,
 PartitionNumber: DWORD
});

var _STORAGE_BUS_RESET_REQUEST = new StructT('_STORAGE_BUS_RESET_REQUEST', {
 PathId: BYTE
});

var STORAGE_BREAK_RESERVATION_REQUEST = new StructT('STORAGE_BREAK_RESERVATION_REQUEST', {
 Length: DWORD,
 _unused: BYTE,
 PathId: BYTE,
 TargetId: BYTE,
 Lun: BYTE
});

var _PREVENT_MEDIA_REMOVAL = new StructT('_PREVENT_MEDIA_REMOVAL', {
 PreventMediaRemoval: BOOLEAN
});

var _CLASS_MEDIA_CHANGE_CONTEXT = new StructT('_CLASS_MEDIA_CHANGE_CONTEXT', {
 MediaChangeCount: DWORD,
 NewState: DWORD
});

var _TAPE_STATISTICS = new StructT('_TAPE_STATISTICS', {
 Version: DWORD,
 Flags: DWORD,
 RecoveredWrites: LARGE_INTEGER,
 UnrecoveredWrites: LARGE_INTEGER,
 RecoveredReads: LARGE_INTEGER,
 UnrecoveredReads: LARGE_INTEGER,
 CompressionRatioReads: BYTE,
 CompressionRatioWrites: BYTE
});

var _TAPE_GET_STATISTICS = new StructT('_TAPE_GET_STATISTICS', {
 Operation: DWORD
});

var _DEVICE_MEDIA_INFO = new StructT('_DEVICE_MEDIA_INFO', {
 DeviceSpecific: c:winioctl.h@24730@S@_DEVICE_MEDIA_INFO@Ua
});

var undefined = new StructT('undefined', {
 Cylinders: LARGE_INTEGER,
 MediaType: STORAGE_MEDIA_TYPE,
 TracksPerCylinder: DWORD,
 SectorsPerTrack: DWORD,
 BytesPerSector: DWORD,
 NumberMediaSides: DWORD,
 MediaCharacteristics: DWORD
});

var undefined = new StructT('undefined', {
 Cylinders: LARGE_INTEGER,
 MediaType: STORAGE_MEDIA_TYPE,
 TracksPerCylinder: DWORD,
 SectorsPerTrack: DWORD,
 BytesPerSector: DWORD,
 NumberMediaSides: DWORD,
 MediaCharacteristics: DWORD
});

var undefined = new StructT('undefined', {
 MediaType: STORAGE_MEDIA_TYPE,
 MediaCharacteristics: DWORD,
 CurrentBlockSize: DWORD,
 BusType: STORAGE_BUS_TYPE,
 BusSpecificData: c:winioctl.h@25766@S@_DEVICE_MEDIA_INFO@Ua@Sa@Ua
});

var undefined = new StructT('undefined', {
 MediumType: BYTE,
 DensityCode: BYTE
});

var _GET_MEDIA_TYPES = new StructT('_GET_MEDIA_TYPES', {
 DeviceType: DWORD,
 MediaInfoCount: DWORD,
 MediaInfo: ARRAY(DEVICE_MEDIA_INFO, 1)
});

var _STORAGE_PREDICT_FAILURE = new StructT('_STORAGE_PREDICT_FAILURE', {
 PredictFailure: DWORD,
 VendorSpecific: ARRAY(BYTE, 512)
});

var _STORAGE_PROPERTY_QUERY = new StructT('_STORAGE_PROPERTY_QUERY', {
 PropertyId: STORAGE_PROPERTY_ID,
 QueryType: STORAGE_QUERY_TYPE,
 AdditionalParameters: ARRAY(BYTE, 1)
});

var _STORAGE_DESCRIPTOR_HEADER = new StructT('_STORAGE_DESCRIPTOR_HEADER', {
 Version: DWORD,
 Size: DWORD
});

var _STORAGE_DEVICE_DESCRIPTOR = new StructT('_STORAGE_DEVICE_DESCRIPTOR', {
 Version: DWORD,
 Size: DWORD,
 DeviceType: BYTE,
 DeviceTypeModifier: BYTE,
 RemovableMedia: BOOLEAN,
 CommandQueueing: BOOLEAN,
 VendorIdOffset: DWORD,
 ProductIdOffset: DWORD,
 ProductRevisionOffset: DWORD,
 SerialNumberOffset: DWORD,
 BusType: STORAGE_BUS_TYPE,
 RawPropertiesLength: DWORD,
 RawDeviceProperties: ARRAY(BYTE, 1)
});

var _STORAGE_ADAPTER_DESCRIPTOR = new StructT('_STORAGE_ADAPTER_DESCRIPTOR', {
 Version: DWORD,
 Size: DWORD,
 MaximumTransferLength: DWORD,
 MaximumPhysicalPages: DWORD,
 AlignmentMask: DWORD,
 AdapterUsesPio: BOOLEAN,
 AdapterScansDown: BOOLEAN,
 CommandQueueing: BOOLEAN,
 AcceleratedTransfer: BOOLEAN,
 BusType: BYTE,
 BusMajorVersion: WORD,
 BusMinorVersion: WORD
});

var _STORAGE_ACCESS_ALIGNMENT_DESCRIPTOR = new StructT('_STORAGE_ACCESS_ALIGNMENT_DESCRIPTOR', {
 Version: DWORD,
 Size: DWORD,
 BytesPerCacheLine: DWORD,
 BytesOffsetForCacheAlignment: DWORD,
 BytesPerLogicalSector: DWORD,
 BytesPerPhysicalSector: DWORD,
 BytesOffsetForSectorAlignment: DWORD
});

var _STORAGE_MINIPORT_DESCRIPTOR = new StructT('_STORAGE_MINIPORT_DESCRIPTOR', {
 Version: DWORD,
 Size: DWORD,
 Portdriver: STORAGE_PORT_CODE_SET,
 LUNResetSupported: BOOLEAN,
 TargetResetSupported: BOOLEAN
});

var _STORAGE_IDENTIFIER = new StructT('_STORAGE_IDENTIFIER', {
 CodeSet: STORAGE_IDENTIFIER_CODE_SET,
 Type: STORAGE_IDENTIFIER_TYPE,
 IdentifierSize: WORD,
 NextOffset: WORD,
 Association: STORAGE_ASSOCIATION_TYPE,
 Identifier: ARRAY(BYTE, 1)
});

var _STORAGE_DEVICE_ID_DESCRIPTOR = new StructT('_STORAGE_DEVICE_ID_DESCRIPTOR', {
 Version: DWORD,
 Size: DWORD,
 NumberOfIdentifiers: DWORD,
 Identifiers: ARRAY(BYTE, 1)
});

var _DEVICE_SEEK_PENALTY_DESCRIPTOR = new StructT('_DEVICE_SEEK_PENALTY_DESCRIPTOR', {
 Version: DWORD,
 Size: DWORD,
 IncursSeekPenalty: BOOLEAN
});

var _DEVICE_WRITE_AGGREGATION_DESCRIPTOR = new StructT('_DEVICE_WRITE_AGGREGATION_DESCRIPTOR', {
 Version: DWORD,
 Size: DWORD,
 BenefitsFromWriteAggregation: BOOLEAN
});

var _DEVICE_TRIM_DESCRIPTOR = new StructT('_DEVICE_TRIM_DESCRIPTOR', {
 Version: DWORD,
 Size: DWORD,
 TrimEnabled: BOOLEAN
});

var _DEVICE_DATA_SET_RANGE = new StructT('_DEVICE_DATA_SET_RANGE', {
 StartingOffset: LONGLONG,
 LengthInBytes: DWORDLONG
});

var _DEVICE_MANAGE_DATA_SET_ATTRIBUTES = new StructT('_DEVICE_MANAGE_DATA_SET_ATTRIBUTES', {
 Size: DWORD,
 Action: DEVICE_DATA_MANAGEMENT_SET_ACTION,
 Flags: DWORD,
 ParameterBlockOffset: DWORD,
 ParameterBlockLength: DWORD,
 DataSetRangesOffset: DWORD,
 DataSetRangesLength: DWORD
});

var _DEVICE_DSM_NOTIFICATION_PARAMETERS = new StructT('_DEVICE_DSM_NOTIFICATION_PARAMETERS', {
 Size: DWORD,
 Flags: DWORD,
 NumFileTypeIDs: DWORD,
 FileTypeID: ARRAY(GUID, 1)
});

var _STORAGE_GET_BC_PROPERTIES_OUTPUT = new StructT('_STORAGE_GET_BC_PROPERTIES_OUTPUT', {
 MaximumRequestsPerPeriod: DWORD,
 MinimumPeriod: DWORD,
 MaximumRequestSize: DWORDLONG,
 EstimatedTimePerRequest: DWORD,
 NumOutStandingRequests: DWORD,
 RequestSize: DWORDLONG
});

var _STORAGE_ALLOCATE_BC_STREAM_INPUT = new StructT('_STORAGE_ALLOCATE_BC_STREAM_INPUT', {
 Version: DWORD,
 RequestsPerPeriod: DWORD,
 Period: DWORD,
 RetryFailures: BOOLEAN,
 Discardable: BOOLEAN,
 Reserved1: ARRAY(BOOLEAN, 2),
 AccessType: DWORD,
 AccessMode: DWORD
});

var _STORAGE_ALLOCATE_BC_STREAM_OUTPUT = new StructT('_STORAGE_ALLOCATE_BC_STREAM_OUTPUT', {
 RequestSize: DWORDLONG,
 NumOutStandingRequests: DWORD
});

var _STORAGE_PRIORITY_HINT_SUPPORT = new StructT('_STORAGE_PRIORITY_HINT_SUPPORT', {
 SupportFlags: DWORD
});

var _STORAGE_MEDIA_SERIAL_NUMBER_DATA = new StructT('_STORAGE_MEDIA_SERIAL_NUMBER_DATA', {
 Reserved: WORD,
 SerialNumberLength: WORD,
 SerialNumber: ARRAY(BYTE, 0)
});

var _STORAGE_READ_CAPACITY = new StructT('_STORAGE_READ_CAPACITY', {
 Version: DWORD,
 Size: DWORD,
 BlockLength: DWORD,
 NumberOfBlocks: LARGE_INTEGER,
 DiskLength: LARGE_INTEGER
});

var _STORAGE_WRITE_CACHE_PROPERTY = new StructT('_STORAGE_WRITE_CACHE_PROPERTY', {
 Version: DWORD,
 Size: DWORD,
 WriteCacheType: WRITE_CACHE_TYPE,
 WriteCacheEnabled: WRITE_CACHE_ENABLE,
 WriteCacheChangeable: WRITE_CACHE_CHANGE,
 WriteThroughSupported: WRITE_THROUGH,
 FlushCacheSupported: BOOLEAN,
 UserDefinedPowerProtection: BOOLEAN,
 NVCacheEnabled: BOOLEAN
});

var _PERSISTENT_RESERVE_COMMAND = new StructT('_PERSISTENT_RESERVE_COMMAND', {
 Version: DWORD,
 Size: DWORD
});

var undefined = new StructT('undefined', {
 ServiceAction: BYTE,
 Reserved1: BYTE,
 AllocationLength: WORD
});

var undefined = new StructT('undefined', {
 ServiceAction: BYTE,
 Reserved1: BYTE,
 Type: BYTE,
 Scope: BYTE,
 ParameterList: ARRAY(BYTE, 0)
});

var _FORMAT_PARAMETERS = new StructT('_FORMAT_PARAMETERS', {
 MediaType: MEDIA_TYPE,
 StartCylinderNumber: DWORD,
 EndCylinderNumber: DWORD,
 StartHeadNumber: DWORD,
 EndHeadNumber: DWORD
});

var _FORMAT_EX_PARAMETERS = new StructT('_FORMAT_EX_PARAMETERS', {
 MediaType: MEDIA_TYPE,
 StartCylinderNumber: DWORD,
 EndCylinderNumber: DWORD,
 StartHeadNumber: DWORD,
 EndHeadNumber: DWORD,
 FormatGapLength: WORD,
 SectorsPerTrack: WORD,
 SectorNumber: ARRAY(WORD, 1)
});

var _DISK_GEOMETRY = new StructT('_DISK_GEOMETRY', {
 Cylinders: LARGE_INTEGER,
 MediaType: MEDIA_TYPE,
 TracksPerCylinder: DWORD,
 SectorsPerTrack: DWORD,
 BytesPerSector: DWORD
});

var _PARTITION_INFORMATION = new StructT('_PARTITION_INFORMATION', {
 StartingOffset: LARGE_INTEGER,
 PartitionLength: LARGE_INTEGER,
 HiddenSectors: DWORD,
 PartitionNumber: DWORD,
 PartitionType: BYTE,
 BootIndicator: BOOLEAN,
 RecognizedPartition: BOOLEAN,
 RewritePartition: BOOLEAN
});

var SET_PARTITION_INFORMATION_MBR = new StructT('SET_PARTITION_INFORMATION_MBR', {
 PartitionType: BYTE
});

var _DRIVE_LAYOUT_INFORMATION = new StructT('_DRIVE_LAYOUT_INFORMATION', {
 PartitionCount: DWORD,
 Signature: DWORD,
 PartitionEntry: ARRAY(PARTITION_INFORMATION, 1)
});

var _VERIFY_INFORMATION = new StructT('_VERIFY_INFORMATION', {
 StartingOffset: LARGE_INTEGER,
 Length: DWORD
});

var _REASSIGN_BLOCKS = new StructT('_REASSIGN_BLOCKS', {
 Reserved: WORD,
 Count: WORD,
 BlockNumber: ARRAY(DWORD, 1)
});

var _REASSIGN_BLOCKS_EX = new StructT('_REASSIGN_BLOCKS_EX', {
 Reserved: WORD,
 Count: WORD,
 BlockNumber: ARRAY(LARGE_INTEGER, 1)
});

var SET_PARTITION_INFORMATION_GPT = new StructT('SET_PARTITION_INFORMATION_GPT', {
 PartitionType: GUID,
 PartitionId: GUID,
 Attributes: DWORD64,
 Name: ARRAY(WCHAR, 36)
});

var _PARTITION_INFORMATION_MBR = new StructT('_PARTITION_INFORMATION_MBR', {
 PartitionType: BYTE,
 BootIndicator: BOOLEAN,
 RecognizedPartition: BOOLEAN,
 HiddenSectors: DWORD
});

var _SET_PARTITION_INFORMATION_EX = new StructT('_SET_PARTITION_INFORMATION_EX', {
 PartitionStyle: PARTITION_STYLE
});

var _CREATE_DISK_GPT = new StructT('_CREATE_DISK_GPT', {
 DiskId: GUID,
 MaxPartitionCount: DWORD
});

var _CREATE_DISK_MBR = new StructT('_CREATE_DISK_MBR', {
 Signature: DWORD
});

var _CREATE_DISK = new StructT('_CREATE_DISK', {
 PartitionStyle: PARTITION_STYLE
});

var _GET_LENGTH_INFORMATION = new StructT('_GET_LENGTH_INFORMATION', {
 Length: LARGE_INTEGER
});

var _PARTITION_INFORMATION_EX = new StructT('_PARTITION_INFORMATION_EX', {
 PartitionStyle: PARTITION_STYLE,
 StartingOffset: LARGE_INTEGER,
 PartitionLength: LARGE_INTEGER,
 PartitionNumber: DWORD,
 RewritePartition: BOOLEAN
});

var _DRIVE_LAYOUT_INFORMATION_GPT = new StructT('_DRIVE_LAYOUT_INFORMATION_GPT', {
 DiskId: GUID,
 StartingUsableOffset: LARGE_INTEGER,
 UsableLength: LARGE_INTEGER,
 MaxPartitionCount: DWORD
});

var _DRIVE_LAYOUT_INFORMATION_MBR = new StructT('_DRIVE_LAYOUT_INFORMATION_MBR', {
 Signature: DWORD
});

var _DRIVE_LAYOUT_INFORMATION_EX = new StructT('_DRIVE_LAYOUT_INFORMATION_EX', {
 PartitionStyle: DWORD,
 PartitionCount: DWORD,
 PartitionEntry: ARRAY(PARTITION_INFORMATION_EX, 1)
});

var _DISK_INT13_INFO = new StructT('_DISK_INT13_INFO', {
 DriveSelect: WORD,
 MaxCylinders: DWORD,
 SectorsPerTrack: WORD,
 MaxHeads: WORD,
 NumberDrives: WORD
});

var _DISK_EX_INT13_INFO = new StructT('_DISK_EX_INT13_INFO', {
 ExBufferSize: WORD,
 ExFlags: WORD,
 ExCylinders: DWORD,
 ExHeads: DWORD,
 ExSectorsPerTrack: DWORD,
 ExSectorsPerDrive: DWORD64,
 ExSectorSize: WORD,
 ExReserved: WORD
});

var _DISK_DETECTION_INFO = new StructT('_DISK_DETECTION_INFO', {
 SizeOfDetectInfo: DWORD,
 DetectionType: DETECTION_TYPE
});

var undefined = new StructT('undefined', {
 Int13: DISK_INT13_INFO,
 ExInt13: DISK_EX_INT13_INFO
});

var _DISK_PARTITION_INFO = new StructT('_DISK_PARTITION_INFO', {
 SizeOfPartitionInfo: DWORD,
 PartitionStyle: PARTITION_STYLE
});

var undefined = new StructT('undefined', {
 Signature: DWORD,
 CheckSum: DWORD
});

var undefined = new StructT('undefined', {
 DiskId: GUID
});

var _DISK_GEOMETRY_EX = new StructT('_DISK_GEOMETRY_EX', {
 Geometry: DISK_GEOMETRY,
 DiskSize: LARGE_INTEGER,
 Data: ARRAY(BYTE, 1)
});

var _DISK_CONTROLLER_NUMBER = new StructT('_DISK_CONTROLLER_NUMBER', {
 ControllerNumber: DWORD,
 DiskNumber: DWORD
});

var _DISK_CACHE_INFORMATION = new StructT('_DISK_CACHE_INFORMATION', {
 ParametersSavable: BOOLEAN,
 ReadCacheEnabled: BOOLEAN,
 WriteCacheEnabled: BOOLEAN,
 ReadRetentionPriority: DISK_CACHE_RETENTION_PRIORITY,
 WriteRetentionPriority: DISK_CACHE_RETENTION_PRIORITY,
 DisablePrefetchTransferLength: WORD,
 PrefetchScalar: BOOLEAN
});

var undefined = new StructT('undefined', {
 Minimum: WORD,
 Maximum: WORD,
 MaximumBlocks: WORD
});

var undefined = new StructT('undefined', {
 Minimum: WORD,
 Maximum: WORD
});

var _DISK_GROW_PARTITION = new StructT('_DISK_GROW_PARTITION', {
 PartitionNumber: DWORD,
 BytesToGrow: LARGE_INTEGER
});

var _HISTOGRAM_BUCKET = new StructT('_HISTOGRAM_BUCKET', {
 Reads: DWORD,
 Writes: DWORD
});

var _DISK_HISTOGRAM = new StructT('_DISK_HISTOGRAM', {
 DiskSize: LARGE_INTEGER,
 Start: LARGE_INTEGER,
 End: LARGE_INTEGER,
 Average: LARGE_INTEGER,
 AverageRead: LARGE_INTEGER,
 AverageWrite: LARGE_INTEGER,
 Granularity: DWORD,
 Size: DWORD,
 ReadCount: DWORD,
 WriteCount: DWORD,
 Histogram: PHISTOGRAM_BUCKET
});

var _DISK_PERFORMANCE = new StructT('_DISK_PERFORMANCE', {
 BytesRead: LARGE_INTEGER,
 BytesWritten: LARGE_INTEGER,
 ReadTime: LARGE_INTEGER,
 WriteTime: LARGE_INTEGER,
 IdleTime: LARGE_INTEGER,
 ReadCount: DWORD,
 WriteCount: DWORD,
 QueueDepth: DWORD,
 SplitCount: DWORD,
 QueryTime: LARGE_INTEGER,
 StorageDeviceNumber: DWORD,
 StorageManagerName: ARRAY(WCHAR, 8)
});

var _DISK_RECORD = new StructT('_DISK_RECORD', {
 ByteOffset: LARGE_INTEGER,
 StartTime: LARGE_INTEGER,
 EndTime: LARGE_INTEGER,
 VirtualAddress: PVOID,
 NumberOfBytes: DWORD,
 DeviceNumber: BYTE,
 ReadRequest: BOOLEAN
});

var _DISK_LOGGING = new StructT('_DISK_LOGGING', {
 Function: BYTE,
 BufferAddress: PVOID,
 BufferSize: DWORD
});

var _BIN_RANGE = new StructT('_BIN_RANGE', {
 StartValue: LARGE_INTEGER,
 Length: LARGE_INTEGER
});

var _PERF_BIN = new StructT('_PERF_BIN', {
 NumberOfBins: DWORD,
 TypeOfBin: DWORD,
 BinsRanges: ARRAY(BIN_RANGE, 1)
});

var _BIN_COUNT = new StructT('_BIN_COUNT', {
 BinRange: BIN_RANGE,
 BinCount: DWORD
});

var _BIN_RESULTS = new StructT('_BIN_RESULTS', {
 NumberOfBins: DWORD,
 BinCounts: ARRAY(BIN_COUNT, 1)
});

var _GETVERSIONINPARAMS = new StructT('_GETVERSIONINPARAMS', {
 bVersion: BYTE,
 bRevision: BYTE,
 bReserved: BYTE,
 bIDEDeviceMap: BYTE,
 fCapabilities: DWORD,
 dwReserved: ARRAY(DWORD, 4)
});

var _IDEREGS = new StructT('_IDEREGS', {
 bFeaturesReg: BYTE,
 bSectorCountReg: BYTE,
 bSectorNumberReg: BYTE,
 bCylLowReg: BYTE,
 bCylHighReg: BYTE,
 bDriveHeadReg: BYTE,
 bCommandReg: BYTE,
 bReserved: BYTE
});

var _SENDCMDINPARAMS = new StructT('_SENDCMDINPARAMS', {
 cBufferSize: DWORD,
 irDriveRegs: IDEREGS,
 bDriveNumber: BYTE,
 bReserved: ARRAY(BYTE, 3),
 dwReserved: ARRAY(DWORD, 4),
 bBuffer: ARRAY(BYTE, 1)
});

var _DRIVERSTATUS = new StructT('_DRIVERSTATUS', {
 bDriverError: BYTE,
 bIDEError: BYTE,
 bReserved: ARRAY(BYTE, 2),
 dwReserved: ARRAY(DWORD, 2)
});

var _SENDCMDOUTPARAMS = new StructT('_SENDCMDOUTPARAMS', {
 cBufferSize: DWORD,
 DriverStatus: DRIVERSTATUS,
 bBuffer: ARRAY(BYTE, 1)
});

var _CHANGER_ELEMENT = new StructT('_CHANGER_ELEMENT', {
 ElementType: ELEMENT_TYPE,
 ElementAddress: DWORD
});

var _CHANGER_ELEMENT_LIST = new StructT('_CHANGER_ELEMENT_LIST', {
 Element: CHANGER_ELEMENT,
 NumberOfElements: DWORD
});

var _GET_CHANGER_PARAMETERS = new StructT('_GET_CHANGER_PARAMETERS', {
 Size: DWORD,
 NumberTransportElements: WORD,
 NumberStorageElements: WORD,
 NumberCleanerSlots: WORD,
 NumberIEElements: WORD,
 NumberDataTransferElements: WORD,
 NumberOfDoors: WORD,
 FirstSlotNumber: WORD,
 FirstDriveNumber: WORD,
 FirstTransportNumber: WORD,
 FirstIEPortNumber: WORD,
 FirstCleanerSlotAddress: WORD,
 MagazineSize: WORD,
 DriveCleanTimeout: DWORD,
 Features0: DWORD,
 Features1: DWORD,
 MoveFromTransport: BYTE,
 MoveFromSlot: BYTE,
 MoveFromIePort: BYTE,
 MoveFromDrive: BYTE,
 ExchangeFromTransport: BYTE,
 ExchangeFromSlot: BYTE,
 ExchangeFromIePort: BYTE,
 ExchangeFromDrive: BYTE,
 LockUnlockCapabilities: BYTE,
 PositionCapabilities: BYTE,
 Reserved1: ARRAY(BYTE, 2),
 Reserved2: ARRAY(DWORD, 2)
});

var _CHANGER_PRODUCT_DATA = new StructT('_CHANGER_PRODUCT_DATA', {
 VendorId: ARRAY(BYTE, VENDOR_ID_LENGTH),
 ProductId: ARRAY(BYTE, PRODUCT_ID_LENGTH),
 Revision: ARRAY(BYTE, REVISION_LENGTH),
 SerialNumber: ARRAY(BYTE, SERIAL_NUMBER_LENGTH),
 DeviceType: BYTE
});

var _CHANGER_SET_ACCESS = new StructT('_CHANGER_SET_ACCESS', {
 Element: CHANGER_ELEMENT,
 Control: DWORD
});

var _CHANGER_READ_ELEMENT_STATUS = new StructT('_CHANGER_READ_ELEMENT_STATUS', {
 ElementList: CHANGER_ELEMENT_LIST,
 VolumeTagInfo: BOOLEAN
});

var _CHANGER_ELEMENT_STATUS = new StructT('_CHANGER_ELEMENT_STATUS', {
 Element: CHANGER_ELEMENT,
 SrcElementAddress: CHANGER_ELEMENT,
 Flags: DWORD,
 ExceptionCode: DWORD,
 TargetId: BYTE,
 Lun: BYTE,
 Reserved: WORD,
 PrimaryVolumeID: ARRAY(BYTE, MAX_VOLUME_ID_SIZE),
 AlternateVolumeID: ARRAY(BYTE, MAX_VOLUME_ID_SIZE)
});

var _CHANGER_ELEMENT_STATUS_EX = new StructT('_CHANGER_ELEMENT_STATUS_EX', {
 Element: CHANGER_ELEMENT,
 SrcElementAddress: CHANGER_ELEMENT,
 Flags: DWORD,
 ExceptionCode: DWORD,
 TargetId: BYTE,
 Lun: BYTE,
 Reserved: WORD,
 PrimaryVolumeID: ARRAY(BYTE, MAX_VOLUME_ID_SIZE),
 AlternateVolumeID: ARRAY(BYTE, MAX_VOLUME_ID_SIZE),
 VendorIdentification: ARRAY(BYTE, VENDOR_ID_LENGTH),
 ProductIdentification: ARRAY(BYTE, PRODUCT_ID_LENGTH),
 SerialNumber: ARRAY(BYTE, SERIAL_NUMBER_LENGTH)
});

var _CHANGER_INITIALIZE_ELEMENT_STATUS = new StructT('_CHANGER_INITIALIZE_ELEMENT_STATUS', {
 ElementList: CHANGER_ELEMENT_LIST,
 BarCodeScan: BOOLEAN
});

var _CHANGER_SET_POSITION = new StructT('_CHANGER_SET_POSITION', {
 Transport: CHANGER_ELEMENT,
 Destination: CHANGER_ELEMENT,
 Flip: BOOLEAN
});

var _CHANGER_EXCHANGE_MEDIUM = new StructT('_CHANGER_EXCHANGE_MEDIUM', {
 Transport: CHANGER_ELEMENT,
 Source: CHANGER_ELEMENT,
 Destination1: CHANGER_ELEMENT,
 Destination2: CHANGER_ELEMENT,
 Flip1: BOOLEAN,
 Flip2: BOOLEAN
});

var _CHANGER_MOVE_MEDIUM = new StructT('_CHANGER_MOVE_MEDIUM', {
 Transport: CHANGER_ELEMENT,
 Source: CHANGER_ELEMENT,
 Destination: CHANGER_ELEMENT,
 Flip: BOOLEAN
});

var _CHANGER_SEND_VOLUME_TAG_INFORMATION = new StructT('_CHANGER_SEND_VOLUME_TAG_INFORMATION', {
 StartingElement: CHANGER_ELEMENT,
 ActionCode: DWORD,
 VolumeIDTemplate: ARRAY(BYTE, MAX_VOLUME_TEMPLATE_SIZE)
});

var _READ_ELEMENT_ADDRESS_INFO = new StructT('_READ_ELEMENT_ADDRESS_INFO', {
 NumberOfElements: DWORD,
 ElementStatus: ARRAY(CHANGER_ELEMENT_STATUS, 1)
});

var _CSV_NAMESPACE_INFO = new StructT('_CSV_NAMESPACE_INFO', {
 Version: DWORD,
 DeviceNumber: DWORD,
 StartingOffset: LARGE_INTEGER,
 SectorSize: DWORD
});

var _PATHNAME_BUFFER = new StructT('_PATHNAME_BUFFER', {
 PathNameLength: DWORD,
 Name: ARRAY(WCHAR, 1)
});

var _FSCTL_QUERY_FAT_BPB_BUFFER = new StructT('_FSCTL_QUERY_FAT_BPB_BUFFER', {
 First0x24BytesOfBootSector: ARRAY(BYTE, 0x24)
});

var undefined = new StructT('undefined', {
 VolumeSerialNumber: LARGE_INTEGER,
 NumberSectors: LARGE_INTEGER,
 TotalClusters: LARGE_INTEGER,
 FreeClusters: LARGE_INTEGER,
 TotalReserved: LARGE_INTEGER,
 BytesPerSector: DWORD,
 BytesPerCluster: DWORD,
 BytesPerFileRecordSegment: DWORD,
 ClustersPerFileRecordSegment: DWORD,
 MftValidDataLength: LARGE_INTEGER,
 MftStartLcn: LARGE_INTEGER,
 Mft2StartLcn: LARGE_INTEGER,
 MftZoneStart: LARGE_INTEGER,
 MftZoneEnd: LARGE_INTEGER
});

var undefined = new StructT('undefined', {
 ByteCount: DWORD,
 MajorVersion: WORD,
 MinorVersion: WORD
});

var undefined = new StructT('undefined', {
 StartingLcn: LARGE_INTEGER
});

var undefined = new StructT('undefined', {
 StartingLcn: LARGE_INTEGER,
 BitmapSize: LARGE_INTEGER,
 Buffer: ARRAY(BYTE, 1)
});

var undefined = new StructT('undefined', {
 StartingVcn: LARGE_INTEGER
});

var RETRIEVAL_POINTERS_BUFFER = new StructT('RETRIEVAL_POINTERS_BUFFER', {
 ExtentCount: DWORD,
 StartingVcn: LARGE_INTEGER,
 Extents: ARRAY(undefined, 1)
});

var undefined = new StructT('undefined', {
 NextVcn: LARGE_INTEGER,
 Lcn: LARGE_INTEGER
});

var undefined = new StructT('undefined', {
 FileReferenceNumber: LARGE_INTEGER
});

var undefined = new StructT('undefined', {
 FileReferenceNumber: LARGE_INTEGER,
 FileRecordLength: DWORD,
 FileRecordBuffer: ARRAY(BYTE, 1)
});

var undefined = new StructT('undefined', {
 FileHandle: HANDLE,
 StartingVcn: LARGE_INTEGER,
 StartingLcn: LARGE_INTEGER,
 ClusterCount: DWORD
});

var undefined = new StructT('undefined', {
 FileHandle: HANDLE,
 SourceFileRecord: LARGE_INTEGER,
 TargetFileRecord: LARGE_INTEGER
});

var undefined = new StructT('undefined', {
 Restart: DWORD,
 Sid: SID
});

var undefined = new StructT('undefined', {
 NextEntryOffset: DWORD,
 FileIndex: DWORD,
 FileNameLength: DWORD,
 FileName: ARRAY(WCHAR, 1)
});

var undefined = new StructT('undefined', {
 StartFileReferenceNumber: DWORDLONG,
 LowUsn: USN,
 HighUsn: USN
});

var undefined = new StructT('undefined', {
 MaximumSize: DWORDLONG,
 AllocationDelta: DWORDLONG
});

var undefined = new StructT('undefined', {
 StartUsn: USN,
 ReasonMask: DWORD,
 ReturnOnlyOnClose: DWORD,
 Timeout: DWORDLONG,
 BytesToWaitFor: DWORDLONG,
 UsnJournalID: DWORDLONG
});

var undefined = new StructT('undefined', {
 RecordLength: DWORD,
 MajorVersion: WORD,
 MinorVersion: WORD,
 FileReferenceNumber: DWORDLONG,
 ParentFileReferenceNumber: DWORDLONG,
 Usn: USN,
 TimeStamp: LARGE_INTEGER,
 Reason: DWORD,
 SourceInfo: DWORD,
 SecurityId: DWORD,
 FileAttributes: DWORD,
 FileNameLength: WORD,
 FileNameOffset: WORD,
 FileName: ARRAY(WCHAR, 1)
});

var undefined = new StructT('undefined', {
 UsnJournalID: DWORDLONG,
 FirstUsn: USN,
 NextUsn: USN,
 LowestValidUsn: USN,
 MaxUsn: USN,
 MaximumSize: DWORDLONG,
 AllocationDelta: DWORDLONG
});

var undefined = new StructT('undefined', {
 UsnJournalID: DWORDLONG,
 DeleteFlags: DWORD
});

var undefined = new StructT('undefined', {
 UsnSourceInfo: DWORD,
 VolumeHandle: HANDLE,
 HandleInfo: DWORD
});

var undefined = new StructT('undefined', {
 DesiredAccess: ACCESS_MASK,
 SecurityIds: ARRAY(DWORD, 1)
});

var _FILE_PREFETCH = new StructT('_FILE_PREFETCH', {
 Type: DWORD,
 Count: DWORD,
 Prefetch: ARRAY(DWORDLONG, 1)
});

var _FILE_PREFETCH_EX = new StructT('_FILE_PREFETCH_EX', {
 Type: DWORD,
 Count: DWORD,
 Context: PVOID,
 Prefetch: ARRAY(DWORDLONG, 1)
});

var _FILESYSTEM_STATISTICS = new StructT('_FILESYSTEM_STATISTICS', {
 FileSystemType: WORD,
 Version: WORD,
 SizeOfCompleteStructure: DWORD,
 UserFileReads: DWORD,
 UserFileReadBytes: DWORD,
 UserDiskReads: DWORD,
 UserFileWrites: DWORD,
 UserFileWriteBytes: DWORD,
 UserDiskWrites: DWORD,
 MetaDataReads: DWORD,
 MetaDataReadBytes: DWORD,
 MetaDataDiskReads: DWORD,
 MetaDataWrites: DWORD,
 MetaDataWriteBytes: DWORD,
 MetaDataDiskWrites: DWORD
});

var _FAT_STATISTICS = new StructT('_FAT_STATISTICS', {
 CreateHits: DWORD,
 SuccessfulCreates: DWORD,
 FailedCreates: DWORD,
 NonCachedReads: DWORD,
 NonCachedReadBytes: DWORD,
 NonCachedWrites: DWORD,
 NonCachedWriteBytes: DWORD,
 NonCachedDiskReads: DWORD,
 NonCachedDiskWrites: DWORD
});

var _EXFAT_STATISTICS = new StructT('_EXFAT_STATISTICS', {
 CreateHits: DWORD,
 SuccessfulCreates: DWORD,
 FailedCreates: DWORD,
 NonCachedReads: DWORD,
 NonCachedReadBytes: DWORD,
 NonCachedWrites: DWORD,
 NonCachedWriteBytes: DWORD,
 NonCachedDiskReads: DWORD,
 NonCachedDiskWrites: DWORD
});

var _NTFS_STATISTICS = new StructT('_NTFS_STATISTICS', {
 LogFileFullExceptions: DWORD,
 OtherExceptions: DWORD,
 MftReads: DWORD,
 MftReadBytes: DWORD,
 MftWrites: DWORD,
 MftWriteBytes: DWORD,
 MftWritesUserLevel: ,
 MftWritesFlushForLogFileFull: WORD,
 MftWritesLazyWriter: WORD,
 MftWritesUserRequest: WORD,
 Mft2Writes: DWORD,
 Mft2WriteBytes: DWORD,
 Mft2WritesUserLevel: ,
 Mft2WritesFlushForLogFileFull: WORD,
 Mft2WritesLazyWriter: WORD,
 Mft2WritesUserRequest: WORD,
 RootIndexReads: DWORD,
 RootIndexReadBytes: DWORD,
 RootIndexWrites: DWORD,
 RootIndexWriteBytes: DWORD,
 BitmapReads: DWORD,
 BitmapReadBytes: DWORD,
 BitmapWrites: DWORD,
 BitmapWriteBytes: DWORD,
 BitmapWritesFlushForLogFileFull: WORD,
 BitmapWritesLazyWriter: WORD,
 BitmapWritesUserRequest: WORD,
 BitmapWritesUserLevel: ,
 MftBitmapReads: DWORD,
 MftBitmapReadBytes: DWORD,
 MftBitmapWrites: DWORD,
 MftBitmapWriteBytes: DWORD,
 MftBitmapWritesFlushForLogFileFull: WORD,
 MftBitmapWritesLazyWriter: WORD,
 MftBitmapWritesUserRequest: WORD,
 MftBitmapWritesUserLevel: ,
 UserIndexReads: DWORD,
 UserIndexReadBytes: DWORD,
 UserIndexWrites: DWORD,
 UserIndexWriteBytes: DWORD,
 LogFileReads: DWORD,
 LogFileReadBytes: DWORD,
 LogFileWrites: DWORD,
 LogFileWriteBytes: DWORD,
 Allocate:
});

var undefined = new StructT('undefined', {
 Write: WORD,
 Create: WORD,
 SetInfo: WORD,
 Flush: WORD
});

var undefined = new StructT('undefined', {
 Write: WORD,
 Create: WORD,
 SetInfo: WORD,
 Flush: WORD
});

var undefined = new StructT('undefined', {
 Write: WORD,
 Create: WORD,
 SetInfo: WORD
});

var undefined = new StructT('undefined', {
 Write: WORD,
 Create: WORD,
 SetInfo: WORD,
 Flush: WORD
});

var undefined = new StructT('undefined', {
 Calls: DWORD,
 Clusters: DWORD,
 Hints: DWORD,
 RunsReturned: DWORD,
 HintsHonored: DWORD,
 HintsClusters: DWORD,
 Cache: DWORD,
 CacheClusters: DWORD,
 CacheMiss: DWORD,
 CacheMissClusters: DWORD
});

var _FILE_OBJECTID_BUFFER = new StructT('_FILE_OBJECTID_BUFFER', {
 ObjectId: ARRAY(BYTE, 16)
});

var undefined = new StructT('undefined', {
 BirthVolumeId: ARRAY(BYTE, 16),
 BirthObjectId: ARRAY(BYTE, 16),
 DomainId: ARRAY(BYTE, 16)
});

var _FILE_SET_SPARSE_BUFFER = new StructT('_FILE_SET_SPARSE_BUFFER', {
 SetSparse: BOOLEAN
});

var _FILE_ZERO_DATA_INFORMATION = new StructT('_FILE_ZERO_DATA_INFORMATION', {
 FileOffset: LARGE_INTEGER,
 BeyondFinalZero: LARGE_INTEGER
});

var _FILE_ALLOCATED_RANGE_BUFFER = new StructT('_FILE_ALLOCATED_RANGE_BUFFER', {
 FileOffset: LARGE_INTEGER,
 Length: LARGE_INTEGER
});

var _ENCRYPTION_BUFFER = new StructT('_ENCRYPTION_BUFFER', {
 EncryptionOperation: DWORD,
 Private: ARRAY(BYTE, 1)
});

var _DECRYPTION_STATUS_BUFFER = new StructT('_DECRYPTION_STATUS_BUFFER', {
 NoEncryptedStreams: BOOLEAN
});

var _REQUEST_RAW_ENCRYPTED_DATA = new StructT('_REQUEST_RAW_ENCRYPTED_DATA', {
 FileOffset: LONGLONG,
 Length: DWORD
});

var _ENCRYPTED_DATA_INFO = new StructT('_ENCRYPTED_DATA_INFO', {
 StartingFileOffset: DWORDLONG,
 OutputBufferOffset: DWORD,
 BytesWithinFileSize: DWORD,
 BytesWithinValidDataLength: DWORD,
 CompressionFormat: WORD,
 DataUnitShift: BYTE,
 ChunkShift: BYTE,
 ClusterShift: BYTE,
 EncryptionFormat: BYTE,
 NumberOfDataBlocks: WORD,
 DataBlockSize: ARRAY(DWORD, ANYSIZE_ARRAY)
});

var _PLEX_READ_DATA_REQUEST = new StructT('_PLEX_READ_DATA_REQUEST', {
 ByteOffset: LARGE_INTEGER,
 ByteLength: DWORD,
 PlexNumber: DWORD
});

var _SI_COPYFILE = new StructT('_SI_COPYFILE', {
 SourceFileNameLength: DWORD,
 DestinationFileNameLength: DWORD,
 Flags: DWORD,
 FileNameBuffer: ARRAY(WCHAR, 1)
});

var _FILE_MAKE_COMPATIBLE_BUFFER = new StructT('_FILE_MAKE_COMPATIBLE_BUFFER', {
 CloseDisc: BOOLEAN
});

var _FILE_SET_DEFECT_MGMT_BUFFER = new StructT('_FILE_SET_DEFECT_MGMT_BUFFER', {
 Disable: BOOLEAN
});

var _FILE_QUERY_SPARING_BUFFER = new StructT('_FILE_QUERY_SPARING_BUFFER', {
 SparingUnitBytes: DWORD,
 SoftwareSparing: BOOLEAN,
 TotalSpareBlocks: DWORD,
 FreeSpareBlocks: DWORD
});

var _FILE_QUERY_ON_DISK_VOL_INFO_BUFFER = new StructT('_FILE_QUERY_ON_DISK_VOL_INFO_BUFFER', {
 DirectoryCount: LARGE_INTEGER,
 FileCount: LARGE_INTEGER,
 FsFormatMajVersion: WORD,
 FsFormatMinVersion: WORD,
 FsFormatName: ARRAY(WCHAR,  12),
 FormatTime: LARGE_INTEGER,
 LastUpdateTime: LARGE_INTEGER,
 CopyrightInfo: ARRAY(WCHAR,  34),
 AbstractInfo: ARRAY(WCHAR,  34),
 FormattingImplementationInfo: ARRAY(WCHAR,  34),
 LastModifyingImplementationInfo: ARRAY(WCHAR,  34)
});

var _SHRINK_VOLUME_INFORMATION = new StructT('_SHRINK_VOLUME_INFORMATION', {
 ShrinkRequestType: SHRINK_VOLUME_REQUEST_TYPES,
 Flags: DWORDLONG,
 NewNumberOfSectors: LONGLONG
});

var _TXFS_MODIFY_RM = new StructT('_TXFS_MODIFY_RM', {
 Flags: DWORD,
 LogContainerCountMax: DWORD,
 LogContainerCountMin: DWORD,
 LogContainerCount: DWORD,
 LogGrowthIncrement: DWORD,
 LogAutoShrinkPercentage: DWORD,
 Reserved: DWORDLONG,
 LoggingMode: WORD
});

var _TXFS_QUERY_RM_INFORMATION = new StructT('_TXFS_QUERY_RM_INFORMATION', {
 BytesRequired: DWORD,
 TailLsn: DWORDLONG,
 CurrentLsn: DWORDLONG,
 ArchiveTailLsn: DWORDLONG,
 LogContainerSize: DWORDLONG,
 HighestVirtualClock: LARGE_INTEGER,
 LogContainerCount: DWORD,
 LogContainerCountMax: DWORD,
 LogContainerCountMin: DWORD,
 LogGrowthIncrement: DWORD,
 LogAutoShrinkPercentage: DWORD,
 Flags: DWORD,
 LoggingMode: WORD,
 Reserved: WORD,
 RmState: DWORD,
 LogCapacity: DWORDLONG,
 LogFree: DWORDLONG,
 TopsSize: DWORDLONG,
 TopsUsed: DWORDLONG,
 TransactionCount: DWORDLONG,
 OnePCCount: DWORDLONG,
 TwoPCCount: DWORDLONG,
 NumberLogFileFull: DWORDLONG,
 OldestTransactionAge: DWORDLONG,
 RMName: GUID,
 TmLogPathOffset: DWORD
});

var _TXFS_ROLLFORWARD_REDO_INFORMATION = new StructT('_TXFS_ROLLFORWARD_REDO_INFORMATION', {
 LastVirtualClock: LARGE_INTEGER,
 LastRedoLsn: DWORDLONG,
 HighestRecoveryLsn: DWORDLONG,
 Flags: DWORD
});

var _TXFS_START_RM_INFORMATION = new StructT('_TXFS_START_RM_INFORMATION', {
 Flags: DWORD,
 LogContainerSize: DWORDLONG,
 LogContainerCountMin: DWORD,
 LogContainerCountMax: DWORD,
 LogGrowthIncrement: DWORD,
 LogAutoShrinkPercentage: DWORD,
 TmLogPathOffset: DWORD,
 TmLogPathLength: WORD,
 LoggingMode: WORD,
 LogPathLength: WORD,
 Reserved: WORD,
 LogPath: ARRAY(WCHAR, 1)
});

var _TXFS_GET_METADATA_INFO_OUT = new StructT('_TXFS_GET_METADATA_INFO_OUT', {
 TxfFileId: ,
 LockingTransaction: GUID,
 LastLsn: DWORDLONG,
 TransactionState: DWORD
});

var undefined = new StructT('undefined', {
 LowPart: LONGLONG,
 HighPart: LONGLONG
});

var _TXFS_LIST_TRANSACTION_LOCKED_FILES_ENTRY = new StructT('_TXFS_LIST_TRANSACTION_LOCKED_FILES_ENTRY', {
 Offset: DWORDLONG,
 NameFlags: DWORD,
 FileId: LONGLONG,
 Reserved1: DWORD,
 Reserved2: DWORD,
 Reserved3: LONGLONG,
 FileName: ARRAY(WCHAR, 1)
});

var _TXFS_LIST_TRANSACTION_LOCKED_FILES = new StructT('_TXFS_LIST_TRANSACTION_LOCKED_FILES', {
 KtmTransaction: GUID,
 NumberOfFiles: DWORDLONG,
 BufferSizeRequired: DWORDLONG,
 Offset: DWORDLONG
});

var _TXFS_LIST_TRANSACTIONS_ENTRY = new StructT('_TXFS_LIST_TRANSACTIONS_ENTRY', {
 TransactionId: GUID,
 TransactionState: DWORD,
 Reserved1: DWORD,
 Reserved2: DWORD,
 Reserved3: LONGLONG
});

var _TXFS_LIST_TRANSACTIONS = new StructT('_TXFS_LIST_TRANSACTIONS', {
 NumberOfTransactions: DWORDLONG,
 BufferSizeRequired: DWORDLONG
});


var _TXFS_WRITE_BACKUP_INFORMATION = new StructT('_TXFS_WRITE_BACKUP_INFORMATION', {
 Buffer: ARRAY(BYTE, 1)
});

var _TXFS_GET_TRANSACTED_VERSION = new StructT('_TXFS_GET_TRANSACTED_VERSION', {
 ThisBaseVersion: DWORD,
 LatestVersion: DWORD,
 ThisMiniVersion: WORD,
 FirstMiniVersion: WORD,
 LatestMiniVersion: WORD
});

var _TXFS_SAVEPOINT_INFORMATION = new StructT('_TXFS_SAVEPOINT_INFORMATION', {
 KtmTransaction: HANDLE,
 ActionCode: DWORD,
 SavepointId: DWORD
});

var _TXFS_CREATE_MINIVERSION_INFO = new StructT('_TXFS_CREATE_MINIVERSION_INFO', {
 StructureVersion: WORD,
 StructureLength: WORD,
 BaseVersion: DWORD,
 MiniVersion: WORD
});

var _TXFS_TRANSACTION_ACTIVE_INFO = new StructT('_TXFS_TRANSACTION_ACTIVE_INFO', {
 TransactionsActiveAtSnapshot: BOOLEAN
});

var _BOOT_AREA_INFO = new StructT('_BOOT_AREA_INFO', {
 BootSectorCount: DWORD,
 BootSectors: ARRAY(undefined, 2)
});

var undefined = new StructT('undefined', {
 Offset: LARGE_INTEGER
});

var _RETRIEVAL_POINTER_BASE = new StructT('_RETRIEVAL_POINTER_BASE', {
 FileAreaOffset: LARGE_INTEGER
});

var _FILE_FS_PERSISTENT_VOLUME_INFORMATION = new StructT('_FILE_FS_PERSISTENT_VOLUME_INFORMATION', {
 VolumeFlags: DWORD,
 FlagMask: DWORD,
 Version: DWORD,
 Reserved: DWORD
});

var _FILE_SYSTEM_RECOGNITION_INFORMATION = new StructT('_FILE_SYSTEM_RECOGNITION_INFORMATION', {
 FileSystem: ARRAY(CHAR, 9)
});

var _REQUEST_OPLOCK_INPUT_BUFFER = new StructT('_REQUEST_OPLOCK_INPUT_BUFFER', {
 StructureVersion: WORD,
 StructureLength: WORD,
 RequestedOplockLevel: DWORD,
 Flags: DWORD
});

var _REQUEST_OPLOCK_OUTPUT_BUFFER = new StructT('_REQUEST_OPLOCK_OUTPUT_BUFFER', {
 StructureVersion: WORD,
 StructureLength: WORD,
 OriginalOplockLevel: DWORD,
 NewOplockLevel: DWORD,
 Flags: DWORD,
 AccessMode: ACCESS_MASK,
 ShareMode: WORD
});

var _SD_CHANGE_MACHINE_SID_INPUT = new StructT('_SD_CHANGE_MACHINE_SID_INPUT', {
 CurrentMachineSIDOffset: WORD,
 CurrentMachineSIDLength: WORD,
 NewMachineSIDOffset: WORD,
 NewMachineSIDLength: WORD
});

var _SD_CHANGE_MACHINE_SID_OUTPUT = new StructT('_SD_CHANGE_MACHINE_SID_OUTPUT', {
 NumSDChangedSuccess: DWORDLONG,
 NumSDChangedFail: DWORDLONG,
 NumSDUnused: DWORDLONG,
 NumSDTotal: DWORDLONG,
 NumMftSDChangedSuccess: DWORDLONG,
 NumMftSDChangedFail: DWORDLONG,
 NumMftSDTotal: DWORDLONG
});

var _SD_GLOBAL_CHANGE_INPUT = new StructT('_SD_GLOBAL_CHANGE_INPUT', {
 Flags: DWORD,
 ChangeType: DWORD
});

var _SD_GLOBAL_CHANGE_OUTPUT = new StructT('_SD_GLOBAL_CHANGE_OUTPUT', {
 Flags: DWORD,
 ChangeType: DWORD
});

var _EXTENDED_ENCRYPTED_DATA_INFO = new StructT('_EXTENDED_ENCRYPTED_DATA_INFO', {
 ExtendedCode: DWORD,
 Length: DWORD,
 Flags: DWORD,
 Reserved: DWORD
});

var _LOOKUP_STREAM_FROM_CLUSTER_INPUT = new StructT('_LOOKUP_STREAM_FROM_CLUSTER_INPUT', {
 Flags: DWORD,
 NumberOfClusters: DWORD,
 Cluster: ARRAY(LARGE_INTEGER, 1)
});

var _LOOKUP_STREAM_FROM_CLUSTER_OUTPUT = new StructT('_LOOKUP_STREAM_FROM_CLUSTER_OUTPUT', {
 Offset: DWORD,
 NumberOfMatches: DWORD,
 BufferSizeRequired: DWORD
});

var _LOOKUP_STREAM_FROM_CLUSTER_ENTRY = new StructT('_LOOKUP_STREAM_FROM_CLUSTER_ENTRY', {
 OffsetToNext: DWORD,
 Flags: DWORD,
 Reserved: LARGE_INTEGER,
 Cluster: LARGE_INTEGER,
 FileName: ARRAY(WCHAR, 1)
});

var _FILE_TYPE_NOTIFICATION_INPUT = new StructT('_FILE_TYPE_NOTIFICATION_INPUT', {
 Flags: DWORD,
 NumFileTypeIDs: DWORD,
 FileTypeID: ARRAY(GUID, 1)
});

var _DISK_EXTENT = new StructT('_DISK_EXTENT', {
 DiskNumber: DWORD,
 StartingOffset: LARGE_INTEGER,
 ExtentLength: LARGE_INTEGER
});

var _VOLUME_DISK_EXTENTS = new StructT('_VOLUME_DISK_EXTENTS', {
 NumberOfDiskExtents: DWORD,
 Extents: ARRAY(DISK_EXTENT, ANYSIZE_ARRAY)
});

var _VOLUME_GET_GPT_ATTRIBUTES_INFORMATION = new StructT('_VOLUME_GET_GPT_ATTRIBUTES_INFORMATION', {
 GptAttributes: DWORDLONG
});


