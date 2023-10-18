const result = await fetch("https://pokeapi.co/api/v2/pokemon/")
// console.log(await result.json())
const pokemons = await result.json()
console.log(pokemons)
const pokemonsList = pokemons.results

// console.log(pokemonsList)

 function renderPokemons(list=[]){
    const ul = document.querySelector(".ul-pokemons")
    ul.innerHTML = ""
    list.forEach(async (pokemon)=>{
        const pokemonInfo = await fetch(pokemon.url)
        const pokemonJson = await pokemonInfo.json()
        // console.log(pokemonJson)
        ul.insertAdjacentHTML("beforeend",`
        <li class="poke-card">
        <p>${pokemon.name}</p>
        <img src=${pokemonJson.sprites.front_default} />
        </li>
        `)
    })
}
renderPokemons(pokemonsList)

const btnNext = document.querySelector("#btn-next")
let offset = 0
btnNext.addEventListener("click", async ()=>{
    offset = offset+20
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20'`)
    const pokemenJson  = await res.json()

    renderPokemons(pokemenJson.results)
    console.log(pokemenJson.next)
    console.log(offset)
    console.log(offset)
})
const prevBtn = document.querySelector("#btn-prev")
prevBtn.addEventListener("click",async()=>{
    offset = offset-20
    console.log(offset)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20'`)
    const pokemenJson  = await res.json()
    renderPokemons(pokemenJson.results)
    console.log(pokemenJson.next)
})
// MÉTODOS
// GET - LER INFORMAÇÕES
// PUT - ATUALIZA DADOS (NECESSÁRIO ENVIAR TODOS)
// PATCH - ATUALIZA PARCIALMENTE OS DADOS
// DELETE - REMOVE UM DADO
