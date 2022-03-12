import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';


const routes: Routes = [
  { path:'', component:HomePageComponent },
  { path:'users', component:UsersPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
