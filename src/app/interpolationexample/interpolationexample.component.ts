import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-interpolationexample',
  templateUrl: './interpolationexample.component.html',
  styleUrls: ['./interpolationexample.component.css']
})
export class InterpolationexampleComponent implements OnInit {
  products = products;
  textExample: string = 'This is pulled in from the typescript.';
  age: number = 23;
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }


  getExampleNumber() {
    return this.age;
  }


  constructor() {

  }

  ngOnInit() {
  }


}
