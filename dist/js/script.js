// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });

  // klik diluar hamburger
  window.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    }
  });
}

// darkMode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

// Fungsi untuk mengatur tema
function setTheme(isDark) {
  if (isDark) {
    html.classList.add("dark");
    localStorage.theme = "dark";
    if (darkToggle) darkToggle.checked = true;
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
    if (darkToggle) darkToggle.checked = false;
  }
}

// Inisialisasi tema saat halaman dimuat
function initTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.theme;

  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    setTheme(true);
  } else {
    setTheme(false);
  }
}

// Event listener untuk toggle dark mode
if (darkToggle) {
  darkToggle.addEventListener("change", function () {
    setTheme(this.checked);
  });
}

// Panggil inisialisasi saat DOM siap
document.addEventListener("DOMContentLoaded", function () {
  initTheme();

  // Form contact handler
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validasi sederhana
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        alert(
          "Terima kasih telah menghubungi saya! Pesan Anda telah berhasil dikirim."
        );
        contactForm.reset();
      } else {
        alert("Harap lengkapi semua field sebelum mengirim pesan.");
      }
    });
  }

  // Smooth scroll untuk navigasi
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Tutup menu mobile setelah klik
        if (hamburger && navMenu) {
          hamburger.classList.remove("hamburger-active");
          navMenu.classList.add("hidden");
        }
      }
    });
  });
});

// Handle system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.theme) {
      setTheme(e.matches);
    }
  });
