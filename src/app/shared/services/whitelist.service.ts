import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { whitelist } from 'src/model/whitelist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhitelistService {
  url = "http://localhost:3000/whitelist/"
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
  }
  constructor(private http:HttpClient) { }

  addwhitelist(e: whitelist) : Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(e);
    console.log(body)

    return this.http.post(this.url , body,{'headers':headers})
   }
   getWhitelist(){
    return this.http.get<whitelist[]>(this.url)

  }
  Delete(id){
    return this.http.delete(this.url + id)
  }
 
   Search(id) {
     return this.http.get(this.url + id) ; 
   }
   put(e: whitelist){
     return this.http.put(this.url , e ) ;
   }
  
}
