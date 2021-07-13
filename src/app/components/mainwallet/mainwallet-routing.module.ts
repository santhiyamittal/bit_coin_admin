import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccumulatefundsComponent } from './accumulatefunds/accumulatefunds.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { ColdpagewalletComponent } from './coldpagewallet/coldpagewallet.component';
import { CryptoDashboardComponent } from './crypto-dashboard/crypto-dashboard.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { DistpagewalletComponent } from './distpagewallet/distpagewallet.component';
import { MarketcapComponent } from './marketcap/marketcap.component';
import { PaymentTranscationComponent } from './paytranscation/payment-transcation/payment-transcation.component';
import { SubwalletComponent } from './subwallet/subwallet.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WalletComponent } from './wallet/wallet.component';


const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'buy-sell',
      //   component: BuySellComponent
      // },
      {
        path: 'crypto-dashboard',
        component: CryptoDashboardComponent
      },
      // {
      //   path: 'currency-exchange',
      //   component: CurrencyExchangeComponent
      // },
      // {
      //   path: 'marketcap',
      //   component: MarketcapComponent
      // },
      // {
      //   path: 'transactions',
      //   component: TransactionsComponent
      // },
      {
        path: 'coldwallet',
        component: ColdpagewalletComponent
      },
      {
        path: 'distwallet',
        component: DistpagewalletComponent
      },
      {
        path: 'paytranscation',
        component: PaymentTranscationComponent
      },
      {
        path: 'accumfund',
        component: AccumulatefundsComponent
      },
      {
        path: 'subwallet',
        component: SubwalletComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainwalletRouting { }