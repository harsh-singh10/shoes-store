let store = document.getElementById("store-items");


let basket =JSON.parse( localStorage.getItem("data") )  || [];
   console.log(basket);



// GENERATING THE WHOLE STORE USING JAVA SCRIPT 

let generateStore = ()=>{
    return (store.innerHTML = storeItems.map( (x) =>{
        let {name ,id , price,img} = x;
        return `
        <div  id = "product-id-${id} " class="container">
        <img width="300" src=" ${img} " alt="">
        <div class="details">
            <h2>${name}</h2>
            <div class="price-btn">
                <h3 style=" margin-left: 30px;">$ ${price} </h3>
                <div class="add-to-cart"  >
                    <button id ="${id}" onclick="increment(${id}) ; change(${id})" class="btn">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
        `
    } ).join(" "));
}
generateStore();

//FOR CHANGE NAME OF THE BUTTON


// Get all the "Add to Cart" buttons on the page
const addToCartButtons = document.querySelectorAll(".btn");

// Function to change the button text to "Added" when clicked
function changeButtonText(event) {
    const button = event.target;
    button.textContent = "Added";

}

// Attach a click event listener to each "Add to Cart" button
addToCartButtons.forEach((button) => {
    button.addEventListener("click", changeButtonText);
});





   
    







// THIS IS FOR INCREMENT THE ITEM NO THAT IS SELECTED 

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
  
  calculate()
 
 
};

// CALCULATING TOTAL NO OF ITEM THAT IS SELETECT FOR STORE IN CARTT

let calculate = ()=>{
    // CALCULATING AND UPDATING CART CART VALUESS
    let cartValue = document.getElementById("cart-amount");
    cartValue.innerHTML = basket.map((x) => x.item ).reduce((x,y) =>x+y,0  )
   
}
calculate();








