// ---------- Mobile menu ----------
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  menuBtn.setAttribute("aria-expanded", String(menuOpen));
  iconOpen.classList.toggle("hidden", menuOpen);
  iconClose.classList.toggle("hidden", !menuOpen);
  mobileMenu.style.maxHeight = menuOpen ? mobileMenu.scrollHeight + "px" : "0px";
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuOpen = false;
    menuBtn.setAttribute("aria-expanded", "false");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
    mobileMenu.style.maxHeight = "0px";
  });
});

// ---------- Navbar shrink-on-scroll ----------
const navbar = document.getElementById("navbar");
const navInner = document.getElementById("navInner");

function updateNavbar() {
  const scrolled = window.scrollY > 24;
  navbar.classList.toggle("bg-cream/90", scrolled);
  navbar.classList.toggle("backdrop-blur-md", scrolled);
  navbar.classList.toggle("shadow-lg", scrolled);
  navbar.classList.toggle("shadow-maroon-900/5", scrolled);
  navInner.classList.toggle("py-4", !scrolled);
  navInner.classList.toggle("py-2.5", scrolled);
}
updateNavbar();
window.addEventListener("scroll", updateNavbar, { passive: true });

// ---------- GSAP animations ----------
// Hero heading lines slide up
gsap.set(".hero-line-inner", { yPercent: 110 });
const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
heroTl
  .to(".hero-line-inner", { yPercent: 0, duration: 1.1, stagger: 0.12 })
  .from(".hero-copy .fade-up", { opacity: 0, y: 24, duration: 0.8, stagger: 0.12 }, "-=0.6")
  .fromTo(
    "#hero .lg\\:flex.relative",
    { opacity: 0, scale: 0.9, rotate: -3 },
    { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "back.out(1.4)" },
    "-=1.1"
  );

// Scroll-triggered reveals — driven by IntersectionObserver + CSS (Tailwind)
// transitions rather than a scroll-position ticker, so they stay reliable
// even in throttled/background-tab conditions.
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = (idx % 4) * 80;
          setTimeout(() => el.classList.add("is-visible"), delay);
          revealObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// ---------- Lottie decorative animations ----------
if (window.lottie) {
  fetch("lottie/hero-sparkles.json")
    .then((r) => r.json())
    .then((data) => {
      lottie.loadAnimation({ container: document.getElementById("lottieSparkA"), renderer: "svg", loop: true, autoplay: true, animationData: data });
      lottie.loadAnimation({ container: document.getElementById("lottieSparkB"), renderer: "svg", loop: true, autoplay: true, animationData: data });
    })
    .catch(() => {});

  fetch("lottie/grad-cap.json")
    .then((r) => r.json())
    .then((data) => {
      lottie.loadAnimation({ container: document.getElementById("lottieCap"), renderer: "svg", loop: true, autoplay: true, animationData: data });
    })
    .catch(() => {});
}
