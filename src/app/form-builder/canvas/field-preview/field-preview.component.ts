import { Component, Input, OnInit } from '@angular/core';
import { FieldBase } from 'src/app/field-base';
import { FormBuilderService } from '../../form-builder-service';

@Component({
  selector: 'app-field-preview',
  templateUrl: './field-preview.component.html',
  styleUrls: ['./field-preview.component.css']
})
export class FieldPreviewComponent implements OnInit {
  @Input() index!: number;
  @Input() field!: FieldBase<any>;
  constructor(private fbs: FormBuilderService) { }

  ngOnInit(): void {
  }

  editField() {
    this.fbs.openSettings({
      controlType: this.field.controlType,
      fieldToEdit: this.field,
      index: this.index,
    });
  }
}
