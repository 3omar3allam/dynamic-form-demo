import { FormArray, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

type CrossControlValidatorFn = (form: FormGroup) => ValidationErrors | null;

export class FieldSettingsValidators {
  static customValidators() : CrossControlValidatorFn {
    return (form: FormGroup) => {
      const errors : ValidationErrors = {
        optionsRequired: false,
      };

      const controlType = form.get('controlType')?.value;
      const options = form.get('options') as FormArray;
      if (controlType == 'dropdown' && !options.length) {
        errors['optionsRequired'] = true;
      }

      return Object.values(errors).some(p => p) ? errors : null;
    }
  }
}
