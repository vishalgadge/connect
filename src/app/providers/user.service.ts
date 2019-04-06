import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverIP } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiBase = serverIP;

  constructor(public http : HttpClient) { }

  login(input) {
    return this.http.post(this.apiBase+ "login", input);
  }
}
