const results = document.querySelector('.results');

async function fetchData(searchTerm) {
    let address = 'https://pokeapi.co/api/v2/pokemon/' + searchTerm;
    const response = await axios.get(address);
    console.log("searchTerm is: ", searchTerm);
    console.log("address is: ", address);
    if (response.data.error) {
        return [];
    } else {
    results.innerHTML = `${response.data.name}`
    const leftImg = document.querySelector('#left-img-container');
    leftImg.innerHTML = `<img class="sprite-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${response.data.id}.png" />`
    console.log(response.data);
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