import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemonservice.service';

// Pipe para la barra de busqueda del navbar

@Pipe({
  name: 'filter'
})
export class PokemonFilterPipe implements PipeTransform {
    
  transform(pokemons: Pokemon[], searchTerm: string): Pokemon[] {
    // Si el array de Pokemons o el término de búsqueda están vacíos, se devuelve el array de Pokemons original.
    if (!pokemons || !searchTerm) {
      return pokemons;
    }

    // Filtra los Pokemons en función del término de búsqueda.

    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}