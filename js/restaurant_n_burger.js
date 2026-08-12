"use strict";

var RESTAURANT_VENUES = {
  n_grill: {
    tabIndex: 1,
    floor: "T7 Floor",
    hours: "10:00 ~ 23:00",
    title: "n.Grill",
    description: "A luxurious 360-degree rotating French fine-dining restaurant.",
    mainImage: "../assets/restaurant/venues/n_grill/main.png",
    mainAlt: "Dining table at n.Grill overlooking Seoul at night",
    info: [
      { title: "Reservation Guide", text: "02)3455-9297/9298", note: "Reservations can be made by calling during business hours." },
      { title: "Directions", text: "After presenting your reservation details at the N Seoul Tower 5th floor observatory ticket booth (information desk), take the elevator to the 7th floor of the Tower.", note: "Free observatory tickets are issued only to those who have made a reservation for N Grill." }
    ],
    gallery: ["../assets/restaurant/venues/n_grill/gallery.png"],
    galleryAlt: "n.Grill dining room with panoramic night views of Seoul",
    guide: [
      { title: "Usage Precautions", lines: ["If you use 60% or more of the gift certificate's face value, you can receive the remaining balance in cash.", "For certificates of 10,000 won or less, the remaining balance can be refunded if 80% or more is used.", "Gift certificates cannot be exchanged for cash.", "Discount systems are subject to change depending on the affiliate's circumstances."] },
      { title: "Available Gift Certificates Guide", lines: ["CJ Gift Card", "National Tourism Gift Certificate"], image: "../assets/restaurant/venues/n_grill/gift_cards.png" }
    ],
    menus: [
      ["Sea Bass Steak With Beurre Monte", "A delicate sea bass steak served with a rich and velvety beurre monté butter sauce.", "200.0 KBW", "menu_1.png"],
      ["Korean beef sirloin steak", "A tender Korean beef sirloin steak offering rich juices and exceptional texture.", "200.0 KBW", "menu_2.png"],
      ["Lobster gruyere gratin", "A delectable gratin featuring fresh lobster combined with savory Gruyere cheese.", "300.0 KBW", "menu_3.png"],
      ["Charcoal-grilled lamb racks", "Tender lamb racks enhanced with a rich charcoal-grilled flavor.", "200.0 KBW", "menu_4.png"]
    ],
    assetPath: "n_grill",
    wordmark: "../assets/restaurant/venues/n_grill/wordmark.png"
  },
  hancook: {
    tabIndex: 2,
    floor: "T3 Floor",
    hours: "10:00 ~ 21:00",
    title: "HANCOOK KOREAN GRILL & DINE",
    description: "A modern Hanwoo grill dining experience with full flavors, enjoyed at Namsan 400M above sea level.",
    mainImage: "../assets/restaurant/venues/hancook/main.png",
    mainAlt: "HANCOOK Korean dining table overlooking Seoul",
    info: [
      { title: "Reservation Guide", text: "02)3455-9291/9292" },
      { title: "Directions", text: "After getting off the elevator at the Observatory (5th floor/T5), move down 2 floors using the internal observatory stairs (3rd floor/T3).", note: "Free observatory tickets can be issued only for HANCOOK reservation customers." }
    ],
    gallery: ["../assets/restaurant/venues/hancook/gallery.png"],
    galleryAlt: "Warmly lit interior of HANCOOK Korean Grill and Dine",
    guide: [{ title: "Discount Cards", intro: "HANCOOK N SEOUL TOWER Partnership · Discount & Gift card Guide", lines: ["The CJ card 20% Discount + 2% Rewards", "CJ KB Kookmin Card", "CJ SC BC Card", "CJ Samsung Card", "CJ Citibank Card", "CJ Hyundai Card", "CJ Lotte Card", "CJ Shinhan Card", "CJ Hana SK Card"], image: "../assets/restaurant/venues/hancook/gift_cards.png" }],
    menus: [
      ["Charcoal-grilled Korean Beef & Soybean Paste Jjigae", "A set meal featuring juicy charcoal-grilled Korean beef served with soybean paste jjigae.", "65.0 KBW", "menu_1.png"],
      ["Charcoal-grilled Korean Beef & Cold Buckwheat Noodles", "A set meal featuring juicy charcoal-grilled Korean beef served with cold buckwheat noodles.", "65.0 KBW", "menu_2.png"],
      ["Short Rib Pattie with Abalone & Soybean Paste Jjigae", "A set meal featuring short rib patties made with minced beef and abalone.", "63.0 KBW", "menu_3.png"],
      ["Grilled Bulgogi Bibimbap", "A bibimbap set meal featuring crispy grilled bulgogi toppings.", "50.0 KBW", "menu_4.png"]
    ],
    assetPath: "hancook",
    wordmark: "../assets/restaurant/venues/hancook/wordmark.png"
  },
  the_place: {
    tabIndex: 3,
    floor: "T3 Floor",
    hours: "10:00 ~ 23:00",
    title: "The Place Dining",
    description: "A casual Italian restaurant full of youth and romance.",
    mainImage: "../assets/restaurant/venues/the_place/main.png",
    mainAlt: "Italian dining table at The Place Dining overlooking Seoul",
    info: [
      { title: "Reservation Guide", text: "02) 3455-9220" },
      { title: "Directions", text: "Use the N Seoul Tower roof terrace stairs · Tower 2F" },
      { title: "Available Gift Certificates", text: "Shinsegae Gift Certificate / CJ Gift Certificate / Lotte Gift Certificate / Samsung Gift Certificate" }
    ],
    gallery: ["../assets/restaurant/venues/the_place/gallery.png"],
    galleryAlt: "Daytime interior of The Place Dining with city views",
    guide: [{ title: "Usage Precautions", lines: ["Paper gift certificates (mobile exchange vouchers cannot be used), CJ gift cards can be used.", "Gift certificates with expired validity cannot have their period extended or be used.", "Gift certificates are securities and cannot be canceled or refunded upon on-site payment.", "If you use 60% or more of the gift certificate's face value, you can receive the remaining balance in cash.", "For certificates of 10,000 won or less, the remaining balance can be refunded if 80% or more is used.", "Gift certificates cannot be exchanged for cash."], image: "../assets/restaurant/venues/the_place/gift_cards.png" }],
    menus: [
      ["Fresh Margherita", "Margherita pizza topped with fior di latte cheese, basil, and tomato sauce.", "26.0 KBW", "menu_1.png"],
      ["Scallop Olio", "Oil-based pasta topped with scallop and shrimp.", "29.0 KBW", "menu_2.png"],
      ["Rucola Salad", "Salad tossed with arugula, Granapadano cheese, and white vinegar dressing.", "18.0 KBW", "menu_3.png"],
      ["Calamari & Gamberi Fritto", "Italian-style fritto of crispy cornmeal-fried shrimp and cuttlefish.", "24.0 KBW", "menu_4.png"]
    ],
    assetPath: "the_place",
    wordmark: "../assets/restaurant/venues/the_place/wordmark.png"
  },
  durumi: {
    tabIndex: 4,
    floor: "T1 Floor",
    hours: "10:00 ~ 21:00",
    title: "Durumi Bunsik",
    description: "A KOREAN DINER where you can enjoy all kinds of delicious Korean street food.",
    mainImage: "../assets/restaurant/venues/durumi/main.png",
    mainAlt: "Kimbap, ramyun and tteokbokki served at Durumi Bunsik",
    info: [{ title: "Inquiry", text: "02) 318-4146" }, { title: "Directions", text: "N Seoul Tower Tower 1F" }],
    gallery: ["../assets/restaurant/venues/durumi/gallery.png"],
    galleryAlt: "Bright interior of Durumi Bunsik overlooking Seoul",
    menus: [
      ["NamSan Kimbap", "A nutritious classic Kimbap packed generously with fresh ingredients.", "7.5 KBW", "menu_1.png"],
      ["Original Rice Tteokbokki", "Chewy whole-rice-cake tteokbokki tossed in a signature spicy sauce.", "8.0 KBW", "menu_2.png"],
      ["Sweet & Soy Dakgangjeong", "Crispy fried chicken glazed in a delicious sweet and spicy sauce.", "14.5 KBW", "menu_3.png"],
      ["Egg Ramyun", "Korea's ultimate soul food ramen cooked to a hearty and savory perfection.", "7.5 KBW", "menu_4.png"]
    ],
    assetPath: "durumi"
  },
  n_terrace: {
    tabIndex: 5,
    floor: "T1 Floor",
    hours: "11:00 ~ 20:00",
    title: "N Terrace",
    description: "The highest terrace cafe & bar in Seoul.",
    mainImage: "../assets/restaurant/venues/n_terrace/main.png",
    mainAlt: "Exterior of N Terrace at sunset",
    info: [{ title: "Inquiry", text: "02) 318-4146" }, { title: "Directions", text: "N Seoul Tower Tower 1F" }],
    gallery: ["../assets/restaurant/venues/n_terrace/gallery_1.png", "../assets/restaurant/venues/n_terrace/gallery_2.png"],
    galleryAlt: "Outdoor seating and cafe exterior at N Terrace",
    seal: "../assets/restaurant/venues/n_terrace/seal.png",
    wordmark: "../assets/restaurant/venues/n_terrace/wordmark.png"
  },
  n_sweet_bar: {
    tabIndex: 6,
    floor: "T5 Floor",
    hours: "10:00 ~ 21:00",
    title: "N Sweet Bar",
    description: "A place where sweetness fills your mouth.",
    mainImage: "../assets/restaurant/venues/n_sweet_bar/main.png",
    mainAlt: "Colorful candy display at N Sweet Bar",
    info: [{ title: "Directions", text: "N Seoul Tower 5F" }],
    gallery: ["../assets/restaurant/venues/n_sweet_bar/gallery_1.png", "../assets/restaurant/venues/n_sweet_bar/gallery_2.png"],
    galleryAlt: "Snacks and interior of N Sweet Bar",
    seal: "../assets/restaurant/venues/n_sweet_bar/seal.png",
    wordmark: "../assets/restaurant/venues/n_sweet_bar/wordmark.png"
  }
};

