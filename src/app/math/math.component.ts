import { Component, OnInit } from '@angular/core';

interface MathProblem {
  num1: number;
  num2: number;
  correctAnswer: number;
  options: number[];
}

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {
  currentProblem: MathProblem;
  isCorrect: boolean | null = null;
  answeredProblems: MathProblem[] = [];
  selectedFirstNumber: number = 1;
  availableNumbers = [1, 2, 3, 4, 5];

  constructor() {
    this.currentProblem = this.generateProblem();
  }

  ngOnInit(): void {}

  generateProblem(): MathProblem {
    // Use selectedFirstNumber as num1
    const num1 = this.selectedFirstNumber;
    const num2 = Math.floor(Math.random() * 5) + 1;
    const correctAnswer = num1 + num2;
    
    // Generate incorrect options
    const options = [correctAnswer];
    while (options.length < 3) {
      const randomOption = Math.floor(Math.random() * 9) + 1;
      if (!options.includes(randomOption) && randomOption !== correctAnswer) {
        options.push(randomOption);
      }
    }
    
    // Shuffle options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    return { num1, num2, correctAnswer, options };
  }

  checkAnswer(selectedAnswer: number): void {
    this.isCorrect = selectedAnswer === this.currentProblem.correctAnswer;
    
    if (this.isCorrect) {
      this.answeredProblems.push(this.currentProblem);
      // Only generate new problem after correct answer
      setTimeout(() => {
        this.isCorrect = null;
        this.currentProblem = this.generateProblem();
      }, 2000);
    } else {
      // For incorrect answer, just show feedback for 2 seconds
      setTimeout(() => {
        this.isCorrect = null;
      }, 2000);
    }
  }

  onFirstNumberChange(number: number): void {
    this.selectedFirstNumber = number;
    this.currentProblem = this.generateProblem();
    this.answeredProblems = []; // Reset answered problems when first number changes
  }
}