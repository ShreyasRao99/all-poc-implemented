import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Pokemon, PokemonListResponse, PokemonTypeListResponse } from '../../types/pokemon.type';

@Service()
export class ApiService {
    private http = inject(HttpClient);

    getPokemonData(endpoint:string):Observable<Pokemon>{
        return this.http.get<Pokemon>(`${environment.pokeAPI}/${endpoint}`);
    }

    getLimitedPokemon(endpoint:string):Observable<PokemonListResponse>{
        return this.http.get<PokemonListResponse>(`${environment.pokeAPI}/${endpoint}`);
    }

    getPokemonTypes(endpoint:string):Observable<PokemonTypeListResponse>{
        return this.http.get<PokemonTypeListResponse>(`${environment.pokeAPI}/${endpoint}`);
    }
}
