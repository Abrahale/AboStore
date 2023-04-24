import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: "abo-create-product-step-1",
  templateUrl:"create-product-step-1.component.html",
  styleUrls: ["create-product-step-1.component.scss"]
})
export class CreateProductStep1Component implements OnInit {
  form: FormGroup;


  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ]],
      
      category: ['BEGINNER', Validators.required],
      courseType: ['premium', Validators.required],
      downloadsAllowed: [false, Validators.requiredTrue],
      longDescription: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  constructor(private fb: FormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title']
  }

}
