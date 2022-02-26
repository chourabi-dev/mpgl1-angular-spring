import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StuffComponent } from './stuff/stuff.component';
import { CompanyComponent } from './company/company.component';
import { BlocPageComponent } from './bloc-page/bloc-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeFormComponent,
    HomePageComponent,
    AboutPageComponent,
    NavbarComponent,
    StuffComponent,
    CompanyComponent,
    BlocPageComponent,
    ArticlePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
