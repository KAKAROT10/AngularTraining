import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './_store/user.reducer';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('userSession', userReducer)
  ],
  exports: [LoginComponent]
})
export class UserModule { }
