import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../pokemonservice.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons(10000, 0).subscribe(response => {
      let pokemonData = response.results;
      pokemonData.sort(() => Math.random() - 0.5); // Desordenamos el array para tener pokemons aleatorios
      pokemonData = pokemonData.slice(0, 8); // Nos quedamos con los primeros 8

      // Obtenemos los detalles de los 8 pokemons seleccionados
      pokemonData.forEach((pokemon: Pokemon) => {
        this.pokemonService.getPokemonDetails(pokemon.name).subscribe(details => {
          this.pokemons.push(details);
        });
      });
      
    });
  }
  
}
