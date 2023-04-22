import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTextInputComponent } from './long-text-input.component';

describe('LongTextInputComponent', () => {
  let component: LongTextInputComponent;
  let fixture: ComponentFixture<LongTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongTextInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
