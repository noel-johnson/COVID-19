import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataCollectionService {
  apiUrl = "https://coronavirus-19-api.herokuapp.com/";

  graphUrl = "https://corona.lmao.ninja/v2/historical/";
  graphWorldUrl = "https://corona.lmao.ninja/v2/historical/all";

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
}
