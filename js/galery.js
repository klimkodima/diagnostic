/*const element = document.querySelector("#galery");

element.addEventListener('wheel', (event) => {
 // event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});
const handler = (event) => {

}
*/
(function () {

  const element = document.querySelector(".gallery");
  const progress = document.querySelector("#myBar");


  window.addEventListener('scroll', scrollHandler, false);

  /* element.addEventListener('wheel', (event) => {
    //  event.preventDefault();
    
      element.scrollBy({left: event.deltaY < 0 ? -30 : 30,});
    });
 */
  function scrollHandler(e) {
    let scroll = 0;
    const scroscrollllTop = window.pageYOffset || document.documentElement.scrollTop;
    //  var scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;
    //   var scrollRight = window.pageYOffset || document.documentElement.scrolRight;
    //  var scrollBottom = window.pageYOffset || document.documentElement.scrolBottom;
    //  console.log(scrollTop,scrollBottom);
    if (window.screen.width > 768) {
      if (scrollTop > 1219) {
        //   e.preventDefault();
        console.log(scrollTop, e.deltaX, e.deltaY);
        window.onscroll = function () {
          let delta = e.deltaY < 0 ? -40 : 40;
          scroll += delta;
          progress.style.width = scroll;
          element.scrollBy({ left:delta , },);
          window.scrollTo(1219, 1219);
        };
      }
    }
  }
})();

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
  window.onscroll = function () { };
} 