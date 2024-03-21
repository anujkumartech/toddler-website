import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent {
  currentShapeIndex = 0;
  shapes = [
    { class: 'circle', name: 'Circle' },
    { class: 'square', name: 'Square' },
    { class: 'triangle', name: 'Triangle' },
    { class: 'rectangle', name: 'Rectangle' },
    { class: 'pentagon', name: 'Pentagon'},
    { class: 'hexagon', name: 'Hexagon'},
    { class: 'star', name: 'Star'},
    { class: 'semi-circle', name: 'Semi-Circle'},
    { class: 'heart', name: 'Heart'},
    { class: 'diamond', name: 'Diamond'}
  ];
  autoplay = false;
  autoplayTimer?: Observable<number>;

  constructor() { }

  previousShape(): void {
    if (this.currentShapeIndex > 0) {
      this.currentShapeIndex--;
    }
  }

  nextShape(): void {
    if (this.currentShapeIndex < this.shapes.length - 1) {
      this.currentShapeIndex++;
    }
  }

  toggleAutoplay(): void {
    this.autoplay = !this.autoplay;

    if (this.autoplay) {
      this.autoplayTimer = timer(2000, 2000);
      this.autoplayTimer.subscribe(() => {
        this.nextShape();
        if (this.currentShapeIndex === this.shapes.length - 1) {
          this.currentShapeIndex = 0;
        }
      });
    } else if (this.autoplayTimer) {
      this.autoplayTimer = undefined;
    }
  }
}
