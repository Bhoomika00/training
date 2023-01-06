import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'card-list',
  template: `

  <h1> Card List</h1>

      <card>
        <header #header><h1>Angular Event</h1></header>
        <main #main>
        <h3>Location:Pune</h3>
        <h3>Time:10am to 5pm</h3>
        </main>
        <footer #footer>Visit us at:www.events.com</footer>
    </card>

      <card>
      <header #header><h1>Corporate security Event</h1></header>
        <main #main>
        <h3>Location:Mumbai</h3>
        <h3>Time:10am to 5pm</h3>
        </main>
        <footer #footer>Visit us at:www.events.com</footer>
      </card>

     

  `,
})
export class CardListComponent implements OnInit {
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    const obs1=new Observable((data)=>data.next(Math.random()));
    console.log('plain observables:')
    obs1.subscribe((d)=>console.log(d));
    obs1.subscribe((d)=>console.log(d));

    //subject is multicast.same data for multiple subsribers
    // subjects can observe the same data
    const subj=new Subject();
    console.log('subject :')
    subj.subscribe((d)=>console.log(d));
    subj.subscribe((d)=>console.log(d));

    subj.next(Math.random());

   /*  //http get request using observables
    const data=this.http.get('api/products');
    data.subscribe((d)=>console.log(d));
    data.subscribe((d)=>console.log(d));

     */

    const sub1=new Subject();
    const data=this.http.get('api/products');
    sub1.subscribe((d)=>console.log(d));
    sub1.subscribe((d)=>console.log(d));
    const result=data.subscribe(sub1);


  }



}