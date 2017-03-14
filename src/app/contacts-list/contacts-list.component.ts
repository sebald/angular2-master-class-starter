import { Component, OnInit } from '@angular/core';
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

  constructor(
    private contactService:ContactService
  ) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  trackByContactId (idx:number, contact:Contact) {
    return contact.id;
  }

  search (term:string) {
    this.contacts = this.contactService.search(term);
  }
}
