import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { ITodo } from "./todo-interface";
//import { Todo } from "./todo.model";

@Injectable({
  providedIn:'root'

})
export class ToDoService{
  constructor(private http:HttpClient){}

  public url='/api/todos/';

getTodos():Observable<ITodo[]>{
 return this.http.get<ITodo[]>(this.url).pipe(
  tap(data=>console.log(JSON.stringify(data))),
  catchError(this.errorHandler)
 );

}
createTodo(todo:ITodo):Observable<ITodo>{
  const headers = new HttpHeaders({'Content-type':'application/json'});

 return this.http.post<ITodo>(this.url,todo,{headers})
 .pipe(tap(data=>console.log(data)),

 catchError(this.errorHandler));

}

private errorHandler(err:any){
  let errorMessage :string;
  if(err.error instanceof ErrorEvent){
    errorMessage=`An error occured ${err.error.message}`;
  }
  else{
    errorMessage=`Backend returned code ${err.status} ${err.body.error}`;
  }
  console.log(err);
  return throwError(errorMessage);
}
}