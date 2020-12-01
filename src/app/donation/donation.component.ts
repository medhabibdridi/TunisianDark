import { Component, OnInit } from '@angular/core';
import { donation } from 'src/model/donation';
import { DonationService } from '../shared/services/donation.service';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  donations : donation[] ; 
  constructor(private service:DonationService) { }

  ngOnInit(): void {
    this.service.getDonation().subscribe((data:donation[])=> this.donations = data );
  }

}
