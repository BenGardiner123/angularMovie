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
  // this is tied to the save changes button
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  // -------------------------------------------------------------------------------------------
  // creating some in memory data to test the multiple genre picker component
  nonSelectedGenres: multipleSelectorModel[] = [
    {key:1 , value:'Drama'},
    {key:2 , value:'ACtion'},
    {key:3 , value:'Comedy'}

  ];

  selectedGenres: multipleSelectorModel[] = [];

  nonSelectedMovieTheaters: multipleSelectorModel[] = [
    {key: 1, value: 'Mt Coolum' },
    {key: 2, value: 'Eastland' },
    {key: 3, value: 'Noosa' }
  ]
  
  selectedMovieTheaters: multipleSelectorModel[] = [];

//  --------------------------- end in memory data ---------------------------------------------

  ngOnInit(): void {
  this.form = this.formBuilder.group({
    //you can stack different validators here inside the array
    title: ['',{
      validators:[Validators.required]
    }],
    summary: '',
    inTheaters: false,
    trailer: '',
    releaseDate: '',
    poster: '',
    genresIds: '',
    movieTheaterIds: ''
    
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
    const genresIds = this.selectedGenres.map(value => value.key)
    this.form.get('genresIds').setValue(genresIds)

    const movieTheaterIds = this.selectedMovieTheaters.map(value => value.key)
    this.form.get('movieTheaterIds').setValue(movieTheaterIds)

    this.onSaveChanges.emit(this.form.value);
  }

}
