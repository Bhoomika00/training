import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
//import { throwError } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pageTitle:string='Online Shopping';

get isLoggedIn():boolean{
  //service to return the loggedInstatus ofthe user
  //we will have to inject a authentication service which will checkt the loggedIn
 //still pending
  return this.authservice.isLoggedIn();
}


get userName():string{

//thru the authentication service we can the current user
//that we will return
if(this.authservice.currentUser)
return this.authservice.currentUser?.userName;

return '';

}
constructor(private router:Router,private authservice:AuthService){}


  ngOnInit(): void {
  }

  logOut():void{

    //this should also use the authserviceto logout the current user
    //you can route to some url
    this.authservice.logOut();
    this.router.navigate(['/welcome']);
  }
}
