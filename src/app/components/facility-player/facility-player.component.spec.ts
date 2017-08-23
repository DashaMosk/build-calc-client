import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityPlayerComponent } from './facility-player.component';

describe('FacilityPlayerComponent', () => {
  let component: FacilityPlayerComponent;
  let fixture: ComponentFixture<FacilityPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
