function t(t){const e=localStorage.getItem(t);return JSON.parse(e)}function e(t,e){let a=20*(t-1),o=a+20;const i=document.querySelector(".gallery"),s=JSON.parse(localStorage.getItem("genres"));let l="";for(let t=a;t<o;t++)t<e.length&&(l+=`<li class="gallery__item" data-id="${e[t].id}">\n                <article>\n                    <img class="article__image" src="${e[t].poster_path?"https://image.tmdb.org/t/p/w500"+e[t].poster_path:"https://img.freepik.com/free-vector/error-404-concept-for-landing-page_52683-20173.jpg?w=2000"}" alt="${e[t].title?e[t].title:e[t].original_title}" width="280" loading="lazy">\n                    <h1 class="article__description">${e[t].title?e[t].title:e[t].original_title}</h1>\n                    <p class="article__description-orange">\n                        <span class="pseudo-element">\n                            ${n(e[t].genre_ids,s).length>=3?n(e[t].genre_ids,s).slice(0,2).join(", ")+", Others...":n(e[t].genre_ids,s).join(", ")?n(e[t].genre_ids,s).join(", "):"NO DATA"}\n                        </span>\n                        <span>\n                            ${e[t].release_date?e[t].release_date.slice(0,4):"OUR ERA"}\n                        </span>\n                    </p>\n                </article>\n            </li>`);i.innerHTML=l}function n(t,e){return t.map((t=>e.genres.filter((e=>e.id===t)).flatMap((t=>t.name))))}const a={pagContainer:document.querySelector(".js-pagination")};let o;function i(t,e){if(!t||!e||1===e)return;let n="";const i=t-1,s=t-2,l=Number(t)+1,c=Number(t)+2;o=t,t>1&&(n+='<li class="pagination__item"><button class="previos">\n        &larr;</button>\n      </li>'),t>3&&(n+='<li class="pagination__item"><button class="pagination__btn">1</button></li>'),t>4&&(n+='<li class="pagination__item"><button class="pagination__dottes">...</button></li>'),t>2&&(n+=`<li class="pagination__item"><button class="pagination__btn">${s}</button></li>`),t>1&&(n+=`<li class="pagination__item"><button class="pagination__btn">${i}</button></li>`),n+=`<li class="pagination__item"><button class="pagination__btn active__btn">${t}</button></li>`,l<=e&&(n+=`<li class="pagination__item"><button class="pagination__btn">${l}</button></li>`),c<=e&&(n+=`<li class="pagination__item"><button class="pagination__btn">${c}</button></li>`),e>t+3&&(n+='<li class="pagination__item"><button class="pagination__dottes">...</button></li>'),e>t+2&&(n+=`<li class="pagination__item"><button class="pagination__btn">${e}</button></li>`),e>t&&(n+='<li class="pagination__item"><button class="next">&rarr;</button></li>'),a.pagContainer.innerHTML=n}function s(n){a.pagContainer.addEventListener("click",(function(a){if("BUTTON"!==a.target.nodeName||"..."===a.target.textContent)return;o=a.target.classList.contains("previos")?Number(o)-1:a.target.classList.contains("next")?Number(o)+1:Number(a.target.textContent);const s=t("queue");i(o,n),e(o,s)}))}const l={openGallery:document.querySelector(".gallery"),closeBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]"),modal:document.querySelector(".modal__form"),article:document.querySelector(".modal__form-card")};let c,r,d="";function u(t){console.log(t),c=t,l.openGallery.addEventListener("click",_)}function _(t){t.target.nodeName!==t.currentTarget.nodeName&&(r=t.target.closest("li").dataset.id,console.log(r),function(t,e){const a=t.filter((t=>t.id===Number(e))),o=JSON.parse(localStorage.getItem("genres")),{title:i,poster_path:s,overview:c,vote_average:r,vote_count:u,popularity:_,original_title:m}=a[0];d=`\n      <img\n        class="modal__form-img"\n        src="https://image.tmdb.org/t/p/w500${s}"\n        alt=""\n      />\n      <div class="modal__descript">\n        <h2 class="modal__title">${i}</h2>\n\n        <table class="modal__descript-table">\n          <tbody>\n            <tr>\n              <td class="modal__text-properties">Vote / Votes</td>\n              <td class="modal__text-params">\n                <span class="modal__text-params-vote">${r}</span> /\n                <span class="modal__text-params-votes">${u}</span>\n              </td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Popularity</td>\n              <td class="modal__text-params">${_}</td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Original Title</td>\n              <td class="modal__text-params">${m}</td>\n            </tr>\n            <tr>\n              <td class="modal__text-properties">Genre</td>\n              <td class="modal__text-params modal__text-low">${n(a[0].genre_ids,o).join(", ")}</td>\n            </tr>\n          </tbody>\n        </table>\n        <h3 class="modal__descript-titel">About</h3>\n        <p class="modal__descript-text">\n          ${c}\n        </p>\n        <ul class="modal__button__list">\n          <li>\n            <button class="modal__button__item-watched" type="button">remove from Watched</button>\n          </li>\n          <li><button class="modal__button__item-queue" type="button">remove from queue</button></li>\n        </ul>\n      </div>\n  `,l.article.innerHTML=d;document.querySelector(".modal__button__item-watched"),document.querySelector(".modal__button__item-queue")}(c,r),l.backdrop.classList.add("is-open"),document.addEventListener("click",m),document.addEventListener("keydown",p))}function m(t){t.target===l.backdrop&&(l.backdrop.classList.remove("is-open"),g())}function p(t){"Escape"===t.code&&(l.backdrop.classList.remove("is-open"),g())}function g(){document.removeEventListener("keydown",p),document.removeEventListener("click",m)}document.querySelector(".modal__btn").addEventListener("click",(function(t){t.preventDefault(),l.backdrop.classList.remove("is-open"),g()}));const b=document.querySelector(".js-watched"),v=document.querySelector(".js-queue");const y=document.querySelector(".js-watched"),h=document.querySelector(".js-queue");const f={btnWatched:document.querySelector(".js-watched"),btnQueue:document.querySelector(".js-queue"),gallery:document.querySelector(".gallery"),pagination:document.querySelector(".js-pagination")};f.btnQueue.classList.add("is-active"),f.btnWatched.addEventListener("click",(function(){b.classList.add("is-active"),v.classList.remove("is-active");const n=t("watched");let a=Math.ceil(n.length/20);e(1,n),i(1,a),s(a),u(n)})),f.btnQueue.addEventListener("click",(function(){y.classList.remove("is-active"),h.classList.add("is-active");const n=t("queue");let a=Math.ceil(n.length/20);e(1,n),i(1,a),s(a),u(n)}));const q=t("queue");let S=Math.ceil(q.length/20);e(1,q),i(1,S),s(S),u(q);
//# sourceMappingURL=library.a3a068bc.js.map
