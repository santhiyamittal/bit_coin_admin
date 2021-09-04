import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';
import { AdddrawComponent } from '../drawwallet/adddraw/adddraw.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { DeletepaymentComponent } from './deletepayment/deletepayment.component';
import { DepositpaymentComponent } from './depositpayment/depositpayment.component';
import { PendingdepositComponent } from './pendingdeposit/pendingdeposit.component';
import { PendingwithdrawComponent } from './pendingwithdraw/pendingwithdraw.component';
import { WithdrawpaymentComponent } from './withdrawpayment/withdrawpayment.component';




const routes: Routes = [
  {
    path: '',
    canActivate:[AuthencationGuard],

    children: [
      {
        path: 'depositpayment',
        component:DepositpaymentComponent
      },
      {
        path: 'withdrawpayment',
        component:WithdrawpaymentComponent
      },
      {
        path: 'deletepayment',
        component:DeletepaymentComponent
      },
      
      {
        path: 'addpayment',
        component:AddpaymentComponent
      },
      
      {
        path: 'pendeposit',
        component:PendingdepositComponent
      },
      {
        path: 'penwithdraw',
        component:PendingwithdrawComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpaymentRoutingModule { }
