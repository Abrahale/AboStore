import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { BaseStoreState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { DepartmentActions, DepartmentSelectors } from 'src/app/store/department';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CreateDepartmentComponent } from './create-department/create-department.component';

@Component({
  selector: "abo-department",
  styleUrls: ["department.component.scss"],
  templateUrl: "department.component.html"
})
export class DepartmentComponent implements OnInit{
  department={dep_name:'',dep_des:''}
  creatDepartmentDialog: MatDialogRef<CreateDepartmentComponent>
  subscription$;
  departments$;
  isEditMode = false;
  constructor(private dialog:Dialog, private store$:Store<BaseStoreState.State>){
    //this.store$.dispatch(new DepartmentActions.LoadRequestAction());
    console.log('Department page')
  }
  ngOnInit(): void {
    this.departments$ = this.store$.select(DepartmentSelectors.selectData)
  }

  editDepartment(input:any){
    this.isEditMode = true
    this.department.dep_name = input.name
    this.department.dep_des = input.description
  }


  addNewDepartment(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false
    dialogConfig.autoFocus = false
    dialogConfig.position = {
      'top':'25%',
      'left':'42%'
    }
    dialogConfig.data = {'description':'Hi John'}

    const creatDepartmentDialog = this.dialog.open(CreateDepartmentComponent,{
      width: '250px',
      data: { firstName: "Ab", lastName: "Kiros" }
      })

    // creatDepartmentDialog.afterClosed().subscribe(result => {
    //   console.log('You have closed the dialog');
    //   if (result) {
    //     console.log(result)
    //   }
    //   });
  }
}
