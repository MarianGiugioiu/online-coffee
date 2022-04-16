import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListNameComponent } from './cart-list-name.component';

describe('CartListNameComponent', () => {
  let component: CartListNameComponent;
  let fixture: ComponentFixture<CartListNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartListNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
