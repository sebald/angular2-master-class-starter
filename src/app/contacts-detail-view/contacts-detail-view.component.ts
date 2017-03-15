import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact: Contact;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private contactService:ContactService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap(({ id }) => this.contactService.getContact(id))
      .subscribe(c => this.contact = c);
  }

  navigateToEditor () {
    this.router.navigate(
      ['edit'],
      { relativeTo: this.route }
    );
  }

  navigateToList () {
    this.router.navigate(
      ['..'],
      { relativeTo: this.route }
    );
  }
}
