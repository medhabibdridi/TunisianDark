import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { donation } from 'src/model/donation';


@Injectable({
  providedIn: 'root'
})
export class DonationService {

  url = 'http://localhost:3000/donation/'
  constructor(private http:HttpClient) { }
  getDonation(){
    return this.http.get<donation[]>(this.url)

  }
  DeleteDonation(id){
    return this.http.delete(this.url + id)
  }
  adddonation(e: donation){
    return this.http.post(this.url, e);
   }
   Search(id) {
     return this.http.get(this.url + id) ; 
   }
   put(e: donation){
     return this.http.put(this.url , e ) ;
   } }
