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
        let folderId         = folder.name+"List";

        folderList.className = "filelist";
        folderList.id        = folderId;
        folderList.style.display = "block";
        console.log(folderList.id);

        folder.files.forEach(file =>
            { //console.log(file);
              // Recursion, if this step makes sense to you then you're doing solidly
              listNode = populateList(folderList, file);
            });
        folderNode.appendChild(folderList);

        parent.appendChild(folderNode);
    }
}

function listToggle(name) {
    let toggleFolder  = document.getElementById(name + "List");
    let toggleTitle   = document.getElementById(name + "Title");
    let displayStatus = toggleFolder.style.display;

    if (displayStatus == "block") {
        toggleFolder.style.display = "none";
        toggleTitle.innerText      = name + "...";
    } else {
        toggleFolder.style.display = "block";
        toggleTitle.innerText      = name;
    }
}


function decorate(name) {
    let singularNode = document.createElement("li");

    let content       = document.createElement("div");
    content.className = "file";
    content.addEventListener("click", () => { listToggle(name); });

    let nodeImage    = document.createElement("img");
    nodeImage.src    = selectImg(name);
    nodeImage.style.width  = "25px";
    content.appendChild(nodeImage);

    let nodeName     = document.createElement("p");
    nodeName.id      = name + "Title";
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
        return ("../img/P2/javascripticon.png");
        break;
    case "css":
        return ("../img/P2/cssicon.png");
        break;
    case "html":
        return ("../img/P2/htmlicon.png");
        break;
    case "md":
        return ("../img/P2/mdicon.png");
        break;
    case "png":
        return ("../img/P2/imgicon.png");
        break;
    case "jpg":
        return ("../img/P2/imgicon.png");
        break;
    default:
        return ("../img/P2/foldericon.png");
    }
}

//TODO: create file tooltip function

let filelist = document.getElementById("filelist");

// Requires data.js to be invoked in html to work
populateList(filelist, data);
