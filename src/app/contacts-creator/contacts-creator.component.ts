import { Component } from '@angular/core';
import { Contact } from "../models/contact";
import { ContactService } from "../contacts.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  save(contact: Contact) {
    this.contactService.addContact(contact)
      .subscribe(({ id }) => this.router.navigate(
        ['..', id],
        { relativeTo: this.route }
      ));
  }
}
