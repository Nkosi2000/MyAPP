import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsANDconditionsPage } from './terms-andconditions.page';

const routes: Routes = [
  {
    path: '',
    component: TermsANDconditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsANDconditionsPageRoutingModule {}
