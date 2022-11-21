import { ComponentType } from '@angular/cdk/portal';
import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  template: '',
})
export class ModalComponent {
  constructor(private dialog: MatDialog) { };

  openDialog(SomeModal: ComponentType<unknown> | TemplateRef<unknown>): void {
    this.dialog.open(SomeModal);
  };
};
