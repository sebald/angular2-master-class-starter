import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts:Contact[];

  constructor(
    private contactService:ContactService
  ) {}

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts)
  }

  trackByContactId (idx:number, contact:Contact) {
    return contact.id;
  }

}
