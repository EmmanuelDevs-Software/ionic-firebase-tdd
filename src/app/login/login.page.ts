import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../services/user-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    public authService: UserAuthenticationService
  ) {}

  ngOnInit() {}

  goToRegister() {
    this.router.navigate(['/registration']);
  }

  logIn(email, password) {
    this.authService
      .login(email.value, password.value)
      .then((res) => {
        this.router.navigate(['todo-list']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
