const results = document.querySelector('.name-display');
const resultsContainer = document.querySelector('.results-container');
const imgContainer = document.querySelector('#img-container');
const column2 = document.querySelector('.column2');
const card = document.querySelector('#card');

async function fetchData(searchTerm) {
    let address = 'https://pokeapi.co/api/v2/pokemon/' + searchTerm;
    const response = await axios.get(address);

    console.log(response.data);

    if (response.data.error) {
        return [];
    } else if (response.data.previous === null) {
        resultsContainer.innerHTML = '';
    }
    else {
        results.innerHTML = `${response.data.name}`;
        console.log(response.data.types[0].type.name);
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
        imgContainer.innerHTML = `<img class="sprite-img image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${response.data.id}.png" />`;
        column2.innerHTML = `<p class="col2-info">${response.data.moves[0].move.name}</p>`
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
    }, 1000)
};

input.addEventListener('input', onInput);




// used in initial version
// leftImg.innerHTML = `<img src="https://source.unsplash.com/random/?${response.data.name}" />`;