import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrl: './focus.component.scss',
})
export class FocusComponent {
  focusPoints: any[] = [];
  constructor(public dialog: MatDialog, private dataservice: DataService) {}
  openCreateModal(): void {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      width: '400px',
      // additional configuration
      data: { title: '', description: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createFocusPoint(result);
      }
    });
  }
  createFocusPoint(data: any): void {
    // Send a request to the backend to create a new focus point
    this.dataservice.saveData(data).subscribe((newFocusPoint) => {
      // Add the new focus point to the local array
      this.focusPoints.push(newFocusPoint);
    });
    if (this.focusPoints.length !== 0) {
      const para = document.getElementById('desc');
      para!.classList.add('hidden');
    }
  }

  openEditModal(focusPoint: any, index: number, id: number): void {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      width: '250px',
      data: { ...focusPoint, isEdit: true },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateFocusPoint(result, index, id);
      }
    });
  }

  updateFocusPoint(data: any, index: number, id: number): void {
    // Send a request to the backend to update the focus point
    this.dataservice.updateData(id, data).subscribe((updatedFocusPoint) => {
      // Update the focus point in the local array
      this.focusPoints[index] = updatedFocusPoint;
    });
  }

  deleteFocusPoint(id: number, index: number): void {
    // Send a request to the backend to delete the focus point
    this.dataservice.deleteData(id).subscribe(() => {
      // Remove the focus point from the local array
      this.focusPoints.splice(index, 1);
    });
    console.log(id);
  }
  ngOnInit(): void {
    this.dataservice.loadData().subscribe((focusPoints) => {
      this.focusPoints = focusPoints;
      if (this.focusPoints.length !== 0) {
        const para = document.getElementById('desc');
        para!.classList.add('hidden');
      }
    });
  }
}
