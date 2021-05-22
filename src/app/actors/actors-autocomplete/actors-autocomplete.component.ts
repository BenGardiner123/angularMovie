import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorCreationDTO, actorsMovieDTO } from '../actors.models';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor(private actorsServoe: ActorsService) { }

  control: FormControl = new FormControl();

  @Input()
  selectedActors: actorsMovieDTO[] = [];

  @ViewChild(MatTable) table: MatTable<any>;

  actorsToDisplay: actorsMovieDTO[] = [];

  columnsToDisplay = ['picture', 'name', 'character', 'actions'];

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actorsServoe.searchByName(value).subscribe(actors => {
        this.actorsToDisplay = actors; 
      })
    })
  }

  
  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);

    //TODO -- add control.patchValue to list of stuff to go over learning again
    this.control.patchValue('');
    //get the selected actors and their id's and check them against the id in the event. If they match dont do anything other wise we add duplicates.
    if(this.selectedActors.findIndex(x => x.id == event.option.value.id) !== -1){
      return;
    }
    this.selectedActors.push(event.option.value);
  
    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  remove(actor){
    const index = this.selectedActors.findIndex(a => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>){
    //this gets the idex of the actor in the array when the action happens
    const previousIndex = this.selectedActors.findIndex(actor => actor === event.item.data);
    //this built in function "moveItemInArray" then allwos us to pass in the three params to set the new order
    moveItemInArray(this.selectedActors, previousIndex, event.currentIndex);
    // then we render the table with the new order
    this.table.renderRows();
  }

}
