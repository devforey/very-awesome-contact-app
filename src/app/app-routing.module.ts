import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'contacts' } as Route ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
