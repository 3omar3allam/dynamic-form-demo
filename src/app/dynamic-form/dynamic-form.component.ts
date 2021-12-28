import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from '../field-base';
import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ DynamicFormService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private dfs: DynamicFormService) {}

  ngOnInit() {
    this.form = this.dfs.toFormGroup(this.fields as FieldBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
