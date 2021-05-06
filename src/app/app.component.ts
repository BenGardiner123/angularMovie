import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Spider-man 3',
      releaseDate: new Date(),
      price: 283742
    },
    {
      title: 'The Moce the movue',
      releaseDate: new Date(),
      price: 284343
    },
    {
      title: 'DogAlpha',
      releaseDate: new Date('2019/12/19'),
      price: 43434232
    },
    {
      title: 'Spider-man 3',
      releaseDate: new Date(),
      price: 283742
    },
    {
      title: 'The Moce the movue',
      releaseDate: new Date(),
      price: 284343
    },
    {
      title: 'DogAlpha',
      releaseDate: new Date('2019/12/19'),
      price: 43434232
    }
  ];

    this.moviesFutureReleases = 
    [{
      title: 'Spider-man 17',
      releaseDate: new Date(),
      price: 283742
    },
    {
      title: 'The Moce the movue 5',
      releaseDate: new Date(),
      price: 284343
    },
    {
      title: 'DogAlpha 56',
      releaseDate: new Date('2019/12/19'),
      price: 43434232
    },
    {
      title: 'Spider-man 17',
      releaseDate: new Date(),
      price: 283742
    },
    {
      title: 'The Moce the movue 5',
      releaseDate: new Date(),
      price: 284343
    },
    {
      title: 'DogAlpha 56',
      releaseDate: new Date('2019/12/19'),
      price: 43434232
    }]
}

title = "";
moviesInTheaters;
moviesFutureReleases;


  handleRating(rate: number){
    alert(`The user selected ${rate}`);
  }

}
