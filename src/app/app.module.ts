import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    PBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
