const intersectionObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

let onLazy = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target;
      elem.setAttribute("src", elem.getAttribute("data-src"));
      observer.unobserve(elem);
    }
  });
};

let observer;

document.addEventListener("DOMContentLoaded", function () {
  observer = new IntersectionObserver(onLazy, intersectionObserverOptions);

  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    observer.observe(img);
  });
});
