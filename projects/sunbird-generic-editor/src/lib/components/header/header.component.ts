import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() clickEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  eventEmitter(type: string) {
    this.clickEmitter.emit(type);
  }

}
