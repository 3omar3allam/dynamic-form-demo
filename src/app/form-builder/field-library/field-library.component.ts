import { Component, Input, OnInit } from '@angular/core';
import { CONTROL_TYPES } from 'src/app/constants';

@Component({
  selector: 'app-field-library',
  templateUrl: './field-library.component.html',
  styleUrls: ['../form-builder.component.css', './field-library.component.css']
})
export class FieldLibraryComponent implements OnInit {
  readonly list = CONTROL_TYPES;;
  @Input() destinationList!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
