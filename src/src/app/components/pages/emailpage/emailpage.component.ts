import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emailpage',
  templateUrl: './emailpage.component.html',
  styleUrls: ['./emailpage.component.scss']
})
export class EmailpageComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
