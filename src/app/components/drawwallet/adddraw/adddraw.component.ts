import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-adddraw',
  templateUrl: './adddraw.component.html',
  styleUrls: ['./adddraw.component.scss']
})
export class AdddrawComponent implements OnInit {
  User: any;
  status: any;
  createdat: any;
  loginForm: FormGroup;
  id: any;
  submitted: boolean;
  endTime: any;
  starttime: any;
  winningprice: any;
  startTime: any;
  pipe = new DatePipe("en-");
  StartTime: string;
  EndTime: string;
  price:any;
  firstprice:any;
  coldprice:any;
  secondprice:any;
  fourthprice:any;
  thridprice:any;
index:any;
  drawid:number=0;
  touched: boolean;
  draw: any;

  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
    private router: Router
  ) { 
  
    // for(let i = 1; i <= 10; i++){
     
    //   this.drawid=[i];
    //   console.log(this.drawid);
    // }
    this.drawid = JSON.parse(localStorage.getItem("drawid"))
    this.draw ='Draw#' +this.drawid

    // this.drawid=this.drawid+1;
  }
  ngOnInit(): void {
    // this.drawid="Draw#1"
debugger
    try{
      this.drawid = JSON.parse(localStorage.getItem("drawid"))
      if(this.drawid==null){
        this.drawid=0;
        localStorage.setItem("drawid", JSON.stringify(this.drawid));
        this.draw ='Draw#' +this.drawid

      }
    }
    catch{
      this.drawid=0;
      this.draw ='Draw#' +this.drawid

      localStorage.setItem("drawid", JSON.stringify(this.drawid));

    }
    this.createForm();
    // var datePipe = new DatePipe("en-US");

    // this.StartTime = datePipe.transform(this.startTime,'yyyy-mm-dd:HH:mm:ss');
    // this.EndTime = datePipe.transform(this.endTime,'yyyy-mm-dd:HH:mm:ss');

    console.log(this.StartTime)
    // console.log( 'Tick time - ' +this.drawid)
    // this.draw ='Draw#' +this.drawid

  }
 
 
  createForm() {
    this.loginForm = this.formBuilder.group({

      'draw':['', Validators.required],
      'username':['', Validators.required],
      'StartTime': ['', [Validators.required,this.dateRangeValidator]],
      'EndTime':['', [Validators.required,this.dateRangeValidator]],
      'winningprice': ['', Validators.required],
      'price':['', Validators.required],
      'coldprice':['', [Validators.required, Validators.maxLength(8)]],
      'firstprice':['', Validators.required],
      'secondprice':['',Validators.required],
      'thridprice':['', Validators.required],
      'fourthprice':['', Validators.required],

    },
    );
  }
  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {
    let invalid = false;
    const from = this.loginForm && this.loginForm.get("StartTime").value;
    const to = this.loginForm && this.loginForm.get("EndTime").value;
    if (from && to) {
      invalid = new Date(from).valueOf() > new Date(to).valueOf();
    }
    return invalid ? { invalidRange: { from, to } } : null;
  };
  get loginFormControl(){
    return this.loginForm.controls;
  }
  gotodraw(){
    this.router.navigateByUrl('drawwallet/Drawwallet')
  
  }

  onSubmit() {

    debugger
    this.submitted = true;
  
    let jsonData = {
      // drawid:this.loginForm.value.draw,
      name:this.loginForm.value.username,
      winning_price:this.loginForm.value.winningprice,
      price:this.loginForm.value.price,
      start_time:this.loginForm.value.StartTime,
      end_time:this.loginForm.value.EndTime,
      percentage_1:this.loginForm.value.firstprice,
      percentage_2:this.loginForm.value.secondprice,
      percentage_3:this.loginForm.value.thridprice,
      percentage_4:this.loginForm.value.fourthprice,
      cold_wallet_percentage:this.loginForm.value.coldprice,
    }
    this.StartTime =this.loginForm.value.StartTime
    this.EndTime =this.loginForm.value.EndTime

    if (this.StartTime <= this.EndTime) {
  
    this.loader.start();
    this.httpService.getcreatedraw(jsonData).subscribe(res => {

      this.loader.stop();
      // this.appComponent.startWatching();
      if (res['success'] == true) {
        this.router.navigateByUrl('drawwallet/Drawwallet')

      } else if (res['success'] == false) {
        // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
        // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
        this.httpService.toastr.error(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
      }
    },
    (err) => {
      // this.loader.stop();
      this.toastr.error("Please fill the Details");
      // this.httpService.errorCallBack(false);
    });
  }
  }
  addfunction(){
    if(this.loginForm.value.EndTime.length>0){
    this.drawid=this.drawid+1
        localStorage.setItem("drawid", JSON.stringify(this.drawid));
        this.draw ='Draw#' +this.drawid
    }
      }
}
