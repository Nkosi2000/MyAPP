import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { ForgotpasswordPage } from './pages/forgotpassword/forgotpassword.page';
import { ProfilePage } from './pages/profile/profile.page';
import { CardPaymentPage } from './pages/card-payment/card-payment.page';
import { OrderHistoryPage } from './pages/order-history/order-history.page';
import { FAQsPage } from './pages/faqs/faqs.page';
import { TermsANDconditionsPage } from './pages/terms-andconditions/terms-andconditions.page';
import { AboutMedDashPage } from './pages/about-med-dash/about-med-dash.page';
import { BecomeADriverPage } from './pages/become-a-driver/become-a-driver.page';
import { RegisterYourPharmacyPage } from './pages/register-your-pharmacy/register-your-pharmacy.page';
import { HelpPage } from './pages/help/help.page';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'card-payment',
    loadChildren: () => import('./pages/card-payment/card-payment.module').then( m => m.CardPaymentPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./pages/order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./pages/faqs/faqs.module').then( m => m.FAQsPageModule)
  },
  {
    path: 'terms-andconditions',
    loadChildren: () => import('./pages/terms-andconditions/terms-andconditions.module').then( m => m.TermsANDconditionsPageModule)
  },
  {
    path: 'about-med-dash',
    loadChildren: () => import('./pages/about-med-dash/about-med-dash.module').then( m => m.AboutMedDashPageModule)
  },
  {
    path: 'become-a-driver',
    loadChildren: () => import('./pages/become-a-driver/become-a-driver.module').then( m => m.BecomeADriverPageModule)
  },
  {
    path: 'register-your-pharmacy',
    loadChildren: () => import('./pages/register-your-pharmacy/register-your-pharmacy.module').then( m => m.RegisterYourPharmacyPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
