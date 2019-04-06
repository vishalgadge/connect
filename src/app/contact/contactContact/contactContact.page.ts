import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { NavController, IonTabs } from '../../../../node_modules/@ionic/angular';
import { NavigationStart } from '@angular/router';
import { ContactMy } from './contactMy/contactMy.page';
import { Inject } from '@angular/compiler/src/core';


@Component({
  selector: 'app-ContactContact',
  templateUrl: './contactContact.page.html',
  styleUrls: ['./contactContact.page.scss'],
})

export class ContactContactPage implements OnInit {
  @ViewChild('myTabs') tabRef: IonTabs;
  toggled: boolean;
  case = 'contactMy';
  searchKey = '';

  constructor(
    public navCtrl: NavController,
    // public contactMy: ContactMy,
    private injector: Injector) {
    // this.navCtrl.navigateForward('/menu/Contact/tabs/contactContact/contactTabs/contactMy');
  }

  ionViewDidEnter() {
  }

  ngOnInit() {
    if (event instanceof NavigationStart) {
    }
  }

  ionViewDidLoad() {
  }

  toggleSearch() {
    this.toggled = this.toggled ? false : true;
  }

  addContact() {
    this.navCtrl.navigateForward('/menu/Contact/tabs/contactContact/addContact');
  }

  triggerInput(ev: any) {
     this.searchKey = ev.target.value;
  }
}