function escapeRestaurantText(value) {
  return String(value).replace(/[&<>"]/g, function replaceCharacter(character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
  });
}

var restaurantVenueGsapContext = null;

function destroyRestaurantVenueAnimation() {
  if (!restaurantVenueGsapContext) {
    return;
  }

  restaurantVenueGsapContext.revert();
  restaurantVenueGsapContext = null;
}

function initRestaurantVenueAnimation(panel) {
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  var isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  destroyRestaurantVenueAnimation();

  if (!panel || isReducedMotion || !gsap || !ScrollTrigger) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  restaurantVenueGsapContext = gsap.context(function createVenueAnimations() {
    function reveal(targets, trigger, options) {
      var elements = gsap.utils.toArray(targets);

      if (!elements.length || !trigger) {
        return;
      }

      var settings = options || {};

      gsap.from(elements, {
        autoAlpha: 0,
        x: settings.x || 0,
        y: settings.y || 0,
        scale: settings.scale || 1,
        duration: settings.duration || 0.85,
        stagger: settings.stagger || 0,
        ease: "power3.out",
        clearProps: "transform,opacity,visibility",
        scrollTrigger: {
          trigger: trigger,
          start: settings.start || "top 82%",
          once: true
        }
      });
    }

    var intro = panel.querySelector(".venue_intro");
    var gallery = panel.querySelector(".venue_gallery");
    var guide = panel.querySelector(".venue_guide");
    var bestMenu = panel.querySelector(".venue_best");
    var wordmark = panel.querySelector(".venue_wordmark");

    reveal(panel.querySelectorAll(".venue_main_image"), intro, { x: -64 });
    reveal(panel.querySelectorAll(".venue_intro_body > *"), intro, { x: 64, stagger: 0.09 });
    reveal(panel.querySelectorAll(".venue_gallery_item"), gallery, { y: 56, scale: 0.985, stagger: 0.12 });
    reveal(panel.querySelectorAll(".venue_gallery_seal"), gallery, { scale: 0.7, duration: 0.65, start: "top 76%" });
    reveal(panel.querySelectorAll(".venue_guide > h2, .venue_guide_card"), guide, { y: 48, stagger: 0.1 });
    reveal(panel.querySelectorAll(".venue_section_heading > *"), bestMenu, { y: 40, stagger: 0.08 });
    reveal(panel.querySelectorAll(".venue_menu_card"), bestMenu, { y: 64, stagger: 0.1, start: "top 86%" });
    reveal(wordmark ? [wordmark] : [], wordmark, { x: 64, duration: 1 });
  }, panel);

  Array.prototype.forEach.call(panel.querySelectorAll("img"), function refreshAfterVenueImage(image) {
    if (!image.complete) {
      image.addEventListener("load", function handleVenueImageLoad() {
        ScrollTrigger.refresh();
      }, { once: true });
    }
  });

  ScrollTrigger.refresh();
}

