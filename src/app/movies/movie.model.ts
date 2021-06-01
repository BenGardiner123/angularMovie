import { actorsMovieDTO } from "../actors/actors.models";
import { genreDTO } from "../genres/genres.models";
import { movieTheatersDTO } from "../movie-theaters/theaters.model";

export interface movieCreationDTO {
    title: string;
    summary: string;
    //the reason we have a File here and a string below is that when we create a movie we are sending a file to the API
    //but when we READ the poster we will be getting a string back, which you can see below in the movieDTO 
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genresIds: number[];
    movieTheaterIds: number[];
    actors: actorsMovieDTO[];
}

export interface movieDTO {
    id: number;
    title: string;
    summary: string;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genres: genreDTO[];
    movieTheaters: movieTheatersDTO[];
    actors: actorsMovieDTO[];
   
}

export interface MoviePostGetDTO {
  genres: genreDTO[];
  movieTheaters: movieTheatersDTO[];
}

export interface MoviePutGetDTO {
  movie: movieDTO;
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
  selectedMovieTheaters: movieTheatersDTO[];
  nonSelectedMovieTheaters: movieTheatersDTO[];
  actors: actorsMovieDTO[];
}

export interface homeDTO {
  inTheaters: movieDTO[];
  upcomingReleases: movieDTO[];
}