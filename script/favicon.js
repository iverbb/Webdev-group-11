function setFavicon(favImg) {
    let headTitle = document.querySelector("head");
    let setFavicon = document.createElement("link");
    setFavicon.setAttribute("rel", "shortcut icon");
    setFavicon.setAttribute("href", favImg);
    headTitle.appendChild(setFavicon);
} 

setFavicon("../img/B_logo.png")

//source: https://spemer.com/articles/set-favicon-with-javascript.html