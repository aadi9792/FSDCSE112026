function Book(props){
    const div = document.createElement("div");
    div.setAttribute("class","card");
    const image = document.createElement("img");
    image.setAttribute("src","");
    image.setAttribute("height","100px");
    image.setAttribute("width","100px");

    const h2 = document.createElement("h2");
    h2.innerText = "price:₹465";
    const bt = document.createElement("button");
    bt.innerText="Add To Cart";
    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(bt);
    return div;
}
const cart =[];
function addtocart(props){
    cart.push(props);
    console.log(cart);
}
const bookstore = bookdata.map(((i)=>{
    return Book(i);
}));



const parent = document.getElementById("root");
bookstore.forEach((i)=>{
    parent.appendChild(i);
})