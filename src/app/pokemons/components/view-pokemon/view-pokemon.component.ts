import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPokemon } from '../../models/IPokemon';

@Component({
  selector: 'view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.scss']
})
export class ViewPokemonComponent implements OnInit {

  @Input() pokemon: IPokemon;
  @Output() onPokemonDeleteClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  _onPokemonDeleteClick() {
    this.onPokemonDeleteClick.emit(this.pokemon);
  }

}
