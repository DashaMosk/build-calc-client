import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPlayerComponent } from './wall-player.component';

describe('WallPlayerComponent', () => {
  let component: WallPlayerComponent;
  let fixture: ComponentFixture<WallPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
