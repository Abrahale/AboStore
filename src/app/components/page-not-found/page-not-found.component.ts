import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
    form: FormGroup;
    languages = ['English','Tigrinya', 'Amharic']

    constructor(private formBuilder:FormBuilder){
      this.form = this.formBuilder.group({
        name:['', Validators.required],
        language:['', Validators.required]
      })
    }

    onSubmit = ()=>{
      console.log(this.form.value)
    }
  }
