import { environment } from 'src/environments/environment';

export class IPokemon {
  id?: number;
  name: String;
  imgUrl?: String;
  hp?: number;
  attack?: number;
  defense?: number;
  _types?: String[];

  get types(): string {
    return this._types ? this._types.join(',') : '';
  }

  constructor({ name, url = '', id = null, imgUrl = null, hp = null, attack = null, defense = null, _types = null, types = null}) {
    this.name = name;
    this.id = id != null ? id : this.getPokemonIdFromUrl(url);
    this.imgUrl = imgUrl !=null ? imgUrl : this.id ? this.getPokemonImageUrlFromId(this.id): null;
    hp!=null ? this.hp = hp : '';
    attack!=null ? this.attack = attack : '';
    defense!=null ? this.defense = defense : '';
    _types!=null ? this._types = _types : '';
    // types!=null ? this.types = types : '';
  }

  getPokemonIdFromUrl(url: string) {
    try {
      const str = url.slice(0, -1);
      return Number(str.substring(str.lastIndexOf('/')+1));
    } catch(e) {
      console.error('Error fetching pokemon id', e);
      return null;
    }
  }

  getPokemonImageUrlFromId(id) {
    return environment.pokemonImageEndpoint + `/images/pokemon/${id}.png`;
  }

  updatePokemonDetails(details = {}) {
    Object.keys(details).map(key => {
      this[key] = details[key];
    })
  }
}