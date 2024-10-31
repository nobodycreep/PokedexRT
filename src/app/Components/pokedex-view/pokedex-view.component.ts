import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { FormsModule } from '@angular/forms';
import { MedalComponent } from '../medal/medal.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent, GraficoComponent, FormsModule, MedalComponent, CommonModule],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})

export class PokedexViewComponent 
{
  imagenPokemon: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/1.png';
  pokemonId: number = 1;
  pokemonInput: string = '';
  isDarkMode: boolean = false;
  imagenMedalla: string='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/1.png';
  medallaId: number = 1;
  

  handlePokemon(event: number) 
  {
    this.pokemonId += event;
    this.imagenPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/' + this.pokemonId + '.png';
  }
  
  searchPokemon() 
  { 
    const pokemonId = parseInt(this.pokemonInput);
    
    if (pokemonId > 0 && pokemonId <= 1025) {
      this.pokemonId = pokemonId; 
      this.imagenPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/' + this.pokemonId + '.png';
    }
  }

  toggleDarkMode() 
  {
    this.isDarkMode = !this.isDarkMode;

    const divsToChange1 = document.querySelectorAll('.container.screen ');
    const divsToChange2 = document.querySelectorAll('.container.lowscreen');
    const divsToChange3 = document.querySelectorAll('.pokedex-view');
    const divsToChange4 = document.querySelectorAll('.green-screen');
    const divsToChange5 = document.querySelectorAll('.d-pad div');
    const divsToChange6 = document.querySelectorAll('.light.red');
    const divsToChange7 = document.querySelectorAll('.light.yellow');
    const divsToChange8 = document.querySelectorAll('.light.green');
    const divsToChange9 = document.querySelectorAll('.button.red');
    const divsToChange10 = document.querySelectorAll('.blue-circle');

    if (this.isDarkMode) 
      {
        divsToChange1.forEach(div => {(div as HTMLElement).style.backgroundColor = '#d1cece';});
        divsToChange2.forEach(div => {(div as HTMLElement).style.backgroundColor = '#d1cece';});
        divsToChange3.forEach(div => {(div as HTMLElement).style.backgroundColor = '#444';});
        divsToChange4.forEach(div => {(div as HTMLElement).style.backgroundColor = '#d1cece';});
        divsToChange5.forEach(div => {(div as HTMLElement).style.backgroundColor = '#faebd7';});
        divsToChange6.forEach(div => {(div as HTMLElement).style.backgroundColor = 'white';});
        divsToChange7.forEach(div => {(div as HTMLElement).style.backgroundColor = 'white';});
        divsToChange8.forEach(div => {(div as HTMLElement).style.backgroundColor = 'white';});
        divsToChange9.forEach(div => {(div as HTMLElement).style.backgroundColor = 'black';(div as HTMLElement).style.color = 'white';});
        divsToChange10.forEach(div => {(div as HTMLElement).style.backgroundColor = 'white';(div as HTMLElement).style.border = '5px solid gray';});
      }
    else 
      {
        divsToChange1.forEach(div => {(div as HTMLElement).style.backgroundColor = '';});
        divsToChange2.forEach(div => {(div as HTMLElement).style.backgroundColor = '';});
        divsToChange3.forEach(div => {(div as HTMLElement).style.backgroundColor = '';});
        divsToChange4.forEach(div => {(div as HTMLElement).style.backgroundColor = '';});
        divsToChange5.forEach(div => {(div as HTMLElement).style.backgroundColor = '';});
        divsToChange6.forEach(div => {(div as HTMLElement).style.backgroundColor = '';});
        divsToChange7.forEach(div => {(div as HTMLElement).style.backgroundColor = '';});
        divsToChange8.forEach(div => {(div as HTMLElement).style.backgroundColor = '';});
        divsToChange9.forEach(div => {(div as HTMLElement).style.backgroundColor = '';(div as HTMLElement).style.color = '';});
        divsToChange10.forEach(div => {(div as HTMLElement).style.backgroundColor = '';(div as HTMLElement).style.border = '';});
      }
  }

  handleMedal(event: number) 
  {
    this.medallaId += event;
    this.imagenMedalla = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/' + this.medallaId + '.png';
  }

}
