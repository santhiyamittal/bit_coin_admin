import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddrawComponent } from './adddraw/adddraw.component';
import { DrawwalletComponent } from './drawwallet/drawwallet.component';
import { ViewdrawComponent } from './viewdraw/viewdraw.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Drawwallet',
        component: DrawwalletComponent
      },
      {
        path: 'adddraw',
        component: AdddrawComponent
      },
      {
        path: 'viewdraw',
        component: ViewdrawComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawWalletRoutingModule { }