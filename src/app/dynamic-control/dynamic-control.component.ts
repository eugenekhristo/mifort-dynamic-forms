import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicControlModel } from '../models/dynamic-control.model';
import { CONTROL_TYPES } from '../models/user.model';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.css']
})
export class DynamicControlComponent implements OnInit {
  @Input() field: DynamicControlModel;
  @Input() form: FormGroup;
  CONTROL_TYPES = CONTROL_TYPES;

  constructor() { }

  ngOnInit() {
  }

  isControlInvalid(controlName: string, errorType: string): boolean {
    return this.form.get(controlName).hasError(errorType) && this.form.get(controlName).touched;
  }

}
