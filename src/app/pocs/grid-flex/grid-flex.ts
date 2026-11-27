import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';    
import { PokemonListResponse, PokemonTypeListResponse } from '../../../types/pokemon.type';
import { ApiService } from '../../services/api.service';
import { Pagination } from '../pagination/pagination';

@Component({
  imports: [Pagination],
  selector: 'app-grid-flex',
  styleUrl: './grid-flex.css',
  templateUrl: './grid-flex.html',
})
export class GridFlex implements OnInit {
  private apiService = inject(ApiService);
  private pokemonDetails = signal<PokemonListResponse | null>(null);
  private pokemonTypes = signal<PokemonTypeListResponse | null>(null);

  ngOnInit(): void {
    this.getData(5, 0);
    this.getTypes();
  }

  setLimitAndOffset(event:{limit:number,offset:number}){
    this.getData(event.limit, event.offset)
  }

  getTypes() {
    this.apiService.getPokemonTypes(`type`).subscribe({
      next: (res: PokemonTypeListResponse) => {
        this.pokemonTypes.set(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  getData(limit:number, offset:number) {
    this.apiService.getLimitedPokemon(`pokemon?limit=${limit}&offset=${offset}`).subscribe({
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