function renderRestaurantVenue(key) {
  var panel = document.querySelector("[data-restaurant-venue-panel]");
  var burgerPanel = document.querySelector("[data-restaurant-burger-panel]");
  var venue = RESTAURANT_VENUES[key];

  if (!panel || !burgerPanel || !venue) {
    return;
  }

  destroyRestaurantVenueAnimation();

  var infoMarkup = venue.info.map(function renderInfo(item) {
    return '<article class="venue_info_box"><h3>' + escapeRestaurantText(item.title) + '</h3><p>' + escapeRestaurantText(item.text) + '</p>' + (item.note ? '<p class="venue_info_note">※ ' + escapeRestaurantText(item.note) + '</p>' : '') + '</article>';
  }).join("");
  var galleryMarkup = venue.gallery.map(function renderGallery(image, index) {
    return '<figure class="venue_gallery_item"><img src="' + image + '" alt="' + escapeRestaurantText(venue.galleryAlt + (venue.gallery.length > 1 ? " " + (index + 1) : "")) + '" width="1600" height="568" loading="lazy"></figure>';
  }).join("");
  var guideMarkup = (venue.guide || []).map(function renderGuide(card) {
    var list = card.lines.map(function renderLine(line, index) { return '<li><span>' + (index + 1) + '.</span> ' + escapeRestaurantText(line) + '</li>'; }).join("");
    return '<article class="venue_guide_card"><div><h3>' + escapeRestaurantText(card.title) + '</h3>' + (card.intro ? '<p class="venue_guide_intro">' + escapeRestaurantText(card.intro) + '</p>' : '') + '<ol>' + list + '</ol></div>' + (card.image ? '<img src="' + card.image + '" alt="Gift certificates accepted at ' + escapeRestaurantText(venue.title) + '" width="765" height="319" loading="lazy">' : '') + '</article>';
  }).join("");
  var menuMarkup = (venue.menus || []).map(function renderMenu(menu, index) {
    return '<article class="venue_menu_card"><figure><img src="../assets/restaurant/venues/' + venue.assetPath + '/' + menu[3] + '" alt="' + escapeRestaurantText(menu[0]) + '" width="700" height="700" loading="lazy"></figure><h3><span>' + (index + 1) + '</span>' + escapeRestaurantText(menu[0]) + '</h3><p>' + escapeRestaurantText(menu[1]) + '</p><strong>' + escapeRestaurantText(menu[2]) + '</strong></article>';
  }).join("");

  panel.innerHTML = '<section class="venue_content venue_content_' + key + '" aria-labelledby="venue_title"><div class="page_container">' +
    '<div class="venue_intro"><figure class="venue_main_image"><img src="' + venue.mainImage + '" alt="' + escapeRestaurantText(venue.mainAlt) + '" width="637" height="689"></figure>' +
    '<div class="venue_intro_body"><p class="venue_meta"><span>' + escapeRestaurantText(venue.floor) + '</span><i aria-hidden="true">|</i><span>' + escapeRestaurantText(venue.hours) + '</span></p><h2 id="venue_title">' + escapeRestaurantText(venue.title) + '</h2><p class="venue_description">' + escapeRestaurantText(venue.description) + '</p><div class="venue_info_grid">' + infoMarkup + '</div><button class="venue_reserve_button" type="button" disabled>Go to Reservation App</button></div></div>' +
    '<div class="venue_gallery ' + (venue.gallery.length > 1 ? 'venue_gallery_split' : '') + '">' + galleryMarkup + (venue.seal ? '<img class="venue_gallery_seal" src="' + venue.seal + '" alt="" width="122" height="121" loading="lazy">' : '') + '</div>' +
    (guideMarkup ? '<section class="venue_guide" aria-labelledby="venue_guide_title"><h2 id="venue_guide_title">Visit Guide</h2><div class="venue_guide_grid">' + guideMarkup + '</div></section>' : '') +
    (menuMarkup ? '<section class="venue_best" aria-labelledby="venue_best_title"><div class="venue_section_heading"><h2 id="venue_best_title">Best Menu</h2><p>* Representative image. Actual presentation may vary.</p></div><div class="venue_menu_grid">' + menuMarkup + '</div></section>' : '<p class="venue_gallery_note">* Representative image. Actual presentation may vary.</p>') +
    (venue.wordmark ? '<img class="venue_wordmark" src="' + venue.wordmark + '" alt="" aria-hidden="true" loading="lazy">' : '') +
    '</div></section>';

  burgerPanel.hidden = true;
  panel.hidden = false;
  initRestaurantVenueAnimation(panel);
}

