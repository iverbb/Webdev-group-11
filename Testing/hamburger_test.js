// pages added to navbar as links
const pages = [
  {
    text: "Prosjekttype",
    endpoint: "prosjekt_prosjekttype.html",
  },
  {
    text: "Kronologisk",
    endpoint: "prosjekt_kronologisk.html",
  },
  {
    text: "Ideer",
    endpoint: "prosjekt_ideer.html",
  },
  {
    text: "Beliggenhet",
    endpoint: "prosjekt_beliggenhet.html",
  }
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
    anchor.classList.add("hambar-current-item");
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
function buildHambar() {
  currentEndpoint = getCurrentEndpoint();

  const hambar = document.getElementById("hambar");
  const content = document.createElement("div");
  content.classList.add("content");
  hambar.appendChild(content);

  const items = document.createElement("div");
  items.classList.add("hambar-items");
  content.appendChild(items);

  pages.forEach((page) => addLinkToElement(page, items));
}

// Event trigger when the DOM is ready (newer browsers)
window.onload = () => buildHambar();
