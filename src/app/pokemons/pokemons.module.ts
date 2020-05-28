import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import { UtilModule } from '../util/util.module';
import { ViewPokemonComponent } from './components/view-pokemon/view-pokemon.component';


@NgModule({
  declarations: [PokemonsComponent, PokemonListComponent, PokemonListItemComponent, AddPokemonComponent, ViewPokemonComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    UtilModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PokemonsModule { }
