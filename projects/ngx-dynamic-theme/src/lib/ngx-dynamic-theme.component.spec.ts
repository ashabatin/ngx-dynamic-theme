import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicThemeComponent } from './ngx-dynamic-theme.component';

describe('NgxDynamicThemeComponent', () => {
  let component: NgxDynamicThemeComponent;
  let fixture: ComponentFixture<NgxDynamicThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxDynamicThemeComponent]
    });
    fixture = TestBed.createComponent(NgxDynamicThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
