import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/mulitple-selector/multiple-selector.model';
import { movieCreationDTO } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  nonSelectedGenres: multipleSelectorModel[];
  nonSelectedMovieTheaters: multipleSelectorModel[];

  ngOnInit(): void {
    this.moviesService.postGet().subscribe(response => {
      this.nonSelectedGenres = response.genres.map(genre => {
        return <multipleSelectorModel>{key: genre.id, value: genre.name}
      });

      this.nonSelectedMovieTheaters = response.movieTheaters.map(movieTheater => {
        return <multipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
      });

    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO){
    console.log(movieCreationDTO);
    // this.moviesService.create(movieCreationDTO).subscribe(id => {
    //   this.router.navigate(['/movie/' + id]);
//
  }

}