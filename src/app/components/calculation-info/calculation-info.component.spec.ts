import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationInfoComponent } from './calculation-info.component';

describe('CalculationInfoComponent', () => {
  let component: CalculationInfoComponent;
  let fixture: ComponentFixture<CalculationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
