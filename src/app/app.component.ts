import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  selectedCurrency: string = "INR";
  updateCurrency(data) {
    // console.log(data);
    this.selectedCurrency = data;
  }
}
