import { Component } from '@angular/core';

@Component({
  selector: 'abo-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  ops;
  options = [
    {
      Yes: 1,
    },
    {
      No: 0,
    },
    {
      Maybe: 2,
    },
    {
      'Are you serious': 4,
    },
  ];
  constructor(){
    this.ops = this.options.map((op) => {
      const key = Object.keys(op)[0];
      console.log(key);
      return {
        value: Object.keys(op)[0],
        //@ts-ignore
        key: op[key],
      };
    });
    //console.log(this.data)
    console.log(this.options);
  }
}
