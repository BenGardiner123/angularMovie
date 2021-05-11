import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }

  @Output()
  changeMarkdown = new EventEmitter<string>();

  markdownContent = '';

  ngOnInit(): void {
  }

}
