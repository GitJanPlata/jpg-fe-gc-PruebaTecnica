import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemonservice.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  /*
    Método que se ejecuta al inicializar el componente.
    Obtiene el id del Pokémon de la ruta actual y obtiene sus detalles utilizando el PokemonService.
  */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.pokemonService.getPokemonDetails(id).subscribe(pokemon => {
        this.pokemon = pokemon;
      });
    }
  }
}