import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switchMap';

import { Contact } from '../models/contact';
import { ContactService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Contact[]>;
  terms$:Subject<string>;

  constructor(
    private contactService:ContactService
  ) {}

  ngOnInit() {
    this.terms$ = new Subject();

    this.contacts = Observable.merge(
      this.contactService.getContacts(),
      this.terms$
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.contactService.search(term))
    );
  }

  trackByContactId (idx:number, contact:Contact) {
    return contact.id;
  }
}
