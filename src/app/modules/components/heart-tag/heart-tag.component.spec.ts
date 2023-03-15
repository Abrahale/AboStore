import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartTagComponent } from './heart-tag.component';

describe('HeartTagComponent', () => {
  let component: HeartTagComponent;
  let fixture: ComponentFixture<HeartTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
