import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule,NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  record1  :object | any;
  criteria="default"
  constructor(private newService:MyserviceService) { }
  ngOnInit(): void {
    this.newService.getdata().subscribe((data)=>{
      this.record1=data;
    
  })}
  submit(){
    if (this.newService.criteria=="name1"){
      this.record1.sort(this.Sortdata("name"));
      
    }
    else if (this.newService.criteria=="date1") {
      
      this.record1.sort(this.Sortdata("date"));
    }
 
    this.newService.criteria="default"
  }
  
  ;
  
Sortdata(property: string ): (a: any, b: any) => number {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
      
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

  

}
