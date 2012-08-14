var bindings = require('./bindings'),
    HKEY = bindings('HKEY');

var HKEYS = {};

function canonicalHkey(name, address){
  var hkey = new Buffer(4);
  hkey.writeUInt64LE(address);
  hkey.type = HKEY;
  hkey.name = name;
  return HKEYS[name] = hkey;
}

var HKCR = canonicalHkey('HKEY_CLASSES_ROOT', 0x80000000),
    HKCU = canonicalHkey('HKEY_CURRENT_USER', 0x80000001),
    HKLM = canonicalHkey('HKEY_LOCAL_MACHINE', 0x80000002),
    HKU  = canonicalHkey('HKEY_USERS', 0x80000003),
    HKCC = canonicalHkey('HKEY_CURRENT_CONFIG', 0x80000005);

console.log(HKEYS);
