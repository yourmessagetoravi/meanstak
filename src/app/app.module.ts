import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PipesComponent } from './pipes/pipes.component';
import { DatabindingComponent } from './databinding/databinding.component';
import{StudentdataService} from './studentdata.service';
import { ServiceaccessComponent } from './serviceaccess/serviceaccess.component';
import{HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpproductlistComponent } from './httpproductlist/httpproductlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PipesComponent,
    DatabindingComponent,
    ServiceaccessComponent,
    HttpproductlistComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    StudentdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
