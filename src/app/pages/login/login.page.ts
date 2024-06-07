import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FireauthService } from 'src/app/services/fireauth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authServ: FireauthService,
    private fireAuth: AngularFireAuth,
    private toast: ToastController
  ) { }

  ngOnInit() {}

  async showToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toast.create({
      message: message,
      duration: 5000,
      color: color,
    });
    await toast.present();
  }

  checkLogin(): boolean {
    if (this.email === '') {
      this.showToast('Please Enter Your Email', 'danger');
      return false;
    }
    if (this.password === '') {
      this.showToast('Please Enter Your Password', 'danger');
      return false;
    }
    return true;
  }

  login() {
    if (this.checkLogin()) {
      this.authServ.login(this.email, this.password);
      this.email = '';
      this.password = '';
    }
  }

  goToSIGNUP() {
    this.router.navigate(['/signup']);
  }

  goToFORGOTPASSWORD() {
    this.router.navigate(['/forgotpassword']);
    }

  goToHOMESECOND() {
    if (this.checkLogin()) {
      this.authServ.login(this.email, this.password);
      this.email = '';
      this.password = '';
    }
  }

  goToHOMEpage() {
    this.router.navigate(['/home']);
  }

  goHomePage() {
    this.router.navigate(['/home']);
  }

   // Added the Google Login Function
   /*googleLogin() {
    this.authServ.googleLogin();
  }*/
}
