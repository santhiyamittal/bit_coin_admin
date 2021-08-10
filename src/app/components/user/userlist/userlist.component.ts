import { Component, OnInit, Pipe } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { EditlistComponent } from '../editlist/editlist.component';
import { ViewlistComponent } from '../viewlist/viewlist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})


export class UserlistComponent implements OnInit {
  Status: any = ['Active', 'Inactive', 'Pending'];
  public loginForm: FormGroup;

  data: any[];
  Data: any[];
  totalLength: any;
  page: number = 1
  status: any[];
  id: any;
  submitted = false;

  constructor(
    public dialog: MatDialog,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,

    public httpService: HttpService,
    private loader: NgxUiLoaderService,

  ) {

  }

  ngOnInit(): void {
    this.getUserlist();
   this.createForm();
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  createForm() {
    this.loginForm = this.formBuilder.group({

      'username': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'status': ['', Validators.required],
    });
  }
  
  addsymbol(userdetails) {
    const dialogRef = this.dialog.open(ViewlistComponent, {
      width: '600px',
      height: '600px',
      data: { data: userdetails, }
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }


  editsymbol(userEdit) {
    const dialogRef = this.dialog.open(EditlistComponent, {
      width: '800px',
      height: '600px',
      data: { data: userEdit, }
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
  deleteuser(userdelete) {
    const dialogRef = this.dialog.open(DeleteuserComponent, {
      width: '600px',
      height: '600px',

      data: { data: userdelete, }
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
  add() {
    this.router.navigateByUrl('/user/adduser')

  }
  inactive() {
    this.router.navigateByUrl('/user/inactive')

  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  //   getUseractive(){

  //     this.httpService.getUser().subscribe((res: any) => {
  //       this.loader.stop();

  //       console.log(res['data'])
  //       this.data= res['data']
  // this.totalLength=this.data.length;
  // console.log(this.totalLength)
  //       if (res['success'] == true) {
  //         // this.toastr.success(res['StatusOfRequest']['Message'], '', { closeButton: true, timeOut: 5000 });
  //         this.httpService.toastr.success(res['message'], '', {
  //           positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
  //         });
  //         // this.routeTo.navigateByUrl('custom/twofactor');
  //       }
  //     }, (err) => {
  //       this.toastr.error("Please try after some time");
  //     });
  //   }
  getUserlist() {

    this.httpService.getUserlist().subscribe((res: any) => {
      this.loader.stop();

      console.log(res['data'])
      this.data = res['data']
      this.status = res['data']['status']
      this.id = res['data']['_id']
      console.log(this.id)
      this.totalLength = this.data.length;

      console.log(this.totalLength)

      if (res['success'] == true) {
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
      }
    }, (err) => {
      this.toastr.error("Please try after some time");
    });
  }
  searchuser() {
    this.submitted = true;

    let jsonData = {
      id: this.id,
    }
    this.httpService.getsearch(jsonData).subscribe((res: any) => {
      this.loader.stop();

      console.log(res['data'])
      this.data = res['data']
      if (res['success'] == true) {
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
      }
    }, (err) => {
      this.toastr.error("Please try after some time");
    });
  }
}

