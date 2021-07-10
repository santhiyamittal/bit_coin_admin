import { Component, OnInit } from '@angular/core';
import { SimpleDataTable } from 'src/app/shared/data/tables/data-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useractive',
  templateUrl: './useractive.component.html',
  styleUrls: ['./useractive.component.scss']
})
export class UseractiveComponent implements OnInit {
  public simpleData = SimpleDataTable;

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
