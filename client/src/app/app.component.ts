import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScorecardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Golf Score Tracker';
}
