function loadjs(file) {
  let script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  document.body.appendChild(script);
}

function loadDefaultScripts() {
  loadjs("../script/prosjektlist.js");
  loadjs("../script/sortprojects.js");
  loadjs("../script/galleri.js");
  loadjs("../script/bildeviser.js");
  loadjs("../script/velgmeny.js");
  loadjs("../script/favicon.js");
}

loadDefaultScripts();
