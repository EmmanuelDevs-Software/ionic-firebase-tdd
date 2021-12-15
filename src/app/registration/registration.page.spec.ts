import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrationPage } from './registration.page';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistrationPage', () => {
  let component: RegistrationPage;
  let fixture: ComponentFixture<RegistrationPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RegistrationPage],
        imports: [
          IonicModule.forRoot(),
          BrowserAnimationsModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          AngularFireModule.initializeApp(environment.firebaseConfig),
          AngularFirestoreModule,
          RouterTestingModule
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(RegistrationPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('says "Register User', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.header').textContent).toContain(
      'Register User'
    );
  });

  it('Has an email field', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.email')).not.toEqual(null);
  });

  it('Has an password field', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.password')).not.toEqual(null);
  });

  it('Has submit button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.register')).not.toEqual(null);
  });

  it('Has back button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.backButton')).not.toEqual(null);
  });
});
