import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface HoleScore {
  hole: number;
  par: number;
  strokes: number;
  fairwayHit: boolean;
  greenInRegulation: boolean;
  putts: number;
}

@Component({
  standalone: true,
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class ScorecardComponent {
  scores: HoleScore[] = this.initializeScores();
  selectedIndex = 0;

  private initializeScores(): HoleScore[] {
    return Array.from({ length: 18 }, (_, i): HoleScore => ({
      hole: i + 1,
      par: 4,
      strokes: 0,
      fairwayHit: false,
      greenInRegulation: false,
      putts: 0
    }));
  }

  updateScore<K extends keyof HoleScore>(index: number, field: K, value: HoleScore[K]) {
    this.scores[index][field] = value;
  }


  flipNext() {
    if (this.selectedIndex < this.scores.length - 1) {
      this.selectedIndex++;
    }
  }

  flipPrev() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

}
