function loadjs(file, name) {
  let script = document.createElement("script");
  script.id = name;
  script.src = file;
  script.type = "text/javascript";
  document.body.appendChild(script);
}

function velgmeny() {
  viewwidth = window.screen.width;
  if (viewwidth < 900) {
    pc.style.display = "none";
    mobile.style.display = "inline-block";
  } else {
    pc.style.display = "inline-block";
    mobile.style.display = "none";
  }
}

loadjs("../script/mobilmeny.js", "mobile");
loadjs("../script/marg.js", "pc");

let mobile = document.getElementById("navbarMobile");
let pc = document.getElementById("navbarPc");
velgmeny();
document.body.onresize = (() => velgmeny());
