import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlePageComponent } from './article-page/article-page.component';
import { AuthGuard } from './auth.guard';
import { BlocPageComponent } from './bloc-page/bloc-page.component';
import { CompanyComponent } from './company/company.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StuffComponent } from './stuff/stuff.component';


const routes: Routes = [
  { path:'' , component:HomePageComponent , canActivate:[AuthGuard] },
  { path:'home' , component: HomePageComponent, canActivate:[AuthGuard] },
  { path:'about' , component: AboutPageComponent, canActivate:[AuthGuard], children:[
    { path:'stuff' , component: StuffComponent, canActivate:[AuthGuard] },
    { path:'company' , component: CompanyComponent, canActivate:[AuthGuard] },
    
  ] },
  { path:'blog' , component:BlocPageComponent, canActivate:[AuthGuard] },
  { path:'blog/article/:id' , component:ArticlePageComponent, canActivate:[AuthGuard] },
  { path:'auth', component:AuthPageComponent },
  { path:'**', component:NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
