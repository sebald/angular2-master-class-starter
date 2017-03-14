import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

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
    this.contacts = this.contactService.getContacts();
    this.terms$ = new Subject();

    this.terms$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => this.search(term));
  }

  trackByContactId (idx:number, contact:Contact) {
    return contact.id;
  }

  search (term:string) {
    this.contacts = this.contactService.search(term);
  }
}
