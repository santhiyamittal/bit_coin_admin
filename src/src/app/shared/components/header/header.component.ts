import { Component, OnInit, AfterViewInit , Inject, OnChanges, Renderer2 } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavService } from '../../services/nav.service';
import { DOCUMENT } from '@angular/common';
import { FormControl } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , AfterViewInit {

  public isCollapsed = true;
  public isSidebar = false;
  public config: any = {};
  layoutSubscription: Subscription;
  toggleClass = "fe fe-maximize";
  toggleTheme = new FormControl(false);

  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
    private _renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public toastr: ToastrService,

    public httpService: HttpService,
  ) {
    this.layoutSubscription = layoutService.changeEmitted.subscribe(
      direction => {
        const dir = direction.direction;
      }
    )
   
  }
 

  ngOnInit(): void {
    
  }
  
  categories = [
    { id: 1, name: 'English' },
    { id: 2, name: 'عربى ' },
    // { id: 3, name: 'Microsoft Project' },
    // { id: 4, name: 'Risk Management' },
    // { id: 5, name: 'Team Building' },
  ]

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  toggleSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.main-body').classList.add('main-sidebar-hide');
    }
    else {
      document.querySelector('.main-body').classList.remove('main-sidebar-hide');
    }
  }

  toggleMobileSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.main-body').classList.add('main-sidebar-show');
    }
    else {
      document.querySelector('.main-body').classList.remove('main-sidebar-show');
    }
  }

  ngAfterViewInit() {
    const sidebar = document.querySelector('.side-menu');
    let ps = new PerfectScrollbar(sidebar);
  }
  logoutUser() {
    
    if (
      localStorage.getItem("userid") != null ||
      localStorage.getItem("userid") != undefined
    ) {
      var userEmail = JSON.parse(localStorage.getItem("userid"));
      sessionStorage.setItem("previousLogin", JSON.stringify(userEmail));
console.log(userEmail );
      // this.loader.stop();
      let jsonObj = {
        userid: userEmail,
      };
      this.httpService.logoutSession(jsonObj).subscribe((resp) => {
        localStorage.clear();
        this.toastr.error("User has been logged off", "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
        this.router.navigateByUrl("login");
      });
    }
  }
}

