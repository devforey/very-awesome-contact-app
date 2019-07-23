import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactCreatePageComponent } from './pages/contact-create-page/contact-create-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListPageComponent
  } as Route,
  {
    path: 'contacts/create',
    component: ContactCreatePageComponent
  } as Route,
  {
    path: 'contacts/edit/:id',
    component: ContactEditPageComponent
  } as Route
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}
