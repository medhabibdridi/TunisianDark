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
import { RegisterComponent } from './register/register.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DonationdetailComponent } from './donationdetail/donationdetail.component';

const config = {apiKey: "AIzaSyAyDT1u_rzLtHapBJ3AnFf9Hmc1HUfrgeY",
authDomain: "tunisiandark-bd4df.firebaseapp.com",
databaseURL: "https://tunisiandark-bd4df.firebaseio.com",
projectId: "tunisiandark-bd4df",
storageBucket: "tunisiandark-bd4df.appspot.com",
messagingSenderId: "484718666179",
appId: "1:484718666179:web:404d22126f1949e00e5d76"}

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
    RegisterComponent,
    DonationdetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
