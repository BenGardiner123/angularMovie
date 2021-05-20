  
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieTheatersService } from '../movie-theaters.service';
import { movieTheaterCreationDTO, movieTheaterDTO } from '../theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private movieTheaterService: MovieTheatersService, private router: Router) { }

  model: movieTheaterDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieTheaterService.getById(params.id).subscribe(movieTheater => this.model = movieTheater)
      
    });
  }

  saveChanges(movieTheater: movieTheaterCreationDTO){
    this.movieTheaterService.edit(this.model.id, movieTheater).subscribe(() => 
    this.router.navigate(['/movietheaters']));
  }

}