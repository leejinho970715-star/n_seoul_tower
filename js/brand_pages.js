"use strict";

function initBrandPageMotion() {
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  var isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* History의 곰 이동은 GSAP 없이 requestAnimationFrame으로 동작합니다. */
  initHistoryBearJourney();

  if (!gsap || !ScrollTrigger || isReducedMotion) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll("[data-reveal-section]").forEach(function animateBrandSection(section) {
    var heading = section.querySelector(".identity_heading");
    var content = Array.prototype.slice.call(section.children).filter(function excludeHeading(child) {
      return child !== heading;
    });

    gsap.from(heading, { autoAlpha: 0, y: 60, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 78%", once: true } });
    gsap.from(content, { autoAlpha: 0, y: 80, stagger: 0.15, duration: 1, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 68%", once: true } });
  });

  var historyCards = gsap.utils.toArray(".history_cards article");
  historyCards.forEach(function animateHistoryCard(card, index) {
    gsap.from(card, {
      autoAlpha: 0,
      x: index % 2 ? -70 : 70,
      y: 45,
      scale: 0.92,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 88%", once: true }
    });
  });

  var scene = document.querySelector(".history_scene");
  if (scene) {
    gsap.fromTo(scene, { scale: 1.025 }, { scale: 1, ease: "none", scrollTrigger: { trigger: scene, start: "top top", end: "bottom bottom", scrub: 0.6 } });
  }

  window.addEventListener("load", function refreshBrandPageMotion() { ScrollTrigger.refresh(); }, { once: true });
}

function initHistoryBearJourney() {
  var timeline = document.querySelector(".history_timeline");
  var bear = document.querySelector("[data-history-bear]");
  var cards = timeline ? Array.prototype.slice.call(timeline.querySelectorAll(".history_cards article")) : [];
  var reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var frameId = null;
  var bearProgress = 0;

  if (!timeline || !bear || cards.length === 0 || reducedMotionQuery.matches) {
    return;
  }

  function getBearStops() {
    var timelineRect = timeline.getBoundingClientRect();
    return cards.map(function getCardRightEdge(card) {
      var cardRect = card.getBoundingClientRect();
      return {
        x: cardRect.right - timelineRect.left - bear.offsetWidth * 0.3,
        y: cardRect.top - timelineRect.top + cardRect.height / 2
      };
    });
  }

  function renderBearPosition() {
    frameId = null;
    var timelineRect = timeline.getBoundingClientRect();
    var stops = getBearStops();
    var start = window.scrollY + timelineRect.top - window.innerHeight * 0.58;
    var distance = Math.max(1, timelineRect.height + window.innerHeight * 0.16);
    var targetProgress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
    bearProgress += (targetProgress - bearProgress) * 0.1;
    if (Math.abs(targetProgress - bearProgress) < 0.001) {
      bearProgress = targetProgress;
    }
    var scaledProgress = bearProgress * (stops.length - 1);
    var stopIndex = Math.min(stops.length - 2, Math.floor(scaledProgress));
    var localProgress = scaledProgress - stopIndex;
    var from = stops[stopIndex];
    var to = stops[stopIndex + 1] || from;
    var x = from.x + (to.x - from.x) * localProgress;
    var y = from.y + (to.y - from.y) * localProgress;
    var direction = to.x >= from.x ? 1 : -1;

    bear.style.left = x.toFixed(2) + "px";
    bear.style.top = y.toFixed(2) + "px";
    bear.style.transform = "translate(-50%, -50%) scaleX(" + direction + ")";

    if (bearProgress !== targetProgress) {
      frameId = window.requestAnimationFrame(renderBearPosition);
    }
  }

  function requestBearRender() {
    if (frameId !== null) {
      return;
    }

    frameId = window.requestAnimationFrame(renderBearPosition);
  }

  window.addEventListener("scroll", requestBearRender, { passive: true });
  window.addEventListener("resize", requestBearRender);
  window.addEventListener("load", requestBearRender, { once: true });
  requestBearRender();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBrandPageMotion);
} else {
  initBrandPageMotion();
}
