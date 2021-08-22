import { Component } from '@angular/core';
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
  // public isSpinner = true;

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.isSpinner = false;
  //   },1000)
  // }
  constructor(
    private userIdle: UserIdleService,

  ){
    
  }
ngOnInit(){}
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

}
