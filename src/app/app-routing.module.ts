import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GuideComponent } from './pages/guide/guide.component';
import { RentalsComponent } from './pages/rentals/rentals.component';
import { SalesCategoryComponent } from './pages/sales-category/sales-category.component';
import { AllListingsComponent } from './pages/all-listings/all-listings.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'buyer', component: GuideComponent},
  {path: 'rent', component: RentalsComponent},
  {path: 'sales/category/:type',component: SalesCategoryComponent},
  { path: 'all-listings', component: AllListingsComponent },
  { path: 'property/:id', component: PropertyDetailsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
