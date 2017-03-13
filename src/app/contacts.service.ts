import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { API_ENDPOINT } from '../app/token';
import { Contact } from './models/contact';


@Injectable()
export class ContactService {

  constructor(
    private http:Http,
    @Inject(API_ENDPOINT) private api:string
  ) {}

  getContacts () {
    console.log(this.api);

    return this.http.get(`${this.api}/contacts`)
      .map(res => res.json().items as Contact[]);
  }

  getContact (id:number|string) {
    return this.http.get(`${this.api}/contacts/${id}`)
      .map(res => res.json().item as Contact);
  }
}
