import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { map, Observable, Subject } from "rxjs";
import { FieldBase } from "../field-base";
import { FieldSettingsComponent, FieldSettingsOptions } from "./field-settings/field-settings.component";

@Injectable({
  providedIn: 'root', // TODO: only for demo
})
export class FormBuilderService {
  private _fieldCreated$ = new Subject<FieldBase<any>>();
  private _editIndex!: number | null;

  constructor(
    private _dialog: MatDialog,
  ) {
    _dialog.afterAllClosed.subscribe(() => this._editIndex = null);
  }

  get fieldCreated$(): Observable<FieldWithIndex<any>> {
    return this._fieldCreated$
      .asObservable()
      .pipe(
        map(field => {
          return {
            field,
            index: this._editIndex,
          }
        })
      );
  }

  openSettings(options: FieldSettingsOptions) {
    this._dialog.open(FieldSettingsComponent, {
      data: options,
      width: '50%',
      maxHeight: '85%',
    });
  }

  createNewField(field: FieldBase<any>) {
    this._fieldCreated$.next(field);
    this._dialog.closeAll();
  }

  editField(field: FieldBase<any>, index: number | null) {
    this._editIndex = index;
    this._fieldCreated$.next(field);
    this._dialog.closeAll();
  }
}

interface FieldWithIndex<T> {
  index: number | null,
  field: FieldBase<T>
}
