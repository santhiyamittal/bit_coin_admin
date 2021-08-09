import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-twofactor',
  templateUrl: './twofactor.component.html',
  styleUrls: ['./twofactor.component.scss']
})
export class TwofactorComponent implements OnInit {

  submitted = false;
  submitted1 = false;
  submitted2 = false;
  otpForm: FormGroup;
  userId: any;
  notOKstat: any;
  timeLeft: number = 30;
  interval;
  tick = 1000;
  resendbtn: boolean = false;
  resetPwd: any;
  pwdDetails: any;
  timeInSeconds: any;
  time: any;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  remainingTime: any;
  displayTime: string;

  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
    private spinnerService: NgxUiLoaderService,

  ) { }

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^([0-9]+)$')
      ])]
    })
  }
  get otpFormControl() {
    return this.otpForm.controls;
  }
  getdashboard() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }

  /**
   * Method to generate otp
   */
  generateUserOTP() {
    // debugger
    var apiSlowdown: boolean = false;

    this.loader.start();
    setTimeout(() => {
      /** spinner ends after 10 seconds */
      this.httpService.errorCallBack(apiSlowdown);
    }, 10000);
    this.httpService.generateMobileOTP().subscribe((res: any) => {
      this.loader.stop();
      console.log(res)
      apiSlowdown = true;
      if (res['success'] == true) {
        // this.toastr.success(res['StatusOfRequest']['Message'], '', { closeButton: true, timeOut: 5000 });
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        this.routeTo.navigateByUrl('custom/twofactor');
      }
    }, (err) => {
      this.toastr.error("Please try after some time");
      this.loader.stop();
    });
  }

  /**
   * Method to Verify OTP
   * @author kalai
   * @on 25/02/2020
   */
  sendOTP() {
    // debugger
    let jsonData = {
      otp: this.otpForm.value.otp,
    };
    this.spinnerService.start();
    this.httpService.setUserOTP(jsonData).subscribe(
      (res: any) => {
        this.spinnerService.stop();
        if (
          res["success"] == true
        ) {
          // if (this.pwdDetails['PasswordChange'] == "14" || this.pwdDetails['PasswordChange'] == "16") {
            this.httpService.toastr.success(
              res["message"], "",
              {
                positionClass: "toast-bottom-right",
                closeButton: true,
                timeOut: 5000,
              }
            );
            this.routeTo.navigateByUrl("custom/reset-password");
          
        } else if (res["success"] == false) {
          this.httpService.toastr.error(res["message"], "", {
            positionClass: "toast-bottom-right",
            closeButton: true,
            timeOut: 5000,
          });
        } else {
          this.httpService.errorCallBack(false);
          this.routeTo.navigateByUrl("entrylevel/login");
        }

      },
      (err) => {
        this.httpService.errorCallBack(false);
      }
    );
  }

  // initTimer() {
  //   if (!this.timeInSeconds) {
  //     this.timeInSeconds = 20;
  //   }

  //   this.time = this.timeInSeconds;
  //   this.runTimer = false;
  //   this.hasStarted = false;
  //   this.hasFinished = false;
  //   this.remainingTime = this.timeInSeconds;
  //   this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
  // }

  // startTimer() {
  //   this.runTimer = true;
  //   this.hasStarted = true;
  // }

  // timerTick() {
  //   setTimeout(() => {
  //     if (!this.runTimer) {
  //       return;
  //     }
  //     this.remainingTime--;
  //     this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
  //     if (this.remainingTime > 0) {
  //       this.timerTick();
  //     } else {
  //       this.hasFinished = true;
  //       this.resendbtn = true;
  //     }
  //   }, 1000);
  // }

  // getSecondsAsDigitalClock(inputSeconds: number) {
  //   var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
  //   var hours = Math.floor(sec_num / 3600);
  //   var minutes = Math.floor((sec_num - hours * 3600) / 60);
  //   var seconds = sec_num - hours * 3600 - minutes * 60;
  //   var minutesString = "";
  //   var secondsString = "";
  //   minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
  //   secondsString = seconds < 10 ? "0" + seconds : seconds.toString();
  //   return minutesString + ":" + secondsString;
  // }
}

