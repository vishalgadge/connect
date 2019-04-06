import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ContactService } from 'src/app/providers/contact.service';
import { PopoverController } from '@ionic/angular';
import { PopOverComponent } from '../../../providers/pop-over/pop-over.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contactDetails.page.html',
  styleUrls: ['./contactDetails.page.scss'],
})
export class ContactDetails implements OnInit {
  contact: JSON;
  id;
  contactId;
  companyList;
  officeList;
  companyName;
  officeName;
  addedBy;
  array1;
  data;
  constructor(public router: Router, public storage: Storage, public contactService: ContactService, private popoverController: PopoverController) {
    this.storage.get('contactDetails').then(data => {
      if (data) {
        if (data.length !== 0) {
          this.contact = data;
          console.log(this.contact)
          this.contactId = this.contact['_id'];
          this.contactService.companyList().subscribe(response => {
            this.companyList = response['result'];
            this.companyList.forEach(element => {
              if (element['companyId'] == this.contact['company']) {
                this.companyName = element['companyName'];
                console.log(this.companyName);
              }
            });
            //console.log( 'id' , this.contact['company'][0]['companyId'])
            this.contactService.officeList(this.contact['company']).subscribe(response => {
              this.officeList = response['result'];
              this.officeList.forEach(element => {
                if (element['officeId'] == this.contact['department']) {
                  this.officeName = element['officeName'];
                }
              });
            })
            this.contactService.userName(this.contact['added_by']).subscribe(response => {
              this.addedBy = response['result'];
              this.addedBy = this.addedBy[0]['firstName'] + ' ' + this.addedBy[0]['lastName'];
            })
          })
        }
      }
    });
  }
  ngOnInit() {
  }
  async present(ev: any) {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev,
      translucent: true,
      animated: true,
      backdropDismiss: true,
      componentProps: { contactId: this.contactId }
    });
    return await popover.present();
  }
}


