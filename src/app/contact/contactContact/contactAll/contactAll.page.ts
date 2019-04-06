import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ContactService } from '../../../providers/contact.service';
import { Router, NavigationStart } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CommonService } from 'src/app/providers/common.service';


@Component({
  selector: 'app-contactAll',
  templateUrl: './contactAll.page.html',
  styleUrls: ['./contactAll.page.scss'],
})
export class ContactAll implements OnInit {

  contacts = [];
  favaouriteContactList = [];
  // page = 0;
  startRange = 0;
  endRange = 20;
  type = "All";
  key = "";
  @Input() searchOnKey: string;

  constructor(
    public contactService: ContactService,
    private router: Router,
    public storage: Storage,
    public commonService : CommonService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchOnKey) {
      this.startRange = 0;
      this.endRange = 20;
      this.contactService.favouriteContactList().subscribe(res => {
        this.favaouriteContactList = res['result'];
        this.loadUsers(this.type, changes.searchOnKey.currentValue, this.startRange, this.endRange);
      });
    }
  }


  loadUsers(type, key, startRange, endRange, infiniteScroll?) {
    this.contactService.myContact(type, key, startRange, endRange)
      .subscribe(res => {
        res['result'].forEach(element => {
          if (this.favaouriteContactList.indexOf(element.id) > -1) {
            element['is_fav'] = true;
          }
          else {
            element['is_fav'] = false;
          }
        });
        if (startRange == 0 && endRange == 20) {
          this.contacts = res['result'];
        }
        else {
          this.contacts = this.contacts.concat(res['result']);
        }
        if (infiniteScroll) {
          infiniteScroll.target.complete();
        }
      })
  }

  loadMore(infiniteScroll) {
    this.startRange = this.endRange;
    this.endRange = this.endRange + 20;
    this.loadUsers(this.type, this.key, this.startRange, this.endRange, infiniteScroll);
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
  changeFavourite(contactId, status) {
    status = status == 'notFav' ? true : false;
    this.contactService.changeFavourite(contactId, status).subscribe(res => {
      if (res['error']) {
        this.commonService.makeToast(res['reason']);
      }
      else {
        this.commonService.makeToast(res['reason']);
        this.contactService.favouriteContactList().subscribe(res => {
          this.favaouriteContactList = res['result'];
          this.contacts.forEach(element => {
            if (this.favaouriteContactList.indexOf(element.id) > -1) {
              element['is_fav'] = true;
            }
            else {
              element['is_fav'] = false;
            }
          });
        });
      }
    })
  }
}