import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genreCreationDTO, genreDTO } from './genres.models';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  //this stores the url location in the environment variables so you dont have to repeat every time 
  private apiURL = environment.apiURL + '/genres';

  getAll(): Observable<genreDTO[]>
  {
    return this.http.get<genreDTO[]>(this.apiURL)
  }

}
