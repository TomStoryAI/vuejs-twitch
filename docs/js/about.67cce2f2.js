(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"159b":function(t,e,a){var n=a("da84"),r=a("fdbc"),c=a("17c2"),o=a("9112");for(var s in r){var i=n[s],u=i&&i.prototype;if(u&&u.forEach!==c)try{o(u,"forEach",c)}catch(l){u.forEach=c}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,r=a("a640"),c=a("ae40"),o=r("forEach"),s=c("forEach");t.exports=o&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"25eb":function(t,e,a){var n=a("23e7"),r=a("c20d");n({target:"Number",stat:!0,forced:Number.parseInt!=r},{parseInt:r})},4160:function(t,e,a){"use strict";var n=a("23e7"),r=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"4bf7":function(t,e,a){},"4df4":function(t,e,a){"use strict";var n=a("0366"),r=a("7b0b"),c=a("9bdd"),o=a("e95a"),s=a("50c4"),i=a("8418"),u=a("35a1");t.exports=function(t){var e,a,l,f,v,d,b=r(t),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,T=void 0!==m,C=u(b),g=0;if(T&&(m=n(m,h>2?arguments[2]:void 0,2)),void 0==C||p==Array&&o(C))for(e=s(b.length),a=new p(e);e>g;g++)d=T?m(b[g],g):b[g],i(a,g,d);else for(f=C.call(b),v=f.next,a=new p;!(l=v.call(f)).done;g++)d=T?c(f,m,[l.value,g],!0):l.value,i(a,g,d);return a.length=g,a}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),c="["+r+"]",o=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),i=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:i(1),end:i(2),trim:i(3)}},7156:function(t,e,a){var n=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var c,o;return r&&"function"==typeof(c=e.constructor)&&c!==a&&n(o=c.prototype)&&o!==a.prototype&&r(t,o),t}},8418:function(t,e,a){"use strict";var n=a("c04e"),r=a("9bf2"),c=a("5c6c");t.exports=function(t,e,a){var o=n(e);o in t?r.f(t,o,c(0,a)):t[o]=a}},"8e22":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calculator"},[a("h1",[t._v("VueJS - Twitch Calculator")]),a("TheCalculator")],1)},r=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calculator"},[a("div",{staticClass:"row"},[a("div",{staticClass:"result"},[t._v(t._s(t.message))])]),a("div",{staticClass:"row"},[a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("1")]),a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("2")]),a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("3")])]),a("div",{staticClass:"row"},[a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("4")]),a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("5")]),a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("6")])]),a("div",{staticClass:"row"},[a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("7")]),a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("8")]),a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("9")])]),a("div",{staticClass:"row"},[a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("+")]),a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("0")]),a("button",{staticClass:"column",on:{click:t.addToText}},[t._v("-")])]),a("div",{staticClass:"row"},[a("button",{staticClass:"column",on:{click:t.calcResult}},[t._v("=")])])])},o=[],s=(a("4160"),a("a630"),a("a9e3"),a("25eb"),a("3ca3"),a("159b"),a("d4ec"));function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}var l=a("262e"),f=a("2caf"),v=a("9ab4"),d=a("60a3"),b=function(){var t=function(t){Object(l["a"])(a,t);var e=Object(f["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.message="0",t}return u(a,[{key:"addToText",value:function(t){var e=t.target;this.message+=e.innerText}},{key:"calcResult",value:function(t){var e=[],a=[],n=Array.from(this.message),r="";n.forEach((function(t){"+"==t?(e.push(Number.parseInt(r)),a.push("+"),r=""):"-"==t?(e.push(Number.parseInt(r)),a.push("-"),r=""):r+=t})),e.push(Number.parseInt(r)),console.log(e),console.log(a);while(1!=e.length){console.log(e);var c=e.shift(),o=e.shift(),s=a.shift();"+"==s?e.push(c+o):"-"==s&&e.push(c-o)}console.log(e)}}]),a}(d["c"]);return t=Object(v["a"])([d["a"]],t),t}(),p=b,h=p,m=(a("be8a"),a("2877")),T=Object(m["a"])(h,c,o,!1,null,"1908bd8b",null),C=T.exports,g={name:"Calculator",components:{TheCalculator:C}},_=g,x=Object(m["a"])(_,n,r,!1,null,null,null);e["default"]=x.exports},a630:function(t,e,a){var n=a("23e7"),r=a("4df4"),c=a("1c7e"),o=!c((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:r})},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,a){"use strict";var n=a("83ab"),r=a("da84"),c=a("94ca"),o=a("6eeb"),s=a("5135"),i=a("c6b6"),u=a("7156"),l=a("c04e"),f=a("d039"),v=a("7c73"),d=a("241c").f,b=a("06cf").f,p=a("9bf2").f,h=a("58a8").trim,m="Number",T=r[m],C=T.prototype,g=i(v(C))==m,_=function(t){var e,a,n,r,c,o,s,i,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(c=u.slice(2),o=c.length,s=0;s<o;s++)if(i=c.charCodeAt(s),i<48||i>r)return NaN;return parseInt(c,n)}return+u};if(c(m,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var x,E=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof E&&(g?f((function(){C.valueOf.call(a)})):i(a)!=m)?u(new T(_(e)),a,E):_(e)},I=n?d(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)s(T,x=I[N])&&!s(E,x)&&p(E,x,b(T,x));E.prototype=C,C.constructor=E,o(r,m,E)}},ae40:function(t,e,a){var n=a("83ab"),r=a("d039"),c=a("5135"),o=Object.defineProperty,s={},i=function(t){throw t};t.exports=function(t,e){if(c(s,t))return s[t];e||(e={});var a=[][t],u=!!c(e,"ACCESSORS")&&e.ACCESSORS,l=c(e,0)?e[0]:i,f=c(e,1)?e[1]:void 0;return s[t]=!!a&&!r((function(){if(u&&!n)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:i}):t[1]=1,a.call(t,l,f)}))}},be8a:function(t,e,a){"use strict";var n=a("4bf7"),r=a.n(n);r.a},c20d:function(t,e,a){var n=a("da84"),r=a("58a8").trim,c=a("5899"),o=n.parseInt,s=/^[+-]?0[Xx]/,i=8!==o(c+"08")||22!==o(c+"0x16");t.exports=i?function(t,e){var a=r(String(t));return o(a,e>>>0||(s.test(a)?16:10))}:o},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],c=a("2877"),o={},s=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=about.67cce2f2.js.map