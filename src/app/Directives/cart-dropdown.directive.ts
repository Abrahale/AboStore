import { Directive, ElementRef, HostListener, TemplateRef, ViewContainerRef } from '@angular/core';
import { CartService } from '../services/cart';

@Directive({
  selector: '[cart-dropdown]'
})
export class CartDropdownDirective {
    constructor(public cartService:CartService) {}

    @HostListener('mouseenter') onMouseEnter() {
      this.cartService.toggleCartDropdown('open')
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.cartService.toggleCartDropdown('close')
    }
}

