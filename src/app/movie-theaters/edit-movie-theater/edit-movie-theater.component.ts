  
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheaterCreationDTO, movieTheaterDTO } from '../theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieTheaterDTO = {name:'Mt Coolum', latitude:-26.60873208945273, longitude:153.05902632186192}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieTheater:movieTheaterCreationDTO){

  }
}