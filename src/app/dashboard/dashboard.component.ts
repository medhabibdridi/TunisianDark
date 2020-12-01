import { Component, OnInit } from '@angular/core';
import { whitelist } from 'src/model/whitelist';
import { WhitelistService } from '../shared/services/whitelist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  whitelist : whitelist[]
  constructor(private service:WhitelistService) { }

  ngOnInit(): void {
    this.service.getWhitelist().subscribe((data:whitelist[])=> this.whitelist = data );
  }

  delete(id){
    this.service.Delete(id).subscribe(
      () => this.whitelist = this.whitelist.filter(whitelist => whitelist.id != id)
    );
  }
}
