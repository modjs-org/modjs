(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6071],{7917:function(){},4581:function(e){class n{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...n){let t=Object.create(null);for(let n in e)t[n]=e[n];return n.forEach(function(e){for(let n in e)t[n]=e[n]}),t}let i=e=>!!e.scope,r=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){let t=e.split(".");return[`${n}${t.shift()}`,...t.map((e,n)=>`${e}${"_".repeat(n+1)}`)].join(" ")}return`${n}${e}`};class s{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=t(e)}openNode(e){if(!i(e))return;let n=r(e.scope,{prefix:this.classPrefix});this.span(n)}closeNode(e){i(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}let o=(e={})=>{let n={children:[]};return Object.assign(n,e),n};class l{constructor(){this.rootNode=o(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){let n=o({scope:e});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{l._collapse(e)}))}}class c extends l{constructor(e){super(),this.options=e}addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,n){let t=e.root;n&&(t.scope=`language:${n}`),this.add(t)}toHTML(){return new s(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function g(e){return e?"string"==typeof e?e:e.source:null}function u(e){return f("(?=",e,")")}function d(e){return f("(?:",e,")*")}function h(e){return f("(?:",e,")?")}function f(...e){return e.map(e=>g(e)).join("")}function b(...e){return"("+(function(e){let n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e).capture?"":"?:")+e.map(e=>g(e)).join("|")+")"}function p(e){return RegExp(e.toString()+"|").exec("").length-1}let m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(e,{joinWith:n}){let t=0;return e.map(e=>{let n=t+=1,a=g(e),i="";for(;a.length>0;){let e=m.exec(a);if(!e){i+=a;break}i+=a.substring(0,e.index),a=a.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+n):(i+=e[0],"("===e[0]&&t++)}return i}).map(e=>`(${e})`).join(n)}let _="[a-zA-Z]\\w*",y="[a-zA-Z_]\\w*",x="\\b\\d+(\\.\\d+)?",w="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",N="\\b(0b[01]+)",v={begin:"\\\\[\\s\\S]",relevance:0},A=function(e,n,t={}){let i=a({scope:"comment",begin:e,end:n,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});let r=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:f(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},S=A("//","$"),k=A("/\\*","\\*/"),O=A("#","$");var M=Object.freeze({__proto__:null,APOS_STRING_MODE:{scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[v]},BACKSLASH_ESCAPE:v,BINARY_NUMBER_MODE:{scope:"number",begin:N,relevance:0},BINARY_NUMBER_RE:N,COMMENT:A,C_BLOCK_COMMENT_MODE:k,C_LINE_COMMENT_MODE:S,C_NUMBER_MODE:{scope:"number",begin:w,relevance:0},C_NUMBER_RE:w,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})},HASH_COMMENT_MODE:O,IDENT_RE:_,MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:{begin:"\\.\\s*"+y,relevance:0},NUMBER_MODE:{scope:"number",begin:x,relevance:0},NUMBER_RE:x,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},QUOTE_STRING_MODE:{scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[v]},REGEXP_MODE:{scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]},RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{let n=/^#![ ]*\//;return e.binary&&(e.begin=f(n,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},TITLE_MODE:{scope:"title",begin:_,relevance:0},UNDERSCORE_IDENT_RE:y,UNDERSCORE_TITLE_MODE:{scope:"title",begin:y,relevance:0}});function R(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function I(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function T(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=R,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function j(e,n){Array.isArray(e.illegal)&&(e.illegal=b(...e.illegal))}function L(e,n){if(e.match){if(e.begin||e.end)throw Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function B(e,n){void 0===e.relevance&&(e.relevance=1)}let C=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw Error("beforeMatch cannot be used with starts");let t=Object.assign({},e);Object.keys(e).forEach(n=>{delete e[n]}),e.keywords=t.keywords,e.begin=f(t.beforeMatch,u(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},D=["of","and","for","in","not","or","if","then","parent","list","value"],$={},P=e=>{console.error(e)},z=(e,...n)=>{console.log(`WARN: ${e}`,...n)},H=(e,n)=>{$[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),$[`${e}/${n}`]=!0)},U=Error();function Z(e,n,{key:t}){let a=0,i=e[t],r={},s={};for(let e=1;e<=n.length;e++)s[e+a]=i[e],r[e+a]=!0,a+=p(n[e-1]);e[t]=s,e[t]._emit=r,e[t]._multi=!0}function G(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw P("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),U;if("object"!=typeof e.beginScope||null===e.beginScope)throw P("beginScope must be object"),U;Z(e,e.begin,{key:"beginScope"}),e.begin=E(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw P("skip, excludeEnd, returnEnd not compatible with endScope: {}"),U;if("object"!=typeof e.endScope||null===e.endScope)throw P("endScope must be object"),U;Z(e,e.end,{key:"endScope"}),e.end=E(e.end,{joinWith:""})}}(e)}class F extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}let W=Symbol("nomatch"),K=function(e){let i=Object.create(null),r=Object.create(null),s=[],o=!0,l="Could not find the language '{}', did you forget to load/include a language module?",m={disableAutodetect:!0,name:"Plain text",contains:[]},_={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:c};function y(e){return _.noHighlightRe.test(e)}function x(e,n,t){let a="",i="";"object"==typeof n?(a=e,t=n.ignoreIllegals,i=n.language):(H("10.7.0","highlight(lang, code, ...args) has been deprecated."),H("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),i=e,a=n),void 0===t&&(t=!0);let r={code:a,language:i};$("before:highlight",r);let s=r.result?r.result:w(r.language,r.code,t);return s.code=r.code,$("after:highlight",s),s}function w(e,r,s,c){let u=Object.create(null);function d(){if(!O.keywords){R.addText($);return}let e=0;O.keywordPatternRe.lastIndex=0;let n=O.keywordPatternRe.exec($),t="";for(;n;){t+=$.substring(e,n.index);let a=v.case_insensitive?n[0].toLowerCase():n[0],i=O.keywords[a];if(i){let[e,r]=i;if(R.addText(t),t="",u[a]=(u[a]||0)+1,u[a]<=7&&(z+=r),e.startsWith("_"))t+=n[0];else{let t=v.classNameAliases[e]||e;f(n[0],t)}}else t+=n[0];e=O.keywordPatternRe.lastIndex,n=O.keywordPatternRe.exec($)}t+=$.substring(e),R.addText(t)}function h(){null!=O.subLanguage?function(){if(""===$)return;let e=null;if("string"==typeof O.subLanguage){if(!i[O.subLanguage]){R.addText($);return}e=w(O.subLanguage,$,!0,M[O.subLanguage]),M[O.subLanguage]=e._top}else e=N($,O.subLanguage.length?O.subLanguage:null);O.relevance>0&&(z+=e.relevance),R.__addSublanguage(e._emitter,e.language)}():d(),$=""}function f(e,n){""!==e&&(R.startScope(n),R.addText(e),R.endScope())}function b(e,n){let t=1,a=n.length-1;for(;t<=a;){if(!e._emit[t]){t++;continue}let a=v.classNameAliases[e[t]]||e[t],i=n[t];a?f(i,a):($=i,d(),$=""),t++}}function m(e,n){return e.scope&&"string"==typeof e.scope&&R.openNode(v.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(f($,v.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),$=""):e.beginScope._multi&&(b(e.beginScope,n),$="")),O=Object.create(e,{parent:{value:O}})}let y={};function x(t,a){let i=a&&a[0];if($+=t,null==i)return h(),0;if("begin"===y.type&&"end"===a.type&&y.index===a.index&&""===i){if($+=r.slice(a.index,a.index+1),!o){let n=Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=y.rule,n}return 1}if(y=a,"begin"===a.type)return function(e){let t=e[0],a=e.rule,i=new n(a);for(let n of[a.__beforeBegin,a["on:begin"]])if(n&&(n(e,i),i.isMatchIgnored))return 0===O.matcher.regexIndex?($+=t[0],1):(Z=!0,0);return a.skip?$+=t:(a.excludeBegin&&($+=t),h(),a.returnBegin||a.excludeBegin||($=t)),m(a,e),a.returnBegin?0:t.length}(a);if("illegal"!==a.type||s){if("end"===a.type){let e=function(e){let t=e[0],a=r.substring(e.index),i=function e(t,a,i){let r=function(e,n){let t=e&&e.exec(n);return t&&0===t.index}(t.endRe,i);if(r){if(t["on:end"]){let e=new n(t);t["on:end"](a,e),e.isMatchIgnored&&(r=!1)}if(r){for(;t.endsParent&&t.parent;)t=t.parent;return t}}if(t.endsWithParent)return e(t.parent,a,i)}(O,e,a);if(!i)return W;let s=O;O.endScope&&O.endScope._wrap?(h(),f(t,O.endScope._wrap)):O.endScope&&O.endScope._multi?(h(),b(O.endScope,e)):s.skip?$+=t:(s.returnEnd||s.excludeEnd||($+=t),h(),s.excludeEnd&&($=t));do O.scope&&R.closeNode(),O.skip||O.subLanguage||(z+=O.relevance),O=O.parent;while(O!==i.parent);return i.starts&&m(i.starts,e),s.returnEnd?0:t.length}(a);if(e!==W)return e}}else{let e=Error('Illegal lexeme "'+i+'" for mode "'+(O.scope||"<unnamed>")+'"');throw e.mode=O,e}if("illegal"===a.type&&""===i)return 1;if(U>1e5&&U>3*a.index)throw Error("potential infinite loop, way more iterations than matches");return $+=i,i.length}let v=k(e);if(!v)throw P(l.replace("{}",e)),Error('Unknown language: "'+e+'"');let A=function(e){function n(n,t){return RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=p(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);let e=this.regexes.map(e=>e[1]);this.matcherRe=n(E(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;let n=this.matcherRe.exec(e);if(!n)return null;let t=n.findIndex((e,n)=>n>0&&void 0!==e),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];let n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){let n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition()){if(t&&t.index===this.lastIndex);else{let n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),function t(r,s){if(r.isCompiled)return r;[I,L,G,C].forEach(e=>e(r,s)),e.compilerExtensions.forEach(e=>e(r,s)),r.__beforeBegin=null,[T,j,B].forEach(e=>e(r,s)),r.isCompiled=!0;let o=null;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),o=r.keywords.$pattern,delete r.keywords.$pattern),o=o||/\w+/,r.keywords&&(r.keywords=function e(n,t,a="keyword"){let i=Object.create(null);return"string"==typeof n?r(a,n.split(" ")):Array.isArray(n)?r(a,n):Object.keys(n).forEach(function(a){Object.assign(i,e(n[a],t,a))}),i;function r(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach(function(n){var t,a;let r=n.split("|");i[r[0]]=[e,(t=r[0],(a=r[1])?Number(a):D.includes(t.toLowerCase())?0:1)]})}}(r.keywords,e.case_insensitive)),r.keywordPatternRe=n(o,!0),s&&(r.begin||(r.begin=/\B|\b/),r.beginRe=n(r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(r.endRe=n(r.end)),r.terminatorEnd=g(r.end)||"",r.endsWithParent&&s.terminatorEnd&&(r.terminatorEnd+=(r.end?"|":"")+s.terminatorEnd)),r.illegal&&(r.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(e){var n;return((n="self"===e?r:e).variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return a(n,{variants:null},e)})),n.cachedVariants)?n.cachedVariants:!function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(n)?Object.isFrozen(n)?a(n):n:a(n,{starts:n.starts?a(n.starts):null})})),r.contains.forEach(function(e){t(e,r)}),r.starts&&t(r.starts,s),r.matcher=function(e){let n=new i;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(r),r}(e)}(v),S="",O=c||A,M={},R=new _.__emitter(_);!function(){let e=[];for(let n=O;n!==v;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach(e=>R.openNode(e))}();let $="",z=0,H=0,U=0,Z=!1;try{if(v.__emitTokens)v.__emitTokens(r,R);else{for(O.matcher.considerAll();;){U++,Z?Z=!1:O.matcher.considerAll(),O.matcher.lastIndex=H;let e=O.matcher.exec(r);if(!e)break;let n=r.substring(H,e.index),t=x(n,e);H=e.index+t}x(r.substring(H))}return R.finalize(),S=R.toHTML(),{language:e,value:S,relevance:z,illegal:!1,_emitter:R,_top:O}}catch(n){if(n.message&&n.message.includes("Illegal"))return{language:e,value:t(r),illegal:!0,relevance:0,_illegalBy:{message:n.message,index:H,context:r.slice(H-100,H+100),mode:n.mode,resultSoFar:S},_emitter:R};if(o)return{language:e,value:t(r),illegal:!1,relevance:0,errorRaised:n,_emitter:R,_top:O};throw n}}function N(e,n){n=n||_.languages||Object.keys(i);let a=function(e){let n={value:t(e),illegal:!1,relevance:0,_top:m,_emitter:new _.__emitter(_)};return n._emitter.addText(e),n}(e),r=n.filter(k).filter(R).map(n=>w(n,e,!1));r.unshift(a);let[s,o]=r.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(k(e.language).supersetOf===n.language)return 1;if(k(n.language).supersetOf===e.language)return -1}return 0});return s.secondBest=o,s}function v(e){let n=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";let t=_.languageDetectRe.exec(n);if(t){let n=k(t[1]);return n||(z(l.replace("{}",t[1])),z("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>y(e)||k(e))}(e);if(y(n))return;if($("before:highlightElement",{el:e,language:n}),e.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e);return}if(e.children.length>0&&(_.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),_.throwUnescapedHTML))throw new F("One of your code blocks includes unescaped HTML.",e.innerHTML);let t=e.textContent,a=n?x(t,{language:n,ignoreIllegals:!0}):N(t);e.innerHTML=a.value,e.dataset.highlighted="yes",function(e,n,t){let a=n&&r[n]||t;e.classList.add("hljs"),e.classList.add(`language-${a}`)}(e,n,a.language),e.result={language:a.language,re:a.relevance,relevance:a.relevance},a.secondBest&&(e.secondBest={language:a.secondBest.language,relevance:a.secondBest.relevance}),$("after:highlightElement",{el:e,result:a,text:t})}let A=!1;function S(){if("loading"===document.readyState){A=!0;return}document.querySelectorAll(_.cssSelector).forEach(v)}function k(e){return i[e=(e||"").toLowerCase()]||i[r[e]]}function O(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{r[e.toLowerCase()]=n})}function R(e){let n=k(e);return n&&!n.disableAutodetect}function $(e,n){s.forEach(function(t){t[e]&&t[e](n)})}for(let n in"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){A&&S()},!1),Object.assign(e,{highlight:x,highlightAuto:N,highlightAll:S,highlightElement:v,highlightBlock:function(e){return H("10.7.0","highlightBlock will be removed entirely in v12.0"),H("10.7.0","Please use highlightElement now."),v(e)},configure:function(e){_=a(_,e)},initHighlighting:()=>{S(),H("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){S(),H("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(n,t){let a=null;try{a=t(e)}catch(e){if(P("Language definition for '{}' could not be registered.".replace("{}",n)),o)P(e);else throw e;a=m}a.name||(a.name=n),i[n]=a,a.rawDefinition=t.bind(null,e),a.aliases&&O(a.aliases,{languageName:n})},unregisterLanguage:function(e){for(let n of(delete i[e],Object.keys(r)))r[n]===e&&delete r[n]},listLanguages:function(){return Object.keys(i)},getLanguage:k,registerAliases:O,autoDetection:R,inherit:a,addPlugin:function(e){var n;(n=e)["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=e=>{n["before:highlightBlock"](Object.assign({block:e.el},e))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=e=>{n["after:highlightBlock"](Object.assign({block:e.el},e))}),s.push(e)},removePlugin:function(e){let n=s.indexOf(e);-1!==n&&s.splice(n,1)}}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="11.10.0",e.regex={concat:f,lookahead:u,either:b,optional:h,anyNumberOfTimes:d},M)"object"==typeof M[n]&&function e(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(t=>{let a=n[t],i=typeof a;"object"!==i&&"function"!==i||Object.isFrozen(a)||e(a)}),n}(M[n]);return Object.assign(e,M),e},X=K({});X.newInstance=()=>K({}),e.exports=X,X.HighlightJS=X,X.default=X},6067:function(e,n,t){"use strict";var a=t(4581);n.Z=a},3119:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});let a="[A-Za-z$_][0-9A-Za-z$_]*",i=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],s=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],l=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],g=[].concat(l,s,o);function u(e){var n;let t=e.regex,u=(e,{after:n})=>{let t="</"+e[0].slice(1);return -1!==e.input.indexOf(t,n)},d=/<[A-Za-z0-9\\._:-]+/,h=/\/[A-Za-z0-9\\._:-]+>|\/>/,f={$pattern:a,keyword:i,literal:r,built_in:g,"variable.language":c},b="[0-9](_?[0-9])*",p=`\\.(${b})`,m="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",E={className:"number",variants:[{begin:`(\\b(${m})((${p})|\\.)?|(${p}))[eE][+-]?(${b})\\b`},{begin:`\\b(${m})\\b((${p})\\b|\\.)?|(${p})\\b`},{begin:"\\\b(0|[1-9](_?[0-9])*)n\\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},_={className:"subst",begin:"\\$\\{",end:"\\}",keywords:f,contains:[]},y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,_],subLanguage:"xml"}},x={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,_],subLanguage:"css"}},w={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,_],subLanguage:"graphql"}},N={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,_]},v={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},A=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,x,w,N,{match:/\$\d+/},E];_.contains=A.concat({begin:/\{/,end:/\}/,keywords:f,contains:["self"].concat(A)});let S=[].concat(v,_.contains),k=S.concat([{begin:/(\s*)\(/,end:/\)/,keywords:f,contains:["self"].concat(S)}]),O={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:k},M={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...s,...o]}},I={match:t.concat(/\b/,(n=[...l,"super","import"].map(e=>`${e}\\s*\\(`),t.concat("(?!",n.join("|"),")")),a,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},T={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},j="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",L={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(j)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[O]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:f,exports:{PARAMS_CONTAINS:k,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,x,w,N,v,{match:/\$\d+/},E,R,{className:"attr",begin:a+t.lookahead(":"),relevance:0},L,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[v,e.REGEXP_MODE,{className:"function",begin:j,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:k}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d,"on:begin":(e,n)=>{let t;let a=e[0].length+e.index,i=e.input[a];if("<"===i||","===i){n.ignoreMatch();return}">"!==i||u(e,{after:a})||n.ignoreMatch();let r=e.input.substring(a);if((t=r.match(/^\s*=/))||(t=r.match(/^\s+extends\s+/))&&0===t.index){n.ignoreMatch();return}},end:h}],subLanguage:"xml",contains:[{begin:d,end:h,skip:!0,contains:["self"]}]}]},{variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[O],illegal:/%/},{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[O,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},T,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[O]},I,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},M,{match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},O]},{match:/\$[(.]/}]}}},510:function(e,n,t){"use strict";function a(e){let n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},r=e.inherit(i,{begin:/\(/,end:/\)/}),s=e.inherit(e.APOS_STRING_MODE,{className:"string"}),o=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[a]},{begin:/'/,end:/'/,contains:[a]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,o,s,r,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,r,o,s]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},a,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[o]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}t.d(n,{Z:function(){return a}})}}]);