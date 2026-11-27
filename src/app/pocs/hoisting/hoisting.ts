import { Component, OnInit, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  imports: [],
  selector: 'app-hoisting',
  styleUrl: './hoisting.css',
  templateUrl: './hoisting.html',
})
export class Hoisting implements OnInit {
  inputId = signal('');
  fetchFunc = this.createPokemonFetcher();

  ngOnInit(): void {}

  createPokemonFetcher() {
    let cache = new Map();
    let hits = 0;
    let misses = 0;

    async function fetchPokemon(id: string) {
      console.log(id,'iddd')
      try {
        const pokeId = String(id).toLowerCase();
        let res;
        if (cache.has(id)) {
          hits += 1;
          return cache.get(id);
        } else {
          res = await fetch(`${environment.pokeAPI}/pokemon/${pokeId}`).then((res) => {
            return res.json();
          });
        }
        cache.set(id, res);
        return res;
      } catch (error) {
        console.log(error);
      }
    }
    return {
      fetchPokemon,
      stats: () => ({ hits, misses }),
      reset: () => cache.clear(),
    };
  }
  async callPokemonData() {
    console.log(this.inputId())
    try {
      const res = await this.fetchFunc.fetchPokemon(this.inputId());
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
