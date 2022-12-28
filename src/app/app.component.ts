import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = 1;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  getLabel() {
    if (this.counter === 0) {
      return 'Demo Counter';
    }
    return this.counter >= 0 ? 'Positive' : 'Negative';
  }

  getClass() {
    return this.counter >= 0 ? 'green' : 'red';
  }

  addNumberControl() {
    let _class = ' even';
    if (this.counter % 2 !== 0) {
      _class = ' odd';
    }
    return this.getClass() + _class;
  }

  addLabelControl() {
    let _label = ' and even';
    if (this.counter % 2 !== 0) {
      _label = ' and odd';
    }
    return this.getLabel() + _label;
  }
}
