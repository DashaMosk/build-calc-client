import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProcessPageComponent } from './in-process-page.component';

describe('InProcessPageComponent', () => {
  let component: InProcessPageComponent;
  let fixture: ComponentFixture<InProcessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProcessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProcessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
