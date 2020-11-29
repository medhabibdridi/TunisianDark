import { Injectable } from '@angular/core';
import { donation } from 'src/model/donation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  url = 'http://localhost:3000/donation/'
  constructor(private http:HttpClient) { }
  getDonation(){
    return this.http.get<donation[]>(this.url)

  }
  DeleteEmploye(id){
    return this.http.delete(this.url + id)
  }
  addEmploye(e: donation){
    return this.http.post(this.url, e);
   }
   Search(id) {
     return this.http.get(this.url + id) ; 
   }
   put(e: donation){
     return this.http.put(this.url , e ) ;
   } }
