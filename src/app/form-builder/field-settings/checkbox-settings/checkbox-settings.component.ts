import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-settings',
  templateUrl: './checkbox-settings.component.html',
  styleUrls: ['./checkbox-settings.component.css']
})
export class CheckboxSettingsComponent implements OnInit {
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form.get('value')?.setValue(false);
  }

}
