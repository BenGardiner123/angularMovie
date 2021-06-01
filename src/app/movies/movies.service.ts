import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { homeDTO, movieCreationDTO, movieDTO, MoviePostGetDTO, MoviePutGetDTO } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/movies';

  public getHomePageMovies(): Observable<homeDTO>{
    return this.http.get<homeDTO>(this.apiURL);
  }

  public putget(id: number): Observable<MoviePutGetDTO>{
    return this.http.get<MoviePutGetDTO>(`${this.apiURL}/putget/${id}`);
  }

  public edit(id: number, movieCreationDTO: movieCreationDTO){
    const formData = this.BuildFormData(movieCreationDTO);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  public getById(id: number): Observable<movieDTO>{
    return this.http.get<movieDTO>(`${this.apiURL}/${id}`)
  }

  public postGet(): Observable<MoviePostGetDTO>{
    return this.http.get<MoviePostGetDTO>(`${this.apiURL}/PostGet`);
  }

  public create(movieCreationDTO: movieCreationDTO): Observable<number> {
    const formData = this.BuildFormData(movieCreationDTO);
    console.log('this is from inside the create http method', formData);
    return this.http.post<number>(this.apiURL, formData);
    
  }

  public BuildFormData(movie: movieCreationDTO): FormData{
   const formData = new FormData();

    formData.append('title', movie.title);
    formData.append('summary', movie.summary);
    formData.append('trailer', movie.trailer);
    formData.append('inTheaters', String(movie.inTheaters));
    if(movie.releaseDate){
      formData.append('releaseDate', formatDateFormData(movie.releaseDate));
    }
    
    if(movie.poster){
      formData.append('poster', movie.poster);
    }
//TODO -- why do we have to use a json stringify on theses arrays?
    formData.append('genreIds', JSON.stringify(movie.genresIds));
    formData.append('movieTheaterIds', JSON.stringify(movie.movieTheaterIds));
    formData.append('actors', JSON.stringify(movie.actors));

    console.log(formData.get('movieTheaterIds'))
   return formData;
  }

}
