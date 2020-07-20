(function ymapsInit(e,t){var n=this,r={ns:{},supports:{},env:e,project:{preload:["package.system"],combineBatchSize:500}},o=.01;r.performance=function(e){function t(){b=b||setTimeout(n,_)}function n(){clearTimeout(b),b=null;var e=r();if(e){var n=s+"/vars="+e+"/*";if(!a||!navigator.sendBeacon(i,n)){var o=new Image,c=(new Date).getTime()+Math.round(100*Math.random());o.src=i+"/rnd="+c+n}t()}}function r(){var e=[];return o(e,v),o(e,p),e.join(",")}function o(e,t){for(var n in t)if(t.hasOwnProperty(n)&&t[n].length&&(e.push(n+"="+t[n].shift()),e.length>=y))return}var i,s,a,c,u={exports:{}},l=(u.exports,window.performance||Object.create(null)),f=l.now?l.now.bind(l):function(){return Date.now()},d=l.getEntriesByType?function(e){return l.getEntriesByType("resource").filter(function(t){return t.name===e})[0]}:function(){},p={},v={},h={initjs:"i",mapjs:"m",combine_s:"cs",combine_m:"cm",combine_l:"cl"},m={eval:"e",duration:"d",cached:"c",encodedSize:"esz",decodedSize:"dsz",responseDuration:"res",requestDuration:"req"},g={statistics:{combine:{total:0,size:0,modules:0}},initTimings:{},now:f,getResourceTimings:function(e){return d(e)||{}},init:function(e){i=e.url,s="/pid=443/cid=73188/dtype=stred"+e.data,a=Boolean(e.useSendBeacon&&navigator.sendBeacon),c=e.enable,g.initTimings=g.getResourceTimings(e.initUrl),g.saveResourceTimings("initjs",g.initTimings,{size:!1,cached:!1})},saveMeasure:function(e,n){if(c){var r=/^@/.test(e);if(r){var o=e.replace(/^@/,"").split(".");e=(h[o[0]]||o[0])+"."+(m[o[1]]||o[1])}if(n=Math.round(n),!isNaN(n)){var i=r?p:v;i[e]=i[e]||[],i[e].push(n),t()}}},startMeasure:function(e,t){t="undefined"==typeof t?f():t;var n=!1;return{finish:function(r){n||(r="undefined"==typeof r?f():r,g.saveMeasure(e,r-t),n=!0)}}},saveResourceTimings:function(e,t,n){var r="object"==typeof t?t:d(t);if(r&&(n=n||{},e=e.replace(/^@?/,"@"),this.saveMeasure(e+".duration",r.duration),r.responseStart)){var o=0===r.transferSize?1:0;this.saveMeasure(e+".responseDuration",r.responseEnd-r.responseStart),this.saveMeasure(e+".requestDuration",r.responseStart-r.requestStart),n.cached!==!1&&this.saveMeasure(e+".cached",o),n.size===!1||o||(this.saveMeasure(e+".encodedSize",r.encodedBodySize/1024),this.saveMeasure(e+".decodedSize",r.decodedBodySize/1024))}}},y=40,_=5e3,b=null;return window.addEventListener("beforeunload",function(){g.saveMeasure("combine.total",g.statistics.combine.total),g.saveMeasure("combine.modules",g.statistics.combine.modules),g.saveMeasure("combine.size",g.statistics.combine.size/1024),n()}),u.exports=g,u.exports}();var i=r.performance.startMeasure("@initjs.eval");r.count=function(e){function t(){r.push(arguments)}var n={exports:{}},r=(n.exports,[]),o=null,i=function(){(o||t).apply(null,arguments)};return i.provideImplementation=function(e){if(o)throw new Error("ym.count: implementation was already provided.");o=e(r)},n.exports=i,n.exports}(),r.vow=r.ns.vow=function(e){var t,r={exports:{}};r.exports;return function(e){var n,o=function(){var t=[],n=function(e){return t.push(e),1===t.length},r=function(){var e=t,n=0,r=t.length;for(t=[];n<r;)e[n++]()};if("function"==typeof setImmediate)return function(e){n(e)&&setImmediate(r)};if("object"==typeof process&&process.nextTick)return function(e){n(e)&&process.nextTick(r)};var o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=1,s=document.createTextNode("");return new o(r).observe(s,{characterData:!0}),function(e){n(e)&&(s.data=i*=-1)}}if(e.postMessage){var a=!0;if(e.attachEvent){var c=function(){a=!1};e.attachEvent("onmessage",c),e.postMessage("__checkAsync","*"),e.detachEvent("onmessage",c)}if(a){var u="__promise"+Math.random()+"_"+new Date,l=function(e){e.data===u&&(e.stopPropagation&&e.stopPropagation(),r())};return e.addEventListener?e.addEventListener("message",l,!0):e.attachEvent("onmessage",l),function(t){n(t)&&e.postMessage(u,"*")}}}var f=e.document;if("onreadystatechange"in f.createElement("script")){var d=function(){var e=f.createElement("script");e.onreadystatechange=function(){e.parentNode.removeChild(e),e=e.onreadystatechange=null,r()},(f.documentElement||f.body).appendChild(e)};return function(e){n(e)&&d()}}return function(e){n(e)&&setTimeout(r,0)}}(),i=function(e){o(function(){throw e})},s=function(e){return"function"==typeof e},a=function(e){return null!==e&&"object"==typeof e},c=Object.prototype.toString,u=Array.isArray||function(e){return"[object Array]"===c.call(e)},l=function(e){for(var t=[],n=0,r=e.length;n<r;)t.push(n++);return t},f=Object.keys||function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},d=function(e){var t=function(t){this.name=e,this.message=t};return t.prototype=new Error,t},p=function(e,t){return function(n){e.call(this,n,t)}},v=function(){this._promise=new m};v.prototype={promise:function(){return this._promise},resolve:function(e){this._promise.isResolved()||this._promise._resolve(e)},reject:function(e){this._promise.isResolved()||(_.isPromise(e)?(e=e.then(function(e){var t=_.defer();return t.reject(e),t.promise()}),this._promise._resolve(e)):this._promise._reject(e))},notify:function(e){this._promise.isResolved()||this._promise._notify(e)}};var h={PENDING:0,RESOLVED:1,FULFILLED:2,REJECTED:3},m=function(e){if(this._value=n,this._status=h.PENDING,this._fulfilledCallbacks=[],this._rejectedCallbacks=[],this._progressCallbacks=[],e){var t=this,r=e.length;e(function(e){t.isResolved()||t._resolve(e)},r>1?function(e){t.isResolved()||t._reject(e)}:n,r>2?function(e){t.isResolved()||t._notify(e)}:n)}};m.prototype={valueOf:function(){return this._value},isResolved:function(){return this._status!==h.PENDING},isFulfilled:function(){return this._status===h.FULFILLED},isRejected:function(){return this._status===h.REJECTED},then:function(e,t,n,r){var o=new v;return this._addCallbacks(o,e,t,n,r),o.promise()},"catch":function(e,t){return this.then(n,e,t)},fail:function(e,t){return this.then(n,e,t)},always:function(e,t){var n=this,r=function(){return e.call(this,n)};return this.then(r,r,t)},progress:function(e,t){return this.then(n,n,e,t)},spread:function(e,t,n){return this.then(function(t){return e.apply(this,t)},t,n)},done:function(e,t,n,r){this.then(e,t,n,r).fail(i)},delay:function(e){var t,n=this.then(function(n){var r=new v;return t=setTimeout(function(){r.resolve(n)},e),r.promise()});return n.always(function(){clearTimeout(t)}),n},timeout:function(e){var t=new v,n=setTimeout(function(){t.reject(new _.TimedOutError("timed out"))},e);return this.then(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise().always(function(){clearTimeout(n)}),t.promise()},_vow:!0,_resolve:function(e){if(!(this._status>h.RESOLVED)){if(e===this)return void this._reject(TypeError("Can't resolve promise with itself"));if(this._status=h.RESOLVED,e&&e._vow)return void(e.isFulfilled()?this._fulfill(e.valueOf()):e.isRejected()?this._reject(e.valueOf()):e.then(this._fulfill,this._reject,this._notify,this));if(a(e)||s(e)){var t;try{t=e.then}catch(n){return void this._reject(n)}if(s(t)){var r=this,o=!1;try{t.call(e,function(e){o||(o=!0,r._resolve(e))},function(e){o||(o=!0,r._reject(e))},function(e){r._notify(e)})}catch(n){o||this._reject(n)}return}}this._fulfill(e)}},_fulfill:function(e){this._status>h.RESOLVED||(this._status=h.FULFILLED,this._value=e,this._callCallbacks(this._fulfilledCallbacks,e),this._fulfilledCallbacks=this._rejectedCallbacks=this._progressCallbacks=n)},_reject:function(e){this._status>h.RESOLVED||(this._status=h.REJECTED,this._value=e,this._callCallbacks(this._rejectedCallbacks,e),this._fulfilledCallbacks=this._rejectedCallbacks=this._progressCallbacks=n)},_notify:function(e){this._callCallbacks(this._progressCallbacks,e)},_addCallbacks:function(e,t,r,o,i){r&&!s(r)?(i=r,r=n):o&&!s(o)&&(i=o,o=n);var a;this.isRejected()||(a={defer:e,fn:s(t)?t:n,ctx:i},this.isFulfilled()?this._callCallbacks([a],this._value):this._fulfilledCallbacks.push(a)),this.isFulfilled()||(a={defer:e,fn:r,ctx:i},this.isRejected()?this._callCallbacks([a],this._value):this._rejectedCallbacks.push(a)),this._status<=h.RESOLVED&&this._progressCallbacks.push({defer:e,fn:o,ctx:i})},_callCallbacks:function(e,t){var n=e.length;if(n){var r=this.isResolved(),i=this.isFulfilled(),s=this.isRejected();o(function(){for(var o,a,c,u=0;u<n;)if(o=e[u++],a=o.defer,c=o.fn){var l,f=o.ctx;try{l=f?c.call(f,t):c(t)}catch(d){a.reject(d);continue}r?a.resolve(l):a.notify(l)}else i?a.resolve(t):s?a.reject(t):a.notify(t)})}}};var g={cast:function(e){return _.cast(e)},all:function(e){return _.all(e)},race:function(e){return _.anyResolved(e)},resolve:function(e){return _.resolve(e)},reject:function(e){return _.reject(e)}};for(var y in g)g.hasOwnProperty(y)&&(m[y]=g[y]);var _={Deferred:v,Promise:m,defer:function(){return new v},when:function(e,t,n,r,o){return _.cast(e).then(t,n,r,o)},fail:function(e,t,r){return _.when(e,n,t,r)},always:function(e,t,n){return _.when(e).always(t,n)},progress:function(e,t,n){return _.when(e).progress(t,n)},spread:function(e,t,n,r){return _.when(e).spread(t,n,r)},done:function(e,t,n,r,o){_.when(e).done(t,n,r,o)},isPromise:function(e){return a(e)&&s(e.then)},cast:function(e){return e&&e._vow?e:_.resolve(e)},valueOf:function(e){return e&&s(e.valueOf)?e.valueOf():e},isFulfilled:function(e){return!e||!s(e.isFulfilled)||e.isFulfilled()},isRejected:function(e){return!(!e||!s(e.isRejected))&&e.isRejected()},isResolved:function(e){return!e||!s(e.isResolved)||e.isResolved()},resolve:function(e){var t=_.defer();return t.resolve(e),t.promise()},fulfill:function(e){var t=_.defer(),n=t.promise();return t.resolve(e),n.isFulfilled()?n:n.then(null,function(e){return e})},reject:function(e){var t=_.defer();return t.reject(e),t.promise()},invoke:function(t,n){var r,o=Math.max(arguments.length-1,0);if(o){r=Array(o);for(var i=0;i<o;)r[i++]=arguments[i]}try{return _.resolve(r?t.apply(e,r):t.call(e))}catch(s){return _.reject(s)}},all:function(e){var t=new v,n=u(e),r=n?l(e):f(e),o=r.length,i=n?[]:{};if(!o)return t.resolve(i),t.promise();var s=o;return _._forEach(e,function(e,n){i[r[n]]=e,--s||t.resolve(i)},t.reject,t.notify,t,r),t.promise()},allResolved:function(e){var t=new v,n=u(e),r=n?l(e):f(e),o=r.length,i=n?[]:{};if(!o)return t.resolve(i),t.promise();var s=function(){--o||t.resolve(e)};return _._forEach(e,s,s,t.notify,t,r),t.promise()},allPatiently:function(e){return _.allResolved(e).then(function(){var t,n,r,o,i=u(e),s=i?l(e):f(e),a=s.length,c=0;if(!a)return i?[]:{};for(;c<a;)r=s[c++],o=e[r],_.isRejected(o)?(t||(t=i?[]:{}),i?t.push(o.valueOf()):t[r]=o.valueOf()):t||((n||(n=i?[]:{}))[r]=_.valueOf(o));if(t)throw t;return n})},any:function(e){var t=new v,n=e.length;if(!n)return t.reject(Error()),t.promise();var r,o=0;return _._forEach(e,t.resolve,function(e){o||(r=e),++o===n&&t.reject(r)},t.notify,t),t.promise()},anyResolved:function(e){var t=new v,n=e.length;return n?(_._forEach(e,t.resolve,t.reject,t.notify,t),t.promise()):(t.reject(Error()),t.promise())},delay:function(e,t){return _.resolve(e).delay(t)},timeout:function(e,t){return _.resolve(e).timeout(t)},_forEach:function(e,t,n,r,o,i){for(var s=i?i.length:e.length,a=0;a<s;)_.when(e[i?i[a]:a],p(t,a),n,r,o),++a},TimedOutError:d("TimedOut")};_.__nextTick__=o;var b=!0;"object"==typeof r&&"object"==typeof r.exports&&(r.exports=_,b=!1),"object"==typeof modules&&s(modules.define)&&(modules.define("vow",function(e){e(_)}),b=!1),"function"==typeof t&&(t(function(e,t,n){n.exports=_}),b=!1),b&&(e.vow=_)}("undefined"!=typeof window?window:n),r.exports}(),r.utils=function(e){function t(t){return e[t]}var n={exports:{}},r=n.exports,o=t("vow"),i=Object.prototype.hasOwnProperty;return r.nextTick=o.__nextTick__,o.__nextTick__=void 0,r.isArray=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},r.extend=Object.assign?Object.assign:function(e){for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(null!=r)for(var o in r)i.call(r,o)&&(e[o]=r[o])}return e},r.setDeep=function(e,t,n){for(var r=t.split("."),o=0;o<r.length-1;o++){var i=r[o];e[i]=e[i]||{},e=e[i]}var s=r[r.length-1];e[s]=n},r.createPackage=function(e,t,n){var o=r.registerImports({},e,t);return n&&(o.__expand={depends:e,imports:t}),o},r.registerImports=function(e,t,n){for(var o=0;o<t.length;o++)n[o].__expand?r.registerImports(e,n[o].__expand.depends,n[o].__expand.imports):r.setDeep(e,t[o],n[o]);return e},n.exports}({vow:r.vow}),function(){function e(e){return"undefined"==typeof f[e]?f[e]=t(e):f[e]}function t(e){return n(e)||n(d+i(e))||n(r.env.browser.cssPrefix+i(e))}function n(e){return"undefined"!=typeof o().style[e]?e:null}function o(){return c||(c=document.createElement("div"))}function i(e){return e?e.substr(0,1).toUpperCase()+e.substr(1):e}function s(t){var n=e(t);return n&&n!=t&&(n="-"+d+"-"+t),n}function a(t){return u[t]&&e("transitionProperty")?s(u[t]):null}var c,u={transform:"transform",opacity:"opacity",transitionTimingFunction:"transition-timing-function",userSelect:"user-select",height:"height"},l={},f={},d=r.env.browser.cssPrefix.toLowerCase();r.supports.css={checkProperty:e,checkTransitionProperty:function(e){return"undefined"==typeof l[e]?l[e]=a(e):l[e]},checkTransitionAvailability:a}}(),r.supports.csp={isSupported:"undefined"!=typeof Blob&&"undefined"!=typeof URL,isNonceSupported:r.env.browser.name&&r.env.browser.version?!(r.env.browser.name.search("Safari")!=-1&&parseInt(r.env.browser.version)<10):null},function(){function e(){if(!window.WebGLRenderingContext)return!1;var e={"Samsung Internet":!0,AndroidBrowser:!0},t="Webkit"==r.env.browser.engine&&+r.env.browser.engineVersion<537;return!t&&!e[r.env.browser.name]}function t(){if(!e())return null;var t,n;try{var r=document.createElement("canvas");n=r.getContext(t="webgl",o),n||(n=r.getContext(t="experimental-webgl",o),n||(t=null))}catch(i){t=null}return t?{contextName:t,context:n}:null}function n(e,t){e.width=226,e.height=256,t.fillStyle="#fff",t.fillRect(0,0,150,150),t.globalCompositeOperation="xor",t.fillStyle="#f00",t.fillRect(10,10,100,100),t.fillStyle="#0f0",t.fillRect(50,50,100,100);for(var n=t.getImageData(49,49,2,2),r=[],o=0;o<16;o++)r.push(n.data[o]);return"0x0x0x0x0x0x0x0x0x0x0x0x0x255x0x255"==r.join("x")}var o={failIfMajorPerformanceCaveat:!0,antialias:!1},i={};r.supports.graphics={hasSvg:function(){return"svg"in i||(i.svg=document.implementation&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")),i.svg},hasCanvas:function(){if(!("canvas"in i)){var e=document.createElement("canvas"),t="getContext"in e?e.getContext("2d"):null;i.canvas=!!t&&n(e,t)}return i.canvas},hasWebGl:function(){return"webgl"in i||(i.webgl=t()),i.webgl},redetect:function(){i={}},getWebGlContextName:function(){return i.webgl&&i.webgl.contextName}}}(),function(){function e(){var e=!0;"MacOS"==r.env.browser.osFamily&&/^10\.[0-8](\.|$)/.test(r.env.browser.osVersion)&&(e=!1,t("OldMac"));var i=["requestAnimationFrame","Worker","URL","Blob","XMLHttpRequest","Set","Map","WebAssembly"];i.forEach(function(n){window[n]||(e=!1,t(n))}),"function"!=typeof Math.trunc&&(e=!1,t("MathTrunc"));var s=r.supports.graphics.hasWebGl();if(!s||"webgl"!==s.contextName)return t("hasWebGl"),!1;var a=s.context;0==a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)&&(e=!1,t("MAX_VERTEX_TEXTURE_IMAGE_UNITS")),a.getExtension("OES_vertex_array_object")||(e=!1,t("OES_vertex_array_object")),a.getExtension("OES_standard_derivatives")||(e=!1,t("OES_standard_derivatives"));var c=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT);if(c&&0!=c.precision||(e=!1,t("highp")),!n()){var u=o();e=!1,r.count("error",{path:["vectorEngine.drawPointsError",r.env.browser.platform,r.env.browser.name,u.vendor,u.renderer].join("."),share:1})}return e}function t(e){var t=o();r.count("error",{path:["vectorEngine.reasonsVectorNotSupported",e,r.env.browser.platform,r.env.browser.name,t.vendor,t.renderer].join("."),share:.1})}function n(){var e=document.createElement("canvas");e.width=1,e.height=1;var t=e.getContext("webgl",{alpha:!1,depth:!1,antialias:!1}),n=t.createShader(t.VERTEX_SHADER);t.shaderSource(n,"#version 100\nattribute vec2 p;\nvoid main() {\n    gl_Position = vec4(p,0,1);\n    gl_PointSize = 1.0;\n}"),t.compileShader(n);var r=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(r,"#version 100\nvoid main() {\n    gl_FragColor = vec4(1, 0, 0, 1);\n}"),t.compileShader(r);var o=t.createProgram();t.attachShader(o,n),t.attachShader(o,r),t.bindAttribLocation(o,0,"p"),t.linkProgram(o);var i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.clearColor(0,1,0,1),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(o),t.drawArrays(t.POINTS,0,1);var s=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s),255===s[0]}function o(){var e={},t=r.supports.graphics.hasWebGl();if(!t)return e;var n=t.context,o=n.getExtension("WEBGL_debug_renderer_info");return o&&(e.vendor=n.getParameter(o.UNMASKED_VENDOR_WEBGL).replace(/\W/g,"_"),e.renderer=n.getParameter(o.UNMASKED_RENDERER_WEBGL).replace(/\W/g,"_")),e}var i;r.supports.vector={isSupported:function(){return void 0===i&&(i=e()),i}}}(),r.supports.printPatchNeeded=!r.supports.css.checkProperty("printColorAdjust"),r.logger=function(e){function t(e,t){var n="";return r.env.debug&&(n+="("+e+"): "),n+=t}var n={exports:{}},o=(n.exports,"Yandex Maps JS API");return n.exports={assert:function(e,n){e||r.env.debug&&console.log(t(o,n))},log:function(e){r.env.debug&&console.log(t(o,e))},notice:function(e){r.env.debug&&console.info(t(o,e))},warning:function(e){r.env.debug&&console.warn(t(o,e))},error:function(e){console.error(t(o,e))},exception:function(e,n){throw new Error(t(e,n))}},n.exports}(),function(){var e=r.env.browser;e.documentMode=document.documentMode,e.isIE="MSIE"==e.name||"IEMobile"==e.name,e.isEdge="Edge"==e.engine,e.isChromium=e.base&&"chromium"==e.base.toLocaleLowerCase(),e.isSafari="Safari"==e.name;var t="Edge"==e.engine||"MSIE"==e.name&&e.osVersion>6.1||"IEMobile"==e.name&&e.engineVersion>=6;t?e.eventMapper="pointer":e.eventMapper="touchMouse",e.androidBrokenBuild="AndroidBrowser"==e.name&&"534.30"==e.engineVersion;window.devicePixelRatio||screen.deviceXDPI&&screen.deviceXDPI/96||1;e.graphicsRenderEngine="svg",e.transformTransition="Android"==e.osFamily||"iOS"==e.osFamily||"MSIE"==e.name||e.isChromium,e.css3DTransform="WebKit"==e.engine&&!("Android"==e.osFamily&&parseFloat(e.osVersion)<3)||"Gecko"==e.engine&&parseInt(e.engineVersion.split(".")[0])>=10,e.unsupported="OperaMini"==e.name}();var s=function(e){function t(t){return e[t]}var n={exports:{}},o=(n.exports,t("vow"));return n.exports=function(e,t){var n=document.createElement("script"),i=o.defer();return"production"==r.env.type&&(n.crossOrigin="anonymous"),window[t]=function(e){delete window[t],n.parentElement.removeChild(n),i.resolve(e)},n.src=e,document.head.appendChild(n),i.promise()},n.exports}({vow:r.vow}),a="__jsonp_"+(r.env.namespace||"ymaps"+Date.now()),c=function(e){function t(t){return e[t]}function n(e){this._config=e,this._sandbox=null,this._definitionsByName=Object.create(null),this._definitionsByStorage=Object.create(null),this._definitionsByAlias=Object.create(null),this._queuedForFetching=Object.create(null),this._remoteLoadingAllowed=f.defer(),this._modulesMapLoaded=this._remoteLoadingAllowed.promise().then(this._config.fetchMap).spread(function(e,t){this._processLoadedMap(e),t()},this)}function r(e,t,n,r,o,i,s,a,c){this.state=e,this.alias=null,this.name=t,this.storage=n,this.key=r,this.depends=o,this.dynamicDepends=a,this.declaration=i,this.context=s,this.exports=e===m.DEFINED?c:void 0,this.resolvingPromise=void 0,this.fetchingDeferred=void 0}function o(e,t){if(!e.dynamicDepends)return h;var n=[];for(var r in e.dynamicDepends)if(p.call(e.dynamicDepends,r))for(var o=0,i=t.length;o<i;o++){var a=t[o];if(void 0!==a){var c=e.dynamicDepends[r](a);s(c)&&n.push(c)}}return n}function i(e,t,n){return p.call(e.dynamicDepends,t)?e.dynamicDepends[t].call(null,n):v}function s(e){return"string"==typeof e||c(e)}function a(e){return e&&"object"==typeof e?e.key+"@"+e.storage:String(e)}function c(e){return null!=e&&"object"==typeof e&&"string"==typeof e.key&&"string"==typeof e.storage}function u(e){var t=d.isArray(e);return"object"==typeof e&&!t&&p.call(e,"modules")?{modules:d.isArray(e.modules)?e.modules:[e.modules],data:e.data}:t?{modules:e}:{modules:[e]}}var l={exports:{}},f=(l.exports,t("vow")),d=t("./utils"),p=Object.prototype.hasOwnProperty,v={},h=Object.freeze([]),m={MENTIONED:1,QUEUED:2,FETCHING:3,DECLARED:4,RESOLVING:5,ERROR:6,DEFINED:7};return l.exports=n,n.prototype.allowRemoteLoading=function(){this._remoteLoadingAllowed.resolve()},n.prototype.isDefined=function(e){return Boolean(this._findDefinition(e))},n.prototype.preload=function(e){return e},n.prototype.define=function(e,t,n,o){var i,s,a,c;if("object"==typeof e){var u=e;e=u.name,s=u.storage,i=u.key,t=u.depends,n=u.declaration,o=u.context,a=u.dynamicDepends,c=u.exports}else 2===arguments.length&&(n=t,t=null);var l=new r(m.DECLARED,e,s,i,t,n,o,a,c);this._define(l)},n.prototype.defineSync=function(e){var t=new r(m.DEFINED,e.name,e.storage,e.key,null,null,null,null,e.module);this._define(t)},n.prototype._define=function(e){var t=this._definitionsByName[e.name];if(t){if(t.state!==m.FETCHING||e.state!==m.DECLARED){var n=new Error("ymaps.modules: redefinition of "+e.name);throw console.error(n),n}return t.state=m.DECLARED,t.declaration=e.declaration,void(t.context=e.context)}"function"==typeof e.depends&&(e.depends=e.depends.call({name:e.name},this._config.dependenciesContext)),e.depends=e.depends||h,this._definitionsByName[e.name]=e,this._saveDefinitionToStorage(e)},n.prototype._resolve=function(e,t){if(!e.dynamicDepends){if(e.state===m.DEFINED)return f.resolve(e.exports);if(e.state===m.ERROR)return f.reject(e.exports)}e.state<m.RESOLVING&&!e.resolvingPromise&&(e.resolvingPromise=this._resolveCore(e,t).always(function(t){return e.resolvingPromise=void 0,t}));var n=o(e,[t]);return f.all([e.resolvingPromise,this._require(n,t)]).then(function(){return e.state===m.DEFINED?f.resolve(e.exports):f.reject(e.exports)})},n.prototype._resolveCore=function(e,t){return this._fetchModule(e,t).then(function(){return e.state=m.RESOLVING,this._require(e.depends,t)},this).then(function(t){function n(t,n){e.state===m.RESOLVING&&(e.state=n?m.ERROR:m.DEFINED,e.exports=n||t),o&&o.resolve(),n&&console.warn("ymaps.modules: provide(undefined, error) is deprecated and will be removed, throw instead. Module `"+e.name+"`.")}var r,o;n.async=function(t){e.state===m.RESOLVING&&(r=t.then(function(e){n(e)},function(e){n(void 0,e)}))},n.provide=n,n.provideAsync=n.async,n.dynamicDepends=e.dynamicDepends?{getValue:function(t,n){var r=i(e,t,n);return r===v?f.reject(new Error("ymaps.modules: dynamic dependency `"+t+"` is not declared.")):s(r)?this._require([r],n):f.resolve([r])}.bind(this),getValueSync:function(t,n){var r=i(e,t,n);if(!s(r))return r;var o=this._findDefinition(r);return o?this._requireSingleSync(o,n):void 0}.bind(this)}:null;var a=e.context||{name:e.name,depends:e.depends};try{e.declaration.apply(a,[n].concat(t))}catch(c){return e.state=m.ERROR,void(e.exports=c)}return r?r:e.state!==m.DEFINED&&e.state!==m.ERROR?(console.warn("ymaps.modules: asynchronous provide is deprecated and will be removed. Module `"+e.name+"`."),o=f.defer(),o.promise()):void 0},this)},n.prototype.require=function(e,t,n,r){var o="object"==typeof e&&!d.isArray(e),i=1===arguments.length;o&&(t=e.successCallback,n=e.errorCallback,r=e.context,i=!t&&!n),e=u(e);var s=this._require(e.modules,e.data);return i?s:void s.spread(t,n,r)},n.prototype.requireSync=function(e){if(e=u(e),1!==e.modules.length)throw new Error("ymaps.modules: only one module can be required synchronously.");var t=this._findDefinition(e.modules[0]);return t&&this._requireSingleSync(t,e.data)},n.prototype._requireSingleSync=function(e,t){for(var n=o(e,[t]),r=0,i=n.length;r<i;r++){var s=this._findDefinition(n[r]);if(!s||!this._requireSingleSync(s,t))return}return e.state===m.DEFINED?e.exports:void 0},n.prototype._require=function(e,t){var n=e.map(function(e){return this._requireSingle(e,t)},this);return f.all(n)},n.prototype._requireSingle=function(e,t){var n=this._findDefinition(e);return n?this._resolve(n,t):this._modulesMapLoaded.then(function(){var n=this._findDefinition(e);return n?this._resolve(n,t):f.reject(new Error("ymaps.modules: module `"+a(e)+"` is not defined."))},this)},n.prototype._findDefinition=function(e){if("undefined"!=typeof e)return"string"==typeof e?this._definitionsByName[e]:this._definitionsByStorage[e.storage]&&this._definitionsByStorage[e.storage][e.key]},n.prototype._saveDefinitionToStorage=function(e,t){if(e.key&&e.storage){t=t||{key:e.key,storage:e.storage};for(var n=d.isArray(t.key)?t.key:[t.key],r=0,o=n.length;r<o;r++)this._definitionsByStorage[t.storage]=this._definitionsByStorage[t.storage]||{},this._definitionsByStorage[t.storage][n[r]]=e}},n.prototype._fetchModule=function(e,t){return e.state>=m.DECLARED?f.resolve():(e.fetchingDeferred=e.fetchingDeferred||f.defer(),e.state===m.MENTIONED&&(e.state=m.QUEUED,this._queuedForFetching[e.name]={definition:e,dataList:[]},this._enqueueCombine()),e.state!==m.FETCHING&&this._queuedForFetching[e.name].dataList.push(t),e.fetchingDeferred.promise())},n.prototype._enqueueCombine=function(){this._combineEnqueued||(this._combineEnqueued=!0,this._modulesMapLoaded.then(function(){this._combineEnqueued=!1;var e=this._queuedForFetching;this._queuedForFetching=Object.create(null);var t=Object.create(null);for(var n in e)if(n in e){var r=e[n],o=this._getAliasesToFetchFor(n,r.dataList);d.extend(t,o)}for(var i=Object.keys(t),s=0,a=i.length;s<a;s+=this._config.combineBatchSize)this._fetchCombine(i.slice(s,s+this._config.combineBatchSize))},this))},n.prototype._fetchCombine=function(e){this._config.fetchCombine(e).spread(function(e,t){this._sandbox=this._sandbox||this._config.createSandbox();for(var n=0,r=e.length;n<r;n++){var o=e[n][0],i=this._definitionsByAlias[o];if(e[n][1].call(null,this._sandbox),i.state===m.DECLARED)i.fetchingDeferred&&i.fetchingDeferred.resolve();else{i.state=m.ERROR;var s=new Error("[internal] ymaps.modules: module `"+i.name+"` was not defined after dynamic module loading");i.exports=s,i.fetchingDeferred&&i.fetchingDeferred.reject(s)}i.fetchingDeferred=void 0}t()},this)["catch"](function(t){for(var n=0,r=e.length;n<r;n++){var o=this._definitionsByAlias[e[n]],t=new Error("[internal] ymaps.modules: dynamic module loading failed");o.state=m.ERROR,o.exports=t,o.fetchingDeferred&&o.fetchingDeferred.reject(t),o.fetchingDeferred=void 0}},this)},n.prototype._getAliasesToFetchFor=function(e,t){for(var n=[e],r=Object.create(null);n.length;){var i=n.shift(),s=this._findDefinition(i);if(!s)return void console.error("ymaps.modules: trying to fetch unknown module `"+a(i)+"` while loading `"+a(e)+"`.");s.state<=m.QUEUED&&(s.state=m.FETCHING,r[s.alias]=!0,Array.prototype.push.apply(n,s.depends)),Array.prototype.push.apply(n,o(s,t))}return r},n.prototype._processLoadedMap=function(e){function t(e){if("function"==typeof e)return e;for(var t=[],r=0,o=e.length;r<o;r+=2){var i=e.substr(r,2);t.push(n[i])}return t}for(var n={},o=0,i=e.length;o<i;o++){var s=e[o][0],a=e[o][1];n[a]=s}for(var o=0,i=e.length;o<i;o++){var s=e[o][0],a=e[o][1],c=this._definitionsByName[s];if(!c){var u=t(e[o][2]),l=e[o][3],f=e[o][4],d=e[o][5];c=new r(m.MENTIONED,s,f,l,u,null,null,d),this._define(c)}c.alias=a,this._definitionsByAlias[a]=c}},l.exports}({vow:r.vow,"./utils":r.utils}),u="&mode="+r.env.server.params.mode+"&flags="+r.env.flags.join(",")+(r.env.cacheVersion?"&v="+r.env.cacheVersion:""),l=r.env.server.url+"/map.js?callback={CALLBACK}"+u,f=r.env.server.url+"/combine.js?callback_prefix={CALLBACK_PREFIX}"+u,d=r.env.server.url+"/"+r.env.server.path.replace(/\/$/,"")+"/images/";r.modules=new c({dependenciesContext:r,combineBatchSize:r.project.combineBatchSize,fetchMap:function(){if(r.env.flags.indexOf("inline-map")>=0&&t){var e=r.performance.startMeasure("@mapjs.eval");return r.vow.resolve([t,e.finish.bind(e)])}var n=a+"_map",o=l.replace("{CALLBACK}",n);return s(o,n).then(function(e){var t=r.performance.getResourceTimings(o);r.performance.saveResourceTimings("mapjs",t);var n=r.performance.startMeasure("@mapjs.eval");return[e,n.finish.bind(n)]})},fetchCombine:function(e){r.performance.statistics.combine.total++,r.performance.statistics.combine.modules+=e.length;var t=e.length<100?"s":e.length<300?"m":"l",n=e.join(""),o=a+"_combine",i=f.replace("{CALLBACK_PREFIX}",o)+"&load="+n,c=o+"_"+n;return s(i,c).then(function(e){var n=r.performance.getResourceTimings(i);r.performance.saveResourceTimings("combine_"+t,n),r.performance.statistics.combine.size+=n.encodedBodySize;var o=r.performance.startMeasure("@combine_"+t+".eval");return[e,o.finish.bind(o)]})},createSandbox:function(){var e=Object.create(r.modules);return e.importImages=function(e){return{get:function(t){return d+e[t].src}}},r.utils.extend({},r,{modules:e})}}),r.ns.load=function(e,t,n,o){return"function"==typeof e?t?r.ns.ready(["package.full"],e,t):r.ns.ready(["package.full"],e):("string"==typeof e&&(e=[e]),r.ns.ready.apply(this,arguments))},function(){function e(e){return function(){console.warn("{NS}.modules.{FN} is not a public API and will be removed from {NS}.modules.".replace(/\{NS\}/g,r.project.namespace).replace(/\{FN\}/g,e));var t=r.modules[e].apply(r.modules,arguments);return t===r.modules?r.ns.modules:t}}r.ns.modules={require:function(){return r.modules.require.apply(r.modules,arguments)},isDefined:function(){return r.modules.isDefined.apply(r.modules,arguments)},requireSync:function(){return r.modules.requireSync.apply(r.modules,arguments)},define:function(e,t,n,o){return r.modules.define.apply(r.modules,arguments),r.ns.modules},defineSync:e("defineSync"),getDefinition:e("getDefinition"),getState:e("getState"),setOptions:e("setOptions"),flush:e("flush"),nextTick:e("nextTick"),watchResolving:e("watchResolving"),__modules:r.modules}}(),function(e){function t(){l&&(r.performance.saveMeasure("ymaps.readyDelay",r.performance.now()-r.performance.initTimings.responseEnd),l=!1);var e=r.performance.startMeasure("ymaps.ready"),t={};arguments.length&&(1!=arguments.length||"object"!=typeof arguments[0]||arguments[0].length?"function"!=typeof arguments[0]?(t.require="string"==typeof arguments[0]?[arguments[0]]:arguments[0],t.successCallback=arguments[1],t.errorCallback=arguments[2]&&"function"==typeof arguments[2]?arguments[2]:null,t.context=arguments[2]&&"object"==typeof arguments[2]?arguments[2]:arguments[3]):(t.successCallback=arguments[0],t.errorCallback=arguments[1]&&"function"==typeof arguments[1]?arguments[1]:null,t.context=arguments[1]&&"object"==typeof arguments[1]?arguments[1]:arguments[2]):t=arguments[0]);var n=t.require||[],o=i.all([r.modules.require(n),c,u]).spread(function(t){return r.utils.registerImports(r.ns,n,t),e.finish(),r.ns});return o.then(t.successCallback&&function(e){setTimeout(t.successCallback.bind(t.context),0,e)},t.errorCallback&&function(e){setTimeout(t.errorCallback.bind(t.context),0,e)}),o}function n(t,n){if(t){var r=o(e,t);r&&setTimeout(function(){r.method.call(r.context,n)})}}function o(e,t){var n=e;t=t.split(".");for(var r=0,o=t.length-1;r<o;r++)if(n=n[t[r]],!n)return;return{method:n[t[o]],context:n}}var i=r.vow,s=[].concat(r.project.preload,r.env.preload.load.split(",").filter(Boolean)),a=r.performance.startMeasure("ymaps.preload"),c=r.modules.require(s).then(function(e){r.utils.registerImports(r.ns,s,e),a.finish(),n(r.env.preload.onLoad,r.ns)},function(e){return n(r.env.preload.onError,e),i.reject(e)}),u="complete"===document.readyState||"interactive"===document.readyState?i.resolve():new i.Promise(function(e){document.addEventListener("DOMContentLoaded",e,!1),document.addEventListener("load",e,!1)});r.ns.ready=t;var l=!0}(this),r.env.server.params.csp&&!r.supports.csp.isSupported&&r.logger.warning("CSP is not suported in this browser"),
r.modules.define("vectorEngine.loadEngine",["vow","Hotspot","Monitor","collection.Item","event.Manager","hotspot.layer.Hint","hotspot.layer.optionMapper","interactivityModel.EventController","interactivityModel.layer","option.Manager","poi.BalloonManager","util.shapeFactory"],function(e,t){function n(){var e=t.defer(),n=document.createElement("script");return n.onload=e.resolve.bind(e),n.onerror=e.reject.bind(e),n.src=r.env.hosts.vectorIndex.replace("{{version}}",r.env.vectorVersion),r.env.vectorEngineFileName&&(n.src=n.src.replace("vector.min.js",r.env.vectorEngineFileName)),document.head.insertAdjacentElement("afterbegin",n),e.promise()["catch"](function(){return t.reject(new Error("Failed to load vector engine"))})}if("ymaps"!==r.env.namespace)throw new Error("Vector supports only `ymaps` namespace.");if(null==r.env.vectorVersion)throw new Error("No vector version.");var o=null;e(function(){return o=o||n()})}),r.modules.define("vectorEngine.preload",[],function(e){r.supports.vector.isSupported()&&r.modules.require(["vectorEngine.loadEngine"]).spread(function(e){e()}),e({})}),r.modules.allowRemoteLoading(),r.env.namespace&&r.utils.setDeep(n,r.env.namespace,r.ns),r.performance.init({url:r.env.hosts.api.statCounter+"/counter",data:"/path="+r.env.version.replace(/\W/g,"_")+"."+r.env.browser.platform,enable:"all"==r.env.counters||Math.random()<o&&!r.env.server.params.debug,initUrl:document.currentScript&&document.currentScript.src,useSendBeacon:!r.env.server.params.csp}),r.env.hasValidApiKey||(r.env.apikey=void 0,"undefined"!=typeof r.env.hasValidApiKey&&console.warn("(Yandex Maps JS API): Invalid API key")),i.finish()})({"vectorVersion":"5.6.2","vectorVersionTimestamp":1595212932803,"cacheVersion":null,"type":"production","flags":[],"server":{"url":"https://api-maps.yandex.ru/2.1.76","path":"build/release","params":{"apikey":"","mode":"release","ns":"ymaps","csp":null}},"preload":{"load":"package.full"},"mode":"release","debug":false,"namespace":"ymaps","enterprise":false,"apikey":"","hasApiKeyParam":true,"hasValidApiKey":false,"browser":{"name":"Chrome","version":"84.0.4147.89","base":"Chromium","engine":"WebKit","engineVersion":"537.36","osName":"Windows 10","osFamily":"Windows","osVersion":"10.0","isMobile":false,"isTablet":false,"multiTouch":false,"platform":"Desktop","cssPrefix":"Webkit"},"lang":"en_US","languageCode":"en","countryCode":"US","hosts":{"api":{"main":"https://api-maps.yandex.ru/","ua":"https://yandex.com/legal/maps_termsofuse/?lang={{lang}}","maps":"https://yandex.com/maps/","statCounter":"https://yandex.com/clck/","services":{"coverage":"https://api-maps.yandex.ru/services/coverage/","geocode":"https://geocode-maps.yandex.ru/","geoxml":"https://api-maps.yandex.ru/services/geoxml/","inception":"https://api-maps.yandex.ru/services/inception/","panoramaLocate":"https://api-maps.yandex.ru/services/panoramas/","search":"https://api-maps.yandex.ru/services/search/","suggest":"https://suggest-maps.yandex.ru/","regions":"https://api-maps.yandex.ru/services/regions/","route":"https://api-maps.yandex.ru/services/route/"}},"layers":{"map":"https://vec0%d.maps.yandex.net/tiles?l=map&%c&%l","mapj":"https://vec0%d.maps.yandex.net/tiles?l=mapj&%c&%l","sat":"https://core-sat.maps.yandex.net/tiles?l=sat&%c&%l","skl":"https://vec0%d.maps.yandex.net/tiles?l=skl&%c&%l","sklj":"https://vec0%d.maps.yandex.net/tiles?l=sklj&%c&%l","stv":"https://0%d.core-stv-renderer.maps.yandex.net/2.x/tiles?l=stv&%c&v=%v&%l&format=png","sta":"https://0%d.core-stv-renderer.maps.yandex.net/2.x/tiles?l=sta&%c&v=%v&%l&format=png","staHotspot":"https://core-stv-renderer.maps.yandex.net/2.x/tiles?l=stj&%c&v=%v&format=js","staHotspotKey":"%c&l=stj&tm=%v","carparks":"https://core-carparks-renderer-lots.maps.yandex.net/"},"metro_RU":"https://yandex.ru/metro/","metro_UA":"https://yandex.ua/metro/","metro_BY":"https://yandex.by/metro/","metro_US":"https://yandex.com/metro/","traffic":"https://core-jams-rdr.maps.yandex.net/","trafficInfo":"https://core-jams-info.maps.yandex.net/","trafficArchive":"https://core-jams-rdr-hist.maps.yandex.net/","vectorIndex":"https://yastatic.net/s3/mapsapi-v3/vector/{{version}}/out/vector.min.js","vectorTiles":"https://vec0{{hostAlias}}.maps.yandex.net/vmap2/tiles?lang={{lang}}&x={{x}}&y={{y}}&z={{z}}&zmin={{zmin}}&zmax={{zmax}}&v={{version}}","vectorImages":"https://vec0{{hostAlias}}.maps.yandex.net/vmap2/icons?id={{id}}&scale={{scale}}","vectorMeshes":"https://vec0{{hostAlias}}.maps.yandex.net/vmap2/meshes?id={{id}}","vectorGlyphs":"https://vec0{{hostAlias}}.maps.yandex.net/vmap2/glyphs?lang={{lang}}&font_id={{fontId}}&range={{range}}","indoorTiles":"https://vec0{{hostAlias}}.maps.yandex.net/","panoramasTiles":"https://pano.maps.yandex.net/%s/%z.%x.%y","taxiRouteInfo":"https://taxi-routeinfo.taxi.yandex.net/taxi_info?clid=yamaps&apikey=f6d7c076e16e4d53a928961595e76215&rll={rll}"},"layers":{"map":{"version":"20.07.18-0","scaled":true,"hotspotZoomRange":[8,23]},"sat":{"version":"3.602.0"},"skl":{"version":"20.07.18-0","scaled":true,"hotspotZoomRange":[8,23]},"stv":{"version":"2020.07.17.22.38-1"},"carparks":{"version":"20200718-023648"},"sta":{"version":"2020.07.17.22.38-1"},"trf":{"version":"1595212920","scaled":true}},"geolocation":{"longitude":129.732663,"latitude":62.028103,"isHighAccuracy":false,"span":{"longitude":0.463845,"latitude":0.445267}},"token":"82b81edf2e1cb117ab44b2f5a847341a","distribution":{},"version":"2.1.76","majorVersion":"2.1","cssPrefix":"ymaps-2-1-76-","coordinatesOrder":"latlong"}, null)
