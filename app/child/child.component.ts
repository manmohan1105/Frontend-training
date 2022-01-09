import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private appService: AppService) { }
  demodata :object | any;
  ngOnInit(): void {
    this.appService.getData().subscribe((data)=>{
      console.log(data);
      this.demodata=data;

    })

  }

}
