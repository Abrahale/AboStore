import { Component,Inject,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BaseStoreState, ManufacturerActions } from 'src/app/store';
import { DepartmentActions } from 'src/app/store/department';

@Component({
  selector: 'app-create-manufacturer',
  templateUrl: './create-manufacturer.component.html',
  styleUrls: ['./create-manufacturer.component.scss']
})
export class CreateManufacturerComponent implements OnInit {
  isEditMode = false;
  formManufacturer: FormGroup;
  
  constructor(private store$:Store<BaseStoreState.State>,private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any, private dialogRef:MatDialogRef<CreateManufacturerComponent>){
  }

  ngOnInit(): void {
    this.formManufacturer = this.fb.group({
      name:['',Validators.required],
      tel:['']
    })
    if(this.data != null && this.data.isEdit){
      this.isEditMode = true
      this.formManufacturer.controls['name'].setValue(this.data.preFil.name)
      this.formManufacturer.controls['tel'].setValue(this.data.preFil.tel)
    }
  }

  onSubmit() {
    if(!this.isEditMode){
     // this.store$.dispatch(new ManufacturerActions.(this.formManufacturer.value))
    }
    else{
      console.log('Still to be implemented, dispatch action for edit')
    }
    this.dialogRef.close()
    this.clearForm()
  }

  clearForm():void{
    this.formManufacturer.reset()
    this.isEditMode = false
  }
}
