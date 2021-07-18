import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['demo@demo.com', [Validators.required, Validators.email]],
      password: ['test123', Validators.required]
    })
  }

  get loginFormControl(){
    return this.loginForm.controls;
  }

  Submit(){
    if (this.loginForm.controls['username'].value === "demo@demo.com" && this.loginForm.controls['password'].value === "test123")
    {
      this.router.navigate(['/custom/twofactor']);
    }
  }
  goToForgetPassword() {
    this.router.navigateByUrl('/custom/forgot-password')
  }
}
