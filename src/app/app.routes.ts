import { Routes } from '@angular/router';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsDashboardComponent } from "./contacts-dashboard/contacts-dashboard.component";
import { AboutComponent } from "./about/about.component";
import { CONFIRMATION_GUARD } from "./token";
import { ContactResolver } from "./shared/contacts.resolver";

export const APP_ROUTES:Routes = [{
  path: '',
  component: ContactsDashboardComponent,
  children: [
    { path: '', redirectTo: 'contacts/0', pathMatch: 'full' },
    { path: 'contacts/:id', component: ContactsDetailViewComponent },
    {
      path: 'contacts/:id/edit',
      component: ContactsEditorComponent,
      canDeactivate: [CONFIRMATION_GUARD],
      resolve: {
        contact: ContactResolver
      }
    }
  ]
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: '**',
  redirectTo: ''
}];