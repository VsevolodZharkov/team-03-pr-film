function t(t){const n=document.querySelector(".gallery"),a=JSON.parse(localStorage.getItem("genres")),o=t.map((t=>`<li class="gallery__item" data-id="${t.id}">\n                <article>\n                    <img class="article__image" src="${t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"https://img.freepik.com/free-vector/error-404-concept-for-landing-page_52683-20173.jpg?w=2000"}" alt="${t.title?t.title:t.original_title}" width="280" loading="lazy">\n                    <h1 class="article__description">${t.title?t.title:t.original_title}</h1>\n                    <p class="article__description-orange">\n                        <span class="pseudo-element">\n                            ${e(t.genre_ids,a).length>=3?e(t.genre_ids,a).slice(0,2).join(", ")+", Others...":e(t.genre_ids,a).join(", ")?e(t.genre_ids,a).join(", "):"NO DATA"}\n                        </span>\n                        <span>\n                            ${t.release_date?t.release_date.slice(0,4):"OUR ERA"}\n                        </span>\n                    </p>\n                </article>\n            </li>`)).join("");n.innerHTML=o}function e(t,e){return t.map((t=>e.genres.filter((e=>e.id===t)).flatMap((t=>t.name))))}var n,a,o,i,s={};n=s,a="Spinner",o=function(){return c},i=function(t){return c=t},Object.defineProperty(n,a,{get:o,set:i,enumerable:!0,configurable:!0});var r=function(){return r=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},l={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},c=function(){function t(t){void 0===t&&(t={}),this.opts=r(r({},l),t)}return t.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),d(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),function(t,e){var n=Math.round(e.corners*e.width*500)/1e3+"px",a="none";!0===e.shadow?a="0 2px 4px #000":"string"==typeof e.shadow&&(a=e.shadow);for(var o=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],a=0,o=t.split(",");a<o.length;a++){var i=o[a].match(e);if(null!==i){var s=+i[2],r=+i[5],l=i[4],c=i[7];0!==s||l||(l=c),0!==r||c||(c=l),l===c&&n.push({prefix:i[1]||"",x:s,y:r,xUnits:l,yUnits:c,end:i[8]})}}return n}(a),i=0;i<e.lines;i++){var s=~~(360/e.lines*i+e.rotate),r=d(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:u(e.fadeColor,i),borderRadius:n,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+e.radius+"px)"}),l=i*e.direction/e.lines/e.speed;l-=1/e.speed;var c=d(document.createElement("div"),{width:"100%",height:"100%",background:u(e.color,i),borderRadius:n,boxShadow:p(o,s),animation:1/e.speed+"s linear "+l+"s infinite "+e.animation});r.appendChild(c),t.appendChild(r)}}(this.el,this.opts),this},t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t}();function d(t,e){for(var n in e)t.style[n]=e[n];return t}function u(t,e){return"string"==typeof t?t:t[e%t.length]}function p(t,e){for(var n=[],a=0,o=t;a<o.length;a++){var i=o[a],s=m(i.x,i.y,e);n.push(i.prefix+s[0]+i.xUnits+" "+s[1]+i.yUnits+i.end)}return n.join(", ")}function m(t,e,n){var a=n*Math.PI/180,o=Math.sin(a),i=Math.cos(a);return[Math.round(1e3*(t*i+e*o))/1e3,Math.round(1e3*(-t*o+e*i))/1e3]}const g=new(0,s.Spinner)({lines:18,length:5,width:2,radius:8,scale:2,corners:.6,speed:.9,rotate:22,animation:"spinner-line-fade-default",direction:-1,color:"#ff6b08",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"});async function _(t){g.spin(document.querySelector(".gallery"));const e=new URLSearchParams({api_key:"7a4cd4317772102a9b88ef6a54b71590",page:t});return await fetch(`https://api.themoviedb.org/3/trending/movie/day?${e}`).then((t=>t.json()))}function h(t){(async function(){const t=new URLSearchParams({api_key:"7a4cd4317772102a9b88ef6a54b71590"});return await fetch(`https://api.themoviedb.org/3/genre/movie/list?${t}`).then((t=>t.json()))})().then((t=>{localStorage.setItem("genres",JSON.stringify(t))}))}function f(t){const e=localStorage.getItem(t);return JSON.parse(e)}function b(t,e){const n=JSON.parse(localStorage.getItem(t));return!!n&&!!n.find((t=>t.id===Number(e)))}const v={openGallery:document.querySelector(".gallery"),closeBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal__form"),article:document.querySelector(".modal__form-card"),body:document.querySelector("body")};let y,x,S="";function w(t){y=t.results,v.openGallery.addEventListener("click",N)}function N(t){t.target.nodeName!==t.currentTarget.nodeName&&(x=t.target.closest("li").dataset.id,function(t,n){const a=t.filter((t=>t.id===Number(n))),o=JSON.parse(localStorage.getItem("genres")),{title:i,poster_path:s,overview:r,vote_average:l,vote_count:c,popularity:d,original_title:u}=a[0];S=`\n      <img\n        class="modal__form-img"\n        src="https://image.tmdb.org/t/p/w500${s}"\n        alt=""\n      />\n      <div class="modal__descript">\n        <h2 class="modal__title">${i}</h2>\n\n        <table class="modal__descript-table">\n          <tbody>\n            <tr>\n              <td class="modal__text-properties">Vote / Votes</td>\n              <td class="modal__text-params">\n                <span class="modal__text-params-vote">${l}</span> /\n                <span class="modal__text-params-votes">${c}</span>\n              </td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Popularity</td>\n              <td class="modal__text-params">${d}</td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Original Title</td>\n              <td class="modal__text-params">${u}</td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Genre</td>\n              <td class="modal__text-params modal__text-low">${e(a[0].genre_ids,o).join(", ")}</td>\n            </tr>\n          </tbody>\n        </table>\n        <h3 class="modal__descript-titel">About</h3>\n        <p class="modal__descript-text">\n          ${r}\n        </p>\n        <ul class="modal__button__list">\n          <li>\n            <button class="modal__button__item-watched" type="button" data-action="${b("watched",n)?"remove":"add"}">${b("watched",n)?"remove from watched":"add to watched"}</button>\n          </li>\n          <li><button class="modal__button__item-queue" type="button"  data-action="${b("queue",n)?"remove":"add"}">${b("queue",n)?"remove from QUEUE":"add to QUEUE"}</button></li>\n        </ul>\n      </div>\n  `,v.article.innerHTML=S;const p=document.querySelector(".modal__button__item-watched"),m=document.querySelector(".modal__button__item-queue");p.addEventListener("click",k),m.addEventListener("click",E)}(y,x),v.backdrop.classList.add("is-open"),v.body.classList.add("ishidden"),document.addEventListener("click",L),document.addEventListener("keydown",$))}function L(t){t.target===v.backdrop&&(v.backdrop.classList.remove("is-open"),v.body.classList.remove("ishidden"),q())}function $(t){"Escape"===t.code&&(v.backdrop.classList.remove("is-open"),v.body.classList.remove("ishidden"),q())}function q(){document.removeEventListener("keydown",$),document.removeEventListener("click",L)}function k(t){if("add"===t.target.dataset.action){C("watched",y.find((t=>t.id===Number(x)))),t.target.textContent="Remove from watched",t.target.dataset.action="remove"}else{const e=f("watched"),n=e.findIndex((t=>t.id===Number(x)));e.splice(n,1),localStorage.setItem("watched",JSON.stringify(e)),t.target.textContent="Add to watched",t.target.dataset.action="add"}}function E(t){if("add"===t.target.dataset.action){C("queue",y.find((t=>t.id===Number(x)))),t.target.textContent="Remove from queue",t.target.dataset.action="remove"}else{const e=f("queue"),n=e.findIndex((t=>t.id===Number(x)));e.splice(n,1),localStorage.setItem("queue",JSON.stringify(e)),t.target.textContent="Add to queue",t.target.dataset.action="add"}}function C(t,e){if(localStorage.getItem(t)){const n=localStorage.getItem(t),a=JSON.parse(n);a.find((t=>t.id===e.id))||(a.push(e),localStorage.setItem(t,JSON.stringify(a)))}else{const n=[];n.push(e),localStorage.setItem(t,JSON.stringify(n))}}document.querySelector(".modal__btn").addEventListener("click",(function(t){t.preventDefault(),v.backdrop.classList.remove("is-open"),v.body.classList.remove("ishidden"),q()}));const O={pagContainer:document.querySelector(".js-pagination")};let I;function j(t,e,n){if(!t||!e||1===e)return;let a="";const o=t-1,i=t-2,s=Number(t)+1,r=Number(t)+2;I=t,t>1&&(a+='<li class="pagination__item"><button class="previos">\n        &larr;</button>\n      </li>'),t>3&&(a+='<li class="pagination__item"><button class="pagination__btn">1</button></li>'),t>4&&(a+='<li class="pagination__item"><button class="pagination__dottes">...</button></li>'),t>2&&(a+=`<li class="pagination__item"><button class="pagination__btn">${i}</button></li>`),t>1&&(a+=`<li class="pagination__item"><button class="pagination__btn">${o}</button></li>`),a+=`<li class="pagination__item"><button class="pagination__btn active__btn">${t}</button></li>`,s<=e&&(a+=`<li class="pagination__item"><button class="pagination__btn">${s}</button></li>`),r<=e&&(a+=`<li class="pagination__item"><button class="pagination__btn">${r}</button></li>`),e>t+3&&(a+='<li class="pagination__item"><button class="pagination__dottes">...</button></li>'),e>t+2&&(a+=`<li class="pagination__item"><button class="pagination__btn">${e}</button></li>`),e>t&&(a+='<li class="pagination__item"><button class="next">&rarr;</button></li>'),O.pagContainer.innerHTML=a}function U(e){"BUTTON"===e.target.nodeName&&"..."!==e.target.textContent&&(I=e.target.classList.contains("previos")?Number(I)-1:e.target.classList.contains("next")?Number(I)+1:Number(e.target.textContent),_(I).then((e=>{t(e.results),j(I,e.total_pages),w(e)})).catch((t=>console.log(t))).finally((()=>{})))}O.pagContainer.addEventListener("click",U);async function T(t,e){const n=new URLSearchParams({api_key:"7a4cd4317772102a9b88ef6a54b71590",page:e,query:t});return await fetch(`https://api.themoviedb.org/3/search/movie?${n}`).then((t=>t.json()))}const A=document.querySelector(".js-pagination"),J=document.querySelector(".page-header__form"),M=(document.querySelector(".gallery"),document.querySelector(".search"));let R,z;function P(e){if(e.preventDefault(),A.removeEventListener("click",U),R=e.target.elements.text.value.trim(),""===R)return M.textContent="Search result not successful. Enter the correct movie name and try again",void setTimeout((()=>{M.textContent=""}),2e3);T(R,1).then((e=>{if(console.log(e),0===e.total_pages)return M.textContent="Search result not successful. Enter the correct movie name and try again",void setTimeout((()=>{M.textContent=""}),2e3);t(e.results),j(1,e.total_pages),A.addEventListener("click",B),w(e)}))}function B(e){"BUTTON"===e.target.nodeName&&"..."!==e.target.textContent&&(z=e.target.classList.contains("previos")?Number(z)-1:e.target.classList.contains("next")?Number(z)+1:Number(e.target.textContent),T(R,z).then((e=>{t(e.results),j(z,e.total_pages),w(e)})).catch((t=>console.log(t))).finally((()=>{})))}(async function(){return await h(),await _(1)})().then((e=>{t(e.results),j(1,e.total_pages),w(e)})).catch((t=>console.log(t))).finally((()=>{g.stop()})),J.addEventListener("submit",P);
//# sourceMappingURL=index.bedb4d46.js.map
