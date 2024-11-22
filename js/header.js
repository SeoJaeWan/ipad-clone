// 장바구니
(function () {
  const basketStarterEl = document.querySelector("header .basket-starter");
  const basketEl = basketStarterEl.querySelector(".basket");

  const showBasket = () => {
    basketEl.classList.add("show");
  };

  const hideBasket = () => {
    basketEl.classList.remove("show");
  };

  basketStarterEl.addEventListener("click", (e) => {
    if (!basketEl.contains(e.target)) {
      if (basketEl.classList.contains("show")) {
        hideBasket();
      } else {
        showBasket();
      }
    }
  });

  window.addEventListener("click", (e) => {
    if (!basketStarterEl.contains(e.target)) {
      hideBasket();
    }
  });
})();

// 검색
(function () {
  const headerEl = document.querySelector("header");
  const searchStarterEl = headerEl.querySelector(".search-starter");
  const headerMenusEls = headerEl.querySelectorAll("ul.menu > li");

  const searchWrapEl = headerEl.querySelector(".search-wrap");
  const searchCloserEl = searchWrapEl.querySelector(".search-closer");
  const searchShadowEl = headerEl.querySelector(".shadow");
  const searchDelayEls = searchWrapEl.querySelectorAll("li");
  const searchInputEl = searchWrapEl.querySelector("input[type='search']");

  const delayElement = (el, idx, length) => {
    el.style.transitionDelay = idx * (0.4 / length) + "s";
  };

  const showSearch = () => {
    headerEl.classList.add("searching");
    document.documentElement.classList.add("fixed");

    [...headerMenusEls].reverse().forEach((el, idx) => {
      delayElement(el, idx, headerMenusEls.length);
    });

    [...searchDelayEls].forEach((el, idx) => {
      delayElement(el, idx, searchDelayEls.length);
    });

    setTimeout(() => {
      searchInputEl.focus();
    }, 600);
  };

  const hideSearch = () => {
    headerEl.classList.remove("searching");
    document.documentElement.classList.remove("fixed");

    [...headerMenusEls].forEach((el, idx) => {
      delayElement(el, idx, headerMenusEls.length);
    });

    [...searchDelayEls].reverse().forEach((el, idx) => {
      delayElement(el, idx, searchDelayEls.length);
    });

    searchInputEl.value = "";
  };

  searchStarterEl.addEventListener("click", showSearch);
  searchCloserEl.addEventListener("click", hideSearch);
  searchShadowEl.addEventListener("click", hideSearch);
})();
