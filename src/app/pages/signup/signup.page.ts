import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireauthService } from 'src/app/services/fireauth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  firstname: string = '';
  lastname: string = '';
  idnum: string = '';
  homeaddress: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmpassword: string = '';

  constructor(
    private router: Router,
    private authServ: FireauthService,
    private toast: ToastController
  ) {}

  async showToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toast.create({
      message: message,
      duration: 5000,
      color: color,
    });
    await toast.present();
  }

  checkSignup(): boolean {
    if (this.firstname === '') {
      this.showToast('Please Enter Your First Name', 'danger');
      return false;
    }
    if (this.lastname === '') {
      this.showToast('Please Enter Your Last Name', 'danger');
      return false;
    }
    if (this.idnum === '') {
      this.showToast('Please Enter Your ID Number of 13 Digits', 'danger');
      return false;
    }
    if (this.email === '') {
      this.showToast('Please Enter Your Email', 'danger');
      return false;
    }
    if (this.phone === '') {
      this.showToast('Please Enter Your Phone Number', 'danger');
      return false;
    }
    if (this.homeaddress === '') {
      this.showToast('Please Enter Your Home Address', 'danger');
      return false;
    }
    if (this.password === '') {
      this.showToast('Please Enter Your Password', 'danger');
      return false;
    }
    if (this.confirmpassword === '') {
      this.showToast('Please Confirm Your Password', 'danger');
      return false;
      }
      // if (this.password !== this.confirmpassword) {
      //   this.showToast('Passwords do not match!!');
      //   return false;
      // }
      return true;
      
      }
      
      register() {
        if (this.checkSignup()) {
      //     if (this.password !== this.confirmpassword) {
      //       this.showToast('Passwords do not match', 'danger');
      //       return;
      // }

      this.authServ.signup(this.email, this.password);

      // this.authServ.signup(
      //   this.email,
      //   this.password,
      //   this.firstname,
      //   this.lastname,
        //this.idnum,
        //this.homeaddress,
        //this.phone
      //);
    }
  }
}
