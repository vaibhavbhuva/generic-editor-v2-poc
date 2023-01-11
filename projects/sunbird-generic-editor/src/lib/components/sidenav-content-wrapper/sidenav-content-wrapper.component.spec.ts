import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavContentWrapperComponent } from './sidenav-content-wrapper.component';

describe('SidenavContentWrapperComponent', () => {
  let component: SidenavContentWrapperComponent;
  let fixture: ComponentFixture<SidenavContentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavContentWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavContentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
