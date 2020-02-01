import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTComponent } from './customer-t.component';

describe('CustomerTComponent', () => {
  let component: CustomerTComponent;
  let fixture: ComponentFixture<CustomerTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
