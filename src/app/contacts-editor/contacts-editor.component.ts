import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contacts.service';
import { Contact } from '../models/contact';
import { hasWarnOnClosing } from "../guards";
import 'rxjs/add/operator/map';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit, hasWarnOnClosing {
  contact:Contact = <Contact>{ address: {} };
  warnOnClosing = true;

  constructor(
    private route:ActivatedRoute,
    private contactService:ContactService,
    private router:Router
  ) {}

  ngOnInit() {
    this.route.data
      .map(({ contact }) => contact)
      .subscribe(contact => this.contact = contact);
  }

  save (contact:Contact) {
    this.warnOnClosing = false;
    this.contactService.updateContact(contact)
      .subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }))
  }
}
