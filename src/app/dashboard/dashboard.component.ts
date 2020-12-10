import { Component, Input, OnInit } from '@angular/core';
import { donation } from 'src/model/donation';
import { whitelist } from 'src/model/whitelist';
import { DonationService } from '../shared/services/donation.service';
import { WhitelistService } from '../shared/services/whitelist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  whitelist : whitelist[]
  donations : donation[] ;
  formState : boolean
  donationState : boolean
 donation : donation
 whitelistTable :boolean 
 SelectedFile ; 
 searchText;
 
  @Input() dono
  constructor(private service:WhitelistService, private service1:DonationService) { }

  ngOnInit(): void {
    this.service.getWhitelist().subscribe((data:whitelist[])=> this.whitelist = data );
    this.service1.getDonation().subscribe((data:donation[])=> this.donations = data );
this.donation = new donation

  }
 whitelistt(){
   this.whitelistTable = true ; 

 }
 hidewhite(){
  this.whitelistTable = false ; 

 }
  delete(id){
    this.service.Delete(id).subscribe(
      () => this.whitelist = this.whitelist.filter(whitelist => whitelist.id != id)
    );
  }
  delete2(id){
    this.service1.DeleteDonation(id).subscribe(
      () => this.donations = this.donations.filter(donation => donation.id != id)
    );
  }

  pushDonation(p:donation){
    this.service1.adddonation(p).subscribe(
      resultat => {
      }, (err) => {
        console.log(err);
      }     
    );
     this.formState = false ; 
  }
    showForm(){
      this.formState = true;

    }
    showDonation(){
     this.donationState = true;
     this.formState = false ; 
    
    }
    HideForm(){
      this.formState = false ;
    }
    hideDonation(){
      this.donationState = false ; 
      
     }
 
    update(id ){
      this.donation.id= id
      this.donation.nom
    
    }
    onFileselected(event)
    {
   this.SelectedFile=event.target.files[0]; }

   
  }
 

