import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTagComponent } from './sale-tag.component';

describe('SaleTagComponent', () => {
  let component: SaleTagComponent;
  let fixture: ComponentFixture<SaleTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
