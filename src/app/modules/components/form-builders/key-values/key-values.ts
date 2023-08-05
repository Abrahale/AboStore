import { Component, OnInit,Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
selector: 'abo-key-values',
templateUrl: './key-values.html',
styleUrls: ['./key-values.scss']
})
export class KeyValuesComponent implements OnInit {
@Input() key = 'Features'
@Input() value = []
@Input() preview = false
@Output() onComplete : EventEmitter<any> = new EventEmitter()
showPreview = false;

_form: FormGroup;

constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this._form = this.fb.group({
      _from_array: this.fb.array(this.value)
    });
  }


  get _formArray(): FormArray {
    return this._form.get('_from_array') as FormArray;
  }

  get formValues(){
    return this._form.value['_from_array']
  }

  addItem(): void {
    this._formArray.push(this.fb.control(''));
  }

  deleteItem(index: number): void {
    this._formArray.removeAt(index);
  }


  submit(){
    this.onComplete.emit(this.mergeArrayIntoObject(this.key,  this._form.value))
  }

   mergeArrayIntoObject(key: string, values: []): { [key: string]: any } {
    const finalObject: { [key: string]: any } = {};
    finalObject[key] = values['_from_array'];
    
    return finalObject;
  } 
}