import { Routes } from '@angular/router';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsDashboardComponent } from "./contacts-dashboard/contacts-dashboard.component";
import { CONFIRMATION_GUARD } from "./token";
import { ContactResolver } from "./shared/contacts.resolver";
import { ContactsCreatorComponent } from "./contacts-creator/contacts-creator.component";

export const APP_ROUTES:Routes = [{
  path: '',
  component: ContactsDashboardComponent,
  children: [
    { path: '', redirectTo: 'contacts/0', pathMatch: 'full' },
    { path: 'contacts/new', component: ContactsCreatorComponent },
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
  loadChildren: './about/about.module#AboutModule'
}, {
  path: '**',
  redirectTo: ''
}];