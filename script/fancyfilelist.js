// This is likely a very overkill way to solve the problem, css background image exists
// makes for some nice javascript practice though, learnt how to recurse an object, which is nice.

function populateList(parent, json) {
    for (let key in json) {
        let value = json[key];
        value.forEach(x =>
            {
                if (typeof(x) === "object" && x !== null) {
                    let folderNode       = decorate("folder", "../img/foldericon.png");
                    let listNode         = document.createElement("ul");
                    let folderImage      = document.createElement("img");
                    listNode.className   = "filelist";

                    populateList(listNode, x);
                    folderNode.appendChild(listNode);
                    parent.appendChild(folderNode);
                } else {
                    parent.appendChild(decorate(x, selectImg(x)));
                }
            }
        );
    }
    //console.log(value);
}

function decorate(name, image) {
    let singularNode = document.createElement("li");

    let content       = document.createElement("div");
    content.className = "file";

    let nodeImage    = document.createElement("img");
    nodeImage.src    = image;
    nodeImage.style.width  = "25px";
    content.appendChild(nodeImage);

    let nodeName     = document.createElement("p");
    nodeName.innerText = name;
    nodeName.style.display = "inline-block";
    content.appendChild(nodeName);

    singularNode.appendChild(content);
    return singularNode;
}

function selectImg(path) {
    let parts = path.split(".");
    switch (parts[1]) {
    case "":
        return ("folder: " + parts[0]);
        break;
    case "js":
        return ("../img/javascripticon.png");
        break;
    case "css":
        return ("../img/cssicon.png");
        break;
    case "html":
        return ("../img/htmlicon.png");
        break;
    case "md":
        return ("../img/mdicon.png");
        break;
    case "png":
        return ("../img/imgicon.png");
        break;
    case "jpg":
        return ("../img/imgicon.png");
        break;
    default:
        return ("nA: " + parts[0]);
    }
}

let filelist = document.getElementById("filelist");
populateList(filelist, data);
