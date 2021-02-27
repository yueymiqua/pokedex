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
        pokemonList.push(pokemon);
    };

    function getAll() {
        return pokemonList;
    };

    return {
        add: add,
        getAll: getAll
    };

})();

pokemonRepository.getAll().forEach((pokemon) => {
    document.write('Name:' + pokemon.name + ' Height:' + pokemon.height + 'cm Type:' + pokemon.types + '<br>');
});





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
