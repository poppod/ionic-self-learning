import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = "Simple app";
  count = 0;
  constructor() {}
  onClick() {
    switch (this.count) {
      case 0: this.text = "Hello guy"; break;
      case 1: this.text = " this is my simple app"; break;
      case 2: this.text = "When you click me!!"; break;
      case 3: this.text = " text It's change"; break;
      case 4: this.text = " Ok this enough :) and loop to start"; break;
      
    }
    this.count++;
    if (this.count == 5) this.count = 0;

  }
}
