import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingOptionsComponent } from './sorting-options.component';

describe('SortingOptionsComponent', () => {
  let component: SortingOptionsComponent;
  let fixture: ComponentFixture<SortingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
