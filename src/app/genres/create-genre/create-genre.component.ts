  

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.models';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  errors: string[] =  [];

  constructor(private router: Router, private genreService: GenresService) {}

 
  form: FormGroup;


  //validators is a class we can access that has a ton of different ones in the angualr docs
  ngOnInit(): void {

  }
  saveChanges(genreCreationDTO: genreCreationDTO){
   this.genreService.create(genreCreationDTO).subscribe(() => {
    this.router.navigate(['/genres']);
   }, error => this.errors = parseWebAPIErrors(error));
    
  }


  
   
}

