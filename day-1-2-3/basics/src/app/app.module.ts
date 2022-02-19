import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailPipe } from './email.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { FeildComponent } from './feild/feild.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';
import { NewsComponent } from './news/news.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailPipe,
    GalleryComponent,
    TodoAppComponent,
    FeildComponent,
    DarkmodeComponent,
    NewsComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
