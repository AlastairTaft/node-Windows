module.exports = {
  decorate: decorate,
  inherit: inherit
};

var isArray = Array.isArray,
    _apply = Function.prototype.apply,
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
  decorate(Ctor, true, [
    function createStorage(creator){
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
    }
  ]);
});


decorate(Function, true, [
  function build(name, body, args, scope){
    if (body === undefined) {
      body = name;
      name = 'anonymous';
    }

    body = Array.isArray(body) ? body.join('\n') : body || '';

    if (!Array.isArray(args)) {
      if (isObject(args) && !scope) {
        scope = args;
        args = [];
      } else {
        args = [].concat(args);
      }
    }

    var scopeNames = Object.keys(Object(scope)),
        scopeVals = scopeNames.map(function(key){ return scope[key] });
    scopeNames.push('return function '+name+'('+args.join(', ')+'){\n'+body+'\n}');

    return Function.apply(null, scopeNames).apply(null, scopeVals);
  },
  function create(name, call, construct, proto, descriptors){
    construct = typeof construct === 'function' ? construct : function construct(){
      var instance = Object.create((isObject(func.prototype) ? func : Object).prototype),
          result = _apply.call(call, instance, arguments);
      return isObject(result) ? result : instance;
    };

    var func = Function.build(name, 'return (this instanceof '+name+' ? construct : call).apply(this, arguments)', {
      call: call,
      construct: construct
    });

    if (typeof proto === 'object' || typeof proto === 'function') {
      func.__proto__ = proto;
    }

    if (isObject(descriptors)) {
      Object.defineProperties(func, descriptors);
    }

    return func;
  }
]);

