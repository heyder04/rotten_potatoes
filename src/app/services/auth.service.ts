import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  login(uname:string,pword:string){
    if(uname==='heyder04_' && pword==='heyder04'){
      return 200;    }
      else{
        return 403;
      }
  }

  logOut(){
    this.router.navigate(['login'])

  }
}
