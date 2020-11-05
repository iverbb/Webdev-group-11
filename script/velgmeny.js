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
    loadjs("../script/mobilmeny.js", "mobile");
  } else {
    loadjs("../script/marg.js", "pc");
  }
}

velgmeny();
///document.body.onresize = (() => velgmeny());
