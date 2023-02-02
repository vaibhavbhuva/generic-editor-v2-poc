import { Component, EventEmitter, Input, AfterViewInit, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-sunbird-generic-editor',
  templateUrl: './sunbird-generic-editor.component.html',
  styleUrls: ['./sunbird-generic-editor.component.css']
})
export class SunbirdGenericEditorComponent implements OnInit, AfterViewInit {

  @Input() config: any;
  @Output() loadComp = new EventEmitter();
  isInitialized = false;
  constructor() { }

  ngOnInit(): void {
    this.isInitialized = true;
    console.log('ngOnInit library config >>>', this.config);
    this.loadComp.emit('Component loaded successfully!');
  }

  ngAfterViewInit() {
    console.log(' ngAfterViewInit library config >>>', this.config);
    this.loadComp.emit('Component loaded successfully! ngAfterViewInit');
  }

  headerListener(action: string) {
    switch (action) {
      case 'file_upload':
        alert('file_upload clicked!')
        this.loadComp.emit('Component loaded successfully!');
        break;
      default:
        break;
    }
  }

}
