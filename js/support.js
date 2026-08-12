(function initSupportPages() {
  "use strict";

  var isSubpage = window.location.pathname.indexOf("/pages/") !== -1;
  var supportPath = isSubpage ? "./" : "./pages/";

  function replacePendingLink(button, href) {
    var link = document.createElement("a");
    link.className = button.className;
    link.href = href;
    link.textContent = button.textContent.trim();
    button.parentNode.replaceChild(link, button);
  }

  function enableSupportNavigation() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-pending-link], .mobile_menu_sublink[disabled]"), function (button) {
      var label = button.textContent.replace(/\s+/g, " ").trim().toLowerCase();
      if (label === "notice & news") {
        replacePendingLink(button, supportPath + "Notice.html");
      }
      if (label === "faq / contact us") {
        replacePendingLink(button, supportPath + "FAQ.html");
      }
    });

    Array.prototype.forEach.call(document.querySelectorAll(".site_gnb_group, .gnb_group"), function (group) {
      var title = group.querySelector(".site_gnb_title, .gnb_title");
      if (title && title.textContent.trim().toLowerCase() === "support") {
        group.classList.remove("txt_gray");
        title.classList.remove("txt_gray");
      }
    });

    Array.prototype.forEach.call(document.querySelectorAll(".footer_service_btn"), function (link) {
      var label = link.textContent.trim().toLowerCase();
      if (label === "faq") {
        link.href = supportPath + "FAQ.html";
      }
      if (label === "contact us") {
        link.href = supportPath + "FAQ.html";
      }
    });
  }

  function initDisclosure(triggerSelector) {
    Array.prototype.forEach.call(document.querySelectorAll(triggerSelector), function (trigger) {
      trigger.addEventListener("click", function handleDisclosureToggle() {
        var detail = document.getElementById(trigger.getAttribute("aria-controls"));
        var isOpen = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!isOpen));
        detail.hidden = isOpen;
      });
    });
  }

  function initNoticeFilters() {
    var list = document.querySelector("[data-notice-list]");
    var empty = document.querySelector("[data-notice-empty]");
    var search = document.querySelector("[data-notice-search]");
    var filters = document.querySelectorAll("[data-notice-filter]");
    var currentFilter = "all";

    if (!list || !empty) return;

    function renderNotices() {
      var query = search ? search.value.trim().toLowerCase() : "";
      var visibleCount = 0;
      Array.prototype.forEach.call(list.querySelectorAll(".notice_item"), function (item) {
        var matchesCategory = currentFilter === "all" || item.getAttribute("data-notice-category") === currentFilter;
        var matchesQuery = !query || item.textContent.toLowerCase().indexOf(query) !== -1;
        var isVisible = matchesCategory && matchesQuery;
        item.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });
      empty.hidden = visibleCount !== 0;
    }

    Array.prototype.forEach.call(filters, function (filter) {
      filter.addEventListener("click", function handleNoticeFilter() {
        currentFilter = filter.getAttribute("data-notice-filter");
        Array.prototype.forEach.call(filters, function (item) {
          var isSelected = item === filter;
          item.classList.toggle("is_active", isSelected);
          item.setAttribute("aria-pressed", String(isSelected));
        });
        renderNotices();
      });
    });
    if (search) search.addEventListener("input", renderNotices);
  }

  function initFaqFilters() {
    var list = document.querySelector("[data-faq-list]");
    var empty = document.querySelector("[data-faq-empty]");
    var filters = document.querySelectorAll("[data-faq-filter]");
    if (!list || !empty) return;

    Array.prototype.forEach.call(filters, function (filter) {
      filter.addEventListener("click", function handleFaqFilter() {
        var category = filter.getAttribute("data-faq-filter");
        var visibleCount = 0;
        Array.prototype.forEach.call(filters, function (item) {
          var isSelected = item === filter;
          item.classList.toggle("is_active", isSelected);
          item.setAttribute("aria-pressed", String(isSelected));
        });
        Array.prototype.forEach.call(list.querySelectorAll(".faq_item"), function (item) {
          var isVisible = category === "all" || item.getAttribute("data-faq-category") === category;
          item.hidden = !isVisible;
          if (isVisible) visibleCount += 1;
        });
        empty.hidden = visibleCount !== 0;
      });
    });
  }

  function initSupport() {
    enableSupportNavigation();
    initDisclosure(".notice_trigger");
    initDisclosure(".faq_trigger");
    initNoticeFilters();
    initFaqFilters();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSupport);
  } else {
    initSupport();
  }
}());
