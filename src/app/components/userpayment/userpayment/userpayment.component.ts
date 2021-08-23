import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { EditlistComponent } from '../../user/editlist/editlist.component';
import { ViewlistComponent } from '../../user/viewlist/viewlist.component';
import { DeletepaymentComponent } from '../deletepayment/deletepayment.component';
import { ViewpaymentComponent } from '../viewpayment/viewpayment.component';

@Component({
  selector: 'app-userpayment',
  templateUrl: './userpayment.component.html',
  styleUrls: ['./userpayment.component.scss']
})
export class UserpaymentComponent implements OnInit {


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

  ) {
    
  }

  ngOnInit(): void {
    this.getpaymentlist();
 
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
  
  
  view(paymentdetails) {
    const dialogRef = this.dialog.open(ViewpaymentComponent, {
      width: '600px',
      height: '600px',
      data: { data: paymentdetails, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getpaymentlist();
      // this.searchuser();

    });
  }


 
  // editsymbol(drawEdit) {
  //   const dialogRef = this.dialog.open(EditdrawComponent, {
  //     width: '800px',
  //     height: '600px',
  //     data: { data: drawEdit, }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getpaymentlist();
  //   });
  // }
  deleteuser(drawdelete) {
    const dialogRef = this.dialog.open(DeletepaymentComponent, {
      width: '600px',
      height: '600px',

      data: { data: drawdelete, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      setInterval(() => {
        this.getpaymentlist();
      }, 3000);
    });
  }
  
  // textClear(){
  //   this.username =''; 
  //   this.email ='';
  // }
// view() {
//     this.router.navigateByUrl('/payment/userpayment')

//   }
gotoadd(){
  this.router.navigateByUrl('/payment/addpayment')
}
gotoinactive(){
  this.router.navigateByUrl('/payment/inactivepayment')

}
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  
  getpaymentlist() {
// debugger
    this.httpService.getpaymentlist().subscribe((res: any) => {

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
      }
    }
  }
  else {
    this.showDatafound = false;
    console.log("No Data found");

  }

    });
  }
  searchpayment() {
    if(this.username == ""){
      this.showDatafound = false;

      this.search();
     }else{
       this.data = this.data.filter(res =>{
         return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
       })
     }
     console.log(this.data)
  }
 search(){
  
  let jsonData = {
    // id: this.id,
    key: this.username,
    // status:false,
  }
  
  this.httpService.getsearchpayment(jsonData).subscribe((res: any) => {
    console.log(res['data'])
    this.data = res['data']
  });
 }
}

//   constructor(
//     public dialog: MatDialog,
//     private router: Router

//   ) { 
    
//   }

//   ngOnInit(): void {
//   }
//   addsymbol() {
//     const dialogRef = this.dialog.open(ViewlistComponent, {
//       width: '600px',
//       height: '400px',
//       // data: { formtype: 'addStrike', data:this.datadetails,},
//     });
//     dialogRef.afterClosed().subscribe((result) => {
//       // this.getOptionStrike();
//     });
//   }
//   warningAlert() {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Are you sure ?',
//       text: 'Your will not be able to recover this imaginary file!',
//       showCancelButton: true,
//       confirmButtonColor: '#6259ca',
//       cancelButtonColor: '#6259ca',
//       confirmButtonText: 'Yes, delete it!',
//       reverseButtons: true

//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: 'Deleted!',
//           text: 'Your imaginary file has been deleted.',
//           icon: 'success',
//           confirmButtonColor: '#6259ca'
//         })
//       }
//     })
//   }

//   editsymbol() {
//     const dialogRef = this.dialog.open(EditlistComponent, {
//       width: '600px',
//       height: '600px',
//       // data: { formtype: 'addStrike', data:this.datadetails,},
//     });
//     dialogRef.afterClosed().subscribe((result) => {
//       // this.getOptionStrike();
//     });
//   }
 

//   gotohome() {
//     this.router.navigateByUrl('/dashboard/dashboard')
//   }
// }
