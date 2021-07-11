import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-withdrawpage',
  templateUrl: './withdrawpage.component.html',
  styleUrls: ['./withdrawpage.component.scss']
})
export class WithdrawpageComponent implements OnInit {

  constructor(
    private router: Router,
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  copy(text: string) {
    this._clipboardService.copy(text)
  }

  showSuccess() {
    this.toastr.success('Successfully Copied!');
  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
