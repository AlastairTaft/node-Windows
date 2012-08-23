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
 return exports.functions[name] = new ffi.ForeignFunction(name, 'libclang', ret, params);
}


function DEF(name, ffiType, type){
  return ffiType;
}

var
 time_t = longlong.typedef('time_t'),
 CXIndex = _void.Δ.typedef('CXIndex'),
 CXClientData = _void.Δ.typedef('CXClientData'),
 CXFile = _void.Δ.typedef('CXFile'),
 CXDiagnostic = _void.Δ.typedef('CXDiagnostic'),
 CXCompletionString = _void.Δ.typedef('CXCompletionString'),
 CXRemapping = _void.Δ.typedef('CXRemapping');

var CXAvailabilityKind = new EnumT('CXAvailabilityKind', {
 Available: 0,
 Deprecated: 1,
 NotAvailable: 2,
 NotAccessible: 3
});

var CXDiagnosticSeverity = new EnumT('CXDiagnosticSeverity', {
 Ignored: 0,
 Note: 1,
 Warning: 2,
 Error: 3,
 Fatal: 4
});

var CXDiagnosticDisplayOptions = new EnumT('CXDiagnosticDisplayOptions', {
 SourceLocation: 0x01,
 Column: 0x02,
 SourceRanges: 0x04,
 Option: 0x08,
 CategoryId: 0x10,
 CategoryName: 0x20
});

var CXTranslationUnit_Flags = new EnumT('CXTranslationUnit_Flags', {
 None: 0x0,
 DetailedPreprocessingRecord: 0x01,
 Incomplete: 0x02,
 PrecompiledPreamble: 0x04,
 CacheCompletionResults: 0x08,
 CxxPrecompiledPreamble: 0x10,
 CxxChainedPch: 0x20,
 NestedMacroExpansions: 0x40,
 NestedMacroInstantiations: 8
});

var CXSaveTranslationUnit_Flags = new EnumT('CXSaveTranslationUnit_Flags', {
 None: 0x0
});

var CXSaveError = new EnumT('CXSaveError', {
 None: 0,
 Unknown: 1,
 TranslationErrors: 2,
 InvalidTu: 3
});

var CXReparse_Flags = new EnumT('CXReparse_Flags', {
 None: 0x0
});

var CXTUResourceUsageKind = new EnumT('CXTUResourceUsageKind', {
 Ast: 1,
 Identifiers: 2,
 Selectors: 3,
 GlobalCompletionResults: 4,
 ManagerContentCache: 5,
 AstSideTables: 6,
 ManagerMembufferMalloc: 7,
 ManagerMembufferMMap: 8,
 ExternalAstMembufferMalloc: 9,
 ExternalAstMembufferMMap: 10,
 Preprocessor: 11,
 PreprocessingRecord: 12,
 ManagerDataStructures: 13,
 PreprocessorHeaderSearch: 14,
 MemoryBytesBegin: 14,
 MemoryBytesEnd: 15,
 First: 16,
 Last: 17
});

