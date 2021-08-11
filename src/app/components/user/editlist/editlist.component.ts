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
    User: any;
  Email: any;
  mobile: any;
  status: any;
  address: any;
  created: any;
  createdat: any;
  zipcode: any;
  firstname: any;
  lastname: any;
  dob: any;
  id: any;
  password: any;
  Dob: any;
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
    
    this.Email=this.data['data']['email']
    this.firstname=this.data['data']['first_name']
    this.lastname=this.data['data']['last_name']
      this.User=this.data['data']['username']
      this.mobile=this.data['data']['mobile']
      this.status=this.data['data']['status']
      this.address=this.data['data']['address']
      this.createdat=this.data['data']['createdAt']
      this.zipcode=this.data['data']['zip_code']
      this.dob=this.data['data']['dob']
      this.id=this.data['data']['_id']
      this.password=this.data['data']['password']
// this.Dob=this.dob.split("T")['0'];
this.Dob=this.dob

      console.log(this.Dob);
this.created=this.createdat.split("T")[0];
  }

  ngOnInit(): void {
    this.createForm();
    localStorage.setItem("id", JSON.stringify(this.data['data']['_id']));

  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'firstname':['', Validators.required],
      'lastname':['', Validators.required],
      'User':['', Validators.required],
       'mobile':['', [Validators.required, Validators.minLength(10)]],
      'Email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'Dob': ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      'zipcode':['', [Validators.required, Validators.minLength(6)]],
      // 'country_code':['', Validators.required],
      // 'country':['', Validators.required],
      'gender':['', Validators.required],
      // 'password':['', Validators.required],
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
    this.onSubmit();
    Swal.fire({
      icon: 'success',
      title: 'Well Done!',
      text: 'User Get Updated',
      confirmButtonColor: '#6259ca'
    })
    this.router.navigateByUrl('/user/userlist')

  }
  onSubmit() {
    this.submitted = true;
  
    debugger
    let jsonData = {
      id:this.id,
      first_name:this.loginForm.value.firstname,
      last_name:this.loginForm.value.lastname,
      username:this.loginForm.value.User,
      mobile:this.loginForm.value.mobile,
      dob:this.loginForm.value.Dob,
      // country_code:'91',
      // country:'india',
      zip_code:this.loginForm.value.zipcode,
      gender:this.loginForm.value.gender,
      address:this.loginForm.value.address,
      email: this.loginForm.value.Email,
      password: this.loginForm.value.password,
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
// this.successAlert();
        }, 1500);
        this.dialogRef.close();

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
