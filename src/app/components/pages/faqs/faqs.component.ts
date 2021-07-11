import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
