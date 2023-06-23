import { FileUploadService } from "src/app/modules/shared/services/file-upload.service";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BaseStoreState, SignInSelectors } from 'src/app/store';
import { of as observableOf, takeUntil, withLatestFrom } from 'rxjs';
import * as featureActions from './actions';
import { Injectable } from "@angular/core";
import { catchError, map, switchMap } from "rxjs";

@Injectable()
export class FilesEffects {
  constructor(private _store:Store<BaseStoreState.State>,private fileService: FileUploadService, private actoins$: Actions ){
  }

  loadFiles$ = createEffect( ()=> this.actoins$.pipe(
    ofType<featureActions.LoadRequestAction>(
        featureActions.ActionTypes.LOAD_REQUEST
    ),
    switchMap(() => this.fileService.getFiles().pipe(
        map(data => new featureActions.LoadSuccessAction(data.images),),
        catchError(error => observableOf(new featureActions.LoadFailureAction({error})))
    ))
  ))
}