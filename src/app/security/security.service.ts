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
  private readonly tokenKey: string = 'token';
  private readonly expirationTokenKey: string = 'expiration'


  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);

    if(!token){
      return false;
    }

    const expiration = localStorage.getItem(this.expirationTokenKey);
    const expirationDate = new Date(expiration);

    if(expirationDate <= new Date()){
      //this removes the token if its expired
      this.logout();
      return false;
    }

    return true;

  }

  getFieldfromJWT(field: string): string{
    const token = localStorage.getItem(this.tokenKey);
    if(!token){ return ''}
    //splitting on the .  and getting the second part of the payload is where the claims are
    //then return it
    //TODO what is atob?
    const dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[field]
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
  }

  getRole(): string{
    return '';
  }

  register(userCredentials: userCredentials): Observable<authenticationResponse>{
    return this.http.post<authenticationResponse>(this.apiURL + "/create", userCredentials);
  }

  login (userCredentials: userCredentials): Observable<authenticationResponse>{
    return this.http.post<authenticationResponse>(this.apiURL + "/login", userCredentials);
  }

  saveToken(authenticationResponse: authenticationResponse){
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(this.expirationTokenKey, authenticationResponse.expiration.toString());
  }
}
