import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemonservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = '';

  constructor(private pokemonService: PokemonService, private router: Router) {}

  search() {
    this.pokemonService.setSearchTerm(this.searchTerm);
    this.router.navigate(['/search']);
  } 
}