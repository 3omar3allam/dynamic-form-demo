import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FieldBase } from 'src/app/field-base';
import { FormBuilderService } from '../form-builder-service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['../form-builder.component.css', './canvas.component.css'],
})
export class CanvasComponent implements OnInit {
  fields: FieldBase<any>[] = [];

  constructor(
    private fbs: FormBuilderService
  ) {}

  ngOnInit(): void {
    this.fbs.fieldCreated$.subscribe(data => {
      console.log(data.field);
      if (data.index != null && this.fields[data.index]) {
        this.fields[data.index] = data.field;
      } else {
        this.fields.push(data.field)
      }
    });
  }

  drop(event: CdkDragDrop<FieldBase<any>[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
  }
}
