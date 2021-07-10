import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { DangermessageComponent } from './dangermessage/dangermessage.component';
import { WarningmessageComponent } from './warningmessage/warningmessage.component';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap'
import { PageMsgRoutingModule } from './page-msg-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConstantpageComponent } from './constantpage/constantpage.component';
import { ExtrapageComponent } from './extrapage/extrapage.component';
import { SettingpageComponent } from './settingpage/settingpage.component';
import { SystemsettingpageComponent } from './systemsettingpage/systemsettingpage.component';
import { ChangepasspageComponent } from './changepasspage/changepasspage.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { ToastrService } from 'ngx-toastr';
import { BackendpageComponent } from './backendpage/backendpage.component';
import { CreditpageComponent } from './creditpage/creditpage.component';
import { DocspageComponent } from './docspage/docspage.component';
import { WithdrawpageComponent } from './withdrawpage/withdrawpage.component';
import { QualificationpageComponent } from './qualificationpage/qualificationpage.component';
import { DocumentpageComponent } from './documentpage/documentpage.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [ProfileComponent, InvoiceComponent, PricingComponent, GalleryComponent, FaqsComponent, SuccessmessageComponent, DangermessageComponent, WarningmessageComponent, EmptypageComponent, ConstantpageComponent, ExtrapageComponent, SettingpageComponent, SystemsettingpageComponent, ChangepasspageComponent, EmailpageComponent, BackendpageComponent, CreditpageComponent, DocspageComponent, WithdrawpageComponent, QualificationpageComponent, DocumentpageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PageMsgRoutingModule,
    NgbModule,
    GalleryModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
