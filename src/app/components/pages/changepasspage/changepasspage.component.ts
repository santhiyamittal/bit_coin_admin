import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepasspage',
  templateUrl: './changepasspage.component.html',
  styleUrls: ['./changepasspage.component.scss']
})
export class ChangepasspageComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
