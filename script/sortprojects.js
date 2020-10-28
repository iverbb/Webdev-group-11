function buildSortprojects() {
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

  // create anchor elements 
  var a1 = document.createElement("a");  
  var a2 = document.createElement("a");  
  var a3 = document.createElement("a");  

  // set the text and href property
  a1.innerText = "Prosjekttype";  
  a2.innerText = "Kronologisk"; 
  a3.innerText = "Beliggenhet"; 
  a1.href = "prosjekt_prosjekttype.html";  
  a2.href = "prosjekt_kronologisk.html";  
  a3.href = "prosjekt_beliggenhet.html"; 

  // append the anchor elements to div2 
  myDropdown.appendChild(a1);
  myDropdown.appendChild(a2);
  myDropdown.appendChild(a3);

  // append div2 and button to dropdown
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