function initRestaurantVenueTabs() {
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".subpage_tabs .subpage_tab"));
  var panel = document.querySelector("[data-restaurant-venue-panel]");
  var burgerPanel = document.querySelector("[data-restaurant-burger-panel]");
  var venueKeys = ["n_burger", "n_grill", "hancook", "the_place", "durumi", "n_terrace", "n_sweet_bar"];

  if (!tabs.length || !panel || !burgerPanel) {
    return;
  }

  function activateTab(index, shouldUpdateHistory) {
    var key = venueKeys[index];

    tabs.forEach(function renderTabState(tab, tabIndex) {
      var isActive = tabIndex === index;
      tab.classList.toggle("is_active", isActive);
      if (isActive) {
        tab.setAttribute("aria-current", "page");
      } else {
        tab.removeAttribute("aria-current");
      }
    });

    if (key === "n_burger") {
      destroyRestaurantVenueAnimation();
      panel.hidden = true;
      panel.innerHTML = "";
      burgerPanel.hidden = false;
    } else {
      renderRestaurantVenue(key);
    }

    if (shouldUpdateHistory) {
      window.history.replaceState({ restaurant: key }, "", "#" + key.replace(/_/g, "-"));
    }

    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }
  }

  tabs.forEach(function bindRestaurantTab(tab, index) {
    tab.removeAttribute("data-pending-link");
    tab.removeAttribute("aria-disabled");
    tab.addEventListener("click", function handleRestaurantTabClick(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      activateTab(index, true);
    }, true);
  });

  var hashKey = window.location.hash.slice(1).replace(/-/g, "_");
  var initialIndex = venueKeys.indexOf(hashKey);
  activateTab(initialIndex >= 0 ? initialIndex : 0, false);
}

