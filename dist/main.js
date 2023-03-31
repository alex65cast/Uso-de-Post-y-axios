
const peticiones = async()=>{

    const randomPokemonId = Math.round(Math.random() * (1281));

    let api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
    console.log(api.results);

    document.querySelector('.imagen').innerHTML= `<img src="${api.data.sprites.front_default}"> Id: ${api.data.id} <br> Nombre: ${api.data.name}`;

}

// peticiones();