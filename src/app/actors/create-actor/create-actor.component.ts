import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreationDTO } from '../actors.models';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor(private actorService: ActorsService, private router: Router) { }


  ngOnInit(): void {
  }

  saveChanges(actorCreationDTO: actorCreationDTO){
    this.actorService.create(actorCreationDTO).subscribe(() => {
      this.router.navigate(["/actors"])
    })

  }


}
