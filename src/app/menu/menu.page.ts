import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 selectedPath = '';
 
  pages = [
    {
      title: 'Contact',
      url: '/menu/Contact',
      icon :'contact'
    }
    // ,
    // {
    //   title: 'Meeting',
    //   url: '/menu/Meeting',
    //   icon : 'contacts' 
    // }
  ];
 
  constructor(private router: Router ,  public storage: Storage) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
 
  ngOnInit() {
 
  }
  logout(){
    this.storage.clear();
    this.router.navigate(['login']);
  }
}
