import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormsModule,NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
 
  criteria="default";
  private _jsonURL='assets/data.json';
  record: any;
  constructor(private http: HttpClient) {
 

  
  }
  getdata(){
    
    return this.http.get(this._jsonURL)
      
    }
 

}