/* ========================================================================== 
   Restaurant > N Burger page interactions
   ========================================================================== */

function initRestaurantScrollAnimations() {
  var isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initRestaurantVenueTabs();

  initBurgerGallerySlider(isReducedMotion);
  initBurgerBestSwiper(isReducedMotion);

  if (isReducedMotion || !window.gsap || !window.ScrollTrigger) {
    return;
  }

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;

  gsap.registerPlugin(ScrollTrigger);

  function revealFrom(targets, options) {
    if (!targets || targets.length === 0) {
      return;
    }

    var settings = options || {};

    gsap.from(targets, {
      autoAlpha: 0,
      x: settings.x || 0,
      y: settings.y || 48,
      scale: settings.scale || 1,
      duration: settings.duration || 0.85,
      stagger: settings.stagger || 0,
      ease: "power3.out",
      clearProps: "transform,opacity,visibility",
      scrollTrigger: {
        trigger: settings.trigger || targets[0],
        start: settings.start || "top 82%",
        once: true
      }
    });
  }

  function initBurgerGallerySlider(shouldReduceMotion) {
    var slider = document.querySelector("[data-gallery-slider]");
    var previousButton = document.querySelector("[data-gallery-prev]");
    var nextButton = document.querySelector("[data-gallery-next]");
    var paginationButtons = Array.prototype.slice.call(
      document.querySelectorAll("[data-gallery-pagination-button]")
    );

    if (!slider || !previousButton || !nextButton) {
      return;
    }

    var sliderRegion = slider.closest(".burger_gallery_inner") || slider;
    var slides = Array.prototype.slice.call(slider.querySelectorAll("[data-gallery-slide]"));
    var galleryGsap = window.gsap;

    if (!galleryGsap || slides.length < 2) {
      previousButton.disabled = true;
      nextButton.disabled = true;
      return;
    }

    var currentIndex = 0;
    var isAnimating = false;
    var autoPlayTimer = null;
    var SLIDE_INTERVAL = 2000;

    galleryGsap.set(slides, { autoAlpha: 0, zIndex: 0 });
    galleryGsap.set(slides[currentIndex], { autoAlpha: 1, zIndex: 1 });

    function renderSlideAccessibility() {
      slides.forEach(function renderSlideState(slide, index) {
        var isCurrentSlide = index === currentIndex;
        slide.classList.toggle("is_active", isCurrentSlide);
        slide.setAttribute("aria-hidden", String(!isCurrentSlide));
      });

      paginationButtons.forEach(function renderPaginationState(button, index) {
        var isCurrentButton = index === currentIndex;
        button.classList.toggle("is_active", isCurrentButton);

        if (isCurrentButton) {
          button.setAttribute("aria-current", "true");
        } else {
          button.removeAttribute("aria-current");
        }
      });
    }

    function moveGallery(direction) {
      if (isAnimating) {
        return;
      }

      isAnimating = true;
      var nextIndex = (currentIndex + direction + slides.length) % slides.length;
      var currentSlide = slides[currentIndex];
      var nextSlide = slides[nextIndex];
      var transitionDuration = shouldReduceMotion ? 0 : 0.65;

      galleryGsap.set(nextSlide, {
        autoAlpha: 0,
        zIndex: 2
      });
      galleryGsap.set(currentSlide, { zIndex: 1 });

      galleryGsap.timeline({
        defaults: {
          duration: transitionDuration,
          ease: "power2.inOut"
        },
        onComplete: function handleGalleryTransitionComplete() {
          galleryGsap.set(currentSlide, { autoAlpha: 0, zIndex: 0 });
          currentIndex = nextIndex;
          isAnimating = false;
          renderSlideAccessibility();
        }
      })
        .to(currentSlide, { autoAlpha: 0 }, 0)
        .to(nextSlide, { autoAlpha: 1 }, 0);
    }

    function startAutoPlay() {
      if (shouldReduceMotion || autoPlayTimer) {
        return;
      }

      autoPlayTimer = window.setInterval(function handleGalleryAutoPlay() {
        moveGallery(1);
      }, SLIDE_INTERVAL);
    }

    function stopAutoPlay() {
      if (!autoPlayTimer) {
        return;
      }

      window.clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }

    function handlePreviousClick() {
      moveGallery(-1);
    }

    function handleNextClick() {
      moveGallery(1);
    }

    function handlePaginationClick(event) {
      var targetIndex = Number(event.currentTarget.dataset.slideIndex);

      if (!Number.isInteger(targetIndex) || targetIndex === currentIndex) {
        return;
      }

      moveGallery(targetIndex - currentIndex);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    }

    previousButton.addEventListener("click", handlePreviousClick);
    nextButton.addEventListener("click", handleNextClick);
    paginationButtons.forEach(function bindPaginationButton(button) {
      button.addEventListener("click", handlePaginationClick);
    });
    sliderRegion.addEventListener("pointerenter", stopAutoPlay);
    sliderRegion.addEventListener("pointerleave", startAutoPlay);
    sliderRegion.addEventListener("focusin", stopAutoPlay);
    sliderRegion.addEventListener("focusout", startAutoPlay);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    renderSlideAccessibility();
    startAutoPlay();
  }

  function initBurgerBestSwiper(shouldReduceMotion) {
    var swiper = document.querySelector("[data-burger-best-swiper]");

    if (!swiper) {
      return;
    }

    var mobileQuery = window.matchMedia("(max-width: 833px)");
    var cards = Array.prototype.slice.call(swiper.querySelectorAll(".swiper_slide"));
    var isDragging = false;
    var startPointerX = 0;
    var lastPointerX = 0;
    var startScrollLeft = 0;
    var startCardIndex = 0;
    var startTouchY = 0;
    var wheelTimer = null;
    var wheelDirection = 0;
    var swiperAutoPlayTimer = null;
    var SWIPE_THRESHOLD = 24;
    var SWIPER_INTERVAL = 2000;

    function getNearestCardIndex() {
      var viewportCenter = swiper.scrollLeft + swiper.clientWidth / 2;
      var nearestIndex = 0;
      var nearestDistance = Infinity;

      cards.forEach(function findNearestCard(card, index) {
        var cardCenter = card.offsetLeft + card.offsetWidth / 2;
        var distance = Math.abs(cardCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      return nearestIndex;
    }

    function scrollToCard(index) {
      var safeIndex = Math.max(0, Math.min(cards.length - 1, index));
      var targetCard = cards[safeIndex];

      if (!targetCard) {
        return;
      }

      var targetScrollLeft = targetCard.offsetLeft - (swiper.clientWidth - targetCard.offsetWidth) / 2;

      swiper.scrollTo({
        left: targetScrollLeft,
        behavior: shouldReduceMotion ? "auto" : "smooth"
      });
    }

    function startSwiperAutoPlay() {
      if (shouldReduceMotion || !mobileQuery.matches || document.hidden || swiperAutoPlayTimer) {
        return;
      }

      swiperAutoPlayTimer = window.setInterval(function handleSwiperAutoPlay() {
        var nextIndex = (getNearestCardIndex() + 1) % cards.length;
        scrollToCard(nextIndex);
      }, SWIPER_INTERVAL);
    }

    function stopSwiperAutoPlay() {
      if (!swiperAutoPlayTimer) {
        return;
      }

      window.clearInterval(swiperAutoPlayTimer);
      swiperAutoPlayTimer = null;
    }

    function restartSwiperAutoPlay() {
      stopSwiperAutoPlay();
      startSwiperAutoPlay();
    }

    function handlePointerDown(event) {
      if (!mobileQuery.matches || (event.pointerType === "mouse" && event.button !== 0)) {
        return;
      }

      isDragging = true;
      stopSwiperAutoPlay();
      startPointerX = event.clientX;
      lastPointerX = event.clientX;
      startScrollLeft = swiper.scrollLeft;
      startCardIndex = getNearestCardIndex();
      swiper.classList.add("is_dragging");
      if (typeof swiper.setPointerCapture === "function") {
        swiper.setPointerCapture(event.pointerId);
      }
    }

    function handlePointerMove(event) {
      if (!isDragging) {
        return;
      }

      lastPointerX = event.clientX;
      swiper.scrollLeft = startScrollLeft - (event.clientX - startPointerX);
      event.preventDefault();
    }

    function endPointerDrag(event) {
      if (!isDragging) {
        return;
      }

      isDragging = false;
      swiper.classList.remove("is_dragging");

      if (typeof swiper.hasPointerCapture === "function" && swiper.hasPointerCapture(event.pointerId)) {
        swiper.releasePointerCapture(event.pointerId);
      }

      var endPointerX = typeof event.clientX === "number" ? event.clientX : lastPointerX;
      var swipeDistance = startPointerX - endPointerX;
      var targetIndex = startCardIndex;

      if (Math.abs(swipeDistance) >= SWIPE_THRESHOLD) {
        targetIndex += swipeDistance > 0 ? 1 : -1;
      }

      scrollToCard(targetIndex);
      restartSwiperAutoPlay();
    }

    function handleTouchStart(event) {
      if (window.PointerEvent || !mobileQuery.matches || !event.touches[0]) {
        return;
      }

      startPointerX = event.touches[0].clientX;
      stopSwiperAutoPlay();
      lastPointerX = startPointerX;
      startTouchY = event.touches[0].clientY;
      startScrollLeft = swiper.scrollLeft;
      startCardIndex = getNearestCardIndex();
    }

    function handleTouchMove(event) {
      if (window.PointerEvent || !mobileQuery.matches || !event.touches[0]) {
        return;
      }

      var currentTouchX = event.touches[0].clientX;
      var horizontalDistance = currentTouchX - startPointerX;
      var verticalDistance = event.touches[0].clientY - startTouchY;

      lastPointerX = currentTouchX;

      if (Math.abs(horizontalDistance) <= Math.abs(verticalDistance)) {
        return;
      }

      event.preventDefault();
      swiper.scrollLeft = startScrollLeft - horizontalDistance;
    }

    function handleTouchEnd(event) {
      if (window.PointerEvent || !mobileQuery.matches || !event.changedTouches[0]) {
        return;
      }

      var swipeDistance = startPointerX - event.changedTouches[0].clientX;

      if (Math.abs(swipeDistance) < SWIPE_THRESHOLD) {
        scrollToCard(startCardIndex);
        restartSwiperAutoPlay();
        return;
      }

      scrollToCard(startCardIndex + (swipeDistance > 0 ? 1 : -1));
      restartSwiperAutoPlay();
    }

    function handleWheel(event) {
      if (!mobileQuery.matches) {
        return;
      }

      var scrollAmount = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

      if (scrollAmount === 0) {
        return;
      }

      event.preventDefault();
      stopSwiperAutoPlay();
      wheelDirection = scrollAmount > 0 ? 1 : -1;
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(function handleWheelEnd() {
        scrollToCard(getNearestCardIndex() + wheelDirection);
        wheelDirection = 0;
        startSwiperAutoPlay();
      }, 120);
    }

    function handleKeyDown(event) {
      if (!mobileQuery.matches || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) {
        return;
      }

      event.preventDefault();
      var direction = event.key === "ArrowRight" ? 1 : -1;
      var nextIndex = Math.max(0, Math.min(cards.length - 1, getNearestCardIndex() + direction));
      scrollToCard(nextIndex);
      restartSwiperAutoPlay();
    }

    function handleSwiperVisibilityChange() {
      if (document.hidden) {
        stopSwiperAutoPlay();
      } else {
        startSwiperAutoPlay();
      }
    }

    function handleSwiperViewportChange() {
      if (mobileQuery.matches) {
        startSwiperAutoPlay();
      } else {
        stopSwiperAutoPlay();
      }
    }

    swiper.addEventListener("pointerdown", handlePointerDown);
    swiper.addEventListener("pointermove", handlePointerMove);
    swiper.addEventListener("pointerup", endPointerDrag);
    swiper.addEventListener("pointercancel", endPointerDrag);
    swiper.addEventListener("touchstart", handleTouchStart, { passive: true });
    swiper.addEventListener("touchmove", handleTouchMove, { passive: false });
    swiper.addEventListener("touchend", handleTouchEnd, { passive: true });
    swiper.addEventListener("wheel", handleWheel, { passive: false });
    swiper.addEventListener("keydown", handleKeyDown);
    document.addEventListener("visibilitychange", handleSwiperVisibilityChange);

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", handleSwiperViewportChange);
    } else {
      mobileQuery.addListener(handleSwiperViewportChange);
    }

    startSwiperAutoPlay();
  }

  revealFrom(document.querySelectorAll(".burger_info_thumb"), {
    x: -64,
    y: 0,
    trigger: document.querySelector(".burger_info")
  });

  revealFrom(document.querySelectorAll(".burger_info_head, .burger_info_boxes, .burger_reserve_btn"), {
    x: 64,
    y: 0,
    stagger: 0.12,
    trigger: document.querySelector(".burger_info")
  });

  revealFrom(document.querySelectorAll(".burger_best_type_top"), {
    x: -80,
    y: 0,
    trigger: document.querySelector(".burger_best")
  });

  revealFrom(document.querySelectorAll(".burger_best_type_bottom"), {
    x: 80,
    y: 0,
    trigger: document.querySelector(".burger_best")
  });

  revealFrom(document.querySelectorAll(".burger_best_card"), {
    y: 72,
    stagger: 0.1,
    trigger: document.querySelector(".burger_best_list"),
    start: "top 88%"
  });

  revealFrom(document.querySelectorAll(".burger_menu_header"), {
    y: 48,
    trigger: document.querySelector(".burger_menu_board")
  });

  ScrollTrigger.batch(".burger_menu_group, .burger_tower_cup", {
    start: "top 88%",
    once: true,
    onEnter: function handleMenuGroupEnter(elements) {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 56,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform,opacity,visibility"
      });
    }
  });

  window.addEventListener("load", function handleRestaurantPageLoad() {
    ScrollTrigger.refresh();
  }, { once: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initRestaurantScrollAnimations);
} else {
  initRestaurantScrollAnimations();
}
