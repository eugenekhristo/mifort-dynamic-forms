import { DynamicControlModel } from '../models/dynamic-control.model';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { CONTROL_TYPES } from '../models/user.model';

export class DynamicFormService {
  toFormGroup(controls: DynamicControlModel[], object?: object) {
    const group: any = {};

    controls.forEach(control => {
      let value = '';

      if (object && object[control.name]) {
        value = object[control.name];
      }

      let validators: ValidatorFn[] = [Validators.required];

      if (control.type === CONTROL_TYPES.age) {
        validators = [...validators, Validators.min(18), Validators.max(80)];
      }
      group[control.name] = new FormControl(value, validators);
    });

    return new FormGroup(group);
  }
}
