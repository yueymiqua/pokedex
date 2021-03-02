let pokemonRepository = (function () {
    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    let heading = document.querySelector('.heading');

    let logo = document.querySelector('.logo');

    //adds a new pokemon to the list
    function add(pokemon){
        pokemonList.push(pokemon)
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
    
    // addListItem function will call this showDetails function when a button is clicked and the pokemon object will be logged
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            console.log(pokemon);
        })
    }

    function showLoadingMessage() {
        heading.innerText = ('Pokedex loading...please wait');
        // unorderedList.classList.add('is-loading');
        // if (element.classList.contains('is-loading')){
        //     element.innerText=("Pokemon List is Populating....Please Wait")
        // }
    }

    function hideLoadingMessage() {
        heading.innerText = ('Pokedex');
    }

    // loads the full list of pokemon objects from API url onto pokemonList array 
    function loadList(){
        showLoadingMessage();
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            hideLoadingMessage();
            return json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                }
                add(pokemon);
            });
        }).catch(function(e) {
            hideLoadingMessage();
            console.error(e);
        })
    }

    // load the other properties of the pokemon when button is clicked
    function loadDetails(item){
        showLoadingMessage();
        let url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            hideLoadingMessage();
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            logo.src = item.imageUrl;
        }).catch(function(e) {  
            hideLoadingMessage();
            console.error(e);
        });
    }

    return {
        add: add, // not required to return as access outside of function not required
        getAll: getAll,
        loadList: loadList,
        addListItem: addListItem,
        loadDetails: loadDetails // not required to return as access outside of function not required
    };

})();

//loads full list of pokemon from the API
pokemonRepository.loadList().then(function() {
    //gets full list of pokemon and runs a loop for each pokemon object in the array
    pokemonRepository.getAll().forEach(function(pokemon) {
        //calls the addListItem function for each pokemon object in the array
        pokemonRepository.addListItem(pokemon);
    });
})







//filters the pokemon list to check pokemon name
// let filteredPokemon = pokemonRepository.getAll().filter((pokemon) => {
//     return pokemon.name == "Charizard";
// })

        // if(typeof(pokemon) === "object" && pokemon!=null && //only accepts input if it is an object and is not "null"
        // //only accepts input if it is an object with a "name", "height", and "types" filed
        // Object.keys(pokemon)[0]===Object.keys(pokemonList[0])[0] && 
        // Object.keys(pokemon)[1]===Object.keys(pokemonList[0])[1] && 
        // Object.keys(pokemon)[2]===Object.keys(pokemonList[0])[2]) {

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
