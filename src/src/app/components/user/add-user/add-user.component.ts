import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public selectForm: FormGroup;

  constructor(
    private router: Router,
    private toast: ToastrService,
    private fb: FormBuilder,



  ) { }

  ngOnInit(): void {
    this.selectForm = this.fb.group({
      text: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^([a-zA-Z\s]+)$')
      ])],
      number: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^([0-9]+)$')
      ])]
    })
  }

  user(){
    setInterval(() => {
    this.router.navigateByUrl('/user/userlist')
  }, 1500);
  }
  inactive(){
    this.router.navigateByUrl('/user/inactive')
  }
  
 
  get inputFormControl() {
    return this.selectForm.controls;
  }
  selectSubmit() {
    if (this.selectForm.invalid) {
      this.toast.success("Successfully Submitted !")
    } else if (this.selectForm.invalid) {
      this.toast.error("Please Fill the required details !")
    }
  }
}
