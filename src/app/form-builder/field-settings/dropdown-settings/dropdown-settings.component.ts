import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown-settings',
  templateUrl: './dropdown-settings.component.html',
  styleUrls: ['./dropdown-settings.component.css']
})
export class DropdownSettingsComponent implements OnInit {
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
