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
                    <button class="btn-add">Adicionar ao carrinho</button>
                </div>
            </div>
        </li>
        `)
        renderGallery(item.product.images)
    })
}   
main()
function renderGallery(item){
    console.log(item)
    const ul = document.querySelector(".gallery")
    item.forEach((img)=>{
        console.log(img)
        // 
        ul.insertAdjacentHTML("beforeend",`
        <li>
            <img src="${img}">
        </li>
        `)
    })}
