import { Component } from '@angular/core';
import { AsyncSubject} from 'rxjs';
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
  subject=new AsyncSubject();
  constructor(){
    this.subject.subscribe(this.observer);
    this.subject.subscribe(this.observer);
    this.subject.next("hello");
    this.subject.next("hello1");
    this.subject.next("hello2");
    this.subject.complete();
  }
  
}
