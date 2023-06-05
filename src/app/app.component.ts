import { Component } from '@angular/core';
import { ReplaySubject, Subject, fromEvent, mergeMapTo, shareReplay } from 'rxjs';
import {ajax} from 'rxjs/ajax'
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
  constructor(){
    const ajax$=ajax("https://api.github.com/users/octocat");
    const click=fromEvent(document,"click");
    const clickReq=click.pipe(mergeMapTo(ajax$),shareReplay())
    clickReq.subscribe(this.observer);
    setTimeout(()=>{
      console.log("subscribing..");
      clickReq.subscribe(this.observer);
    },3000);
  }
  
}
