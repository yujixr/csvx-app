(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2060:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var r=t(9008),a=t(7294);function u(e,n,t,r,a,u,i){try{var o=e[u](i),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){u(i,r,a,o,s,"next",e)}function s(e){u(i,r,a,o,s,"throw",e)}o(void 0)}))}}var o,s=t(809),c=t.n(s),l=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});l.decode();var d=null;function f(){return null!==d&&d.buffer===o.memory.buffer||(d=new Uint8Array(o.memory.buffer)),d}function p(e,n){return l.decode(f().subarray(e,e+n))}var _=new Array(32).fill(void 0);_.push(void 0,null,!0,!1);var b=_.length;function m(e){b===_.length&&_.push(_.length+1);var n=b;return b=_[n],_[n]=e,n}function h(e){var n=function(e){return _[e]}(e);return function(e){e<36||(_[e]=b,b=e)}(e),n}function v(){return o.get_x_size()>>>0}function w(){return o.get_y_size()>>>0}var g=null;function x(){return null!==g&&g.buffer===o.memory.buffer||(g=new Int32Array(o.memory.buffer)),g}function y(e,n){try{var t=o.__wbindgen_add_to_stack_pointer(-16);o.get_calculated_item(t,e,n);var r=x()[t/4+0],a=x()[t/4+1];return p(r,a)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(r,a)}}var j=0,k=new TextEncoder("utf-8"),N="function"===typeof k.encodeInto?function(e,n){return k.encodeInto(e,n)}:function(e,n){var t=k.encode(e);return n.set(t),{read:e.length,written:t.length}};function C(e,n,t){var r=function(e,n,t){if(void 0===t){var r=k.encode(e),a=n(r.length);return f().subarray(a,a+r.length).set(r),j=r.length,a}for(var u=e.length,i=n(u),o=f(),s=0;s<u;s++){var c=e.charCodeAt(s);if(c>127)break;o[i+s]=c}if(s!==u){0!==s&&(e=e.slice(s)),i=t(i,u,u=s+3*e.length);var l=f().subarray(i+s,i+u);s+=N(e,l).written}return j=s,i}(t,o.__wbindgen_malloc,o.__wbindgen_realloc),a=j;return h(o.update_item(e,n,r,a))}function R(){try{var e=o.__wbindgen_add_to_stack_pointer(-16);o.export_raw_table(e);var n=x()[e/4+0],t=x()[e/4+1];return p(n,t)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(n,t)}}function E(){try{var e=o.__wbindgen_add_to_stack_pointer(-16);o.export_calculated_table(e);var n=x()[e/4+0],t=x()[e/4+1];return p(n,t)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(n,t)}}function S(e,n){return A.apply(this,arguments)}function A(){return(A=i(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("function"===typeof Response&&n instanceof Response)){e.next=23;break}if("function"!==typeof WebAssembly.instantiateStreaming){e.next=15;break}return e.prev=2,e.next=5,WebAssembly.instantiateStreaming(n,t);case 5:return e.abrupt("return",e.sent);case 8:if(e.prev=8,e.t0=e.catch(2),"application/wasm"==n.headers.get("Content-Type")){e.next=14;break}console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e.t0),e.next=15;break;case 14:throw e.t0;case 15:return e.next=17,n.arrayBuffer();case 17:return r=e.sent,e.next=20,WebAssembly.instantiate(r,t);case 20:return e.abrupt("return",e.sent);case 23:return e.next=25,WebAssembly.instantiate(n,t);case 25:if(!((a=e.sent)instanceof WebAssembly.Instance)){e.next=30;break}return e.abrupt("return",{instance:a,module:n});case 30:return e.abrupt("return",a);case 31:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function I(e){return U.apply(this,arguments)}function U(){return(U=i(c().mark((function e(n){var r,a,u,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"undefined"===typeof n&&(n=new URL(t(3439),t.b)),(r={}).wbg={},r.wbg.__wbindgen_string_new=function(e,n){return m(p(e,n))},r.wbg.__wbindgen_rethrow=function(e){throw h(e)},("string"===typeof n||"function"===typeof Request&&n instanceof Request||"function"===typeof URL&&n instanceof URL)&&(n=fetch(n)),e.t0=S,e.next=9,n;case 9:return e.t1=e.sent,e.t2=r,e.next=13,(0,e.t0)(e.t1,e.t2);case 13:return a=e.sent,u=a.instance,i=a.module,o=u.exports,I.__wbindgen_wasm_module=i,e.abrupt("return",o);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=I,W=t(5893);function O(e,n){for(var t=[],r=0;r<n;r++){for(var a=[],u=0;u<e;u++)a.push(y(u,r));t.push(a)}return t}var P=function(){var e=(0,a.useState)(!1),n=e[0],t=e[1],u=(0,a.useState)(0),i=u[0],s=u[1],c=(0,a.useState)(0),l=c[0],d=c[1],f=(0,a.useState)([]),_=f[0],b=f[1],m=(0,a.useState)(0),g=m[0],y=m[1],j=(0,a.useState)(0),k=j[0],N=j[1],S=(0,a.useState)(""),A=S[0],I=S[1],U=(0,a.useState)(!1),P=U[0],T=U[1],B=(0,a.useState)(""),X=B[0],M=B[1],V=(0,a.useState)(0),q=V[0],z=V[1];return(0,a.useEffect)((function(){n&&I(function(e,n){try{var t=o.__wbindgen_add_to_stack_pointer(-16);o.get_raw_item(t,e,n);var r=x()[t/4+0],a=x()[t/4+1];return p(r,a)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(r,a)}}(g,k))}),[g,k,_]),(0,a.useEffect)((function(){T(n&&0<=g&&g<i&&0<=k&&k<l)}),[_,g,k,i,l]),(0,a.useEffect)((function(){L("/csvx.wasm").then((function(e){e,t(!0),s(v()),d(w())}))}),[]),(0,a.useEffect)((function(){b(O(i,l))}),[i,l]),(0,a.useEffect)((function(){0!=_.length&&0!=_[0].length&&0<=g&&g<i&&0<=k&&k<l&&(C(g,k,A),b(O(i,l)))}),[A]),(0,W.jsxs)("div",{children:[(0,W.jsx)(r.default,{children:(0,W.jsx)("title",{children:"Home | CSVX"})}),(0,W.jsx)("div",{className:"pure-form pure-g",children:(0,W.jsxs)("fieldset",{children:[(0,W.jsx)("legend",{className:"pure-u-1",children:"Edit"}),(0,W.jsx)("input",{value:g,onChange:function(e){y(Number.parseInt(e.target.value))},type:"number",min:"0",placeholder:"x",className:"pure-u-1-12"}),(0,W.jsx)("input",{value:k,onChange:function(e){N(Number.parseInt(e.target.value))},type:"number",min:"0",placeholder:"y",className:"pure-u-1-12"}),(0,W.jsx)("input",{value:A,onChange:function(e){I(e.target.value)},type:"text",placeholder:"value or formula",className:"pure-u-5-6",disabled:!P})]})}),(0,W.jsx)("div",{className:"pure-form pure-g",children:(0,W.jsxs)("fieldset",{children:[(0,W.jsx)("legend",{className:"pure-u-1",children:"Insert / Remove"}),(0,W.jsxs)("select",{value:X,onChange:function(e){return M(e.target.value)},className:"pure-u-1-4",children:[(0,W.jsx)("option",{disabled:!0,value:"",children:"Please Select"}),(0,W.jsx)("option",{children:"Row"}),(0,W.jsx)("option",{children:"Column"})]}),(0,W.jsx)("input",{value:q,onChange:function(e){return z(Number.parseInt(e.target.value))},type:"number",min:"0",placeholder:"position",className:"pure-u-1-4"}),(0,W.jsxs)("div",{className:"pure-button-group pure-u-1-2",role:"group",children:[(0,W.jsx)("button",{className:"pure-button",disabled:""===X||q<0||("Row"===X?l:i)<q,onClick:function(){var e,n;"Row"==X?(n=q,h(o.insert_y(n)),d(w())):(e=q,h(o.insert_x(e)),s(v()))},children:"Insert"}),(0,W.jsx)("button",{className:"pure-button",disabled:""===X||q<0||("Row"===X?l:i)<=q||1==("Row"===X?l:i),onClick:function(){var e,n;"Row"==X?(n=q,h(o.remove_y(n)),d(w())):(e=q,h(o.remove_x(e)),s(v()))},children:"Remove"})]}),""!==X&&(0,W.jsxs)("p",{className:"pure-u-1",children:["Insert / Remove a ",X," at ",q]})]})}),(0,W.jsx)("div",{className:"pure-form",children:(0,W.jsxs)("fieldset",{children:[(0,W.jsx)("legend",{children:"Export"}),(0,W.jsxs)("div",{className:"pure-button-group",role:"group",children:[(0,W.jsx)("button",{className:"pure-button",disabled:!n,onClick:function(){var e,n=new Blob([R()]),t=URL.createObjectURL(n),r=document.createElement("a");r.href=t,r.setAttribute("download","export.csvx"),document.body.appendChild(r),r.click(),null===(e=r.parentNode)||void 0===e||e.removeChild(r)},children:"Export as CSVX"}),(0,W.jsx)("button",{className:"pure-button",disabled:!n,onClick:function(){var e,n=new Blob([E()]),t=URL.createObjectURL(n),r=document.createElement("a");r.href=t,r.setAttribute("download","export.csv"),document.body.appendChild(r),r.click(),null===(e=r.parentNode)||void 0===e||e.removeChild(r)},children:"Export as rendered CSV"})]})]})}),(0,W.jsx)("table",{className:"pure-table pure-table-bordered",children:(0,W.jsx)("tbody",{children:_.map((function(e,n){return(0,W.jsx)("tr",{children:e.map((function(e,t){return(0,W.jsx)("td",{title:"("+t+","+n+")",onClick:function(){y(t),N(n),"Row"===X?z(n):"Column"===X&&z(t)},children:e},t)}))},n)}))})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2060)}])},3439:function(e,n,t){"use strict";e.exports=t.p+"560bf37e482a42db36e4.wasm"}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);