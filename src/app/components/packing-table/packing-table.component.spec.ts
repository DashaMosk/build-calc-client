import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingTableComponent } from './packing-table.component';

describe('PackingTableComponent', () => {
  let component: PackingTableComponent;
  let fixture: ComponentFixture<PackingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
