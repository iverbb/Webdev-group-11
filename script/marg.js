//Vilde

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

$(function () {
    var bar = '';
    bar += '<nav class="navbar navbar-default" role="navigation">';
    bar += '<div class="container-fluid">';
    bar += '<div>';
    bar += '<ul class="nav navbar-nav">';
    bar += '<p id="hjem"><a href="hjem.html">Hjem</a></p>';
    bar += '<p id="prosjekter"><a href="prosjekter.html">Prosjekter</a></p>';
    bar += '<p id="paa_tegnebordet"><a href="paa_tegnebordet.html">På tegnebordet</a></p>';
    bar += '<p id="om_oss"><a href="om_oss.html">Om oss</a></p>';
    bar += '<p id="kontakt"><a href="kontakt.html">Kontakt</a></p>';
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
}
