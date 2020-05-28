import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'; 
import { IPokemon } from '../../models/IPokemon';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Array<IPokemon> = [];
  customPokemonAddedId = 100001;

  constructor(private http: HttpClient) { }

  getPokemons({ offset = 0, limit = 151 }): Observable<IPokemon[]> {
    return this.http.get(`${environment.pokemonApiEndpoint}/pokemon?offset=${offset}&limit=${limit}`)
      .pipe(map((result:any) => {
        this.pokemons = result.results.map(({name, url}) => {
          return new IPokemon({
            name, 
            url
          });
        });

        this.updatePokemonStore();

        return this.pokemons;
      }));
  }

  updatePokemonDetails(pokemon: IPokemon): Observable<IPokemon> {
    return this.http.get(`${environment.pokemonApiEndpoint}/pokemon/${pokemon.id}`)
      .pipe(map((result: any) => {
        
        if (result == null) { return; }

        const updateObj = {
          _types: [] 
        };

        result.stats.map(stat => {
          if (['defense', 'attack', 'hp'].includes(stat.stat.name)) {
            updateObj[stat.stat.name] = stat.base_stat;
          }
        });
    
        result.types.map(type => {
          updateObj._types.push(type.type.name);
        })

        pokemon.updatePokemonDetails(updateObj);

        // cache the result
        this.updatePokemonStore();

        return pokemon;
      }));
  }

  updatePokemonStore() {
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
    localStorage.setItem('customPokemonAddedId', this.customPokemonAddedId.toString());
  }

  getPokemonsFromStore(): Array<IPokemon> {
    const pokemons = JSON.parse(localStorage.getItem('pokemons'));
    if (pokemons == null) return null;

    this.pokemons = pokemons.map(pokemon => new IPokemon(pokemon));
    this.customPokemonAddedId = +localStorage.getItem('customPokemonAddedId');

    return this.pokemons;
  }

  addPokemon(pokemon: IPokemon) {
    pokemon.id = this.customPokemonAddedId++;

    this.pokemons.unshift(pokemon);

    this.updatePokemonStore();
  }

  deletePokemon(pokemon: IPokemon) {
    for (let i = 0; i < this.pokemons.length; i++) {
      if (pokemon.id === this.pokemons[i].id) {
        this.pokemons.splice(i, 1);
        break;
      }
    }

    this.updatePokemonStore();
  }
}
