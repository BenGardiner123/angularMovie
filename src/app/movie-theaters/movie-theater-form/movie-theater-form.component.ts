import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheaterCreationDTO } from '../theaters.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: movieTheaterCreationDTO;

  @Output()
  onSavedChanges = new EventEmitter<movieTheaterCreationDTO>();
  
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name:['', {
        validators: [Validators.required]
      }]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSavedChanges.emit(this.form.value);
  }

}
