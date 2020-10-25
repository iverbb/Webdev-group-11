function loadjs(file) {
  console.log("choosing");
  let script  = document.createElement("script");
  script.src  = file;
  script.type = "text/javascript";
  document.body.appendChild(script);
}

function velgmeny() {
  let viewwidth = window.screen.width;
  console.log(viewwidth);
  if (viewwidth < 640) {
    console.log("small frame");
    loadjs("../script/hambar_test.js");

  } else {
    console.log("big frame");
    loadjs("../script/marg.js");
  }
}

velgmeny();
