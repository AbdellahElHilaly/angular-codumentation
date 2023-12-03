import { Routes } from '@angular/router';
import {ParentComponent} from "./components/parent/parent.component";

export const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'home', component: ParentComponent },
  { path: '**', redirectTo: 'home' }
];
