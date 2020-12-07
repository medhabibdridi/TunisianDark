import { Component, OnInit } from '@angular/core';
import { donation } from 'src/model/donation';
import { DonationService } from '../shared/services/donation.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  donations : donation[] ; 
  constructor(private service:DonationService , private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.service.getDonation().subscribe((data:donation[])=> this.donations = data );
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {

    return this.sanitizer.bypassSecurityTrustUrl( "assets/images/"+imageUrl.substring(12));
  }
}
