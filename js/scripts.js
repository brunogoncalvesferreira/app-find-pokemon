let button = document.querySelector("button")
let input = document.querySelector("input")
let imagePokemon = document.querySelector("#image-pokemon")
let info = document.querySelector("#info")

button.addEventListener("click", (e) => {

    e.preventDefault()

    const api = `https://pokeapi.co/api/v2/pokemon/${input.value}`

    fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        imagePokemon.innerHTML = `<img src="${data.sprites.front_default}"/>`
        info.innerHTML = `
        
        <span>Nome: ${data.name}</span>
        <span>Tipo: ${data.types[0].type.name}</span>

        `

        input.value = ""
        input.focus()
        
    })

})



