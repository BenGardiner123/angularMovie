import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { title } from 'process';
import { genreDTO } from 'src/app/genres/genres.models';
import { GenresService } from 'src/app/genres/genres.service';
import { movieDTO } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private moviesService: MoviesService, private genresService: GenresService) { }
  

  form: FormGroup;

  genres: genreDTO[];

  movies: movieDTO[];

  currentPage = 1;
  recordsPerPage = 10;

  //this will hold the inital form values, apperetly using the form.reset can interfere with certain properties of the form
  //TODO check form.reset interfering with props on the form MSDN?
  initalFormValues: any;

  

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
  });

  this.initalFormValues = this.form.value;

  this.genresService.getAll().subscribe(genres => {
    this.genres = genres;

    this.filterMovies(this.form.value);

    this.form.valueChanges.subscribe(values => {
      this.filterMovies(values);
      });
    })
  }

  filterMovies(values: any){
    // set the default values for the pagination then make the http call throught he service
    values.page = this.currentPage;
    values.recordsPerPage = this.recordsPerPage;
    this.moviesService.filter(values).subscribe((response: HttpResponse<movieDTO[]>) => {
      this.movies = response.body;
    })
  }

  clearForm(){
    this.form.patchValue(this.initalFormValues);
  }

}
