import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
@Component({
  selector: 'app-getlog',
  templateUrl: './getlog.component.html',
  styleUrls: ['./getlog.component.scss']
})
export class GetlogComponent implements OnInit {
  showDatafound:true
  data:any=[];
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
          this.data=res['data']['1630839361530']
  
           });
  }
}
