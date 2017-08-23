import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallAddingComponent } from './wall-adding.component';

describe('WallAddingComponent', () => {
  let component: WallAddingComponent;
  let fixture: ComponentFixture<WallAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
