import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddContactPage } from './addContact.page';

const routes: Routes = [
  { path: '', redirectTo: 'selectCompany', pathMatch: 'full' },
  { path: 'selectCompany', loadChildren: './selectCompany/selectCompany.module#SelectCompanyPageModule' },
  { path: 'selectOffice', loadChildren: './selectOffice/selectOffice.module#SelectOfficePageModule' },
  { path: 'addCompany', loadChildren: './addCompany/addCompany.module#AddCompanyPageModule' },
  { path: 'addOffice', loadChildren: './addOffice/addOffice.module#AddOfficePageModule' },
  {path: 'addContact',component: AddContactPage}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddContactPage]
})
export class AddContactPageModule {}
