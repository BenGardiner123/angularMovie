import { HttpResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { actorDTO } from '../actors.models';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css']
})
export class IndexActorsComponent implements OnInit {

  constructor(private actorService: ActorsService) { }

  actors: actorDTO[];
  columnsToDisplay = ['name', 'actions'];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    ///this loads all the actors on the page starting
    this.loadData();
  }

  loadData(){
    //decoupling this logic allows us to reuse the logic when we delete to reload the page
    this.actorService.get(this.currentPage, this.pageSize).subscribe((repsonse: HttpResponse<actorDTO[]>) => {
      this.actors = repsonse.body;
      this.totalAmountOfRecords = repsonse.headers.get("totalAmountOfRecords");
    });
  }

  updatePagination(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  delete(id: number){
    this.actorService.delete(id).subscribe(() =>{
      this.loadData();
        });
  }

}
