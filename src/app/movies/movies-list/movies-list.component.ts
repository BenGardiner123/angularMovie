import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // this.movies = [];
      this.movies = [{
        title: 'Spider-man the movie',
        releaseDate: new Date(),
        price: 283742
      },
      {
        title: 'Second Moce the movue',
        releaseDate: new Date(),
        price: 28
      },
      {
        title: 'Legend of Zelda',
        releaseDate: new Date('2016/12/19'),
        price: 43434
      }];
     }, 0);
  }

  movies;

}
