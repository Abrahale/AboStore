import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DialogBaseComponent } from 'src/app/modules/shared/components/dialog-base/dialog-base.component';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { BaseStoreState, ProductsActions, UsersActions } from 'src/app/store';
import { CategoryActions } from 'src/app/store/category';
import { DepartmentActions } from 'src/app/store/department';
//import { DialogComponent } from 'src/app/modules/shared/dialog/dialog.component';

@Component({
  selector: 'abo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialog:MatDialog, private store$:Store<BaseStoreState.State>,private fb:FormBuilder){
      
    }
    ngOnInit(): void {
      this.form = this.fb.group({
        lessons: this.fb.array([])
      });
    }
  
 
    get lessons(): FormArray {
      return this.form.get('lessons') as FormArray;
    }

    get formValues(){
      return this.form.value['lessons'].map(el => {
          return [el['title'], el['level']]
        
      })
    }

    makeFormGroup(input:any){
      return input as FormGroup
    }
  
    addLesson(): void {
      const lessonForm = this.fb.group({
        title: ['', Validators.required],
        level: ['', Validators.required]
      });
      this.lessons.push(lessonForm);
    }
  
    deleteLesson(lessonIndex: number): void {
      this.lessons.removeAt(lessonIndex);
    }
    trackByLessonIndex(index: number, lessonForm: FormGroup): number {
      return index;
    }

  openDialog = ():void =>{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false
    dialogConfig.autoFocus = false
    dialogConfig.position = {
      'top':'25%',
      'left':'42%'
    }
    dialogConfig.data = {'description':'Hi John'}

    this.dialog.open(DialogBaseComponent)

  }
}
