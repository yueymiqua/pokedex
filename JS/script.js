let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Squirtle',
            height: 51,
            types: ['Water']
        },
        {
            name: 'Charizard',
            height: 150,
            types: ['Fire', 'Flying' ]
        },
        {
            name: 'Ivysaur',
            height: 99,
            types: ['Grass', 'Poison']
        }
    ]
    
    function add(pokemon){
        if(typeof(pokemon) === "object" && pokemon!=null && 
        Object.keys(pokemon)[0]===Object.keys(pokemonList[0])[0] && 
        Object.keys(pokemon)[1]===Object.keys(pokemonList[0])[1] && 
        Object.keys(pokemon)[2]===Object.keys(pokemonList[0])[2]) {
            pokemonList.push(pokemon)
        } else {
            return alert('Pokemon needs to be an object and \n have a name, height, and type property.');
        };
    }
    function getAll() {
        return pokemonList;
    };

    return {
        add: add,
        getAll: getAll
    };

})();

//filters the pokemon list to check pokemon name
let filteredPokemon = pokemonRepository.getAll().filter((pokemon) => {
    return pokemon.name == "Squirtle";
})
console.log(filteredPokemon);
document.write('Name:' + filteredPokemon[0] + ' Height:' + filteredPokemon[1] + 'cm Type:' + filteredPokemon[2] + '<br>');

//gets full list of pokemon
pokemonRepository.getAll().forEach((pokemon) => {
    document.write('Name:' + pokemon.name + ' Height:' + pokemon.height + 'cm Type:' + pokemon.types + '<br>');
});

//add the pokemon to the pokemon list
pokemonRepository.add({name: 'Electabuzz', height: 110, types: ['Electric']});




// for(let i=0; pokemonRepository.getAll().length; i++){
//     Object.keys(pokemonRepository.getAll()[i]).forEach(function(property){
//         document.write((pokemonRepository.getAll()[i]) + " ")
//     });
//     document.write("<br>");
// }


// for(let i=0; i < pokemonList.length; i++) {
//     document.querySelector('[class=pokemon-'+CSS.escape(i)+'-name]').innerText = pokemonList[i].name;
//     if(pokemonList[i].height >= 100){
//         document.querySelector('[class=pokemon-'+CSS.escape(i)+'-description]').innerText = 
//         "Height:"+pokemonList[i].height+"cm and Type:"+ pokemonList[i].types + "\n" + "** Wow, That's a big Pokemon! **";
//     } else {
//         document.querySelector('[class=pokemon-'+CSS.escape(i)+'-description]').innerText = 
//         "Height:"+pokemonList[i].height+"cm and Type:"+pokemonList[i].types;
//     }
// }
