import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {
  currentNumber = 1;
  autoplay = false;
  autoplayInterval: any;
  readonly maxNumber = 50; // Declare a readonly property for the maximum number


  constructor() { }

  ngOnInit(): void {
  }

  toggleAutoplay(): void {
    this.autoplay = !this.autoplay;
    if (this.autoplay) {
      this.autoplayInterval = setInterval(() => {
        this.currentNumber++;
        if (this.currentNumber > this.maxNumber) { // Use the maxNumber property here
          this.currentNumber = 1;
        }
      }, 2000);
    } else {
      clearInterval(this.autoplayInterval);
    }
  }
}
