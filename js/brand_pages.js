"use strict";

function initBrandPageMotion() {
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  var isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBrandPageMotion);
} else {
  initBrandPageMotion();
}
