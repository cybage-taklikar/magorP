import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare var VanillaTilt;
@Component({
  selector: 'app-main3',
  templateUrl: './main3.component.html',
  styleUrls: ['./main3.component.scss'],
})
export class Main3Component implements OnInit {
  @Output() myevent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    VanillaTilt.init(document.querySelectorAll('.card'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });
  }

  scrollToComponent(str: string) {
    console.log(str);
    this.myevent.emit(str);
  }
}
