import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'pokemons', loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule) },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: '**', loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
