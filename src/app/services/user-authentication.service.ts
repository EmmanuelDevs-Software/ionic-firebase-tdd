import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    public afStore: AngularFirestore
  ) {}

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

  isLoggedIn(user) {
    try {
      // const user = JSON.parse(localStorage.getItem('user'));
      if (user !== null && user.emailVerified !== false) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  async SetUserData(user) {
    try {
      const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
        `users/${user.uid}`
      );
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      };
      let result = await userRef.set(userData, {
        merge: true,
      });

      return result;
    } catch (e) {
      return false;
    }
  }

  async PasswordRecover(passwordResetEmail: string) {
    try {
      const result = await this.angularFireAuth
        .sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
          return true;
        });
      return !!result;
    } catch (e) {
      return false;
    }
  }
}
