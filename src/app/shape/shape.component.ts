import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent {
  shapes = ['square', 'circle', 'triangle', 'rectangle', 'diamond', 'pentagon'];

  currentShapeIndex = 0;
  autoplay = false;
  autoplayTimer?: Observable<number>;

  constructor() { }

  previousShape() {
    if (this.currentShapeIndex > 0) {
      this.currentShapeIndex--;
    }
  }

  nextShape() {
    if (this.currentShapeIndex < this.shapes.length - 1) {
      this.currentShapeIndex++;
    }
  }

  toggleAutoplay() {
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
