import { NgModule } from '@angular/core';
import { MainComponent } from './card/main/main.component';
import { CardComponent } from './card/card.component';
import { NavigationMenuComponent } from './headers/navigation-menu/navigation-menu.component';
import { NavigationMenuMobiComponent } from './headers/navigation-menu-mobi/navigation-menu-mobi.component';
import { SharedModule } from '../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { CartModule } from '../modules/cart/cart.module';
import { CustomerModule } from '../modules/customer/customer.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MainComponent,
        CardComponent,
        NavigationMenuComponent,
        NavigationMenuMobiComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        CustomerModule,
        CartModule

    ],
    exports: [
        MainComponent,
        CardComponent,
        NavigationMenuComponent,
        NavigationMenuMobiComponent,
    ],
})
export class ContainersModule { }