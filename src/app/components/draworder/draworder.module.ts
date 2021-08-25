import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraworderComponent } from './draworder/draworder.component';
import { DraworderRoutingModule } from './draworder-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { EditpervComponent } from './editperv/editperv.component';
import { DeletepervComponent } from './deleteperv/deleteperv.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DraworderComponent, EditpervComponent, DeletepervComponent],
  imports: [
    CommonModule,
    DraworderRoutingModule,
    MatDialogModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DraworderModule { }
