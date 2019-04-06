import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../providers/user.service';
import { CommonService } from '../providers/common.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;

  constructor(public router: Router, public formBuilder: FormBuilder, public userService: UserService, public commonService: CommonService, public storage: Storage ,private commonServices : CommonService) {
    this.loginForm = formBuilder.group({
      emailAddress: ['abc@gmail.com', Validators.compose([Validators.required, Validators.email])],
      password: ['1234', Validators.required]
    });

  }

  ngOnInit() {
    this.storage.get('current_user').then(data => {
      if (data) {
         this.router.navigate(['/menu/Contact']);
      }
      else {

      }
    })
  }
  onLogin() {
    this.commonServices.showLoader();
    this.userService.login(this.loginForm.value).subscribe(response => {
      this.commonServices.hideLoader();
      if (response['is_authenticated'] == false) {
        this.commonService.makeToast(response['reason']);
        this.storage.clear();
      }
      else {
        this.commonService.makeToast(response['reason']);
        this.storage.set('current_user', response['current_user']);
        this.router.navigate(['/menu/Contact']);
      }
    })
  }
  forgotPassword() {

  }


}
