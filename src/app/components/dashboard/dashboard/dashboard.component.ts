import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { AppComponent } from 'src/app/app.component';
import * as chartData from '../../../shared/data/dashboard';
import { HttpService } from 'src/app/shared/services/http.service';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label} from 'ng2-charts';
import { MatDialog } from '@angular/material/dialog';
import { PopupdetailsComponent } from '../popupdetails/popupdetails.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  user: any;
  draw: any;
  balanace: any;
  data: any;
chart:any[];


  constructor(
    public appcomponent: AppComponent,
    private userIdle: UserIdleService,
    public httpService: HttpService,
    public dialog: MatDialog,

  ) {
    
  }

   ngOnInit(): void {
     this.totallist();
     this.translist();
     this.graphlist();
  //   debugger
  if (!this.appcomponent.inactive) {
    this.appcomponent.startWatching();
    // this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    this.userIdle.onTimeout().subscribe(() => this.appcomponent.goToLockScreen());
  } else if (this.appcomponent.inactive) {
    // this.appcomponent.goToLockScreen();
  }
  }
  //line Chart
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;

 


  totallist(){
    this.httpService.total_list().subscribe((res: any) => {
      console.log(res['user'])
      console.log(res['draw'])
      console.log(res['balanace'])
this.user=res['user']
this.draw=res['draw']
this.balanace=res['balanace']

    });
  }
  translist(){
    this.httpService.trans_list().subscribe((res: any) => {
      console.log(res['deposit'])
      console.log(res['deposit'][0]['username'])
this.data=res['deposit']
    });
  }
  graphlist(){
    this.httpService.chartslist().subscribe((res: any) => {
      let temp_max = res['list'].map(res => res.main.temp_max);

console.log(res['data'])
    });
  }
  popup(news) {
    const dialogRef = this.dialog.open(PopupdetailsComponent, {
      // width: "900px",
      // autoFocus: false,
      // height: "400px",
      data: news,
    });
console.log(news)
    dialogRef.afterClosed().subscribe((result) => {
    });
  }



}
