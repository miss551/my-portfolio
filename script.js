/**
 * 个人介绍单页 - 交互脚本
 * 直接用浏览器打开 index.html 即可运行，无需构建工具
 */

(function () {
  "use strict";

  // ========== DOM 元素引用 ==========
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  // ========== 1. 导航栏滚动阴影 ==========
  // 页面向下滚动超过 10px 时，给导航栏加上 scrolled 类
  function handleNavbarScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll(); // 初始化时执行一次

  // ========== 2. 导航点击平滑跳转 ==========
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // 获取目标区块的 id（如 #home → home）
      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // 计算滚动位置：区块顶部 - 导航栏高度，避免被导航栏遮挡
        const navHeight = navbar.offsetHeight;
        const top =
          targetSection.getBoundingClientRect().top +
          window.scrollY -
          navHeight;

        window.scrollTo({ top: top, behavior: "smooth" });
      }

      // 点击后立即高亮当前导航项
      setActiveNavLink(this);
    });
  });

  // ========== 3. 滚动时自动高亮对应导航项 ==========
  function setActiveNavLink(activeLink) {
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    activeLink.classList.add("active");
  }

  // 使用 IntersectionObserver 监听各区块是否进入视口
  const observerOptions = {
    root: null,
    // 顶部偏移导航栏高度，底部留 60% 视口，使高亮切换更自然
    rootMargin: "-64px 0px -60% 0px",
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const matchedLink = document.querySelector(
          '.nav-link[href="#' + id + '"]'
        );
        if (matchedLink) {
          setActiveNavLink(matchedLink);
        }
      }
    });
  }, observerOptions);

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  // ========== 4. 页面加载淡入动画 ==========
  // 给各区块依次添加淡入效果，增强视觉体验
  sections.forEach(function (section, index) {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    setTimeout(function () {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 150 + index * 100);
  });
})();
