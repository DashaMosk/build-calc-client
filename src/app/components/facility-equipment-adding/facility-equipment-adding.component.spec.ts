import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityEquipmentAddingComponent } from './facility-equipment-adding.component';

describe('FacilityEquipmentAddingComponent', () => {
  let component: FacilityEquipmentAddingComponent;
  let fixture: ComponentFixture<FacilityEquipmentAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityEquipmentAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityEquipmentAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
