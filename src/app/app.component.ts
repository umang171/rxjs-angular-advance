import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  subject=new BehaviorSubject("Hello");
  constructor(){
    const sub1=this.subject.subscribe(this.observer);
    const sub2=this.subject.subscribe(this.observer);
    this.subject.next("World");
    const sub3=this.subject.subscribe(this.observer);
    
  }
}
