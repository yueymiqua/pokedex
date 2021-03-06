# pokedex
 
Project description: To build a small web application called "Pokedex" with HTML, CSS, and JavaScript that loads
all the Pokemon data from an external API and enables the viewing of data points in detail when the specific button representing the pokemon by name is clicked. All 150 Pokemon names are loaded from the start, but details regarding that Pokemon will only be fetched and loaded via a modal after Pokemon button is click. Pokemon Details include an image of the Pokemon as well as their height and their type. Navigation bar will convert to "Hamburger Menu" at screen size sm.

![Pokedex app screenshot](/IMG/Pokedex%20app%20screenshot.png)

Ways to get the project running: 
 - go to ph-pages url "https://yueymiqua.github.io/pokedex/" to view project
 - download project files on https://github.com/yueymiqua/pokedex and launch project via local directory

Project dependencies:
 - Javascript
 - Bootstrap (dependant on jQuery and Popper)
 - Fetch polyfill
 - Promise polyfill
 - ESLint rules & Prettier

Which API the project uses: 
 - uses Javascript Fetch API to retrieve data from url "https://pokeapi.co/api/v2/pokemon/?limit=150"