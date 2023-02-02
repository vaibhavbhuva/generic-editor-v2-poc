import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunbirdGenericEditorComponent } from './sunbird-generic-editor.component';

describe('SunbirdGenericEditorComponent', () => {
  let component: SunbirdGenericEditorComponent;
  let fixture: ComponentFixture<SunbirdGenericEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunbirdGenericEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunbirdGenericEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
