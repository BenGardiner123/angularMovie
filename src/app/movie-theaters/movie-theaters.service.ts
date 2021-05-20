import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieTheaterCreationDTO, movieTheaterDTO } from './theaters.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private httpClient: HttpClient ) { }

  private apiURL = environment.apiURL + '/movietheaters';

  public getById(id: number): Observable<movieTheaterDTO>{
    return this.httpClient.get<movieTheaterDTO>(`${this.apiURL}/${id}`);

  }

  public get(): Observable<movieTheaterDTO[]>{
    return this.httpClient.get<movieTheaterDTO[]>(this.apiURL);

  }

  public create(movieTheaterDTO: movieTheaterCreationDTO){
    return this.httpClient.post(this.apiURL, movieTheaterDTO);
  }

  public edit(id: number, movieTheaterDTO: movieTheaterCreationDTO){
    
  //  console.log(`${this.apiURL}/${id}`, movieTheaterDTO);
    return this.httpClient.put(`${this.apiURL}/${id}`, movieTheaterDTO);
  }

}
