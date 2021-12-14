import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  async createAccount(email: string, password: string) {
    try {
      const result = await this.angularFireAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return !!result;
    } catch (e) {
      return false;
    }
  }

  async login(email: string, password: string) {
    try {
      const result = await this.angularFireAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return !!result;
    } catch (e) {
      return false;
    }
  }

  signoutUser(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
      }
    });
  }

  async logout() {
    try {
      if (this.angularFireAuth.currentUser) {
        const result = this.angularFireAuth.signOut();
        return !!result;
      }
    } catch (e) {
      return false;
    }
  }

  userDetails() {
    return this.angularFireAuth.user;
  }
}
