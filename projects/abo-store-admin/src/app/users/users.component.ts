import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users=[];
  constructor(private usersService: UsersService) {

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

  add(){
    this.users.push(
      {
        id: "test",
        first_name: "test",
        last_name: "test",
        email: "test",
        username: "test",
        created_date: "test"
      }
    );
  }

}