var CXCursorKind = new EnumT('CXCursorKind', {
 UnexposedDecl: 1,
 StructDecl: 2,
 UnionDecl: 3,
 ClassDecl: 4,
 EnumDecl: 5,
 FieldDecl: 6,
 EnumConstantDecl: 7,
 FunctionDecl: 8,
 VarDecl: 9,
 ParmDecl: 10,
 ObjInterfaceDecl: 11,
 ObjCategoryDecl: 12,
 ObjProtocolDecl: 13,
 ObjPropertyDecl: 14,
 ObjIvarDecl: 15,
 ObjInstanceMethodDecl: 16,
 ObjClassMethodDecl: 17,
 ObjImplementationDecl: 18,
 ObjCategoryImplDecl: 19,
 TypedefDecl: 20,
 CxxMethod: 21,
 Namespace: 22,
 LinkageSpec: 23,
 Constructor: 24,
 Destructor: 25,
 ConversionFunction: 26,
 TemplateTypeParameter: 27,
 NonTypeTemplateParameter: 28,
 TemplateTemplateParameter: 29,
 FunctionTemplate: 30,
 ClassTemplate: 31,
 ClassTemplatePartialSpecialization: 32,
 NamespaceAlias: 33,
 UsingDirective: 34,
 UsingDeclaration: 35,
 TypeAliasDecl: 36,
 ObjSynthesizeDecl: 37,
 ObjDynamicDecl: 38,
 CxxAccessSpecifier: 39,
 FirstDecl: 39,
 LastDecl: 40,
 FirstRef: 40,
 ObjSuperClassRef: 40,
 ObjProtocolRef: 41,
 ObjClassRef: 42,
 TypeRef: 43,
 CxxBaseSpecifier: 44,
 TemplateRef: 45,
 NamespaceRef: 46,
 MemberRef: 47,
 LabelRef: 48,
 OverloadedDeclRef: 49,
 LastRef: 52,
 FirstInvalid: 70,
 InvalidFile: 70,
 NoDeclFound: 71,
 NotImplemented: 72,
 InvalidCode: 73,
 LastInvalid: 58,
 FirstExpr: 100,
 UnexposedExpr: 100,
 DeclRefExpr: 101,
 MemberRefExpr: 102,
 CallExpr: 103,
 ObjMessageExpr: 104,
 BlockExpr: 105,
 IntegerLiteral: 106,
 FloatingLiteral: 107,
 ImaginaryLiteral: 108,
 StringLiteral: 109,
 CharacterLiteral: 110,
 ParenExpr: 111,
 UnaryOperator: 112,
 ArraySubscriptExpr: 113,
 BinaryOperator: 114,
 CompoundAssignOperator: 115,
 ConditionalOperator: 116,
 StyleCastExpr: 117,
 CompoundLiteralExpr: 118,
 InitListExpr: 119,
 AddrLabelExpr: 120,
 StmtExpr: 121,
 GenericSelectionExpr: 122,
 GnuNullExpr: 123,
 CxxStaticCastExpr: 124,
 CxxDynamicCastExpr: 125,
 CxxReinterpretCastExpr: 126,
 CxxConstCastExpr: 127,
 CxxFunctionalCastExpr: 128,
 CxxTypeidExpr: 129,
 CxxBoolLiteralExpr: 130,
 CxxNullPtrLiteralExpr: 131,
 CxxThisExpr: 132,
 CxxThrowExpr: 133,
 CxxNewExpr: 134,
 CxxDeleteExpr: 135,
 UnaryExpr: 136,
 ObjStringLiteral: 137,
 ObjEncodeExpr: 138,
 ObjSelectorExpr: 139,
 ObjProtocolExpr: 140,
 ObjBridgedCastExpr: 141,
 PackExpansionExpr: 142,
 SizeOfPackExpr: 143,
 LastExpr: 104,
 FirstStmt: 200,
 UnexposedStmt: 200,
 LabelStmt: 201,
 CompoundStmt: 202,
 CaseStmt: 203,
 DefaultStmt: 204,
 IfStmt: 205,
 SwitchStmt: 206,
 WhileStmt: 207,
 DoStmt: 208,
 ForStmt: 209,
 GotoStmt: 210,
 IndirectGotoStmt: 211,
 ContinueStmt: 212,
 BreakStmt: 213,
 ReturnStmt: 214,
 AsmStmt: 215,
 ObjAtTryStmt: 216,
 ObjAtCatchStmt: 217,
 ObjAtFinallyStmt: 218,
 ObjAtThrowStmt: 219,
 ObjAtSynchronizedStmt: 220,
 ObjAutoreleasePoolStmt: 221,
 ObjForCollectionStmt: 222,
 CxxCatchStmt: 223,
 CxxTryStmt: 224,
 CxxForRangeStmt: 225,
 SehTryStmt: 226,
 SehExceptStmt: 227,
 SehFinallyStmt: 228,
 NullStmt: 230,
 DeclStmt: 231,
 LastStmt: 137,
 TranslationUnit: 300,
 FirstAttr: 400,
 UnexposedAttr: 400,
 IbActionAttr: 401,
 IbOutletAttr: 402,
 IbOutletCollectionAttr: 403,
 CxxFinalAttr: 404,
 CxxOverrideAttr: 405,
 AnnotateAttr: 406,
 LastAttr: 147,
 PreprocessingDirective: 500,
 MacroDefinition: 501,
 MacroExpansion: 502,
 MacroInstantiation: 151,
 InclusionDirective: 503,
 FirstPreprocessing: 153,
 LastPreprocessing: 154
});

