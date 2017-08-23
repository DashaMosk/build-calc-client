import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHolderComponent } from './room-holder.component';

describe('ComponentsroomHolderComponent', () => {
  let component: RoomHolderComponent;
  let fixture: ComponentFixture<RoomHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
