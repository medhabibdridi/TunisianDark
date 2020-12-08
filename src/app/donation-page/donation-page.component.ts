import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DonationService } from '../shared/services/donation.service';
import { donation } from 'src/model/donation';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-donation-page',
  templateUrl: './donation-page.component.html',
  styleUrls: ['./donation-page.component.css']
})
export class DonationPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: DonationService,
    private location: Location,
    private sanitizer: DomSanitizer) { }
    @Input() donation: donation;
  ngOnInit(): void {
    this.getMovieFromRoute();

  }
  
  getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get movie from id" ?
    this.service.getdonationFromId(id).subscribe(donation => this.donation = donation);          
  }
  save(): void {
    this.service.updateMovie(this.donation).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {

    return this.sanitizer.bypassSecurityTrustUrl( "assets/images/"+imageUrl.substring(12));
  }
}
