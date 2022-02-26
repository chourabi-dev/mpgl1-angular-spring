import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlePageComponent } from './article-page/article-page.component';
import { BlocPageComponent } from './bloc-page/bloc-page.component';
import { CompanyComponent } from './company/company.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StuffComponent } from './stuff/stuff.component';


const routes: Routes = [
  { path:'' , component:HomePageComponent },
  { path:'home' , component: HomePageComponent },
  { path:'about' , component: AboutPageComponent, children:[
    { path:'stuff' , component: StuffComponent },
    { path:'company' , component: CompanyComponent },
    
  ] },

  { path:'blog' , component:BlocPageComponent },
  { path:'blog/article/:id' , component:ArticlePageComponent },
  { path:'**', component:NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
