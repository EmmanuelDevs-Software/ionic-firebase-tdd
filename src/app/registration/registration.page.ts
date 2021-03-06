import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../services/user-authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authService: UserAuthenticationService,
    public router: Router
  ) { }

  ngOnInit(){}

  signUp(email, password){
      this.authService.createAccount(email.value, password.value)      
      .then((res) => {
        // Do something here
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