var CXLinkageKind = new EnumT('CXLinkageKind', {
 Invalid: 0,
 NoLinkage: 1,
 Internal: 2,
 UniqueExternal: 3,
 External: 4
});

var CXLanguageKind = new EnumT('CXLanguageKind', {
 Invalid: 0,
 C: 1,
 ObjC: 2,
 PlusPlus: 3
});

var CXTypeKind = new EnumT('CXTypeKind', {
 Invalid: 0,
 Unexposed: 1,
 Void: 2,
 Bool: 3,
 CharU: 4,
 UChar: 5,
 Char16: 6,
 Char32: 7,
 UShort: 8,
 UInt: 9,
 ULong: 10,
 ULongLong: 11,
 UInt128: 12,
 CharS: 13,
 SChar: 14,
 WChar: 15,
 Short: 16,
 Int: 17,
 Long: 18,
 LongLong: 19,
 Int128: 20,
 Float: 21,
 Double: 22,
 LongDouble: 23,
 NullPtr: 24,
 Overload: 25,
 Dependent: 26,
 ObjId: 27,
 ObjClass: 28,
 ObjSel: 29,
 FirstBuiltin: 30,
 LastBuiltin: 31,
 Complex: 100,
 Pointer: 101,
 BlockPointer: 102,
 LValueReference: 103,
 RValueReference: 104,
 Record: 105,
 Enum: 106,
 Typedef: 107,
 ObjInterface: 108,
 ObjObjectPointer: 109,
 FunctionNoProto: 110,
 FunctionProto: 111,
 ConstantArray: 112
});

var CX_CXXAccessSpecifier = new EnumT('CX_CXXAccessSpecifier', {
 InvalidSpecifier: 0,
 Public: 1,
 Protected: 2,
 Private: 3
});

var CXChildVisitResult = new EnumT('CXChildVisitResult', {
 Break: 0,
 Continue: 1,
 Recurse: 2
});

var CXNameRefFlags = new EnumT('CXNameRefFlags', {
 RangeWantQualifier: 0x1,
 RangeWantTemplateArgs: 0x2,
 RangeWantSinglePiece: 0x4
});

var CXTokenKind = new EnumT('CXTokenKind', {
 Punctuation: 0,
 Keyword: 1,
 Identifier: 2,
 Literal: 3,
 Comment: 4
});

var CXCompletionChunkKind = new EnumT('CXCompletionChunkKind', {
 Optional: 0,
 TypedText: 1,
 Text: 2,
 Placeholder: 3,
 Informative: 4,
 CurrentParameter: 5,
 LeftParen: 6,
 RightParen: 7,
 LeftBracket: 8,
 RightBracket: 9,
 LeftBrace: 10,
 RightBrace: 11,
 LeftAngle: 12,
 RightAngle: 13,
 Comma: 14,
 ResultType: 15,
 Colon: 16,
 SemiColon: 17,
 Equal: 18,
 HorizontalSpace: 19,
 VerticalSpace: 20
});

var CXCodeComplete_Flags = new EnumT('CXCodeComplete_Flags', {
 IncludeMacros: 0x01,
 IncludePatterns: 0x02
});

