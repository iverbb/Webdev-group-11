function buildMobileMenu() {
  let logoRef       = document.createElement("a");
  logoRef.href      = "../html/hjem.html";

  let logo          = document.createElement("img");
  logo.src          = "../img/logo_correct.png";
  logo.alt          = "../img/logo_correct.png";
  logo.style.height = "80px"; //"100px";
  logo.style.float  = "left";

  logoRef.appendChild(logo);
  document.getElementById("navbar").appendChild(logoRef);
  buildHambar("navbar", hambarOptions.pages.reverse(), "../img/hambar.png", 1);
}

buildMobileMenu();
