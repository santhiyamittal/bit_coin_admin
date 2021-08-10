import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.scss']
})
export class EditlistComponent implements OnInit {
  gender: any = ['Male', 'Female','Other']

  public loginForm: FormGroup;
  submitted = false;
    emailid :any;
    errorCount: number;
    userId: any;
  constructor(public dialogRef: MatDialogRef<EditlistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
  ) { 
    console.log(this.data);
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'first_name':['', Validators.required],
      'last_name':['', Validators.required],
      'username':['', Validators.required],
       'mobile':['', [Validators.required, Validators.minLength(10)]],
      'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'dob': ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      'zip_code':['', [Validators.required, Validators.minLength(6)]],
      'country_code':['', Validators.required],
      'country':['', Validators.required],
      'gender':['', Validators.required],
      'address':['', Validators.required],
    });
  }
  closeModelBox(): void {
    this.dialogRef.close();
  }
  get loginFormControl(){
    return this.loginForm.controls;
  }
  successAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Well Done!',
      text: 'You clicked the button!',
      confirmButtonColor: '#6259ca'
    })
  }
  onSubmit() {
    this.submitted = true;
  
    debugger
    let jsonData = {
      first_name:this.loginForm.value.first_name,
      last_name:this.loginForm.value.last_name,
      username:this.loginForm.value.username,
      mobile:this.loginForm.value.mobile,
      dob:this.loginForm.value.dob,
      country_code:'91',
      country:'india',
      zip_code:this.loginForm.value.zip_code,
      gender:this.loginForm.value.gender,
      address:this.loginForm.value.address,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.loader.start();
    this.httpService.getupdate(jsonData).subscribe(res => {
      this.loader.stop();
      // this.appComponent.startWatching();
      if (res['success'] == true) {
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 3000
        });
        setInterval(() => {
          this.router.navigateByUrl('/user/userlist')
        }, 1500);
        // this.generateUserOTP();
      } else if (res['success'] == false) {
        // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
        // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
        this.httpService.toastr.error(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
      }
    });
    // (err) => {
    //   // this.loader.stop();
    //   this.toastr.error("email_already_found");
    //   // this.httpService.errorCallBack(false);
    // });
  }
}
