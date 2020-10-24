// create div dropdown
let dropdown = document.createElement("div");
dropdown.className = "dropdown";
dropdown.style = "float:right";

// create button   -- how to make the button say "sorter etter"??
let button = document.createElement("button");
button.innerText = "Sorter etter";
button.setAttribute("id", "button");
button.onclick = (() => myFunction());
//button.onclick = myFunction;
button.className = "dropbtn";

//button.addEventListener("click", myFunction);

// create div2 dropdown content
let myDropdown = document.createElement("div");
myDropdown.className = "dropdown-content";
myDropdown.id = "myDropdown";

// create anchor elements 
var a1 = document.createElement("a");  
var a2 = document.createElement("a");  
var a3 = document.createElement("a");  

// set the title and href property
/*a1.title = "Prosjekttype";  
a2.title = "Kronologisk"; 
a3.title = "Beliggenhet";*/
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
document.getElementById("hambarheader").appendChild(dropdown);



function onloadProjectpages() {
  buildNavbar();
  buildHambar();
  buildFooter();

}




/*
div class="dropdown" style="float:right;">
            <button onclick="myFunction()" class="dropbtn">Sorter etter</button>
            <div id="myDropdown" class="dropdown-content">
                <a href="../Testing/prosjekt_prosjekttype_test.html">Prosjekttype</a>
                <a href="prosjekt_kronologisk.html">Kronologisk</a>
                <a href="prosjekt_beliggenhet.html">Beliggenhet</a>
            </div>*/


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  }


