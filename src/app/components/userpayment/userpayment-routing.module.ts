import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';
import { AdddrawComponent } from '../drawwallet/adddraw/adddraw.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { DeletepaymentComponent } from './deletepayment/deletepayment.component';
import { InactivepaymentComponent } from './inactivepayment/inactivepayment.component';
import { UserpaymentComponent } from './userpayment/userpayment.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';



const routes: Routes = [
  {
    path: '',
    canActivate:[AuthencationGuard],

    children: [
      {
        path: 'userpayment',
        component:UserpaymentComponent
      },
      {
        path: 'deletepayment',
        component:DeletepaymentComponent
      },
      {
        path: 'viewpayment',
        component:ViewpaymentComponent
      },
      {
        path: 'addpayment',
        component:AddpaymentComponent
      },
      {
        path: 'inactivepayment',
        component:InactivepaymentComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpaymentRoutingModule { }
