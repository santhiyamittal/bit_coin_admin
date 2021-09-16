import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthencationGuard } from 'src/app/shared/services/authencation.guard';
import { BackendpageComponent } from './backendpage/backendpage.component';
import { ChangepasspageComponent } from './changepasspage/changepasspage.component';
import { ConstantpageComponent } from './constantpage/constantpage.component';
import { CreatewithdrawComponent } from './createwithdraw/createwithdraw.component';
import { CreditpageComponent } from './creditpage/creditpage.component';
import { DangermessageComponent } from './dangermessage/dangermessage.component';
import { DeletelogComponent } from './deletelog/deletelog.component';
import { DocumentpageComponent } from './documentpage/documentpage.component';
import { EditwithdrawComponent } from './editwithdraw/editwithdraw.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { ExtrapageComponent } from './extrapage/extrapage.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GetlogComponent } from './getlog/getlog.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { QualificationpageComponent } from './qualificationpage/qualificationpage.component';
import { SettingpageComponent } from './settingpage/settingpage.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { SystemsettingpageComponent } from './systemsettingpage/systemsettingpage.component';
import { ViewwithdrawComponent } from './viewwithdraw/viewwithdraw.component';
import { WarningmessageComponent } from './warningmessage/warningmessage.component';
import { WithdrawpageComponent } from './withdrawpage/withdrawpage.component';


const routes: Routes = [
  {
    path: '',
    canActivate:[AuthencationGuard],

    children: [
      {
        path: 'empty-page',
        component: EmptypageComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'Constant',
        component: ConstantpageComponent
      },
      {
        path: 'Extrapage',
        component: ExtrapageComponent
      },
      {
        path: 'Settingpage',
        component: SettingpageComponent
      },  
      {
        path: 'Systemsetpage',
        component:SystemsettingpageComponent
      },
      {
        path: 'Changepasswpage',
        component:ChangepasspageComponent
      },
      {
        path: 'Emailpage',
        component:EmailpageComponent
      },
      {
        path: 'backendpage',
        component:BackendpageComponent
      },
      {
        path: 'creditpage',
        component:CreditpageComponent
      },
      {
        path: 'withdrawpage',
        component:WithdrawpageComponent
      },
      {
        path: 'viewwithdraw',
        component:ViewwithdrawComponent
      },
      {
        path: 'editwithdraw',
        component:EditwithdrawComponent
      },
      {
        path: 'createwithdraw',
        component:CreatewithdrawComponent
      },
      {
        path: 'qualification',
        component:QualificationpageComponent
      },
      {
        path: 'documenttype',
        component:DocumentpageComponent
      },
      {
        path: 'getlog',
        component:GetlogComponent
      },
      {
        path: 'deletelog',
        component:DeletelogComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  PagesRoutingModule { }