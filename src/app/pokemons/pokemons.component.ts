import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon/pokemon.service';
import { IPokemon } from './models/IPokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemons: Array<IPokemon>;
  isModalVisible: boolean = false;
  
  constructor(private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    const storedPokemons = this.pokemonService.getPokemonsFromStore();
    if (storedPokemons && storedPokemons.length > 0) {
      this.pokemons = storedPokemons
    } else {
      this.pokemonService.getPokemons({}).subscribe((pokemons: Array<IPokemon>) => {
        this.pokemons = pokemons;
      });
    }
  }

  closeModal() {
    
  }

  onModalCloseClick() {
    this.isModalVisible = false;
  }

  onAddPokemonClick() {
    this.isModalVisible = true;
  }

  onPokemonClick(pokemon: IPokemon) {
    // fetch only if the values needed aren't available
    if (pokemon.hp != null) return;

    this.pokemonService.updatePokemonDetails(pokemon).subscribe((updatedPokemon) => {
      // pokemon updated
    });
  }

  onPokemonDeleteClick(pokemon: IPokemon) {
    this.pokemonService.deletePokemon(pokemon);
    alert(`Pokemon - ${pokemon.name} removed.`)
  }

  onPokemonAdd(pokemon: IPokemon) {
    this.pokemonService.addPokemon(pokemon);
    this.onModalCloseClick();
    alert(`Pokemon - ${pokemon.name} persisted.`);
  }

}
