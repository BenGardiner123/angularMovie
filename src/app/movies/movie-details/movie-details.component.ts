import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { coordinatesMapWithMessage } from 'src/app/utilities/map/coordinate';
import { RatingService } from 'src/app/utilities/rating.service';
import Swal from 'sweetalert2';
import { movieDTO } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute, 
    private sanitizer: DomSanitizer, private ratingService: RatingService
    ) { }

  movie: movieDTO;
  releaseDate: Date;
  trailerURL: SafeResourceUrl;
  coordinates: coordinatesMapWithMessage[]= [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.getById(params.id).subscribe(movie => {
        this.movie = movie;
        this.releaseDate = new Date(movie.releaseDate);
        this.trailerURL = this.generateYouTubeURLForEmbeddedVideo(movie.trailer);
        this.coordinates = movie.movieTheaters.map(movieTheater => {
          return {latitude: movieTheater.latitude, longitude: movieTheater.longitude, 
            message: movieTheater.name }
        })
      });
    });
  }

  generateYouTubeURLForEmbeddedVideo(url: any): SafeResourceUrl{
    if (!url){
      return '';
    }
   // https://www.youtube.com/watch?v=nKVIYMI3ktw
   //this splits th url on the v= above which is the actual id of the video
   let videoId = url.split('v=')[1];
    //apparently sometimes there is an & in the url, if so then the id starts at the ampersand
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1){
      videoId = videoId.substring(0, ampersandPosition);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  onRating(rate: number){
    this.ratingService.rate(this.movie.id, rate).subscribe(() => {
      Swal.fire("Success", "Your vote has been recieved", "success");
    });
  }

}
