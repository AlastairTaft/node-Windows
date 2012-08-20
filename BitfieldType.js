var bindings = require('./api'),
    decorate = require('./utils').decorate;

var reuseDesc =  { configurable: true,
                   enumerable: true,
                   writable: true }

var hasOwnProperty = {}.hasOwnProperty;

module.exports = BitfieldType;

function BitfieldType(opts){
  var fields = opts.fields,
      set = opts.set,
      get = opts.get;

  function Bitfield(target){
    return Proxy.create(new BitfieldHandler(target, this), Bitfield.prototype);
  }

  Bitfield.prototype = this;



  function getter(o, k){
    var now = Date.now();
    if (!o._timestamp || now - o._timestamp > opts.cooldown) {
      o._timestamp = now;
      o._value = get(o._target);
    }
    return (fields[k] & o._value) > 0;
  }

  function setter(o, k, v){
    o._timestamp = Date.now();
    o._value = get(o._target);
    v ? (o._value |= fields[k]) : (o._value &= ~fields[k]);
    set(o._target, o._value);
  }

  function lister(o, showFalse){
    if (showFalse !== false) {
      return list;
    } else {
      var val = get(o._target);
      return list.filter(function(key){
        return (fields[key] & val) > 0;
      });
    }
  }

  var list = Object.keys(fields).sort();


  function BitfieldHandler(target, facade){
    this._target = target;
    this._value = get(target);
    this._timestamp = Date.now();
    this.facade = facade;
  }

  decorate(BitfieldHandler.prototype, [
    function getOwnPropertyNames(){
      return lister(this).concat(Object.getOwnPropertyNames(this.facade));
    },
    function keys(){
      return lister(this, false).concat(Object.keys(this.facade));
    },
    function enumerate(){
      var i=0, k=[];
      for (k[i++] in this.facade);
      return lister(this, false).concat(k);
    },
    function has(key){
      return hasOwnProperty.call(fields, key) || hasOwnProperty.call(this.facade, key) || key in this.facade;
    },
    function hasOwn(key){
      return hasOwnProperty.call(fields, key) || hasOwnProperty.call(this.facade, key);
    },
    function get(rcvr, key){
      return hasOwnProperty.call(fields, key) ? getter(this, key) : this.facade[key];
    },
    function set(rcvr, key, val){
      hasOwnProperty.call(fields, key) ? setter(this, key, val) : (this.facade[key] = val)
    },
    function delet\u0065(key){
      setter(this, key, false);
    },
    function getOwnPropertyDescriptor(key){
      if (hasOwnProperty.call(fields, key)) {
        reuseDesc.enumerable = reuseDesc.value = getter(this, key);
        return reuseDesc;
      } else {
        var desc = Object.getOwnPropertyDescriptor(this.facade, key);
        desc && (desc.configurable = true);
        return desc;
      }
    },
    function defineProperty(key, desc){
      if ('value' in desc && hasOwnProperty.call(fields, key)) {
        setter(this, key, desc.value);
      } else {
        Object.defineProperty(this.facade, key, desc);
      }
    }
  ]);

  return Bitfield;
}

decorate(BitfieldType.prototype, [
  function toJSON(){
    var out = {};
    Object.keys(this).forEach(function(key){
      out[key] = this[key];
    }, this);
    return out;
  }
]);
