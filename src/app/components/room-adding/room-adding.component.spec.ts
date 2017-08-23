import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAddingComponent } from './room-adding.component';

describe('RoomAddingComponent', () => {
  let component: RoomAddingComponent;
  let fixture: ComponentFixture<RoomAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
