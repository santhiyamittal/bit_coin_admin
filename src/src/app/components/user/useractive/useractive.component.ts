import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable2, SimpleDataTable } from 'src/app/shared/data/tables/data-table';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-useractive',
  templateUrl: './useractive.component.html',
  styleUrls: ['./useractive.component.scss']
})
export class UseractiveComponent implements OnInit {
  public simpleData = SimpleDataTable;
  public tableData = DataTable2;
  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: false,
      fixedHeight: false,
    });
  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
