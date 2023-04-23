import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { BaseStoreState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { DepartmentActions, DepartmentSelectors } from 'src/app/store/department';

@Component({
  selector: "abo-department",
  styleUrls: ["department.component.scss"],
  templateUrl: "department.component.html"
})
export class DepartmentComponent implements OnInit{
  department={name:'',description:''}

  subscription$;
  departments$;
  constructor(private depService:DepartmentService, private store$:Store<BaseStoreState.State>){
    this.store$.dispatch(new DepartmentActions.LoadRequestAction());
  }
  ngOnInit(): void {
    this.departments$ = this.store$.select(DepartmentSelectors.selectData)
  }
  onSubmit() {
    this.store$.dispatch(new DepartmentActions.AddNewDepartmentAction(this.department))
  }
  editDepartment(input:any){
    this.department.name = input.name
    this.department.description = input.description
  }
}
