import { Component, OnInit } from '@angular/core';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { userCredentials } from '../security.models';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  //just a container to hold the errors to debug any potential webapi errors coming back
  errors: string[] = [];

  ngOnInit(): void {
  }

  register(userCredentials: userCredentials){
    this.securityService.register(userCredentials).subscribe(authenticatorResponse =>{
      console.log(authenticatorResponse);
    }, error => this.errors = parseWebAPIErrors(error));
  }
}
