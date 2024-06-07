import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit{

  constructor(private router: Router, private menu: MenuController, private platform: Platform) { }

  closeMenu(event: Event){
    this.menu.close('main-content');
    event.stopPropagation();
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      if(this.menu.isOpen('main-content')){
        this.menu.close('main-content');
      }
    });
  }

  goToHOMESECOND(){
    {this.router.navigate(['/home-second']);  
  }}
  goToCARDPAYMENT(){
    {this.router.navigate(['/card-payment']);  
  }}
  goToORDERHISTORY(){
    {this.router.navigate(['/order-history']);  
  }}
  goToFAQS(){
    {this.router.navigate(['/faqs']);  
  }}  
  goToABOUTMEDDASH(){
    {this.router.navigate(['/about-med-dash']);  
  }} 
  goToTERMSANDCONDITIONS(){
    {this.router.navigate(['/terms-andconditions']);  
  }}
  
  goToHELP(){
    {this.router.navigate(['/help']);  
  }}


  
}
