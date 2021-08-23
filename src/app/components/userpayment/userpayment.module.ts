import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpaymentComponent } from './userpayment/userpayment.component';
import { UserpaymentRoutingModule } from './userpayment-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DeletepaymentComponent } from './deletepayment/deletepayment.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddpaymentComponent } from './addpayment/addpayment.component';


@NgModule({
  declarations: [UserpaymentComponent, DeletepaymentComponent, AddpaymentComponent],
  imports: [
    CommonModule,
    UserpaymentRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ]
})
export class UserpaymentModule { }
