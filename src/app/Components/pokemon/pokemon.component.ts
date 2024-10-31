import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent 
{  
  @Input({required:true}) imageURL = "";
  @Output() clickPokemon = new EventEmitter<number>();
  pokeballs = 1025;
  capturedPokemons = 0;

  anteriorPokemon()
  {
    this.clickPokemon.emit(-1);
  }

  siguientePokemon()
  {
    this.clickPokemon.emit(1);
  }

  capturarPokemon() 
  {
    if (this.pokeballs > 0) 
      {
        this.pokeballs--;
        const probabilidadCaptura = Math.random();
        if (probabilidadCaptura < 0.5) 
          {
            this.capturedPokemons++;
            this.clickPokemon.emit(1);
            if (this.capturedPokemons % 5 === 0) 
              {
                this.pokeballs +=2;
              }
          }
      } 
  }
}
