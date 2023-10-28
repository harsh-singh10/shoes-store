const store = document.getElementById("store-items");


let basket =[];
   console.log(basket);

let storeItems = [
    {
        id : "1",
        name: "Product 1",
        price : 1000,
        img : "images/photo-1542291026-7eec264c27ff.avif"
    },
    {
        id : "2",
        name: "Product 2",
        price : 2000,
        img : "images/np1.webp"
    },
    {
        id : "3",
        name: "Product 3",
        price : 2200,
        img : "images/np2.jpg"
    }
];

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
                <div class="add-to-cart">
                    <button onclick="increment(${id})" class="btn">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
        `
    } ).join(" "));
}
generateStore();


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
  console.log(basket);
  calculate()
 
};

// CALCULATING TOTAL NO OF ITEM THAT IS SELETECT FOR STORE IN CARTT

let calculate = ()=>{
    // CALCULATING AND UPDATING CART CART VALUESS
    let cartValue = document.getElementById("cart-amount");
    cartValue.innerHTML = basket.map((x) => x.item ).reduce((x,y) =>x+y,0  )
   
}








