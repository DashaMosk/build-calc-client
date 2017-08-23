import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallInfoComponent } from './wall-info.component';

describe('WallInfoComponent', () => {
  let component: WallInfoComponent;
  let fixture: ComponentFixture<WallInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