var CXCompletionContext = new EnumT('CXCompletionContext', {
 Unexposed: 0,
 AnyType: 1,
 AnyValue: 2,
 ObjObjectValue: 3,
 ObjSelectorValue: 4,
 CxxClassTypeValue: 5,
 DotMemberAccess: 6,
 ArrowMemberAccess: 7,
 ObjPropertyAccess: 8,
 EnumTag: 9,
 UnionTag: 10,
 StructTag: 11,
 ClassTag: 12,
 Namespace: 13,
 NestedNameSpecifier: 14,
 ObjInterface: 15,
 ObjProtocol: 16,
 ObjCategory: 17,
 ObjInstanceMessage: 18,
 ObjClassMessage: 19,
 ObjSelectorName: 20,
 MacroName: 21,
 NaturalLanguage: 22,
 Unknown: 23
});

var CXVisitorResult = new EnumT('CXVisitorResult', {
 Break: 0,
 Continue: 1
});


  CXCursorVisitor = new CallbackT('CXCursorVisitor', CXChildVisitResult, [CXCursor, CXCursor, _void.Δ]),
  CXInclusionVisitor = new CallbackT('CXInclusionVisitor', _void, [_void.Δ, CXSourceLocation.Δ, uint, _void.Δ]),


var CXUnsavedFile = new StructT('CXUnsavedFile', {
 Filename: char.Δ,
 Contents: char.Δ,
 Length: ulong
});

var CXString = new StructT('CXString', {
 data: _void.Δ,
 private_flags: uint
});

var CXSourceLocation = new StructT('CXSourceLocation', {
 ptr_data: ARRAY(undefined, 2),
 int_data: uint
});

var CXSourceRange = new StructT('CXSourceRange', {
 ptr_data: ARRAY(undefined, 2),
 begin_int_data: uint,
 end_int_data: uint
});

var CXTUResourceUsageEntry = new StructT('CXTUResourceUsageEntry', {
 kind: CXTUResourceUsageKind,
 amount: ulong
});

var CXTUResourceUsage = new StructT('CXTUResourceUsage', {
 data: _void.Δ,
 numEntries: uint,
 entries: CXTUResourceUsageEntry.Δ
});

var CXCursor = new StructT('CXCursor', {
 kind: CXCursorKind,
 xdata: int,
 data: ARRAY(undefined, 3)
});


var CXType = new StructT('CXType', {
 kind: CXTypeKind,
 data: ARRAY(undefined, 2)
});

var CXToken = new StructT('CXToken', {
 int_data: ARRAY(undefined, 4),
 ptr_data: _void.Δ
});

var CXCompletionResult = new StructT('CXCompletionResult', {
 CursorKind: CXCursorKind,
 CompletionString: CXCompletionString
});

var CXCodeCompleteResults = new StructT('CXCodeCompleteResults', {
 Results: CXCompletionResult.Δ,
 NumResults: uint
});

