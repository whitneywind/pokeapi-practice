const results = document.querySelector('.name-display');
const resultsContainer = document.querySelector('.results-container');
const imgContainer = document.querySelector('#img-container');
const column2 = document.querySelector('.column2');
const card = document.querySelector('#card');
const footer = document.querySelector('footer');

async function fetchData(searchTerm) {
    let address = 'https://pokeapi.co/api/v2/pokemon/' + searchTerm;
    const response = await axios.get(address);

    if (response.data.error) {
        return [];
    } else if (response.data.previous === null) {
        resultsContainer.innerHTML = '';
    }
    else {
        card.classList.remove("hidden");
        let name = response.data.name;
        let firstChar = name.charAt(0).toUpperCase();
        let capName = firstChar + name.slice(1);
        results.innerHTML = `It's ${capName}!`;
        const type = response.data.types[0].type.name;
        switch (type) {
            case "fire":
                card.classList.add("bg-red-600");
                break;
            case "water":
                card.classList.add("bg-sky-400");
                break;
            case "grass":
                card.classList.add("bg-green-500");
                break;
            case "bug":
                card.classList.add("bg-red-600");
                break;
            case "electric":
                card.classList.add("bg-amber-300");
                break;
            case "psychic":
                card.classList.add("bg-violet-800");
                break;
            case "ground":
                card.classList.add("bg-yellow-700");
                break;
            case "ice":
                card.classList.add("bg-cyan-200");
                break;
            case "dark":
                card.classList.add("bg-indigo-900");
                break;
            case "fairy":
                card.classList.add("bg-pink-300");
                break;
            case "normal":
                card.classList.add("bg-yellow-200");
                break;
            case "fighting":
                card.classList.add("bg-amber-600");
                break;
            default: 
                card.classList.add("bg-zinc-500");
        }
        imgContainer.innerHTML = `<img class="object-cover h-36" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${response.data.id}.png" />`;
        column2.innerHTML = `<p class="col2-info">Element: ${type}</p>`
        return response.data;
    }
};

const input = document.querySelector('input');

let timeoutId;

const onInput = (event) => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
        event.target.value = '';
    }, 1000)
};

input.addEventListener('input', onInput);

const randomPokemon = async () => {
    let randomId = Math.round(Math.random() * (150 - 1) + 1);
    let source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${randomId}.png`;
    // let randomAddress = 'https://pokeapi.co/api/v2/pokemon/' + randomId;
    // let randomResponse = await axios.get(randomAddress);
    for (let i = 0; i < 5; i++) {
        let poke = document.createElement('img');
        poke.classList.add('h-16', 'mx-auto', 'mb-2')
        poke.src = source;
        footer.appendChild(poke);
    }
    // let randomInfo = 'https://pokeapi.co/api/v2/pokemon/';
    // let randomResponse = await axios.get(randomInfo);
    // console.log(randomResponse);
}

randomPokemon();
