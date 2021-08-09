import { Component, OnInit, Pipe } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { EditlistComponent } from '../editlist/editlist.component';
import { ViewlistComponent } from '../viewlist/viewlist.component';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({    
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})


export class UserlistComponent implements OnInit {
 data :any[];
  Data: any[];
totalLength:any;
page: number = 1

 constructor(
    public dialog: MatDialog,
    public toastr: ToastrService,

    // private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,

    public httpService: HttpService,
    private loader: NgxUiLoaderService,

  ) { 
    
  }

  ngOnInit(): void {
    this.getUseractive()
  }
  addsymbol() {
    const dialogRef = this.dialog.open(ViewlistComponent, {
      width: '600px',
      height: '400px',

      // data: { formtype: 'addStrike', data:this.datadetails,},
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.getOptionStrike();
    });
  }
  warningAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'Your will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonColor: '#6259ca',
      cancelButtonColor: '#6259ca',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#6259ca'
        })
      }
    })
  }

  editsymbol() {
    const dialogRef = this.dialog.open(EditlistComponent, {
      width: '600px',
      height: '600px',
      // data: { formtype: 'addStrike', data:this.datadetails,},
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.getOptionStrike();
    });
  }
  add(){
    this.router.navigateByUrl('/user/adduser')

  }
  inactive(){
    this.router.navigateByUrl('/user/inactive')

  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  getUseractive(){
  
    this.httpService.getUser().subscribe((res: any) => {
      this.loader.stop();
     
      console.log(res['data'])
      this.data= res['data']
this.totalLength=this.data.length;
console.log(this.totalLength)
      if (res['success'] == true) {
        // this.toastr.success(res['StatusOfRequest']['Message'], '', { closeButton: true, timeOut: 5000 });
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('custom/twofactor');
      }
    }, (err) => {
      this.toastr.error("Please try after some time");
    });
  }

  }

