import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabsViewComponent } from './dynamic-tabs-view.component';

describe('DynamicTabsViewComponent', () => {
  let component: DynamicTabsViewComponent;
  let fixture: ComponentFixture<DynamicTabsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTabsViewComponent]
    });
    fixture = TestBed.createComponent(DynamicTabsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
