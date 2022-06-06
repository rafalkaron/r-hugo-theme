var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  if (document.documentElement.clientWidth < 768) {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || window.pageYOffset < 30) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-4rem";
      document.getElementById("menu-toggle").checked = false;
    }
    prevScrollpos = currentScrollPos;
  }
};
