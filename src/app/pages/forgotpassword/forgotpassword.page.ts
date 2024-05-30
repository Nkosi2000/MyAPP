import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email: string = "";

  constructor(private toastController: ToastController) { }

  async onSubmit() {
    if (this.email) {
      // Simulate an API call to reset the password
      // Replace with actual API call logic
      console.log('Password reset email sent to:', this.email);
      const toast = await this.toastController.create({
        message: 'Password reset link has been sent to your email.',
        duration: 2000,
        color: 'success'
      });
      await toast.present();
    }
  }

  ngOnInit() {
  }

}
