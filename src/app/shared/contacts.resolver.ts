import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Contact } from "../models/contact";
import { Injectable } from "@angular/core";
import { ContactService } from "../contacts.service";

@Injectable()
export class ContactResolver implements Resolve<Contact> {
  constructor(
    private contactService:ContactService
  ){}

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    return this.contactService.getContact(id);
  }
}