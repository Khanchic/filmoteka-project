const e=document.querySelector(".scrollToTopBtn"),t=document.querySelector(".pagination__list");e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));new IntersectionObserver((function(t){t.forEach((t=>{t.isIntersecting?e.classList.remove("is-hidden"):e.classList.add("is-hidden")}))}),{rootMargin:"40%",threshold:.5}).observe(t);var r={teamList:document.querySelector(".team-list"),teamBtn:document.querySelector(".page-footer__action-btn"),lightboxBtn:document.querySelector(".lightbox-button"),lightboxContainer:document.querySelector(".js-lightbox"),movieList:document.querySelector(".main__section-list"),iconCloseBtn:document.querySelectorAll(".close-icon-container"),loginModal:document.querySelector(".login-page"),closeBtn:document.querySelector(".close-icon-container"),loginBtn:document.querySelector("#login"),logoutBtn:document.querySelector("#logout"),regForm:document.querySelector(".register-form"),logForm:document.querySelector(".login-form"),createLink:document.querySelector(".create-message a"),loginLink:document.querySelector(".login-message a"),header:document.getElementById("page-header"),navMenu:document.getElementById("page-nav"),navLinks:document.querySelectorAll(".link-nav"),checkBox:document.querySelector("#theme-switch-toggle"),serchForm:document.querySelector(".search-form-js"),searchFormInput:document.querySelector(".search-form__input"),nextBtn:document.querySelector(".next-btn-js"),spinner:document.querySelector(".spinner"),watchedBtn:document.querySelector(".watched"),queueBtn:document.querySelector(".queue"),mask:document.querySelector(".mask"),errorMessage:document.querySelector(".search-form__field-error"),listPagesEl:document.querySelector(".pagination__list"),libraryPage:document.querySelector(".library-page-js"),libraryInfo:document.querySelector(".main__library-info"),headerContainer:document.querySelector(".header-container-js"),libraryContainer:document.querySelector(".library__section-list"),mainWrapper:document.querySelector(".main__section-wrapper")};const o={DARK:"dark-theme",LIGHT:"light-theme"};r.header.addEventListener("click",(e=>{const t=e.target,o=t.closest(".logo");if(""===t.dataset.link||o){e.preventDefault();const n=(o||t).href.split("#")[1];r.navLinks.forEach((e=>e.classList.remove("current"))),r.navMenu.querySelector(`[href='#${n}']`).classList.add("current"),"home"===n?(r.movieList.classList.remove("is-hidden"),r.libraryContainer.classList.add("is-hidden"),r.header.classList.replace("header-library","header-home")):(r.movieList.classList.add("is-hidden"),r.libraryContainer.classList.remove("is-hidden"),r.header.classList.replace("header-home","header-library"))}}));const n=document.body.classList;localStorage.getItem("theme")?localStorage.getItem("theme")===o.LIGHT?n.add(o.LIGHT):localStorage.getItem("theme")===o.DARK&&(r.checkBox.checked=!0,n.add(o.DARK)):n.add(o.LIGHT),r.checkBox.addEventListener("change",(function(e){r.checkBox.checked?(localStorage.setItem("theme",o.DARK),n.replace(o.LIGHT,o.DARK)):r.checkBox.checked||(localStorage.setItem("theme",o.LIGHT),n.replace(o.DARK,o.LIGHT))})),window.addEventListener("load",(()=>{setTimeout((()=>{r.mask.remove()}),600)}));const c=new ApiServiceMarkup,a=new Auth;a.init();const i=new DataBaseFirebase;i.auth.onAuthStateChanged((e=>{e&&(i.addFilmToFirebase(e),i.pushWatchedToLibrary(e),i.pushQueueToLibrary(e)),a.setupLoginBtn(e)})),c.getMarkUp(),c.addEventListeners(),c.paginationListner(),c.renderOneMovie();
//# sourceMappingURL=index.5dc0a9ae.js.map