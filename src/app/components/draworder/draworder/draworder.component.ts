import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { EditlistComponent } from '../../user/editlist/editlist.component';
import { ViewlistComponent } from '../../user/viewlist/viewlist.component';
import { DeletepervComponent } from '../deleteperv/deleteperv.component';
import { EditpervComponent } from '../editperv/editperv.component';

@Component({
  selector: 'app-draworder',
  templateUrl: './draworder.component.html',
  styleUrls: ['./draworder.component.scss']
})
export class DraworderComponent implements OnInit {

 
  public loginForm: FormGroup;
submitted:boolean=false;
  data: any[];
  Data: any[];
  totalLength: any;
  page: number = 1
  status:any[];
  id: any;
  userDetails: any;
  showDatafound: boolean;
  username: any;
  email: any;
  datastatus: any;
  value:number;
  // username: any;
  // email: any;
  
  constructor(
    public dialog: MatDialog,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public Service: HttpService,

    public httpService: HttpService,
    private loader: NgxUiLoaderService,

  ) {
    
  }

  ngOnInit(): void {
    this.getdrawlist();
 this.createForm();
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
 
  createForm() {
    this.loginForm = this.formBuilder.group({

      username: ['', Validators.required],
      value: ['', Validators.required],
    });
  }
  
  


 
  editsymbol(drawEdit) {
    const dialogRef = this.dialog.open(EditpervComponent, {
      width: '800px',
      height: '600px',
      data: { data: drawEdit, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdrawlist();
    });
  }
  deleteuser(drawdelete) {
    const dialogRef = this.dialog.open(DeletepervComponent, {
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
  textClear(){
    // this.username =''; 
    this.value = null;
  }
  add() {
    this.router.navigateByUrl('/user/adduser')

  }
  gotoview(drawview) {
    this.router.navigateByUrl('/draworder/viewlist')
        localStorage.setItem("dataview", JSON.stringify(drawview));

  }
  gotohome() {
    this.router.navigateByUrl('/drawwallet/Drawwallet')
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

    this.httpService.getdrawpervlist().subscribe((res: any) => {

      console.log(res['data'])

      this.data = res['data']
      // this.status = res['data']['status']
      this.id = res['data']['_id']
      console.log(this.id)
      this.totalLength = this.data.length;

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
    },
    (err) => {
      this.Service.errorCallBack(false);
    });
  }
  // searchdraw() {
  //   if(this.username == ""){
  //     this.showDatafound = false;

  //     this.search();
  //    }else{
  //      this.data = this.data.filter(res =>{
  //        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
  //      })
  //    }
  //    console.log(this.data)
  // }
 
  
  search(){
    debugger
     //search api
  this.submitted=true;
  let jsonData = {
    // id: this.id,
    key: this.username,
  }
  
  this.httpService.getsearchdraw(jsonData).subscribe((res: any) => {
    console.log(res['data'])
    this.data = res['data']
    // this.drawstatus();
  });
  
  // this.ngOnInit();
  if(this.username == undefined){
    this.drawstatus();
  }

  }
  drawstatus(){
    debugger
    this.submitted=true;
  let jsonData = {
    // id: this.id,
  status:this.value,
  }
  
  this.httpService.getdrawstatus(jsonData).subscribe((res: any) => {
    console.log(res['data'])
    this.data = res['data']
  });
  if(this.value == null){
    this.getdrawlist();
  }
  this.textClear();
 
  }
}
