import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemonservice.service';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {
  transform(pokemons: Pokemon[], searchTerm: string): Pokemon[] {
    if (!pokemons || !searchTerm) {
      return pokemons;
    }

    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}