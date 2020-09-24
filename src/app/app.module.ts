import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { RowDirective } from './directives/row.directive';
import { ColumnDirective } from './directives/column.directive';
import { CurrencyService } from './services/currency.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { currencyReducer } from './_store/reducers/currency.reducer';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    CurrencyComponent,
    ConversionPipe,
    ImgFallbackDirective,
    NumbersOnlyDirective,
    RowDirective,
    ColumnDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    StoreModule.forRoot({ currency: currencyReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
