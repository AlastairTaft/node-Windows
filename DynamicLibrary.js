var ForeignFunction = require('ffi/lib/foreign_function'),
    funcs = require('ffi/lib/bindings').StaticFunctions,
    ref = require('ref'),
    path = require('path'),
    read  = require('fs').readFileSync;

var int = ref.types.int,
    voidPtr = ref.refType(ref.types.void);

var dlopen  = ForeignFunction(funcs.dlopen,  voidPtr,  [ 'string', int ]),
    dlclose = ForeignFunction(funcs.dlclose, int,      [ voidPtr ]),
    dlsym   = ForeignFunction(funcs.dlsym,   voidPtr,  [ voidPtr, 'string' ]),
    dlerror = ForeignFunction(funcs.dlerror, 'string', [ ]);

module.exports = DynamicLibrary

function DynamicLibrary(name, mode){

  if (typeof name === 'string') {
    this.name = path.basename(name).slice(0, -path.extname(name).length);
    name = ref.allocCString(name);
  } else if (!name) {
    this.name = '';
    name = ref.NULL;
  }

  if (mode == null) {
    mode = DynamicLibrary.FLAGS.RTLD_NOW
  }

  this._handle = dlopen(name, mode);

  if (this._handle.isNull()) {
    var err = this.error(),
        match = err.match(/^(([^ \t()])+\.so([^ \t:()])*):([ \t])*invalid ELF header$/);

    if (match) {
      var content = read(match[1], 'ascii');
      if (match = content.match(/GROUP *\( *(([^ )])+)/)) {
        return new DynamicLibrary(match[1], mode);
      }
    }

    throw new Error('Dynamic Linking Error: ' + err)
  }
}

DynamicLibrary.FLAGS = {
  RTLD_LAZY:   0x1,
  RTLD_NOW:    0x2,
  RTLD_LOCAL:  0x4,
  RTLD_GLOBAL: 0x8
};

DynamicLibrary.prototype.close = function close(){
  return dlclose(this._handle);
};

DynamicLibrary.prototype.get = function get(symbol){
  var ptr = dlsym(this._handle, symbol);

  if (ptr.isNull()) {
    throw new Error('Dynamic Symbol Retrieval Error: ' + this.error());
  }

  ptr.name = symbol;
  return ptr;
};

DynamicLibrary.prototype.error = function error(){
  return dlerror();
};
