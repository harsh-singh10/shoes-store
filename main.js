const store = document.getElementById("store-items");

   

let storeItems = [
    {
        id : "p1",
        name: "Product 1",
        price : 1000,
        img : "images/photo-1542291026-7eec264c27ff.avif"
    },
    {
        id : "p2",
        name: "Product 2",
        price : 2000,
        img : "images/np1.webp"
    },
    {
        id : "p3",
        name: "Product 3",
        price : 2200,
        img : "images/np2.jpg"
    }
];


let generateStore = ()=>{
    return (store.innerHTML = storeItems.map( (x) =>{
        let {name , price,img} = x;
        return `
        <div class="container">
        <img width="300" src=" ${img} " alt="">
        <div class="details">
            <h2>${name}</h2>
            <div class="price-btn">
                <h3 style=" margin-left: 30px;">$ ${price} </h3>
                <div class="add-to-cart">
                    <button class="btn">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
        `
    } ).join(" "));
}
generateStore();