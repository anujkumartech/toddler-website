import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.component.html',
  styleUrls: ['./alphabets.component.scss']
})
export class AlphabetsComponent implements OnInit {
  alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  currentAlphabet = this.alphabetArray[0];
  autoplay = false;
  autoplayInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAutoplay(): void {
    this.autoplay = !this.autoplay;
    if (this.autoplay) {
      this.autoplayInterval = setInterval(() => {
        let currentIndex = this.alphabetArray.indexOf(this.currentAlphabet);
        currentIndex++;
        if (currentIndex >= this.alphabetArray.length) {
          currentIndex = 0;
        }
        this.currentAlphabet = this.alphabetArray[currentIndex];
      }, 1000);
    } else {
      clearInterval(this.autoplayInterval);
    }
  }
}
