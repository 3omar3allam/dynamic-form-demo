import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FieldLibraryComponent } from './form-builder/field-library/field-library.component';
import { CanvasComponent } from './form-builder/canvas/canvas.component';
import { FieldSettingsComponent } from './form-builder/field-settings/field-settings.component';
import { DropdownSettingsComponent } from './form-builder/field-settings/dropdown-settings/dropdown-settings.component';
import { TextboxSettingsComponent } from './form-builder/field-settings/textbox-settings/textbox-settings.component';
import { DynamicFormControlComponent } from './dynamic-form/dynamic-form-control/dynamic-form-control.component';
import { FieldPreviewComponent } from './form-builder/canvas/field-preview/field-preview.component';
import { CheckboxSettingsComponent } from './form-builder/field-settings/checkbox-settings/checkbox-settings.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    DragDropModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
  ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    FormBuilderComponent,
    FieldLibraryComponent,
    CanvasComponent,
    FieldSettingsComponent,
    DropdownSettingsComponent,
    TextboxSettingsComponent,
    DynamicFormControlComponent,
    FieldPreviewComponent,
    CheckboxSettingsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
