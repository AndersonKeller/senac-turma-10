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
let newData = data
// console.log(newData)
renderData(newData)
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
function renderData(list= []){
    const ul = document.querySelector(".products")
    ul.innerHTML = ""
    list.forEach((item)=>{
        const li = document.createElement("li")
      
        const p = document.createElement("p")
        p.innerText = item.name
        const btnAdd = document.createElement("button")
        btnAdd.innerText = "Adicionar"

        btnAdd.addEventListener("click",()=>{
            cartUpdate(item)
        })
        const link = document.createElement("a")
        link.innerText = "veja mais"
        link.addEventListener("click",()=>{
            localStorage.setItem("@item-selecionado",JSON.stringify(item))
            link.href = "./produto"
        })

        const img = document.createElement("img")
        // console.log(img)
        img.src = item.image
        const div = document.createElement("div")
        div.classList.add("card-texts")
        div.append(p,link,btnAdd,)
        li.append(img,div)
        ul.appendChild(li)
    })
    
    ul.insertAdjacentHTML("beforeend",`
    <form>
    <label for="input-name">Nome</label>
    <input id="input-name" type="text" placeholder="insira um novo item">
    <label for="input-price">Preço</label>
    <input id="input-price" type="text" placeholder="insira o preço">
    <button type="submit">Enviar</button>
    </form>
    `)
    const form = document.querySelector("form")
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        createItem(event.target)
    })
}
function createItem(element){
    //{ name: "Televisão", price: "2500" },
    const name = document.querySelector("#input-name")
    const price = document.querySelector("#input-price")
    const obj = {
        name: name.value,
        price: price.value
    }
    newData.push(obj)
    console.log(newData)
    renderData(newData)
}
function openModal(item){
    const body = document.body
    
    body.insertAdjacentHTML("afterbegin",
    `
    <div class="modal-wrapper">
        <div class="modal">
            <button id="btn-close-modal">X</button>
            <p>Deseja realmente excluir esse item?${item.name}</p>
            <button id="btn-remove-confirm">Excluir</button>
        </div>
    </div>
    `)
    const btnCloseModal = document.querySelector("#btn-close-modal")
    btnCloseModal.addEventListener("click",()=>{
        const wrapper = document.querySelector(".modal-wrapper")
        wrapper.remove()
    })
    const btnRemoveItem = document.querySelector("#btn-remove-confirm")
    btnRemoveItem.addEventListener("click",()=>{
        removeItem(item)
        const wrapper = document.querySelector(".modal-wrapper")
        wrapper.remove()
    })
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