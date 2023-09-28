const local = JSON.parse(localStorage.getItem("@item-selecionado"))
console.log(local)

const h3 = document.querySelector("h3")
h3.innerText = local.name

const p = document.querySelector("p")
p.innerText = local.price