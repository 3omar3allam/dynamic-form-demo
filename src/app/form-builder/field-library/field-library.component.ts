import { Component, Input, OnInit } from '@angular/core';
import { CONTROL_TYPES } from 'src/app/constants';
import { FormBuilderService } from '../form-builder-service';

@Component({
  selector: 'app-field-library',
  templateUrl: './field-library.component.html',
  styleUrls: ['../form-builder.component.css', './field-library.component.css']
})
export class FieldLibraryComponent implements OnInit {
  readonly list = CONTROL_TYPES;

  constructor(private fbs: FormBuilderService) { }

  ngOnInit(): void {
  }

  openSettings(controlType: string) {
    this.fbs.openSettings({
      controlType
    });
  }
}
