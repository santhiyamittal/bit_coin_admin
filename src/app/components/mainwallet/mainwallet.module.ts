import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MarketcapComponent } from './marketcap/marketcap.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CryptoDashboardComponent } from './crypto-dashboard/crypto-dashboard.component';
import { MainwalletRouting } from './mainwallet-routing.module';
import { DistpagewalletComponent } from './distpagewallet/distpagewallet.component';
import { ColdpagewalletComponent } from './coldpagewallet/coldpagewallet.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [MarketcapComponent, CurrencyExchangeComponent, BuySellComponent, WalletComponent, TransactionsComponent, CryptoDashboardComponent, DistpagewalletComponent, ColdpagewalletComponent],
  imports: [
    CommonModule,
    MainwalletRouting,
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
export class MainWalletModule { }
