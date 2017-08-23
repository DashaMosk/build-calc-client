import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityHolderComponent } from './facility-holder.component';

describe('FacilityHolderComponent', () => {
  let component: FacilityHolderComponent;
  let fixture: ComponentFixture<FacilityHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
