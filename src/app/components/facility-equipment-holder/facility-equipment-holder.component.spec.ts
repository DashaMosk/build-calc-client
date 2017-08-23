import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityEquipmentHolderComponent } from './facility-equipment-holder.component';

describe('FacilityEquipmentHolderComponent', () => {
  let component: FacilityEquipmentHolderComponent;
  let fixture: ComponentFixture<FacilityEquipmentHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityEquipmentHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityEquipmentHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
