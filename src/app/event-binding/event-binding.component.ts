import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  buttonName: string = "My Button";
  i = 0;
  spinnerMode = "determinate";
  btnEnable = true;

  constructor() { }

  ngOnInit() {
  }
  save() {
    console.log("Click");
  }

  inc() {
    this.i++;
    this.buttonName = "It was clicked " + this.i + ' times';
  }

  disabled() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminated";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate"
    }, 3000)
  }

  cbChange(event){
    console.log(event.checked)
  }
}
