import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  @Input()
  title: string;
  //this is not a lifecycle event
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }
  ngDoCheck(): void {
    console.log('on doCheck');
  }
  ngAfterViewInit(): void {
    console.log('on after view init');
  }

  ngOnInit(): void {
    console.log('on init');
  }

}
