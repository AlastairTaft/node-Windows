var fs = require('fs');
var path = require('path');


module.exports = {
  arrayToObject: arrayToObject,
  lazyProperty: lazyProperty,
  expandPath: expandPath,
  resolveDir: resolveDir,
  q: q
}



var exists = fs.existsSync || path.existsSync;


function q(str){ return '"'+str.replace(/"/g, '\\\"')+'"' }

function arrayToObject(arr, callback){
  return arr.reduce(function(r,s){
    var result = callback(s);
    if (Array.isArray(result)) {
      r[result[0]] = result[1];
    }
    return r;
  }, {})
}

function lazyProperty(obj, name){
  if (Array.isArray(name)) {
    name.forEach(function(prop){
      lazyProperty(obj, prop);
    });
    return obj;
  }
  var hidden = name[0] === '_';
  name = hidden ? name.slice(1) : name;
  Object.defineProperty(obj, name, {
    configurable: true,
    enumerable: !hidden,
    get: function(){},
    set: function(v){ Object.defineProperty(this, name, { value: v, writable: true }) }
  });
}


function expandPath(str){
  Object.keys(process.env).forEach(function(name){
    while (~str.indexOf('%'+name+'%')) {
      str = str.replace('%'+name+'%', process.env[name]);
    }
  });
  return str;
}



function resolveDir(dir){
  var resolved = dir;
  if (!exists(resolved)) {
    if (!exists(resolved = expandPath(dir))) {
      if (!exists(resolved = path.resolve(__dirname, dir))) {
        throw new Error('Path not found: ' + dir);
      }
    }
  }
  return path.dirname(resolved);
}