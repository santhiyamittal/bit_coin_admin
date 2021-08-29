import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { AppComponent } from 'src/app/app.component';
import * as chartData from '../../../shared/data/dashboard';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(
    public appcomponent: AppComponent,
    private userIdle: UserIdleService,

  ) {
    
  }

   ngOnInit(): void {
  //   debugger
  //   if (!this.appcomponent.inactive) {
  //     this.appcomponent.startWatching();
  //     // this.userIdle.startWatching();
  //     this.userIdle.onTimerStart().subscribe(count => console.log(count));
  //     this.userIdle.onTimeout().subscribe(() => this.appcomponent.goToLockScreen());
  //   } else if (this.appcomponent.inactive) {
  //     this.appcomponent.goToLockScreen();
  //   }
  }
  //line Chart
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;

  //Bar chart
  public barChartOptions = chartData.barChartOptions;
  public barChartLabels = chartData.barChartLabels;
  public barChartType = chartData.barChartType;
  public barChartData = chartData.barChartData;
  public barChartColors = chartData.barChartColors;


}
