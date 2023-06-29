import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'abo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() theme = '';
  @Input() hasGradient = false;
  constructor() { }

  ngOnInit(): void {
  }

}
