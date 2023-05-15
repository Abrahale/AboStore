import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { LoadingService } from "src/app/services/loading.service";
import { BaseStoreState, ProductsActions } from "src/app/store";
import { CategoryActions } from "src/app/store/category";
import { DepartmentActions } from "src/app/store/department";

@Component({
    selector:'abo-admin',
    templateUrl:'./admin.component.html',
    styleUrls:['./admin.component.scss']
})
export class AdminComponent implements OnInit{
    isLoading: Observable<boolean>;
    constructor(private loadingService:LoadingService, private store$:Store<BaseStoreState.State>,private router: Router,){
      this.store$.dispatch(new DepartmentActions.LoadRequestAction());
      this.store$.dispatch(new ProductsActions.LoadRequestAction());
      this.store$.dispatch(new CategoryActions.LoadRequestAction());
      }
  
    ngOnInit(): void {
      this.isLoading = this.loadingService.isLoading
    }
}