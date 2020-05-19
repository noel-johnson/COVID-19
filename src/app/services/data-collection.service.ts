import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataCollectionService {

  /* Get the api's you want and put it in the variables like 'https:/,,,' 
  */
  apiUrl = true;

  graphUrl = true;
  graphWorldUrl = true;

  statesUrlUS =true;
  statesUrlIndia=true;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}all`);
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }
  getCountryDetails(name) {
    return this.http.get(`${this.apiUrl}countries/${name}`);
  }

  getGraphData(name) {
    return this.http.get(`${this.graphUrl}${name}?lastdays=30`);
  }

  getGraphDataWorld() {
    return this.http.get(`${this.graphWorldUrl}`);
  }

  getstatesDataUS(){
    return this.http.get(`${this.statesUrlUS}`);
  }

  getstatesDataIN(){
    return this.http.get(`${this.statesUrlIndia}`);
  }
}
