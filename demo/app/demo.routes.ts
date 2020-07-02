import { Route } from '@angular/router';

import { DemoComponent } from './components/demo/demo.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';

export const routes: Route[] = [
  {
    path: 'home',
    component: DemoComponent
  },
  {
    path: 'submitForm',
    component: SubmitFormComponent
  },
  { path: '**', redirectTo: 'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
