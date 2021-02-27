let pokemonList = [
    {
        name: 'Squirtle',
        height: 51,
        types: 'Water'
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

// for(let i=0; pokemonList.length; i++){
//     Object.keys(pokemonList[i]).forEach(function(property){
//         document.write(pokemonList[i][property] + " ")
//     });
//     document.write("<br>");
// }

for(let i=0; pokemonList.length; i++){
    Object.keys(pokemonList[i]).forEach(function(property){
        document.write(pokemonList[i][property] + " ")
    });
    document.write("<br>");
}






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
