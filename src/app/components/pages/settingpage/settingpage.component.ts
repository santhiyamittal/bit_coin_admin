import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settingpage',
  templateUrl: './settingpage.component.html',
  styleUrls: ['./settingpage.component.scss']
})
export class SettingpageComponent implements OnInit {

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



  //Angular Editor
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }



}
