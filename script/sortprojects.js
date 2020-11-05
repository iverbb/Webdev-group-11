function buildHambar(destination, tags, name, mobile) {

  // create div dropdown
  let dropdown = document.createElement("div");
  dropdown.className = ((destination === "navbarMobile") ? "mobile-" : "") + "dropdown";
  dropdown.style = "float:right";

  console.log("tags: ", tags);
  // create button
  let button = document.createElement("button");
  decorateButton(button, name);
  button.id = destination + "button";
  button.onclick = ((e) => toggleMenu(e, destination));
  button.className = "dropbtn";

  // create div2 dropdown content
  let myDropdown = document.createElement("div");
  myDropdown.className = ((destination === "navbarMobile") ? "mobile-" : "") + "dropdown-content";
  myDropdown.id = destination + "_dropdown";

  tags.forEach
  ( (button) =>
    {let a = document.createElement("a");
     a.innerText = button.name;
     a.href      = button.link;
     myDropdown.appendChild(a);
    });

  // // append div2 and button to dropdown
  dropdown.appendChild(button);
  dropdown.appendChild(myDropdown);

  // append everything to html
  let target = document.getElementById(destination);
  target.appendChild(dropdown);
}

function decorateButton(button, input) {
  // Trivial regex to see if an image or a name is to be given
  let isImg = input.match("\.svg|\.jpg|\.jpeg|\.png");
  console.log("is it valifd?? ", isImg);
  if (!isImg) {button.innerText = input;}
  else {
    button.style.backgroundImage = "url('" + input + "')";
    button.style.width = "30px";
    button.style.height = "30px";
    button.style.backgroundSize = "contain";
    button.style.backgroundRepeat = "no-repeat";
  }
}

function onloadProjectpages(tags) {
  //buildNavbar();
  buildSortprojects(tags);
  //buildFooter();
}

//onloadProjectpages();




// When the user clicks on the button, toggle between hiding and showing the dropdown content
function toggleMenu(e, destination) {
  let event = e ? e : window.event;
  event.stopPropagation();

  let displayStatus = document.getElementById(destination + "_dropdown").style.display;
  if (displayStatus != "block") { displayStatus = "block"; }
  else { displayStatus = "none"; }
  document.getElementById(destination + "_dropdown").style.display = displayStatus;

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = ((e) =>
    {
      document.getElementById(destination + "_dropdown").style.display = "none";
    });
}



