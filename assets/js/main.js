/* Dewayu Utama Land — shared behaviour */
(function () {
  "use strict";

  /* header state on scroll */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", document.body.classList.contains("nav-open"));
    });
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    });
  }

  /* reveal on scroll */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    // safety net: text is already readable regardless (see CSS), but settle
    // the slide-in for anything the observer missed (e.g. tab backgrounded).
    setTimeout(function () {
      document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { el.classList.add("in"); });
    }, 2500);
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* gallery lightbox */
  var galleryLinks = Array.prototype.slice.call(document.querySelectorAll(".gallery a"));
  if (galleryLinks.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-label", "Image viewer");
    lb.innerHTML =
      '<button class="lb-close" aria-label="Close">✕</button>' +
      '<button class="lb-prev" aria-label="Previous">←</button>' +
      '<img alt="">' +
      '<button class="lb-next" aria-label="Next">→</button>';
    document.body.appendChild(lb);
    var img = lb.querySelector("img");
    var idx = 0;

    function show(i) {
      idx = (i + galleryLinks.length) % galleryLinks.length;
      img.src = galleryLinks[idx].getAttribute("href");
      img.alt = galleryLinks[idx].querySelector("img").alt || "";
      lb.classList.add("open");
    }
    galleryLinks.forEach(function (a, i) {
      a.addEventListener("click", function (e) { e.preventDefault(); show(i); });
    });
    lb.querySelector(".lb-close").addEventListener("click", function () { lb.classList.remove("open"); });
    lb.querySelector(".lb-prev").addEventListener("click", function () { show(idx - 1); });
    lb.querySelector(".lb-next").addEventListener("click", function () { show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.classList.remove("open"); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") lb.classList.remove("open");
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  /* prefill enquiry interest from ?interest= query param */
  var params = new URLSearchParams(window.location.search);
  var interest = params.get("interest");
  if (interest) {
    var sel = document.querySelector("select[name='interest']");
    if (sel) {
      var isId = document.documentElement.lang === "id";
      var map = isId
        ? { land: "Pertanyaan Tanah", package: "Paket Villa + Tanah", villa: "Pertanyaan Villa", rental: "Pertanyaan Sewa" }
        : { land: "Land Enquiry", package: "Villa + Land Package", villa: "Villa Enquiry", rental: "Rental Enquiry" };
      var want = map[interest] || interest;
      Array.prototype.forEach.call(sel.options, function (o) {
        if (o.value.toLowerCase().indexOf(want.toLowerCase()) !== -1 || o.value.toLowerCase() === interest.toLowerCase()) sel.value = o.value;
      });
    }
  }

  /* filter property grid from ?type= query param */
  var type = params.get("type");
  if (type) {
    document.querySelectorAll("[data-type]").forEach(function (card) {
      if (card.getAttribute("data-type") !== type) card.style.display = "none";
    });
  }

  /* Formspree AJAX submit */
  document.querySelectorAll("form[data-formspree]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      var btn = form.querySelector("button[type='submit']");
      var endpoint = form.getAttribute("action");

      if (endpoint.indexOf("YOUR_FORM_ID") !== -1) {
        status.className = "form-status err";
        status.textContent = "Form not configured yet — please contact us via WhatsApp, or set your Formspree endpoint in data/site.js.";
        return;
      }
      btn.disabled = true;
      btn.textContent = "Sending…";
      fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (r) {
          if (r.ok) {
            form.reset();
            status.className = "form-status ok";
            status.textContent = "✦ Thank you — we'll be in touch within 24 hours.";
          } else {
            throw new Error("bad response");
          }
        })
        .catch(function () {
          status.className = "form-status err";
          status.textContent = "Something went wrong sending your enquiry. Please try again, or message us on WhatsApp.";
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = "Send Enquiry";
        });
    });
  });
})();

/* carousels */
(function () {
  "use strict";
  function initCarousels(root) {
    (root || document).querySelectorAll(".carousel").forEach(function (c) {
      if (c.dataset.ready) return;
      c.dataset.ready = "1";
      var track = c.querySelector(".track");
      var slides = c.querySelectorAll(".slide");
      var dots = c.querySelectorAll(".c-dots button");
      var count = c.querySelector(".count");
      var i = 0;

      function go(n) {
        i = (n + slides.length) % slides.length;
        track.scrollTo({ left: track.clientWidth * i, behavior: "smooth" });
      }
      function paint() {
        dots.forEach(function (d, k) { d.classList.toggle("on", k === i); });
        if (count) count.textContent = (i + 1) + " / " + slides.length;
      }
      c.querySelector(".c-prev").addEventListener("click", function () { go(i - 1); });
      c.querySelector(".c-next").addEventListener("click", function () { go(i + 1); });
      dots.forEach(function (d, k) { d.addEventListener("click", function () { go(k); }); });
      track.addEventListener("scroll", function () {
        var n = Math.round(track.scrollLeft / track.clientWidth);
        if (n !== i) { i = n; paint(); }
      }, { passive: true });
      paint();
    });
  }
  window.initCarousels = initCarousels;
  initCarousels(document);
})();
