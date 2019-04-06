import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { serverIP } from '../app.component';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiBase = serverIP;

  constructor(public http : HttpClient) { }

  myContact(type , key  ,startRange , endRange ) {
    return this.http.post(this.apiBase+"contact/list", {"key" :key , "type" : type ,"startRange" : startRange, "endRange" : endRange});
  }
  favouriteContactList(){
    return this.http.post(this.apiBase+"user/favouriteContactList", {});
  }
  favouriteContacts(){
    return this.http.post(this.apiBase+"user/favouriteContacts", {});
  }
  changeFavourite(contactId , status){
    return this.http.post(this.apiBase+"user/changeFavouriteContact", {contactId , status});
  }
  contactDetails(contactId){
    return this.http.post(this.apiBase+"contact/detail", {contactId });
  }
  companyList(){
    return this.http.post(this.apiBase+"company/list", {}   );
  }
  officeList(id){
    return this.http.post(this.apiBase+"company/officeList", {id}   );
  }
  userName(id){
    return this.http.post(this.apiBase+"user/userName", {id}   );
  }
  contactCount(){
    return this.http.post(this.apiBase+"dashboard/contactcount", {}   );
  }
  myContactCount(){
    return this.http.post(this.apiBase+"dashboard/mycontactcount", {}   );
  }
  groupContactCount(){
    return this.http.post(this.apiBase+"dashboard/groupcontactcount", {}   );
  }
  uploadProfile(file){
    return this.http.post(this.apiBase+"contact/uploadContactProfile", {"png":file} , { headers: new HttpHeaders()  });
  }
  submitContact(formData){
    return this.http.post(this.apiBase+"contact/submit", formData);
  }
  submitCompany(formData){
    return this.http.post(this.apiBase+"company/submitCompany", formData);  
  }
  submitOffice(formData){
    return this.http.post(this.apiBase+"company/submitOffice", formData);  
  }
  deleteContact(id){
    return this.http.post(this.apiBase+"contact/delete", {'id' :id});  
  }
}
