import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { FieldBase } from 'src/app/field-base';
import { FormBuilderService } from '../form-builder-service';
import { FieldSettingsValidators } from './field-settings.validators';

export interface FieldSettingsOptions {
  controlType: string,
  index?: number | null,
  fieldToEdit?: FieldBase<any> | null
}

@Component({
  selector: 'app-field-settings',
  templateUrl: './field-settings.component.html',
  styleUrls: ['./field-settings.component.css'],
})
export class FieldSettingsComponent implements OnInit, OnDestroy {
  controlType!: string;
  form!: FormGroup;
  edit = false;
  private unsubscribeAll$ = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    private fbs: FormBuilderService,
    @Inject(MAT_DIALOG_DATA) private data: FieldSettingsOptions,
  ) {

  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    if (!this.data?.controlType) {
      throw new Error('controlType cannot be null');
    }
    this.controlType = this.data.controlType;
    this.initForm();
    if (this.data.fieldToEdit) {
      this.form.patchValue(this.data.fieldToEdit);
      this.edit = true;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.form.invalid) return;
    if (this.data.fieldToEdit) {
      this.fbs.editField(this.form.getRawValue(), this.data.index ?? null);
    }
    else {
      this.fbs.createNewField(this.form.getRawValue());
    }
  }

  private initForm() {
    this.form = this.fb.group({
      controlType: [this.controlType, Validators.required],
      key: ['', Validators.required],
      label: ['', Validators.required],
      required: [false],
      type: ['text'],
      options: this.fb.array([]),
      value: [''],
      width: ['100%', Validators.required],
    }, {
      validators: [FieldSettingsValidators.customValidators()]
    });
  }
}
