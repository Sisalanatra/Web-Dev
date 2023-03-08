import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AlbumPhotosComponent,
    AlbumsComponent,
    HomeComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
