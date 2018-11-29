import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { FlipModule } from 'ngx-flip';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    UiSwitchModule,
    FlipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
