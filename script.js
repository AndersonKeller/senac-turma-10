// import { data } from "./data.js";
// const main = document.querySelector("main");
// const ulData = document.createElement("ul");
// const btnAdd = document.createElement("button");
// btnAdd.innerText = "Adicionar";
// //CRIAR UMA LET A PARTIR DA DATA, PRA PODER MEXER NESSE ARRAY
// let newData = [...data];

// renderData(newData);

// //CRIEI UM PARAMETRO PRA FUNÇAO DE RENDER, PRA NÃO FICAR SEMPRE
// // RENDERIZANDO O MESMO ARRAY
// function renderData(list = []) {
//   ulData.innerHTML = "";
//   list.forEach((item) => {
//     const liData = document.createElement("li");
//     const priceText = document.createElement("p");
//     const btnRemove = document.createElement("button");

//     btnRemove.innerText = "X";
//     priceText.innerText = item.price;
//     liData.innerText = item.name;

//     liData.id = item.name;
//     btnRemove.id = item.name;

//     btnRemove.addEventListener("click", () => {
//       removeItem(btnRemove.id);
//     });

//     liData.append(priceText, btnRemove);
//     ulData.appendChild(liData);
//     ulData.appendChild(btnAdd);
//   });
// }

// //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// function removeItem(id) {
//   //FINDINDEX ENCONTRA O INDEX DE UM DETERMINADO ITEM DENTRO DO ARRAY
//   const index = newData.findIndex((item) => {
//     return item.name == id;
//   });
//   console.log(index);
//   //SPLICE RECORTA O NOSSO ARRAY, A PARTIR DO INDEX QUE EU PASSO POR
//   //PARAMETRO
//   newData.splice(index, 1);
//   console.log(newData);
//   renderData(newData);
// }
// ulData.appendChild(btnAdd);
// main.appendChild(ulData);

// btnAdd.addEventListener("click", () => {
//   const obj = {
//     name: "Sofá",
//     price: "1800",
//   };
//   newData.push(obj);
//   renderData(newData);
// });

// uma lista de 4 produtos
// cada produto vai ter um botão de adicionar ao carrinho
// quando clicar no adicionar
// outra lista representando o carrinho
import { data } from "./data.js";
const main = document.querySelector("main");
renderData()
function cartUpdate(item){
    const cart = document.querySelector(".cart")
    const li = document.createElement("li")
    
    li.innerText = item.name

    const btnRemove = document.createElement("button")
    btnRemove.classList.add("btn-remove")
    btnRemove.id = item.name
    btnRemove.addEventListener('click',()=>{
        removeItem(item)
    })

    btnRemove.innerText = "X"
    li.appendChild(btnRemove)
    cart.appendChild(li)
    // console.log(item)
    
}
function removeItem(item){
    const carts = Array.from(document.getElementsByClassName("btn-remove"))
    const index = carts.findIndex((cart)=>{
        console.log(cart)
        return cart.id == item.name
    })
    console.log(item)

    console.log(carts[index].parentElement)
    carts[index].parentElement.remove()
}
function renderData(){
    const ul = document.querySelector(".products")
    data.forEach((item)=>{
        const li = document.createElement("li")
        li.innerText = item.name
        const btnAdd = document.createElement("button")
        btnAdd.innerText = "Adicionar"

        btnAdd.addEventListener("click",()=>{
            cartUpdate(item)
        })

        li.appendChild(btnAdd)
        ul.appendChild(li)
    })
}
