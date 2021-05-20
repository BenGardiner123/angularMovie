import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieTheaterDTO } from './theaters.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private httpClient: HttpClient ) { }

  private apiURL = environment.apiURL + '/movietheaters';

  public get(): Observable<movieTheaterDTO[]>{
    return this.httpClient.get<movieTheaterDTO[]>(this.apiURL);

  }

  public create(movieTheaterDTO: movieTheaterDTO){
    return this.httpClient.post(this.apiURL, movieTheaterDTO);
  }
}
