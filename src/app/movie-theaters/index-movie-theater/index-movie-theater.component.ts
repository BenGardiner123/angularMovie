import { Component, OnInit } from '@angular/core';
import { MovieTheatersService } from '../movie-theaters.service';
import { movieTheaterDTO } from '../theaters.model';

@Component({
  selector: 'app-index-movie-theater',
  templateUrl: './index-movie-theater.component.html',
  styleUrls: ['./index-movie-theater.component.css']
})
export class IndexMovieTheaterComponent implements OnInit {

  constructor(private movieTheatersService: MovieTheatersService) { }

  movieTheaters;
  displayColumns = ['name', 'actions']

  ngOnInit(): void {
    this.loadData();
  }

  delete(){

  }

  
  loadData(){
    this.movieTheatersService.get().subscribe(movieTheaters => this.movieTheaters = movieTheaters);
  }



}
