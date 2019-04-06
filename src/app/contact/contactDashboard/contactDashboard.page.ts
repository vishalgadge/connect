import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/providers/contact.service';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './contactDashboard.page.html',
  styleUrls: ['./contactDashboard.page.scss'],
})
export class contactDashboardPage implements OnInit {
  totalCount ;
  groupCount ;
  myCount ;
  constructor(public contactService: ContactService, public commonService: CommonService) {

    this.contactService.contactCount().subscribe(response => {
      if (response['error']) {
        this.commonService.makeToast(response['reason']);
      }
      else{
       this.totalCount= response['result']; 
      console.log( "total" , this.totalCount )
      }
    });
    this.contactService.myContactCount().subscribe(response => {
      if (response['error']) {
        this.commonService.makeToast(response['reason']);
      }
      else{
        this.myCount= response['result']; 
       }
    });
    this.contactService.groupContactCount().subscribe(response => {
      if (response['error']) {
        this.commonService.makeToast(response['reason']);
      }
      else{
        this.groupCount= response['result']; 
       }
    });
  }
  ngOnInit() {

  }

}
