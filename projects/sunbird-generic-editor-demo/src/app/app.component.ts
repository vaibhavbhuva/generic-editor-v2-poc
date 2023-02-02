import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public editorConfig: any = {
    mode: 'edit'
  }
  title = 'sunbird-generic-editor-demo';
  onComponentLoad(event: any) {
    console.log(event);
 }
}

