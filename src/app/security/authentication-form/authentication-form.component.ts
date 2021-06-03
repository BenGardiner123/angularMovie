import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userCredentials } from '../security.models';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  //this followws the same pattern as the other forms
  //inject the builder, create the prooperty (form) then init the formgroup, then model the object in the class
  //then the form needs an output using the event emitter to pass to the parent class (onSubmit) 
  //which gets attached to the button on the form in the template

  form: FormGroup;

  @Input()
  action: string = 'Register';

  @Output()
  onSubmit = new EventEmitter<userCredentials>()

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', {
        validators: [Validators.required, Validators.email]
      }],
      password: ['', {
        validators: [Validators.required]
      }],
    });
  }

  //this builds the error message - same pattern as the oother forms
  getEmailErrorMessge(){
    var field = this.form.get('email');
    if(field.hasError('required')){
      return "The email field is required"
    }

    if(field.hasError('email')){
      return "The email field is invalid";
    }
    return '';
  }

  

}
