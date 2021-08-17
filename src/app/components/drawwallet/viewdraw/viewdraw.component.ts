import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-viewdraw',
  templateUrl: './viewdraw.component.html',
  styleUrls: ['./viewdraw.component.scss']
})
export class ViewdrawComponent implements OnInit {
  drawdata: any;
  status: any;
  totalLength: any;
  showDatafound: boolean ;
  StartTime: any;
  count: any;
  totalprice: number = 0;
  totprice: number = 0;

  constructor(
    private router: Router,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private routeTo: Router,

    public httpService: HttpService,
    private loader: NgxUiLoaderService,
  ) { }

  ngOnInit(): void {
    this.getviewlist();
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
  gotoview(){
    this.router.navigateByUrl('/drawwallet/Drawwallet')

  }
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
 
}
