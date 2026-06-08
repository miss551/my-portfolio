/**
 * 个人简历单页 - 交互脚本
 * 直接用浏览器打开 index.html 即可运行
 */
(function () {
  "use strict";

  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const navSections = ["home", "skills", "projects", "contact"];

  // 导航栏滚动阴影
  function handleNavbarScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  }

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // 锚点平滑跳转（导航栏、Logo、按钮等）
  function scrollToSection(targetEl) {
    const top =
      targetEl.getBoundingClientRect().top +
      window.scrollY -
      navbar.offsetHeight;

    window.scrollTo({ top: top, behavior: "smooth" });
  }

  function setActiveNavLink(activeLink) {
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link === activeLink);
    });
  }

  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const targetEl = document.getElementById(targetId);

      if (!targetEl) return;

      e.preventDefault();
      scrollToSection(targetEl);

      const matchedNav = document.querySelector(
        '.nav-link[href="#' + targetId + '"]'
      );
      if (matchedNav) {
        setActiveNavLink(matchedNav);
      }
    });
  });

  // 滚动时高亮当前导航项
  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const matchedLink = document.querySelector(
            '.nav-link[href="#' + entry.target.id + '"]'
          );
          if (matchedLink) {
            setActiveNavLink(matchedLink);
          }
        }
      });
    },
    {
      root: null,
      rootMargin: "-64px 0px -60% 0px",
      threshold: 0,
    }
  );

  navSections.forEach(function (id) {
    const section = document.getElementById(id);
    if (section) {
      sectionObserver.observe(section);
    }
  });

  // 模块滚动渐入动画
  const fadeBlocks = document.querySelectorAll(".fade-block");

  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  fadeBlocks.forEach(function (block, index) {
    block.style.transitionDelay = index % 4 === 0 ? "0s" : "0.08s";
    fadeObserver.observe(block);
  });
})();
