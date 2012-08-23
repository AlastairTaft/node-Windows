module.exports = {
  decorate: decorate,
  inherit: inherit
};

var isArray = Array.isArray,
    defineProperty = Object.defineProperty,
    getOwnDescriptor = Object.getOwnPropertyDescriptor,
    getOwnNames = Object.getOwnPropertyNames,
    getOwnKeys = Object.keys;


function isObject(o){
  return o != null && typeof o === 'object' || typeof o === 'function';
}



function Definable(desc){
  for (var k in desc)
    this[k] = desc[k];
  this.value = null;
}

Definable.prototype.define = function define(o, key, v){
  this.value = v;
  defineProperty(o, key, this);
  this.value = null;
};


var hiddenDesc = { enumerable: false },
    normalVal = Definable.normal = new Definable({ enumerable: true, configurable: true, writable: true }),
    hiddenVal = Definable.hidden = new Definable({ enumerable: false, configurable: true, writable: true }),
    readonlyVal = Definable.readonly = new Definable({ enumerable: true, configurable: true, writable: false });



function decorate(o){
  var a, b, c, d,
      hidden = arguments[1] === true,
      overwrite = arguments[2] !== false;

  for (a=0; a < arguments.length; a++) {
    if (isArray(b = arguments[a])) {
      for (c = 0; c < b.length; c++) {
        if (typeof b[c] === 'function' && (d = b[c].name)) {
          if (hidden || d === 'toString') {
            hiddenVal.define(o, d, b[c]);
          } else {
            o[d] = b[c];
          }
        }
      }
    } else if (isObject(b)) {
      for (c in b) {
        try {
          if (d = getOwnDescriptor(b, c)) {
            if (d.get || d.set) {
              defineProperty(o, c, d);
            } else {
              o[c] = d.value;
              if (hidden || c === 'toString' || c === 'constructor') {
                defineProperty(o, c, hiddenDesc);
              }
            }
          }
        } catch (e) {}
      }
    }
  }
  return o;
}

function inherit(Ctor, Super, props){
  Ctor.prototype = Object.create(Super.prototype);
  decorate(Ctor.prototype, true, props);
  decorate(Ctor.prototype, true, {
    constructor: Ctor
  });
  return Ctor;
}



[Map, WeakMap].forEach(function(Ctor){
  Ctor.createStorage = function createStorage(creator){
    creator = creator || Object.create.bind(null, null, {});
    var map = new Ctor;
    return function storage(o, v){
      if (1 in arguments) {
        map.set(o, v);
      } else {
        v = map.get(o);
        if (v == null) {
          v = creator(o);
          map.set(o, v);
        }
      }
      return v;
    };
  };
});
