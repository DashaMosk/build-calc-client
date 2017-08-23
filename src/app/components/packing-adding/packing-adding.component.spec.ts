import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingAddingComponent } from './packing-adding.component';

describe('PackingAddingComponent', () => {
  let component: PackingAddingComponent;
  let fixture: ComponentFixture<PackingAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
