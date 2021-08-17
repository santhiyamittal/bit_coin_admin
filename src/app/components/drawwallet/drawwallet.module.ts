import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { EditdrawComponent } from './editdraw/editdraw.component';
import { DeletedrawComponent } from './deletedraw/deletedraw.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [DrawwalletComponent, AdddrawComponent, ViewdrawComponent, EditdrawComponent, DeletedrawComponent],
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
    NgxPaginationModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
  ],
  providers: [
    ToastrService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class DrawWalletModule { }
