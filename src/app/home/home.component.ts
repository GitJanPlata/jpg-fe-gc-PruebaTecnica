import { Component, OnInit } from '@angular/core';
import { PokemonService, Pokemon } from '../pokemonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonDetails();
  }

// Obtiene los detalles de los pokemons mencionados
  getPokemonDetails(): void {
    const pokemonNames = ['pikachu', 'bulbasaur', 'charmander','squirtle',];
    
// Itera sobre los nombres de los Pokémon y realiza una  petición  al servicio para obtener los detalles de cada uno.
    pokemonNames.forEach(name => {
      this.pokemonService.getPokemonDetails(name)
        .subscribe(pokemonDetails => this.pokemons.push(pokemonDetails));
    });
  }
}