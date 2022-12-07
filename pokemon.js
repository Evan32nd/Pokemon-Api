//working on getting type 13:31

const poke_container = document.getElementById("poke_container");
const pokemon_number = 150;

const fetchPokemon = async () => {
  for (let i = 1; i < pokemon_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

fetchPokemon();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id;
  const image = pokemon.sprite;
  const type = pokemon.type;

  const pokeInnerHTML =
    '<div class="img-container"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    id +
    '.png"></div><div class="info"> <span class="number">' +
    id +
    '</span><h3 class="name">' +
    name +
    '</h3><small class="type">Type: <span>' + type + '</span></small></div>';

  //pokemondb.net/pokedex/bulbasaur

  https: pokemonEl.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonEl);
}
