import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { donation } from 'src/model/donation';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

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
   put(e: donation ,id){
     return this.http.put(this.url , e ) ;
   }



   
   getdonationFromId(id: number): Observable<any> {
    
    const url = `${this.url}/${id}`;
    return this.http.get<donation>(url).pipe(
      tap(selectedMovie => console.log(`selected movie = ${JSON.stringify(selectedMovie)}`)),
      catchError(error => of(new donation()))
    );
  }
  updateDonation(don: donation): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(`${this.url}/${don.id}`, don, httpOptions).pipe(
      tap(updatedDonation => console.log(`updated donation = ${JSON.stringify(updatedDonation)}`)),
      catchError(error => of(new donation()))
    );
  }
  }
