import { Component,Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'abo-long-text-input',
  templateUrl: './long-text-input.component.html',
  styleUrls: ['./long-text-input.component.scss']
})
export class LongTextInputComponent {
    @Input() fc_name: FormControl;
}
