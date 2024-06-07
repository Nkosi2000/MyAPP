import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
//import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private toast: ToastController,
    //private firestore: AngularFirestore
  ) { }

  // Login Function
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      async () => {
        localStorage.setItem('token', 'true');
        await this.showToast('User Successfully Login', 'success');
        this.router.navigate(['/home-second']).then(() => window.location.reload());
      },
      async (err) => {
        await this.showToast('User Not Found', 'danger');
        this.router.navigate(['/signup']);
      }
    );
  }

   // Google Login Function
   /*async googleLogin() {
    try {
      const res = await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      if (res.user) {
        this.firestore.collection('users').doc(res.user.uid).set({
          email: res.user.email,
          displayName: res.user.displayName,
          uid: res.user.uid,
          provider: 'google',
          createdAt: new Date(),
        }, { merge: true });
        localStorage.setItem('token', 'true');
        this.showToast('Google Login Successful', 'success');
        this.router.navigate(['/home-second']);
      }
    } catch (err) {
      this.showToast('Google Login Failed', 'danger');
    }
  }*/

  // Show Toast Function
  async showToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toast.create({
      message: message,
      duration: 5000,
      color: color,
    });
    await toast.present();
  }

  sendVerificationEmail() {
    this.fireAuth.currentUser.then(user => {
      user.sendEmailVerification().then(() => {
        console.log('Verification email sent');
      }).catch(error => {
        console.error('Error sending verification email:', error);
      });
    }).catch(error => {
      console.error('Error getting current user:', error);
    });
  }

signup(email: string, password: string) {
  this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
    alert('User SuccessFully Registered!!');
    this.router.navigate(['/login']);

  }, err => {
    alert('User Not Registered');
  })
}
  //  Register Method
  // signup(email: string, password: string) {
  //   this.fireAuth.createUserWithEmailAndPassword(email, password).then(async () => {
  //     alert('User Successfully Registered!!');
  //     this.router.navigate(['/login']);

  //   }, (err) => {
  //     this.showToast('User Unsuccessful registry', 'danger');
  //   })
  // }
      // async (userCredential) => {
      //   const user = userCredential.user;
      //   if (user) {
      //     try {
      //       await this.firestore.collection('users').doc(user.uid).set({
      //         firstname: firstname,
      //         lastname: lastname,
      //         idnum: idnum,
      //         homeaddress: homeaddress,
      //         email: email,
      //         phone: phone,
      //         uid: user.uid,
      //         createdAt: new Date(),
      //       });
      //       await this.showToast('Registered Successfully!!', 'success');
      //       this.router.navigate(['/login']);
      //     } catch (error) {
      //       await this.showToast('Error registering user in database', 'danger');
      //     }
      //   }
      // },


  // Signout Method
  logout() {
    this.fireAuth.signOut().then(
      async () => {
        localStorage.removeItem('token');
        await this.router.navigate(['/home']);
      },
      async (err) => {
        await this.showToast('Failed To Signout', 'danger');
      }
    );
  }
}