var CXCursorAndRangeVisitor = new StructT('CXCursorAndRangeVisitor', {
 context: _void.Δ,
 visit: new CallbackT(CXVisitorResult, [_void.Δ, CXCursor, CXSourceRange]).Δ
});


  clang_getCString: [ _void, { string: CXString } ],
  clang_disposeString: [ _void, { string: CXString } ],
  clang_createIndex: [ CXIndex, { excludeDeclarationsFromPCH: int, displayDiagnostics: int } ],
  clang_disposeIndex: [ _void, { index: CXIndex } ],
  clang_getFileName: [ CXString, { SFile: CXFile } ],
  clang_getFileTime: [ time_t, { SFile: CXFile } ],
  clang_isFileMultipleIncludeGuarded: [ _void, { tu: CXTranslationUnit, file: CXFile } ],
  clang_getFile: [ CXFile, { tu: CXTranslationUnit, file_name: char.Δ } ],
  clang_getNullLocation: [ CXSourceLocation, {  } ],
  clang_equalLocations: [ _void, { loc1: CXSourceLocation, loc2: CXSourceLocation } ],
  clang_getLocation: [ CXSourceLocation, { tu: CXTranslationUnit, file: CXFile, line: uint, column: uint } ],
  clang_getLocationForOffset: [ CXSourceLocation, { tu: CXTranslationUnit, file: CXFile, offset: uint } ],
  clang_getNullRange: [ CXSourceRange, {  } ],
  clang_getRange: [ CXSourceRange, { begin: CXSourceLocation, end: CXSourceLocation } ],
  clang_equalRanges: [ _void, { range1: CXSourceRange, range2: CXSourceRange } ],
  clang_Range_isNull: [ _void, { range: CXSourceRange } ],
  clang_getExpansionLocation: [ _void, { location: CXSourceLocation, file: CXFile.Δ, line: uint.Δ, column: uint.Δ, offset: uint.Δ } ],
  clang_getPresumedLocation: [ _void, { location: CXSourceLocation, filename: CXString.Δ, line: uint.Δ, column: uint.Δ } ],
  clang_getInstantiationLocation: [ _void, { location: CXSourceLocation, file: CXFile.Δ, line: uint.Δ, column: uint.Δ, offset: uint.Δ } ],
  clang_getSpellingLocation: [ _void, { location: CXSourceLocation, file: CXFile.Δ, line: uint.Δ, column: uint.Δ, offset: uint.Δ } ],
  clang_getRangeStart: [ CXSourceLocation, { range: CXSourceRange } ],
  clang_getRangeEnd: [ CXSourceLocation, { range: CXSourceRange } ],
  clang_getNumDiagnostics: [ _void, { Unit: CXTranslationUnit } ],
  clang_getDiagnostic: [ CXDiagnostic, { Unit: CXTranslationUnit, Index: uint } ],
  clang_disposeDiagnostic: [ _void, { Diagnostic: CXDiagnostic } ],
  clang_formatDiagnostic: [ CXString, { Diagnostic: CXDiagnostic, Options: uint } ],
  clang_defaultDiagnosticDisplayOptions: [ _void, {  } ],
  clang_getDiagnosticSeverity: [ CXDiagnosticSeverity, { CXDiagnostic: CXDiagnostic } ],
  clang_getDiagnosticLocation: [ CXSourceLocation, { CXDiagnostic: CXDiagnostic } ],
  clang_getDiagnosticSpelling: [ CXString, { CXDiagnostic: CXDiagnostic } ],
  clang_getDiagnosticOption: [ CXString, { Diag: CXDiagnostic, Disable: CXString.Δ } ],
  clang_getDiagnosticCategory: [ _void, { CXDiagnostic: CXDiagnostic } ],
  clang_getDiagnosticCategoryName: [ CXString, { Category: uint } ],
  clang_getDiagnosticNumRanges: [ _void, { CXDiagnostic: CXDiagnostic } ],
  clang_getDiagnosticRange: [ CXSourceRange, { Diagnostic: CXDiagnostic, Range: uint } ],
  clang_getDiagnosticNumFixIts: [ _void, { Diagnostic: CXDiagnostic } ],
  clang_getDiagnosticFixIt: [ CXString, { Diagnostic: CXDiagnostic, FixIt: uint, ReplacementRange: CXSourceRange.Δ } ],
  clang_getTranslationUnitSpelling: [ CXString, { CTUnit: CXTranslationUnit } ],
  clang_createTranslationUnitFromSourceFile: [ CXTranslationUnit, { CIdx: CXIndex, source_filename: char.Δ, num_clang_command_line_args: int, clang_command_line_args: char.Δ.Δ, num_unsaved_files: uint, unsaved_files: CXUnsavedFile.Δ } ],
  clang_createTranslationUnit: [ CXTranslationUnit, { CXIndex: CXIndex, ast_filename: char.Δ } ],
  clang_defaultEditingTranslationUnitOptions: [ _void, {  } ],
  clang_parseTranslationUnit: [ CXTranslationUnit, { CIdx: CXIndex, source_filename: char.Δ, command_line_args: char.Δ.Δ, num_command_line_args: int, unsaved_files: CXUnsavedFile.Δ, num_unsaved_files: uint, options: uint } ],
  clang_defaultSaveOptions: [ _void, { TU: CXTranslationUnit } ],
  clang_saveTranslationUnit: [ _void, { TU: CXTranslationUnit, FileName: char.Δ, options: uint } ],
  clang_disposeTranslationUnit: [ _void, { CXTranslationUnit: CXTranslationUnit } ],
  clang_defaultReparseOptions: [ _void, { TU: CXTranslationUnit } ],
  clang_reparseTranslationUnit: [ _void, { TU: CXTranslationUnit, num_unsaved_files: uint, unsaved_files: CXUnsavedFile.Δ, options: uint } ],
  clang_getTUResourceUsageName: [ _void, { kind: CXTUResourceUsageKind } ],
  clang_getCXTUResourceUsage: [ CXTUResourceUsage, { TU: CXTranslationUnit } ],
  clang_disposeCXTUResourceUsage: [ _void, { usage: CXTUResourceUsage } ],
  clang_getNullCursor: [ CXCursor, {  } ],
  clang_getTranslationUnitCursor: [ CXCursor, { CXTranslationUnit: CXTranslationUnit } ],
  clang_equalCursors: [ _void, { CXCursor: CXCursor } ],
  clang_Cursor_isNull: [ _void, { CXCursor: CXCursor } ],
  clang_hashCursor: [ _void, { CXCursor: CXCursor } ],
  clang_getCursorKind: [ CXCursorKind, { CXCursor: CXCursor } ],
  clang_isDeclaration: [ _void, { CXCursorKind: CXCursorKind } ],
  clang_isReference: [ _void, { CXCursorKind: CXCursorKind } ],
  clang_isExpression: [ _void, { CXCursorKind: CXCursorKind } ],
  clang_isStatement: [ _void, { CXCursorKind: CXCursorKind } ],
  clang_isAttribute: [ _void, { CXCursorKind: CXCursorKind } ],
  clang_isInvalid: [ _void, { CXCursorKind: CXCursorKind } ],
  clang_isTranslationUnit: [ _void, { CXCursorKind: CXCursorKind } ],
  clang_isPreprocessing: [ _void, { CXCursorKind: CXCursorKind } ],
  clang_isUnexposed: [ _void, { CXCursorKind: CXCursorKind } ],
  clang_getCursorLinkage: [ CXLinkageKind, { cursor: CXCursor } ],
  clang_getCursorAvailability: [ CXAvailabilityKind, { cursor: CXCursor } ],
  clang_getCursorLanguage: [ CXLanguageKind, { cursor: CXCursor } ],
  clang_Cursor_getTranslationUnit: [ CXTranslationUnit, { CXCursor: CXCursor } ],
  clang_createCXCursorSet: [ CXCursorSet, {  } ],
  clang_disposeCXCursorSet: [ _void, { cset: CXCursorSet } ],
  clang_CXCursorSet_contains: [ _void, { cset: CXCursorSet, cursor: CXCursor } ],
  clang_CXCursorSet_insert: [ _void, { cset: CXCursorSet, cursor: CXCursor } ],
  clang_getCursorSemanticParent: [ CXCursor, { cursor: CXCursor } ],
  clang_getCursorLexicalParent: [ CXCursor, { cursor: CXCursor } ],
  clang_getOverriddenCursors: [ _void, { cursor: CXCursor, overridden: CXCursor.Δ.Δ, num_overridden: uint.Δ } ],
  clang_disposeOverriddenCursors: [ _void, { overridden: CXCursor.Δ } ],
  clang_getIncludedFile: [ CXFile, { cursor: CXCursor } ],
  clang_getCursor: [ CXCursor, { CXSourceLocation: CXSourceLocation } ],
  clang_getCursorLocation: [ CXSourceLocation, { CXCursor: CXCursor } ],
  clang_getCursorExtent: [ CXSourceRange, { CXCursor: CXCursor } ],
  clang_getCursorType: [ CXType, { C: CXCursor } ],
  clang_equalTypes: [ _void, { A: CXType, B: CXType } ],
  clang_getCanonicalType: [ CXType, { T: CXType } ],
  clang_isConstQualifiedType: [ _void, { T: CXType } ],
  clang_isVolatileQualifiedType: [ _void, { T: CXType } ],
  clang_isRestrictQualifiedType: [ _void, { T: CXType } ],
  clang_getPointeeType: [ CXType, { T: CXType } ],
  clang_getTypeDeclaration: [ CXCursor, { T: CXType } ],
  clang_getDeclObjCTypeEncoding: [ CXString, { C: CXCursor } ],
  clang_getTypeKindSpelling: [ CXString, { K: CXTypeKind } ],
  clang_getResultType: [ CXType, { T: CXType } ],
  clang_getCursorResultType: [ CXType, { C: CXCursor } ],
  clang_isPODType: [ _void, { T: CXType } ],
  clang_getArrayElementType: [ CXType, { T: CXType } ],
  clang_getArraySize: [ _void, { T: CXType } ],
  clang_isVirtualBase: [ _void, { CXCursor: CXCursor } ],
  clang_getCXXAccessSpecifier: [ CX_CXXAccessSpecifier, { CXCursor: CXCursor } ],
  clang_getNumOverloadedDecls: [ _void, { cursor: CXCursor } ],
  clang_getOverloadedDecl: [ CXCursor, { cursor: CXCursor, index: uint } ],
  clang_getIBOutletCollectionType: [ CXType, { CXCursor: CXCursor } ],
  clang_visitChildren: [ _void, { parent: CXCursor, visitor: CXCursorVisitor, client_data: CXClientData } ],
  clang_getCursorUSR: [ CXString, { CXCursor: CXCursor } ],
  clang_constructUSR_ObjCClass: [ CXString, { class_name: char.Δ } ],
  clang_constructUSR_ObjCCategory: [ CXString, { class_name: char.Δ, category_name: char.Δ } ],
  clang_constructUSR_ObjCProtocol: [ CXString, { protocol_name: char.Δ } ],
  clang_constructUSR_ObjCIvar: [ CXString, { name: char.Δ, classUSR: CXString } ],
  clang_constructUSR_ObjCMethod: [ CXString, { name: char.Δ, isInstanceMethod: uint, classUSR: CXString } ],
  clang_constructUSR_ObjCProperty: [ CXString, { property: char.Δ, classUSR: CXString } ],
  clang_getCursorSpelling: [ CXString, { CXCursor: CXCursor } ],
  clang_getCursorDisplayName: [ CXString, { CXCursor: CXCursor } ],
  clang_getCursorReferenced: [ CXCursor, { CXCursor: CXCursor } ],
  clang_getCursorDefinition: [ CXCursor, { CXCursor: CXCursor } ],
  clang_isCursorDefinition: [ _void, { CXCursor: CXCursor } ],
  clang_getCanonicalCursor: [ CXCursor, { CXCursor: CXCursor } ],
  clang_CXXMethod_isStatic: [ _void, { C: CXCursor } ],
  clang_CXXMethod_isVirtual: [ _void, { C: CXCursor } ],
  clang_getTemplateCursorKind: [ CXCursorKind, { C: CXCursor } ],
  clang_getSpecializedCursorTemplate: [ CXCursor, { C: CXCursor } ],
  clang_getCursorReferenceNameRange: [ CXSourceRange, { C: CXCursor, NameFlags: uint, PieceIndex: uint } ],
  clang_getTokenKind: [ CXTokenKind, { CXToken: CXToken } ],
  clang_getTokenSpelling: [ CXString, { CXToken: CXToken } ],
  clang_getTokenLocation: [ CXSourceLocation, { CXToken: CXToken } ],
  clang_getTokenExtent: [ CXSourceRange, { CXToken: CXToken } ],
  clang_tokenize: [ _void, { TU: CXTranslationUnit, Range: CXSourceRange, Tokens: CXToken.Δ.Δ, NumTokens: uint.Δ } ],
  clang_annotateTokens: [ _void, { TU: CXTranslationUnit, Tokens: CXToken.Δ, NumTokens: uint, Cursors: CXCursor.Δ } ],
  clang_disposeTokens: [ _void, { TU: CXTranslationUnit, Tokens: CXToken.Δ, NumTokens: uint } ],
  clang_getCursorKindSpelling: [ CXString, { Kind: CXCursorKind } ],
  clang_getDefinitionSpellingAndExtent: [ _void, { CXCursor: CXCursor, startBuf: char.Δ.Δ, endBuf: char.Δ.Δ, startLine: uint.Δ, startColumn: uint.Δ, endLine: uint.Δ, endColumn: uint.Δ } ],
  clang_enableStackTraces: [ _void, {  } ],
  clang_executeOnThread: [ _void, { fn: new CallbackT(_void, [_void.Δ]).Δ, user_data: _void.Δ, stack_size: uint } ],
  clang_getCompletionChunkKind: [ CXCompletionChunkKind, { completion_string: CXCompletionString, chunk_number: uint } ],
  clang_getCompletionChunkText: [ CXString, { completion_string: CXCompletionString, chunk_number: uint } ],
  clang_getCompletionChunkCompletionString: [ CXCompletionString, { completion_string: CXCompletionString, chunk_number: uint } ],
  clang_getNumCompletionChunks: [ _void, { completion_string: CXCompletionString } ],
  clang_getCompletionPriority: [ _void, { completion_string: CXCompletionString } ],
  clang_getCompletionAvailability: [ CXAvailabilityKind, { completion_string: CXCompletionString } ],
  clang_getCompletionNumAnnotations: [ _void, { completion_string: CXCompletionString } ],
  clang_getCompletionAnnotation: [ CXString, { completion_string: CXCompletionString, annotation_number: uint } ],
  clang_getCursorCompletionString: [ CXCompletionString, { cursor: CXCursor } ],
  clang_defaultCodeCompleteOptions: [ _void, {  } ],
  clang_codeCompleteAt: [ CXCodeCompleteResults, { TU: CXTranslationUnit, complete_filename: char.Δ, complete_line: uint, complete_column: uint, unsaved_files: CXUnsavedFile.Δ, num_unsaved_files: uint, options: uint } ],
  clang_sortCodeCompletionResults: [ _void, { Results: CXCompletionResult.Δ, NumResults: uint } ],
  clang_disposeCodeCompleteResults: [ _void, { Results: CXCodeCompleteResults.Δ } ],
  clang_codeCompleteGetNumDiagnostics: [ _void, { Results: CXCodeCompleteResults.Δ } ],
  clang_codeCompleteGetDiagnostic: [ CXDiagnostic, { Results: CXCodeCompleteResults.Δ, Index: uint } ],
  clang_codeCompleteGetContexts: [ _void, { Results: CXCodeCompleteResults.Δ } ],
  clang_codeCompleteGetContainerKind: [ CXCursorKind, { Results: CXCodeCompleteResults.Δ, IsIncomplete: uint.Δ } ],
  clang_codeCompleteGetContainerUSR: [ CXString, { Results: CXCodeCompleteResults.Δ } ],
  clang_codeCompleteGetObjCSelector: [ CXString, { Results: CXCodeCompleteResults.Δ } ],
  clang_getClangVersion: [ CXString, {  } ],
  clang_toggleCrashRecovery: [ _void, { isEnabled: uint } ],
  clang_getInclusions: [ _void, { tu: CXTranslationUnit, visitor: CXInclusionVisitor, client_data: CXClientData } ],
  clang_getRemappings: [ CXRemapping, { path: char.Δ } ],
  clang_remap_getNumFiles: [ _void, { CXRemapping: CXRemapping } ],
  clang_remap_getFilenames: [ _void, { CXRemapping: CXRemapping, index: uint, original: CXString.Δ, transformed: CXString.Δ } ],
  clang_remap_dispose: [ _void, { CXRemapping: CXRemapping } ],
  clang_findReferencesInFile: [ _void, { cursor: CXCursor, file: CXFile, visitor: CXCursorAndRangeVisitor } ],