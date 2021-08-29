import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spruha';
  darkMode=false;
  storedTheme: string = localStorage.getItem('theme-color');
  inactive: boolean;
  // public isSpinner = true;

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.isSpinner = false;
  //   },1000)
  // }
  constructor(
    private userIdle: UserIdleService,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
  ){
    
  }
ngOnInit(){
 
}
//Timer
stop() {
  this.userIdle.stopTimer();
}

stopWatching() {
  this.userIdle.stopWatching();
}

startWatching() {
  console.log("Timer stop");
  this.userIdle.startWatching();
}

restart() {
  this.userIdle.resetTimer();
}
// goToLockScreen() {
//   if (localStorage.getItem("loginState") != null || localStorage.getItem("loginState") != undefined) {
//     var loginState = JSON.parse(localStorage.getItem("loginState"));
//     this.inactive = true;
//     this.stop();
//     this.stopWatching(); 
//     if (this.inactive && loginState)
//       this.routeTo.navigateByUrl("dashboard/dashboard");

//     // const dialogRef = this.dialog.open(LockscreenComponent, {
//     //   width: "350px",
//     //   autoFocus: false,
//     //   height: "350px",
//     //   data: '',
//     // });
//     // dialogRef.afterClosed().subscribe((result) => {
//     //   this.restart();
//     // });
//   }
// }
}
