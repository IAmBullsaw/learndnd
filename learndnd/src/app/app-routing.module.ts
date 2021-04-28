import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventureComponent } from './adventure/adventure.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'adventure', component: AdventureComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/adventure', pathMatch: 'full' },
  { path: '', redirectTo: '/adventure', pathMatch: 'full' },
  { path: '**', redirectTo: '/adventure', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
