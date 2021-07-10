import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawwalletComponent } from './drawwallet/drawwallet.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Drawwallet',
        component: DrawwalletComponent
      },
      
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawWalletRoutingModule { }