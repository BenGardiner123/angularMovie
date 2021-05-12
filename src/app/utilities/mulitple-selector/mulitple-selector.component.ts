import { Component, Input, OnInit } from '@angular/core';
import { multipleSelector, multipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-mulitple-selector',
  templateUrl: './mulitple-selector.component.html',
  styleUrls: ['./mulitple-selector.component.css']
})
export class MulitpleSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  SelectedItems: multipleSelector[] = [];

  @Input()
  NonSelectedItems: multipleSelector[] = [];

  ngOnInit(): void {
  }

  select(item: multipleSelectorModel, index: number){
    this.SelectedItems.push(item);
    this.NonSelectedItems.splice(index, 1);
  }

  deSelect(item: multipleSelectorModel, index: number){
    this.NonSelectedItems.push(item);
    this.SelectedItems.splice(index, 1);
  }

  selectAll(){
    this.SelectedItems.push(...this.NonSelectedItems);
    this.NonSelectedItems = [];
  }

  deSelectAll(){
    this.NonSelectedItems.push(...this.SelectedItems);
    this.SelectedItems = [];
  }


}
