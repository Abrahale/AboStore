import { NgModule } from "@angular/core";
import { storeConstants } from "src/app/constants/store-constants";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FilesReducer } from "./reducer";
import { FilesEffects } from "./effects";
@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        StoreModule.forFeature(storeConstants.FILES, FilesReducer),
        EffectsModule.forFeature([FilesEffects])
      ],
      exports:[],
      providers:[FilesEffects],
})

export class FilesStoreModule{}