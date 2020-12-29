import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor( public _HttpClient :HttpClient) {
    _HttpClient.get("https://www.googleapis.com/books/v1/volumes?q=seachName");
   }
   getAllBooks():Observable<any>
   {
     return this. _HttpClient.get("https://www.googleapis.com/books/v1/volumes?q=seachName") ;
   }

}
