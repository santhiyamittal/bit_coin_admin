import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import { DeletepervComponent } from '../deleteperv/deleteperv.component';
import { EditpervComponent } from '../editperv/editperv.component';

@Component({
  selector: 'app-viewperv',
  templateUrl: './viewperv.component.html',
  styleUrls: ['./viewperv.component.scss']
})
export class ViewpervComponent implements OnInit {
  Status: any = ['Active', 'Inactive'];
  public loginForm: FormGroup;
  submitted:boolean=false;
  data: any[];
  Data: any[];
  totalLength: any;
  page: number []=[];
  status: any[];
  id: any;
  userDetails: any;
  showDatafound: boolean;
  username: any;
  email: any;
  drawdata: any;
  value:number;
  StartTime: any;
  count: any;
  totalprice: number = 0;
  totprice: number = 0;
    drawview: any[];
  // username: any;
  // email: any;
  
  constructor(
    public dialog: MatDialog,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,
    // public data: any,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
  ) {
    this.drawview = JSON.parse(localStorage.getItem("dataview"))
    this.id=this.drawview['_id']
  
  }
  
  ngOnInit(): void {
      this.getviewlist();
    
  
   this.createForm();
  
   console.log( this.id);
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
  
  
  textClear(){
    // this.username =''; 
    this.value = null;
  }
  
  
  editsymbol(drawEdit) {
    const dialogRef = this.dialog.open(EditpervComponent, {
      width: '800px',
      height: '600px',
      data: { data: drawEdit, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getviewlist();
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
        this.getviewlist();
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
    this.router.navigateByUrl('/drawwallet/Drawwallet')
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
  // getviewlist(){
  //   debugger
  //   this.httpService.getview().subscribe((res: any) => {
    
  //     console.log(res['data'])
  //     this.data = res['data']
  //     this.count=res['count']
  //     this.status = res['data']['status']
  
  //     console.log(this.count)
  
  
  //     console.log(this.totprice)
  //     if (this.data) {
  //       if (this.data.length > 0) {
  //     if (res['success'] == true) {
  //       this.showDatafound = true;
  
       
  //     }
  //   }
  // }
  // else {
  //   this.showDatafound = false;
  //   console.log("No Data found");
  
  // }
  //   });
  // }
  getviewlist() {
    // debugger
    let jsonData={
     
      id:this.id,
    }
        this.httpService.getviewdraw(jsonData).subscribe((res: any) => {
    
          console.log(res['data'])
          this.data = res['data']
          this.count=res['count']
          this.status = res['data']['status']
      
          console.log(this.count)
  
  
          console.log(this.totprice)
          if (this.data) {
            if (this.data.length > 0) {
          if (res['success'] == true) {
            this.showDatafound = true;
    
           
          }
        }
      }
      else {
        this.showDatafound = false;
        console.log("No Data found");
    
      }
        });
      }
    
    
      search(){
        // debugger
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
        // debugger
        this.submitted=true;
      let jsonData = {
        // id: this.id,
      status:this.value,
      }
      
      this.httpService.getdrawstatus(jsonData).subscribe((res: any) => {
        console.log(res['data'])
        this.data = res['data']
      });
      this.textClear();
      }

}
