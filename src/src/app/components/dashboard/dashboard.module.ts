import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatDialogModule } from '@angular/material/dialog';


// import { MatTabsModule, MatListModule, MatBadgeModule, MatCardModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSortModule, MatDialogModule, MatSidenavModule, MatTableModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    ChartsModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot(),
  ]
})
export class DashboardModule { }
