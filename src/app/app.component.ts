import { Component } from '@angular/core';
import { Subject, interval, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  observer={
    next:(val:any)=>console.log('next-',val),
    error:(err:any)=>console.error(err),
    complte:console.log("Completed")    
  }
  subject=new Subject();
  subscriber1=this.subject.subscribe(this.observer);
  subscriber2=this.subject.subscribe(this.observer);

  intervalObs=interval(1000).pipe(tap(val=>console.log("New value",val)));
  constructor(){
    this.subject.next("Hello");
    this.intervalObs.subscribe(this.subject);
  }
}
