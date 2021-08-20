import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';
import { UserpaymentComponent } from './userpayment/userpayment.component';



const routes: Routes = [
  {
    path: '',
    canActivate:[AuthencationGuard],

    children: [
      {
        path: 'userpayment',
        component:UserpaymentComponent
      },
      
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpaymentRoutingModule { }
