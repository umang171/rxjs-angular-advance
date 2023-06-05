import { Component } from '@angular/core';
import { Observable, Subject, interval, share, tap } from 'rxjs';

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

  intervalObs=interval(1000).pipe(tap(val=>console.log("New value",val)));
  constructor(){
    let multiCast=this.intervalObs.pipe(share());
    const m1=multiCast.subscribe(this.observer);
    const m2=multiCast.subscribe(this.observer);
    setTimeout(()=>{
      m1.unsubscribe();
      m2.unsubscribe();
    },5000);
  }
}
