(()=>{var e,t,r,n,o,i,s,a={357:(e,t,r)=>{r.e(972).then(r.bind(r,972)).then((e=>{e.init(),self.addEventListener("message",(t=>{try{const{coords:r,maxIterations:n,isSmoothed:o}=t.data,i=e.get_tile(r.x,r.y,r.z,n,o);self.postMessage({coords:JSON.stringify(r),pixels:i})}catch(e){console.log(e)}}))}))}},c={};function u(e){if(c[e])return c[e].exports;var t=c[e]={id:e,loaded:!1,exports:{}};return a[e](t,t.exports,u),t.loaded=!0,t.exports}u.m=a,u.c=c,u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,r)=>(u.f[r](e,t),t)),[])),u.u=e=>e+".worker.js",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),(()=>{var e={179:1};u.f.i=(t,r)=>{e[t]||importScripts(""+u.u(t))};var t=self.webpackChunkrust_fractal_explorer=self.webpackChunkrust_fractal_explorer||[],r=t.push.bind(t);t.push=t=>{var[n,o,i]=t;for(var s in o)u.o(o,s)&&(u.m[s]=o[s]);for(i&&i(u);n.length;)e[n.pop()]=1;r(t)}})(),o={},i={923:function(){return{"./index_bg.js":{__wbg_new_59cb74e423758ede:function(){return void 0===e&&(e=u.c[99].exports),e.h9()},__wbg_stack_558ba5917b466edd:function(e,r){return void 0===t&&(t=u.c[99].exports),t.Dz(e,r)},__wbg_error_4bb6c2a97407129a:function(e,t){return void 0===r&&(r=u.c[99].exports),r.kF(e,t)},__wbindgen_object_drop_ref:function(e){return void 0===n&&(n=u.c[99].exports),n.ug(e)}}}}},s={972:[923]},u.w={},u.f.wasm=function(e,t){(s[e]||[]).forEach((function(r,n){var s=o[r];if(s)t.push(s);else{var a,c=i[r](),l=fetch(u.p+""+{972:{923:"0a201772afe69c76c330"}}[e][r]+".module.wasm");a=c instanceof Promise&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(l),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(l,c):l.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)})),t.push(o[r]=a.then((function(e){return u.w[r]=(e.instance||e).exports})))}}))},u(357)})();