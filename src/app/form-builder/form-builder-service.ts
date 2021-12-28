import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { map, Observable, Subject } from "rxjs";
import { FieldBase } from "../field-base";
import { FieldSettingsComponent } from "./field-settings/field-settings.component";

@Injectable({
  providedIn: 'root', // TODO: only for demo
})
export class FormBuilderService {
  private _fieldCreated$ = new Subject<FieldBase<any>>();
  private _destinationIndex!: number | null;

  constructor(
    private _dialog: MatDialog,
  ) {
    _dialog.afterAllClosed.subscribe(() => this._destinationIndex = null);
  }

  get fieldCreated$(): Observable<FieldWithIndex<any>> {
    return this._fieldCreated$.asObservable().pipe(
      map(field => {
        return {
          field,
          index: this._destinationIndex ?? null,
        }
      })
    );
  }

  openSettings(controlType: string, index: number) {
    this._destinationIndex = index;
    this._dialog.open(FieldSettingsComponent, {
      data: {
        controlType,
      },
      width: '50%'
    });
  }

  createNewField(field: FieldBase<any>) {
    this._fieldCreated$.next(field);
    this._dialog.closeAll();
  }
}

export interface FieldWithIndex<T> {
  field: FieldBase<T>,
  index: number | null,
}
