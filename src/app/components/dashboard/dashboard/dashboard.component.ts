import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { AppComponent } from 'src/app/app.component';
import * as chartData from '../../../shared/data/dashboard';
import { HttpService } from 'src/app/shared/services/http.service';
import { Color, Label} from 'ng2-charts';
import { MatDialog } from '@angular/material/dialog';
import { PopupdetailsComponent } from '../popupdetails/popupdetails.component';
import { Chart } from 'chart.js';
import { number } from 'echarts';
import { DatePipe } from '@angular/common';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { GraphService } from '../graph.service';

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
  chart:any= [];
  list: any= [];
  date: any= [];
  sell: any= [];
  price: any= [];
  count: any= [];
  weatherDates:any=[];


  constructor(
    public appcomponent: AppComponent,
    private userIdle: UserIdleService,
    public httpService: HttpService,
    public dialog: MatDialog,
    private graph: GraphService,

  ) {
    
  }

   ngOnInit(): void {
    this.graph.graphlist()
    .subscribe(res => {
      
      let sell = res['data'].map(res => res.amount.sell_count)
      let count = res['data'].map(res => res.amount.count)
      let alldates = res['data'].map(res => res.date)
      let price = res['data'].map(res => res.amount.price)
// console.log(sell)
console.log(count)
// console.log(alldates)
// console.log(price)
this.weatherDates=alldates
var datePipe = new DatePipe('en-US');
      let weatherDates = []
      alldates.forEach((res) => {
              let formatedDate = datePipe.transform(res, ' MMM-d-yy');
                      weatherDates.push(formatedDate)

        // console.log(weatherDates)

      })
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: weatherDates,
          datasets: [
            {
              label: 'SellCount',
              data: sell,
              borderWidth: 3,
              backgroundColor: 'transparent',
              borderColor: '#6259ca',
              pointBackgroundColor: '#ffffff',
              pointRadius: 0,
            },
            {
              label: 'Price',
              data: price,
              borderWidth: 3,
        backgroundColor: 'transparent',
        borderColor: 'rgb(183, 179, 220,0.5)',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
        borderDash: [7,3]
            },
        //     {
        //       label: 'Count',
        //       data: count,
        //       borderWidth: 3,
        // backgroundColor: 'transparent',
        // borderColor: '#FD6074',
        // pointBackgroundColor: '#ffffff',
        // pointRadius: 0,
        // borderDash: [7,3]
        //     },
            // {
            //   data: count,
            //   borderColor: '#ffcc00',
            //   fill: false
            // },
          ]
        },
        options: {
          maintainAspectRatio: false,
    responsive: true,
    tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: '#c8ccdb',
            },
            display: true,
            gridLines: {
                color: 'rgba(119, 119, 142, 0.2)',
                zeroLineColor: 'rgba(119, 119, 142, 0.2)'
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: '#77778e',
                min: 0,
                max: 3000,
                stepSize:150
            },
            display: true,
            gridLines: {
                color:'rgba(119, 119, 142, 0.2)',
			    zeroLineColor: 'rgba(119, 119, 142, 0.2)',
            },
            scaleLabel: {
                display: true,
                labelString: 'Thousands',
                fontColor: 'transparent'
            }
        }]
    },
    legend: {
        display: true,
        labels: {
            fontColor: '#77778e',
        }
    }
        }
      })

    })
     this.totallist();
     this.translist();
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
  // line Chart
  // public lineChartOptions = this.graph.lineChartOptions;
  // public lineChartLabels = this.graph.lineChartLabels;
  // public lineChartType = this.graph.lineChartType;
  // public lineChartLegend = this.graph.lineChartLegend;
  // public lineChartData = this.graph.lineChartData;

 


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
//   graphlist(){
//     debugger
//     this.httpService.chartslist().subscribe((res: any) => {
//       console.log(res['data'])
//       this.list=res['data']
//       localStorage.setItem("list", JSON.stringify(res['data']));

//       for (let idx of this.list) {
// this.sell= idx['amount']['sell_count']    
// this.price= idx['amount']['price']     
// this.count= idx['amount']['count']     
// this.date= idx['count']     

// console.log(this.count)

// var datePipe = new DatePipe('en-US');
//     this.date = datePipe.transform(this.date, 'yyyy-MM-dd');
//               }        // let temp_max = res['data']['amount']['sell_count']
//       // let temp_min = res['data']['amount']['price']
//       let alldates = res['data']['date']
// console.log(alldates)
//       // let weatherDates = []
//       // alldates.forEach((res) => {
//       //   let jsdate = new Date(res * 1000)
//       //   weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
//       // })
//       // let jsdate = new Date(res * 1000)
//       // this.date.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
//       this.chart = new Chart('canvas', {
//         type: 'line',
//         data: {
//           labels: this.date,
//           datasets: [{ 
//               data:[, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210, 410],
//               label: "sell",
//               borderWidth: 3,
//         backgroundColor: 'transparent',
//         borderColor: '#6259ca',
//         pointBackgroundColor: '#ffffff',
//         pointRadius: 0,
//             }, { 
//               data: [, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210, 410],
//               label: "Price",
//               borderWidth: 3,
//               backgroundColor: 'transparent',
//               borderColor: 'rgb(183, 179, 220,0.5)',
//               pointBackgroundColor: '#ffffff',
//               pointRadius: 0,
//               borderDash: [7,3]
//             }, 
//           ]
//         },
//         options: {
//           maintainAspectRatio: false,
//           responsive: true,
//           tooltips: {
//               enabled: true,
//               mode: 'index',
//               intersect: false
//           },
//           hover: {
//               mode: 'nearest',
//               intersect: true
//           },
//           scales: {
//               xAxes: [{
//                   ticks: {
//                       fontColor: '#c8ccdb',
//                   },
//                   display: true,
//                   gridLines: {
//                       color: 'rgba(119, 119, 142, 0.2)',
//                       zeroLineColor: 'rgba(119, 119, 142, 0.2)'
//                   }
//               }],
//               yAxes: [{
//                   ticks: {
//                       fontColor: '#77778e',
//                       min: 0,
//                       max: 1050,
//                       stepSize: 150
//                   },
//                   display: true,
//                   gridLines: {
//                       color:'rgba(119, 119, 142, 0.2)',
//                 zeroLineColor: 'rgba(119, 119, 142, 0.2)',
//                   },
//                   scaleLabel: {
//                       display: true,
//                       labelString: this.count,
//                       fontColor: 'transparent'
//                   }
//               }]
//           },
//           legend: {
//               display: true,
//               labels: {
//                   fontColor: '#77778e',
//               }
//           }
//       }
//       })

//     })
// }


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
function varInWhichDateIsStored(varInWhichDateIsStored: any) {
  throw new Error('Function not implemented.');
}

