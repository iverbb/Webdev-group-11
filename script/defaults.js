function loadjsFiles(files) {
  let frag = document.createDocumentFragment();
  files.forEach((file) => {
    let script = document.createElement("script");
    script.src = file;
    script.type = "text/javascript";
    frag.appendChild(script);
    console.log(file + " loaded");
  });
  document.body.appendChild(frag);
  console.log(imageLibrary.projectName);
}

let files = [
  "../script/prosjektlist.js",
  "../script/sortprojects.js",
  "../script/galleri.js",
  "../script/bildeviser.js",
  "../script/favicon.js",
  "../script/velgmeny.js"
];

function loadDefaultScripts() {
  loadjsFiles(files);
  return "";
}

loadDefaultScripts();
