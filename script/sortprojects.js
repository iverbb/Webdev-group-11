// Nora

function buildHambar(destination, tags, name) {

  // create div dropdown
  let dropdown = document.createElement("div");
  dropdown.className = "dropdown";
  dropdown.style = "float:right";

  console.log("tags: ", tags);
  // create button
  let button = document.createElement("button");
  button.innerText = name;
  button.setAttribute("id", "button");
  button.onclick = ((e) => {toggleMenu(); console.log("click");});
  button.className = "dropbtn";

  // create div2 dropdown content
  let myDropdown = document.createElement("div");
  myDropdown.className = "dropdown-content";
  myDropdown.id = "myDropdown";

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
  document.getElementById(destination).appendChild(dropdown);
}

function onloadProjectpages(tags) {
  //buildNavbar();
  buildSortprojects(tags);
  //buildFooter();
}

//onloadProjectpages();



// Close the dropdown menu if the user clicks outside of it
window.onclick = ((e) =>
  {
    document.getElementById("myDropdown").style.display = "none";
  });

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function toggleMenu(e) {
  let event = e ? e : window.event;
  event.stopPropagation();

  let displayStatus = document.getElementById("myDropdown").style.display;
  if (displayStatus != "block") { displayStatus = "block"; }
  else { displayStatus = "none"; }
  document.getElementById("myDropdown").style.display = displayStatus;
}



