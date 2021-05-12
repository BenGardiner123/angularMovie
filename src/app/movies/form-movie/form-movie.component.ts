import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { movieCreationDTO, movieDTO } from '../movie.model';
import { multipleSelectorModel } from 'src/app/utilities/mulitple-selector/multiple-selector.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: movieDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  // creating some in memory data to test the multiple genre picker component
  nonSelectedGenres: multipleSelectorModel[] = [
    {key:1 , value:'Drama'},
    {key:2 , value:'ACtion'},
    {key:3 , value:'Comedy'}

  ];

  selectedGenres: multipleSelectorModel[] = [];

  ngOnInit(): void {
  this.form = this.formBuilder.group({
    title: ['',{
      validators:[Validators.required]
    }],
    summary: '',
    inTheaters: false,
    trailer: '',
    releaseDate: '',
    poster: '',
    
  });
  if(this.model !== undefined){
    this.form.patchValue(this.model);
  }
  }

  onImageSelected(file: File){
    this.form.get('poster').setValue(file)
  }

  changeMarkdown(content: string){
    this.form.get('summary').setValue(content);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
