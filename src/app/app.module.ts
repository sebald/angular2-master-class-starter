import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { ContactService } from './contacts.service';
import { ContactsAppComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { API_ENDPOINT } from './token';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    ContactService,
    {
      provide: API_ENDPOINT,
      useValue: 'http://localhost:4201/api'
    }
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
