(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3406)}])},3406:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var r,a=t(5893),u=t(9008),i=t(7294),o=t(5666),s=t.n(o);function c(e,n,t,r,a,u,i){try{var o=e[u](i),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,a)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function i(e){c(u,r,a,i,o,"next",e)}function o(e){c(u,r,a,i,o,"throw",e)}i(void 0)}))}}function d(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var f=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});f.decode();var p=null;function _(){return null!==p&&p.buffer===r.memory.buffer||(p=new Uint8Array(r.memory.buffer)),p}function b(e,n){return f.decode(_().subarray(e,e+n))}var m=new Array(32).fill(void 0);m.push(void 0,null,!0,!1);var h=m.length;function v(e){h===m.length&&m.push(m.length+1);var n=h;return h=m[n],m[n]=e,n}function w(e){var n=function(e){return m[e]}(e);return function(e){e<36||(m[e]=h,h=e)}(e),n}function g(){return r.get_x_size()>>>0}function x(){return r.get_y_size()>>>0}var y=null;function j(){return null!==y&&y.buffer===r.memory.buffer||(y=new Int32Array(r.memory.buffer)),y}function k(e,n){try{var t=r.__wbindgen_add_to_stack_pointer(-16);r.get_calculated_item(t,e,n);var a=j()[t/4+0],u=j()[t/4+1];return b(a,u)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(a,u)}}var N=0,C=new TextEncoder("utf-8"),R="function"===typeof C.encodeInto?function(e,n){return C.encodeInto(e,n)}:function(e,n){var t=C.encode(e);return n.set(t),{read:e.length,written:t.length}};function S(e,n,t){var a=function(e,n,t){if(void 0===t){var r=C.encode(e),a=n(r.length);return _().subarray(a,a+r.length).set(r),N=r.length,a}for(var u=e.length,i=n(u),o=_(),s=0;s<u;s++){var c=e.charCodeAt(s);if(c>127)break;o[i+s]=c}if(s!==u){0!==s&&(e=e.slice(s)),i=t(i,u,u=s+3*e.length);var l=_().subarray(i+s,i+u);s+=R(e,l).written}return N=s,i}(t,r.__wbindgen_malloc,r.__wbindgen_realloc),u=N;return w(r.update_item(e,n,a,u))}function E(){try{var e=r.__wbindgen_add_to_stack_pointer(-16);r.export_raw_table(e);var n=j()[e/4+0],t=j()[e/4+1];return b(n,t)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,t)}}function A(){try{var e=r.__wbindgen_add_to_stack_pointer(-16);r.export_calculated_table(e);var n=j()[e/4+0],t=j()[e/4+1];return b(n,t)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,t)}}function I(){return(I=l(s().mark((function e(n,t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof Response||!d(n,Response)){e.next=23;break}if("function"!==typeof WebAssembly.instantiateStreaming){e.next=15;break}return e.prev=2,e.next=5,WebAssembly.instantiateStreaming(n,t);case 5:return e.abrupt("return",e.sent);case 8:if(e.prev=8,e.t0=e.catch(2),"application/wasm"==n.headers.get("Content-Type")){e.next=14;break}console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e.t0),e.next=15;break;case 14:throw e.t0;case 15:return e.next=17,n.arrayBuffer();case 17:return r=e.sent,e.next=20,WebAssembly.instantiate(r,t);case 20:return e.abrupt("return",e.sent);case 23:return e.next=25,WebAssembly.instantiate(n,t);case 25:if(!d(a=e.sent,WebAssembly.Instance)){e.next=30;break}return e.abrupt("return",{instance:a,module:n});case 30:return e.abrupt("return",a);case 31:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function U(e,n){return I.apply(this,arguments)}function W(){return(W=l(s().mark((function e(n){var a,u,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"undefined"===typeof n&&(n=new t.U(t(3439))),(a={}).wbg={},a.wbg.__wbindgen_string_new=function(e,n){return v(b(e,n))},a.wbg.__wbindgen_rethrow=function(e){throw w(e)},("string"===typeof n||"function"===typeof Request&&d(n,Request)||"function"===typeof URL&&d(n,URL))&&(n=fetch(n)),e.t0=U,e.next=9,n;case 9:return e.t1=e.sent,e.t2=a,e.next=13,(0,e.t0)(e.t1,e.t2);case 13:var o;return o=e.sent,u=o.instance,i=o.module,r=u.exports,L.__wbindgen_wasm_module=i,e.abrupt("return",r);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return W.apply(this,arguments)}var O=L;function P(e,n){for(var t=[],r=0;r<n;r++){for(var a=[],u=0;u<e;u++)a.push(k(u,r));t.push(a)}return t}var T=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],o=(0,i.useState)(0),s=o[0],c=o[1],l=(0,i.useState)(0),d=l[0],f=l[1],p=(0,i.useState)([]),_=p[0],m=p[1],h=(0,i.useState)(0),v=h[0],y=h[1],k=(0,i.useState)(0),N=k[0],C=k[1],R=(0,i.useState)(""),I=R[0],U=R[1],W=(0,i.useState)(!1),L=W[0],T=W[1],B=(0,i.useState)(""),X=B[0],M=B[1],V=(0,i.useState)(0),q=V[0],z=V[1];return(0,i.useEffect)((function(){n&&U(function(e,n){try{var t=r.__wbindgen_add_to_stack_pointer(-16);r.get_raw_item(t,e,n);var a=j()[t/4+0],u=j()[t/4+1];return b(a,u)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(a,u)}}(v,N))}),[v,N,_]),(0,i.useEffect)((function(){T(n&&0<=v&&v<s&&0<=N&&N<d)}),[_,v,N,s,d]),(0,i.useEffect)((function(){O("/csvx.wasm").then((function(e){e,t(!0),c(g()),f(x())}))}),[]),(0,i.useEffect)((function(){m(P(s,d))}),[s,d]),(0,i.useEffect)((function(){0!=_.length&&0!=_[0].length&&0<=v&&v<s&&0<=N&&N<d&&(S(v,N,I),m(P(s,d)))}),[I]),(0,a.jsxs)("div",{children:[(0,a.jsx)(u.default,{children:(0,a.jsx)("title",{children:"Home | CSVX"})}),(0,a.jsx)("div",{className:"pure-form pure-g",children:(0,a.jsxs)("fieldset",{children:[(0,a.jsx)("legend",{className:"pure-u-1",children:"Edit"}),(0,a.jsx)("input",{value:v,onChange:function(e){y(Number.parseInt(e.target.value))},type:"number",min:"0",placeholder:"x",className:"pure-u-1-12"}),(0,a.jsx)("input",{value:N,onChange:function(e){C(Number.parseInt(e.target.value))},type:"number",min:"0",placeholder:"y",className:"pure-u-1-12"}),(0,a.jsx)("input",{value:I,onChange:function(e){U(e.target.value)},type:"text",placeholder:"value or formula",className:"pure-u-5-6",disabled:!L})]})}),(0,a.jsx)("div",{className:"pure-form pure-g",children:(0,a.jsxs)("fieldset",{children:[(0,a.jsx)("legend",{className:"pure-u-1",children:"Insert / Remove"}),(0,a.jsxs)("select",{value:X,onChange:function(e){return M(e.target.value)},className:"pure-u-1-4",children:[(0,a.jsx)("option",{disabled:!0,value:"",children:"Please Select"}),(0,a.jsx)("option",{children:"Row"}),(0,a.jsx)("option",{children:"Column"})]}),(0,a.jsx)("input",{value:q,onChange:function(e){return z(Number.parseInt(e.target.value))},type:"number",min:"0",placeholder:"position",className:"pure-u-1-4"}),(0,a.jsxs)("div",{className:"pure-button-group pure-u-1-2",role:"group",children:[(0,a.jsx)("button",{className:"pure-button",disabled:""===X||q<0||("Row"===X?d:s)<q,onClick:function(){var e,n;"Row"==X?(n=q,w(r.insert_y(n)),f(x())):(e=q,w(r.insert_x(e)),c(g()))},children:"Insert"}),(0,a.jsx)("button",{className:"pure-button",disabled:""===X||q<0||("Row"===X?d:s)<=q||1==("Row"===X?d:s),onClick:function(){var e,n;"Row"==X?(n=q,w(r.remove_y(n)),f(x())):(e=q,w(r.remove_x(e)),c(g()))},children:"Remove"})]}),""!==X&&(0,a.jsxs)("p",{className:"pure-u-1",children:["Insert / Remove a ",X," at ",q]})]})}),(0,a.jsx)("div",{className:"pure-form",children:(0,a.jsxs)("fieldset",{children:[(0,a.jsx)("legend",{children:"Export"}),(0,a.jsxs)("div",{className:"pure-button-group",role:"group",children:[(0,a.jsx)("button",{className:"pure-button",disabled:!n,onClick:function(){var e,n=new Blob([E()]),t=URL.createObjectURL(n),r=document.createElement("a");r.href=t,r.setAttribute("download","export.csvx"),document.body.appendChild(r),r.click(),null===(e=r.parentNode)||void 0===e||e.removeChild(r)},children:"Export as CSVX"}),(0,a.jsx)("button",{className:"pure-button",disabled:!n,onClick:function(){var e,n=new Blob([A()]),t=URL.createObjectURL(n),r=document.createElement("a");r.href=t,r.setAttribute("download","export.csv"),document.body.appendChild(r),r.click(),null===(e=r.parentNode)||void 0===e||e.removeChild(r)},children:"Export as rendered CSV"})]})]})}),(0,a.jsx)("table",{className:"pure-table pure-table-bordered",children:(0,a.jsx)("tbody",{children:_.map((function(e,n){return(0,a.jsx)("tr",{children:e.map((function(e,t){return(0,a.jsx)("td",{title:"("+t+","+n+")",onClick:function(){y(t),C(n),"Row"===X?z(n):"Column"===X&&z(t)},children:e},t)}))},n)}))})})]})}},3439:function(e,n,t){"use strict";e.exports=t.p+"static/media/csvx_app_bg.2cfdc462.wasm"}},function(e){e.O(0,[666,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);