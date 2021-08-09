import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexComponent } from './apex/apex.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartlistComponent } from './chartlist/chartlist.component';
import { ChartsComponent } from './charts/charts.component';
import { EchartComponent } from './echart/echart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'apex',
      //   component: ApexComponent
      // },
      // {
      //   path: 'chartjs',
      //   component: ChartjsComponent
      // },
      // {
      //   path: 'chartlist',
      //   component: ChartlistComponent
      // },
      {
        path: 'Charts',
        component:ChartsComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }