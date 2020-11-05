function loadjs(file) {
    let script = document.createElement("script");
    script.src = file;
    script.type = "text/javascript";
    document.body.appendChild(script);
}

function velgmeny() {
    let viewwidth = window.screen.width;
    if (viewwidth < 900) {
        loadjs("../script/mobilmeny.js");

    } else {
        loadjs("../script/marg.js");
    }
}

velgmeny();
