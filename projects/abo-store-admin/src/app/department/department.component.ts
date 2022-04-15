import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  headers = ["Id","Name", "Description"];
  departments=[];
  departmentForm:any;
  constructor(private departmentService: DepartmentService, private formBuilder:FormBuilder) {
    this.departmentForm= new FormGroup({
      name: new FormControl('Abrahale',Validators.required),
      description: new FormControl('Software developer'),
    })
  }
    ngOnInit(): void {
      this.departmentService.getAllDepartments().subscribe(res => {
        console.log(res.result)
        res.result.forEach(e => {
          this.departments.push({
            id:e._id,
            name:e.name,
            description:e.description,
          })
        });
      })
    }
  
    submitNewCategory(){
      this.departmentService.AddNewDepartment(this.departmentForm.getRawValue()).subscribe(ab => console.log(ab))
    }

}
