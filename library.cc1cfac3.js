function t(t){const e=localStorage.getItem(t);return JSON.parse(e)}function e(t,e){let a=20*(t-1),o=a+20;const i=document.querySelector(".gallery"),s=JSON.parse(localStorage.getItem("genres"));let l="";for(let t=a;t<o;t++)t<e.length&&(l+=`<li class="gallery__item" data-id="${e[t].id}">\n                <article>\n                    <img class="article__image" src="${e[t].poster_path?"https://image.tmdb.org/t/p/w500"+e[t].poster_path:"https://img.freepik.com/free-vector/error-404-concept-for-landing-page_52683-20173.jpg?w=2000"}" alt="${e[t].title?e[t].title:e[t].original_title}" width="280" loading="lazy">\n                    <h1 class="article__description">${e[t].title?e[t].title:e[t].original_title}</h1>\n                    <p class="article__description-orange">\n                        <span class="pseudo-element">\n                            ${n(e[t].genre_ids,s).length>=3?n(e[t].genre_ids,s).slice(0,2).join(", ")+", Others...":n(e[t].genre_ids,s).join(", ")?n(e[t].genre_ids,s).join(", "):"NO DATA"}\n                        </span>\n                        <span class="article__description-year">\n                            ${e[t].release_date?e[t].release_date.slice(0,4):"OUR ERA"}\n                        </span>\n                        <span class="modal__text-params-vote modal__text-params">\n                        ${e[t].vote_average}           \n                        </span>\n                    </p>\n                </article>\n            </li>`);i.innerHTML=l}function n(t,e){return t.map((t=>e.genres.filter((e=>e.id===t)).flatMap((t=>t.name))))}const a={pagContainer:document.querySelector(".js-pagination")};let o;function i(t,e){if(!t||!e||1===e)return;let n="";const i=t-1,s=t-2,l=Number(t)+1,r=Number(t)+2;o=t,t>1&&(n+='<li class="pagination__item"><button class="previos">\n        &larr;</button>\n      </li>'),t>3&&(n+='<li class="pagination__item"><button class="pagination__btn">1</button></li>'),t>4&&(n+='<li class="pagination__item"><button class="pagination__dottes">...</button></li>'),t>2&&(n+=`<li class="pagination__item"><button class="pagination__btn">${s}</button></li>`),t>1&&(n+=`<li class="pagination__item"><button class="pagination__btn">${i}</button></li>`),n+=`<li class="pagination__item"><button class="pagination__btn active__btn">${t}</button></li>`,l<=e&&(n+=`<li class="pagination__item"><button class="pagination__btn">${l}</button></li>`),r<=e&&(n+=`<li class="pagination__item"><button class="pagination__btn">${r}</button></li>`),e>t+3&&(n+='<li class="pagination__item"><button class="pagination__dottes">...</button></li>'),e>t+2&&(n+=`<li class="pagination__item"><button class="pagination__btn">${e}</button></li>`),e>t&&(n+='<li class="pagination__item"><button class="next">&rarr;</button></li>'),a.pagContainer.innerHTML=n}function s(n,s){a.pagContainer.addEventListener("click",(function(a){if("BUTTON"!==a.target.nodeName||"..."===a.target.textContent)return;o=a.target.classList.contains("previos")?Number(o)-1:a.target.classList.contains("next")?Number(o)+1:Number(a.target.textContent);const l=t(s);i(o,n),e(o,l)}))}const l={openGallery:document.querySelector(".gallery"),closeBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal__form"),article:document.querySelector(".modal__form-card"),body:document.querySelector("body")};let r,c,d,u="";function m(e){d=e,r=t(e),l.openGallery.addEventListener("click",_)}function _(t){t.target.nodeName!==t.currentTarget.nodeName&&(c=t.target.closest("li").dataset.id,console.log(c),function(t,e){console.log(t);const a=t.filter((t=>t.id===Number(e))),o=JSON.parse(localStorage.getItem("genres")),{title:i,poster_path:s,overview:r,vote_average:c,vote_count:m,popularity:_,original_title:p}=a[0];u=`\n      <img\n        class="modal__form-img"\n        src="https://image.tmdb.org/t/p/w500${s}"\n        alt=""\n      />\n      <div class="modal__descript">\n        <h2 class="modal__title">${i}</h2>\n\n        <table class="modal__descript-table">\n          <tbody>\n            <tr>\n              <td class="modal__text-properties">Vote / Votes</td>\n              <td class="modal__text-params">\n                <span class="modal__text-params-vote">${c}</span> /\n                <span class="modal__text-params-votes">${m}</span>\n              </td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Popularity</td>\n              <td class="modal__text-params">${_}</td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Original Title</td>\n              <td class="modal__text-params">${p}</td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Genre</td>\n              <td class="modal__text-params modal__text-low">${n(a[0].genre_ids,o).join(", ")}</td>\n            </tr>\n          </tbody>\n        </table>\n        <h3 class="modal__descript-titel">About</h3>\n        <p class="modal__descript-text">\n          ${r}\n        </p>\n        <ul class="modal__button__list">\n          <li>\n            <button class="modal__button__item-watched" type="button">remove from Watched</button>\n          </li>\n          <li><button class="modal__button__item-queue" type="button">remove from queue</button></li>\n        </ul>\n      </div>\n  `,l.article.innerHTML=u;const g=document.querySelector(".modal__button__item-watched"),b=document.querySelector(".modal__button__item-queue");"queue"===d?(g.textContent="add to Watched",b.textContent="remove from queue",b.addEventListener("click",h),g.addEventListener("click",f)):(g.textContent="remove from Watched",b.textContent="add to queue",g.addEventListener("click",h),b.addEventListener("click",f))}(r,c),l.backdrop.classList.add("is-open"),l.body.classList.add("ishidden"),document.addEventListener("click",p),document.addEventListener("keydown",g))}function p(t){t.target===l.backdrop&&(l.backdrop.classList.remove("is-open"),l.body.classList.remove("ishidden"),b())}function g(t){"Escape"===t.code&&(l.backdrop.classList.remove("is-open"),l.body.classList.remove("ishidden"),b())}function b(){document.removeEventListener("keydown",g),document.removeEventListener("click",p)}function h(n){const a=t(d),o=a.findIndex((t=>t.id===Number(c)));a.splice(o,1),localStorage.setItem(d,JSON.stringify(a)),e(1,a),l.backdrop.classList.remove("is-open"),0===a.length&&w()}function f(e){if("queue"===d){console.log("here queue");const n=t("watched");if(n.find((t=>t.id===Number(c))))return;const a=t("queue").find((t=>t.id===Number(c)));n.push(a),localStorage.setItem("watched",JSON.stringify(n)),console.log(e.target.textContent),e.target.textContent="added"}else if("watched"===d){console.log("here watch");const n=t("queue");if(n.find((t=>t.id===Number(c))))return;const a=t("watched").find((t=>t.id===Number(c)));n.push(a),localStorage.setItem("queue",JSON.stringify(n)),e.target.textContent="added"}}document.querySelector(".modal__btn").addEventListener("click",(function(t){t.preventDefault(),l.backdrop.classList.remove("is-open"),l.body.classList.remove("ishidden"),b()}));const y=document.querySelector(".js-watched"),v=document.querySelector(".js-queue");const q=document.querySelector(".js-watched"),L=document.querySelector(".js-queue");const S={btnWatched:document.querySelector(".js-watched"),btnQueue:document.querySelector(".js-queue"),gallery:document.querySelector(".gallery"),pagination:document.querySelector(".js-pagination")};S.btnQueue.classList.add("is-active"),S.btnWatched.addEventListener("click",(function(){y.classList.add("is-active"),v.classList.remove("is-active"),w();const n=t("watched");if(!n||0===n.length)return;let a=Math.ceil(n.length/20);e(1,n),i(1,a),s(a,"watched"),m("watched")})),S.btnQueue.addEventListener("click",(function(){q.classList.remove("is-active"),L.classList.add("is-active"),w();const n=t("queue");if(!n||0===n.length)return;let a=Math.ceil(n.length/20);e(1,n),i(1,a),s(a,"queue"),m("queue")}));const x=t("queue");function w(){S.gallery.innerHTML='<li class="default">\n        <p class="message">Sorry, there is nothing here yet.</p>\n        <img\n          src="https://img.freepik.com/free-photo/awkward-girl-shrugging-shoulders-with-apologizing-face-expression-looking-clueless-say-sorry-showing-empty-hands-has-nothing-standing-over-white-background_176420-48867.jpg"\n          alt="Empty"\n        />\n      </li>'}x&&0!==x.length?function(t){let n=Math.ceil(t.length/20);e(1,t),i(1,n),s(n,"queue"),m("queue")}(x):w();
//# sourceMappingURL=library.cc1cfac3.js.map