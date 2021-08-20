import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialog } from '@angular/material/dialog';
import { EditdrawComponent } from '../editdraw/editdraw.component';
import { DeletedrawComponent } from '../deletedraw/deletedraw.component';

@Component({
  selector: 'app-viewdraw',
  templateUrl: './viewdraw.component.html',
  styleUrls: ['./viewdraw.component.scss']
})
export class ViewdrawComponent implements OnInit {
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

StartTime: any;
count: any;
totalprice: number = 0;
totprice: number = 0;
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
  this.getviewlist();
 this.createForm();
 var userDetails = JSON.parse(localStorage.getItem("id"));
 this.userDetails = userDetails;
 console.log( this.userDetails);
}
get loginFormControl() {
  return this.loginForm.controls;
}
createForm() {
  this.loginForm = this.formBuilder.group({

    username: ['', Validators.required],
    email: ['', Validators.required],
  });
}





editsymbol(drawEdit) {
  const dialogRef = this.dialog.open(EditdrawComponent, {
    width: '800px',
    height: '600px',
    data: { data: drawEdit, }
  });
  dialogRef.afterClosed().subscribe((result) => {
    this.getviewlist();
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
getviewlist() {
  // debugger
      this.httpService.getdrawlist().subscribe((res: any) => {
  
        console.log(res['data'])
        this.drawdata = res['data']
        this.count=res['count']
        this.status = res['data']['status']
    
        console.log(this.count)
        this.totalLength = this.drawdata.length;
  for(let idx of this.drawdata){
        this.totalprice += +idx['winning_price']
        console.log(this.totalprice)

  }

        console.log(this.totprice)
        if (this.drawdata) {
          if (this.drawdata.length > 0) {
        if (res['success'] == true) {
          this.showDatafound = true;
  
         
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
  
searchview() {
  debugger
  this.submitted = true;
  
  let jsonData = {
    // id: this.id,
    key: this.loginForm.value.username,
   status:true,
  }
  
  this.httpService.getsearchdraw(jsonData).subscribe((res: any) => {
    this.loader.stop();
   
    console.log(res['data'])
    this.data = res['data']
    
      
    if (res['success'] == true) {
      this.showDatafound = true;
      // this.httpService.toastr.success(res['message'], '', {
      //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      // });
    }

  // }, (err) => {
  //   this.toastr.error("Please try after some time");
  // this.textClear();
  });
//   if( this.email =''){
// this.getdrawlist();

//   }

}
}
