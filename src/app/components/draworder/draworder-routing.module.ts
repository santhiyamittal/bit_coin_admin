import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DraworderComponent } from './draworder/draworder.component';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';
import { EditpervComponent } from './editperv/editperv.component';
import { DeletepervComponent } from './deleteperv/deleteperv.component';




const routes: Routes = [
  {
    canActivate:[AuthencationGuard],

    path: '',
    children: [
      {
        path: 'draworderpage',
        component:DraworderComponent
      },
      {
        path: 'editlist',
        component:EditpervComponent
      },
      {
        path: 'deletelist',
        component:DeletepervComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraworderRoutingModule { }
