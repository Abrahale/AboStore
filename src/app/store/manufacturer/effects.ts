import { Injectable} from '@angular/core'
import { createEffect,Actions, ofType } from '@ngrx/effects'
import { ManfaturerService } from 'src/app/modules/admin/services/manufaturer.service'
import * as featureActions from './actions'
import { catchError, map, switchMap } from 'rxjs'
import { of as observableOf } from 'rxjs';
import { MessageService } from 'src/app/modules/shared/services/message.service'
import { baseEffects } from '../baseEffects'
@Injectable()

export class ManufacturerEffects extends baseEffects{
    constructor(private manfacture:ManfaturerService, private actoins$: Actions, public ms:MessageService){
      super(ms)
    }

    loadData$ = createEffect(() => this.actoins$.pipe(
        ofType<featureActions.LoadRequestAction>(
            featureActions.ActionTypes.LOAD_REQUEST,
        ),
        switchMap(() => this.manfacture.getManufacturers().pipe(
            map(data => new featureActions.LoadSuccessAction(data),
            ),
            catchError(error => observableOf(new featureActions.LoadFailureAction(error)),
            ),
        ),
        ),    
    ))

    addNewManufacturer$ = createEffect(()=>this.actoins$.pipe(
      ofType<featureActions.AddNewManufacturerLoadRequest>(
        featureActions.ActionTypes.ADD_NEW_MANUFACTURER_REQUEST
      ),
      switchMap(action=> this.manfacture.addNewManufacture(action.payload).pipe(
        map(data => new featureActions.LoadSuccessAction(data),
        catchError(error => observableOf(new featureActions.LoadFailureAction(error))))
      ),)
    ))

    DeleteManufacturer$ = createEffect(() => this.actoins$.pipe(
      ofType<featureActions.DeleteManufacturerAction>(
        featureActions.ActionTypes.DELETE_MANUFACTURER,
      ),
      switchMap(action => this.manfacture.deleteManufacturer(action.payload).pipe(
        map(data => {
          this.showMessage(data.message)
          return new featureActions.LoadSuccessAction({data:data.manufacturers})
        }
        ),
        catchError(error => {
          this.showErrorMessage(error,'Failed to delete user')
          return observableOf(new featureActions.LoadFailureAction(error));}
        )
      ))
    ))
}
