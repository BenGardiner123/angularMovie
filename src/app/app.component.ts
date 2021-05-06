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
      price: 283742,
      poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'Kimetsu no Yaiba: Mugen Ressha-Hen',
      releaseDate: new Date(),
      price: 284343,
      poster:'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'Mortal Kombat',
      releaseDate: new Date('2019/12/19'),
      price: 43434232,
      poster: 'https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'Godzilla vs Kong',
      releaseDate: new Date(),
      price: 283742,
      poster:'https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  ];

    this.moviesFutureReleases = 
    [{
      title: 'The man in the hat',
      releaseDate: new Date(),
      price: 283742,
      poster:'https://m.media-amazon.com/images/M/MV5BN2ZkM2QxOTYtNzFmZS00NDY0LWE2NTUtYzJhYjE1YWY4ZTA2XkEyXkFqcGdeQXVyNzczNjc5MTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'The profile',
      releaseDate: new Date(),
      price: 284343,
      poster:'https://m.media-amazon.com/images/M/MV5BMjRkYTkyMTQtOGE1NC00NDMxLWJlNzQtYTg3NWJhMzdjYTk0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'The Djinn',
      releaseDate: new Date('2019/12/19'),
      price: 43434232,
      poster:'https://m.media-amazon.com/images/M/MV5BYzJhZGMwMDMtNzgwYS00OWJiLWFjM2ItYWYxM2E0YTMzMzg1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'American Traitor',
      releaseDate: new Date(),
      price: 283742,
      poster:'https://m.media-amazon.com/images/M/MV5BZmU3YzVkNWMtZTg0Ni00Yjk3LWFhMjgtMDc3ODIxYTNlNGM2XkEyXkFqcGdeQXVyMTEyNDk3MjY3._V1_UX182_CR0,0,182,268_AL_.jpg'
    }]
}

title = "";
moviesInTheaters;
moviesFutureReleases;
display = true;

  handleRating(rate: number){
    alert(`The user selected ${rate}`);
  }

}
