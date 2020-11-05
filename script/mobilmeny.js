function buildMobileMenu() {
  let logoRef       = document.createElement("a");
  logoRef.href      = "../html/hjem.html";
  logoRef.id        = "mobileLogoRef";

  let logo          = document.createElement("img");
  logo.id           = "mobileLogo";
  logo.src          = "../img/logo_correct.png";
  logo.alt          = "../img/logo_correct.png";
  logo.style.height = "30px"; //"100px";
  logo.style.float  = "left";

  logoRef.appendChild(logo);
  let nav = document.getElementById("navbarMobile");
  nav.className = "navbarMobile";
  nav.appendChild(logoRef);
  buildHambar("navbarMobile", hambarOptions.pages.reverse(), "../img/hambar.png", 1);
}

buildMobileMenu();
