import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApexOptions } from 'apexcharts';
import { ChartComponent, } from "ng-apexcharts";
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { EditlistComponent } from '../../user/editlist/editlist.component';
import { ViewlistComponent } from '../../user/viewlist/viewlist.component';
import { DeletedrawComponent } from '../deletedraw/deletedraw.component';
import { EditdrawComponent } from '../editdraw/editdraw.component';
import { ViewdrawComponent } from '../viewdraw/viewdraw.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-drawwallet',
  templateUrl: './drawwallet.component.html',
  styleUrls: ['./drawwallet.component.scss']
})
export class DrawwalletComponent implements OnInit {




  Status: any = ['Active', 'Inactive'];
  public loginForm: FormGroup;
submitted:boolean=false;
  data: any[];
  Data: any[];
  totalLength: any;
  page: number = 1
  status: any[];
  id: any;
  userDetails: any;
  showDatafound: boolean;
  username: any;
  email: any;
  datastatus: any;
  // username: any;
  // email: any;

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
    this.getdrawlist();
  //search api
  
  let jsonData = {
    // id: this.id,
    key: this.username,
    status:false,
  }
  
  this.httpService.getsearchdraw(jsonData).subscribe((res: any) => {
    console.log(res['data'])
    this.data = res['data']
  });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  // createForm() {
  //   this.loginForm = this.formBuilder.group({

  //     username: ['', Validators.required],
  //     email: ['', Validators.required],
  //   });
  // }
  
  


 
  editsymbol(drawEdit) {
    const dialogRef = this.dialog.open(EditdrawComponent, {
      width: '800px',
      height: '600px',
      data: { data: drawEdit, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdrawlist();
    });
  }
  deleteuser(drawdelete) {
    const dialogRef = this.dialog.open(DeletedrawComponent, {
      width: '600px',
      height: '600px',

      data: { data: drawdelete, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      setInterval(() => {
        this.getdrawlist();
      }, 3000);
    });
  }
  
  // textClear(){
  //   this.username =''; 
  //   this.email ='';
  // }
  add() {
    this.router.navigateByUrl('/user/adduser')

  }
  gotoview() {
    this.router.navigateByUrl('/drawwallet/viewdraw')
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
  getdrawlist() {

    this.httpService.getdrawlist().subscribe((res: any) => {

      console.log(res['data'])

      this.data = res['data']
      this.status = res['data']['status']
      this.id = res['data']['_id']
      console.log(this.id)
      this.totalLength = this.data.length;

      console.log(this.totalLength)
      if (this.data) {
        if (this.data.length > 0) {
      if (res['success'] == true) {
        this.showDatafound = true;
        // this.searchdraw();

        // this.httpService.toastr.success(res['message'], '', {
        //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        // });
      }
    }
  }
  else {
    this.showDatafound = false;
    console.log("No Data found");

  }


    // delete this.loginForm.value.email;
    // delete this.loginForm.value.username;
    // }, (err) => {
    //   this.toastr.error("Please try after some time");
    });
  }
  searchdraw() {
    if(this.username == ""){
      this.showDatafound = false;

      this.ngOnInit();
     }else{
       this.data = this.data.filter(res =>{
         return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
       })
     }
     console.log(this.data)
  }
 
  
  
}
