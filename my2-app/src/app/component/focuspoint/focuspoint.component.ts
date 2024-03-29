import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-focuspoint',
  templateUrl: './focuspoint.component.html',
  styleUrl: './focuspoint.component.scss',
})
export class FocuspointComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<void>();

  Edit = '../../../assets/image/Frame 1000003654.png';
  save = '../../../assets/image/Frame 1000003663.png';
  del = '../../../assets/image/Frame 1000003660.png';
  user2 = '../../../assets/image/users-02.png';
  fizz = '../../../assets/image/FIZZ.png';
  constructor(public dialogup: MatDialog) {}
  onEdit(): void {
    this.edit.emit({ title: this.title, description: this.description });
  }

  onDelete(): void {
    this.delete.emit();
  }
}
