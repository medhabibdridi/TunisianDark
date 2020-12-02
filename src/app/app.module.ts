import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home/home.component';
import { WhitelistComponent } from './whitelist/whitelist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDonationComponent } from './add-donation/add-donation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    
    AboutComponent,
    DonationComponent,
    HomeComponent,
    WhitelistComponent,
    DashboardComponent,
    AddDonationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
