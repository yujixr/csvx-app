if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"7966f0dd9de1bed4f2206419757aafc0"},{url:"/_next/f25891fbbbcc4657e4c0.wasm",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/LFsj4N1AEqKs9eDJdW2x9/_buildManifest.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/LFsj4N1AEqKs9eDJdW2x9/_ssgManifest.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/chunks/framework-b97a0ed4f13ff8397343.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/chunks/main-2fb0863b295040d4280d.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/chunks/pages/_app-63bc42764161e33b5fb9.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/chunks/pages/about-c6edf5df645df66123d5.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/chunks/pages/index-e6cab5c3063bebb63b48.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/chunks/pages/syntax-072edc23623aa73f1672.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/chunks/webpack-78154c2375c59fe48706.js",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/_next/static/css/061f3ddc165de2f7c59f.css",revision:"LFsj4N1AEqKs9eDJdW2x9"},{url:"/csvx.wasm",revision:"8ace4090f85b8aa3ca4426b29c00f020"},{url:"/favicon.ico",revision:"47e36dfdd8f5310bd2c5916e444d20fa"},{url:"/images/example.png",revision:"08186738325716fafb42530c892aa4bd"},{url:"/images/icons/apple-touch-icon-152x152.png",revision:"87b546c621fb936341a5bb7d54745169"},{url:"/images/icons/apple-touch-icon-180x180.png",revision:"bd15a9f7268f07eda7978884b8338f4c"},{url:"/images/icons/apple-touch-icon.png",revision:"877de9050a046df23821639ac98a967f"},{url:"/images/icons/browserconfig.xml",revision:"65a2df2579c251903329decd70a7ce84"},{url:"/images/icons/favicon-16x16.png",revision:"0277c91a993baf0d38551ec1ad79b2c9"},{url:"/images/icons/favicon-32x32.png",revision:"938de2f0d15d42edf84e53e8456c254e"},{url:"/images/icons/icon-128x128.png",revision:"e876d0180e3032cb4823fb17d4624b6d"},{url:"/images/icons/icon-144x144.png",revision:"b61009d802303bc0f47569d5cde1ecb3"},{url:"/images/icons/icon-152x152.png",revision:"06b883194e4f94339fb8c99d7a91682d"},{url:"/images/icons/icon-192x192.png",revision:"40526304278292c5a602d639ff327f4a"},{url:"/images/icons/icon-384x384.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/images/icons/icon-512x512.png",revision:"a2dc471ee6ab78d09eaf05ea06d0288b"},{url:"/images/icons/icon-72x72.png",revision:"c289a3f0674514e709de06a1b6021bec"},{url:"/images/icons/icon-96x96.png",revision:"f5e397ae255220c206ea1e4666af961d"},{url:"/images/icons/mstile-150x150.png",revision:"cfd86090da98ef53eccdb9608cc4d376"},{url:"/images/icons/safari-pinned-tab.svg",revision:"0263ae5614fb7ea3790b19e685e7fbb6"},{url:"/images/ogp.png",revision:"e4ab7b51d7fb788177ad664a7f158970"},{url:"/manifest.json",revision:"868fa96df437d544e1836a5ecc9b5544"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
