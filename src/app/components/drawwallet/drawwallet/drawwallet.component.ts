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
  drawdata: any [];
  startTime: any [];
  StartTime: any;
  EndTime: string [];
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
   this.createForm();
  
  }
  ngAfterViewInit() {
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  createForm() {
    this.loginForm = this.formBuilder.group({

      username: ['', Validators.required],
      status: ['', Validators.required],
    });
   
  }
  
  

  gotoview(){
    this.router.navigateByUrl('/drawwallet/viewdraw')

  }
 
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
  deleteuser(userdelete) {
    const dialogRef = this.dialog.open(DeletedrawComponent, {
      width: '600px',
      height: '600px',

      data: { data: userdelete, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      setInterval(() => {
        this.getdrawlist();
      }, 3000);
    });
  }
  
  textClear(){
    this.username =''; 
  }
 
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  getdrawlist() {
// debugger
    this.httpService.getdrawlist().subscribe((res: any) => {

      console.log(res['data'])
      this.drawdata = res['data']
      this.status = res['data']['status']
      this.startTime = res['data']['start_time']
      this.id=res['data']['start_time']
      console.log(this.status);
      this.totalLength = this.drawdata.length;
      var datePipe = new DatePipe("en-US");

      this.StartTime = datePipe.transform(res['data']['start_time'],'yyyy-mm-dd:HH:mm:ss');
      // this.EndTime = datePipe.transform(res['data']['end_time'],'yyyy-mm-dd:HH:mm:ss');
      
      console.log(this.StartTime)
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

  this.searchdraw();

    });
  }
  searchdraw() {
    debugger
    this.submitted = true;
    
    let jsonData = {
      key: this.loginForm.value.username,

    }
    
    this.httpService.getsearchdraw(jsonData).subscribe((res: any) => {
      this.loader.stop();
     
      console.log(res['data'])
      this.data = res['data']
      
        
      if (res['success'] == true) {
        this.showDatafound = true;
      
      }
  
 
    this.textClear();
    });
    if( this.username =''){
  this.getdrawlist();

    }

  }

}
