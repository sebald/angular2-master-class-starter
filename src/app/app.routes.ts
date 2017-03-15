import { Routes } from '@angular/router';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsDashboardComponent } from "./contacts-dashboard/contacts-dashboard.component";
import { AboutComponent } from "./about/about.component";

export const APP_ROUTES:Routes = [{
  path: '',
  component: ContactsDashboardComponent,
  children: [
    { path: '', redirectTo: 'contacts/0', pathMatch: 'full' },
    { path: 'contacts/:id', component: ContactsDetailViewComponent },
    { path: 'contacts/:id/edit', component: ContactsEditorComponent }
  ]
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: '**',
  redirectTo: ''
}];