import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'demo';
  inamount=0;
  outamount=0;
  incurr="IND";
  outcurr="USD";
  allcurr=["IND","USD","EUR"]
  onconvert() {
    
    if (this.incurr=="IND" && this.outcurr=="USD"){
      this.outamount=this.inamount/74;
    }
    else if(this.incurr=="IND" && this.outcurr=="EUR"){
      this.outamount=this.inamount/84;
    }
    else if(this.incurr=="USD" && this.outcurr=="IND"){
      this.outamount=this.inamount*74;
    }
    else if(this.incurr=="USD" && this.outcurr=="EUR"){
      this.outamount=this.inamount*(0.88);
    }
    else if(this.incurr=="EUR" && this.outcurr=="IND"){
      this.outamount=this.inamount/84;
    }
    else if(this.incurr=="EUR" && this.outcurr=="USD"){
      this.outamount=this.inamount*(1.33);
    }

    else{
      this.outamount=this.inamount;

    }
    
  }
}
