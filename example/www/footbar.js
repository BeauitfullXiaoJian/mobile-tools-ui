!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageServiceController=class{onInit(){}fillView(){}},t.Page=class{constructor(){}static create(e){window.Page=e,window.PageHandle=(()=>{e.onInit()})}static createAndInit(e){window.Page=e,e.onInit()}}},1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0);r(10),n.Page.createAndInit(new class extends n.PageServiceController{onInit(){$("[target='gray-coloful']").click(()=>{$("#gray-colorful").show(),$("#gray-color").hide()}),$("[target='gray-color']").click(()=>{$("#gray-colorful").hide(),$("#gray-color").show()}),$(".bar-item").click(e=>{$(".bar-item").toArray().forEach(e=>{e.classList.remove("active")});const t=e.currentTarget;t.classList.contains("active")||(t.className+=" active")})}fillView(){}})},10:function(e,t){}});