import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-mulitple-selector',
  templateUrl: './mulitple-selector.component.html',
  styleUrls: ['./mulitple-selector.component.css']
})
export class MulitpleSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  SelectedItems: multipleSelectorModel[] = [];

  @Input()
  NonSelectedItems: multipleSelectorModel[] = [];

  ngOnInit(): void {
  }

  select(item: multipleSelectorModel, index: number){
    this.SelectedItems.push(item);
    this.NonSelectedItems.splice(index, 1);
  }

  deselect(item: multipleSelectorModel, index: number){
    this.NonSelectedItems.push(item);
    this.SelectedItems.splice(index, 1);
  }

  selectAll(){
    // the ... spread operator is taking each element in the array and spreading it into the new array
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    this.SelectedItems.push(...this.NonSelectedItems);
    this.NonSelectedItems = [];
  }

  deSelectAll(){
    this.NonSelectedItems.push(...this.SelectedItems);
    this.SelectedItems = [];
  }


}
