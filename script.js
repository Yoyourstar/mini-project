class Pokemon { 
    reset() {
    window.location.reload()
    }
   
    showPokemonApi() {    
    const pokemon_result = document.getElementById('pokemon-result');
    pokemon_result.innerHTML = "";
    pokemon_result.innerHTML = "Aku pokemon api"; 
    pokemon_result.style.color = "red";
    }

    showPokemonAir()  {

    const pokemon_result = document.getElementById('pokemon-result');
    pokemon_result.innerHTML = "";
    pokemon_result.innerHTML = "Aku pokemon air";
    pokemon_result.style.color="blue";
    }
   
    showPokemonAngin() {
    const pokemon_result = document.getElementById('pokemon-result');
    pokemon_result.innerHTML = "";
    pokemon_result.innerHTML = "Aku pokemon air"; 
    pokemon_result.style.color = "gray";
    }

    showPokemonJahat() { 
    const pokemon_result = document.getElementById('pokemon-result'); 
    pokemon_result.innerHTML = ""; 
    pokemon_result.innerHTML = "Aku pokemon jahat";
    pokemon_result.style.color="black";
    }
}
    const pokemon = new Pokemon();

    const pokemon_air = document.getElementById("pokemon1"); 
    pokemon_air.addEventListener("click", pokemon.showPokemonAir);

    const pokemon_api = document.getElementById("pokemon2"); 
    pokemon_api.addEventListener("click", pokemon.showPokemonApi);

    const pokemon_angin = document.getElementById("pokemon3"); 
    pokemon_angin.addEventListener("click", event => { pokemon.showPokemonAngin();
    });

    const pokemon_jahat = document.getElementById("pokemon4"); 
    pokemon_jahat.addEventListener("click", pokemon.showPokemonJahat);
    const btn_reset = document.getElementById("btn-reset"); 
    btn_reset.addEventListener("click", pokemon.reset)