import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpaymentComponent } from './userpayment/userpayment.component';
import { UserpaymentRoutingModule } from './userpayment-routing.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [UserpaymentComponent],
  imports: [
    CommonModule,
    UserpaymentRoutingModule,
    MatDialogModule
  ]
})
export class UserpaymentModule { }
