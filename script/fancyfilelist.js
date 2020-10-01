// This is likely a very overkill way to solve the problem, css background image exists
// makes for some nice javascript practice though, learnt how to recurse an object, which is nice.

function populateList(parent, json) {
    if (json.file) {
        let file = json.file;
        parent.appendChild(decorate(file.name));
    } else if (json.folder) {
        let folder           = json.folder;
        let folderName       = folder.name;
        let folderNode       = decorate(folderName);
        let folderList       = document.createElement("ul");
        folderList.className = "filelist";

        folder.files.forEach(file =>
            { console.log(file);
              let listNode         = document.createElement("ul");
              listNode.className   = "filelist";
              populateList(listNode, file);
              folderList.appendChild(listNode);
            });
        folderNode.appendChild(folderList);

        parent.appendChild(folderNode);
    }
}



function decorate(name) {
    let singularNode = document.createElement("li");

    let content       = document.createElement("div");
    content.className = "file";

    let nodeImage    = document.createElement("img");
    nodeImage.src    = selectImg(name);
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
        return ("../img/foldericon.png");
    }
}

//TODO: create file tooltip function

let filelist = document.getElementById("filelist");

// Requires data.js to be invoked in html to work
populateList(filelist, data);
