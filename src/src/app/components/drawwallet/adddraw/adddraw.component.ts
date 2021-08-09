import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddraw',
  templateUrl: './adddraw.component.html',
  styleUrls: ['./adddraw.component.scss']
})
export class AdddrawComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  gotodraw(){
    this.router.navigateByUrl('/drawwallet/Drawwallet')
  
  }

}
