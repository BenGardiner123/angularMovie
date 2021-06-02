import { HttpParams, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { title } from 'process';
import { genreDTO } from 'src/app/genres/genres.models';
import { GenresService } from 'src/app/genres/genres.service';
import { movieDTO } from '../movie.model';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private moviesService: MoviesService, 
    private genresService: GenresService, private location: Location, private activatedRoute: ActivatedRoute) { }
  

  form: FormGroup;

  genres: genreDTO[];

  movies: movieDTO[];

  currentPage = 1;
  recordsPerPage = 10;

  totalAmountOfRecords;
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
  this.readParamaterFromURL();

  this.genresService.getAll().subscribe(genres => {
    this.genres = genres;

    this.filterMovies(this.form.value);

    this.form.valueChanges.subscribe(values => {
      this.filterMovies(values);
      this.writeParamatersInURL();
      });
    })
  }

  filterMovies(values: any){
    // set the default values for the pagination then make the http call throught he service
    values.page = this.currentPage;
    values.recordsPerPage = this.recordsPerPage;
    this.moviesService.filter(values).subscribe((response: HttpResponse<movieDTO[]>) => {
      this.movies = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    })
  }


//so when the writeParamstoUl function puts the params in the url - then we use this method
//to set the route based on the values pushed in.
  private readParamaterFromURL(){
    this.activatedRoute.queryParams.subscribe(params => {
      var obj: any = {};
      
      if(params.title){
        obj.title = params.title;
      }
      if(params.genreId){
        obj.genreId = Number(params.genreId);
      }
      if(params.upcomingReleases){
        obj.upcomingReleases = params.upcomingReleases;
      }
      if(params.inTheaters){
        obj.inTheaters = params.inTheaters;
      }
      if(params.page){
        this.currentPage = params.page;
      }
      if(params.recordsPerPage){
        this.recordsPerPage = params.recordsPerPage;
      }

      this.form.patchValue(obj);

    })
  }

  //this method changes the url when we add the search terms into the form
  private writeParamatersInURL(){
    const queryStrings = [];

    const formValues = this.form.value;

    if(formValues.title){
      queryStrings.push(`title=${formValues.title}`);
    }

    if(formValues.genreId !='0'){
      queryStrings.push(`genreId=${formValues.genreId}`);
    }

    if(formValues.upcomingReleases){
      queryStrings.push(`upcomingReleases=${formValues.upcomingReleases}`);
    }

    if(formValues.inTheaters){
      queryStrings.push(`inTheaters=${formValues.inTheaters}`);
    }

    queryStrings.push(`page=${this.currentPage}`);
    queryStrings.push(`recordsPerPage=${this.recordsPerPage}`);
    
    this.location.replaceState('movies/filter', queryStrings.join('&'));

  }

  paginatorUpdate(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.recordsPerPage = event.pageSize;
    this.writeParamatersInURL();
    this.filterMovies(this.form.value);

  }

  clearForm(){
    //this.form.reset() - was used previously, what it does is mark as null the values in the form which can interfere with some of the form 
    //and so it is removed in favour of patchValue which we set to the initial form values.
    this.form.patchValue(this.initalFormValues);
  }

  onDelete(){
    this.filterMovies(this.form.value);
  }


}
