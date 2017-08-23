import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingHolderComponent } from './packing-holder.component';

describe('PackingHolderComponent', () => {
  let component: PackingHolderComponent;
  let fixture: ComponentFixture<PackingHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
