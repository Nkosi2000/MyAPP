import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email: string = "";

  constructor(private router: Router, private toastController: ToastController) { }

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

  goToFORGOTPASSWORD(){
    {this.router.navigate(['/forgotpassword']).then(() => {window.location.reload();});  
  }}
  goToSIGNUP(){
    {this.router.navigate(['/signup']).then(() => {window.location.reload();});  
  }}

}
