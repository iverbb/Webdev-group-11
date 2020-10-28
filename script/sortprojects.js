
function buildSortprojects() {

  let buttons = [
    { name : "Prosjekttype", link : "prosjekt_prosjekttype.html" },
    { name : "Kronologisk",  link : "prosjekt_kronologisk.html" },
    { name : "Beliggenhet",  link : "prosjekt_beliggenhet.html" }
  ];
  console.log(buttons);
  // create div dropdown
  let dropdown = document.createElement("div");
  dropdown.className = "dropdown";
  dropdown.style = "float:right";

  // create button
  let button = document.createElement("button");
  button.innerText = "Sorter";
  button.setAttribute("id", "button");
  button.onclick = ((e) => toggleMenu());
  button.className = "dropbtn";

  // create div2 dropdown content
  let myDropdown = document.createElement("div");
  myDropdown.className = "dropdown-content";
  myDropdown.id = "myDropdown";

  buttons.forEach
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
  document.getElementById("sortingprojects").appendChild(dropdown);
}

function onloadProjectpages() {
  //buildNavbar();
  buildSortprojects();
  //buildFooter();
}

//onloadProjectpages();



// Close the dropdown menu if the user clicks outside of it
window.onclick = ((e) =>
  {
    document.getElementById("myDropdown").style.display = "none";
  });
//  {
//    if (document.getElementById("myDropdown").style.display == "block"){
//      document.getElementById("myDropdown").style.display = "none";
//    }
//  });

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function toggleMenu(e) {
  let event = e ? e : window.event;
  event.stopPropagation();

  let displayStatus = document.getElementById("myDropdown").style.display;
  if (displayStatus != "block") { displayStatus = "block"; }
  else { displayStatus = "none"; }
  document.getElementById("myDropdown").style.display = displayStatus;
}



