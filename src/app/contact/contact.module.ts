import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactPage } from './contact.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ContactPage,
    children: [
      {
        path: 'contactDashboard',
        loadChildren: './contactDashboard/contactDashboard.module#contactDashboardPageModule'
      },
      {
        path: 'contactFavourite',
        loadChildren: './contactFavourite/contactFavourite.module#ContactFavouriteModule'
      },
      {
        path: 'contactContact',
        loadChildren: './contactContact/contactContact.module#ContactContactPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/contactDashboard',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ContactPage,
  ]
})
export class ContactPageModule {}
