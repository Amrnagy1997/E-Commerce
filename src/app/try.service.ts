import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TryService {

  constructor(private http:HttpClient) { }

catgeoryone() {
  this.http.get('https://fakestoreapi.com/products/1')
}
}


