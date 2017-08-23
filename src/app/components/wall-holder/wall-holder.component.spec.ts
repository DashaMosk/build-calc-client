import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallHolderComponent } from './wall-holder.component';

describe('WallHolderComponent', () => {
  let component: WallHolderComponent;
  let fixture: ComponentFixture<WallHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
