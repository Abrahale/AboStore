import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() theaders: any[];
  @Input() tbody: any[];
  keys:any[];
 
  constructor() {
    console.log('this tbody constructor',this.tbody)
   }

  ngOnInit(): void {
    if(this.tbody.length > 0){
      this.keys = Object.keys(this.tbody[0]);
    }
  }
}
