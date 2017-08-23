import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffTableComponent } from './stuff-table.component';

describe('StuffTableComponent', () => {
  let component: StuffTableComponent;
  let fixture: ComponentFixture<StuffTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
