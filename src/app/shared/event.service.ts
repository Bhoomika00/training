import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ievent } from 'src/app/events/event-list/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url='api/events/'
  constructor(private http:HttpClient) { }

  getevents():Observable<Ievent[]>{

    return this.http.get<Ievent[]>(this.url);


  }
}
