import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.component.html',
  styleUrls: ['./alphabets.component.scss']
})
export class AlphabetsComponent implements OnInit {
  isUppercase = true; // New property to track uppercase/lowercase
  alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  currentAlphabet = this.alphabetArray[0];
  autoplay = false;
  autoplayInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCase(): void {
    this.isUppercase = !this.isUppercase;
    if (this.isUppercase) {
      this.alphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    } else {
      this.alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    }
    this.currentAlphabet = this.alphabetArray[0]; // Reset to first alphabet of the new case
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
      }, 2000);
    } else {
      clearInterval(this.autoplayInterval);
    }
  }
}
