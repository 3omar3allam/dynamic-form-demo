import { Injectable } from '@angular/core';
import { FieldBase } from '../field-base';
import { of } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class DynamicFormService {

  // TODO: get from a remote source of question metadata
  getFields() {

    const questions: FieldBase<string>[] = [

      // new DropdownField({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      // }),

      // new TextboxField({
      //   key: 'firstName',
      //   label: 'First name',
      //   value: 'Bombasto',
      //   required: true,
      // }),

      // new TextboxField({
      //   key: 'emailAddress',
      //   label: 'Email',
      //   type: 'email',
      // })
    ];

    return of(questions);
  }

  toFormGroup(questions: FieldBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
