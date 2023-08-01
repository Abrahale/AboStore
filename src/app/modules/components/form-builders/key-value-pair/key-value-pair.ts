import { Component, OnInit,Input } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
selector: 'abo-key-value-pair',
templateUrl: './key-value-pair.html',
styleUrls: ['./key-value-pair.scss']
})
export class KeyValuePairComponent implements OnInit {
@Input() heading = 'product details'
showPreview = false;
preview  = {}
form: FormGroup;

constructor(private fb:FormBuilder){}
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
        return [el['key'], el['value']]
      
    })
  }

  makeFormGroup(input:any){
    return input as FormGroup
  }

  addItem(): void {
    const lessonForm = this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required]
    });
    this.lessons.push(lessonForm);
  }

  deleteItem(lessonIndex: number): void {
    this.lessons.removeAt(lessonIndex);
  }
  trackByLessonIndex(index: number, lessonForm: FormGroup): number {
    return index;
  }

  submit(){
    this.showPreview = true;
    let fv = this.form.value;
    let ab = fv.lessons.map(el =>{
      return {[el['key']]:el['value']}
    })

    const returnObject =  this.mergeArrayIntoObject(this.heading, Object.values(ab))
    this.preview = returnObject
    console.log(returnObject)

  }

   mergeArrayIntoObject(key: string, values: { [key: string]: any }[]): { [key: string]: any } {
    const result: { [key: string]: any } = {};
    
    values.forEach((obj) => {
      Object.keys(obj).forEach((innerKey) => {
        result[innerKey] = obj[innerKey];
      });
    });
    
    const finalObject: { [key: string]: any } = {};
    finalObject[key] = result;
    
    return finalObject;
  } 
}