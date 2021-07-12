import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-backendpage',
  templateUrl: './backendpage.component.html',
  styleUrls: ['./backendpage.component.scss']
})
export class BackendpageComponent implements OnInit {

  
  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }
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
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
