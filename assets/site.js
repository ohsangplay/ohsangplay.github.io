(function () {
  "use strict";

  var PLATFORM_LABEL = { web: "웹", android: "Android", ios: "iOS" };

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function isExternal(url) {
    return /^https?:\/\//i.test(url) && url.indexOf(location.host) === -1;
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
    var hasLink = !!(site.url && site.url.trim());
    var card = el(hasLink ? "a" : "div", "site-card" + (hasLink ? "" : " is-pending"));

    if (hasLink) {
      card.href = site.url;
      if (isExternal(site.url)) {
        card.target = "_blank";
        card.rel = "noopener";
      }
    }

    card.appendChild(buildIcon(site));

    var body = el("div", "site-body");
    var head = el("div", "site-head");
    head.appendChild(el("h3", "site-name", site.name));
    head.appendChild(el("span", "site-status", hasLink ? "바로가기 →" : "준비 중"));
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
    var target = document.getElementById("site-list");
    if (!target) return;
    var sites = window.OHSANG_SITES || [];
    target.textContent = "";
    if (!sites.length) {
      target.appendChild(el("p", "empty", "곧 첫 번째 작품을 소개할게요."));
      return;
    }
    sites.forEach(function (s) { target.appendChild(buildCard(s)); });
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
