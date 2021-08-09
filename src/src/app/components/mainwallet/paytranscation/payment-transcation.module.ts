import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTranscationComponent } from './payment-transcation/payment-transcation.component';



@NgModule({
  declarations: [PaymentTranscationComponent],
  imports: [
    CommonModule,
    PaymentTranscationModule
  ]
})
export class PaymentTranscationModule { }
