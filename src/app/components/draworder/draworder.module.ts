import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraworderComponent } from './draworder/draworder.component';
import { DraworderRoutingModule } from './draworder-routing.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [DraworderComponent],
  imports: [
    CommonModule,
    DraworderRoutingModule,
    MatDialogModule
  ]
})
export class DraworderModule { }
