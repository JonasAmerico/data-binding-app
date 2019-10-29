import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "Jonas";
  age = 100;
  person = {
    name: "Jonas",
    lastName: "Silva",
    age: 50,
    address: "Rua Valparaiso"
  }
  constructor() { }

  ngOnInit() {
  }

}
