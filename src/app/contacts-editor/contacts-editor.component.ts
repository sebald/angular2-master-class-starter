import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  contact:Contact = <Contact>{ address: {} };
  warnOnClosing = true;

  constructor(
    private route:ActivatedRoute,
    private contactService:ContactService,
    private router:Router
  ) {}

  ngOnInit() {
    this.contactService.getContact(this.route.snapshot.params.id)
      .subscribe(contact => this.contact = contact);
  }

  save (contact:Contact) {
    this.warnOnClosing = false;
    this.contactService.updateContact(contact)
      .subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }))
  }
}
