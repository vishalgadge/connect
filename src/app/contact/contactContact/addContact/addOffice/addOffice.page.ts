import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/providers/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-add-office',
  templateUrl: './addOffice.page.html',
  styleUrls: ['./addOffice.page.scss'],
})
export class AddOfficePage implements OnInit {

  public addOfficeForm: FormGroup;
  public companyName
  public officeName;
  public officeId;
  public companyId;
  constructor(public activatedRoute: ActivatedRoute, public formBuilder: FormBuilder, public contactService: ContactService, public router: Router , public commonService : CommonService) {
    this.activatedRoute.params.subscribe(params => {
      console.log("company", params)
      this.companyName = params['companyName'];
      this.companyId = params['companyId'];
    });
    this.addOfficeForm = formBuilder.group({
      officeName: ['', Validators.required],
      location: [''],
      address: [''],
      zipCode: [''],
      city: [''],
      state: [''],
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    this.addOfficeForm.value['id'] = this.companyId;
    this.addOfficeForm.value['action'] = 'add';
    this.contactService.submitOffice(this.addOfficeForm.value).subscribe(response => {

      if (!response['error']) {
        this.commonService.makeToast(response['reason']);
        let array = [];
        array.push('companyId', this.companyId);
        array.push('officeId', response['officeId']);
        array.push('companyName', this.companyName);
        array.push('officeName', response['officeName'])
        this.router.navigate(['/menu/Contact/tabs/contactContact/addContact/addContact', array]);
      } else {
        this.commonService.makeToast(response['reason']);
      }
    })
  }

}
