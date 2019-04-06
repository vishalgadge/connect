import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/providers/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-company',
  templateUrl: './selectCompany.page.html',
  styleUrls: ['./selectCompany.page.scss'],
})
export class SelectCompanyPage implements OnInit {
  companyList = [];
  toggled: boolean = false;
  items = [];
  constructor(public contactService: ContactService , public router : Router) {
    this.contactService.companyList().subscribe(response => {
      this.companyList = response['result'];
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
    this.items = this.companyList;
  }
  triggerInput(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.companyName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      if (this.items.length == 0) {
        this.items.push({ "companyName": 'Add New Company', "companyId": 0 });
      }
    }
  }
  onClick(company){
    if(company.companyId == 0){
      this.router.navigate(['/menu/Contact/tabs/contactContact/addContact/addCompany']);
    }
    else{
      this.router.navigate(['/menu/Contact/tabs/contactContact/addContact/selectOffice' , company] );
    }
  }
}
