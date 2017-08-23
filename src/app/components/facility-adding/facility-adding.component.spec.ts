import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityAddingComponent } from './facility-adding.component';

describe('FacilityFormComponent', () => {
  let component: FacilityAddingComponent;
  let fixture: ComponentFixture<FacilityAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
