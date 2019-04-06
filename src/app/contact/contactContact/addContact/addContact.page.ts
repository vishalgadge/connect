import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EMPTY_ARRAY } from '@angular/core/src/view';
import { first } from 'rxjs/operators';
import { ContactService } from 'src/app/providers/contact.service';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './addContact.page.html',
  styleUrls: ['./addContact.page.scss'],
})
export class AddContactPage implements OnInit {
  officeId;
  officeName;
  companyId;
  companyName;
  company;
  emailArray: any = [];
  mobileArray = [];
  landlineArray = [];
  data: boolean = false;
  showMore: boolean = false;
  profilePhoto;
  formData = {};
  emailReg;
  mobileReg;
  addContact;
  constructor(public activatedRoute: ActivatedRoute, public navCtrl: NavController, public contactService: ContactService , public commonService : CommonService , public router : Router) {
    this.activatedRoute.params.subscribe(params => {
      if (params['action'] == "edit") {
        this.addContact = false;
        this.contactService.contactDetails(params['contactId']).subscribe(res => {
          if (res['error']) {
          }
          else {
            var contactDetails = res['result'];
            this.formData['firstName'] = contactDetails['first_name'];
            this.formData['lastName'] = contactDetails['last_name'];
            this.formData['address'] = contactDetails['address'];
            this.formData['designation'] = contactDetails['designation'];
            this.formData['notes'] = contactDetails['notes'];
            this.mobileArray = contactDetails['mobile'];
            this.emailArray = contactDetails['email_address'];
            this.landlineArray = contactDetails['landline'];
            if (this.mobileArray.length == 0) {
              this.mobileArray.push({ 'mobile': '', 'type': '' });
            } 
            if (this.emailArray.length == 0) {
              this.emailArray.push({ 'email': '', 'type': '' });
            }
            if (this.landlineArray.length == 0) {
              this.landlineArray.push({ 'landline': '', 'type': '' });
            }
            this.formData['reportingManager'] = contactDetails['reporting_manager'];
            this.formData['reportingSubordinates'] = contactDetails['reporting_subordinates'];
            this.formData['birthDay'] = contactDetails['birth_day'];
            this.formData['anniversary'] = contactDetails['anniversary'];
            this.formData['fbLink'] = contactDetails['fb_link'];
            this.formData['twitter'] = contactDetails['twitter'];
            this.formData['linkdin'] = contactDetails['linkdin'];
            this.formData['company'] = contactDetails['company'];
            this.formData['department'] = contactDetails['department'];
            this.formData['action'] = 'edit';
            this.formData['id'] = params['contactId'];


          }
        });
      }
      else {
        this.addContact = true;
        this.companyId = params[0];
        this.officeId = params[1];
        this.companyName = params[2];
        this.officeName = params[3];
        this.formData['action'] = 'add';
        this.formData['company'] = this.companyId;
        this.formData['department'] = this.officeId;

        this.emailArray.push({ 'email': '', 'type': '' });
        this.mobileArray.push({ 'mobile': '', 'type': '' });
        this.landlineArray.push({ 'landline': '', 'type': '' });
        this.formData = {}
      }
    });
  }
  ngOnInit() {
  }
  addEmail(idx) {
    // this.emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!this.emailReg.test(this.emailArray[idx]["email"])) {
    //   this.emailArray.splice(idx, 1);
    // }
    this.emailArray.push({ 'email': '', 'type': '' });
  }
  deleteEmail(index) {
    if (this.emailArray.length == 1) {
    }
    else {
      if (index > -1) {
        this.emailArray.splice(index, 1);
      }
    }

  }
  addMobile(idx) {
    // this.mobileReg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    // if (!this.mobileReg.test(this.mobileArray[idx]["mobile"])) {
    // }
    // else {
    this.mobileArray.push({ 'mobile': '', 'type': '' });
    //  }
  }
  deleteMobile(index) {
    if (this.mobileArray.length == 1) {
    }
    else {
      if (index > -1) {
        this.mobileArray.splice(index, 1);
      }
    }
  }
  addLandline(idx) {
    this.landlineArray.push({ 'landline': '', 'type': '' });
  }
  deleteLandline(index) {
    if (this.emailArray.length == 1) {
    }
    else {
      if (index > -1) {
        this.landlineArray.splice(index, 1);
      }
    }
  }
  triggerFile() {
    document.getElementById("fileInput").click();
  }
  upload($event) {
    this.profilePhoto = $event.target.files[0];
  }
  submit() {
    if (this.formData['firstName'] == '' || this.formData['lastName'] == '') {
    }
    for (var i = 0; i < this.mobileArray.length; i++) {
      if (this.mobileArray[i]['mobile'] == '') {
        this.mobileArray.splice(i, 1);
      }
    }
    for (var i = 0; i < this.emailArray.length; i++) {
      if (this.emailArray[i]['email'] == '') {
        this.emailArray.splice(i, 1);
      }
    }
    for (var i = 0; i < this.landlineArray.length; i++) {
      if (this.landlineArray[i]['landline'] == '') {
        this.landlineArray.splice(i, 1);
      }
    }
    this.formData['mobile'] = this.mobileArray;
    this.formData['emailAddress'] = this.emailArray;
    this.formData['landline'] = this.landlineArray;


    this.contactService.submitContact(this.formData).subscribe(response => {
      if(response['error']){
        this.commonService.makeToast(response['reason']);
      }
      else
      {
        this.commonService.makeToast(response['reason']);
        this.router.navigate(['/menu/Contact/tabs/contactContact/addContact/selectOffice']);
      }
    });
  }
}
