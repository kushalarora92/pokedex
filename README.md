# pokedex
Pokeman with cache app

## Steps to run
1. Navigate to folder
2. run `$ npm install`
3. run `npm run serve`
4. Open `http://localhost:4200` and test the app

## Features
* View 151 pokemons on Home Screen
* Show HP/Attack/Defence/Types info on detailed popup
* Ability to add a pokemon [with validations]
* Ability to delete a pokemon
* Persistance on front-end [App can be refreshed to check if data persists]
  1. Add new pokemon [New ID Generation]
  2. Refresh the app & validate its existance
  3. Similar process for delete
* Form Validations
* Responsive Layout

## External APIs Used
* Pokemon info and detail => https://pokeapi.co/api/v2
* Pokemon image urls => https://pokeres.bastionbot.org/images

## Tech Features
* Modularized structure 
* Lazy Loaded module
* Environment driven endpoints
* SASS used
* No external library
* App was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.
* To Build the app, use `npm run build` and can run files through any http server