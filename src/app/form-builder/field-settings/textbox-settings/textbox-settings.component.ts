import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textbox-settings',
  templateUrl: './textbox-settings.component.html',
  styleUrls: ['./textbox-settings.component.css']
})
export class TextboxSettingsComponent implements OnInit {
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
