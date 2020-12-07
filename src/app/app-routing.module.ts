import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationComponent } from './donation/donation.component';
import { DonationdetailComponent } from './donationdetail/donationdetail.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/services/auth.guard';
import { WhitelistComponent } from './whitelist/whitelist.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'donation', component: DonationComponent},
  {path: 'donationDetail/:id', component: DonationdetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'whitelist', component: WhitelistComponent},
  {path: 'admin', component: DashboardComponent , canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
