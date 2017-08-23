import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffHolderComponent } from './stuff-holder.component';

describe('StuffHolderComponent', () => {
  let component: StuffHolderComponent;
  let fixture: ComponentFixture<StuffHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
