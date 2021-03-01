let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Squirtle',
            height: 51,
            types: ['Water']
        },
        {
            name: 'Charizard',
            height: 170,
            types: ['Fire', 'Flying' ]
        },
        {
            name: 'Ivysaur',
            height: 99,
            types: ['Grass', 'Poison']
        },
        {
            name: 'Alakazam',
            height: 150,
            types: ['Psychic']
        },
        {
            name: 'Snorlax',
            height: 211,
            types: ['Normal']
        },
        {
            name: 'Dragonite',
            height: 221,
            types: ['Dragon', 'Flying']
        }
    ]
    
    //adds a new pokemon to the list
    function add(pokemon){
        if(typeof(pokemon) === "object" && pokemon!=null && //only accepts input if it is an object and is not "null"
        //only accepts input if it is an object with a "name", "height", and "types" filed
        Object.keys(pokemon)[0]===Object.keys(pokemonList[0])[0] && 
        Object.keys(pokemon)[1]===Object.keys(pokemonList[0])[1] && 
        Object.keys(pokemon)[2]===Object.keys(pokemonList[0])[2]) {
            pokemonList.push(pokemon)
        } else {
            return alert('Pokemon needs to be an object and \n have a name, height, and type property.');
        };
    }
    //returns the full list of pokemon 
    function getAll() {
        return pokemonList;
    };
    
    //this function when called will create an li element & button element with class and text
    //button is added as a child of li and the li is added as a child of the ul element
    //then it will also add an event listener to each button and each button will listen for a click action
    function addListItem(pokemon) {
        let listOfPokemon = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = (pokemon.name);
        button.classList.add = ('pokemon-item');
        listOfPokemon.appendChild(listItem);
        listItem.appendChild(button);
        addListenerToButton(button, pokemon); 
    }

    function addListenerToButton(button, pokemon) {
        button.addEventListener('click', function(){
            showDetails(pokemon);
        })
    }
    
    //addListItem function will call this showDetails function when a button is clicked and the pokemon object will be logged
    function showDetails(pokemon) {
        console.log("Name:" + pokemon.name + " Height:" + pokemon.height + " Type:" + pokemon.types);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };

})();

//gets full list of pokemon and runs a loop for each pokemon object in the array
pokemonRepository.getAll().forEach((pokemon) => {
    //calls the addListItem function for each pokemon object in the array
    pokemonRepository.addListItem(pokemon);
});
//before DOM manipulation, code was document.write('Name:' + pokemon.name + ' Height:' + pokemon.height + 'cm Type:' + pokemon.types + '<br>');








//add the pokemon to the pokemon list
pokemonRepository.add({name: 'Electabuzz', height: 110, types: ['Electric']});

//filters the pokemon list to check pokemon name
let filteredPokemon = pokemonRepository.getAll().filter((pokemon) => {
    return pokemon.name == "Charizard";
})
//document.write('Name:' + filteredPokemon[0].name + ' Height:' + filteredPokemon[0].height + 'cm Type:' + filteredPokemon[0].types + '<br>');


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
