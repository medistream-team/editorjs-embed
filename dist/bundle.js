!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Embed=t():e.Embed=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=24)}([function(e,t,r){var n=r(15),o=r(16),i=r(5),a=r(17);e.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(19)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){var n=r(6);function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(4);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(1).default,o=r(18);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(12),o=r(13),i=r(5),a=r(14);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(6);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function l(e){r(a,o,i,l,c,"next",e)}function c(e){r(a,o,i,l,c,"throw",e)}l(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(e,t,r){var n,o,i,a,l;function c(){var s=Date.now()-a;s<t&&s>=0?n=setTimeout(c,t-s):(n=null,r||(l=e.apply(i,o),i=o=null))}null==t&&(t=100);var s=function(){i=this,o=arguments,a=Date.now();var s=r&&!n;return n||(n=setTimeout(c,t)),s&&(l=e.apply(i,o),i=o=null),l};return s.clear=function(){n&&(clearTimeout(n),n=null)},s.flush=function(){n&&(l=e.apply(i,o),i=o=null,clearTimeout(n),n=null)},s}r.debounce=r,e.exports=r},function(e,t,r){var n=r(4);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(1).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(1).default;function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),l=new C(n||[]);return a(i,"_invoke",{value:j(e,r,l)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=p;var h={};function m(){}function b(){}function v(){}var y={};d(y,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(L([])));x&&x!==r&&i.call(x,c)&&(y=x);var w=v.prototype=m.prototype=Object.create(y);function _(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){var r;a(this,"_invoke",{value:function(o,a){function l(){return new t((function(r,l){!function r(o,a,l,c){var s=f(e[o],e,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==n(d)&&i.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):t.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return r("throw",e,l,c)}))}c(s.arg)}(o,a,r,l)}))}return r=r?r.then(l,l):l()}})}function j(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=O(a,r);if(l){if(l===h)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:M}}function M(){return{value:void 0,done:!0}}return b.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:b,configurable:!0}),b.displayName=d(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,d(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},_(S.prototype),d(S.prototype,s,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(p(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(w),d(w,u,"Generator"),d(w,c,(function(){return this})),d(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(21),o=r(22);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},function(e,t,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function l(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],s=r[c]||0,u="".concat(c," ").concat(s);r[c]=s+1;var d=l(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:b(p,t),references:1}),n.push(u)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,m=0;function b(e,t){var r,n,o;if(t.singleton){var i=m++;r=h||(h=s(t)),n=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=s(t),n=f.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=l(r[n]);a[o].references--}for(var i=c(e,t),s=0;s<r.length;s++){var u=l(r[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=i}}}},function(e,t,r){(t=r(23)(!1)).push([e.i,".embed-tool--loading .embed-tool__caption {\n      display: none;\n    }\n\n    .embed-tool--loading .embed-tool__preloader {\n      display: block;\n    }\n\n    .embed-tool--loading .embed-tool__content {\n      display: none;\n    }\n  .embed-tool__preloader {\n    display: none;\n    position: relative;\n    height: 200px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: 1px solid #e6e9eb;\n  }\n  .embed-tool__preloader::before {\n      content: '';\n      position: absolute;\n      z-index: 3;\n      left: 50%;\n      top: 50%;\n      width: 30px;\n      height: 30px;\n      margin-top: -25px;\n      margin-left: -15px;\n      border-radius: 50%;\n      border: 2px solid #cdd1e0;\n      border-top-color: #388ae5;\n      box-sizing: border-box;\n      animation: embed-preloader-spin 2s infinite linear;\n    }\n  .embed-tool__url {\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    max-width: 250px;\n    color: #7b7e89;\n    font-size: 11px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .embed-tool__content {\n    margin-top: 7px;\n  }\n  .embed-tool__caption {\n    margin-top: 7px;\n    text-align: center;\n  }\n  .embed-tool__caption[contentEditable=true][data-placeholder]::before{\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      opacity: 0;\n    }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty::before {\n         opacity: 1;\n      }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n        opacity: 0;\n      }\n  .embed-tool__img {\n    min-width: 104px;\n    max-width: 104px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n  }\n  .embed-tool__flex {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n@keyframes embed-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""]),e.exports=t},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}var a,l,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var n=r(1),o=r.n(n),i=r(7),a=r.n(i),l=r(0),c=r.n(l),s=r(8),u=r.n(s),d=r(2),p=r.n(d),f=r(9),h=r.n(f),m=r(10),b=r.n(m),v=r(3),y=r.n(v),g={vimeo:{regex:/(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,embedUrl:"https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",html:'<iframe style="width:100%; aspect-ratio: 16 / 9;" frameborder="0"></iframe>'},youtube:{regex:/(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,embedUrl:"https://www.youtube.com/embed/<%= remote_id %>",html:'<iframe style="width:100%; aspect-ratio: 16 / 9;" frameborder="0" allowfullscreen></iframe>',id:function(e){var t=c()(e,2),r=t[0],n=t[1];if(!n&&r)return r;var o={start:"start",end:"end",t:"start",time_continue:"start",list:"list"};return n=n.slice(1).split("&").map((function(e){var t=e.split("="),n=c()(t,2),i=n[0],a=n[1];return r||"v"!==i?o[i]?"LL"===a||a.startsWith("RDMM")||a.startsWith("FL")?null:"".concat(o[i],"=").concat(a):null:(r=a,null)})).filter((function(e){return!!e})),r+"?"+n.join("&")}},coub:{regex:/https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,embedUrl:"https://coub.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},vine:{regex:/https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,embedUrl:"https://vine.co/v/<%= remote_id %>/embed/simple/",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},imgur:{regex:/https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,embedUrl:"http://imgur.com/<%= remote_id %>/embed",html:'<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',height:500,width:540},gfycat:{regex:/https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,embedUrl:"https://gfycat.com/ifr/<%= remote_id %>",html:"<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",height:436,width:580},"twitch-channel":{regex:/https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,embedUrl:"https://player.twitch.tv/?channel=<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"twitch-video":{regex:/https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,embedUrl:"https://player.twitch.tv/?video=v<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"yandex-music-album":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,embedUrl:"https://music.yandex.ru/iframe/#album/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',height:400,width:540},"yandex-music-track":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#track/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',height:100,width:540,id:function(e){return e.join("/")}},"yandex-music-playlist":{regex:/https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',height:400,width:540,id:function(e){return e.join("/")}},codepen:{regex:/https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,embedUrl:"https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",html:"<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",height:300,width:600,id:function(e){return e.join("/embed/")}},instagram:{regex:/https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,embedUrl:"https://www.instagram.com/p/<%= remote_id %>/embed",html:'<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>'},twitter:{regex:/^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+?.*)?$/,embedUrl:"https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",html:'<iframe width="550" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',id:function(e){return e.join("/status/")}},pinterest:{regex:/https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,embedUrl:"https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",html:"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",id:function(e){return e[1]}},facebook:{regex:/https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,embedUrl:"https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",html:"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; height: 100%;'></iframe>",id:function(e){return e.join("/")}},aparat:{regex:/(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,embedUrl:"https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",html:'<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600},miro:{regex:/https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,embedUrl:"https://miro.com/app/live-embed/<%= remote_id %>",html:'<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'}},x=(r(20),r(11));function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=function(){function e(t){var r=t.data,n=t.api,o=t.readOnly;b()(this,e),this.api=n,this._data={},this.element=null,this.readOnly=o,this.data=r}var t;return y()(e,null,[{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>',title:"Embed"}}},{key:"enableLineBreaks",get:function(){return!0}}]),y()(e,[{key:"render",value:function(){var e=this,t=this.data,r=t.service,n=t.source,o=t.caption,i=r?this._createElement("div",[this.CSS.baseClass,this.CSS.container,this.CSS.containerLoading]):this._createElement("div",this.CSS.baseClass),a=this._createForm(n);if(a.addEventListener("paste",(function(t){var r=(t.clipboardData||window.clipboardData).getData("text");e._checkedUrl(r)})),a.addEventListener("submit",(function(t){t.preventDefault();var r=t.target[0].value;e._checkedUrl(r)})),i.appendChild(a),r){var l=this.createPreloader(n),c=this._createInput({disabled:this.readOnly,value:o||"",placeholder:"Enter a caption",classList:[this.CSS.input,this.CSS.caption]});if(i.appendChild(l),"etc"!==r){var s=this._getEmbedData(r,n),u=s.html,d=s.embed,p=this._createElement("template");p.innerHTML=u,p.content.firstChild.setAttribute("src",d),p.content.firstChild.classList.add(this.CSS.content),this.embedIsReady(i).then((function(){return i.classList.remove(e.CSS.containerLoading)})),i.appendChild(p.content.firstChild),i.appendChild(c)}"etc"===r&&this._getOgData(n).then((function(t){var r=t.title,n=t.description,o=t.imageUrl,a=t.url,l=t.icon,s=e._createOgCard(r,n,o,a,l);i.classList.remove(e.CSS.containerLoading),i.appendChild(s),i.appendChild(c)})).catch((function(e){l.firstChild.textContent=e}))}return this.element=i,i}},{key:"_getEmbedData",value:function(t,r){var n=e.services[t],o=n.html,i=n.regex,a=n.embedUrl,l=n.id,c=void 0===l?function(e){return e.shift()}:l,s=i.exec(r).slice(1),u=a.replace(/<%= remote_id %>/g,c(s));return this.data.embed=u,{html:o,embed:u}}},{key:"_getOgData",value:(t=h()(p.a.mark((function e(t){var r,n,o,i,a,l,c,s,u,d,f,h;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=encodeURI(t),e.next=3,fetch("https://public-api.medistream.co.kr/og/?url="+r);case 3:if(200===(n=e.sent).status){e.next=6;break}return e.abrupt("return",Promise.reject("잘못된 URL입니다."));case 6:return e.next=8,n.json();case 8:return o=e.sent,i=o.ogTitle,a=o.ogDescription,l=o.ogImage,c=o.ogUrl,s=o.twitterTitle,u=o.twitterDescription,d=o.twitterImage,f=o.requestUrl,h=o.favicon,e.abrupt("return",{title:i||s||"",description:a||u||"",imageUrl:(null==l?void 0:l.url)||(null==d?void 0:d.url)||"",url:c||f||"",icon:h||""});case 19:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"_checkedUrl",value:function(t){var r="",n=_({},e.patterns,{etc:/(?:http[s]?:\/\/)|(?:www\.)([a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~:]+)/});Object.entries(n).some((function(e){var n=c()(e,2),o=n[0];return!!n[1].test(t)&&(r=o,!0)})),this.data={service:r,source:t}}},{key:"_createElement",value:function(e,t,r){var n,o=document.createElement(e);Array.isArray(t)?(n=o.classList).add.apply(n,a()(t)):"string"==typeof t&&o.classList.add(t);return r&&Object.entries(r).forEach((function(e){var t=c()(e,2),r=t[0],n=t[1];r&&(o[r]=n)})),o}},{key:"_createInput",value:function(e){var t=e.disabled,r=e.placeholder,n=e.value,o=e.classList,i=void 0===o?[]:o,a=this._createElement("input",i);return a.setAttribute("placeholder",r),a.setAttribute("value",n),t?a.setAttribute("disabled",!0):a.removeAttribute("disabled"),a}},{key:"_createForm",value:function(e){var t=this._createElement("form",[this.CSS.input,this.CSS.flex]),r=this._createInput({disabled:this.readOnly,value:e||"",placeholder:"URL을 입력하세요."}),n=this._createElement("button");return n.innerText="완료",n.setAttribute("type","submit"),this.readOnly?n.setAttribute("disabled",!0):n.removeAttribute("disabled"),t.appendChild(r),t.appendChild(n),t}},{key:"createPreloader",value:function(e){var t=this._createElement("preloader",this.CSS.preloader),r=this._createElement("div",this.CSS.url);return r.textContent=e,t.appendChild(r),t}},{key:"_createOgCard",value:function(e,t,r,n,o){var i=this._createElement("div",[],{style:"display: flex; background-color: var(--ds-surface-raised, white); border-radius: 1.5px; border: 2px solid transparent; -webkit-box-pack: justify; justify-content: space-between; overflow: hidden; box-shadow: var(--ds-shadow-raised, 0 1px 1px rgba(9, 30, 66, 0.25), 0 0 1px 1px rgba(9, 30, 66, 0.13));"}),a=this._createElement("div",[],{style:"padding: 16px"}),l=this._createElement("a",[],{href:n,style:"display: flex; align-item: flex-start;"}),c=this._createElement("span",[],{innerText:e,style:"font-size: 14px; font-weight: 500; line-height: 20px; display: -webkit-box; overflow: hidden; text-overflow: ellipsis; word-break: break-word; -webkit-line-clamp: 2; -webkit-box-orient: vertical; color: inherit; max-height: 48px;"}),s=s&&this._createElement("img",[],{src:o,style:"width: 16px; height: 16px; margin-right: 8px;"}),u=this._createElement("span",[],{innerText:t,style:"font-size: 12px; line-height: 20px; font-weight: normal; margin-top: 4px; display: -webkit-box; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 2; -webkit-box-orient: vertical; word-break: break-word; max-height: 40px; white-space: pre-line;"}),d=this._createElement("img",this.CSS.img,{src:r});return s&&l.appendChild(s),l.appendChild(c),a.appendChild(l),a.appendChild(u),i.appendChild(a),i.appendChild(d),i}},{key:"save",value:function(){return this.data}},{key:"embedIsReady",value:function(e){var t=null;return new Promise((function(r,n){(t=new MutationObserver(Object(x.debounce)(r,450))).observe(e,{childList:!0,subtree:!0})})).then((function(){t.disconnect()}))}},{key:"data",set:function(e){if(!(e instanceof Object))throw Error("Embed Tool data should be object");this._data=_({},e,{caption:e.caption||this.data.caption||""});var t=this.element;t&&t.parentNode.replaceChild(this.render(),t)},get:function(){if(this.element){var e=this.element.querySelector(".embed-tool__caption");this._data.caption=e?e.value:""}return this._data}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,input:this.api.styles.input,container:"embed-tool",containerLoading:"embed-tool--loading",preloader:"embed-tool__preloader",caption:"embed-tool__caption",url:"embed-tool__url",content:"embed-tool__content",img:"embed-tool__img",flex:"embed-tool__flex"}}}],[{key:"prepare",value:function(t){var r=t.config,n=(void 0===r?{}:r).services,i=void 0===n?{}:n,a=Object.entries(g),l=Object.entries(i).filter((function(e){var t=c()(e,2),r=(t[0],t[1]);return"boolean"==typeof r&&!0===r})).map((function(e){return c()(e,1)[0]})),s=Object.entries(i).filter((function(e){var t=c()(e,2),r=(t[0],t[1]);return"object"===o()(r)})).filter((function(t){var r=c()(t,2),n=(r[0],r[1]);return e.checkServiceConfig(n)})).map((function(e){var t=c()(e,2),r=t[0],n=t[1];return[r,{regex:n.regex,embedUrl:n.embedUrl,html:n.html,id:n.id}]}));l.length&&(a=a.filter((function(e){var t=c()(e,1)[0];return l.includes(t)}))),a=a.concat(s),e.services=a.reduce((function(e,t){var r=c()(t,2),n=r[0],o=r[1];return n in e?(e[n]=Object.assign({},e[n],o),e):(e[n]=o,e)}),{}),e.patterns=a.reduce((function(e,t){var r=c()(t,2),n=r[0],o=r[1];return e[n]=o.regex,e}),{})}},{key:"checkServiceConfig",value:function(e){var t=e.regex,r=e.embedUrl,n=e.html,o=e.id,i=t&&t instanceof RegExp&&r&&"string"==typeof r&&n&&"string"==typeof n;return i=i&&(void 0===o||o instanceof Function)}},{key:"isReadOnlySupported",get:function(){return!0}}]),e}()}]).default}));