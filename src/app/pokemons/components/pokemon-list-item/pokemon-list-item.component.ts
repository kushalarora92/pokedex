import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from '../../models/IPokemon';

@Component({
  selector: 'pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {

  @Input() item: IPokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
