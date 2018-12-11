import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicFormService } from '../services/dynamic-form.service';
import { DynamicControlModel } from '../models/dynamic-control.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [DynamicFormService]
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  formFields: DynamicControlModel[] = [];

  @Input()
  set interfaceMap(interfaceMap: Map<string, string>) {
    interfaceMap.forEach((val, key) => {
      this.formFields.push(new DynamicControlModel(key, val));
    });
  }

  @Input() objectValue: object = null;

  @Output() valueChanges = new EventEmitter<object>();
  @Output() formSubmitted = new EventEmitter<object>();

  constructor(private qcs: DynamicFormService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.formFields, this.objectValue);
  }

  onSubmit() {
    const controls = this.form.controls;
    if (this.form.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    } else {
      this.formSubmitted.emit(this.form.value);
    }
  }

  onValueChanges() {
    this.valueChanges.emit(this.form.value);
  }
}
