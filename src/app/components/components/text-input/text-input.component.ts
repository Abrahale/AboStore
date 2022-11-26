import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'abo-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})

export class TextInputComponent implements OnInit {
  @Output() abo_vchange = new EventEmitter<{controlName:FormControl, value:any}>();
  @Input() formGroup:FormGroup;
  @Input() controlName:FormControl;
  @Input() validators = []
  @Input() label = ''
  @Input() value = ''
  @Input() placeholder = ''
  @Input() errorMessage = ''
  @Input() hint = ''
  @Input() type = ''
  constructor(){}

  ngOnInit(): void {
    this.controlName = new FormControl(this.value, this.validators);
  }

  matcher = new MyErrorStateMatcher();

  onChangeValue = (val) =>{
    this.abo_vchange.emit({controlName:this.controlName,value:val});
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

