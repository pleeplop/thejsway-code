const h1 = document.body.childNodes[1];
//console.log(h1.parentNode);
//console.log(document.parentNode);

for (const childNode of document.body.childNodes) {
//    console.log(childNode);
}

// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
const showChild = (node, index) => {
    if (node.nodeType !== document.ELEMENT_NODE) {
        console.error("Wrong node type");
        return;
    }

    let childNodes = node.childNodes;
    if (index < 0 || index >= childNodes.length) {
        console.error("Incorrect index");
        return;
    }
    let childNode = node.childNodes[index];
    
    console.log(childNode);
};

// Should show the h1 node
showChild(document.body, 1);

// Should show "Incorrect index"
showChild(document.body, -1);

// Should show "Incorrect index"
showChild(document.body, 8);

// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);
