import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPokemon } from '../../models/IPokemon';

@Component({
  selector: 'add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  addPokemonForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  @Output() onPokemonAdd = new EventEmitter()

  constructor(private formBuilder: FormBuilder) {
    this.addPokemonForm = formBuilder.group({
      name: ['', Validators.required],
      imgUrl: [''],
      hp: [null, [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern("^[0-9]*$")]],
      attack: [null, [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern("^[0-9]*$")]],
      defense: [null, [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern("^[0-9]*$")]],
      types: [null, [Validators.required]],
    })
   }

   get f() { return this.addPokemonForm.controls; }

  ngOnInit(): void {
  }

  onFormSubmitClick() {
    this.submitted = true;

    if (this.addPokemonForm.invalid) {
      return;
    }

    this.onPokemonAdd.emit(new IPokemon({
      name: this.f.name.value,
      imgUrl: this.f.imgUrl.value,
      hp: this.f.hp.value,
      attack: this.f.attack.value,
      defense: this.f.defense.value,
      _types: this.f.types.value ? this.f.types.value.split(',') : []
    }));

    this.addPokemonForm.markAsPristine();
    this.submitted = false;
    this.addPokemonForm.reset();
  }

}
