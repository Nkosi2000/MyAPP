import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterYourPharmacyPageRoutingModule } from './register-your-pharmacy-routing.module';

import { RegisterYourPharmacyPage } from './register-your-pharmacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterYourPharmacyPageRoutingModule
  ],
  declarations: [RegisterYourPharmacyPage]
})
export class RegisterYourPharmacyPageModule {}
