import { Component, OnInit } from '@angular/core';
import { PokemonService, Pokemon } from '../pokemonservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  searchResults: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.searchTerm.subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      this.filterResults();
    });
  }

  filterResults() {
    this.pokemonService.getPokemonList().subscribe((data: any) => {
      if (data && data.results) {
        const filteredResults = data.results.filter((pokemon: Pokemon) =>
          pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.searchResults = filteredResults;
      }
    });
  }

  search() {
    this.pokemonService.setSearchTerm(this.searchTerm);
  }
}