import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Helpers from '../../helpers/helpers';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users=[];
  showNewUserComponent:boolean = false;
  newUserForm:any;
  constructor(private usersService: UsersService, private formBuilder:FormBuilder) {
      this.newUserForm= new FormGroup({
        username: new FormControl('Abrahale',Validators.required),
        email: new FormControl('abrahale@gmail.com',[Validators.required, Validators.email]),
        telephone: new FormControl('0848398778'),
        first_name: new FormControl('Abrahale',Validators.required),
        last_name: new FormControl('Kiros',Validators.required),
        address: new FormControl('103 Doreen Str'),
        city: new FormControl('Pretoria'),
        country: new FormControl('South Africa'),
        postal_code: new FormControl('0083'),
        about_me: new FormControl('Software developer'),
      })
   }
  headers = ["Id","First Name", "Last Name", "Email", "User Name", "Created Date"];
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(res => {
      console.log(res.result)
      res.result.forEach(e => {
        this.users.push({
          email:e.email,
          first_name:e.first_name,
          last_name: e.last_name,
          username: e.last_name,
          created_date: e.createdDate,
          id:e._id
        })
      });
      console.log('the current data',this.users)
    })
  }

  submitNewProfile(){
    console.log(this.newUserForm.getRawValue())
    this.usersService.AddNewProfile({...this.newUserForm.getRawValue(), password:Helpers.generatePassword()}).subscribe(ab => console.log(ab))
  }

}
