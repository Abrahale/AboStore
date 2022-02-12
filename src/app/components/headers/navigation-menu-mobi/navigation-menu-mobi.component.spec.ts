import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuMobiComponent } from './navigation-menu-mobi.component';

describe('NavigationMenuMobiComponent', () => {
  let component: NavigationMenuMobiComponent;
  let fixture: ComponentFixture<NavigationMenuMobiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMenuMobiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuMobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
