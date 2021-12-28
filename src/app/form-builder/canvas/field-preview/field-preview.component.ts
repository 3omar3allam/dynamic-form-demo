import { Component, Input, OnInit } from '@angular/core';
import { FieldBase } from 'src/app/field-base';

@Component({
  selector: 'app-field-preview',
  templateUrl: './field-preview.component.html',
  styleUrls: ['./field-preview.component.css']
})
export class FieldPreviewComponent implements OnInit {
  @Input() field!: FieldBase<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
