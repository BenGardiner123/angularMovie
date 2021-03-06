import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { movieCreationDTO, movieDTO } from '../movie.model';
import { multipleSelectorModel } from 'src/app/utilities/mulitple-selector/multiple-selector.model';
import { actorsMovieDTO } from 'src/app/actors/actors.models';
import { identifierModuleUrl } from '@angular/compiler';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  @Input()
  model: movieDTO

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  @Input()
  nonSelectedGenres: multipleSelectorModel[] = [];

  @Input()
  selectedGenres: multipleSelectorModel[] = [];

  @Input()
  nonSelectedMovieTheaters: multipleSelectorModel[] = [];

  @Input()
  selectedMovieTheaters: multipleSelectorModel[] = [];

  @Input()
  selectedActors: actorsMovieDTO[]= [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['',{
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheaterIds: '',
      actors: ''
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file: File){
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(content: string){
    this.form.get('summary').setValue(content);
  }

  saveChanges(){
    const genresIds = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds').setValue(genresIds);

    const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    this.form.get('movieTheaterIds').setValue(movieTheatersIds);

    const actors = this.selectedActors.map(val => {
      return {id: val.id, character: val.character}
    });
    this.form.get('actors').setValue(actors);

    this.onSaveChanges.emit(this.form.value);
    console.log('this is the saveChanegs methid in form-movie component', this.form.value);
  }

}
