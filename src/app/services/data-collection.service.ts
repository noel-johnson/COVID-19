import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';

  graphUrl = "https://corona.lmao.ninja/v2/historical/india?lastdays=30";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.apiUrl}all`, );
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }
  getCountryDetails(name){
    return this.http.get(`${this.apiUrl}countries/${name}`);
  }

  getGraphData(){
    return this.http.get(`${this.graphUrl}`);
  }
  
}
 