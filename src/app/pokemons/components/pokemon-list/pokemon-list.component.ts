import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPokemon } from '../../models/IPokemon';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() list: Array<IPokemon>;
  @Output() onPokemonClick = new EventEmitter();
  @Output() onPokemonDeleteClick = new EventEmitter();

  isModalVisible: boolean = false;
  selectedPokemon: IPokemon;
  selectedPokemonIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index, item) {
    return item.id;
  }

  onModalCloseClick() {
    this.isModalVisible = false;
    this.selectedPokemon = null;
    this.selectedPokemonIndex = -1;
  }

  _onPokemonClick(pokemon: IPokemon, index: number) {
    this.onPokemonClick.emit(pokemon);
    this.selectedPokemon = pokemon;
    this.selectedPokemonIndex = index;
    this.isModalVisible = true;
  }

  _onPokemonDeleteClick(pokemon: IPokemon) {
    this.onPokemonDeleteClick.emit(pokemon);
    this.onModalCloseClick();
  }
}
