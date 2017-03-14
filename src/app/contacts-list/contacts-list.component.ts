import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

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
    this.contacts = this.contactService.search(this.terms$);
  }

  trackByContactId (idx:number, contact:Contact) {
    return contact.id;
  }
}
