import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAccordionComponent } from './room-accordion.component';

describe('RoomAccordionComponent', () => {
  let component: RoomAccordionComponent;
  let fixture: ComponentFixture<RoomAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
