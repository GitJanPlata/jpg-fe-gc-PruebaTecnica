import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  base_experience: number;
  abilities: {
    ability: {
      name: string;
    }
  }[];
  types: {
    type: {
      name: string;
    }
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetails(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name}`);
  }

  searchTerm: Subject<string> = new Subject<string>();

  getPokemonList() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  setSearchTerm(searchTerm: string) {
    this.searchTerm.next(searchTerm);
  }
}