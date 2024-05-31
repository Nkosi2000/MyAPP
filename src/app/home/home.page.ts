import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  swiperSlideChanged(e: any){
    console.log('changed: ', e);
  }

  images = [
    'https://medypharmasist.com/wp-content/uploads/2022/06/banner1.jpg',
    'https://zeelabpharmacy.com/public/img/home_order.png',
    'https://th.bing.com/th/id/OIP.gfccJ4fRYrsbolNOvJuyswHaDX?rs=1&pid=ImgDetMain',
    'https://i.pinimg.com/originals/5f/68/87/5f6887f6061b674e822c3340622c25f4.png',
    'https://livinghealthy24.com/manager/assets/images/offer4.png',
  ];

  image1 = [
    'https://www.flaticon.com/free-icon/chat-bubbles_13874995?k=1717093363603&log-in=google',
  ];
  image2 = [
    'https://www.flaticon.com/free-icon/yes_1582114?term=hand+press&page=3&position=26&origin=search&related_id=1582114',
  ];
  image3 = [
    'https://www.flaticon.com/free-icon/delivery-boy_2331708?term=delivery+motorbike&page=1&position=28&origin=search&related_id=2331708',
  ];
  image4 = [
    'https://www.flaticon.com/free-icon/delivery-box_6615107?term=delivery+package&page=1&position=6&origin=search&related_id=6615107',
  ];

  navigateToLogin() {
    this.router.navigate(['/login.page']);
  }

}
