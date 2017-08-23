import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffAddingComponent } from './stuff-adding.component';

describe('StuffAddingComponent', () => {
  let component: StuffAddingComponent;
  let fixture: ComponentFixture<StuffAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
