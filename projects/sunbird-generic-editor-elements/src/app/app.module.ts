import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { SunbirdGenericEditorComponent, SunbirdGenericEditorModule } from '../../../sunbird-generic-editor/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    SunbirdGenericEditorModule
  ],
  providers: [],
  entryComponents: [SunbirdGenericEditorComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const customElement = createCustomElement(SunbirdGenericEditorComponent, { injector: this.injector });
    customElements.define('sunbird-generic-editor', customElement);
  }
}
