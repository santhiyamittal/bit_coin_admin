import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DraworderComponent } from './draworder/draworder.component';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';




const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'draworderpage',
        canActivate:[AuthencationGuard],
        component:DraworderComponent
      },
      
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraworderRoutingModule { }
