import {data} from "./data.js"
// console.log(data)
function main(){
    const ul = document.querySelector(".ul-products")
    data.items.forEach((item)=>{
        ul.insertAdjacentHTML("beforeend",`
        <li class="li-items">
            <div class="images">
                <ul class="gallery">
                
                </ul>
                <img src=${item.product.images[0]} alt="">
            </div>
            <div class="description">
                <h3>${item.product.name}</h3>
                <div class="div-text-btn">
                    <div class="texts-prod">
                    <div><span class="best-price">melhor preço</span></div>
                    <p><span>${item.product.price.installments}X R$</span>${item.product.price.installmentValue}</p>
                    <p><span>ou</span>R$ ${item.product.price.value}<span>à vista</span></p>
                    </div>
                    <button class="btn-add" id="${item.product.id}">Adicionar ao carrinho</button>
                </div>
            </div>
        </li>
        `)
        const btn = document.getElementById(item.product.id)
        btn.addEventListener("click",()=>{
            addToCart(item.product)
        })
        renderGallery(item.product.images)
    })
}   
main()
function renderGallery(item){
    
    const ul = document.querySelector(".gallery")
    for(let i =0;i<=3;i++){
       
        if(item[i]){
            ul.insertAdjacentHTML("beforeend",`
            <li>
                <img src="${item[i]}">
            </li>
            `)
        }else{
            ul.insertAdjacentHTML("beforeend",`
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png">
            </li>
            `)
        }
       
    }
    }
let cartList = []
function addToCart(item){
    // console.log(item)
    cartList.push(item)
   
    const div = document.querySelector(".position-cart")
    div.insertAdjacentHTML("beforeend",`
    <p class="cart-number">${cartList.length}</p>
    `)
    renderCart()
}
function renderCart(){
    const ul = document.querySelector(".ul-cart")
    ul.innerHTML=""
    cartList.forEach((product)=>{

        ul.insertAdjacentHTML("beforeend",`
        <li class="li-item-cart">
                <div>
                    <img src=${product.images[0]} alt="product">
                </div>
                <div class="div-texts">
                    <h3>${product.name}</h3>
                    <p>${product.price.installments}X R$ ${product.price.installmentValue}</p>
                    <p>ou ${product.price.value} à vista</p>
                </div>
                <button class="btn-remove">X</button>
            </li>
            <p>subtotal</p>
            <p></p>
            <p></p>
        `)
    })
}