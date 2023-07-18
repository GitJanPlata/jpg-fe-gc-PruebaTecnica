import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../pokemonservice.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pokemons: Pokemon[] = [];
  searchSubscription!: Subscription; // Utilizando el operador de asignación definida

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.searchSubscription = this.pokemonService.searchTerm.pipe(
      debounceTime(300) // Esperamos 300ms después de cada pulsación de tecla para hacer la búsqueda
    ).subscribe(searchTerm => {
      this.pokemonService.getPokemons().subscribe(response => {
        let allPokemons = response.results;
  
        // Filtramos los pokemons basándonos en el término de búsqueda
        let filteredPokemons = allPokemons.filter((pokemon: Pokemon) => pokemon.name.includes(searchTerm.toLowerCase()));
  
        // Obtenemos los detalles de los pokemons filtrados
        this.pokemons = [];
        filteredPokemons.forEach((pokemon: Pokemon) => {
          this.pokemonService.getPokemonDetails(pokemon.name).subscribe(details => {
            this.pokemons.push(details);
          });
        });
      });
    });
  }

}


