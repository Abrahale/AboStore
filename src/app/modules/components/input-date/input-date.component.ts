import { Component } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Validators} from '@angular/forms';

@Component({
  selector: 'abo-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent {

  date = [new Date(1990,0,1), Validators.required]
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {

    const date = cellDate.getDate();

    if (view == 'month') {
        return (date == 1) ? 'highlight-date' : "";
    }

    return "";
}
}
