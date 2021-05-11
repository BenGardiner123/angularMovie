import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilities/map/coordinate';
import { movieTheaterCreationDTO, movieTheaterDTO } from '../theaters.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: movieTheaterDTO;

  @Output()
  onSavedChanges = new EventEmitter<movieTheaterCreationDTO>();

  initalCoordiantes: coordinatesMap[] = [];
  
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name:['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.initalCoordiantes.push({latitude:this.model.latitude, longitude:this.model.longitude})
    }
  }

  onSelectedLocation(coordinates: coordinatesMap){
    this.form.patchValue(coordinates);
  }

  saveChanges(){
    this.onSavedChanges.emit(this.form.value);
  }

}
