import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { delay, map, pipe } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading:boolean=true
  // url="https://angular-movie-app-23f3f-default-rtdb.firebaseio.com/"
  url='http://localhost:3000/movies';
  trendingMovies:any;
  theatreMovies:any;
  popularMovies:any;
  newtrendingMovies:any;
  newpopularMovies:any;
  newtheatreMovies:any
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getTheatreMovies()
    this.getPopularMovies()
  }
  getTrendingMovies(){
    this.http.get(this.url)
    .pipe(map(response=>{
      const movies:any=[]
      for(const key in response){
        movies.push({...(<any>response)[key],id:key})
      }
      return movies;}
      ),delay(2000)).subscribe(movies=>{
    this.loading=false
    this.trendingMovies=movies
    if(this.trendingMovies?.length>6){
      this.newtrendingMovies=this.trendingMovies.slice(0,6)
    }else{
      this.newtrendingMovies=this.trendingMovies
    }
    console.log(this.newtrendingMovies)});
  }

  getTheatreMovies(){
    this.http.get('http://localhost:3000/theatre').subscribe(movies=>{
    this.theatreMovies=movies
    if(this.theatreMovies?.length>6){
      this.newtheatreMovies=this.theatreMovies.slice(0,6)
    }else{
      this.newtheatreMovies=this.theatreMovies
    }
    console.log(this.theatreMovies)});
  }
  getPopularMovies(){
    this.http.get('http://localhost:3000/popular').subscribe(movies=>{
    this.popularMovies=movies
    console.log(this.popularMovies)});
  }
  goToMovie(type:string,id:string){
   this.router.navigate(['movie',type,id])
  }
  wiewall(value:any){
    if(value.innerHTML!="Show less"){
    value.innerHTML="Show less"
    this.newtrendingMovies=this.trendingMovies
  }else{
    value.innerHTML="View All"
    this.newtrendingMovies=this.trendingMovies.slice(0,6)
  }

  }
  wiewall2(value:any){
    if(value.innerHTML!="Show less"){
    value.innerHTML="Show less"
    this.newtheatreMovies=this.theatreMovies
  }else{
    value.innerHTML="View All"
    this.newtheatreMovies=this.theatreMovies.slice(0,6)
  }
}

}
