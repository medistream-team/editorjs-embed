!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Embed=t():e.Embed=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=23)}([function(e,t,n){var r=n(15),o=n(16),i=n(4),a=n(17);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},function(e,t,n){e.exports=n(18)},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(3);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){var r=n(12),o=n(13),i=n(4),a=n(14);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){function n(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,l,"next",e)}function l(e){n(a,o,i,c,l,"throw",e)}c(void 0)}))}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t,n){var r,o,i,a,c;function l(){var s=Date.now()-a;s<t&&s>=0?r=setTimeout(l,t-s):(r=null,n||(c=e.apply(i,o),i=o=null))}null==t&&(t=100);var s=function(){i=this,o=arguments,a=Date.now();var s=n&&!r;return r||(r=setTimeout(l,t)),s&&(c=e.apply(i,o),i=o=null),c};return s.clear=function(){r&&(clearTimeout(r),r=null)},s.flush=function(){r&&(c=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},s}n.debounce=n,e.exports=n},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 20q-3.35 0-5.675-2.325Q4 15.35 4 12q0-3.35 2.325-5.675Q8.65 4 12 4q1.725 0 3.3.713 1.575.712 2.7 2.037V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2Q13.625 6 12 6 9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325Q14.75 20 12 20Z"></path></svg>'},function(e,t,n){var r=n(3);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(e,t,n,r){var o=t&&t.prototype instanceof u?t:u,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return C()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=g(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function u(){}function d(){}function h(){}var f={};f[o]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(S([])));m&&m!==t&&n.call(m,o)&&(f=m);var b=h.prototype=u.prototype=Object.create(f);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){!function r(o,i,a,c){var s=l(e[o],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function g(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=b.constructor=h,h.constructor=d,h[a]=d.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},v(y.prototype),y.prototype[i]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new y(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},v(b),b[a]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){var r=n(20),o=n(21);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=c(u),h={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(h)):a.push({identifier:u,updater:b(h,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function b(e,t){var n,r,o;if(t.singleton){var i=m++;n=p||(p=s(t)),r=h.bind(null,n,i,!1),o=h.bind(null,n,i,!0)}else n=s(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=l(e,t),s=0;s<n.length;s++){var u=c(n[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){(t=n(22)(!1)).push([e.i,".embed-tool--loading .embed-tool__caption {\n      display: none;\n    }\n\n    .embed-tool--loading .embed-tool__preloader {\n      display: block;\n    }\n\n    .embed-tool--loading .embed-tool__content {\n      display: none;\n    }\n  .embed-tool__preloader {\n    display: none;\n    position: relative;\n    height: 200px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: 1px solid #e6e9eb;\n  }\n  .embed-tool__preloader::before {\n      content: '';\n      position: absolute;\n      z-index: 3;\n      left: 50%;\n      top: 50%;\n      width: 30px;\n      height: 30px;\n      margin-top: -25px;\n      margin-left: -15px;\n      border-radius: 50%;\n      border: 2px solid #cdd1e0;\n      border-top-color: #388ae5;\n      box-sizing: border-box;\n      animation: embed-preloader-spin 2s infinite linear;\n    }\n  .embed-tool__url {\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    max-width: 250px;\n    color: #7b7e89;\n    font-size: 11px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .embed-tool__content {\n    margin-top: 7px;\n  }\n  .embed-tool__caption {\n    margin-top: 7px;\n    text-align: center;\n  }\n  .embed-tool__caption[contentEditable=true][data-placeholder]::before{\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      opacity: 0;\n    }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty::before {\n         opacity: 1;\n      }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n        opacity: 0;\n      }\n  .embed-tool__reset {\n    padding: 0;\n\n    border: none;\n    outline: none;\n    background: none;\n    box-sizing: border-box;\n  }\n  .embed-tool__card {\n    min-height: 120px;\n    max-height: 120px;\n    display: flex;\n    justify-content: space-between;\n    box-shadow: var(--ds-shadow-raised, 0 1px 1px rgba(9, 30, 66, 0.25), 0 0 1px 1px rgba(9, 30, 66, 0.13));\n  }\n  .embed-tool__card:hover {\n      background-color: #F4F5F7;\n    }\n  .embed-tool__img {\n    min-width: 160px;\n    max-width: 160px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n  }\n  .embed-tool__text {\n    display: -webkit-box;\n    line-height: 20px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    word-break: break-word;\n    white-space: pre-line;\n  }\n  .embed-tool__icon_btn {\n    padding: 2px;\n    cursor: pointer;\n    border-radius: 7px;\n  }\n  .embed-tool__icon_btn:hover {\n      background-color: #F4F5F7;\n    }\n  .embed-tool__icon_btn svg {\n      vertical-align: middle;\n    }\n  .embed-tool__flex_row {\n    display: flex;\n    align-items: center;\n  }\n  .embed-tool__flex_column {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .embed-tool__hov_underline {\n    text-decoration: none;\n  }\n  .embed-tool__hov_underline:hover {\n      text-decoration: underline;\n    }\n\n@keyframes embed-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n(5),o=n.n(r),i=n(6),a=n.n(i),c=n(0),l=n.n(c),s=n(7),u=n.n(s),d=n(1),h=n.n(d),f=n(8),p=n.n(f),m=n(9),b=n.n(m),v=n(2),y=n.n(v),g={vimeo:{regex:/(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,embedUrl:"https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",html:'<iframe style="width:100%; aspect-ratio: 16 / 9;" frameborder="0"></iframe>'},youtube:{regex:/(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,embedUrl:"https://www.youtube.com/embed/<%= remote_id %>",html:'<iframe style="width:100%; aspect-ratio: 16 / 9;" frameborder="0" allowfullscreen></iframe>',id:function(e){var t=l()(e,2),n=t[0],r=t[1];if(!r&&n)return n;var o={start:"start",end:"end",t:"start",time_continue:"start",list:"list"};return r=r.slice(1).split("&").map((function(e){var t=e.split("="),r=l()(t,2),i=r[0],a=r[1];return n||"v"!==i?o[i]?"LL"===a||a.startsWith("RDMM")||a.startsWith("FL")?null:"".concat(o[i],"=").concat(a):null:(n=a,null)})).filter((function(e){return!!e})),n+"?"+r.join("&")}},coub:{regex:/https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,embedUrl:"https://coub.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},vine:{regex:/https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,embedUrl:"https://vine.co/v/<%= remote_id %>/embed/simple/",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},imgur:{regex:/https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,embedUrl:"http://imgur.com/<%= remote_id %>/embed",html:'<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',height:500,width:540},gfycat:{regex:/https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,embedUrl:"https://gfycat.com/ifr/<%= remote_id %>",html:"<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",height:436,width:580},"twitch-channel":{regex:/https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,embedUrl:"https://player.twitch.tv/?channel=<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"twitch-video":{regex:/https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,embedUrl:"https://player.twitch.tv/?video=v<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"yandex-music-album":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,embedUrl:"https://music.yandex.ru/iframe/#album/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',height:400,width:540},"yandex-music-track":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#track/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',height:100,width:540,id:function(e){return e.join("/")}},"yandex-music-playlist":{regex:/https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',height:400,width:540,id:function(e){return e.join("/")}},codepen:{regex:/https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,embedUrl:"https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",html:"<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",height:300,width:600,id:function(e){return e.join("/embed/")}},instagram:{regex:/https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,embedUrl:"https://www.instagram.com/p/<%= remote_id %>/embed",html:'<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>'},twitter:{regex:/^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+?.*)?$/,embedUrl:"https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",html:'<iframe width="550" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',id:function(e){return e.join("/status/")}},pinterest:{regex:/https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,embedUrl:"https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",html:"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",id:function(e){return e[1]}},facebook:{regex:/https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,embedUrl:"https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",html:"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 500px; height: 500px;'></iframe>",id:function(e){return e.join("/")}},aparat:{regex:/(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,embedUrl:"https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",html:'<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600},miro:{regex:/https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,embedUrl:"https://miro.com/app/live-embed/<%= remote_id %>",html:'<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'}},w=(n(19),n(10)),x=n(11),_=n.n(x);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(){function e(t){var n=t.data,r=t.api,o=t.readOnly;b()(this,e),this.api=r,this._data={},this.element=null,this.readOnly=o,this.data=n}var t;return y()(e,null,[{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>',title:"Embed"}}},{key:"enableLineBreaks",get:function(){return!0}}]),y()(e,[{key:"render",value:function(){var e=this,t=this.data,n=t.service,r=t.source,o=t.caption,i=n?this._createElement("div",[this.CSS.baseClass,this.CSS.container,this.CSS.containerLoading]):this._createElement("div",this.CSS.baseClass),a=this._createForm(r);if(a.addEventListener("paste",(function(t){var n=(t.clipboardData||window.clipboardData).getData("text");e._checkedUrl(n)})),a.addEventListener("submit",(function(t){t.preventDefault();var n=t.target[0].value;e._checkedUrl(n)})),i.appendChild(a),n){var c=this.createPreloader(r),l=this._createElement("input",[this.CSS.input,this.CSS.caption],{disabled:this.readOnly,value:o||"",placeholder:"Enter a caption"});if(i.appendChild(c),"etc"!==n){var s=this._getEmbedData(n,r),u=s.html,d=s.embed,h=this._createElement("template");h.innerHTML=u,h.content.firstChild.setAttribute("src",d),h.content.firstChild.classList.add(this.CSS.content),this.embedIsReady(i).then((function(){return i.classList.remove(e.CSS.containerLoading)})),i.appendChild(h.content.firstChild),i.appendChild(l)}"etc"===n&&this._getOgData(r).then((function(t){var n=t.title,r=t.description,o=t.imageUrl,a=t.url,c=t.icon,s=t.siteName,u=e._createOgCard(n,r,o,a,c,s);i.classList.remove(e.CSS.containerLoading),i.appendChild(u),i.appendChild(l)})).catch((function(e){c.firstChild.textContent=e}))}return this.element=i,i}},{key:"_getEmbedData",value:function(t,n){var r=e.services[t],o=r.html,i=r.regex,a=r.embedUrl,c=r.id,l=void 0===c?function(e){return e.shift()}:c,s=i.exec(n).slice(1),u=a.replace(/<%= remote_id %>/g,l(s));return this.data.embed=u,{html:o,embed:u}}},{key:"_getOgData",value:(t=p()(h.a.mark((function e(t){var n,r,o,i,a,c,l,s,u,d,f,p,m,b;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t),e.next=3,fetch("https://public-api.medistream.co.kr/og/?url="+n);case 3:if(200===(r=e.sent).status){e.next=6;break}return e.abrupt("return",Promise.reject("잘못된 URL입니다."));case 6:return e.next=8,r.json();case 8:return o=e.sent,i=o.ogTitle,a=o.ogDescription,c=o.ogImage,l=o.ogUrl,s=o.ogSiteName,u=o.twitterTitle,d=o.twitterDescription,f=o.twitterImage,p=o.twitterSite,m=o.requestUrl,b=o.favicon,e.abrupt("return",{title:i||u||"",description:a||d||"",imageUrl:(null==c?void 0:c.url)||(null==f?void 0:f.url)||"",url:l||m||"",icon:(null==b?void 0:b.includes("https://"))?b:"",siteName:s||p||i||u||""});case 21:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"_checkedUrl",value:function(t){var n="",r=C({},e.patterns,{etc:/(?:http[s]?:\/\/)|(?:www\.)([a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~:]+)/});Object.entries(r).some((function(e){var r=l()(e,2),o=r[0];return!!r[1].test(t)&&(n=o,!0)})),this.data={service:n,source:t}}},{key:"_createElement",value:function(e,t,n){var r,o=document.createElement(e);Array.isArray(t)?(r=o.classList).add.apply(r,a()(t)):"string"==typeof t&&o.classList.add(t);return n&&Object.entries(n).forEach((function(e){var t=l()(e,2),n=t[0],r=t[1];n&&(o[n]=r)})),o}},{key:"_createForm",value:function(e){var t=this._createElement("form",[this.CSS.input,this.CSS.flex_row],{style:"margin-bottom: 7px;"}),n=this._createElement("input",this.CSS.reset,{disabled:this.readOnly,value:e||"",placeholder:"URL을 입력하세요.",style:"width: 100%;"}),r=this._createElement("button",[this.CSS.reset,this.CSS.icon_btn],{disabled:this.readOnly,type:"submit",innerHTML:_.a});return t.appendChild(n),t.appendChild(r),t}},{key:"createPreloader",value:function(e){var t=this._createElement("preloader",this.CSS.preloader),n=this._createElement("div",this.CSS.url,{textContent:e});return t.appendChild(n),t}},{key:"_createOgCard",value:function(e,t,n,r,o,i){var a=this._createElement("a",this.CSS.card,{style:"text-decoration: none;"}),c=this._createElement("div",[this.CSS.flex_column],{style:"padding: 16px;"}),l=this._createElement("div"),s=this._createElement("div",[this.CSS.flex_row],{href:r}),u=this._createElement("span",[this.CSS.text,this.CSS.hov_underline],{innerText:e,style:"font-size: 14px; -webkit-line-clamp: 1;"}),d=this._createElement("img",[],{src:o,style:"width: 16px; height: 16px; margin-right: 8px;"}),h=this._createElement("span",[this.CSS.text],{innerText:t,style:"font-size: 12px; margin-top: 4px;"}),f=this._createElement("div",[this.CSS.flex_row],{style:"font-size: 12px; white-space: normal;"}),p=this._createElement("span",[],{innerText:i}),m=this._createElement("img",[],{src:o,style:"width: 12px; height: 12px; margin-right: 4px;"}),b=this._createElement("img",this.CSS.img,{src:n});return o&&(s.appendChild(d),f.appendChild(m)),s.appendChild(u),f.appendChild(p),l.appendChild(s),l.appendChild(h),c.appendChild(l),c.appendChild(f),a.appendChild(c),a.appendChild(b),a}},{key:"save",value:function(){return this.data}},{key:"embedIsReady",value:function(e){var t=null;return new Promise((function(n,r){(t=new MutationObserver(Object(w.debounce)(n,450))).observe(e,{childList:!0,subtree:!0})})).then((function(){t.disconnect()}))}},{key:"data",set:function(e){if(!(e instanceof Object))throw Error("Embed Tool data should be object");this._data=C({},e,{caption:e.caption||this.data.caption||""});var t=this.element;t&&t.parentNode.replaceChild(this.render(),t)},get:function(){if(this.element){var e=this.element.querySelector(".embed-tool__caption");this._data.caption=e?e.value:""}return this._data}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,input:this.api.styles.input,container:"embed-tool",containerLoading:"embed-tool--loading",preloader:"embed-tool__preloader",caption:"embed-tool__caption",url:"embed-tool__url",content:"embed-tool__content",reset:"embed-tool__reset",img:"embed-tool__img",text:"embed-tool__text",card:"embed-tool__card",icon_btn:"embed-tool__icon_btn",flex_row:"embed-tool__flex_row",flex_column:"embed-tool__flex_column",hov_underline:"embed-tool__hov_underline"}}}],[{key:"prepare",value:function(t){var n=t.config,r=(void 0===n?{}:n).services,i=void 0===r?{}:r,a=Object.entries(g),c=Object.entries(i).filter((function(e){var t=l()(e,2),n=(t[0],t[1]);return"boolean"==typeof n&&!0===n})).map((function(e){return l()(e,1)[0]})),s=Object.entries(i).filter((function(e){var t=l()(e,2),n=(t[0],t[1]);return"object"===o()(n)})).filter((function(t){var n=l()(t,2),r=(n[0],n[1]);return e.checkServiceConfig(r)})).map((function(e){var t=l()(e,2),n=t[0],r=t[1];return[n,{regex:r.regex,embedUrl:r.embedUrl,html:r.html,id:r.id}]}));c.length&&(a=a.filter((function(e){var t=l()(e,1)[0];return c.includes(t)}))),a=a.concat(s),e.services=a.reduce((function(e,t){var n=l()(t,2),r=n[0],o=n[1];return r in e?(e[r]=Object.assign({},e[r],o),e):(e[r]=o,e)}),{}),e.patterns=a.reduce((function(e,t){var n=l()(t,2),r=n[0],o=n[1];return e[r]=o.regex,e}),{})}},{key:"checkServiceConfig",value:function(e){var t=e.regex,n=e.embedUrl,r=e.html,o=e.id,i=t&&t instanceof RegExp&&n&&"string"==typeof n&&r&&"string"==typeof r;return i=i&&(void 0===o||o instanceof Function)}},{key:"isReadOnlySupported",get:function(){return!0}}]),e}()}]).default}));