import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { LocationListComponent } from './components/location-list/location-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'locations', pathMatch: 'full' },
  { path: 'locations', component: LocationListComponent },
  { path: 'locations/:id', component: LocationDetailsComponent },
  { path: 'add', component: AddLocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
