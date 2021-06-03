import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { authenticationResponse, userCredentials } from './security.models';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + "/accounts"

  isAuthenticated(): boolean{
    return false;
  }

  getRole(): string{
    return '';
  }

  register(userCredentials: userCredentials): Observable<authenticationResponse>{
    return this.http.post<authenticationResponse>(this.apiURL + "/create", userCredentials);
  }
}
