"use strict";
const JSMasterVersion = "1.2.0";
{
  const f = (k, v) => {
    Array.prototype[k] = v;
    Object.defineProperty(Array.prototype, k, { writable: false, configurable: false, enumerable: false });
  };
  f('setAt', function(i, a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (typeof i != "number") throw new TypeError('index is not a number');
    i = Math.trunc(i);
    i = i < 0 ? this.length+i:i;
    if (i >= 0 && i < this.length) return this[i] = a;
    else throw new Error('IndexError: index out of range');
  });
  f('mean', function(fast) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (fast) return this.deepFlat().reduce((a, b) => a+b)/this.length;
    else return this.deepFlat().reduce((a, b) => {
      if (!isNaN(b)) return a+b;
    })/this.length;
  });
  f('split', function(c) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (isNaN(c)) throw new TypeError('size is not a number');
    const a = [];
    for (let i = 0; i < this.length;) {
      const b = [];
      for (let j = 0; j < c && i < this.length; j++, i++) b[j] = this[i];
      a.push(b);
    }
    return a;
  });
  f('clear', function() {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    this.length = 0;
  });
  f('head', function() {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    for (let i = 0; i < this.length; i++) if (typeof this[i] != "undefined") return this[i];
  });
  f('last', function() {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    for (let i = this.length-1; i >= 0; i--) if (typeof this[i] != "undefined") return this[i];
  });
  f('compact', function() {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.filter(x => x ? true:false);
  });
  f('setCompact', function() {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.compact());
  });
  f('difference', function(...a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.filter(x => {
      for (let i = 0; i < a.length; i++) if (a[i] instanceof Array) if (a[i].includes(x)) return false;
      return true;
    });
  });
  f('setDifference', function(...a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.difference(...a));
  });
  f('intersection', function(...a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.filter(x => {
      for (let i = 0; i < a.length; i++) if (a[i] instanceof Array) if (!a[i].includes(x)) return false;
      return true;
    });
  });
  f('setIntersection', function(...a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.intersection(...a));
  });
  f('union', function(...a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    const b = [];
    a.unshift(this);
    for (let i = 0; i < a.length; i++) if (a[i] instanceof Array) for (let j = 0; j < a[i].length; j++) if (!b.includes(a[i][j])) b.push(a[i][j]);
    return b;
  });
  f('setUnion', function(...a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.uinon(...a));
  });
  f('setDrop', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.drop(a));
  });
  f('drop', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (isNaN(a)) a = 1;
    return this.slice(a);
  });
  f('dropRight', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (isNaN(a)) a = 1;
    return this.slice(0, this.length-a);
  });
  f('setDropRight', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.dropRight(a));
  });
  f('dropWhile', function(f) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (typeof f == "function") {
      for (let i = 0; i < this.length; i++) if (f(this[i], i, this)) return this.slice(i);
      return [];
    } else throw new TypeError('function is not a function');
  });
  f('dropRightWhile', function(f) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (typeof f == "function") {
      for (let i = this.length-1; i >= 0; i--) if (f(this[i], i, this)) return this.slice(0, i+1);
      return [];
    } else throw new TypeError('function is not a function');
  });
  f('setDropRightWhile', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.dropRightWhile(a));
  });
  f('setDropWhile', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.dropWhile(a));
  });
  f('toObject', function(fast) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    const o = {};
    for (let i = 0; i < this.length; i++) {
      const b = this[i];
      if (fast) o[b[0]] = b[1];
      else if (b instanceof Array) o[b[0]] = b[1];
    }
    return o;
  });
  f('setAll', function(...a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    this.clear();
    for (let i = 0; i < a.length; i++) {
      if (a[i] instanceof Array) for (let j = 0; j < a[i].length; j++) b.push(a[i][j]);
      else b.push(a[j]);
    }
    return this;
  });
  f('setDeepFlat', function() {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.deepFlat());
  });
  f('deepFlat', function() {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.flat(Infinity);
  });
  f('pull', function(i, a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    i = Math.trunc(i);
    return this.splice(i < 0 ? this.length+i:i, 1);
  });
  f('take', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (isNaN(a)) a = 1;
    return this.slice(0, a);
  });
  f('takeRight', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (isNaN(a)) a = 1;
    return this.slice(this.length-a, this.length);
  });
  f('setTake', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.take(a));
  });
  f('setTakeRight', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.takeRight(a));
  });
  f('takeWhile', function(f) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (typeof f == "function") {
      for (let i = 0; i < this.length; i++) if (f(this[i], i, this)) return this.slice(0, i);
      return this.slice();
    } else throw new TypeError('function is not a function');
  });
  f('takeRightWhile', function(f) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (typeof f == "function") {
      for (let i = this.length-1; i >= 0; i--) if (f(this[i], i, this)) return this.slice(i+1, this.length);
      return [];
    } else throw new TypeError('function is not a function');
  });
  f('setTakeWhile', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.takeWhile(a));
  });
  f('setTakeRightWhile', function(a) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.takeRightWhile(a));
  });
  f('forEachRight', function(f) {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    if (typeof f == "function") for (let i = this.length-1; i >= 0; i--) f(this[i], i, this);
    else throw new TypeError('function is not a function');
  });
  f('random', function() {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this[Math.floor(Math.random()*this.length)];
  });
  f('shuffle', function() {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    const a = this.slice();
    const b = [];
    while (a.length > 0) {
      const i = Math.floor(Math.random()*a.length);
      b.push(a[i]);
      a.splice(i, 1);
    }
    return b;
  });
  f('setShuffle', function() {
    if (!this instanceof Array) throw new TypeError('this is not an array');
    return this.setAll(this.shuffle());
  });
}
{
  const f = (k, v) => {
    Object.prototype[k] = v;
    Object.defineProperty(Object.prototype, k, { writable: false, configurable: false, enumerable: false });
  };
  f('freeze', function(d) {
    if (typeof this != "object") throw new TypeError('this is not an object');
    d ??= 1;
    let b = 0;
    if (d > 0) {
      for (const key in this) {
        if (typeof this[key] == "object") {
          b++;
          if (d) this[key].freeze(d-1);
        }
      }
    }
    Object.freeze(this);
    return this;
  });
  f('deepFreeze', function() {
    if (typeof this != "object") throw new TypeError('this is not an object');
    return this.freeze(Infinity);
  });
  f('seal', function(d) {
    if (typeof this != "object") throw new TypeError('this is not an object');
    d ??= 1;
    let b = 0;
    if (d > 0) {
      for (const key in this) {
        if (typeof this[key] == "object") {
          b++;
          if (d) this[key].freeze(d-1);
        }
      }
    }
    Object.seal(this);
    return this;
  });
  f('deepSeal', function() {
    if (typeof this != "object") throw new TypeError('this is not an object');
    return this.seal(Infinity);
  });
  f('copy', function(d) {
    if (typeof this != "object") throw new TypeError('this is not an object');
    d ??= 1;
    const o = {};
    if (d > 0) {
      for (const key in this) {
        if (typeof o[key] == "object") {
          if (d) o[key] = this[key].copy(d-1);
        }
        else o[key] = this[key];
      }
    }
    return o;
  });
  f('deepCopy', function() {
    if (typeof this != "object") throw new TypeError('this is not an object');
    return this.copy(Infinity);
  });
  f('at', function(a) {
    if (typeof this != "object") throw new TypeError('this is not an object');
    return this[a];
  });
}
{
  const f = (k, v) => {
    String.prototype[k] = v;
    Object.defineProperty(String.prototype, k, { writable: false, configurable: false, enumerable: false });
    JSMaster.strings[k] = (t, ...a) => v.call(t, ...a);
  };
}