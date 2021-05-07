  
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder) {
   }

  form: FormGroup;

  ngOnInit(): void {
  this.form = this.formbuilder.group({    
      name: ['', {
        validators: [Validators.required]
        
      }]
    })
  }

  saveChanges(){
    this.router.navigate(['/genres']);
  }

  getErrorMessageFieldName(){
  const field = this.form.get('name');

  if(field.hasError('required')){
    return 'The name field is required';
  }

  return ' ';
  
  }
    
}

