import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from '../../../types/pokemon.type';
import { finalize } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-semantic-elements',
  styleUrl: './semantic-elements.css',
  templateUrl: './semantic-elements.html',
})
export class SemanticElements implements OnInit {
  private apiService = inject(ApiService);
  private pokemonDetails = signal<Pokemon | null>(null);
  private id = signal(1);
  private loading = signal(false);

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading.set(true);
    this.apiService.getPokemonData(`pokemon/${this.id()}`).pipe(finalize(()=>this.loading.set(false))).subscribe({
      next: (res: Pokemon) => {
        this.pokemonDetails.set(res);
        console.log(this.pokemonDetails);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  action(type: string) {
    if (type === 'next') {
      this.id.update(id=>id+1);
    }
    else{
      if(this.id() === 1) return;
      else this.id.update(id=>id-1);
    }
    this.getData();
  }
}
