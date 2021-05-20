import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTheatersService } from '../movie-theaters.service';
import { movieTheaterCreationDTO } from '../theaters.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor(private movieTheatersService: MovieTheatersService, private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(movieTheater: movieTheaterCreationDTO){
    //console.log(movieTheater);
    this.movieTheatersService.create(movieTheater).subscribe(() => (
        this.router.navigate(['/movietheaters'])
    ));
  }


}
