import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/services/navigation-menu.service';

@Component({
  selector: 'abo-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(private http: HttpClient) { }
  response:any;
  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/users/61ef2ae201679aa89745730a').subscribe(data => {
      this.response = data;
      console.log(this.response);
  },
  error => console.error(error)) 
  }
}
