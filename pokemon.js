//working on getting type 13:31

const poke_container = document.getElementById("poke_container");
const pokemon_number = 152;
const colors = {
  bug: "#f8d5a3",
  dark: "#",
  dragon: "#97b3e6",
  electric: "#fbfd9e",
  fairy: "#fceaff",
  fighting: "#E6E0D4",
  fire: "#e69598",
  flying: "#c1e0e0",
  ghost: "#a48bbf",
  grass: "#ccff99",
  ground: "#e1d5b1",
  ice: "#b4cffa",
  normal: "#F5F5F5",
  poison: "#999FFF",
  psychic: "#f2aee4",
  rock: "#ecd07c",
  steel: "#",
  water: "#99ccff",
};

const main_types = Object.keys(colors);

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

  const poke_types = pokemon.types.map((el) => el.type.name);
  const type1 = main_types.find((type) => poke_types.indexOf(type) > -1);
  const type2 = main_types.find(
    (type) => poke_types.indexOf(type) > -1 && type != type1
  );

  let type = type1;
  if (type2) {
    type = type1 + " / " + type2;
  }

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id;
  const primaryColor = colors[type1];
  let secondaryColor = colors[type2];
  if (!secondaryColor) {
    secondaryColor = 'darkgray';
  }
 

  pokemonEl.style.backgroundColor = primaryColor;

  const pokeInnerHTML =
    '<div class="img-container"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    id +
    '.png" style="border: 5px solid ' +
    secondaryColor +
    '"></div><div class="info"> <span class="number">#' +
    id.toString().padStart(3, "0") +
    '</span><h3 class="name">' +
    name +
    '</h3><small class="type">Type: <span>' +
    type +
    "</span></small></div>";

  //pokemondb.net/pokedex/bulbasaur

  pokemonEl.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonEl);
}
