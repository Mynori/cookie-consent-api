!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CookieConsentApi=t():e.CookieConsentApi=t()}(window,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(t){return e[t]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=2)}([function(e,t,n){var i,r;!function(s){void 0!==(r="function"==typeof(i=s)?i.call(t,n,t,e):i)&&(e.exports=r),e.exports=s()}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}return function t(n){function i(t,r,s){var o;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(s=e({path:"/"},i.defaults,s)).expires){var c=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*s.expires),s.expires=c}s.expires=s.expires?s.expires.toUTCString():"";try{o=JSON.stringify(r),/^[\{\[]/.test(o)&&(r=o)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(r+"").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(t+"")).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var a="";for(var l in s)s[l]&&(a+="; "+l,!0!==s[l])&&(a+="="+s[l]);return document.cookie=t+"="+r+a}t||(o={});for(var u=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,h=0;h<u.length;h++){var p=u[h].split("="),v=p.slice(1).join("=");this.json||'"'!==v.charAt(0)||(v=v.slice(1,-1));try{var d=p[0].replace(f,decodeURIComponent);if(v=n.read?n.read(v,d):n(v,d)||v.replace(f,decodeURIComponent),this.json)try{v=JSON.parse(v)}catch(e){}if(t===d){o=v;break}t||(o[d]=v)}catch(e){}}return o}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(t,n){i(t,"",e(n,{expires:-1}))},i.withConverter=t,i}(function(){})})},function(e){function t(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}function r(e){return void 0===e}e.exports=t,t.EventEmitter=t,t.prototype._events=void 0,t.prototype._maxListeners=void 0,t.defaultMaxListeners=10,t.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},t.prototype.emit=function(e){var t,s,o,c,a,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var u=new Error('Uncaught, unspecified "error" event. ('+t+")");throw u.context=t,u}if(r(s=this._events[e]))return!1;if(n(s))switch(arguments.length){case 1:s.call(this);break;case 2:s.call(this,arguments[1]);break;case 3:s.call(this,arguments[1],arguments[2]);break;default:c=Array.prototype.slice.call(arguments,1),s.apply(this,c)}else if(i(s))for(c=Array.prototype.slice.call(arguments,1),o=(l=s.slice()).length,a=0;a<o;a++)l[a].apply(this,c);return!0},t.prototype.addListener=function(e,s){var o;if(!n(s))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(s.listener)?s.listener:s),this._events[e]?i(this._events[e])?this._events[e].push(s):this._events[e]=[this._events[e],s]:this._events[e]=s,i(this._events[e])&&!this._events[e].warned&&((o=r(this._maxListeners)?t.defaultMaxListeners:this._maxListeners)&&0<o&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},t.prototype.on=t.prototype.addListener,t.prototype.once=function(e,t){function i(){this.removeListener(e,i),r||(r=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var r=!1;return i.listener=t,this.on(e,i),this},t.prototype.removeListener=function(e,t){var r,s,o,c;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(r=this._events[e]).length,s=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(r)){for(c=o;0<c--;)if(r[c]===t||r[c].listener&&r[c].listener===t){s=c;break}if(0>s)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(s,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},t.prototype.removeAllListeners=function(e){var t,i;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n(i=this._events[e]))this.removeListener(e,i);else if(i)for(;i.length;)this.removeListener(e,i[i.length-1]);return delete this._events[e],this},t.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},t.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},t.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),s=n(1),o=n.n(s);t.default=class extends o.a{constructor(e={}){super(),this.conf=Object.assign({},{cookieName:"ccm",cookieDuration:365,cookieDomain:null,services:[]},e),this.validateConf()}init(){this.updateView(),this.emit("init")}reset(){r.a.remove(this.conf.cookieName,{domain:this.conf.cookieDomain}),this.updateView(),this.emit("clear")}acceptAll(){let e={};this.conf.services.forEach(t=>e[t]=!0),this.setCookieServices(e),this.updateView(),this.emit("acceptAll")}accept(e){let t=this.getCookieServices();t[e]=!0,this.setCookieServices(t),this.updateView(),this.emit("accept",e)}refuse(e){let t=this.getCookieServices();t[e]=!1,this.setCookieServices(t),this.updateView(),this.emit("refuse",e)}validateConf(){Array.isArray(this.conf.services)?this.conf.services.forEach(e=>{!1===/^[a-zA-Z0-9]+$/.test(e)&&console.error('CCM: "'+e+'" is not a valid service name, only alphanumeric allowed')}):console.error("CCM: Services is not an array")}getCookieServices(){return r.a.getJSON(this.conf.cookieName)||{}}setCookieServices(e){r.a.set(this.conf.cookieName,e,{duration:this.conf.cookieDuration,domain:this.conf.cookieDomain})}updateView(){const e=this.getCookieServices();this.conf.services.forEach(t=>{const n=document.querySelectorAll('[data-cookie-consent="'+t+'"]');!0===e[t]?n.forEach(e=>{e.getAttribute("data-ccm-fallback")||e.setAttribute("data-ccm-fallback",e.innerHTML);var t=e.innerHTML.match(/<!--if-consent(.*?)endif-->/s);t&&2==t.length&&(e.innerHTML=t[1],this.executeScripts(e))}):n.forEach(e=>{let t=e.getAttribute("data-ccm-fallback");t&&(e.innerHTML=t,this.executeScripts(e))})})}executeScripts(e){e.querySelectorAll("script").forEach(function(t){let n=document.createElement("script");n.innerHTML=t.innerHTML,t.remove(),e.append(n)})}}}]).default});