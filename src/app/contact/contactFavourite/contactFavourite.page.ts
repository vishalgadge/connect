import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/providers/contact.service';
import { NavigationStart, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CommonService } from 'src/app/providers/common.service';



@Component({
  selector: 'app-contactFavourite',
  templateUrl: './contactFavourite.page.html',
  styleUrls: ['./contactFavourite.page.scss'],
})
export class ContactFavourite implements OnInit {
  favaouriteContactList = [];
  constructor(
    public contactService: ContactService,
    public router: Router,
    public storage: Storage,
    public commonService: CommonService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url == '/menu/Contact/tabs/contactFavourite') {
          this.favaouriteContactList = [];
          this.callFavList();
        }
      }
    });
    this.callFavList();
  }
  callFavList() {
    this.favaouriteContactList = [];
    this.contactService.favouriteContacts().subscribe(res => {
      this.favaouriteContactList = res['result'];
    });
  }
  changeFavourite(contactId, status) {
    status = status == 'notFav' ? true : false;
    this.contactService.changeFavourite(contactId, status).subscribe(res => {
      if (res['error']) {
        this.commonService.makeToast(res['reason']);
      }
      else {
        this.commonService.makeToast(res['reason']);
        this.callFavList();
      }
    });
  }
  clickOnItem(contactId) {
    this.contactService.contactDetails(contactId).subscribe(res => {
      if (res['error']) {
      }
      else {
        this.storage.set('contactDetails', res['result']);
        this.router.navigate(['/menu/Contact/tabs/contactContact/contactDetails'])
      }
    });
  }
}

