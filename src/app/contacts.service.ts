import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';

import { API_ENDPOINT } from '../app/token';
import { Contact } from './models/contact';


@Injectable()
export class ContactService {

  constructor(
    private http: Http,
    @Inject(API_ENDPOINT) private api: string
  ) { }

  getContacts() {
    console.log(this.api);

    return this.http.get(`${this.api}/contacts`)
      .map(res => res.json().items as Contact[]);
  }

  getContact(id: number | string) {
    return this.http.get(`${this.api}/contacts/${id}`)
      .map(res => res.json().item as Contact);
  }

  updateContact(contact: Contact) {
    return this.http.put(
      `${this.api}/contacts/${contact.id}`,
      contact
    );
  }

  search(terms: Observable<string>, debounceMs = 400) {
    return terms
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
      .merge(
        /*
         * `takeUntil` will prevents rendering the `getContact`
         * emit if the user already searched for a `term`.
         */
        this.getContacts().takeUntil(terms)
      );
  }

  rawSearch(term: string) {
    return this.http.get(`${this.api}/search?text=${term}`)
      .map(res => res.json().items as Contact[]);
  }
}
