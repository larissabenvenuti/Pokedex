<<<<<<< HEAD
const pokemonListContainer = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 10;
let offset = 0;
let currentPokemons = [];

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const generatePokemonCard = (pokemon) => `
    <li class="pokemon-item ${pokemon.type}" data-id="${pokemon.number}">
        <span class="pokemon-number">#${pokemon.number}</span>
        <span class="pokemon-name">${capitalizeFirstLetter(pokemon.name)}</span>
        <div class="pokemon-types">
            ${pokemon.types.map(type => `<span class="pokemon-type ${type}">${type}</span>`).join('')}
        </div>
        <img src="${pokemon.photo}" alt="${pokemon.name}" class="pokemon-image">
    </li>
`;

const loadPokemons = (offset, limit) => {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        currentPokemons.push(...pokemons);
        pokemonListContainer.innerHTML += pokemons.map(generatePokemonCard).join('');
    });
};

const handleLoadMore = () => {
    offset += limit;
    const remainingRecords = maxRecords - offset;
    loadPokemons(offset, remainingRecords <= 0 ? maxRecords % limit : limit);

    if (remainingRecords <= 0) {
        loadMoreButton.remove(); 
    }
};

loadMoreButton.addEventListener('click', handleLoadMore);

loadPokemons(offset, limit);
=======
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33
