//Vilde

// pages added to navbar as links
const pages = [
    {
      text: "Hjem",
      endpoint: "hjem.html",
    },
    {
      text: "Prosjekter",
      endpoint: "prosjekter.html",
    },
    {
      text: "På tegnebordet",
      endpoint: "paa_tegnebordet.html",
    },
    {
      text: "Om oss",
      endpoint: "om_oss.html",
    },
    {
      text: "Kontakt",
      endpoint: "kontakt.html",
    },
  ];
  
  let currentEndpoint = "";
  
  /**
   * Checks if a given endpoint is the current one
   * @param {String} endpoint The endpoint to check
   * @returns {Boolean} true if it is current, else false
   */
  function isCurrentEndpoint(endpoint) {
    return endpoint === currentEndpoint;
  }
  
  /**
   * Creates an anchor element of a given page with link and content.
   * @param {Object} page The page with text and endpoint properties
   * @returns {HTMLAnchorElement} The anchor element
   */
  function createLinkToPage(page) {
    const anchor = document.createElement("a");
    const text = document.createTextNode(page.text);
  
    if (isCurrentEndpoint(page.endpoint)) {
      anchor.classList.add("navbar-current-item");
    }
  
    anchor.href = page.endpoint;
    anchor.appendChild(text);
  
    return anchor;
  }
  
  /**
   * Adds a page to the navigation bar as a link.
   * @param {Object} page The page to link
   * @param {HTMLDivElement} element The element to hold the link
   */
  function addLinkToElement(page, element) {
    const link = createLinkToPage(page);
    element.appendChild(link);
  }
  
  /**
   * Returns the endpoint of the current page
   * @returns {String} The current endpoint
   */
  function getCurrentEndpoint() {
    const url = window.location.href;
  
    return url.split("/").pop();
  }
  
  /**
   * Builds the navigation bar by adding html elements to it.
   */
  function buildNavbar() {
    currentEndpoint = getCurrentEndpoint();
  
    const navbar = document.getElementById("navbar");
    const content = document.createElement("div");
    content.classList.add("content");
    navbar.appendChild(content);
  
    const items = document.createElement("div");
    items.classList.add("navbar-items");
    content.appendChild(items);
  
    pages.forEach((page) => addLinkToElement(page, items));
  }
  
  // Event trigger when the DOM is ready (newer browsers)
  window.onload = () => buildNavbar();

/* When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

<script>
document.addEventListener(
        "DOMContentLoaded", () => {
            new Mmenu( "#my-menu", {
                navbars: [{
                    // first navbar options
                }, {
                    // second navbar options
                }]
            }, {
                navbars: {
                    // navbars configuration
                }
            });
        }
    );
</script>*/

/*$(function () {
    var bar = '';
    bar += '<nav class="navbar navbar-default" role="navigation">';
    bar += '<div class="container-fluid">';
    bar += '<div>';
    bar += '<ul class="nav navbar-nav">';
    bar += '<li id="hjem"><a href="hjem.html">Hjem</a></li>';
    bar += '<li id="prosjekter"><a href="prosjekter.html">Prosjekter</a></li>';
    bar += '<li id="paa_tegnebordet"><a href="paa_tegnebordet.html">På tegnebordet</a></li';
    bar += '<li id="om_oss"><a href="om_oss.html">Om oss</a></li>';
    bar += '<li id="kontakt"><a href="kontakt.html">Kontakt</a></li>';
    bar += '</ul>';
    bar += '</div>';
    bar += '</div>';
    bar += '</nav>';

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}*/

//Har funnet en ny og enklere løsning!!!!!!!!
