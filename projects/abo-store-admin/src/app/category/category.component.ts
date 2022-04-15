import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  headers = ["Id","Name", "Description"];
  categories=[];
  categoryForm:any;
  constructor(private categoryService: CategoryService, private formBuilder:FormBuilder) {
    this.categoryForm= new FormGroup({
      name: new FormControl('Abrahale',Validators.required),
      description: new FormControl('Software developer'),
    })
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res => {
      console.log(res.result)
      res.result.forEach(e => {
        this.categories.push({
          id:e._id,
          name:e.name,
          description:e.description,
        })
      });
    })
  }

  submitNewCategory(){
    this.categoryService.AddNewCategory(this.categoryForm.getRawValue()).subscribe(ab => console.log(ab))
  }

}
