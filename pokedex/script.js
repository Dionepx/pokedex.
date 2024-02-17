const pokemons = [
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
          number: 1,
          name: 'Bulbasaur',
          type: ['planta',' Poison']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
          number: 2,
          name: 'Ivysaur',
          type: ['planta',' Poison']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
          number: 3,
          name: 'Venusaur',
          type: ['planta',' Poison']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
          number: 4,
          name: 'Charmander',
          type: ['fogo']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
          number: 5,
          name: 'Charmeleon',
          type: ['fogo']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
          number: 6,
          name: 'Charizard',
          type: ['fogo',' flying']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
          number: 7,
          name: 'Squirtle',
          type: ['água']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
          number: 8,
          name: 'Wartortle',
          type: ['água']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
          number: 9,
          name: 'Blastoise',
          type: ['água']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png',
          number: 10,
          name: 'Caterpie',
          type: ['bug']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png',
          number: 11,
          name: 'Metapod',
          type: ['bug']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png',
          number: 12,
          name: 'Butterfree',
          type: ['planta',' Poison']
     }
     
]

const divResultados = document.getElementById('resultados')
const inputTxt = document.getElementById('txt')
const btn = document.getElementById('btn')

pokemons.map(el => divResultados.innerHTML += `
     <div> 
          <img src='${el.URL}'>
          <h6>Número: ${el.number}</h6>
          <h1>${el.name}</h1>
          <h3>${el.type}</h3>
     </div>
`)

const findPokemon = () => {
     const showPokemon = pokemons.filter(el => el.name === inputTxt.value) // el.nome => propriedade nome do objeto el
     console.log(showPokemon)
     divResultados.innerHTML = `
     <div> 
          <img src='${showPokemon[0].URL}'>
          <h6>Número: ${showPokemon[0].number}</h6>
          <h1>${showPokemon[0].name}</h1>
          <h3>${showPokemon[0].type}</h3>
     </div>
     `
}

btn.addEventListener('click', findPokemon)













// const companies = [
//      {name:'Company One', category: 'Finance', start: 1995, end: 2004},
//      {name:'Company Two', category: 'Retail', start: 1881, end: 2000},
//      {name:'Company Three', category: 'Auto', start: 1968, end: 20010}
// ]

// const retailCompany = companies.filter(company => company.category === 'Retail')

// const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005)