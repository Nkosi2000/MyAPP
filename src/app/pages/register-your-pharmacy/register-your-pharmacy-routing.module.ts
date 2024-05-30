import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterYourPharmacyPage } from './register-your-pharmacy.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterYourPharmacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterYourPharmacyPageRoutingModule {}
