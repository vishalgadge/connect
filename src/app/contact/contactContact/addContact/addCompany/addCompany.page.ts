import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/providers/contact.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './addCompany.page.html',
  styleUrls: ['./addCompany.page.scss'],
})
export class AddCompanyPage implements OnInit {
  public addCompanyForm: FormGroup;

  constructor(public formBuilder: FormBuilder , public contactService : ContactService, public router : Router  ,public commonService : CommonService) {
    this.addCompanyForm = formBuilder.group({
      companyName: ['', Validators.required],
      parentCompany: [''],
      relatedCompany: [''],
      companyWebsite: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    let companyData = this.addCompanyForm.value;
    companyData['action'] = 'add';
    this.contactService.submitCompany(companyData).subscribe(response => {
      if(response['error']){
        this.commonService.makeToast(response['reason']);  
      }
      else{
        this.commonService.makeToast(response['reason']);
        this.router.navigate(['/menu/Contact/tabs/contactContact/addContact/selectOffice' , response['result']] );
      }
    })
  }

}

