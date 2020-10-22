/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


/*var select = document.createElement("select");
for (var i=0; i < 4; i += 1) {
 var option = document.createElement("option"),
     text = document.createTextNode("option" + i);
 option.appendChild(text);
 select.appendChild(option);
}
document.body.appendChild(select);

var projecttype = document.createElement("Prosjekttype");
var chronological = document.createElement("Kronologisk");
var placement = document.createElement("Beliggenhet");
var ideas = document.createElement("Ideer");

type = document.createTextNode("projecttype");
chrono = document.createTextNode("chronological");
place = document.createTextNode("placement");
idea = document.createTextNode("ideas");

document.body.appendChild(type, chrono, place, idea);*/