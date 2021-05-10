  
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.models';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router) {
   }

  form: FormGroup;


  //validators is a class we can access that has a ton of different ones in the angualr docs
  ngOnInit(): void {

  }
  saveChanges(genreCreationDTO: genreCreationDTO){
    console.log(genreCreationDTO);
    this.router.navigate(['/genres']);
  }


  
   
}

