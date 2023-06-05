import { Component } from '@angular/core';
import { Observable, Subject, interval, tap } from 'rxjs';

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
  subject2=new Subject();
  subscriber1=this.subject.subscribe(this.observer);
  subscriber2=this.subject.subscribe(this.observer);

  intervalObs=interval(1000).pipe(tap(val=>console.log("New value",val)));
  constructor(){
    // this.subject.next("Hello");
    // this.intervalObs.subscribe(this.subject);
    this.subject2.subscribe(isLogin=>isLogin?console.log("successfull login"):console.log("Logout"));
    this.subject2.next(true);
    setTimeout(() => {
    this.subject2.next(false);
      
    }, 3000);
  }
}
