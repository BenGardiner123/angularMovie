import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { actorCreationDTO } from '../actors.models';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();

  selectedActors = [];


  //list of actors in memory until the DB is up and running
  actors = [
    {name: 'Morgan Freeman', picture: 'https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg'},
    {name: 'Leonardo DiCaprio', picture: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg'},
    {name: 'Tom Holland', picture: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'}
  ]

  originalActors = this.actors;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1)
    } )
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
  }

}
