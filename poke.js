
$(document).ready(function(){
    for (var i = 1; i < 151; i++) {
         $('.poke-heroes').append(`<div class="info"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png"></div>`);
    };
    $('.info').click(function(){
        $(this).fadeTo(1000, 0.005);
    });
});
