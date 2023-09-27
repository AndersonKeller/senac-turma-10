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
    const text = cart.children[0]
    text.innerText = "Itens no carrinho"
    const li = document.createElement("li")
    li.innerText = item.name
    const btnRemove = document.createElement("button")
    btnRemove.classList.add("btn-remove")
    btnRemove.id = item.name

    btnRemove.addEventListener('click',()=>{
        openModal(item)
    })
    btnRemove.innerText = "X"
    li.appendChild(btnRemove)
    cart.appendChild(li)
    
}
function removeItem(item){
    const cart = document.querySelector(".cart")
    
    const carts = Array.from(document.getElementsByClassName("btn-remove"))
    const index = carts.findIndex((cart)=>{
        return cart.id == item.name
    })
    
    carts[index].parentElement.remove()
    if(cart.children.length==1){
        const text = cart.children[0]
        text.innerText = "Carrinho vazio"
    }
    
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

function openModal(item){

    console.log(item,"modal")
    //button excluir
    //removeItem(item)
}
{/* <div class="modal-wrapper">
      <div class="modal">
        <button id="btn-close-modal">X</button>
        <p>Deseja realmente excluir esse item?</p>
        <button id="btn-remove-confirm">Excluir</button>
      </div>
    </div> */}