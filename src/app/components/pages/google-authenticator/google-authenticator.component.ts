import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-google-authenticator',
  templateUrl: './google-authenticator.component.html',
  styleUrls: ['./google-authenticator.component.scss']
})
export class GoogleAuthenticatorComponent implements OnInit {
  firstFormGroup: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,

  ) { }

  ngOnInit(): void {

    //Archwizard Content
    this.firstFormGroup = this.fb.group({
      email:['', [Validators.required, Validators.minLength(6)]],
      AuthenticatorCode: ['', [Validators.required, Validators.minLength(6)]],
    });
   

  }

  showSuccess() {
    this.toastr.success('Successfully Copied!');
  }
  gotosec(){
    this.router.navigateByUrl('/pages/security')

  }
}
