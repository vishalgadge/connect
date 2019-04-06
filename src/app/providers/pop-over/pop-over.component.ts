import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ViewController } from '@ionic/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss']
})
export class PopOverComponent implements OnInit {
  contactId;
  constructor(public popupCtrl  :PopoverController , public navParams : NavParams , public router  :Router, public contactService : ContactService) { 
    // console.log("navParams", navParams); 
    this.contactId = navParams.get('contactId');
  }

  ngOnInit() {
  }
  editContact(){
    console.log(this.contactId);
    this.popupCtrl.dismiss();
    var array = [];
    array['action'] = "edit";
    array['contactId']= this.contactId;
    this.router.navigate(['/menu/Contact/tabs/contactContact/addContact/addContact', array])
  }
  deleteContact(){
    this.contactService.deleteContact(this.contactId).subscribe( res => {
          if(!res['error'] )
          {
            console.log(res['result']);
          }
    });
  }
}
