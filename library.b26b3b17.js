function e(e){const t=localStorage.getItem(e);return JSON.parse(t)}function t(e,t){let o=20*(e-1),a=o+20;const s=document.querySelector(".gallery"),i=JSON.parse(localStorage.getItem("genres"));let c="";for(let e=o;e<a;e++)e<t.length&&(c+=`<li class="gallery__item" data-id="${t[e].id}">\n                <article>\n                    <img class="article__image" src="${t[e].poster_path?"https://image.tmdb.org/t/p/w500"+t[e].poster_path:"https://img.freepik.com/free-vector/error-404-concept-for-landing-page_52683-20173.jpg?w=2000"}" alt="${t[e].title?t[e].title:t[e].original_title}" width="280" loading="lazy">\n      <div class ="card__desc">\n                    <h1 class="article__description">${t[e].title?t[e].title:t[e].original_title}</h1>\n                    <p class="article__description-orange">\n                        <span class="pseudo-element">\n                            ${n(t[e].genre_ids,i).length>=3?n(t[e].genre_ids,i).slice(0,2).join(", ")+", Others...":n(t[e].genre_ids,i).join(", ")?n(t[e].genre_ids,i).join(", "):"NO DATA"}\n                        </span>\n                        <span class="article__description-year">\n                            ${t[e].release_date?t[e].release_date.slice(0,4):"OUR ERA"}\n                        </span>\n                        <span class="modal__text-params-vote modal__text-params">\n                        ${t[e].vote_average}           \n                        </span>\n                    </p>\n                    </div>\n                </article>\n            </li>`);s.innerHTML=c}function n(e,t){return e.map((e=>t.genres.filter((t=>t.id===e)).flatMap((e=>e.name))))}const o={pagContainer:document.querySelector(".js-pagination")};let a;function s(e,t){if(!e||!t||1===t)return;let n="";const s=e-1,i=e-2,c=Number(e)+1,l=Number(e)+2;a=e,e>1&&(n+='<li class="pagination__item"><button class="previos">\n        &larr;</button>\n      </li>'),e>3&&(n+='<li class="pagination__item"><button class="pagination__btn">1</button></li>'),e>4&&(n+='<li class="pagination__item"><button class="pagination__dottes">...</button></li>'),e>2&&(n+=`<li class="pagination__item"><button class="pagination__btn">${i}</button></li>`),e>1&&(n+=`<li class="pagination__item"><button class="pagination__btn">${s}</button></li>`),n+=`<li class="pagination__item"><button class="pagination__btn active__btn">${e}</button></li>`,c<=t&&(n+=`<li class="pagination__item"><button class="pagination__btn">${c}</button></li>`),l<=t&&(n+=`<li class="pagination__item"><button class="pagination__btn">${l}</button></li>`),t>e+3&&(n+='<li class="pagination__item"><button class="pagination__dottes">...</button></li>'),t>e+2&&(n+=`<li class="pagination__item"><button class="pagination__btn">${t}</button></li>`),t>e&&(n+='<li class="pagination__item"><button class="next">&rarr;</button></li>'),o.pagContainer.innerHTML=n}function i(n,i){o.pagContainer.addEventListener("click",(function(o){if("BUTTON"!==o.target.nodeName||"..."===o.target.textContent)return;a=o.target.classList.contains("previos")?Number(a)-1:o.target.classList.contains("next")?Number(a)+1:Number(o.target.textContent);const c=e(i);s(a,n),t(a,c)}))}function c(e,t){const n=JSON.parse(localStorage.getItem(e));return!!n&&!!n.find((e=>e.id===Number(t)))}const l={openGallery:document.querySelector(".gallery"),closeBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal__form"),article:document.querySelector(".modal__form-card"),body:document.querySelector("body")};function r(e){e.target===l.backdrop&&(l.backdrop.classList.remove("is-open"),l.body.classList.remove("ishidden"),u())}function d(e){"Escape"===e.code&&(l.backdrop.classList.remove("is-open"),l.body.classList.remove("ishidden"),u())}function u(){document.removeEventListener("keydown",d),document.removeEventListener("click",r)}function m(e,t){if(localStorage.getItem(e)){const n=localStorage.getItem(e),o=JSON.parse(n);o.find((e=>e.id===t.id))||(o.push(t),localStorage.setItem(e,JSON.stringify(o)))}else{const n=[];n.push(t),localStorage.setItem(e,JSON.stringify(n))}}document.querySelector(".modal__btn").addEventListener("click",(function(e){e.preventDefault(),l.backdrop.classList.remove("is-open"),l.body.classList.remove("ishidden"),u()}));const g={openGallery:document.querySelector(".gallery"),closeBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal__form"),article:document.querySelector(".modal__form-card"),body:document.querySelector("body")};let _,p,b="";function y(t){_=e(t),g.openGallery.addEventListener("click",h)}function h(e){e.target.nodeName!==e.currentTarget.nodeName&&(p=e.target.closest("li").dataset.id,function(e,t){const o=e.filter((e=>e.id===Number(t))),a=JSON.parse(localStorage.getItem("genres")),{title:s,poster_path:i,overview:l,vote_average:r,vote_count:d,popularity:u,original_title:m}=o[0];console.log(c("queue",t)," в очереди"),console.log(c("watched",t),"в просмотренных"),b=`\n      <img\n        class="modal__form-img"\n        src="${i?"https://image.tmdb.org/t/p/w500"+i:"https://img.freepik.com/free-vector/error-404-concept-for-landing-page_52683-20173.jpg?w=2000"}"\n        alt=""\n      />\n      <div class="modal__descript">\n        <h2 class="modal__title">${s}</h2>\n\n        <table class="modal__descript-table">\n          <tbody>\n            <tr>\n              <td class="modal__text-properties">Vote / Votes</td>\n              <td class="modal__text-params">\n                <span class="modal__text-params-vote">${r}</span> /\n                <span class="modal__text-params-votes">${d}</span>\n              </td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Popularity</td>\n              <td class="modal__text-params">${u}</td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Original Title</td>\n              <td class="modal__text-params">${m}</td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Genre</td>\n              <td class="modal__text-params modal__text-low">${n(o[0].genre_ids,a).join(", ")?n(o[0].genre_ids,a).join(", "):"NO DATA"}</td>\n            </tr>\n          </tbody>\n        </table>\n        <h3 class="modal__descript-titel">About</h3>\n        <p class="modal__descript-text">\n          ${l||"NO DATA"}\n        </p>\n        <ul class="modal__button__list">\n          <li>\n<button class="modal__button__item-watched" type="button" data-action="${c("watched",t)?"remove":"add"}">\n            ${c("watched",t)?"remove from watched":"add to watched"}\n  </button>\n          </li>\n          <li>\n <button class="modal__button__item-queue" type="button" data-action="${c("queue",t)?"remove":"add"}">\n${c("queue",t)?"remove from QUEUE":"add to QUEUE"}\n  </button>\n  </li>\n        </ul>\n      </div>\n  `,g.article.innerHTML=b;const _=document.querySelector(".modal__button__item-watched"),p=document.querySelector(".modal__button__item-queue");_.addEventListener("click",f),p.addEventListener("click",v)}(_,p),g.backdrop.classList.add("is-open"),g.body.classList.add("ishidden"),document.addEventListener("click",S),document.addEventListener("keydown",q))}function f(t){if(console.log(t.target),"add"===t.target.dataset.action){console.log("add");const e=_.find((e=>e.id===Number(p)));console.log(e),m("watched",e),t.target.textContent="Remove from watched",t.target.dataset.action="remove"}else{console.log("delete");const n=e("watched"),o=n.findIndex((e=>e.id===Number(p)));n.splice(o,1),localStorage.setItem("watched",JSON.stringify(n)),t.target.textContent="Add to watched",t.target.dataset.action="add"}}function v(t){if(console.log(t.target),"add"===t.target.dataset.action){console.log("add");m("queue",_.find((e=>e.id===Number(p)))),t.target.textContent="Remove from queue",t.target.dataset.action="remove"}else{console.log("delete");const n=e("queue"),o=n.findIndex((e=>e.id===Number(p)));n.splice(o,1),localStorage.setItem("queue",JSON.stringify(n)),t.target.textContent="Add to queue",t.target.dataset.action="add"}}function S(e){e.target===g.backdrop&&L()}function q(e){"Escape"===e.code&&L()}function L(){g.backdrop.classList.remove("is-open"),g.body.classList.remove("ishidden"),document.removeEventListener("keydown",q),document.removeEventListener("click",S);const e=document.querySelector(".filters-row__btn--active.is-active"),n=JSON.parse(localStorage.getItem(e.dataset.info));W(),n&&0!==n.length&&t(1,n)}document.querySelector(".modal__btn").addEventListener("click",(function(){L()}));const w=document.querySelector(".js-watched"),k=document.querySelector(".js-queue");const E=document.querySelector(".js-watched"),x=document.querySelector(".js-queue");const N=document.querySelector(".button__up"),$=document.querySelector("header");const O="#007acc",I="#fff",j="#0E161C",T="#007acc42",A="#ff6b01",C="#15141D",J="#EBEBEB",M="#ff6b014c",P=document.documentElement,B=document.querySelector('[data-theme="light"]'),U=document.querySelector('[data-theme="dark"]');let D=localStorage.getItem("theme");function Q(){P.style.setProperty("--accent",O),P.style.setProperty("--text",I),P.style.setProperty("--bg",j),P.style.setProperty("--btn",T),B.classList.add("is-hidden"),U.classList.remove("is-hidden"),H("light")}function G(){P.style.setProperty("--accent",A),P.style.setProperty("--text",C),P.style.setProperty("--bg",J),P.style.setProperty("--btn",M),B.classList.remove("is-hidden"),U.classList.add("is-hidden"),H("dark")}function H(e){localStorage.setItem("theme",e)}B.addEventListener("click",Q),U.addEventListener("click",G);const R={btnWatched:document.querySelector(".js-watched"),btnQueue:document.querySelector(".js-queue"),gallery:document.querySelector(".gallery"),pagination:document.querySelector(".js-pagination")};var z;"light"===(z=D)||null===z?Q():G();R.btnQueue.classList.add("is-active"),R.btnWatched.addEventListener("click",(function(){w.classList.add("is-active"),k.classList.remove("is-active"),W();const n=e("watched");if(!n||0===n.length)return;let o=Math.ceil(n.length/20);t(1,n),s(1,o),i(o,"watched"),y("watched")})),R.btnQueue.addEventListener("click",(function(){E.classList.remove("is-active"),x.classList.add("is-active"),W();const n=e("queue");if(!n||0===n.length)return;let o=Math.ceil(n.length/20);t(1,n),s(1,o),i(o,"queue"),y("queue")}));const V=e("queue");function W(){R.gallery.innerHTML='<li class="default">\n        <p class="message">Sorry, there is nothing here yet.</p>\n        <img\n          src="https://img.freepik.com/free-photo/awkward-girl-shrugging-shoulders-with-apologizing-face-expression-looking-clueless-say-sorry-showing-empty-hands-has-nothing-standing-over-white-background_176420-48867.jpg"\n          alt="Empty"\n        />\n      </li>'}V&&0!==V.length?function(e){let n=Math.ceil(e.length/20);t(1,e),s(1,n),i(n,"queue"),y("queue")}(V):W(),new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting?N.classList.add("is-hidden"):N.classList.remove("is-hidden")}))}),{rootMargin:"1000px",threshold:1}).observe($);
//# sourceMappingURL=library.b26b3b17.js.map
