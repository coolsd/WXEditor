!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){e.defineMode("javascript",function(t,r){function n(e,t,r){return de=e,pe=r,t}function a(e,t){var r=e.next();if('"'==r||"'"==r)return t.tokenize=i(r),t.tokenize(e,t);if("."==r&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return n("number","number");if("."==r&&e.match(".."))return n("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(r))return n(r);if("="==r&&e.eat(">"))return n("=>","operator");if("0"==r&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),n("number","number");if(/\d/.test(r))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),n("number","number");if("/"==r){if(e.eat("*"))return t.tokenize=o,o(e,t);if(e.eat("/"))return e.skipToEnd(),n("comment","comment");if("operator"==t.lastType||"keyword c"==t.lastType||"sof"==t.lastType||/^[\[{}\(,;:]$/.test(t.lastType)){e:for(var a,r=!1,l=!1;null!=(a=e.next());){if(!r){if("/"==a&&!l)break e;"["==a?l=!0:l&&"]"==a&&(l=!1)}r=!r&&"\\"==a}return e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),n("regexp","string-2")}return e.eatWhile(ge),n("operator","operator",e.current())}return"`"==r?(t.tokenize=c,c(e,t)):"#"==r?(e.skipToEnd(),n("error","error")):ge.test(r)?(e.eatWhile(ge),n("operator","operator",e.current())):xe.test(r)?(e.eatWhile(xe),r=e.current(),(a=he.propertyIsEnumerable(r)&&he[r])&&"."!=t.lastType?n(a.type,a.style,r):n("variable","variable",r)):void 0}function i(e){return function(t,r){var i,o=!1;if(ye&&"@"==t.peek()&&t.match(we))return r.tokenize=a,n("jsonld-keyword","meta");for(;null!=(i=t.next())&&(i!=e||o);)o=!o&&"\\"==i;return o||(r.tokenize=a),n("string","string")}}function o(e,t){for(var r,i=!1;r=e.next();){if("/"==r&&i){t.tokenize=a;break}i="*"==r}return n("comment","comment")}function c(e,t){for(var r,i=!1;null!=(r=e.next());){if(!i&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=a;break}i=!i&&"\\"==r}return n("quasi","string-2",e.current())}function l(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(0>r)){for(var n=0,a=!1,r=r-1;r>=0;--r){var i=e.string.charAt(r),o="([{}])".indexOf(i);if(o>=0&&3>o){if(!n){++r;break}if(0==--n)break}else if(o>=3&&6>o)++n;else if(xe.test(i))a=!0;else{if(/["'\/]/.test(i))return;if(a&&!n){++r;break}}}a&&!n&&(t.fatArrowAt=r)}}function u(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function s(){for(var e=arguments.length-1;e>=0;e--)Me.cc.push(arguments[e])}function f(){return s.apply(null,arguments),!0}function d(e){function t(t){for(;t;t=t.next)if(t.name==e)return!0;return!1}var n=Me.state;n.context?(Me.marked="def",t(n.localVars)||(n.localVars={name:e,next:n.localVars})):!t(n.globalVars)&&r.globalVars&&(n.globalVars={name:e,next:n.globalVars})}function p(){Me.state.context={prev:Me.state.context,vars:Me.state.localVars},Me.state.localVars=Ve}function m(){Me.state.localVars=Me.state.context.vars,Me.state.context=Me.state.context.prev}function v(e,t){var r=function(){var r=Me.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new u(n,Me.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function y(){var e=Me.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function k(e){function t(r){return r==e?f():";"==e?s():f(t)}return t}function b(e,t){return"var"==e?f(v("vardef",t.length),H,k(";"),y):"keyword a"==e?f(v("form"),x,b,y):"keyword b"==e?f(v("form"),b,y):"{"==e?f(v("}"),W,y):";"==e?f():"if"==e?("else"==Me.state.lexical.info&&Me.state.cc[Me.state.cc.length-1]==y&&Me.state.cc.pop()(),f(v("form"),x,b,y,J)):"function"==e?f(Y):"for"==e?f(v("form"),K,b,y):"variable"==e?f(v("stat"),A):"switch"==e?f(v("form"),x,v("}","switch"),k("{"),W,y,y):"case"==e?f(x,k(":")):"default"==e?f(k(":")):"catch"==e?f(v("form"),p,k("("),Z,k(")"),b,y,m):"module"==e?f(v("form"),p,ne,m,y):"class"==e?f(v("form"),_,y):"export"==e?f(v("form"),ae,y):"import"==e?f(v("form"),ie,y):s(v("stat"),x,k(";"),y)}function x(e){return g(e,!1)}function h(e){return g(e,!0)}function g(e,t){if(Me.state.fatArrowAt==Me.stream.start){var r=t?T:z;if("("==e)return f(p,v(")"),P(U,")"),y,k("=>"),r,m);if("variable"==e)return s(p,U,k("=>"),r,m)}return r=t?V:M,je.hasOwnProperty(e)?f(r):"function"==e?f(Y,r):"keyword c"==e?f(t?j:w):"("==e?f(v(")"),w,fe,k(")"),y,r):"operator"==e||"spread"==e?f(t?h:x):"["==e?f(v("]"),ue,y,r):"{"==e?S($,"}",null,r):"quasi"==e?s(E,r):f()}function w(e){return e.match(/[;\}\)\],]/)?s():s(x)}function j(e){return e.match(/[;\}\)\],]/)?s():s(h)}function M(e,t){return","==e?f(x):V(e,t,!1)}function V(e,t,r){var n=0==r?M:V,a=0==r?x:h;if("=>"==e)return f(p,r?T:z,m);if("operator"==e)return/\+\+|--/.test(t)?f(n):"?"==t?f(x,k(":"),a):f(a);if("quasi"==e)return s(E,n);if(";"!=e){if("("==e)return S(h,")","call",n);if("."==e)return f(C,n);if("["==e)return f(v("]"),w,k("]"),y,n)}}function E(e,t){return"quasi"!=e?s():"${"!=t.slice(t.length-2)?f(E):f(x,I)}function I(e){return"}"==e?(Me.marked="string-2",Me.state.tokenize=c,f(E)):void 0}function z(e){return l(Me.stream,Me.state),s("{"==e?b:x)}function T(e){return l(Me.stream,Me.state),s("{"==e?b:h)}function A(e){return":"==e?f(y,b):s(M,k(";"),y)}function C(e){return"variable"==e?(Me.marked="property",f()):void 0}function $(e,t){return"variable"==e||"keyword"==Me.style?(Me.marked="property",f("get"==t||"set"==t?q:O)):"number"==e||"string"==e?(Me.marked=ye?"property":Me.style+" property",f(O)):"jsonld-keyword"==e?f(O):"["==e?f(x,k("]"),O):void 0}function q(e){return"variable"!=e?s(O):(Me.marked="property",f(Y))}function O(e){return":"==e?f(h):"("==e?s(Y):void 0}function P(e,t){function r(n){return","==n?(n=Me.state.lexical,"call"==n.info&&(n.pos=(n.pos||0)+1),f(e,r)):n==t?f():f(k(t))}return function(n){return n==t?f():s(e,r)}}function S(e,t,r){for(var n=3;n<arguments.length;n++)Me.cc.push(arguments[n]);return f(v(t,r),P(e,t),y)}function W(e){return"}"==e?f():s(b,W)}function N(e){return be&&":"==e?f(B):void 0}function B(e){return"variable"==e?(Me.marked="variable-3",f()):void 0}function H(){return s(U,N,F,G)}function U(e,t){return"variable"==e?(d(t),f()):"["==e?S(U,"]"):"{"==e?S(D,"}"):void 0}function D(e,t){return"variable"!=e||Me.stream.match(/^\s*:/,!1)?("variable"==e&&(Me.marked="property"),f(k(":"),U,F)):(d(t),f(F))}function F(e,t){return"="==t?f(h):void 0}function G(e){return","==e?f(H):void 0}function J(e,t){return"keyword b"==e&&"else"==t?f(v("form","else"),b,y):void 0}function K(e){return"("==e?f(v(")"),L,k(")"),y):void 0}function L(e){return"var"==e?f(H,k(";"),R):";"==e?f(R):"variable"==e?f(Q):s(x,k(";"),R)}function Q(e,t){return"in"==t||"of"==t?(Me.marked="keyword",f(x)):f(M,R)}function R(e,t){return";"==e?f(X):"in"==t||"of"==t?(Me.marked="keyword",f(x)):s(x,k(";"),X)}function X(e){")"!=e&&f(x)}function Y(e,t){return"*"==t?(Me.marked="keyword",f(Y)):"variable"==e?(d(t),f(Y)):"("==e?f(p,v(")"),P(Z,")"),y,b,m):void 0}function Z(e){return"spread"==e?f(Z):s(U,N)}function _(e,t){return"variable"==e?(d(t),f(ee)):void 0}function ee(e,t){return"extends"==t?f(x,ee):"{"==e?f(v("}"),te,y):void 0}function te(e,t){return"variable"==e||"keyword"==Me.style?"static"==t?(Me.marked="keyword",f(te)):(Me.marked="property","get"==t||"set"==t?f(re,Y,te):f(Y,te)):"*"==t?(Me.marked="keyword",f(te)):";"==e?f(te):"}"==e?f():void 0}function re(e){return"variable"!=e?s():(Me.marked="property",f())}function ne(e,t){return"string"==e?f(b):"variable"==e?(d(t),f(le)):void 0}function ae(e,t){return"*"==t?(Me.marked="keyword",f(le,k(";"))):"default"==t?(Me.marked="keyword",f(x,k(";"))):s(b)}function ie(e){return"string"==e?f():s(oe,le)}function oe(e,t){return"{"==e?S(oe,"}"):("variable"==e&&d(t),"*"==t&&(Me.marked="keyword"),f(ce))}function ce(e,t){return"as"==t?(Me.marked="keyword",f(oe)):void 0}function le(e,t){return"from"==t?(Me.marked="keyword",f(x)):void 0}function ue(e){return"]"==e?f():s(h,se)}function se(e){return"for"==e?s(fe,k("]")):","==e?f(P(j,"]")):s(P(h,"]"))}function fe(e){return"for"==e?f(K,fe):"if"==e?f(x,fe):void 0}var de,pe,me=t.indentUnit,ve=r.statementIndent,ye=r.jsonld,ke=r.json||ye,be=r.typescript,xe=r.wordCharacters||/[\w$\xa1-\uffff]/,he=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"},t={"if":e("if"),"while":t,"with":t,"else":r,"do":r,"try":r,"finally":r,"return":n,"break":n,"continue":n,"new":n,"delete":n,"throw":n,"debugger":n,"var":e("var"),"const":e("var"),let:e("var"),"function":e("function"),"catch":e("catch"),"for":e("for"),"switch":e("switch"),"case":e("case"),"default":e("default"),"in":a,"typeof":a,"instanceof":a,"true":i,"false":i,"null":i,undefined:i,NaN:i,Infinity:i,"this":e("this"),module:e("module"),"class":e("class"),"super":e("atom"),"yield":n,"export":e("export"),"import":e("import"),"extends":n};if(be){var o,r={type:"variable",style:"variable-3"},r={"interface":e("interface"),"extends":e("extends"),constructor:e("constructor"),"public":e("public"),"private":e("private"),"protected":e("protected"),"static":e("static"),string:r,number:r,bool:r,any:r};for(o in r)t[o]=r[o]}return t}(),ge=/[+\-*&%=<>!?|~^]/,we=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,je={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0},Me={state:null,column:null,marked:null,cc:null},Ve={name:"this",next:{name:"arguments"}};return y.lex=!0,{startState:function(e){return e={tokenize:a,lastType:"sof",cc:[],lexical:new u((e||0)-me,0,"block",!1),localVars:r.localVars,context:r.localVars&&{vars:r.localVars},indented:0},r.globalVars&&"object"==typeof r.globalVars&&(e.globalVars=r.globalVars),e},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),l(e,t)),t.tokenize!=o&&e.eatSpace())return null;var r=t.tokenize(e,t);if("comment"==de)return r;t.lastType="operator"!=de||"++"!=pe&&"--"!=pe?de:"incdec";e:{var n=de,a=pe,i=t.cc;for(Me.state=t,Me.stream=e,Me.marked=null,Me.cc=i,Me.style=r,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);;)if((i.length?i.pop():ke?x:b)(n,a)){for(;i.length&&i[i.length-1].lex;)i.pop()();if(Me.marked){r=Me.marked;break e}if(n="variable"==n)t:{for(n=t.localVars;n;n=n.next)if(n.name==a){n=!0;break t}for(i=t.context;i;i=i.prev)for(n=i.vars;n;n=n.next)if(n.name==a){n=!0;break t}n=void 0}if(n){r="variable-2";break e}break e}}return r},indent:function(t,n){if(t.tokenize==o)return e.Pass;if(t.tokenize!=a)return 0;var i=n&&n.charAt(0),c=t.lexical;if(!/^\s*else\b/.test(n))for(var l=t.cc.length-1;l>=0;--l){var u=t.cc[l];if(u==y)c=c.prev;else if(u!=J)break}return"stat"==c.type&&"}"==i&&(c=c.prev),ve&&")"==c.type&&"stat"==c.prev.type&&(c=c.prev),l=c.type,u=i==l,"vardef"==l?c.indented+("operator"==t.lastType||","==t.lastType?c.info+1:0):"form"==l&&"{"==i?c.indented:"form"==l?c.indented+me:"stat"==l?(i=c.indented,c="operator"==t.lastType||","==t.lastType||ge.test(n.charAt(0))||/[,.]/.test(n.charAt(0)),i+(c?ve||me:0)):"switch"!=c.info||u||0==r.doubleIndentSwitch?c.align?c.column+(u?0:1):c.indented+(u?0:me):c.indented+(/^(?:case|default)\b/.test(n)?me:2*me)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:ke?null:"/*",blockCommentEnd:ke?null:"*/",lineComment:ke?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:ke?"json":"javascript",jsonldMode:ye,jsonMode:ke}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})});