if (document.documentElement.clientWidth >= 992) {
  window.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.querySelector("h2").getAttribute("id");
          if (entry.intersectionRatio > 0) {
            document
              .querySelector(`nav li a[href="#${id}"]`)
              .parentElement.classList.add("active");
          } else {
            document
              .querySelector(`nav li a[href="#${id}"]`)
              .parentElement.classList.remove("active");
          }
        });
      },
      { rootMargin: "-50% 0px 0px 0px" }
    );

    document.querySelectorAll("section.article-section").forEach((section) => {
      observer.observe(section);
    });
  });
}
