import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCruSectionComponent } from './main-cru-section.component';

describe('MainCruSectionComponent', () => {
  let component: MainCruSectionComponent;
  let fixture: ComponentFixture<MainCruSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCruSectionComponent]
    });
    fixture = TestBed.createComponent(MainCruSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
