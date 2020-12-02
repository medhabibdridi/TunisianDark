import { Component, OnInit , Output,EventEmitter } from '@angular/core';
import { donation } from 'src/model/donation';
import { DonationService } from '../shared/services/donation.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent implements OnInit {
   donation : donation ; 
   @Output() eventAddProduct = new EventEmitter<donation>();
  formState ; 
  constructor( private service1 : DonationService) { }

  ngOnInit(): void {
    this.donation = new donation ;

  }
  save(){
    
    this.eventAddProduct.emit(this.donation);
  }
  HideForm(){
    this.formState = true ;
  }
}
