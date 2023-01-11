import { Component, OnInit } from '@angular/core';
import { SidenavContentComponent } from '../sidenav-content/sidenav-content.component'

@Component({
  selector: 'lib-sidenav-content-wrapper',
  templateUrl: './sidenav-content-wrapper.component.html',
  styleUrls: ['./sidenav-content-wrapper.component.css']
})
export class SidenavContentWrapperComponent extends SidenavContentComponent implements OnInit {

  constructor() {
    super();
   }

  override ngOnInit(): void {
    // alert("Okay");
  }

}
