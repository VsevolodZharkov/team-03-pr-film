!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequired7c6=a),a.register("cVEWW",(function(e,n){function r(t){var e=document.querySelector(".gallery"),n=JSON.parse(localStorage.getItem("genres")),r=t.map((function(t){return'<li class="gallery__item" data-id="'.concat(t.id,'">\n                <article>\n                    <img class="article__image" src="').concat(t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"https://img.freepik.com/free-vector/error-404-concept-for-landing-page_52683-20173.jpg?w=2000",'" alt="').concat(t.title?t.title:t.original_title,'" width="280" loading="lazy">\n                    <h1 class="article__description">').concat(t.title?t.title:t.original_title,'</h1>\n                    <p class="article__description-orange">\n                        <span class="pseudo-element">\n                            ').concat(o(t.genre_ids,n).length>=3?o(t.genre_ids,n).slice(0,2).join(", ")+", Others...":o(t.genre_ids,n).join(", ")?o(t.genre_ids,n).join(", "):"NO DATA","\n                        </span>\n                        <span>\n                            ").concat(t.release_date?t.release_date.slice(0,4):"OUR ERA","\n                        </span>\n                    </p>\n                </article>\n            </li>")})).join("");e.innerHTML=r}function o(t,e){return t.map((function(t){return e.genres.filter((function(e){return e.id===t})).flatMap((function(t){return t.name}))}))}t(e.exports,"createMarkUp",(function(){return r})),t(e.exports,"getGeneres",(function(){return o}))})),a.register("jyR98",(function(n,r){t(n.exports,"getGenresPopfilms",(function(){return u}));var o=a("bpxeT"),i=a("2TvXO"),s=a("gC5t1"),c=a("fvENW");function u(){return l.apply(this,arguments)}function l(){return(l=e(o)(e(i).mark((function t(){return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.setupGenesToStorage)();case 2:return 1,t.next=5,(0,s.getTrendMovies)(1);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}a("cVEWW")})),a.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}})),a.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=S(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?h:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",d="suspendedYield",f="executing",h="completed",g={};function m(){}function v(){}function y(){}var _={};c(_,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==n&&r.call(x,a)&&(_=x);var w=y.prototype=m.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return v.prototype=y,c(w,"constructor",y),c(y,"constructor",v),v.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},L(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),c(w,s,"Generator"),c(w,a,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("gC5t1",(function(n,r){t(n.exports,"getTrendMovies",(function(){return l}));var o=a("bpxeT"),i=a("2TvXO"),s=a("1Vyg7"),c="7a4cd4317772102a9b88ef6a54b71590",u="https://api.themoviedb.org/3/trending/movie/day";function l(t){return p.apply(this,arguments)}function p(){return(p=e(o)(e(i).mark((function t(n){var r;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.spiner.spin(document.querySelector(".gallery")),r=new URLSearchParams({api_key:c,page:n}),t.next=4,fetch("".concat(u,"?").concat(r)).then((function(t){return t.json()}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}})),a.register("1Vyg7",(function(e,n){t(e.exports,"spiner",(function(){return r}));var r=new(0,a("b62ED").Spinner)({lines:18,length:5,width:2,radius:8,scale:2,corners:.6,speed:.9,rotate:22,animation:"spinner-line-fade-default",direction:-1,color:"#ff6b08",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"})})),a.register("b62ED",(function(e,n){t(e.exports,"Spinner",(function(){return a}),(function(t){return a=t}));var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},o={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},a=function(){function t(t){void 0===t&&(t={}),this.opts=r(r({},o),t)}return t.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),i(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),function(t,e){var n=Math.round(e.corners*e.width*500)/1e3+"px",r="none";!0===e.shadow?r="0 2px 4px #000":"string"==typeof e.shadow&&(r=e.shadow);for(var o=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],r=0,o=t.split(",");r<o.length;r++){var a=o[r].match(e);if(null!==a){var i=+a[2],s=+a[5],c=a[4],u=a[7];0!==i||c||(c=u),0!==s||u||(u=c),c===u&&n.push({prefix:a[1]||"",x:i,y:s,xUnits:c,yUnits:u,end:a[8]})}}return n}(r),a=0;a<e.lines;a++){var u=~~(360/e.lines*a+e.rotate),l=i(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:s(e.fadeColor,a),borderRadius:n,transformOrigin:"left",transform:"rotate("+u+"deg) translateX("+e.radius+"px)"}),p=a*e.direction/e.lines/e.speed;p-=1/e.speed;var d=i(document.createElement("div"),{width:"100%",height:"100%",background:s(e.color,a),borderRadius:n,boxShadow:c(o,u),animation:1/e.speed+"s linear "+p+"s infinite "+e.animation});l.appendChild(d),t.appendChild(l)}}(this.el,this.opts),this},t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t}();function i(t,e){for(var n in e)t.style[n]=e[n];return t}function s(t,e){return"string"==typeof t?t:t[e%t.length]}function c(t,e){for(var n=[],r=0,o=t;r<o.length;r++){var a=o[r],i=u(a.x,a.y,e);n.push(a.prefix+i[0]+a.xUnits+" "+i[1]+a.yUnits+a.end)}return n.join(", ")}function u(t,e,n){var r=n*Math.PI/180,o=Math.sin(r),a=Math.cos(r);return[Math.round(1e3*(t*a+e*o))/1e3,Math.round(1e3*(-t*o+e*a))/1e3]}})),a.register("fvENW",(function(n,r){t(n.exports,"setupGenesToStorage",(function(){return l}));var o=a("bpxeT"),i=a("2TvXO"),s="7a4cd4317772102a9b88ef6a54b71590",c="https://api.themoviedb.org/3/genre/movie/list";function u(){return(u=e(o)(e(i).mark((function t(){var n;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URLSearchParams({api_key:s}),t.next=3,fetch("".concat(c,"?").concat(n)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){(function(){return u.apply(this,arguments)})().then((function(t){localStorage.setItem("genres",JSON.stringify(t))}))}})),a.register("2zsYH",(function(e,n){t(e.exports,"renderButtonsPag",(function(){return u}));var r=a("cVEWW"),o=a("gC5t1"),i=a("bC0sB");a("1Vyg7");var s,c={pagContainer:document.querySelector(".js-pagination")};function u(t,e,n){if(t&&e&&1!==e){var r="",o=t-1,a=t-2,i=Number(t)+1,u=Number(t)+2;s=t,t>1&&(r+='<li class="pagination__item"><button class="previos">\n        &larr;</button>\n      </li>'),t>3&&(r+='<li class="pagination__item"><button class="pagination__btn">1</button></li>'),t>4&&(r+='<li class="pagination__item"><button class="pagination__dottes">...</button></li>'),t>2&&(r+='<li class="pagination__item"><button class="pagination__btn">'.concat(a,"</button></li>")),t>1&&(r+='<li class="pagination__item"><button class="pagination__btn">'.concat(o,"</button></li>")),r+='<li class="pagination__item"><button class="pagination__btn active__btn">'.concat(t,"</button></li>"),i<=e&&(r+='<li class="pagination__item"><button class="pagination__btn">'.concat(i,"</button></li>")),u<=e&&(r+='<li class="pagination__item"><button class="pagination__btn">'.concat(u,"</button></li>")),e>t+3&&(r+='<li class="pagination__item"><button class="pagination__dottes">...</button></li>'),e>t+2&&(r+='<li class="pagination__item"><button class="pagination__btn">'.concat(e,"</button></li>")),e>t&&(r+='<li class="pagination__item"><button class="next">&rarr;</button></li>'),c.pagContainer.innerHTML=r}}c.pagContainer.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName||"..."===t.target.textContent)return;s=t.target.classList.contains("previos")?Number(s)-1:t.target.classList.contains("next")?Number(s)+1:Number(t.target.textContent);(0,o.getTrendMovies)(s).then((function(t){(0,r.createMarkUp)(t.results),u(s,t.total_pages),(0,i.showModal)(t)})).catch((function(t){return console.log(t)})).finally((function(){}))}))})),a.register("bC0sB",(function(e,n){t(e.exports,"showModal",(function(){return u}));var r,o,i=a("cVEWW"),s={openGallery:document.querySelector(".gallery"),closeBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal__form"),article:document.querySelector(".modal__form-card")},c="";function u(t){r=t.results,s.openGallery.addEventListener("click",l)}function l(t){t.target.nodeName!==t.currentTarget.nodeName&&(o=t.target.closest("li").dataset.id,function(t,e){var n=t.filter((function(t){return t.id===Number(e)})),r=JSON.parse(localStorage.getItem("genres")),o=n[0],a=o.title,u=o.poster_path,l=o.overview,p=o.vote_average,d=o.vote_count,f=o.popularity,m=o.original_title;c='\n      <img\n        class="modal__form-img"\n        src="https://image.tmdb.org/t/p/w500'.concat(u,'"\n        alt=""\n      />\n      <div class="modal__descript">\n        <h2 class="modal__title">').concat(a,'</h2>\n\n        <table class="modal__descript-table">\n          <tbody>\n            <tr>\n              <td class="modal__text-properties">Vote / Votes</td>\n              <td class="modal__text-params">\n                <span class="modal__text-params-vote">').concat(p,'</span> /\n                <span class="modal__text-params-votes">').concat(d,'</span>\n              </td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Popularity</td>\n              <td class="modal__text-params">').concat(f,'</td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Original Title</td>\n              <td class="modal__text-params">').concat(m,'</td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Genre</td>\n              <td class="modal__text-params modal__text-low">').concat((0,i.getGeneres)(n[0].genre_ids,r).join(", "),'</td>\n            </tr>\n          </tbody>\n        </table>\n        <h3 class="modal__descript-titel">About</h3>\n        <p class="modal__descript-text">\n          ').concat(l,'\n        </p>\n        <ul class="modal__button__list">\n          <li>\n            <button class="modal__button__item-watched" type="button">add to Watched</button>\n          </li>\n          <li><button class="modal__button__item-queue" type="button">add to queue</button></li>\n        </ul>\n      </div>\n  '),s.article.innerHTML=c;var v=document.querySelector(".modal__button__item-watched"),y=document.querySelector(".modal__button__item-queue");v.addEventListener("click",h),y.addEventListener("click",g)}(r,o),s.backdrop.classList.add("is-open"),document.addEventListener("click",p),document.addEventListener("keydown",d))}function p(t){t.target===s.backdrop&&(s.backdrop.classList.remove("is-open"),f())}function d(t){"Escape"===t.code&&(s.backdrop.classList.remove("is-open"),f())}function f(){document.removeEventListener("keydown",d),document.removeEventListener("click",p)}function h(t){console.log(t),m("watched",r.find((function(t){return t.id===Number(o)}))),t.target.textContent="Dоne!"}function g(t){console.log(t),m("queue",r.find((function(t){return t.id===Number(o)}))),t.target.textContent="Dоne!"}function m(t,e){if(localStorage.getItem(t)){var n=localStorage.getItem(t),r=JSON.parse(n),o=r.find((function(t){return t.id===e.id}));console.log(o),o||(r.push(e),localStorage.setItem(t,JSON.stringify(r)))}else{var a=[];a.push(e),localStorage.setItem(t,JSON.stringify(a))}}document.querySelector(".modal__btn").addEventListener("click",(function(t){t.preventDefault(),s.backdrop.classList.remove("is-open"),f()}))})),a.register("bWgPh",(function(e,n){t(e.exports,"SeachByQuery",(function(){return d}));var r=a("kjwkz"),o=a("cVEWW"),i=a("2zsYH"),s=a("bC0sB");a("1Vyg7");var c,u=document.querySelector(".js-pagination"),l=document.querySelector(".page-header__form"),p=(document.querySelector(".gallery"),document.querySelector(".search"));function d(){l.addEventListener("submit",f)}function f(t){if(t.preventDefault(),""===(c=t.target.elements.text.value.trim()))return p.textContent="Search result not successful. Enter the correct movie name and try again",void setTimeout((function(){p.textContent=""}),2e3);(0,r.searchMovies)(c,1).then((function(t){if(console.log(t),0===t.total_pages)return p.textContent="Search result not successful. Enter the correct movie name and try again",void setTimeout((function(){p.textContent=""}),2e3);(0,o.createMarkUp)(t.results),(0,i.renderButtonsPag)(1,t.total_pages),u.addEventListener("click",h),(0,s.showModal)(t)})),t.target.reset()}function h(t){"BUTTON"===t.target.nodeName&&"..."!==t.target.textContent&&(t.target.classList.contains("previos")?currentPage=Number(currentPage)-1:t.target.classList.contains("next")?currentPage=Number(currentPage)+1:currentPage=Number(t.target.textContent),(0,r.searchMovies)(c,currentPage).then((function(t){(0,o.createMarkUp)(t.results),(0,i.renderButtonsPag)(currentPage,t.total_pages),(0,s.showModal)(t)})).catch((function(t){return console.log(t)})).finally((function(){})))}})),a.register("kjwkz",(function(n,r){t(n.exports,"searchMovies",(function(){return u}));var o=a("bpxeT"),i=a("2TvXO"),s="7a4cd4317772102a9b88ef6a54b71590",c="https://api.themoviedb.org/3/search/movie";function u(t,e){return l.apply(this,arguments)}function l(){return(l=e(o)(e(i).mark((function t(n,r){var o;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new URLSearchParams({api_key:s,page:r,query:n}),t.next=3,fetch("".concat(c,"?").concat(o)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}))}();
//# sourceMappingURL=library.0df434e3.js.map
