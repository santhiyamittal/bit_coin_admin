import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
@Component({
  selector: 'app-getlog',
  templateUrl: './getlog.component.html',
  styleUrls: ['./getlog.component.scss']
})
export class GetlogComponent implements OnInit {
  showDatafound:boolean
  data:any=[];
  dataa={ log: []};
log:any;
  constructor(
public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getlog();
  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  getlog(){
        this.httpService.getlog().subscribe((res: any) => {
          console.log(res['data'])
          this.data=res['data']
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
     var getKeysArray = Object.keys( this.data);
var getValueArray = Object.values( this.data);
this.log= getKeysArray[0] as string +  getValueArray[0] as string ;
            console.log(this.log);
           });
  }
}
