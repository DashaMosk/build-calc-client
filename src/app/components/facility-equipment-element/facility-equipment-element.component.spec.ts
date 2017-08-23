import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityEquipmentElementComponent } from './facility-equipment-element.component';

describe('FacilityEquipmentElementComponent', () => {
  let component: FacilityEquipmentElementComponent;
  let fixture: ComponentFixture<FacilityEquipmentElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityEquipmentElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityEquipmentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
