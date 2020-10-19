import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate{
  url = 'http://localhost:3000/admin'

  constructor(
    private httpClient: HttpClient,private router:Router) { }

  

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.httpClient.post(this.url + '/signin', body)
  }




  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean  {
    
    if(sessionStorage['token']){
    
      return true

    }

    this.router.navigate(['/login'])

    return false
  }







}
