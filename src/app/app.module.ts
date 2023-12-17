import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogMenuComponent } from './components/blog-menu/blog-menu.component';
import { BlogTitleComponent } from './components/blog-title/blog-title.component';
import { BlogBigCardComponent } from './components/blog-big-card/blog-big-card.component';
import { BlogSmallCardComponent } from './components/blog-small-card/blog-small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogMenuComponent,
    BlogTitleComponent,
    BlogBigCardComponent,
    BlogSmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
