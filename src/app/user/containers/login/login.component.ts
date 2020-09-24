import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UserActions } from '../../_store/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit, OnDestroy {

  errorMessage: string;
  isLoggedIn: boolean;
  store$: Subscription;

  email: string;
  password: string;
  constructor(
    private store: Store<{ userSession: any }>,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.store$ = this.store.select('userSession').subscribe((data) => {
      this.errorMessage = data.error;
      this.isLoggedIn = !!data.user;
    });
  }

  doLogin() {
    // console.log(this.email, this.password);
    this.auth.login(this.email, this.password).subscribe(
      (res) => {
        // console.log('login response', res);
        this.store.dispatch(UserActions.signInSuccess({ user: res }));
      },
      (err) => {
        // console.log('auth error', err);
        this.store.dispatch(UserActions.signInError({ error: err.error.error.message }));
      }
    );
  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
  }

}
