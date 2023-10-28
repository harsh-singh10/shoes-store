let basket =JSON.parse( localStorage.getItem("data") )  || [];

let calculate = ()=>{
    // CALCULATING AND UPDATING CART CART VALUESS
    let cartValue = document.getElementById("cart-amount");
    cartValue.innerHTML = basket.map((x) => x.item ).reduce((x,y) =>x+y,0  )
   
}
calculate();

let label = document.getElementById("label");
let cartItems = document.getElementById("cart-items");

let generateCartItems = ()=>{
    if(basket.length !==0 ){}
    else{
        cartItems.innerHTML =``
        label.innerHTML = ` <h2>Your cart is empty</h2>
        <a href="index.html">
        <button class="cart-btn">Go to Home</button></a>`
    }
}
generateCartItems();

