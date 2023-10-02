import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers:[MyserviceService]
})
export class CreateComponent implements OnInit {
   movie={
    
    id:0,
    name:"",
    cover:"",
    ratings:"",
    reviews:[]
    
  }
  x=false;
  
  errormsg2:string=""
  errormsg:string=""
  constructor(private myservice:MyserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  CreateMovie(form:any){
  
  
  console.log(form)
   this.myservice.createMovie(this.movie).subscribe((data: any) => {console.log(data),
     this.router.navigate(['/home'])  })
  }
  rangevalidator(rating:any,rating2:any){
    if(rating2.value<0||rating2.value>10){
      rating.control.status="INVALID"
      rating.control.errors="range"
      rating2.classList.add("range")
      this.errormsg="Range error"
    }else if(rating2.value==""){
       this.errormsg=""
    }else if(isNaN(rating2.value)==true){
      rating.control.status="INVALID"
      this.errormsg="Input must be number"
    }else if(rating2.value>=0&&rating2.value<=10){
      rating.control.status="VALID"
    }
    console.log(this.movie.ratings)
    
  }
  check(img2:any,img:any){
    const extansions=["png","jpg","svg"]
    const extansion=img2.value.split(".").pop();
    if(img2.value==""){
      this.errormsg2="";
    }
     else if(extansions.indexOf(extansion)==-1){
      img.control.status="INVALID"
      this.errormsg2="Not correct format";
    }else{
      img.control.status="VALID"
      this.errormsg2="";
    }
    console.log(extansions.indexOf(extansion))
    
  }

}
