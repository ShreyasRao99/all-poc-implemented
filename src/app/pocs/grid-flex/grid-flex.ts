import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { Pokemon, PokemonListResponse, PokemonTypeListResponse } from '../../../types/pokemon.type';
import { ApiService } from '../../services/api.service';

@Component({
  imports: [],
  selector: 'app-grid-flex',
  styleUrl: './grid-flex.css',
  templateUrl: './grid-flex.html',
})
export class GridFlex {
  private apiService = inject(ApiService);
  private pokemonDetails = signal<PokemonListResponse | null>(null);
  private pokemonTypes = signal<PokemonTypeListResponse | null>(null);
  ngOnInit(): void {
    this.getData();
    this.getTypes();
  }

  getTypes(){
    this.apiService
      .getPokemonTypes(`type`)
      .subscribe({
        next: (res: PokemonTypeListResponse) => {
          this.pokemonTypes.set(res);
          console.log(this.pokemonTypes());
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
      });
  }

  getData() {
    this.apiService
      .getLimitedPokemon(`pokemon?limit=12`)
      .subscribe({
        next: (res: PokemonListResponse) => {
          this.pokemonDetails.set(res);
          console.log(this.pokemonDetails());
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
      });
  }
}
