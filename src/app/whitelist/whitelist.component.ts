import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { whitelist } from 'src/model/whitelist';
import { WhitelistService } from '../shared/services/whitelist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-whitelist',
  templateUrl: './whitelist.component.html',
  styleUrls: ['./whitelist.component.css']
})
export class WhitelistComponent implements OnInit {

  whitelistform: FormGroup;
  Lwhitelist: whitelist [] ;
white : whitelist = new whitelist() ;; 
  
  constructor(private service : WhitelistService ,  private router: Router) { }

  ngOnInit(): void {
   
    this.whitelistform = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
     
      FirstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rules: new FormControl('', Validators.required, ),
      mic: new FormControl('', Validators.required, ),
      discord: new FormControl('', [Validators.required, Validators.pattern("[a-z]+#+[0-9]*"),Validators.minLength(5)]),

      age: new FormControl('', [Validators.required, Validators.min(18)]
        ),
      
    });
  }
  get nom() {
    return this.whitelistform.get('nom');
  }
 
  get FirstName() {
    return this.whitelistform.get('FirstName');
  }
  get mic() {
    return this.whitelistform.get('mic');
  }
  get rules() {
    return this.whitelistform.get('rules');
  }
  get discord() {
    return this.whitelistform.get('discord');
  }
  get age() {
    return this.whitelistform.get('age');
  }
  apply() { 
    this.service.addwhitelist(this.whitelistform.value).subscribe(
      resultat => {
        console.log("User added");
        console.log()
        this.router.navigateByUrl('/home');

       
      }, (err) => {
        console.log(err);
      }
    )}
  
    
    









  } 
  


