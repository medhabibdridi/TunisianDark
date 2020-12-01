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

  registerForm: FormGroup;
  Lwhitelist: whitelist [] ;
white : whitelist = new whitelist() ;; 
  
  constructor(private service : WhitelistService ,  private router: Router) { }

  ngOnInit(): void {
   
    this.registerForm = new FormGroup({
      nom: new FormControl('test', [Validators.required, Validators.minLength(3)]),
      id: new FormControl('333', [Validators.required, Validators.minLength(3)]),
      FirstName: new FormControl('TEST', [Validators.required, Validators.minLength(3)]),
      rules: new FormControl('yes', Validators.required, ),
      mic: new FormControl('yes', Validators.required, ),
      discord: new FormControl('test#43', [Validators.required, Validators.pattern("[a-z]+#+[0-9]*"),Validators.minLength(5)]),

      age: new FormControl('23', [Validators.required, Validators.min(18)]
        ),
      
    });
  }
  get nom() {
    return this.registerForm.get('nom');
  }
  get id() {
    return this.registerForm.get('id');
  }
  get FirstName() {
    return this.registerForm.get('FirstName');
  }
  get mic() {
    return this.registerForm.get('mic');
  }
  get rules() {
    return this.registerForm.get('rules');
  }
  get discord() {
    return this.registerForm.get('discord');
  }
  get age() {
    return this.registerForm.get('age');
  }
  apply() { 
    this.service.addEmploye(this.registerForm.value).subscribe(
      resultat => {
        console.log("User added");
        console.log()
        this.router.navigateByUrl('/home');

        alert('HELLO NEW USER :) ' + JSON.stringify(this.registerForm.value));
      }, (err) => {
        console.log(err);
      }
    )}
  
    
    
            } 
  


