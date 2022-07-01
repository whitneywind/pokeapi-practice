const results = document.querySelector('.name-display');
const resultsContainer = document.querySelector('.results-container');
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
        const imgContainer = document.querySelector('#img-container');
        const column2 = document.querySelector('.column2');
        imgContainer.innerHTML = `<img class="sprite-img image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${response.data.id}.png" />`;
        column2.innerHTML = `<p class="col2-info">${response.data.moves[0].move.name}</p>`
        console.log(response.data);
        card.classList.add("border-yellow-400");
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