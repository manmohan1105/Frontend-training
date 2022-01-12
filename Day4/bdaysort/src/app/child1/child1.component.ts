import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormsModule,NgForm } from '@angular/forms';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  constructor(private newservice : MyserviceService) { }
  
  ngOnInit(): void {
    
  }
  
  submit(form:NgForm){
    
    this.newservice.criteria=form.controls['criteria'].value;
   
    console.log(this.newservice.criteria)
    
  }

}
  

