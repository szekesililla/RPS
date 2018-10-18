import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ultimateness',
  templateUrl: './ultimateness.component.html',
  styleUrls: ['./ultimateness.component.css']
})
export class UltimatenessComponent implements OnInit {
  @Output() elementsSet = new EventEmitter<{elements: number}>();

  onChangeElements(elements) {
    this.elementsSet.emit(elements);
  }

  constructor() { }

  ngOnInit() {
  }

}
