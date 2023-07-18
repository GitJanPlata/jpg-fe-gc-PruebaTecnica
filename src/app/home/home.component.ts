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

  getPokemonDetails(): void {
    const pokemonNames = ['pikachu', 'bulbasaur', 'charmander','squirtle',];

    pokemonNames.forEach(name => {
      this.pokemonService.getPokemonDetails(name)
        .subscribe(pokemonDetails => this.pokemons.push(pokemonDetails));
    });
  }
}