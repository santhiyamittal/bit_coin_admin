import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { DrawwalletComponent } from './drawwallet/drawwallet.component';
import { DrawWalletRoutingModule } from './drawwallet-routing.module';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AdddrawComponent } from './adddraw/adddraw.component';
import { ViewdrawComponent } from './viewdraw/viewdraw.component';



@NgModule({
  declarations: [DrawwalletComponent, AdddrawComponent, ViewdrawComponent],
  imports: [
    CommonModule,
  DrawWalletRoutingModule,
    ChartsModule,
    NgApexchartsModule,
    NgSelectModule,
    NgbModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    MatDialogModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
  ],
  providers: [
    ToastrService
  ]
})
export class DrawWalletModule { }
