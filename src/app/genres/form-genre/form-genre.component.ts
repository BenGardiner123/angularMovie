import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.models';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }
  
  @Input()
  model: genreCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  //validators is a class we can access that has a ton of different ones in the angualr docs
  ngOnInit(): void {
  this.form = this.formBuilder.group({    
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
        
      }]
    });

    if(this.model !== undefined ){
      this.form.patchValue(this.model);
    }

  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName(){
  const field = this.form.get('name');

  if(field.hasError('required'))
  {
    return 'The name field is required';
  }
  if(field.hasError('minlength')){
    return 'The minimum length is 3 charactes';
  }
  if(field.hasError('firstLetterUppercase')){
    return field.getError('firstLetterUppercase').message;
  }
  return ' ';
  
  }

}
