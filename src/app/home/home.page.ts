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

  navigateToLogin() {
    this.router.navigate(['/login.page']);
  }

}
