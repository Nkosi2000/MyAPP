import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsANDconditionsPageRoutingModule } from './terms-andconditions-routing.module';

import { TermsANDconditionsPage } from './terms-andconditions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsANDconditionsPageRoutingModule
  ],
  declarations: [TermsANDconditionsPage]
})
export class TermsANDconditionsPageModule {}
