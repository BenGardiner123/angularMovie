import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { actorCreationDTO, actorDTO } from './actors.models';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/actors'

  get(): Observable<actorDTO[]>{
    return this.http.get<actorDTO[]>(this.apiURL);
  }

  create(actor: actorCreationDTO){
    const formData = this.buildFormData(actor);
    return this.http.post(this.apiURL, formData);
  }

  //we need to use this to send the picture as a file to the API
  private buildFormData(actor: actorCreationDTO): FormData {
    const formData = new FormData();

    formData.append('name', actor.name);

    if (actor.biography){
      formData.append('biography', actor.biography);
    }

    if(actor.dateOfBirth){

      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth));
    }

    if(actor.picture){
      formData.append('picture', actor.picture);
    }

    return formData;

  }


}
