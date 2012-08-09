var DynamicLibrary = require('ffi/lib/dynamic_library'),
    ForeignFunction = require('ffi/lib/foreign_function'),
    VariadicForeignFunction = require('ffi/lib/foreign_function_var'),
    path = require('path');


module.exports = Library

function Library(libname, functions){
  if (typeof libname === 'string' && path.extname(libname) !== Library.EXT) {
    libname += Library.EXT;
  }

  Object.defineProperty(this, 'lib', {
    configurable: true,
    value: new DynamicLibrary(libname)
  });

  Object.keys(Object(functions)).forEach(function(name){
    this.addFunction(name, functions[name][0], functions[name][1], functions[name][2]);
  }, this);
}

Library.prototype.addFunction = function addFunction(name, returnType, options, params){
  if (!params) {
    params = options;
    options = {};
  }
  params = Object(params);
  var paramNames = Object.keys(params),
      paramTypes = paramNames.map(function(k){ return params[k] }),
      fnPtr = this.lib.get(name);

  if (!(fnPtr instanceof Buffer) || fnPtr.isNull()) {
    throw new Error('Library: "' + this.name + '" returned NULL function pointer for "' + name + '"')
  }

  if (options.varargs) {
    this[name] = new VariadicForeignFunction(fnPtr, returnType, paramTypes, options.abi);
  } else {
    var ff = new ForeignFunction(fnPtr, returnType, paramTypes, options.abi);
    this[name] = options.async ? ff.async : ff;
  }
  return this[name];
};


Library.EXT = {
  linux   :'.so',
  linux2  :'.so',
  sunos   :'.so',
  solaris :'.so',
  darwin  :'.dylib',
  mac     :'.dylib',
  win32   :'.dll'
}[process.platform];
