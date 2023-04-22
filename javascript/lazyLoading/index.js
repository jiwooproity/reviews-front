document.addEventListener("DOMContentLoaded", function () {
  let lazyLoadImages = document.querySelectorAll("img.lazy");
  let lazyLoadThrottleTimeout;

  function lazyLoad() {
    // 아직 돌고 있는 스크롤 처리가 있으면 제거.
    if (lazyLoadThrottleTimeout) {
      clearTimeout(lazyLoadThrottleTimeout);
    }

    // 20 밀리초 후에 이미지가 없는 이미지 태그에 data-src에 담긴 url을 담아준다.
    // 담아 주기 위해 lazy 클래스를 제거하고, src에 담아주어 이미지가 로딩되도록 하는 것.
    // 쓸데없는 리소스 낭비를 줄일 수 있다.
    lazyLoadThrottleTimeout = setTimeout(function () {
      let scrollTop = window.pageYOffset;
      lazyLoadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src;
          img.classList.remove("lazy");
        }
      });

      if (lazyLoadImages.length === 0) {
        document.removeEventListener("scroll", lazyLoad);
        window.removeEventListener("resize", lazyLoad);
        window.removeEventListener("orientationchange", lazyLoad);
      }
    }, 20);
  }

  // 스크롤
  document.addEventListener("scroll", lazyLoad);
  // 브라우저 해상도 변경
  window.addEventListener("resize", lazyLoad);
  // 기기의 방향이 바뀜
  window.addEventListener("orientationchange", lazyLoad);
});
