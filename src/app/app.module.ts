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
    HttpClientModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
