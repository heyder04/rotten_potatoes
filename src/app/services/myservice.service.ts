import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  url=" http://localhost:3000/movies"
  // url="https://angular-movie-app-23f3f-default-rtdb.firebaseio.com/"

  constructor(private http:HttpClient) { }
  createMovie(movie:any):Observable<any>{
    return this.http.post(this.url,movie).pipe(
      tap(data=>console.log(data)),
      catchError(this.handleError)
    )
  }
  handleError(error:any){
    return throwError(error.message)
  }
}
