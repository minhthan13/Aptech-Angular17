import {
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate-app',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculate-app.component.html',
  styleUrl: './calculate-app.component.css',
})
export class CalculateAppComponent implements OnInit {
  ngOnInit(): void {
    this.resultTest = '';
  }
  num1: number;
  num2: number;

  resultTest: string = '';
  countCorrect: number;
  countIncorrect: number;
  Percentcorrect: number;

  start() {
    do {
      this.num1 = Math.floor(Math.random() * 11);
      this.num2 = Math.floor(Math.random() * 11);
      this.countCorrect = 0;
      this.countIncorrect = 0;
      this.Percentcorrect = 0;
    } while (this.num1 + 1 > this.num2);
  }
  CheckSubtraction(event: any) {
    let a = event.target.value;
    if (a >= this.num1 && a <= this.num2) {
      this.resultTest = 'Correct';
      this.countCorrect++;
    } else {
      this.resultTest = 'Incorrect';
      this.countIncorrect++;
    }
    this.Percentcorrect = Math.floor(
      (this.countCorrect / (this.countCorrect + this.countIncorrect)) * 100
    );
  }
}
