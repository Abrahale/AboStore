import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BaseStoreState, ManufacturerActions, ManufacturerSelectors } from 'src/app/store';
import { CreateManufacturerComponent } from './create-manufacturer/create-manufacturer.component';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss']
})
export class ManufacturerComponent implements OnInit {
  manufacturers$;
  isEditMode = false;
  constructor(private dialog:MatDialog, private store$:Store<BaseStoreState.State>){}
  ngOnInit(): void {
    this.manufacturers$ = this.store$.select(ManufacturerSelectors.selectData)
  }

  addNewManufacturer():void{ this.dialog.open(CreateManufacturerComponent)}

  editManufacturer(input):void{
    this.isEditMode = true
    this.dialog.open(CreateManufacturerComponent,{data:{isEdit:true, preFil:input}})
  }
}
