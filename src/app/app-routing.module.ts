import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
/*  { path: 'add-contact', loadChildren: './contact/contactContact/add-contact/add-contact.module#AddContactPageModule' },
  { path: 'select-company', loadChildren: './contact/contactContact/addContact/select-company/select-company.module#SelectCompanyPageModule' },
  { path: 'select-office', loadChildren: './contact/contactContact/addContact/select-office/select-office.module#SelectOfficePageModule' },
  { path: 'add-office', loadChildren: './contact/contactContact/addContact/add-office/add-office.module#AddOfficePageModule' },
  { path: 'add-company', loadChildren: './contact/contactContact/addContact/add-company/add-company.module#AddCompanyPageModule' },

 /*{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#ContactPageModule' },
  { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#contactDashboardPageModule' },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#ContactFavouriteModule' },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#ContactContactPageModule' },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'add-user', loadChildren: './pages/add-user/add-user.module#AddUserPageModule' },*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
