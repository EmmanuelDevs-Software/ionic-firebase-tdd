import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { UserAuthenticationService } from './user-authentication.service';

describe('UserAuthenticationService', () => {
  let service: UserAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule,
      ],
      providers: [AngularFireAuth],
    });
    service = TestBed.inject(UserAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const generateEmailAndPassword = () => {
    const randomString = () =>
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const email = `${randomString()}@${randomString()}.test`;
    const password = randomString();

    return { email, password };
  };

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('creates an account', async () => {
    const { email, password } = generateEmailAndPassword();

    const result = await service.createAccount(email, password);
    expect(result).toEqual(true);
  });

  it('logs users in', async () => {
    const { email, password } = generateEmailAndPassword();

    const result = await service.createAccount(email, password);
    expect(result).toEqual(true);

    const loginResult = await service.login(email, password);
    expect(loginResult).toEqual(true);
  });

  it('does not log users in when the email and password are invalid', async () => {
    const loginResult = await service.login(
      'invalid@email.invalid',
      'password'
    );
    expect(loginResult).toEqual(false);
  });

  it('reset email', async () => {
    const { email, password } = generateEmailAndPassword();

    const result = await service.createAccount(email, password);
    expect(result).toEqual(true);

    const loginResult = await service.login(email, password);
    expect(loginResult).toEqual(true);

    const resetPassword = await service.PasswordRecover(email);
    expect(resetPassword).toEqual(true);
  });

  it('isLoggin', async () => {
    const { email, password } = generateEmailAndPassword();
    let user = {
      user: 1,
      email: email,
      displayName: 'user.displayName',
      photoURL: 'user.photoURL',
      emailVerified: 'user.emailVerified',
    };
    const result = await service.createAccount(email, password);
    expect(result).toEqual(true);

    const loginResult = await service.login(email, password);
    expect(loginResult).toEqual(true);

    const isLoggedIn = await service.isLoggedIn(user);
    expect(isLoggedIn).toEqual(true);
  });

  it('SetUserData', async () => {
    const { email, password } = generateEmailAndPassword();
    let user = {
      user: 1,
      email: email,
      displayName: 'user.displayName',
      photoURL: 'user.photoURL',
      emailVerified: 'user.emailVerified',
    };
    const result = await service.createAccount(email, password);
    expect(result).toEqual(true);

    const loginResult = await service.login(email, password);
    expect(loginResult).toEqual(true);

    const setUserData = await service.SetUserData(user);
    expect(setUserData).toEqual(false);
  });

  it('logout', async () => {
    const { email, password } = generateEmailAndPassword();

    const result = await service.createAccount(email, password);
    expect(result).toEqual(true);

    const loginResult = await service.login(email, password);
    expect(loginResult).toEqual(true);

    const logout = await service.logout();
    expect(logout).toEqual(true);
  });
});
