import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: "abo-create-department-step-1",
  templateUrl:"create-department-step-1.component.html",
  styleUrls: ["create-department-step-1.component.scss"]
})
export class CreateDepartmentStep1Component {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(1990,0,1), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: ['', [Validators.required, Validators.minLength(3)]]
  });

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {

      const date = cellDate.getDate();

      if (view == 'month') {
          return (date == 1) ? 'highlight-date' : "";
      }

      return "";
  }

  constructor(private fb: FormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title']
  }

}
