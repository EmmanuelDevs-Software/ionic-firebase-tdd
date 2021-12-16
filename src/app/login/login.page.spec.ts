import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPage],
        imports: [
          IonicModule.forRoot(),
          BrowserAnimationsModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          RouterTestingModule,
          AngularFireModule.initializeApp(environment.firebaseConfig),
          AngularFirestoreModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('says "Welcome', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.header').textContent).toContain('Welcome');
  });

  it('Has an email field', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.email')).not.toEqual(null);
  });

  it('Has an password field', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.password')).not.toEqual(null);
  });

  it('Has an login button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button.login')).not.toEqual(null);
  });

  it('Has an register button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button.register')).not.toEqual(null);
  });
});
