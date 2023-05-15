import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'abo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() buttonText = "Add To Cart"
  @Input() theme:string = '';
  @Input() disable = false;
  @Input() showIcon = false;
  @Output() abo_click =new  EventEmitter();

  ngOnInit(): void {
  }

  buttonClick():void{
    this.abo_click.emit();
  }
}
