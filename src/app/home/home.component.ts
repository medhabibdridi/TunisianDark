import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth : AuthService, private router : Router ) { }

  ngOnInit(): void {
  }
 go () {
   this.router.navigateByUrl('/admin')
 }
}
