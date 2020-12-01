import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { whitelist } from 'src/model/whitelist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhitelistService {
  url = "http://localhost:3000/whitelist"
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
  }
  constructor(private http:HttpClient) { }

  addEmploye(e: whitelist) : Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(e);
    console.log(body)

    return this.http.post(this.url , body,{'headers':headers})
   }

  
}
