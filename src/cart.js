let basket =JSON.parse( localStorage.getItem("data") )  || [];







let calculate = ()=>{
    // CALCULATING AND UPDATING CART CART VALUESS
    let cartValue = document.getElementById("cart-amount");
    cartValue.innerHTML = basket.map((x) => x.item ).reduce((x,y) =>x+y,0  )
   
}
calculate();

let label = document.getElementById("label");
let cartItems = document.getElementById("cart-items");

// console.log(storeItems);


let generateCartItems = ()=>{
    if (basket.length !== 0) {
        return (cartItems.innerHTML = basket.map((x) => {
            let { id, item } = x;
            console.log(x);
             let search = storeItems.find((y) => y.id == id) || [];
             console.log(search);
            return`  <div class="cart-shop">
          
            <img width="150" src="${search.img}" alt="">
            <div class="every">
                <div class="name-price-del">
                    <h3>${search.name}</h3>
                    <p class="rupee" > $ ${search.price}</p>
                    <i onclick="" class=" trash bi bi-trash"></i>
                   
                </div>
                <div class="cart-add-sub">
    
                    <i onclick = "decrement()" class="bi bi-dash-lg"></i>
                   <div id = "${x.id}" class="quantity">${x.item}</div>
                   <i onclick = "increment()" class="bi bi-plus-lg"></i>
  
              </div>
              <div class="total-of-every-productt">
                <h3> ${x.item * search.price}</h3>
              </div>
                

            </div>
           




        </div>` 
                
              ;
          }).join(" "))
    }
    else{
        cartItems.innerHTML =``
        label.innerHTML = ` <h2>Your cart is empty</h2>
        <a href="index.html">
        <button class="cart-btn">Go to Home</button></a>`
    }
}
generateCartItems();



