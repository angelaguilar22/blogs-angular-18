import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confir-dialog',
  templateUrl: './confir-dialog.component.html',
  styleUrl: './confir-dialog.component.scss',
})
export class ConfirDialogComponent implements OnInit {
  @Output() confirm = new EventEmitter<void>(); // Evento para acción de confirmar
  @Output() cancel = new EventEmitter<void>(); // Evento para acción de cancelar
  readonly data = inject<any>(MAT_DIALOG_DATA);

  ngOnInit(): void {}

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
