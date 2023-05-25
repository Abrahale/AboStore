import { NgModule } from '@angular/core'
import { ManufacturerEffects } from './effects';
import { StoreModule } from '@ngrx/store';
import { storeConstants } from 'src/app/constants/store-constants';
import { ManufacturerReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations:[],
    imports:[
        StoreModule.forFeature(storeConstants.MANUFACTURER,ManufacturerReducer),
        EffectsModule.forFeature([ManufacturerEffects])
    ],
    providers:[ManufacturerEffects]

})

export class ManufacturerStoreModule{}