import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataCollectionService {

  /* Get the api's you want and put it in the variables like 'https:/,,,' 
  */
 apiUrl = "https://coronavirus-19-api.herokuapp.com/";

  graphUrl = "https://corona.lmao.ninja/v2/historical/";
  graphWorldUrl = "https://corona.lmao.ninja/v2/historical/all";

  statesUrlUS ="https://corona.lmao.ninja/v2/states?sort&yesterday";
  statesUrlIndia="https://api.covid19india.org/data.json";

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
