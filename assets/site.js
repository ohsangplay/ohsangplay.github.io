(function () {
  "use strict";

  var PLATFORM_LABEL = { web: "웹", android: "Android", ios: "iOS", windows: "Windows" };

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function isExternal(url) {
    if (!/^https?:\/\//i.test(url)) return false;
    try { return new URL(url).host !== location.host; } catch (e) { return true; }
  }

  function buildIcon(site) {
    var wrap = el("div", "site-icon");
    if (site.icon) {
      var img = document.createElement("img");
      img.src = site.icon;
      img.alt = "";
      img.width = 64;
      img.height = 64;
      img.loading = "lazy";
      img.onerror = function () {
        wrap.removeChild(img);
        wrap.appendChild(el("span", "site-icon-fallback", site.emoji || site.name.charAt(0)));
      };
      wrap.appendChild(img);
    } else {
      wrap.appendChild(el("span", "site-icon-fallback", site.emoji || site.name.charAt(0)));
    }
    return wrap;
  }

  function buildCard(site) {
    var href = (site.page && site.page.trim()) || (site.url && site.url.trim()) || "";
    var hasLink = !!href;
    var card = el(hasLink ? "a" : "div", "site-card" + (hasLink ? "" : " is-pending"));

    if (hasLink) {
      card.href = href;
      if (isExternal(href)) {
        card.target = "_blank";
        card.rel = "noopener";
      }
    }

    card.appendChild(buildIcon(site));

    var body = el("div", "site-body");
    var head = el("div", "site-head");
    head.appendChild(el("h3", "site-name", site.name));
    head.appendChild(el("span", "site-status", !hasLink ? "준비 중" : site.page ? "소개·규칙 →" : "바로가기 →"));
    body.appendChild(head);

    if (site.description) body.appendChild(el("p", "site-desc", site.description));

    var meta = [];
    (site.platforms || []).forEach(function (p) { meta.push(PLATFORM_LABEL[p] || p); });
    (site.tags || []).forEach(function (t) { meta.push("#" + t); });
    if (meta.length) {
      var ul = el("ul", "site-meta");
      meta.forEach(function (m) { ul.appendChild(el("li", null, m)); });
      body.appendChild(ul);
    }

    card.appendChild(body);
    return card;
  }

  function renderSites() {
    var groups = document.querySelectorAll(".site-group[data-category]");
    if (!groups.length) return;
    var sites = (window.OHSANG_SITES || []).filter(function (s) { return !s.hidden; });
    groups.forEach(function (group) {
      var cat = group.getAttribute("data-category");
      var list = group.querySelector(".site-list");
      var items = sites.filter(function (s) { return (s.category || "game") === cat; });
      list.textContent = "";
      if (!items.length) { group.hidden = true; return; }
      group.hidden = false;
      items.forEach(function (s) { list.appendChild(buildCard(s)); });
    });
  }

  function markCurrentNav() {
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav a").forEach(function (a) {
      if (a.getAttribute("href") === path) a.setAttribute("aria-current", "page");
    });
  }

  function fillYear() {
    document.querySelectorAll("[data-year]").forEach(function (n) {
      n.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderSites();
    markCurrentNav();
    fillYear();
  });
})();
