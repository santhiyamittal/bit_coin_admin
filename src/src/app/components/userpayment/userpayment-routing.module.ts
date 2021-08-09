import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpaymentComponent } from './userpayment/userpayment.component';



const routes: Routes = [
  {
    path: '',
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
