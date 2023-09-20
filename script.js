import { data } from "./data.js";
const main = document.querySelector("main");
const ulData = document.createElement("ul");
const btnAdd = document.createElement("button");
btnAdd.innerText = "Adicionar";
renderData();
function renderData() {
  ulData.innerHTML = "";
  data.forEach((item) => {
    const liData = document.createElement("li");
    const priceText = document.createElement("p");
    const btnRemove = document.createElement("button");

    btnRemove.innerText = "X";
    priceText.innerText = item.price;
    liData.innerText = item.name;

    btnRemove.id = item.name;

    btnRemove.addEventListener("click", () => {
      removeItem(btnRemove.id);
    });

    liData.append(priceText, btnRemove);
    ulData.appendChild(liData);
    ulData.appendChild(btnAdd);
  });
}
function removeItem(id) {
  const newData = data.filter((item) => {
    return item.name != id;
  });
  console.log(newData);
}
ulData.appendChild(btnAdd);
main.appendChild(ulData);
btnAdd.addEventListener("click", () => {
  const obj = {
    name: "Sofá",
    price: "1800",
  };
  data.push(obj);
  renderData();
});
