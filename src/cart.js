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
           
             let search = storeItems.find((y) => y.id == id) || [];
           
            return`  <div class="cart-shop">
          
            <img width="150" src="${search.img}" alt="">
            <div class="every">
                <div class="name-price-del">
                    <h3>${search.name}</h3>
                    <p class="rupee" > $ ${search.price}</p>
                    <i onclick="remove(${x.id})" class=" trash bi bi-trash"></i>
                   
                </div>
                <div class="cart-add-sub">
    
                    <i onclick = "decrement(${x.id})" class="bi bi-dash-lg"></i>
                   <div id = "${x.id}" class="quantity">${x.item}</div>
                   <i onclick = "increment(${x.id})" class="bi bi-plus-lg"></i>
  
              </div>
              <div class="total-of-every-productt">
                <h3>$ ${x.item * search.price}</h3>
              </div>

            </div>

        </div>
              
        ` 
                
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

let remove = (id)=>{
    let selectedId = id;
    basket = basket.filter((x) => x.id != selectedId);
    generateCartItems();
    calculate();
    totalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
}


let increment = (id)=>{
    
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);
    if(search === undefined){
      basket.push({
          id : selectedItem,
          item : 1
      })
    }
    else{
      search.item +=1;
    }
    
    localStorage.setItem("data" , JSON.stringify(basket));
    totalAmount();
    generateCartItems();
    calculate()
   
  };

  let decrement = (id)=>{
    let selectedId = id;
   
    let search = basket.find((x) => x.id == selectedId)
    if(search == undefined){
        return
    }
    else if(search.item == 0){
        return
    }
    else{
        search.item -= 1;
    }

  

   
    basket = basket.filter((x)=> x.item !== 0)
    localStorage.setItem("data" , JSON.stringify(basket));
    totalAmount();
    generateCartItems();
    calculate()
   
  }
// Total amount ------------------------------------------------

//  let total = document.getElementById("cartItems");

let totalAmount = () => {

   if(basket.length != 0){
    let amount = basket.map((x) => {
        let search = storeItems.find((y) => y.id == x.id);
        return x.item*search.price;
    }).reduce((x,y)=>x+y,0);
    
    //console.log(amount);
    label.innerHTML = `
    <h3>The Grand total :${amount} </h3>`
   }
  else return;
  
  }
  
  totalAmount();
 
