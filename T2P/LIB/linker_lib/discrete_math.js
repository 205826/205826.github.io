/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function e(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;
return true}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!(null==n||!n.length)&&-1<v(n,t,0)}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function p(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function _(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function v(n,t,r){if(t===t)n:{--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=_(n,d,r);return n}function g(n,t,r,e){
--r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function d(n){return n!==n}function y(n,t){var r=null==n?0:n.length;return r?m(n,t)/r:F}function b(n){return function(t){return null==t?T:t[n]}}function x(n){return function(t){return null==n?T:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function w(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function m(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==T&&(r=r===T?i:r+i)}return r;
}function A(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function E(n,t){return c(t,function(t){return[t,n[t]]})}function k(n){return function(t){return n(t)}}function S(n,t){return c(t,function(t){return n[t]})}function O(n,t){return n.has(t)}function I(n,t){for(var r=-1,e=n.length;++r<e&&-1<v(t,n[r],0););return r}function R(n,t){for(var r=n.length;r--&&-1<v(t,n[r],0););return r}function z(n){return"\\"+Un[n]}function W(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n];
}),r}function B(n,t){return function(r){return n(t(r))}}function L(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function U(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function C(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function D(n){if(Rn.test(n)){for(var t=On.lastIndex=0;On.test(n);)++t;n=t}else n=Qn(n);return n}function M(n){return Rn.test(n)?n.match(On)||[]:n.split("");
}var T,$=1/0,F=NaN,N=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],P=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,q=/(__e\(.*?\)|\b__t\))\+'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(V.source),H=RegExp(K.source),J=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nn=/^\w*$/,tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/[\\^$.*+?()[\]{}|]/g,en=RegExp(rn.source),un=/^\s+|\s+$/g,on=/^\s+/,fn=/\s+$/,cn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,an=/\{\n\/\* \[wrapped with (.+)\] \*/,ln=/,? & /,sn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hn=/\\(\\)?/g,pn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_n=/\w*$/,vn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,dn=/^\[object .+?Constructor\]$/,yn=/^0o[0-7]+$/i,bn=/^(?:0|[1-9]\d*)$/,xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jn=/($^)/,wn=/['\n\r\u2028\u2029\\]/g,mn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",An="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+mn,En="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",kn=RegExp("['\u2019]","g"),Sn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),On=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+En+mn,"g"),In=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",An].join("|"),"g"),Rn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),zn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wn="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Bn={};
Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=true,Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object Boolean]"]=Bn["[object DataView]"]=Bn["[object Date]"]=Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object WeakMap]"]=false;
var Ln={};Ln["[object Arguments]"]=Ln["[object Array]"]=Ln["[object ArrayBuffer]"]=Ln["[object DataView]"]=Ln["[object Boolean]"]=Ln["[object Date]"]=Ln["[object Float32Array]"]=Ln["[object Float64Array]"]=Ln["[object Int8Array]"]=Ln["[object Int16Array]"]=Ln["[object Int32Array]"]=Ln["[object Map]"]=Ln["[object Number]"]=Ln["[object Object]"]=Ln["[object RegExp]"]=Ln["[object Set]"]=Ln["[object String]"]=Ln["[object Symbol]"]=Ln["[object Uint8Array]"]=Ln["[object Uint8ClampedArray]"]=Ln["[object Uint16Array]"]=Ln["[object Uint32Array]"]=true,
Ln["[object Error]"]=Ln["[object Function]"]=Ln["[object WeakMap]"]=false;var Un={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cn=parseFloat,Dn=parseInt,Mn=typeof global=="object"&&global&&global.Object===Object&&global,Tn=typeof self=="object"&&self&&self.Object===Object&&self,$n=Mn||Tn||Function("return this")(),Fn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Nn=Fn&&typeof module=="object"&&module&&!module.nodeType&&module,Pn=Nn&&Nn.exports===Fn,Zn=Pn&&Mn.process,qn=function(){
try{var n=Nn&&Nn.f&&Nn.f("util").types;return n?n:Zn&&Zn.binding&&Zn.binding("util")}catch(n){}}(),Vn=qn&&qn.isArrayBuffer,Kn=qn&&qn.isDate,Gn=qn&&qn.isMap,Hn=qn&&qn.isRegExp,Jn=qn&&qn.isSet,Yn=qn&&qn.isTypedArray,Qn=b("length"),Xn=x({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I",
"\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C",
"\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i",
"\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r",
"\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij",
"\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"}),nt=x({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),tt=x({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),rt=function x(mn){function An(n){if(yu(n)&&!ff(n)&&!(n instanceof Un)){if(n instanceof On)return n;if(oi.call(n,"__wrapped__"))return Fe(n)}return new On(n)}function En(){}function On(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=T}function Un(n){this.__wrapped__=n,
this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Mn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Fn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Fn;++t<r;)this.add(n[t]);
}function Zn(n){this.size=(this.__data__=new Tn(n)).size}function qn(n,t){var r,e=ff(n),u=!e&&of(n),i=!e&&!u&&af(n),o=!e&&!u&&!i&&_f(n),u=(e=e||u||i||o)?A(n.length,ni):[],f=u.length;for(r in n)!t&&!oi.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Se(r,f))||u.push(r);return u}function Qn(n){var t=n.length;return t?n[ir(0,t-1)]:T}function et(n,t){return De(Ur(n),pt(t,0,n.length))}function ut(n){return De(Ur(n))}function it(n,t,r){(r===T||lu(n[t],r))&&(r!==T||t in n)||st(n,t,r);
}function ot(n,t,r){var e=n[t];oi.call(n,t)&&lu(e,r)&&(r!==T||t in n)||st(n,t,r)}function ft(n,t){for(var r=n.length;r--;)if(lu(n[r][0],t))return r;return-1}function ct(n,t,r,e){return uo(n,function(n,u,i){t(e,n,r(n),i)}),e}function at(n,t){return n&&Cr(t,Wu(t),n)}function lt(n,t){return n&&Cr(t,Bu(t),n)}function st(n,t,r){"__proto__"==t&&Ai?Ai(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function ht(n,t){for(var r=-1,e=t.length,u=Ku(e),i=null==n;++r<e;)u[r]=i?T:Ru(n,t[r]);return u;
}function pt(n,t,r){return n===n&&(r!==T&&(n=n<=r?n:r),t!==T&&(n=n>=t?n:t)),n}function _t(n,t,e,u,i,o){var f,c=1&t,a=2&t,l=4&t;if(e&&(f=i?e(n,u,i,o):e(n)),f!==T)return f;if(!du(n))return n;if(u=ff(n)){if(f=me(n),!c)return Ur(n,f)}else{var s=vo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(af(n))return Ir(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Ae(n),!c)return a?Mr(n,lt(f,n)):Dr(n,at(f,n))}else{if(!Ln[s])return i?n:{};f=Ee(n,s,c)}}if(o||(o=new Zn),
i=o.get(n))return i;o.set(n,f),pf(n)?n.forEach(function(r){f.add(_t(r,t,e,r,n,o))}):sf(n)&&n.forEach(function(r,u){f.set(u,_t(r,t,e,u,n,o))});var a=l?a?ve:_e:a?Bu:Wu,p=u?T:a(n);return r(p||n,function(r,u){p&&(u=r,r=n[u]),ot(f,u,_t(r,t,e,u,n,o))}),f}function vt(n){var t=Wu(n);return function(r){return gt(r,n,t)}}function gt(n,t,r){var e=r.length;if(null==n)return!e;for(n=Qu(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===T&&!(u in n)||!i(o))return false}return true}function dt(n,t,r){if(typeof n!="function")throw new ti("Expected a function");
return bo(function(){n.apply(T,r)},t)}function yt(n,t,r,e){var u=-1,i=o,a=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=c(t,k(r))),e?(i=f,a=false):200<=t.length&&(i=O,a=false,t=new Nn(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function bt(n,t){var r=true;return uo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function xt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===T?o===o&&!wu(o):r(o,f)))var f=o,c=i;
}return c}function jt(n,t){var r=[];return uo(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function wt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=ke),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?wt(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function mt(n,t){return n&&oo(n,t,Wu)}function At(n,t){return n&&fo(n,t,Wu)}function Et(n,t){return i(t,function(t){return _u(n[t])})}function kt(n,t){t=Sr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Me(t[r++])];return r&&r==e?n:T}function St(n,t,r){return t=t(n),
ff(n)?t:a(t,r(n))}function Ot(n){if(null==n)n=n===T?"[object Undefined]":"[object Null]";else if(mi&&mi in Qu(n)){var t=oi.call(n,mi),r=n[mi];try{n[mi]=T;var e=true}catch(n){}var u=ai.call(n);e&&(t?n[mi]=r:delete n[mi]),n=u}else n=ai.call(n);return n}function It(n,t){return n>t}function Rt(n,t){return null!=n&&oi.call(n,t)}function zt(n,t){return null!=n&&t in Qu(n)}function Wt(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=Ku(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,k(t))),s=Ci(p.length,s),
l[a]=!r&&(t||120<=u&&120<=p.length)?new Nn(a&&p):T}var p=n[0],_=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;if(v?!O(v,d):!e(h,d,r)){for(a=i;--a;){var y=l[a];if(y?!O(y,d):!e(n[a],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Bt(n,t,r){var e={};return mt(n,function(n,u,i){t(e,r(n),u,i)}),e}function Lt(t,r,e){return r=Sr(r,t),t=2>r.length?t:kt(t,hr(r,0,-1)),r=null==t?t:t[Me(Ve(r))],null==r?T:n(r,t,e)}function Ut(n){return yu(n)&&"[object Arguments]"==Ot(n)}function Ct(n){
return yu(n)&&"[object ArrayBuffer]"==Ot(n)}function Dt(n){return yu(n)&&"[object Date]"==Ot(n)}function Mt(n,t,r,e,u){if(n===t)t=true;else if(null==n||null==t||!yu(n)&&!yu(t))t=n!==n&&t!==t;else n:{var i=ff(n),o=ff(t),f=i?"[object Array]":vo(n),c=o?"[object Array]":vo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&af(n)){if(!af(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Zn),t=i||_f(n)?se(n,t,r,e,Mt,u):he(n,t,f,r,e,Mt,u);else{
if(!(1&r)&&(i=a&&oi.call(n,"__wrapped__"),f=o&&oi.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Zn),t=Mt(n,t,r,e,u);break n}if(c)t:if(u||(u=new Zn),i=1&r,f=_e(n),o=f.length,c=_e(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:oi.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===T?h!==p&&!Mt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l);
}c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Tt(n){return yu(n)&&"[object Map]"==vo(n)}function $t(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Qu(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===T&&!(c in n))return false;
}else{if(f=new Zn,e)var s=e(a,l,c,n,t,f);if(s===T?!Mt(l,a,3,e,f):!s)return false}}return true}function Ft(n){return!(!du(n)||ci&&ci in n)&&(_u(n)?hi:dn).test(Te(n))}function Nt(n){return yu(n)&&"[object RegExp]"==Ot(n)}function Pt(n){return yu(n)&&"[object Set]"==vo(n)}function Zt(n){return yu(n)&&gu(n.length)&&!!Bn[Ot(n)]}function qt(n){return typeof n=="function"?n:null==n?$u:typeof n=="object"?ff(n)?Jt(n[0],n[1]):Ht(n):Zu(n)}function Vt(n){if(!ze(n))return Li(n);var t,r=[];for(t in Qu(n))oi.call(n,t)&&"constructor"!=t&&r.push(t);
return r}function Kt(n,t){return n<t}function Gt(n,t){var r=-1,e=su(n)?Ku(n.length):[];return uo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ht(n){var t=xe(n);return 1==t.length&&t[0][2]?We(t[0][0],t[0][1]):function(r){return r===n||$t(r,n,t)}}function Jt(n,t){return Ie(n)&&t===t&&!du(t)?We(Me(n),t):function(r){var e=Ru(r,n);return e===T&&e===t?zu(r,n):Mt(t,e,3)}}function Yt(n,t,r,e,u){n!==t&&oo(t,function(i,o){if(u||(u=new Zn),du(i)){var f=u,c=Le(n,o),a=Le(t,o),l=f.get(a);if(l)it(n,o,l);else{
var l=e?e(c,a,o+"",n,t,f):T,s=l===T;if(s){var h=ff(a),p=!h&&af(a),_=!h&&!p&&_f(a),l=a;h||p||_?ff(c)?l=c:hu(c)?l=Ur(c):p?(s=false,l=Ir(a,true)):_?(s=false,l=zr(a,true)):l=[]:xu(a)||of(a)?(l=c,of(c)?l=Ou(c):du(c)&&!_u(c)||(l=Ae(a))):s=false}s&&(f.set(a,l),Yt(l,a,r,e,f),f.delete(a)),it(n,o,l)}}else f=e?e(Le(n,o),i,o+"",n,t,u):T,f===T&&(f=i),it(n,o,f)},Bu)}function Qt(n,t){var r=n.length;if(r)return t+=0>t?r:0,Se(t,r)?n[t]:T}function Xt(n,t,r){var e=-1;return t=c(t.length?t:[$u],k(ye())),n=Gt(n,function(n){return{
a:c(t,function(t){return t(n)}),b:++e,c:n}}),w(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Wr(u[e],i[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);break n}}e=n.b-t.b}return e})}function nr(n,t){return tr(n,t,function(t,r){return zu(n,r)})}function tr(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=kt(n,o);r(f,o)&&lr(i,Sr(o,n),f)}return i}function rr(n){return function(t){return kt(t,n)}}function er(n,t,r,e){var u=e?g:v,i=-1,o=t.length,f=n;for(n===t&&(t=Ur(t)),
r&&(f=c(n,k(r)));++i<o;)for(var a=0,l=t[i],l=r?r(l):l;-1<(a=u(f,l,a,e));)f!==n&&xi.call(f,a,1),xi.call(n,a,1);return n}function ur(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Se(u)?xi.call(n,u,1):xr(n,u)}}}function ir(n,t){return n+Ii(Ti()*(t-n+1))}function or(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=Ii(t/2))&&(n+=n);while(t);return r}function fr(n,t){return xo(Be(n,t,$u),n+"")}function cr(n){return Qn(Uu(n))}function ar(n,t){var r=Uu(n);
return De(r,pt(t,0,r.length))}function lr(n,t,r,e){if(!du(n))return n;t=Sr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=Me(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):T;a===T&&(a=du(l)?l:Se(t[u+1])?[]:{})}ot(f,c,a),f=f[c]}return n}function sr(n){return De(Uu(n))}function hr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Ku(u);++e<u;)r[e]=n[e+t];return r}function pr(n,t){var r;return uo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}
function _r(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!wu(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return vr(n,t,$u,r)}function vr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=wu(t),a=t===T;u<i;){var l=Ii((u+i)/2),s=r(n[l]),h=s!==T,p=null===s,_=s===s,v=wu(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Ci(i,4294967294)}function gr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){
var o=n[r],f=t?t(o):o;if(!r||!lu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function dr(n){return typeof n=="number"?n:wu(n)?F:+n}function yr(n){if(typeof n=="string")return n;if(ff(n))return c(n,yr)+"";if(wu(n))return ro?ro.call(n):"";var t=n+"";return"0"==t&&1/n==-$?"-0":t}function br(n,t,r){var e=-1,u=o,i=n.length,c=true,a=[],l=a;if(r)c=false,u=f;else if(200<=i){if(u=t?null:so(n))return U(u);c=false,u=O,l=new Nn}else l=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(c&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;
t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function xr(n,t){return t=Sr(t,n),n=2>t.length?n:kt(n,hr(t,0,-1)),null==n||delete n[Me(Ve(t))]}function jr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?hr(n,e?0:i,e?i+1:u):hr(n,e?i+1:0,e?u:i)}function wr(n,t){var r=n;return r instanceof Un&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function mr(n,t,r){var e=n.length;if(2>e)return e?br(n[0]):[];for(var u=-1,i=Ku(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=yt(i[u]||o,n[f],t,r));
return br(wt(i,1),t,r)}function Ar(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:T);return o}function Er(n){return hu(n)?n:[]}function kr(n){return typeof n=="function"?n:$u}function Sr(n,t){return ff(n)?n:Ie(n,t)?[n]:jo(Iu(n))}function Or(n,t,r){var e=n.length;return r=r===T?e:r,!t&&r>=e?n:hr(n,t,r)}function Ir(n,t){if(t)return n.slice();var r=n.length,r=gi?gi(r):new n.constructor(r);return n.copy(r),r}function Rr(n){var t=new n.constructor(n.byteLength);return new vi(t).set(new vi(n)),
t}function zr(n,t){return new n.constructor(t?Rr(n.buffer):n.buffer,n.byteOffset,n.length)}function Wr(n,t){if(n!==t){var r=n!==T,e=null===n,u=n===n,i=wu(n),o=t!==T,f=null===t,c=t===t,a=wu(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Br(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Ui(i-o,0),l=Ku(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];
return l}function Lr(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Ui(i-f,0),s=Ku(l+a);for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Ur(n,t){var r=-1,e=n.length;for(t||(t=Ku(e));++r<e;)t[r]=n[r];return t}function Cr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):T;c===T&&(c=n[f]),u?st(r,f,c):ot(r,f,c)}return r}function Dr(n,t){return Cr(n,po(n),t)}function Mr(n,t){return Cr(n,_o(n),t);
}function Tr(n,r){return function(e,u){var i=ff(e)?t:ct,o=r?r():{};return i(e,n,ye(u,2),o)}}function $r(n){return fr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:T,o=2<u?r[2]:T,i=3<n.length&&typeof i=="function"?(u--,i):T;for(o&&Oe(r[0],r[1],o)&&(i=3>u?T:i,u=1),t=Qu(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Fr(n,t){return function(r,e){if(null==r)return r;if(!su(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Qu(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function Nr(n){return function(t,r,e){
var u=-1,i=Qu(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break}return t}}function Pr(n,t,r){function e(){return(this&&this!==$n&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Vr(n);return e}function Zr(n){return function(t){t=Iu(t);var r=Rn.test(t)?M(t):T,e=r?r[0]:t.charAt(0);return t=r?Or(r,1).join(""):t.slice(1),e[n]()+t}}function qr(n){return function(t){return l(Mu(Du(t).replace(kn,"")),n,"")}}function Vr(n){return function(){var t=arguments;switch(t.length){
case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=eo(n.prototype),t=n.apply(r,t);return du(t)?t:r}}function Kr(t,r,e){function u(){for(var o=arguments.length,f=Ku(o),c=o,a=de(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:L(f,a),
o-=c.length,o<e?ue(t,r,Jr,u.placeholder,T,f,c,T,T,e-o):n(this&&this!==$n&&this instanceof u?i:t,this,f)}var i=Vr(t);return u}function Gr(n){return function(t,r,e){var u=Qu(t);if(!su(t)){var i=ye(r,3);t=Wu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:T}}function Hr(n){return pe(function(t){var r=t.length,e=r,u=On.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ti("Expected a function");if(u&&!o&&"wrapper"==ge(i))var o=new On([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=ge(i),f="wrapper"==u?ho(i):T,o=f&&Re(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[ge(f[0])].apply(o,f[3]):1==i.length&&Re(i)?o[u]():o.thru(i);
return function(){var n=arguments,e=n[0];if(o&&1==n.length&&ff(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Jr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Ku(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=de(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Br(y,e,u,_)),i&&(y=Lr(y,i,o,_)),d-=x,_&&d<a)return j=L(y,j),ue(n,t,Jr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Ci(f.length,x),m=Ur(y);w--;){
var A=f[w];y[w]=Se(A,x)?m[A]:T}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==$n&&this instanceof l&&(b=g||Vr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?T:Vr(n);return l}function Yr(n,t){return function(r,e){return Bt(r,n,t(e))}}function Qr(n,t){return function(r,e){var u;if(r===T&&e===T)return t;if(r!==T&&(u=r),e!==T){if(u===T)return e;typeof r=="string"||typeof e=="string"?(r=yr(r),e=yr(e)):(r=dr(r),e=dr(e)),u=n(r,e)}return u}}function Xr(t){return pe(function(r){
return r=c(r,k(ye())),fr(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ne(n,t){t=t===T?" ":yr(t);var r=t.length;return 2>r?r?or(t,n):t:(r=or(t,Oi(n/D(t))),Rn.test(t)?Or(M(r),0,n).join(""):r.slice(0,n))}function te(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=Ku(l+c),h=this&&this!==$n&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];return n(h,o?e:this,s)}var o=1&r,f=Vr(t);return i}function re(n){return function(t,r,e){
e&&typeof e!="number"&&Oe(t,r,e)&&(r=e=T),t=Au(t),r===T?(r=t,t=0):r=Au(r),e=e===T?t<r?1:-1:Au(e);var u=-1;r=Ui(Oi((r-t)/(e||1)),0);for(var i=Ku(r);r--;)i[n?r:++u]=t,t+=e;return i}}function ee(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Su(t),r=Su(r)),n(t,r)}}function ue(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:T;o=l?T:o;var h=l?i:T;return i=l?T:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(T,u),Re(n)&&yo(r,u),r.placeholder=e,Ue(r,n,t)}function ie(n){
var t=Yu[n];return function(n,r){if(n=Su(n),(r=null==r?0:Ci(Eu(r),292))&&Wi(n)){var e=(Iu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Iu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oe(n){return function(t){var r=vo(t);return"[object Map]"==r?W(t):"[object Set]"==r?C(t):E(t,n(t))}}function fe(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ti("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=T),o=o===T?o:Ui(Eu(o),0),f=f===T?f:Eu(f),a-=u?u.length:0,
64&t){var l=e,s=u;e=u=T}var h=c?T:ho(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Br(e,r,h[4]):r,i[4]=e?L(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Lr(e,r,h[6]):r,i[6]=e?L(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Ci(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],
t=i[1],r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===T?c?0:n.length:Ui(i[9]-a,0),!f&&24&t&&(t&=-25),Ue((h?co:yo)(t&&1!=t?8==t||16==t?Kr(n,t,f):32!=t&&33!=t||u.length?Jr.apply(T,i):te(n,t,r,e):Pr(n,t,r),i),n,t)}function ce(n,t,r,e){return n===T||lu(n,ei[r])&&!oi.call(e,r)?t:n}function ae(n,t,r,e,u,i){return du(n)&&du(t)&&(i.set(t,n),Yt(n,t,T,ae,i),i.delete(t)),n}function le(n){return xu(n)?T:n}function se(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;
var c=-1,a=true,l=2&r?new Nn:T;for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],p=t[c];if(e)var _=o?e(p,s,c,t,n,i):e(s,p,c,n,t,i);if(_!==T){if(_)continue;a=false;break}if(l){if(!h(t,function(n,t){if(!O(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==p&&!u(s,p,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function he(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":
if(n.byteLength!=t.byteLength||!i(new vi(n),new vi(t)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return lu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=W;case"[object Set]":if(f||(f=U),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=se(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(to)return to.call(n)==to.call(t)}
return false}function pe(n){return xo(Be(n,T,Ze),n+"")}function _e(n){return St(n,Wu,po)}function ve(n){return St(n,Bu,_o)}function ge(n){for(var t=n.name+"",r=Gi[t],e=oi.call(Gi,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function de(n){return(oi.call(An,"placeholder")?An:n).placeholder}function ye(){var n=An.iteratee||Fu,n=n===Fu?qt:n;return arguments.length?n(arguments[0],arguments[1]):n}function be(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
}function xe(n){for(var t=Wu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!du(u)]}return t}function je(n,t){var r=null==n?T:n[t];return Ft(r)?r:T}function we(n,t,r){t=Sr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=Me(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&gu(u)&&Se(o,u)&&(ff(n)||of(n)))}function me(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&oi.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ae(n){
return typeof n.constructor!="function"||ze(n)?{}:eo(di(n))}function Ee(n,t,r){var e=n.constructor;switch(t){case"[object ArrayBuffer]":return Rr(n);case"[object Boolean]":case"[object Date]":return new e(+n);case"[object DataView]":return t=r?Rr(n.buffer):n.buffer,new n.constructor(t,n.byteOffset,n.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
case"[object Uint16Array]":case"[object Uint32Array]":return zr(n,r);case"[object Map]":return new e;case"[object Number]":case"[object String]":return new e(n);case"[object RegExp]":return t=new n.constructor(n.source,_n.exec(n)),t.lastIndex=n.lastIndex,t;case"[object Set]":return new e;case"[object Symbol]":return to?Qu(to.call(n)):{}}}function ke(n){return ff(n)||of(n)||!!(ji&&n&&n[ji])}function Se(n,t){var r=typeof n;return t=null==t?9007199254740991:t,!!t&&("number"==r||"symbol"!=r&&bn.test(n))&&-1<n&&0==n%1&&n<t;
}function Oe(n,t,r){if(!du(r))return false;var e=typeof t;return!!("number"==e?su(r)&&Se(t,r.length):"string"==e&&t in r)&&lu(r[t],n)}function Ie(n,t){if(ff(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!wu(n))||(nn.test(n)||!X.test(n)||null!=t&&n in Qu(t))}function Re(n){var t=ge(n),r=An[t];return typeof r=="function"&&t in Un.prototype&&(n===r||(t=ho(r),!!t&&n===t[0]))}function ze(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||ei)}function We(n,t){
return function(r){return null!=r&&(r[n]===t&&(t!==T||n in Qu(r)))}}function Be(t,r,e){return r=Ui(r===T?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Ui(u.length-r,0),f=Ku(o);++i<o;)f[i]=u[r+i];for(i=-1,o=Ku(r+1);++i<r;)o[i]=u[i];return o[r]=e(f),n(t,this,o)}}function Le(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}function Ue(n,t,r){var e=t+"";t=xo;var u,i=$e;return u=(u=e.match(an))?u[1].split(ln):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],
r=r.join(2<i?", ":" "),e=e.replace(cn,"{\n/* [wrapped with "+r+"] */\n")),t(n,e)}function Ce(n){var t=0,r=0;return function(){var e=Di(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(T,arguments)}}function De(n,t){var r=-1,e=n.length,u=e-1;for(t=t===T?e:t;++r<t;){var e=ir(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function Me(n){if(typeof n=="string"||wu(n))return n;var t=n+"";return"0"==t&&1/n==-$?"-0":t}function Te(n){if(null!=n){try{return ii.call(n)}catch(n){}
return n+""}return""}function $e(n,t){return r(N,function(r){var e="_."+r[0];t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function Fe(n){if(n instanceof Un)return n.clone();var t=new On(n.__wrapped__,n.__chain__);return t.__actions__=Ur(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ne(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Eu(r),0>r&&(r=Ui(e+r,0)),_(n,ye(t,3),r)):-1}function Pe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==T&&(u=Eu(r),u=0>r?Ui(e+u,0):Ci(u,e-1)),
_(n,ye(t,3),u,true)}function Ze(n){return(null==n?0:n.length)?wt(n,1):[]}function qe(n){return n&&n.length?n[0]:T}function Ve(n){var t=null==n?0:n.length;return t?n[t-1]:T}function Ke(n,t){return n&&n.length&&t&&t.length?er(n,t):n}function Ge(n){return null==n?n:$i.call(n)}function He(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){if(hu(n))return t=Ui(n.length,t),true}),A(t,function(t){return c(n,b(t))})}function Je(t,r){if(!t||!t.length)return[];var e=He(t);return null==r?e:c(e,function(t){
return n(r,T,t)})}function Ye(n){return n=An(n),n.__chain__=true,n}function Qe(n,t){return t(n)}function Xe(){return this}function nu(n,t){return(ff(n)?r:uo)(n,ye(t,3))}function tu(n,t){return(ff(n)?e:io)(n,ye(t,3))}function ru(n,t){return(ff(n)?c:Gt)(n,ye(t,3))}function eu(n,t,r){return t=r?T:t,t=n&&null==t?n.length:t,fe(n,128,T,T,T,T,t)}function uu(n,t){var r;if(typeof t!="function")throw new ti("Expected a function");return n=Eu(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=T),
r}}function iu(n,t,r){return t=r?T:t,n=fe(n,8,T,T,T,T,T,t),n.placeholder=iu.placeholder,n}function ou(n,t,r){return t=r?T:t,n=fe(n,16,T,T,T,T,T,t),n.placeholder=ou.placeholder,n}function fu(n,t,r){function e(t){var r=c,e=a;return c=a=T,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===T||r>=t||0>r||g&&n>=l}function i(){var n=Go();if(u(n))return o(n);var r,e=bo;r=n-_,n=t-(n-p),r=g?Ci(n,l-r):n,h=e(i,r)}function o(n){return h=T,d&&c?e(n):(c=a=T,s)}function f(){var n=Go(),r=u(n);if(c=arguments,
a=this,p=n,r){if(h===T)return _=n=p,h=bo(i,t),v?e(n):s;if(g)return lo(h),h=bo(i,t),e(p)}return h===T&&(h=bo(i,t)),s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ti("Expected a function");return t=Su(t)||0,du(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Ui(Su(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==T&&lo(h),_=0,c=p=a=h=T},f.flush=function(){return h===T?s:o(Go())},f}function cu(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;
return i.has(u)?i.get(u):(e=n.apply(this,e),r.cache=i.set(u,e)||i,e)}if(typeof n!="function"||null!=t&&typeof t!="function")throw new ti("Expected a function");return r.cache=new(cu.Cache||Fn),r}function au(n){if(typeof n!="function")throw new ti("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function lu(n,t){return n===t||n!==n&&t!==t;
}function su(n){return null!=n&&gu(n.length)&&!_u(n)}function hu(n){return yu(n)&&su(n)}function pu(n){if(!yu(n))return false;var t=Ot(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!xu(n)}function _u(n){return!!du(n)&&(n=Ot(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function vu(n){return typeof n=="number"&&n==Eu(n)}function gu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n;
}function du(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function yu(n){return null!=n&&typeof n=="object"}function bu(n){return typeof n=="number"||yu(n)&&"[object Number]"==Ot(n)}function xu(n){return!(!yu(n)||"[object Object]"!=Ot(n))&&(n=di(n),null===n||(n=oi.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&ii.call(n)==li))}function ju(n){return typeof n=="string"||!ff(n)&&yu(n)&&"[object String]"==Ot(n)}function wu(n){return typeof n=="symbol"||yu(n)&&"[object Symbol]"==Ot(n);
}function mu(n){if(!n)return[];if(su(n))return ju(n)?M(n):Ur(n);if(wi&&n[wi]){n=n[wi]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}return t=vo(n),("[object Map]"==t?W:"[object Set]"==t?U:Uu)(n)}function Au(n){return n?(n=Su(n),n===$||n===-$?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function Eu(n){n=Au(n);var t=n%1;return n===n?t?n-t:n:0}function ku(n){return n?pt(Eu(n),0,4294967295):0}function Su(n){if(typeof n=="number")return n;if(wu(n))return F;if(du(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,
n=du(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(un,"");var t=gn.test(n);return t||yn.test(n)?Dn(n.slice(2),t?2:8):vn.test(n)?F:+n}function Ou(n){return Cr(n,Bu(n))}function Iu(n){return null==n?"":yr(n)}function Ru(n,t,r){return n=null==n?T:kt(n,t),n===T?r:n}function zu(n,t){return null!=n&&we(n,t,zt)}function Wu(n){return su(n)?qn(n):Vt(n)}function Bu(n){if(su(n))n=qn(n,true);else if(du(n)){var t,r=ze(n),e=[];for(t in n)("constructor"!=t||!r&&oi.call(n,t))&&e.push(t);n=e}else{if(t=[],
null!=n)for(r in Qu(n))t.push(r);n=t}return n}function Lu(n,t){if(null==n)return{};var r=c(ve(n),function(n){return[n]});return t=ye(t),tr(n,r,function(n,r){return t(n,r[0])})}function Uu(n){return null==n?[]:S(n,Wu(n))}function Cu(n){return $f(Iu(n).toLowerCase())}function Du(n){return(n=Iu(n))&&n.replace(xn,Xn).replace(Sn,"")}function Mu(n,t,r){return n=Iu(n),t=r?T:t,t===T?zn.test(n)?n.match(In)||[]:n.match(sn)||[]:n.match(t)||[]}function Tu(n){return function(){return n}}function $u(n){return n;
}function Fu(n){return qt(typeof n=="function"?n:_t(n,1))}function Nu(n,t,e){var u=Wu(t),i=Et(t,u);null!=e||du(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=Et(t,Wu(t)));var o=!(du(e)&&"chain"in e&&!e.chain),f=_u(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Ur(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Pu(){}
function Zu(n){return Ie(n)?b(Me(n)):rr(n)}function qu(){return[]}function Vu(){return false}mn=null==mn?$n:rt.defaults($n.Object(),mn,rt.pick($n,Wn));var Ku=mn.Array,Gu=mn.Date,Hu=mn.Error,Ju=mn.Function,Yu=mn.Math,Qu=mn.Object,Xu=mn.RegExp,ni=mn.String,ti=mn.TypeError,ri=Ku.prototype,ei=Qu.prototype,ui=mn["__core-js_shared__"],ii=Ju.prototype.toString,oi=ei.hasOwnProperty,fi=0,ci=function(){var n=/[^.]+$/.exec(ui&&ui.keys&&ui.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ai=ei.toString,li=ii.call(Qu),si=$n._,hi=Xu("^"+ii.call(oi).replace(rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pi=Pn?mn.Buffer:T,_i=mn.Symbol,vi=mn.Uint8Array,gi=pi?pi.g:T,di=B(Qu.getPrototypeOf,Qu),yi=Qu.create,bi=ei.propertyIsEnumerable,xi=ri.splice,ji=_i?_i.isConcatSpreadable:T,wi=_i?_i.iterator:T,mi=_i?_i.toStringTag:T,Ai=function(){
try{var n=je(Qu,"defineProperty");return n({},"",{}),n}catch(n){}}(),Ei=mn.clearTimeout!==$n.clearTimeout&&mn.clearTimeout,ki=Gu&&Gu.now!==$n.Date.now&&Gu.now,Si=mn.setTimeout!==$n.setTimeout&&mn.setTimeout,Oi=Yu.ceil,Ii=Yu.floor,Ri=Qu.getOwnPropertySymbols,zi=pi?pi.isBuffer:T,Wi=mn.isFinite,Bi=ri.join,Li=B(Qu.keys,Qu),Ui=Yu.max,Ci=Yu.min,Di=Gu.now,Mi=mn.parseInt,Ti=Yu.random,$i=ri.reverse,Fi=je(mn,"DataView"),Ni=je(mn,"Map"),Pi=je(mn,"Promise"),Zi=je(mn,"Set"),qi=je(mn,"WeakMap"),Vi=je(Qu,"create"),Ki=qi&&new qi,Gi={},Hi=Te(Fi),Ji=Te(Ni),Yi=Te(Pi),Qi=Te(Zi),Xi=Te(qi),no=_i?_i.prototype:T,to=no?no.valueOf:T,ro=no?no.toString:T,eo=function(){
function n(){}return function(t){return du(t)?yi?yi(t):(n.prototype=t,t=new n,n.prototype=T,t):{}}}();An.templateSettings={escape:J,evaluate:Y,interpolate:Q,variable:"",imports:{_:An}},An.prototype=En.prototype,An.prototype.constructor=An,On.prototype=eo(En.prototype),On.prototype.constructor=On,Un.prototype=eo(En.prototype),Un.prototype.constructor=Un,Mn.prototype.clear=function(){this.__data__=Vi?Vi(null):{},this.size=0},Mn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
this.size-=n?1:0,n},Mn.prototype.get=function(n){var t=this.__data__;return Vi?(n=t[n],"__lodash_hash_undefined__"===n?T:n):oi.call(t,n)?t[n]:T},Mn.prototype.has=function(n){var t=this.__data__;return Vi?t[n]!==T:oi.call(t,n)},Mn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Vi&&t===T?"__lodash_hash_undefined__":t,this},Tn.prototype.clear=function(){this.__data__=[],this.size=0},Tn.prototype.delete=function(n){var t=this.__data__;return n=ft(t,n),!(0>n)&&(n==t.length-1?t.pop():xi.call(t,n,1),
--this.size,true)},Tn.prototype.get=function(n){var t=this.__data__;return n=ft(t,n),0>n?T:t[n][1]},Tn.prototype.has=function(n){return-1<ft(this.__data__,n)},Tn.prototype.set=function(n,t){var r=this.__data__,e=ft(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Fn.prototype.clear=function(){this.size=0,this.__data__={hash:new Mn,map:new(Ni||Tn),string:new Mn}},Fn.prototype.delete=function(n){return n=be(this,n).delete(n),this.size-=n?1:0,n},Fn.prototype.get=function(n){return be(this,n).get(n);
},Fn.prototype.has=function(n){return be(this,n).has(n)},Fn.prototype.set=function(n,t){var r=be(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Nn.prototype.add=Nn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},Nn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.clear=function(){this.__data__=new Tn,this.size=0},Zn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Zn.prototype.get=function(n){
return this.__data__.get(n)},Zn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Tn){var e=r.__data__;if(!Ni||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Fn(e)}return r.set(n,t),this.size=r.size,this};var uo=Fr(mt),io=Fr(At,true),oo=Nr(),fo=Nr(true),co=Ki?function(n,t){return Ki.set(n,t),n}:$u,ao=Ai?function(n,t){return Ai(n,"toString",{configurable:true,enumerable:false,value:Tu(t),writable:true})}:$u,lo=Ei||function(n){
return $n.clearTimeout(n)},so=Zi&&1/U(new Zi([,-0]))[1]==$?function(n){return new Zi(n)}:Pu,ho=Ki?function(n){return Ki.get(n)}:Pu,po=Ri?function(n){return null==n?[]:(n=Qu(n),i(Ri(n),function(t){return bi.call(n,t)}))}:qu,_o=Ri?function(n){for(var t=[];n;)a(t,po(n)),n=di(n);return t}:qu,vo=Ot;(Fi&&"[object DataView]"!=vo(new Fi(new ArrayBuffer(1)))||Ni&&"[object Map]"!=vo(new Ni)||Pi&&"[object Promise]"!=vo(Pi.resolve())||Zi&&"[object Set]"!=vo(new Zi)||qi&&"[object WeakMap]"!=vo(new qi))&&(vo=function(n){
var t=Ot(n);if(n=(n="[object Object]"==t?n.constructor:T)?Te(n):"")switch(n){case Hi:return"[object DataView]";case Ji:return"[object Map]";case Yi:return"[object Promise]";case Qi:return"[object Set]";case Xi:return"[object WeakMap]"}return t});var go=ui?_u:Vu,yo=Ce(co),bo=Si||function(n,t){return $n.setTimeout(n,t)},xo=Ce(ao),jo=function(n){n=cu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(tn,function(n,r,e,u){
t.push(e?u.replace(hn,"$1"):r||n)}),t}),wo=fr(function(n,t){return hu(n)?yt(n,wt(t,1,hu,true)):[]}),mo=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),ye(r,2)):[]}),Ao=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),T,r):[]}),Eo=fr(function(n){var t=c(n,Er);return t.length&&t[0]===n[0]?Wt(t):[]}),ko=fr(function(n){var t=Ve(n),r=c(n,Er);return t===Ve(r)?t=T:r.pop(),r.length&&r[0]===n[0]?Wt(r,ye(t,2)):[]}),So=fr(function(n){var t=Ve(n),r=c(n,Er);return(t=typeof t=="function"?t:T)&&r.pop(),
r.length&&r[0]===n[0]?Wt(r,T,t):[]}),Oo=fr(Ke),Io=pe(function(n,t){var r=null==n?0:n.length,e=ht(n,t);return ur(n,c(t,function(n){return Se(n,r)?+n:n}).sort(Wr)),e}),Ro=fr(function(n){return br(wt(n,1,hu,true))}),zo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),br(wt(n,1,hu,true),ye(t,2))}),Wo=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return br(wt(n,1,hu,true),T,t)}),Bo=fr(function(n,t){return hu(n)?yt(n,t):[]}),Lo=fr(function(n){return mr(i(n,hu))}),Uo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),
mr(i(n,hu),ye(t,2))}),Co=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return mr(i(n,hu),T,t)}),Do=fr(He),Mo=fr(function(n){var t=n.length,t=1<t?n[t-1]:T,t=typeof t=="function"?(n.pop(),t):T;return Je(n,t)}),To=pe(function(n){function t(t){return ht(t,n)}var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof Un&&Se(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:Qe,args:[t],thisArg:T}),new On(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(T),
n})):this.thru(t)}),$o=Tr(function(n,t,r){oi.call(n,r)?++n[r]:st(n,r,1)}),Fo=Gr(Ne),No=Gr(Pe),Po=Tr(function(n,t,r){oi.call(n,r)?n[r].push(t):st(n,r,[t])}),Zo=fr(function(t,r,e){var u=-1,i=typeof r=="function",o=su(t)?Ku(t.length):[];return uo(t,function(t){o[++u]=i?n(r,t,e):Lt(t,r,e)}),o}),qo=Tr(function(n,t,r){st(n,r,t)}),Vo=Tr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ko=fr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&Oe(n,t[0],t[1])?t=[]:2<r&&Oe(t[0],t[1],t[2])&&(t=[t[0]]),
Xt(n,wt(t,1),[])}),Go=ki||function(){return $n.Date.now()},Ho=fr(function(n,t,r){var e=1;if(r.length)var u=L(r,de(Ho)),e=32|e;return fe(n,e,t,r,u)}),Jo=fr(function(n,t,r){var e=3;if(r.length)var u=L(r,de(Jo)),e=32|e;return fe(t,e,n,r,u)}),Yo=fr(function(n,t){return dt(n,1,t)}),Qo=fr(function(n,t,r){return dt(n,Su(t)||0,r)});cu.Cache=Fn;var Xo=fr(function(t,r){r=1==r.length&&ff(r[0])?c(r[0],k(ye())):c(wt(r,1),k(ye()));var e=r.length;return fr(function(u){for(var i=-1,o=Ci(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);
return n(t,this,u)})}),nf=fr(function(n,t){return fe(n,32,T,t,L(t,de(nf)))}),tf=fr(function(n,t){return fe(n,64,T,t,L(t,de(tf)))}),rf=pe(function(n,t){return fe(n,256,T,T,T,t)}),ef=ee(It),uf=ee(function(n,t){return n>=t}),of=Ut(function(){return arguments}())?Ut:function(n){return yu(n)&&oi.call(n,"callee")&&!bi.call(n,"callee")},ff=Ku.isArray,cf=Vn?k(Vn):Ct,af=zi||Vu,lf=Kn?k(Kn):Dt,sf=Gn?k(Gn):Tt,hf=Hn?k(Hn):Nt,pf=Jn?k(Jn):Pt,_f=Yn?k(Yn):Zt,vf=ee(Kt),gf=ee(function(n,t){return n<=t}),df=$r(function(n,t){
if(ze(t)||su(t))Cr(t,Wu(t),n);else for(var r in t)oi.call(t,r)&&ot(n,r,t[r])}),yf=$r(function(n,t){Cr(t,Bu(t),n)}),bf=$r(function(n,t,r,e){Cr(t,Bu(t),n,e)}),xf=$r(function(n,t,r,e){Cr(t,Wu(t),n,e)}),jf=pe(ht),wf=fr(function(n,t){n=Qu(n);var r=-1,e=t.length,u=2<e?t[2]:T;for(u&&Oe(t[0],t[1],u)&&(e=1);++r<e;)for(var u=t[r],i=Bu(u),o=-1,f=i.length;++o<f;){var c=i[o],a=n[c];(a===T||lu(a,ei[c])&&!oi.call(n,c))&&(n[c]=u[c])}return n}),mf=fr(function(t){return t.push(T,ae),n(Of,T,t)}),Af=Yr(function(n,t,r){
null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),n[t]=r},Tu($u)),Ef=Yr(function(n,t,r){null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),oi.call(n,t)?n[t].push(r):n[t]=[r]},ye),kf=fr(Lt),Sf=$r(function(n,t,r){Yt(n,t,r)}),Of=$r(function(n,t,r,e){Yt(n,t,r,e)}),If=pe(function(n,t){var r={};if(null==n)return r;var e=false;t=c(t,function(t){return t=Sr(t,n),e||(e=1<t.length),t}),Cr(n,ve(n),r),e&&(r=_t(r,7,le));for(var u=t.length;u--;)xr(r,t[u]);return r}),Rf=pe(function(n,t){return null==n?{}:nr(n,t);
}),zf=oe(Wu),Wf=oe(Bu),Bf=qr(function(n,t,r){return t=t.toLowerCase(),n+(r?Cu(t):t)}),Lf=qr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Uf=qr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Cf=Zr("toLowerCase"),Df=qr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Mf=qr(function(n,t,r){return n+(r?" ":"")+$f(t)}),Tf=qr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),$f=Zr("toUpperCase"),Ff=fr(function(t,r){try{return n(t,T,r)}catch(n){return pu(n)?n:new Hu(n)}}),Nf=pe(function(n,t){
return r(t,function(t){t=Me(t),st(n,t,Ho(n[t],n))}),n}),Pf=Hr(),Zf=Hr(true),qf=fr(function(n,t){return function(r){return Lt(r,n,t)}}),Vf=fr(function(n,t){return function(r){return Lt(n,r,t)}}),Kf=Xr(c),Gf=Xr(u),Hf=Xr(h),Jf=re(),Yf=re(true),Qf=Qr(function(n,t){return n+t},0),Xf=ie("ceil"),nc=Qr(function(n,t){return n/t},1),tc=ie("floor"),rc=Qr(function(n,t){return n*t},1),ec=ie("round"),uc=Qr(function(n,t){return n-t},0);return An.after=function(n,t){if(typeof t!="function")throw new ti("Expected a function");
return n=Eu(n),function(){if(1>--n)return t.apply(this,arguments)}},An.ary=eu,An.assign=df,An.assignIn=yf,An.assignInWith=bf,An.assignWith=xf,An.at=jf,An.before=uu,An.bind=Ho,An.bindAll=Nf,An.bindKey=Jo,An.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return ff(n)?n:[n]},An.chain=Ye,An.chunk=function(n,t,r){if(t=(r?Oe(n,t,r):t===T)?1:Ui(Eu(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Ku(Oi(r/t));e<r;)i[u++]=hr(n,e,e+=t);return i},An.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){
var i=n[t];i&&(u[e++]=i)}return u},An.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Ku(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return a(ff(r)?Ur(r):[r],wt(t,1))},An.cond=function(t){var r=null==t?0:t.length,e=ye();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new ti("Expected a function");return[e(n[0]),n[1]]}):[],fr(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e)}})},An.conforms=function(n){return vt(_t(n,1))},An.constant=Tu,
An.countBy=$o,An.create=function(n,t){var r=eo(n);return null==t?r:at(r,t)},An.curry=iu,An.curryRight=ou,An.debounce=fu,An.defaults=wf,An.defaultsDeep=mf,An.defer=Yo,An.delay=Qo,An.difference=wo,An.differenceBy=mo,An.differenceWith=Ao,An.drop=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Eu(t),hr(n,0>t?0:t,e)):[]},An.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Eu(t),t=e-t,hr(n,0,0>t?0:t)):[]},An.dropRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true,true):[];
},An.dropWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true):[]},An.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&Oe(n,t,r)&&(r=0,e=u),u=n.length,r=Eu(r),0>r&&(r=-r>u?0:u+r),e=e===T||e>u?u:Eu(e),0>e&&(e+=u),e=r>e?0:ku(e);r<e;)n[r++]=t;return n},An.filter=function(n,t){return(ff(n)?i:jt)(n,ye(t,3))},An.flatMap=function(n,t){return wt(ru(n,t),1)},An.flatMapDeep=function(n,t){return wt(ru(n,t),$)},An.flatMapDepth=function(n,t,r){return r=r===T?1:Eu(r),
wt(ru(n,t),r)},An.flatten=Ze,An.flattenDeep=function(n){return(null==n?0:n.length)?wt(n,$):[]},An.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===T?1:Eu(t),wt(n,t)):[]},An.flip=function(n){return fe(n,512)},An.flow=Pf,An.flowRight=Zf,An.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},An.functions=function(n){return null==n?[]:Et(n,Wu(n))},An.functionsIn=function(n){return null==n?[]:Et(n,Bu(n))},An.groupBy=Po,An.initial=function(n){
return(null==n?0:n.length)?hr(n,0,-1):[]},An.intersection=Eo,An.intersectionBy=ko,An.intersectionWith=So,An.invert=Af,An.invertBy=Ef,An.invokeMap=Zo,An.iteratee=Fu,An.keyBy=qo,An.keys=Wu,An.keysIn=Bu,An.map=ru,An.mapKeys=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,t(n,e,u),n)}),r},An.mapValues=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,e,t(n,e,u))}),r},An.matches=function(n){return Ht(_t(n,1))},An.matchesProperty=function(n,t){return Jt(n,_t(t,1))},An.memoize=cu,
An.merge=Sf,An.mergeWith=Of,An.method=qf,An.methodOf=Vf,An.mixin=Nu,An.negate=au,An.nthArg=function(n){return n=Eu(n),fr(function(t){return Qt(t,n)})},An.omit=If,An.omitBy=function(n,t){return Lu(n,au(ye(t)))},An.once=function(n){return uu(2,n)},An.orderBy=function(n,t,r,e){return null==n?[]:(ff(t)||(t=null==t?[]:[t]),r=e?T:r,ff(r)||(r=null==r?[]:[r]),Xt(n,t,r))},An.over=Kf,An.overArgs=Xo,An.overEvery=Gf,An.overSome=Hf,An.partial=nf,An.partialRight=tf,An.partition=Vo,An.pick=Rf,An.pickBy=Lu,An.property=Zu,
An.propertyOf=function(n){return function(t){return null==n?T:kt(n,t)}},An.pull=Oo,An.pullAll=Ke,An.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,ye(r,2)):n},An.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,T,r):n},An.pullAt=Io,An.range=Jf,An.rangeRight=Yf,An.rearg=rf,An.reject=function(n,t){return(ff(n)?i:jt)(n,au(ye(t,3)))},An.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ye(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),
u.push(e))}return ur(n,u),r},An.rest=function(n,t){if(typeof n!="function")throw new ti("Expected a function");return t=t===T?t:Eu(t),fr(n,t)},An.reverse=Ge,An.sampleSize=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:Eu(t),(ff(n)?et:ar)(n,t)},An.set=function(n,t,r){return null==n?n:lr(n,t,r)},An.setWith=function(n,t,r,e){return e=typeof e=="function"?e:T,null==n?n:lr(n,t,r,e)},An.shuffle=function(n){return(ff(n)?ut:sr)(n)},An.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&Oe(n,t,r)?(t=0,
r=e):(t=null==t?0:Eu(t),r=r===T?e:Eu(r)),hr(n,t,r)):[]},An.sortBy=Ko,An.sortedUniq=function(n){return n&&n.length?gr(n):[]},An.sortedUniqBy=function(n,t){return n&&n.length?gr(n,ye(t,2)):[]},An.split=function(n,t,r){return r&&typeof r!="number"&&Oe(n,t,r)&&(t=r=T),r=r===T?4294967295:r>>>0,r?(n=Iu(n))&&(typeof t=="string"||null!=t&&!hf(t))&&(t=yr(t),!t&&Rn.test(n))?Or(M(n),0,r):n.split(t,r):[]},An.spread=function(t,r){if(typeof t!="function")throw new ti("Expected a function");return r=null==r?0:Ui(Eu(r),0),
fr(function(e){var u=e[r];return e=Or(e,0,r),u&&a(e,u),n(t,this,e)})},An.tail=function(n){var t=null==n?0:n.length;return t?hr(n,1,t):[]},An.take=function(n,t,r){return n&&n.length?(t=r||t===T?1:Eu(t),hr(n,0,0>t?0:t)):[]},An.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Eu(t),t=e-t,hr(n,0>t?0:t,e)):[]},An.takeRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),false,true):[]},An.takeWhile=function(n,t){return n&&n.length?jr(n,ye(t,3)):[]},An.tap=function(n,t){return t(n),
n},An.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ti("Expected a function");return du(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),fu(n,t,{leading:e,maxWait:t,trailing:u})},An.thru=Qe,An.toArray=mu,An.toPairs=zf,An.toPairsIn=Wf,An.toPath=function(n){return ff(n)?c(n,Me):wu(n)?[n]:Ur(jo(Iu(n)))},An.toPlainObject=Ou,An.transform=function(n,t,e){var u=ff(n),i=u||af(n)||_f(n);if(t=ye(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:du(n)&&_u(o)?eo(di(n)):{};
}return(i?r:mt)(n,function(n,r,u){return t(e,n,r,u)}),e},An.unary=function(n){return eu(n,1)},An.union=Ro,An.unionBy=zo,An.unionWith=Wo,An.uniq=function(n){return n&&n.length?br(n):[]},An.uniqBy=function(n,t){return n&&n.length?br(n,ye(t,2)):[]},An.uniqWith=function(n,t){return t=typeof t=="function"?t:T,n&&n.length?br(n,T,t):[]},An.unset=function(n,t){return null==n||xr(n,t)},An.unzip=He,An.unzipWith=Je,An.update=function(n,t,r){return null==n?n:lr(n,t,kr(r)(kt(n,t)),void 0)},An.updateWith=function(n,t,r,e){
return e=typeof e=="function"?e:T,null!=n&&(n=lr(n,t,kr(r)(kt(n,t)),e)),n},An.values=Uu,An.valuesIn=function(n){return null==n?[]:S(n,Bu(n))},An.without=Bo,An.words=Mu,An.wrap=function(n,t){return nf(kr(t),n)},An.xor=Lo,An.xorBy=Uo,An.xorWith=Co,An.zip=Do,An.zipObject=function(n,t){return Ar(n||[],t||[],ot)},An.zipObjectDeep=function(n,t){return Ar(n||[],t||[],lr)},An.zipWith=Mo,An.entries=zf,An.entriesIn=Wf,An.extend=yf,An.extendWith=bf,Nu(An,An),An.add=Qf,An.attempt=Ff,An.camelCase=Bf,An.capitalize=Cu,
An.ceil=Xf,An.clamp=function(n,t,r){return r===T&&(r=t,t=T),r!==T&&(r=Su(r),r=r===r?r:0),t!==T&&(t=Su(t),t=t===t?t:0),pt(Su(n),t,r)},An.clone=function(n){return _t(n,4)},An.cloneDeep=function(n){return _t(n,5)},An.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,5,t)},An.cloneWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,4,t)},An.conformsTo=function(n,t){return null==t||gt(n,t,Wu(t))},An.deburr=Du,An.defaultTo=function(n,t){return null==n||n!==n?t:n},An.divide=nc,An.endsWith=function(n,t,r){
n=Iu(n),t=yr(t);var e=n.length,e=r=r===T?e:pt(Eu(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},An.eq=lu,An.escape=function(n){return(n=Iu(n))&&H.test(n)?n.replace(K,nt):n},An.escapeRegExp=function(n){return(n=Iu(n))&&en.test(n)?n.replace(rn,"\\$&"):n},An.every=function(n,t,r){var e=ff(n)?u:bt;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.find=Fo,An.findIndex=Ne,An.findKey=function(n,t){return p(n,ye(t,3),mt)},An.findLast=No,An.findLastIndex=Pe,An.findLastKey=function(n,t){return p(n,ye(t,3),At);
},An.floor=tc,An.forEach=nu,An.forEachRight=tu,An.forIn=function(n,t){return null==n?n:oo(n,ye(t,3),Bu)},An.forInRight=function(n,t){return null==n?n:fo(n,ye(t,3),Bu)},An.forOwn=function(n,t){return n&&mt(n,ye(t,3))},An.forOwnRight=function(n,t){return n&&At(n,ye(t,3))},An.get=Ru,An.gt=ef,An.gte=uf,An.has=function(n,t){return null!=n&&we(n,t,Rt)},An.hasIn=zu,An.head=qe,An.identity=$u,An.includes=function(n,t,r,e){return n=su(n)?n:Uu(n),r=r&&!e?Eu(r):0,e=n.length,0>r&&(r=Ui(e+r,0)),ju(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<v(n,t,r);
},An.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Eu(r),0>r&&(r=Ui(e+r,0)),v(n,t,r)):-1},An.inRange=function(n,t,r){return t=Au(t),r===T?(r=t,t=0):r=Au(r),n=Su(n),n>=Ci(t,r)&&n<Ui(t,r)},An.invoke=kf,An.isArguments=of,An.isArray=ff,An.isArrayBuffer=cf,An.isArrayLike=su,An.isArrayLikeObject=hu,An.isBoolean=function(n){return true===n||false===n||yu(n)&&"[object Boolean]"==Ot(n)},An.isBuffer=af,An.isDate=lf,An.isElement=function(n){return yu(n)&&1===n.nodeType&&!xu(n)},An.isEmpty=function(n){
if(null==n)return true;if(su(n)&&(ff(n)||typeof n=="string"||typeof n.splice=="function"||af(n)||_f(n)||of(n)))return!n.length;var t=vo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(ze(n))return!Vt(n).length;for(var r in n)if(oi.call(n,r))return false;return true},An.isEqual=function(n,t){return Mt(n,t)},An.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:T)?r(n,t):T;return e===T?Mt(n,t,T,r):!!e},An.isError=pu,An.isFinite=function(n){return typeof n=="number"&&Wi(n)},An.isFunction=_u,
An.isInteger=vu,An.isLength=gu,An.isMap=sf,An.isMatch=function(n,t){return n===t||$t(n,t,xe(t))},An.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:T,$t(n,t,xe(t),r)},An.isNaN=function(n){return bu(n)&&n!=+n},An.isNative=function(n){if(go(n))throw new Hu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ft(n)},An.isNil=function(n){return null==n},An.isNull=function(n){return null===n},An.isNumber=bu,An.isObject=du,An.isObjectLike=yu,An.isPlainObject=xu,An.isRegExp=hf,
An.isSafeInteger=function(n){return vu(n)&&-9007199254740991<=n&&9007199254740991>=n},An.isSet=pf,An.isString=ju,An.isSymbol=wu,An.isTypedArray=_f,An.isUndefined=function(n){return n===T},An.isWeakMap=function(n){return yu(n)&&"[object WeakMap]"==vo(n)},An.isWeakSet=function(n){return yu(n)&&"[object WeakSet]"==Ot(n)},An.join=function(n,t){return null==n?"":Bi.call(n,t)},An.kebabCase=Lf,An.last=Ve,An.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==T&&(u=Eu(r),u=0>u?Ui(e+u,0):Ci(u,e-1)),
t===t){for(r=u+1;r--&&n[r]!==t;);n=r}else n=_(n,d,u,true);return n},An.lowerCase=Uf,An.lowerFirst=Cf,An.lt=vf,An.lte=gf,An.max=function(n){return n&&n.length?xt(n,$u,It):T},An.maxBy=function(n,t){return n&&n.length?xt(n,ye(t,2),It):T},An.mean=function(n){return y(n,$u)},An.meanBy=function(n,t){return y(n,ye(t,2))},An.min=function(n){return n&&n.length?xt(n,$u,Kt):T},An.minBy=function(n,t){return n&&n.length?xt(n,ye(t,2),Kt):T},An.stubArray=qu,An.stubFalse=Vu,An.stubObject=function(){return{}},An.stubString=function(){
return""},An.stubTrue=function(){return true},An.multiply=rc,An.nth=function(n,t){return n&&n.length?Qt(n,Eu(t)):T},An.noConflict=function(){return $n._===this&&($n._=si),this},An.noop=Pu,An.now=Go,An.pad=function(n,t,r){n=Iu(n);var e=(t=Eu(t))?D(n):0;return!t||e>=t?n:(t=(t-e)/2,ne(Ii(t),r)+n+ne(Oi(t),r))},An.padEnd=function(n,t,r){n=Iu(n);var e=(t=Eu(t))?D(n):0;return t&&e<t?n+ne(t-e,r):n},An.padStart=function(n,t,r){n=Iu(n);var e=(t=Eu(t))?D(n):0;return t&&e<t?ne(t-e,r)+n:n},An.parseInt=function(n,t,r){
return r||null==t?t=0:t&&(t=+t),Mi(Iu(n).replace(on,""),t||0)},An.random=function(n,t,r){if(r&&typeof r!="boolean"&&Oe(n,t,r)&&(t=r=T),r===T&&(typeof t=="boolean"?(r=t,t=T):typeof n=="boolean"&&(r=n,n=T)),n===T&&t===T?(n=0,t=1):(n=Au(n),t===T?(t=n,n=0):t=Au(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Ti(),Ci(n+r*(t-n+Cn("1e-"+((r+"").length-1))),t)):ir(n,t)},An.reduce=function(n,t,r){var e=ff(n)?l:j,u=3>arguments.length;return e(n,ye(t,4),r,u,uo)},An.reduceRight=function(n,t,r){var e=ff(n)?s:j,u=3>arguments.length;
return e(n,ye(t,4),r,u,io)},An.repeat=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:Eu(t),or(Iu(n),t)},An.replace=function(){var n=arguments,t=Iu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},An.result=function(n,t,r){t=Sr(t,n);var e=-1,u=t.length;for(u||(u=1,n=T);++e<u;){var i=null==n?T:n[Me(t[e])];i===T&&(e=u,i=r),n=_u(i)?i.call(n):i}return n},An.round=ec,An.runInContext=x,An.sample=function(n){return(ff(n)?Qn:cr)(n)},An.size=function(n){if(null==n)return 0;if(su(n))return ju(n)?D(n):n.length;
var t=vo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Vt(n).length},An.snakeCase=Df,An.some=function(n,t,r){var e=ff(n)?h:pr;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.sortedIndex=function(n,t){return _r(n,t)},An.sortedIndexBy=function(n,t,r){return vr(n,t,ye(r,2))},An.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=_r(n,t);if(e<r&&lu(n[e],t))return e}return-1},An.sortedLastIndex=function(n,t){return _r(n,t,true)},An.sortedLastIndexBy=function(n,t,r){return vr(n,t,ye(r,2),true);
},An.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=_r(n,t,true)-1;if(lu(n[r],t))return r}return-1},An.startCase=Mf,An.startsWith=function(n,t,r){return n=Iu(n),r=null==r?0:pt(Eu(r),0,n.length),t=yr(t),n.slice(r,r+t.length)==t},An.subtract=uc,An.sum=function(n){return n&&n.length?m(n,$u):0},An.sumBy=function(n,t){return n&&n.length?m(n,ye(t,2)):0},An.template=function(n,t,r){var e=An.templateSettings;r&&Oe(n,t,r)&&(t=T),n=Iu(n),t=bf({},t,e,ce),r=bf({},t.imports,e.imports,ce);var u,i,o=Wu(r),f=S(r,o),c=0;
r=t.interpolate||jn;var a="__p+='";r=Xu((t.escape||jn).source+"|"+r.source+"|"+(r===Q?pn:jn).source+"|"+(t.evaluate||jn).source+"|$","g");var l=oi.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/[\r\n]/g," ")+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(wn,z),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=oi.call(t,"variable")&&t.variable)||(a="with(obj){"+a+"}"),
a=(i?a.replace(P,""):a).replace(Z,"$1").replace(q,"$1;"),a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Ff(function(){return Ju(o,l+"return "+a).apply(T,f)}),t.source=a,pu(t))throw t;return t},An.times=function(n,t){if(n=Eu(n),1>n||9007199254740991<n)return[];var r=4294967295,e=Ci(n,4294967295);for(t=ye(t),n-=4294967295,e=A(e,t);++r<n;)t(r);return e},An.toFinite=Au,
An.toInteger=Eu,An.toLength=ku,An.toLower=function(n){return Iu(n).toLowerCase()},An.toNumber=Su,An.toSafeInteger=function(n){return n?pt(Eu(n),-9007199254740991,9007199254740991):0===n?n:0},An.toString=Iu,An.toUpper=function(n){return Iu(n).toUpperCase()},An.trim=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(un,""):n&&(t=yr(t))?(n=M(n),r=M(t),t=I(n,r),r=R(n,r)+1,Or(n,t,r).join("")):n},An.trimEnd=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(fn,""):n&&(t=yr(t))?(n=M(n),t=R(n,M(t))+1,
Or(n,0,t).join("")):n},An.trimStart=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(on,""):n&&(t=yr(t))?(n=M(n),t=I(n,M(t)),Or(n,t).join("")):n},An.truncate=function(n,t){var r=30,e="...";if(du(t))var u="separator"in t?t.separator:u,r="length"in t?Eu(t.length):r,e="omission"in t?yr(t.omission):e;n=Iu(n);var i=n.length;if(Rn.test(n))var o=M(n),i=o.length;if(r>=i)return n;if(i=r-D(e),1>i)return e;if(r=o?Or(o,0,i).join(""):n.slice(0,i),u===T)return r+e;if(o&&(i+=r.length-i),hf(u)){if(n.slice(i).search(u)){
var f=r;for(u.global||(u=Xu(u.source,Iu(_n.exec(u))+"g")),u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===T?i:c)}}else n.indexOf(yr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},An.unescape=function(n){return(n=Iu(n))&&G.test(n)?n.replace(V,tt):n},An.uniqueId=function(n){var t=++fi;return Iu(n)+t},An.upperCase=Tf,An.upperFirst=$f,An.each=nu,An.eachRight=tu,An.first=qe,Nu(An,function(){var n={};return mt(An,function(t,r){oi.call(An.prototype,r)||(n[r]=t)}),n}(),{chain:false
}),An.VERSION="4.17.15",r("bind bindKey curry curryRight partial partialRight".split(" "),function(n){An[n].placeholder=An}),r(["drop","take"],function(n,t){Un.prototype[n]=function(r){r=r===T?1:Ui(Eu(r),0);var e=this.__filtered__&&!t?new Un(this):this.clone();return e.__filtered__?e.__takeCount__=Ci(r,e.__takeCount__):e.__views__.push({size:Ci(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Un.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=1==r||3==r;Un.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:ye(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){var r="take"+(t?"Right":"");Un.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Un.prototype[n]=function(){return this.__filtered__?new Un(this):this[r](1)}}),Un.prototype.compact=function(){return this.filter($u)},Un.prototype.find=function(n){
return this.filter(n).head()},Un.prototype.findLast=function(n){return this.reverse().find(n)},Un.prototype.invokeMap=fr(function(n,t){return typeof n=="function"?new Un(this):this.map(function(r){return Lt(r,n,t)})}),Un.prototype.reject=function(n){return this.filter(au(ye(n)))},Un.prototype.slice=function(n,t){n=Eu(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Un(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==T&&(t=Eu(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Un.prototype.takeRightWhile=function(n){
return this.reverse().takeWhile(n).reverse()},Un.prototype.toArray=function(){return this.take(4294967295)},mt(Un.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=An[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(An.prototype[t]=function(){function t(n){return n=u.apply(An,a([n],f)),e&&h?n[0]:n}var o=this.__wrapped__,f=e?[1]:arguments,c=o instanceof Un,l=f[0],s=c||ff(o);s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false);var h=this.__chain__,p=!!this.__actions__.length,l=i&&!h,c=c&&!p;
return!i&&s?(o=c?o:new Un(this),o=n.apply(o,f),o.__actions__.push({func:Qe,args:[t],thisArg:T}),new On(o,h)):l&&c?n.apply(this,f):(o=this.thru(t),l?e?o.value()[0]:o.value():o)})}),r("pop push shift sort splice unshift".split(" "),function(n){var t=ri[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);An.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(ff(u)?u:[],n)}return this[r](function(r){return t.apply(ff(r)?r:[],n)});
}}),mt(Un.prototype,function(n,t){var r=An[t];if(r){var e=r.name+"";oi.call(Gi,e)||(Gi[e]=[]),Gi[e].push({name:t,func:r})}}),Gi[Jr(T,2).name]=[{name:"wrapper",func:T}],Un.prototype.clone=function(){var n=new Un(this.__wrapped__);return n.__actions__=Ur(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Ur(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Ur(this.__views__),n},Un.prototype.reverse=function(){if(this.__filtered__){var n=new Un(this);
n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Un.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=ff(t),u=0>r,i=e?t.length:0;n=i;for(var o=this.__views__,f=0,c=-1,a=o.length;++c<a;){var l=o[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=Ci(n,f+s);break;case"takeRight":f=Ui(f,n-s)}}if(n={start:f,end:n},o=n.start,f=n.end,n=f-o,o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Ci(n,this.__takeCount__),!e||!u&&i==n&&l==n)return wr(t,this.__actions__);
e=[];n:for(;n--&&a<l;){for(o+=r,u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},An.prototype.at=To,An.prototype.chain=function(){return Ye(this)},An.prototype.commit=function(){return new On(this.value(),this.__chain__)},An.prototype.next=function(){this.__values__===T&&(this.__values__=mu(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?T:this.__values__[this.__index__++]}},An.prototype.plant=function(n){
for(var t,r=this;r instanceof En;){var e=Fe(r);e.__index__=0,e.__values__=T,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},An.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Un?(this.__actions__.length&&(n=new Un(this)),n=n.reverse(),n.__actions__.push({func:Qe,args:[Ge],thisArg:T}),new On(n,this.__chain__)):this.thru(Ge)},An.prototype.toJSON=An.prototype.valueOf=An.prototype.value=function(){return wr(this.__wrapped__,this.__actions__)},An.prototype.first=An.prototype.head,
wi&&(An.prototype[wi]=Xe),An}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($n._=rt, define(function(){return rt})):Nn?((Nn.exports=rt)._=rt,Fn._=rt):$n._=rt}).call(this);

var cloneDeep=_.cloneDeep;

Number.prototype.getBit = function getBit(index) {
    return +((this.valueOf() & (1 << index)) > 0);
};
/**
 * piece of *mutable* data
 */
class Byte {
    constructor(data = 0) {
        this.data = [0, 0, 0, 0, 0, 0, 0, 0];
        this.set(data);
    }
    static numberToRawByte(n) {
        // check if data is byte (has desired length)
        if (!Byte.canContain(n)) {
            throw new Error(`number: ${n} can not be contained inside byte. Max allowed value is: ${Byte.MAX}`);
        }
        // take each bit from lowest to highest
        const newRawByte = [];
        for (let i = 0; i < Byte.LENGTH; i++) {
            newRawByte.unshift(n.getBit(i));
        }
        console.assert(newRawByte.length == Byte.LENGTH, `trying to create rawByte with length ${newRawByte.length}. Length should be ${Byte.LENGTH}`);
        return newRawByte;
    }
    static canContain(number) {
        const mask = ~Byte.MAX;
        const nonDataPart = number & mask;
        return (nonDataPart ^ mask) == 0 || (nonDataPart ^ 0) == 0;
    }
    get highHalf() {
        return this.sliceNumber(0, Byte.LENGTH / 2);
    }
    get highHalfToByte() {
        return this.sliceToByte(0, Byte.LENGTH / 2, true);
    }
    get lowHalf() {
        return this.sliceNumber(Byte.LENGTH / 2);
    }
    get lowHalfToByte() {
        return this.sliceToByte(Byte.LENGTH / 2, Byte.LENGTH, true);
    }
    swap() {
        return new Byte((this.lowHalf << (Byte.LENGTH / 2)) | this.highHalfToByte.number);
    }
    static performBinOp(a, b, op) {
        console.assert(a.length >= b.length, "can't accommodate result in register");
        const lengthDifference = a.length - b.length;
        // prevent mutation
        const result = a;
        a = _.cloneDeep(a);
        b = _.cloneDeep(b);
        for (let i = 0; i < lengthDifference; i++) {
            b.unshift(new Byte(b[0].sign ? Byte.MAX : 0));
        }
        a.reverse();
        b.reverse();
        let carryBit = 0;
        for (let i = 0; i < b.length; i++) {
            const { carryOut: carryOut, result: resultByte } = op.call(a[i], b[i], carryBit);
            carryBit = carryOut;
            result[result.length - i - 1].set(resultByte.number);
        }
        return [carryBit, result];
    }
    add(byte, carryIn = 0) {
        const result = this.number + byte.number + carryIn;
        const carryOut = result > Byte.MAX;
        return { carryOut: +carryOut, result: this.set(result & Byte.MAX) };
    }
    subtract(byte, carryIn = 0) {
        const result = this.number - byte.number - carryIn;
        const carryOut = result < 0;
        return { carryOut: +carryOut, result: this.set(result & Byte.MAX) };
    }
    shiftRight(fill = this.sign) {
        const shiftedBit = this.data.pop();
        this.data.unshift(fill);
        return shiftedBit;
    }
    shiftRightArithmetic() {
        const shiftedBit = this.data.pop();
        this.data.splice(1, 0, 0);
        return shiftedBit;
    }
    shiftLeft(fill = 0) {
        const shiftedBit = this.data.shift();
        this.data.push(fill);
        return shiftedBit;
    }
    static toNumber(input) {
        return parseInt(input, 2);
    }
    get number() {
        return Byte.toNumber(this.bin);
    }
    get absolute() {
        if (this.sign) {
            return 2 ** Byte.LENGTH - this.number;
        }
        return this.number;
    }
    get absoluteToByte() {
        return new Byte(this.absolute);
    }
    get bin() {
        return this.data.join("");
    }
    get sign() {
        return this.data[0];
    }
    set sign(sign) {
        this.setBit(7, sign);
    }
    sliceNumber(start, end = Byte.LENGTH, shouldEndShift = false) {
        console.assert(start >= 0 && start < end, `start should be in range: 0 <= start < ${end}; start = ${start}`);
        console.assert(end <= Byte.LENGTH, `end should be lower than byte length: ${end} <= ${Byte.LENGTH}`);
        const endShift = Byte.LENGTH - end;
        return ((this.number & ((Byte.MAX >> (start + endShift)) << endShift)) >>
            (shouldEndShift ? endShift : 0));
    }
    sliceToByte(start, end = Byte.LENGTH, shouldEndShift = false) {
        return new Byte(this.sliceNumber(start, end, shouldEndShift));
    }
    /** Numbering start from the least significant bit (2**0) */
    bit(index) {
        Byte.checkIndex(index);
        return this.data[Byte.computeIndex(index)];
    }
    set(number) {
        this.data = Byte.numberToRawByte(number);
        return this;
    }
    setBit(index, bit) {
        Byte.checkIndex(index);
        this.data[Byte.computeIndex(index)] = bit;
    }
    static checkIndex(index) {
        console.assert(index >= 0 && index < Byte.LENGTH, `byte has only ${Byte.LENGTH} bits. trying to access: ${index}`);
    }
    static computeIndex(index) {
        return Byte.LENGTH - index - 1;
    }
    static twosComplement(number, width) {
        width = width ?? number > Byte.MAX ? 16 : 8;
        return number >= 0 ? number : 2 ** width - number;
    }
    static fill(amount) {
        const bytes = [];
        for (let i = 0; i < amount; i++) {
            bytes.push(new Byte());
        }
        return bytes;
    }
}
Byte.LENGTH = 8;
Byte.MAX = 2 ** Byte.LENGTH - 1;
// const test = new Byte(0b11110001)
// const sliced = test.sliceToByte(3, 7)
// const sliced = test.sliceToByte(1)
// console.log(sliced.bin)

var byte = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Byte: Byte
});

/**
 * Register is a visitor of some binary data storage.
 * It acts like a proxy, overlay over the storage.
 * Therefore multiple registers can be setup for single storage,
 * allowing to manipulate its data as a whole or in parts precisely.
 *
 * Use this knowledge to access highHalf and lowHalf
 */
class Register {
    get MAX() {
        return 2n ** BigInt(this.WIDTH * Byte.LENGTH) - 1n;
    }
    /** @argument WIDTH amount of bytes to use */
    constructor(bytes) {
        this.bytes = bytes;
        this.WIDTH = bytes.length;
        console.assert(this.WIDTH >= 1, "can't create register shorter then 1 byte");
    }
    set(dataInput) {
        if (typeof dataInput === "number" || typeof dataInput === "bigint") {
            let data = BigInt(dataInput);
            const maxAllowedNumber = this.MAX;
            // console.assert(dataInput <= maxAllowedNumber, `number ${dataInput} can't be stored inside register with width ${this.WIDTH}
            // Max allowed number is ${maxAllowedNumber}`)
            if (data > maxAllowedNumber) {
                throw new Error(`number ${data} is too big. Max allowed number is ${maxAllowedNumber}`);
            }
            const mask = BigInt(Byte.MAX);
            for (let i = this.WIDTH - 1; i >= 0; i--) {
                const value = Number(data & mask);
                data = data >> BigInt(Byte.LENGTH);
                this.bytes[i].set(value);
            }
        }
        else {
            for (let i = this.WIDTH - dataInput.length; i < this.WIDTH; i++) {
                dataInput.unshift(new Byte(0));
            }
            this.bytes = dataInput;
        }
        return this;
    }
    getBit(index) {
        return this.getByte(Math.floor(index / Byte.LENGTH)).bit(index % Byte.LENGTH);
    }
    get highHalf() {
        return this.bytes.slice(0, this.center);
    }
    set highHalf(bytes) {
        console.assert(bytes.length == this.center);
        this.bytes.splice(0, this.center, ...bytes);
    }
    get center() {
        return Math.floor(this.WIDTH / 2);
    }
    get lowHalf() {
        return this.bytes.slice(this.center);
    }
    get sign() {
        return this.bytes[0].sign;
    }
    set sign(bit) {
        this.bytes[0].sign = bit;
    }
    get number() {
        return this.bytes.reduce((result, currentByte) => {
            result <<= BigInt(Byte.LENGTH);
            result += BigInt(currentByte.number);
            return result;
        }, 0n);
    }
    get numberSigned() {
        if (this.sign) {
            return -1n * (this.MAX + 1n - this.number);
        }
        return this.number;
    }
    get formattedBin() {
        let nonNull = false;
        return this.bytes
            .map((byte, i, a) => {
            if (!nonNull && byte.number == 0 && i != a.length - 1) {
                return null;
            }
            nonNull = true;
            return byte.bin;
        })
            .filter((value) => value != null)
            .join(" ");
    }
    shiftLeft(fill = 0) {
        for (let i = 0; i < this.bytes.length; i++) {
            fill = this.getByte(i).shiftLeft(fill);
        }
        return fill;
    }
    shiftRight(fill = this.sign) {
        for (let i = 0; i < this.bytes.length; i++) {
            fill = this.bytes[i].shiftRight(fill);
        }
        return fill;
    }
    getByte(index) {
        return this.bytes.at(index * -1 - 1);
    }
    shiftRightArithmetic() {
        let fill = this.bytes[0].shiftRightArithmetic();
        // staring from one 'cause operation of first byte is already performed
        for (let i = 1; i < this.bytes.length; i++) {
            fill = this.bytes[i].shiftRight(fill);
        }
        return fill;
    }
    add(reg) {
        const a = this;
        const b = reg;
        const [carryBit, result] = Byte.performBinOp(a.bytes, b.bytes, Byte.prototype.add);
        this.bytes = result;
        return carryBit;
    }
    subtract(reg) {
        const a = this;
        const b = reg;
        const [carryOut, result] = Byte.performBinOp(a.bytes, b.bytes, Byte.prototype.subtract);
        this.bytes = result;
        return carryOut;
    }
    snapshot() {
        return cloneDeep(this);
    }
    toString() {
        return this.formattedBin;
    }
    /**
     *
     * @param message prefix to prepend to beautiful output
     * @returns formatted string
     */
    formatBeauty(message = "") {
        return [
            message,
            this.formattedBin,
            this.number.toString(),
            this.numberSigned
        ].join(" ");
    }
}
var ESide;
(function (ESide) {
    ESide[ESide["LEFT"] = 0] = "LEFT";
    ESide[ESide["RIGHT"] = 1] = "RIGHT";
})(ESide || (ESide = {}));
class RegisterWithCursor extends Register {
    constructor() {
        super(...arguments);
        this.cursorPosition = 0;
        /**
         * On which side of character at `cursorPosition` to display cursor
         *
         * DEFAULT: `ESide.LEFT`
         */
        this.side = ESide.LEFT;
    }
    shiftLeft(fill) {
        this.cursorPosition += 1;
        return super.shiftLeft(fill);
    }
    shiftRight(fill) {
        this.cursorPosition -= 1;
        return super.shiftRight(fill);
    }
    shiftRightArithmetic() {
        this.cursorPosition -= 1;
        return super.shiftRightArithmetic();
    }
    get formattedBin() {
        const bitStrings = this.bytes.map((byte) => {
            return byte.bin;
        });
        const cursorByteIndex = this.bytes.length - Math.floor(this.cursorPosition / Byte.LENGTH) - 1;
        const stringForCursor = bitStrings[cursorByteIndex] ?? "";
        const cursorStringIndex = stringForCursor.length - (this.cursorPosition % Byte.LENGTH);
        bitStrings[cursorByteIndex] = stringForCursor.slice(0, cursorStringIndex) +
            RegisterWithCursor.CURSOR_SYMBOL +
            stringForCursor.slice(cursorStringIndex);
        return bitStrings.join(" ");
    }
}
RegisterWithCursor.CURSOR_SYMBOL = "|";
// const a = new Register(4).set(0b1010_1100_1100)
// const b = new Register(4).set(0b1000_1011_0100)
// const aBytes = Byte.fill(2);
// const bBytes = Byte.fill(2);
// const aReg = new Register(aBytes).set(-1916);
// const bReg = new Register(bBytes).set(26);
// divide(aReg, bReg)
// const result = Register.multiply(a, b, EMethod.FAST_4)
// Register.printBeauty(result, "result")

var register = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Register: Register,
    RegisterWithCursor: RegisterWithCursor
});

/**
 * Represent single step in algorithm.
 *
 */
class Step {
    /** Last operand description is considered as intermediate result */
    constructor({ title, operandDescription = [] } = {}) {
        /**
         * Shown before step body.
         *
         * Use for clarifications on a step if required
         */
        this.comments = [];
        /**
         * Title of step.
         *
         * Usually contains string `Step ${step_number}`
         */
        this.title = null;
        this.operandDescription = operandDescription;
        this.title = title ?? null;
    }
    withComments(...comments) {
        this.comments = this.comments.concat(comments);
        return this;
    }
}
/**
 * Creates snapshot of data.
 */
class OperandDescription {
    /**
     *
     * @param operandName example: СЧП, М (Мантисса)
     * @param comment example: модифицированный сдвиг СЧП и множителя вправо
     */
    constructor(operandName, data, comment = "") {
        this.operandName = operandName;
        this.comment = comment;
        this.data = data.snapshot();
    }
}

var base = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OperandDescription: OperandDescription,
    Step: Step
});

var EAction;
(function (EAction) {
    EAction[EAction["SHIFT"] = 0] = "SHIFT";
    EAction[EAction["ADD_SHIFT"] = 1] = "ADD_SHIFT";
})(EAction || (EAction = {}));
var EMethod;
(function (EMethod) {
    EMethod[EMethod["WITH_CORRECTION"] = 0] = "WITH_CORRECTION";
    EMethod[EMethod["BUTE_METHOD"] = 1] = "BUTE_METHOD";
    EMethod[EMethod["FAST_2"] = 2] = "FAST_2";
    EMethod[EMethod["FAST_4"] = 3] = "FAST_4";
})(EMethod || (EMethod = {}));
const multiplyWithCorrection = function multiplyWithCorrection(a, b) {
    const resultBytes = [];
    for (let i = 0; i < a.WIDTH * 2; i++) {
        resultBytes.push(new Byte());
    }
    const center = Math.floor(resultBytes.length / 2);
    const result = new RegisterWithCursor(resultBytes);
    result.cursorPosition = center * Byte.LENGTH;
    const resultLow = new Register(result.lowHalf);
    const resultHigh = new Register(result.highHalf);
    resultLow.set(b.number);
    const steps = [];
    for (let i = 0; i < Byte.LENGTH * b.WIDTH; i++) {
        const step = new Step();
        const stepIndex = i + 1;
        const resultName = `R[${stepIndex}]`;
        step.title = "step " + stepIndex;
        if (result.getBit(0) == EAction.ADD_SHIFT) {
            step.operandDescription.push(new OperandDescription("A[пр]", a));
            resultHigh.add(a);
            step.operandDescription.push(new OperandDescription(resultName, result));
            result.shiftRight(a.sign);
            step.operandDescription.push(new OperandDescription(`->${resultName}`, result, "модифицированный сдвиг СЧП и множителя вправо"));
        }
        else {
            result.shiftRight();
            step.operandDescription.push(new OperandDescription(`->${resultName}`, result, "просто сдвиг (в старший разряд вносится 0)"));
        }
        steps.push(step);
    }
    if (b.sign) {
        const { steps: correctionSteps } = correction(result, a);
        steps.push(...correctionSteps);
    }
    return { result: [result], steps };
};
function correction(result, multiplicand) {
    const correction = cloneDeep(multiplicand).set(-multiplicand.number);
    const step = new Step({ operandDescription: [new OperandDescription("C", correction, "число на которое корректируем. -1 * на множитель")] });
    step.title = "correction";
    const resultHigh = new Register(result.highHalf);
    resultHigh.add(correction);
    step.operandDescription.push(new OperandDescription("R[c]", result, "скорректированный результат"));
    return { result: [result], steps: [step] };
}

const multiplyBute = function multiplyBute(a, b) {
    const resultBytes = [new Byte(), new Byte()];
    const center = Math.floor(resultBytes.length / 2);
    const result = new RegisterWithCursor(resultBytes);
    result.cursorPosition = center * Byte.LENGTH;
    const resultHigh = new Register(result.highHalf);
    new Register(result.lowHalf).set(b.number);
    let lastShift = 0;
    const steps = [];
    for (let i = 0; i < Byte.LENGTH * b.WIDTH; i++) {
        const step = new Step();
        steps.push(step);
        const stepNumber = i + 1;
        step.title = "step " + stepNumber;
        // 1 -> 0  +++ shift
        // 0 -> 1  --- shift
        // if does not changed: shift
        const currentShift = result.getBit(0);
        step.withComments(`текущий бит ${currentShift} --- ${lastShift} предыдущий бит`);
        if (lastShift !=
            currentShift) {
            step.withComments(`биты выше разные`);
            if (lastShift) {
                step.operandDescription.push(new OperandDescription("A[пр]", a, "складываем со старшими разрядами СЧП"));
                resultHigh.add(a);
            }
            else {
				const twosComplement = new Register(Byte.fill(a.WIDTH)).set(0)
				twosComplement.subtract(a)
                step.operandDescription.push(new OperandDescription("A[доп]", twosComplement, "вычитаем из старшимх разрядов СЧП"));
                resultHigh.subtract(a);
            }
            step.operandDescription.push(new OperandDescription(`R${stepNumber}`, result, "результат перед сдвигом"));
        }
        console.log("shifting");
        result.shiftRight();
        step.operandDescription.push(new OperandDescription(`->R${stepNumber}}`, result, "сдвинутый СЧП"));
        lastShift = currentShift;
    }
    return { steps, result: [result] };
};

const multiplyFast2 = function multiplyFast2(a, b) {
    validateInput(a, b);
    const result = a.snapshot().set(0);
    let correction = 0;
    let action = 0;
    const steps = [];
    for (let i = 0; i < (Byte.LENGTH * b.WIDTH) / 2; i++) {
        const currentStep = new Step({ title: `Step ${i + 1}` });
        action = new Byte(b.getByte(0).sliceNumber(6) + correction).sliceNumber(6);
        b.shiftRight();
        b.shiftRight();
        // console.log(`action ${action.toString(2)} ${correction}:`)
        currentStep.withComments(`action ${action.toString}; correction: ${correction}`);
        switch (action) {
            case 0b00:
                break;
            case 0b01:
                currentStep.operandDescription.push(...shiftAddAction(result, a, false, 0));
                break;
            case 0b10:
                currentStep.operandDescription.push(...shiftAddAction(result, a, false, 1));
                break;
            case 0b11:
                currentStep.operandDescription.push(...shiftAddAction(result, a, true, 0));
                break;
        }
        currentStep.operandDescription.push(new OperandDescription("СЧП", result));
        result.shiftRight();
        result.shiftRight();
        currentStep.operandDescription.push(new OperandDescription("СЧП->2", result));
        correction = +(action == 3 || (action == 0 && correction == 1));
        steps.push(currentStep);
    }
    // correction for last step
    if (action == 1) {
        const correctionStep = new Step({ title: "Коррекция" });
        correctionStep.operandDescription.push(new OperandDescription("А", a));
        // create view over high half of result byte storage
        const resultHighHalf = new Register(result.highHalf);
        // result is wider than operands exactly in a half
        resultHighHalf.add(a);
        correctionStep.operandDescription.push(new OperandDescription("СЧП", result));
    }
    return { result: [result], steps };
};
const multiplyFast4 = function multiplyFast4(a, b) {
    validateInput(a, b);
    const result = a.snapshot().set(0);
    // should be preserved between steps
    let correction = 0;
    const steps = [];
    let actionLow = 0;
    let actionHigh = 0;
    for (let i = 0; i < (Byte.LENGTH * b.WIDTH) / 4; i++) {
        const currentStep = new Step({ title: `Step ${i + 1}` });
        // slice to byte makes copt of byte
        const actionByteWithCorrection = b.getByte(0).sliceToByte(4).add(new Byte(correction)).result;
        const actionByteWithCorrectionTruncated = actionByteWithCorrection.sliceToByte(4);
        actionLow = actionByteWithCorrectionTruncated.sliceNumber(6);
        const internalCorrection = +(actionLow == 0b11);
        actionHigh = (actionByteWithCorrectionTruncated.sliceNumber(4, 6, true) + internalCorrection) & 0b11;
        console.log(actionHigh.toString(2).padStart(2, "0") + actionLow.toString(2).padStart(2, "0"));
        correction = +(actionByteWithCorrection.number >= 0b1011);
        b.shiftRight();
        b.shiftRight();
        b.shiftRight();
        b.shiftRight();
        currentStep.withComments(`actionLow ${actionLow.toString(2)} correction: ${correction}:`);
        switch (actionLow) {
            case 0b00:
                break;
            case 0b01:
                currentStep.operandDescription.push(...shiftAddAction(result, a, false, 0));
                break;
            case 0b10:
                currentStep.operandDescription.push(...shiftAddAction(result, a, false, 1));
                break;
            case 0b11:
                currentStep.operandDescription.push(...shiftAddAction(result, a, true, 0));
                break;
        }
        currentStep.withComments(`actionHigh ${actionHigh.toString(2)} internal correction: ${internalCorrection}:`);
        switch ((actionHigh) & 0b11) {
            case 0b00:
                break;
            case 0b01:
                currentStep.operandDescription.push(...shiftAddAction(result, a, false, 2));
                break;
            case 0b10:
                currentStep.operandDescription.push(...shiftAddAction(result, a, false, 3));
                break;
            case 0b11:
                currentStep.operandDescription.push(...shiftAddAction(result, a, true, 2));
                break;
        }
        result.shiftRight();
        result.shiftRight();
        result.shiftRight();
        result.shiftRight();
        currentStep.operandDescription.push(new OperandDescription("СЧП->4", result));
        steps.push(currentStep);
    }
    if (actionLow == 1) {
        const correctionStep = new Step({ title: "Коррекция" });
        correctionStep.operandDescription.push(new OperandDescription("А", a));
        const resultHighHalf = new Register(result.highHalf);
        resultHighHalf.add(a);
        correctionStep.operandDescription.push(new OperandDescription("СЧП", result));
        steps.push(correctionStep);
    }
    return { result: [result], steps };
};
function shiftAddAction(result, a, negative, shiftBy) {
    // to display subtracted value in clear way
    const add = new Register(Byte.fill(a.WIDTH)).set(0);
    if (negative) {
        add.subtract(a);
    }
    else {
        add.add(a);
    }
    for (let i = 0; i < shiftBy; i++) {
        add.shiftLeft();
    }
    const actionName = negative ? "subtract" : "add";
    // const resultName = negative ? "subtraction" : "addition"
    const operandDescriptions = [];
    operandDescriptions.push(new OperandDescription(`${negative ? "-" : ""}${shiftBy > 0 ? (2 ** shiftBy) : ""}А`, add, `shift left ${shiftBy > 0 ? shiftBy + " " : ""}and ${actionName}`));
    // for 12 bit operands 32 bits result is required
    const resultHighHalf = new Register(result.highHalf);
    const addLowHalf = new Register(add.lowHalf);
    resultHighHalf.add(addLowHalf);
    return operandDescriptions;
}
//const aBytes = Byte.fill(8);
//const bBytes = Byte.fill(4);
//const a = new Register(aBytes).set(2432);
//const b = new Register(bBytes).set(3932);
//const result = multiplyFast4(a, b);
//console.dir(result.steps, { depth: 4 });
//console.log(result.result[0].formatBeauty("result"));
function validateInput(a, b) {
    console.assert(a.WIDTH == b.WIDTH * 2, "width of first operand should be equal to b.WIDTH * 2");
    console.assert(a.numberSigned >= 0, "both operands should be positive or zero!");
    console.assert(b.numberSigned >= 0, "both operands should be positive or zero!");
}

const divide = function divide(dividendInput, dividerInput, r) {
    // init result and current reminder (dividend may be copied to current reminder)
    const dividend = dividendInput.snapshot();
    const divider = new Register(dividerInput.snapshot().lowHalf);
    const currentReminderBytes = Byte.fill(dividendInput.WIDTH);
    const currentReminder = new RegisterWithCursor(currentReminderBytes).set(dividend.numberSigned);
    const center = Math.floor(currentReminderBytes.length / 2);
    currentReminder.cursorPosition = center;
    const result = new Register(currentReminder.lowHalf);
    const reminder = new Register(currentReminder.highHalf);
    const steps = [];
    // check validity of division
    const isCorrect = isDivisionValid(currentReminder, dividend, divider);
    if (!isCorrect[0]) {
        r.r = true;
        //throw new Error("division could not be performed");
    }
    steps.push(isCorrect[1]);
    // start division
    for (let i = 0; i < Byte.LENGTH - 1; i++) {
        const stepNumber = i + 2;
        const step = new Step({ title: `step ${stepNumber}` });
        steps.push(step);
        // if equal -> subtract
        // if not -> add
        currentReminder.shiftLeft();
        step.operandDescription.push(new OperandDescription(`<-R${stepNumber}`, currentReminder, "сдвинутый текущий остаток"));
        if (currentReminder.sign == divider.sign) {
            step.withComments("знаки текущего остатка == знак делителя; производится вычитание");
            const negative = new Register(Byte.fill(divider.WIDTH));
            negative.subtract(divider);
            step.operandDescription.push(new OperandDescription("B[доп]", negative, "делитель в доп коде"));
            reminder.add(negative);
        }
        else {
            reminder.add(divider);
        }
        currentReminder.formatBeauty("current reminder");
        const bit = +(currentReminder.sign == divider.sign);
        currentReminder.shiftRight(0);
        currentReminder.shiftLeft(bit);
        step.operandDescription.push(new OperandDescription(`R${stepNumber}`, reminder));
    }
    // correction
    if (reminder.sign != dividend.sign) {
        const correctionStep = new Step({ title: "коррекция" });
        steps.push(correctionStep);
        if (reminder.sign == divider.sign) {
            correctionStep.withComments("знак остатка и делителя совпадают");
            reminder.subtract(divider);
        }
        else {
            reminder.add(divider);
        }
    }
    return { result: [result, reminder], steps };
};
function isDivisionValid(currentReminder, dividendInput, dividerInput) {
    // copy registers (they should not be mutated)
    const semiFirstStep = new Step({ title: "пробное вычитание/сложение" });
    const dividend = dividendInput.snapshot();
    const divider = dividerInput.snapshot();
    const currentReminderHigh = new Register(currentReminder.highHalf);
    // if dividend and divider have same signs:
    if (dividend.sign == divider.sign) {
        semiFirstStep.withComments("знаки делимого и делителя одинаковые");
        // left shift dividend by one bit
        currentReminder.shiftLeft();
        semiFirstStep.operandDescription.push(new OperandDescription("<-R", currentReminder));
		const BLow = new Register(Byte.fill(divider.WIDTH)).set(0);
		BLow.subtract(divider);
        semiFirstStep.operandDescription.push(new OperandDescription("B[доп]", BLow));
        currentReminderHigh.subtract(divider);
        semiFirstStep.operandDescription.push(new OperandDescription("R[1]", currentReminder, "после вычитания"));
        // subtract divider from high byte of dividend
    }
    else {
        semiFirstStep.withComments("знаки делимого и делителя разные");
        // add divider with low byte of dividend
		const BLow = new Register(Byte.fill(divider.WIDTH*2)).set(0);
		BLow.add(divider);
        semiFirstStep.operandDescription.push(new OperandDescription("B[пр]", BLow));
        currentReminder.add(divider);
        semiFirstStep.operandDescription.push(new OperandDescription("R[1]", currentReminder));
        // left shift result by 1 bit
        currentReminder.shiftLeft();
        semiFirstStep.operandDescription.push(new OperandDescription("<-R", currentReminder));
        // add divider with high byte of dividend
        semiFirstStep.operandDescription.push(new OperandDescription("B[пр]", divider));
        currentReminderHigh.add(divider);
        semiFirstStep.operandDescription.push(new OperandDescription("R[1]", currentReminder));
    }
    const firstBit = +(currentReminder.sign == divider.sign);
    currentReminder.shiftRight();
    currentReminder.shiftLeft(firstBit);
    return [dividend.sign != currentReminder.sign, semiFirstStep];
}
// const aBytes = Byte.fill(2)
// const bBytes = Byte.fill(2)
// const a = new Register(aBytes).set(1916)
// const b = new Register(bBytes).set(-26)
// const result = divide(a, b)
// console.log(result.result[0].formatBeauty("result"))
// console.log(result.result[1].formatBeauty("reminder"))
var discrete_math = {'Byte':Byte, 'divide':divide, 'multiplyBute':multiplyBute, 'multiplyFast2':multiplyFast2, 'multiplyFast4':multiplyFast4, 'multiplyWithCorrection':multiplyWithCorrection, 'Register':Register}
//export { byte, divide, multiplyBute, multiplyFast2, multiplyFast4, multiplyWithCorrection, base as operationBase, register };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ieXRlLnRzIiwiLi4vLi4vc3JjL3JlZ2lzdGVyL3JlZ2lzdGVyLnRzIiwiLi4vLi4vc3JjL2Jhc2UudHMiLCIuLi8uLi9zcmMvb3BlcmF0aW9ucy9tdWx0aXBseVdpdGhDb3JyZWN0aW9uLnRzIiwiLi4vLi4vc3JjL29wZXJhdGlvbnMvbXVsdGlwbHlCdXRlLnRzIiwiLi4vLi4vc3JjL29wZXJhdGlvbnMvbXVsdGlwbHlGYXN0LnRzIiwiLi4vLi4vc3JjL29wZXJhdGlvbnMvZGl2aXNpb24udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFpQkEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsS0FBYSxFQUFBO0FBQ3JELElBQUEsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQVEsQ0FBQztBQUN2RCxDQUFDLENBQUM7QUFFRjs7QUFFRztNQUNVLElBQUksQ0FBQTtBQUlmLElBQUEsV0FBQSxDQUFZLE9BQWUsQ0FBQyxFQUFBO0FBSGxCLFFBQUEsSUFBQSxDQUFBLElBQUksR0FBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUlqRCxRQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEI7SUFFUyxPQUFPLGVBQWUsQ0FBQyxDQUFTLEVBQUE7O0FBRXhDLFFBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FDYixDQUFXLFFBQUEsRUFBQSxDQUFDLENBQTRELHlE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
