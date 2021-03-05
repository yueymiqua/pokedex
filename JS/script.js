let pokemonRepository = (function () {
    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    let heading = document.querySelector('.heading');

    //initialized immediately as the pokemonRepository function is called so it can be used in the eventListeners that trigger hideModal
    let modalContainer = document.querySelector('#modal-container');

    // loads the full list of pokemon objects from API url onto pokemonList array 
    function loadList(){
        showLoadingMessage();
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            hideLoadingMessage();
            return json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name.toUpperCase(),
                    height: item.height,
                    detailsUrl: item.url
                }
                add(pokemon);
            });
        }).catch(function(e) {
            hideLoadingMessage();
            console.error(e);
        })
    }

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
        listItem.classList.add('list-group-item');
        let button = document.createElement('button');
        button.innerText = (pokemon.name);
        button.classList.add('pokemon-item', 'btn');
        button.setAttribute('data-toggle', 'modal')
        button.setAttribute('data-target', '#exampleModal')
        listOfPokemon.appendChild(listItem);
        listItem.appendChild(button);
        addListenerToButton(button, pokemon); 
    }

    //this function adds the event listener to the button created in the above function
    function addListenerToButton(button, pokemon) {
        button.addEventListener('click', function(){
            showDetails(pokemon);
        })
    }
    
    //this function is called when event listener hears the button click
    //this function creates the modal and all modal child elements such as button and other tags
    //then it will add all those elements as children to the modal, and then the modal add to parent "modal container"
    function showDetails(pokemon) {

        loadDetails(pokemon).then(function() {

            let modalTitle = $('.pokemon-name');
            let modalBody = $('.modal-body');
            modalTitle.empty();
            modalBody.empty();

            let pokemonTitle = $('<h1>' + pokemon.name + '</h1>');
            let pokemonDetails = $('<p class="pokemon-details">' + "Height:" + pokemon.height + " , Type:" + pokemon.types[0].type.name + '</p>');
            let pokemonImage = $('<img class="pokemon-image" style="width:60%">');
            pokemonImage.attr("src", pokemon.imageUrl);

            modalTitle.append(pokemonTitle);
            modalBody.append(pokemonDetails);
            modalBody.append(pokemonImage);

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
        }).catch(function(e) {  
            hideLoadingMessage();
            console.error(e);
        });
    }

    // shows loading message when API is fetching data from server
    function showLoadingMessage() {
        heading.innerText = ('Pokedex loading...please wait');
    }

    // hides loading message after data is fetched
    function hideLoadingMessage() {
        heading.innerText = ('Pokedex');
    }

    return {
        add: add, // not required to return as access outside of function not required
        getAll: getAll,
        loadList: loadList,
        addListItem: addListItem,
        loadDetails: loadDetails // not required to return as access outside of function not required
    };

})();// pokemonReposity function is ran right away due to adding those open/close round brackets at the end

//loads full list of pokemon from the API
pokemonRepository.loadList().then(function() {
    //gets full list of pokemon and runs a loop for each pokemon object in the array
    pokemonRepository.getAll().forEach(function(pokemon) {
        //calls the addListItem function for each pokemon object in the array
        pokemonRepository.addListItem(pokemon);
    });
})
