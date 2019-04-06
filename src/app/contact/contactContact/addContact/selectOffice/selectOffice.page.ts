import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ContactService } from 'src/app/providers/contact.service';


@Component({
  selector: 'app-select-office',
  templateUrl: './selectOffice.page.html',
  styleUrls: ['./selectOffice.page.scss'],
})
export class SelectOfficePage implements OnInit {
  companyId: any;
  officeList = [];
  toggled: boolean = false;
  items = [];
  companyName: any;
  company;

  constructor(public activatedRoute: ActivatedRoute, public contactService: ContactService, public router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.company = params;
      this.companyName = params['companyName'];
      this.companyId = params['companyId'];
    });
    this.contactService.officeList(this.companyId).subscribe(response => {
      this.officeList = response['result'];
      this.initializeItems();
    });
  }
  ngOnInit() {
  }
  ionViewDidLoad() {
  }
  toggleSearch() {
    this.toggled = this.toggled ? false : true;
  }
  initializeItems() {
    if (this.officeList.length == 0) {
      this.items.push({ "officeName": 'Add New Office', "officeId": 0 });
    }
    else {
      this.items = this.officeList;
    }
  }
  triggerInput(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.officeName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      if (this.items.length == 0) {
        this.items.push({ "officeName": 'Add New Office', "officeId": 0 });
      }
    }
  }

  onClick(office) {
    if (office.officeId == 0) {
      this.router.navigate(['/menu/Contact/tabs/contactContact/addContact/addOffice', this.company]);
    }
    else {
      let array = [];
      array.push('companyId', this.companyId);
      array.push('officeId', office.officeId)
      array.push('companyName', this.companyName);
      array.push('officeName', office.officeName)
      this.router.navigate(['/menu/Contact/tabs/contactContact/addContact/addContact', array]);
    }
  }
}
