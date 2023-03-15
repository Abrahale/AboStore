import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'abo-heart-tag',
  templateUrl: './heart-tag.component.html',
  styleUrls: ['./heart-tag.component.scss']
})
export class HeartTagComponent implements OnInit {
  @Output() heartClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  heartClick():void{
    alert('You like this item? NICE')
  }

}
