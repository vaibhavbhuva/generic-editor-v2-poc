import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunbirdGenericEditorComponent } from './sunbird-generic-editor.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DndDirective } from './directives/dnd.directive';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { SidenavContentWrapperComponent } from './components/sidenav-content-wrapper/sidenav-content-wrapper.component';


@NgModule({
  declarations: [
    SunbirdGenericEditorComponent,
    HeaderComponent,
    SidenavComponent,
    DndDirective,
    SidenavContentComponent,
    SidenavContentWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SunbirdGenericEditorComponent
  ]
})
export class SunbirdGenericEditorModule { }
