import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  type='';
  id='';
  url='';
  movies:any;
  movie:any;
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.type=this.route.snapshot.params['type']
     this.id=this.route.snapshot.params['id']
     if(this.type==='trending'){
      this.url='http://localhost:3000/movies'
      // this.url="https://angular-movie-app-23f3f-default-rtdb.firebaseio.com/"
     }
     if(this.type==='theatre'){
      this.url='http://localhost:3000/theatre'
     }
     if(this.type==='popular'){
      this.url='http://localhost:3000/popular'
     }
     this.getMovie()
  }
  getMovie(){
   this.http.get(this.url+'/'+this.id).subscribe((movies)=>
    {this.movie=movies;
    //   console.log(movies)
    // let index=this.movies.findIndex(
    //   (movie:{id:string})=>movie.id==this.id)
    //    if(index>-1){
    //     this.movie=this.movies[index];
    //    }
    })


    }
  }


