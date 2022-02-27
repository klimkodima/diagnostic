const gallery = document.querySelector(".container");
const progress = document.querySelector("#myBar");

window.addEventListener('wheel', scrollHandler);

gallery.addEventListener("scroll", function () {
  scrollPercent =
    (gallery.scrollLeft /
      (gallery.scrollWidth - gallery.clientWidth)) *
    100;
  progress.style.width = scrollPercent + "%";
});

function scrollHandler(e) {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollBottom = window.pageYOffset || document.documentElement.scrollBottom;
  let deltaX = e.wheelDelta < 0 ? 40 : -40;
  if (window.screen.width > 768) {
    if (scrollTop > 1270) {
      window.onscroll = function () {

        gallery.scrollBy({ left: deltaX, },);
        window.scrollTo(1340, 1340);
      };
      if (progress.style.width === '100%') {
        window.onscroll = function () { };
      }
    } else {
      if (scrollBottom < 1300) {
        window.onscroll = function () {
          gallery.scrollBy({ left: deltaX, },);
          window.scrollTo(1340, 1340);
        };
      }
      if (progress.style.width === '0%') {
        window.onscroll = function () { };
      }
    }
    
  }

}

