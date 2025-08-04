import { Routes } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: ScorecardComponent},
  { path: '**', redirectTo: '' }  // Wildcard route for a 404 page
];
