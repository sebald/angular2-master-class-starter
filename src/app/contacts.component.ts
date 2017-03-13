import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent implements OnInit {
  contacts:Contact[];

  constructor(
    private contactService:ContactsService
  ) {}

  ngOnInit() {
    this.contacts = this.contactService.getContact();
  }

  trackByContactId (idx:number, contact:Contact) {
    return contact.id;
  }
}
