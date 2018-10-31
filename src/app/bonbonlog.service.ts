import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BonbonlogService {

  private apiUrl = "https://fr-en.openfoodfacts.org/category/candies.json";

  constructor(private http: HttpClient) { }

  apiCall() {
    return this.http.get(this.apiUrl)
  }


}
