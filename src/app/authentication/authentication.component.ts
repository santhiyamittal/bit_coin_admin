import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../shared/services/http.service';
import * as SecureLS from 'secure-ls';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  public loginForm: FormGroup;
  submitted: boolean = false;
    emailid :any;
    errorCount: number;
    userId: any;

  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,

    public httpService: HttpService,
    private loader: NgxUiLoaderService,

  ) {
    this.createForm();

    // if (sessionStorage.getItem('previousLogin') != null || sessionStorage.getItem('previousLogin') != undefined) {
    //   // var perviousEmail = JSON.parse(sessionStorage.getItem('previousLogin'));
    //   // var userEmail = perviousEmail;
    //   // this.loginForm.setValue({
    //   //   userid:userEmail,
    //   //   password: ''
    //   // })
    // }
   }

  ngOnInit(): void {
    // document.getElementById('emailid').focus();

  }

  get loginFormControl(){
    return this.loginForm.controls;
  }

  
  goToForgetPassword() {
    this.router.navigateByUrl('/custom/forgot-password')
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // getError(el) {
  //   switch (el) {
  //     case 'user':
  //       if (this.loginForm.get('mail').hasError('required')) {
  //         return 'Email id required';
  //       }
  //       break;
  //     case 'pass':
  //       if (this.loginForm.get('password').hasError('required')) {
  //         return 'Password required';
  //       }
  //       break;
  //     default:
  //       return '';
  //   }
  // }
  // onSubmit() {
  //   debugger
  //   localStorage.clear();
  //   let jsonData = {
  //     email: this.loginForm.value.email,
  //     password: this.loginForm.value.password
  //   }
  //   console.log(jsonData);
  //   // this.loader.start();
  //   this.httpService.userLogin(jsonData).subscribe((res: any) => {
  //     // this.loader.stop();
  //     if (res['success'] == true) {
  //       console.log(res);
  //       this.httpService.toastr.success(res['message'], "", {
  //         positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
  //       });

  //       // this.generateUserOTP();
  //     } 
  //   }, (err) => {
  //     // this.loader.stop();
  //     this.toastr.error("Please Check Password or Email");
  //     // this.httpService.errorCallBack(false);
  //   });
  // }
  onSubmit() {
    debugger
    localStorage.clear();
    this.submitted=true;
    let jsonData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.loader.start();
    this.httpService.userLogin(jsonData).subscribe((res: any) => {
      this.loader.stop();
      // this.appComponent.startWatching();
      
      if (res['success'] == true) {
        this.userId = this.loginForm.value.userid;
        var ls = new SecureLS();
        ls.set('userPass', { data: this.loginForm.value.password });
        console.log(res);
        localStorage.setItem("userid", JSON.stringify(res['admin']['email']));
        localStorage.setItem("data", JSON.stringify(res['data']));

        this.userId = res['admin']['email'];
        // localStorage.setItem("userid", JSON.stringify(this.loginForm.value.userid));
        localStorage.setItem("userdetails", JSON.stringify(res));
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 3000
        });
        this.router.navigate(['/custom/twofactor']);

        // this.generateUserOTP();
      }
       else if (res['success'] == false) {
        // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
        // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
        this.httpService.toastr.error(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
        });
      }
    
    // else if (res['success'] == false) {
    //   // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
    //   // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
    //   this.httpService.toastr.error(res['message'], '', {
    //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
    //   });
    // }
    // }, 
    // (err) => {
    //   // this.loader.stop();
    //   this.toastr.error("invalid_credentials");
    //   // this.httpService.errorCallBack(false);
    });
  }
  generateUserOTP() {
    // debugger
    var apiSlowdown: boolean = false;

    this.loader.start();
    setTimeout(() => {
      /** spinner ends after 10 seconds */
      // this.httpService.errorCallBack(apiSlowdown);
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
}
