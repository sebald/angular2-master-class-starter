import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { API_ENDPOINT, CONFIRMATION_GUARD } from './token';
import { APP_ROUTES } from './app.routes';
import { ContactService } from './contacts.service';
import { ContactsAppComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { confirmNavigationGuard } from "./guards";
import { ContactResolver } from "./shared/contacts.resolver";
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [ContactsAppComponent,
   ContactsListComponent,
   ContactsDetailComponent,
   ContactsEditorComponent,
   ContactsDetailViewComponent,
   TabComponent,
   TabsComponent,
   ContactsDashboardComponent,
   ContactsCreatorComponent,
   EmailValidatorDirective
  ],
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
    }, {
      provide: CONFIRMATION_GUARD,
      useValue: confirmNavigationGuard
    },
    ContactResolver
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
