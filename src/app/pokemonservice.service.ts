import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

//Interfaz de la clase pokemon

export interface Pokemon {
  id: number; 
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

  // Obtiene los primeros 500 pokemons de la API
  getPokemons(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=500`);
  }
// Obtiene los detalles del pokemon por nombre
  getPokemonDetails(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name}`);
  }

//obtiene la primera pàgina de pokemons (20 pokemons)
  getPokemonList() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }
// Un Observable de tipo subject de la clase RxJS que actua como observable y observador
searchTerm: Subject<string> = new Subject<string>();
//Setter de SearchTerm
  setSearchTerm(searchTerm: string) {
    this.searchTerm.next(searchTerm);
  }
}