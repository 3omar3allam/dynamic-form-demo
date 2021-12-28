import { Component } from '@angular/core';

import { DynamicFormService } from './dynamic-form/dynamic-form.service';
import { FieldBase } from './field-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <!-- <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form> -->
      <app-form-builder></app-form-builder>
    </div>
  `,
  providers:  [DynamicFormService]
})
export class AppComponent {
  questions$: Observable<FieldBase<any>[]>;

  constructor(service: DynamicFormService) {
    this.questions$ = service.getFields();
  }
}
