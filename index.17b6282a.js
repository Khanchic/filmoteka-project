!function(){var e=document.querySelector(".scrollToTopBtn"),t=document.querySelector(".pagination__list");e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?e.classList.remove("is-hidden"):e.classList.add("is-hidden")}))}),{rootMargin:"40%",threshold:.5}).observe(t);var r={teamList:document.querySelector(".team-list"),teamBtn:document.querySelector(".page-footer__action-btn"),lightboxBtn:document.querySelector(".lightbox-button"),lightboxContainer:document.querySelector(".js-lightbox"),movieList:document.querySelector(".main__section-list"),iconCloseBtn:document.querySelectorAll(".close-icon-container"),loginModal:document.querySelector(".login-page"),closeBtn:document.querySelector(".close-icon-container"),loginBtn:document.querySelector("#login"),logoutBtn:document.querySelector("#logout"),regForm:document.querySelector(".register-form"),logForm:document.querySelector(".login-form"),createLink:document.querySelector(".create-message a"),loginLink:document.querySelector(".login-message a"),header:document.getElementById("page-header"),navMenu:document.getElementById("page-nav"),navLinks:document.querySelectorAll(".link-nav"),checkBox:document.querySelector("#theme-switch-toggle"),serchForm:document.querySelector(".search-form-js"),searchFormInput:document.querySelector(".search-form__input"),nextBtn:document.querySelector(".next-btn-js"),spinner:document.querySelector(".spinner"),watchedBtn:document.querySelector(".watched"),queueBtn:document.querySelector(".queue"),mask:document.querySelector(".mask"),errorMessage:document.querySelector(".search-form__field-error"),listPagesEl:document.querySelector(".pagination__list"),libraryPage:document.querySelector(".library-page-js"),libraryInfo:document.querySelector(".main__library-info"),headerContainer:document.querySelector(".header-container-js"),libraryContainer:document.querySelector(".library__section-list"),mainWrapper:document.querySelector(".main__section-wrapper")},o="current",n="header-library",c="header-home",a={DARK:"dark-theme",LIGHT:"light-theme"};r.header.addEventListener("click",(function(e){var t=e.target,a=t.closest(".logo");if(""===t.dataset.link||a){e.preventDefault();var i=(a||t).href.split("#")[1];r.navLinks.forEach((function(e){return e.classList.remove(o)})),r.navMenu.querySelector("[href='#".concat(i,"']")).classList.add(o),"home"===i?(r.movieList.classList.remove("is-hidden"),r.libraryContainer.classList.add("is-hidden"),r.header.classList.replace(n,c)):(r.movieList.classList.add("is-hidden"),r.libraryContainer.classList.remove("is-hidden"),r.header.classList.replace(c,n))}}));var i=document.body.classList,l="theme";localStorage.getItem(l)?localStorage.getItem(l)===a.LIGHT?i.add(a.LIGHT):localStorage.getItem(l)===a.DARK&&(r.checkBox.checked=!0,i.add(a.DARK)):i.add(a.LIGHT),r.checkBox.addEventListener("change",(function(e){r.checkBox.checked?(localStorage.setItem(l,a.DARK),i.replace(a.LIGHT,a.DARK)):r.checkBox.checked||(localStorage.setItem(l,a.LIGHT),i.replace(a.DARK,a.LIGHT))})),window.addEventListener("load",(function(){setTimeout((function(){r.mask.remove()}),600)}));var s=new ApiServiceMarkup,u=new Auth;u.init();var d=new DataBaseFirebase;d.auth.onAuthStateChanged((function(e){e&&(d.addFilmToFirebase(e),d.pushWatchedToLibrary(e),d.pushQueueToLibrary(e)),u.setupLoginBtn(e)})),s.getMarkUp(),s.addEventListeners(),s.paginationListner(),s.renderOneMovie()}();
//# sourceMappingURL=index.17b6282a.js.map