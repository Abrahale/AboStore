import { FileUploadService } from "src/app/modules/shared/services/file-upload.service";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BaseStoreState, SignInSelectors } from 'src/app/store';
import * as featureActions from './actions';
import { Injectable } from "@angular/core";

@Injectable()
export class FilesEffects {
  constructor(private _store:Store<BaseStoreState.State>,private fileService: FileUploadService, private actoins$: Actions ){
  }
}