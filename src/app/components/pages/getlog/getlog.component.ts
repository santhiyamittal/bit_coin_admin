import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getlog',
  templateUrl: './getlog.component.html',
  styleUrls: ['./getlog.component.scss']
})
export class GetlogComponent implements OnInit {
  showDatafound:true
  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
