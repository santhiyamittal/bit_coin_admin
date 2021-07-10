import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.scss']
})
export class EditlistComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditlistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }
  closeModelBox(): void {
    this.dialogRef.close();
  }
  successAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Well Done!',
      text: 'You clicked the button!',
      confirmButtonColor: '#6259ca'
    })
  }
}
