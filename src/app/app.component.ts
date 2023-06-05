import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

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
  subject=new ReplaySubject(2);
  constructor(){
    this.subject.next("Hello1");
    this.subject.next("Hello2");
    this.subject.subscribe(this.observer);
    this.subject.next("Hello3");
    this.subject.subscribe(this.observer);

  }
}
