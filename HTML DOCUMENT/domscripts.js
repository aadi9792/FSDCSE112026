function addParagraph() {
    const para =  document.createElement("p");
    para.innerHTML = "<i>This is a new paragraph.</i>";
    para.style.color = "blue";
    const parent = document.getElementById("root");
    parent.appendChild(para);


}
function removeParagraph() {
    const parent = document.getElementById("root");
    const para = parent.querySelector("p"); 
    parent.removeChild(para);
}
function removeAllParagraphs() {
    const parent = document.getElementById("root");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}