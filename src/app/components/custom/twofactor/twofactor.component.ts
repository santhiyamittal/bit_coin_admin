import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twofactor',
  templateUrl: './twofactor.component.html',
  styleUrls: ['./twofactor.component.scss']
})
export class TwofactorComponent implements OnInit {

  submitted = false;
  submitted1 = false;
  submitted2 = false;
  public Otp: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.Otp = this.fb.group({
    otp : [null, Validators.compose([
      Validators.required,
      Validators.pattern('^([0-9]+)$')
    ])]
  })
  }
  get otpFormControl() {
    return this.Otp.controls;
  }
getdashboard(){
  this.router.navigateByUrl('/dashboard/dashboard')
}
}
