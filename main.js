/*
This is the single file, minified version of the Sesame runtime. It is the same as the old package, but with new functionality.

©️ 2021-2023 Naflouille Creations - All Rights Reserved.
*/


var $sesame=$sesame||{};$sesame.scope={};$sesame.createTemplateTagFirstArg=function(a){return a.raw=a};$sesame.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};$sesame.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$sesame.arrayIterator=function(a){return{next:$sesame.arrayIteratorImpl(a)}};
$sesame.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return $sesame.arrayIterator(a);throw Error(String(a)+" is not an iterable or ArrayLike");};$sesame.ASSUME_ES5=!1;$sesame.ASSUME_NO_NATIVE_MAP=!1;$sesame.ASSUME_NO_NATIVE_SET=!1;$sesame.SIMPLE_FROUND_POLYFILL=!1;$sesame.ISOLATE_POLYFILLS=!1;$sesame.FORCE_POLYFILL_PROMISE=!1;$sesame.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$sesame.defineProperty=$sesame.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$sesame.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$sesame.global=$sesame.getGlobal(this);
$sesame.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$sesame.TRUST_ES6_POLYFILLS=!$sesame.ISOLATE_POLYFILLS||$sesame.IS_SYMBOL_NATIVE;$sesame.polyfills={};$sesame.propertyToPolyfillSymbol={};$sesame.POLYFILL_PREFIX="$jscp$";var $sesame$lookupPolyfilledValue=function(a,b,c){if(!c||null!=a){c=$sesame.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]}};
$sesame.polyfill=function(a,b,c,d){b&&($sesame.ISOLATE_POLYFILLS?$sesame.polyfillIsolated(a,b,c,d):$sesame.polyfillUnisolated(a,b,c,d))};$sesame.polyfillUnisolated=function(a,b,c,d){c=$sesame.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))return;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$sesame.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$sesame.polyfillIsolated=function(a,b,c,d){var e=a.split(".");a=1===e.length;d=e[0];d=!a&&d in $sesame.polyfills?$sesame.polyfills:$sesame.global;for(var g=0;g<e.length-1;g++){var f=e[g];if(!(f in d))return;d=d[f]}e=e[e.length-1];c=$sesame.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?$sesame.defineProperty($sesame.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===$sesame.propertyToPolyfillSymbol[e]&&(c=1E9*Math.random()>>>0,$sesame.propertyToPolyfillSymbol[e]=$sesame.IS_SYMBOL_NATIVE?
$sesame.global.Symbol(e):$sesame.POLYFILL_PREFIX+c+"$"+e),$sesame.defineProperty(d,$sesame.propertyToPolyfillSymbol[e],{configurable:!0,writable:!0,value:b})))};$sesame.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(c){}return!1};
$sesame.setPrototypeOf=$sesame.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$sesame.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;$sesame.generator={};$sesame.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};
$sesame.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};$sesame.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$sesame.generator.Context.prototype.stop_=function(){this.isRunning_=!1};
$sesame.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$sesame.generator.Context.prototype.next_=function(a){this.yieldResult=a};$sesame.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$sesame.generator.Context.prototype["return"]=function(a){this.abruptCompletion_={"return":a};this.nextAddress=this.finallyAddress_};
$sesame.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$sesame.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};$sesame.generator.Context.prototype.yieldAll=function(a,b){var c=$sesame.makeIterator(a),d=c.next();$sesame.generator.ensureIteratorResultIsObject_(d);if(d.done)this.yieldResult=d.value,this.nextAddress=b;else return this.yieldAllIterator_=c,this.yield(d.value,b)};
$sesame.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$sesame.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};$sesame.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$sesame.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$sesame.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$sesame.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$sesame.generator.Context.prototype.enterFinallyBlock=function(a,b,c){c?this.finallyContexts_[c]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$sesame.generator.Context.prototype.leaveFinallyBlock=function(a,b){var c=this.finallyContexts_.splice(b||0)[0];if(c=this.abruptCompletion_=this.abruptCompletion_||c){if(c.isException)return this.jumpToErrorHandler_();void 0!=c.jumpTo&&this.finallyAddress_<c.jumpTo?(this.nextAddress=c.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$sesame.generator.Context.prototype.forIn=function(a){return new $sesame.generator.Context.PropertyIterator(a)};
$sesame.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$sesame.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$sesame.generator.Engine_=function(a){this.context_=new $sesame.generator.Context;this.program_=a};
$sesame.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$sesame.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(c){return{value:c,done:!0}},a,this.context_["return"]);this.context_["return"](a);return this.nextStep_()};
$sesame.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$sesame.generator.Engine_.prototype.yieldAllStep_=function(a,b,c){try{var d=a.call(this.context_.yieldAllIterator_,b);$sesame.generator.ensureIteratorResultIsObject_(d);if(!d.done)return this.context_.stop_(),d;var e=d.value}catch(g){return this.context_.yieldAllIterator_=null,this.context_.throw_(g),this.nextStep_()}this.context_.yieldAllIterator_=null;c.call(this.context_,e);return this.nextStep_()};
$sesame.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a["return"],done:!0}}return{value:void 0,done:!0}};
$sesame.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this["throw"]=function(b){return a.throw_(b)};this["return"]=function(b){return a.return_(b)};this[Symbol.iterator]=function(){return this}};$sesame.generator.createGenerator=function(a,b){var c=new $sesame.generator.Generator_(new $sesame.generator.Engine_(b));$sesame.setPrototypeOf&&a.prototype&&$sesame.setPrototypeOf(c,a.prototype);return c};
$sesame.asyncExecutePromiseGenerator=function(a){function b(d){return a.next(d)}function c(d){return a["throw"](d)}return new Promise(function(d,e){function g(f){f.done?d(f.value):Promise.resolve(f.value).then(b,c).then(g,e)}g(a.next())})};$sesame.asyncExecutePromiseGeneratorFunction=function(a){return $sesame.asyncExecutePromiseGenerator(a())};$sesame.asyncExecutePromiseGeneratorProgram=function(a){return $sesame.asyncExecutePromiseGenerator(new $sesame.generator.Generator_(new $sesame.generator.Engine_(a)))};
var __Path__="https://raw.githubusercontent.com/W0lfan/sesame/main/database/",__LINKS__={codes:"codes",users:"users",mods:"mods",communities:"communities",ships:"ships"},__Version__="0.0.1";function fetchData(a){return fetch(a).then(function(b){if(!b.ok)throw Error("Network response was not ok");return b.json()})}
function FetchDataFromDatabase(a,b){var c,d,e,g;return $sesame.asyncExecutePromiseGeneratorProgram(function(f){if(1==f.nextAddress){if(!__LINKS__.hasOwnProperty(a))return console.error('Error: "'+a+'" key not found in the object.\nAvailable keys: '+Object.keys(__LINKS__).join(", ")),f["return"]();c=__Path__+a+".json";f.setCatchFinallyBlocks(2);return f.yield(fetchData(c),4)}if(2!=f.nextAddress){d=f.yieldResult;if(1===b)return f["return"](d);b=b.map(function(k){return k.toLowerCase()});e=d.filter(function(k){return b.some(function(h){return k.name.toLowerCase().includes(h)||
k.description&&k.description.toLowerCase().includes(h.toLowerCase())||k.author&&k.author.some(function(l){return l&&l.name.toLowerCase().includes(h.toLowerCase())})})});console.log("Requsted to search "+b+" in "+a);return f["return"](e)}g=f.enterCatchBlock();console.error("Fetch error:",g);f.jumpToEnd()})}
function QuerySpecific(a,b){var c,d,e,g,f,k;return $sesame.asyncExecutePromiseGeneratorProgram(function(h){if(1==h.nextAddress)return c="https://raw.githubusercontent.com/W0lfan/sesame/main/database/"+b+".json",h.setCatchFinallyBlocks(2),h.yield(fetchData(c),4);if(2!=h.nextAddress){d=h.yieldResult;e=$sesame.makeIterator(d);for(g=e.next();!g.done;g=e.next())if(f=g.value,f.name&&f.name==a)return h["return"](f);return h.leaveTryBlock(0)}k=h.enterCatchBlock();console.error("Fetch error:",k);h.jumpToEnd()})}
function SearchInDatabase(a,b){return function(){var c;return $sesame.asyncExecutePromiseGeneratorProgram(function(d){if(1==d.nextAddress)return d.yield(FetchDataFromDatabase(b,[a]),2);c=d.yieldResult;return d["return"](c)})}()}module.exports={search:{SearchInDatabase:SearchInDatabase},database:{FetchDataFromDatabase:FetchDataFromDatabase,QuerySpecific:QuerySpecific,__LINKS__:__LINKS__,__Path__:__Path__,__Version__:__Version__}};
