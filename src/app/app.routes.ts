import {Routes} from '@angular/router';
import {DetailComponent} from './pages/detail/detail.component';
import {EditorComponent} from './pages/editor/editor.component';
import {ProfileComponent} from './pages/profile/profile.component';

export const routes: Routes = [
  {path: ':userid', component: ProfileComponent},
  {path: ':userid/detail/:id', component: DetailComponent},
  {path: ':userid/editor/:id', component: EditorComponent},
  {path: '', redirectTo: 'konstantindenerz', pathMatch: 'full'},
];
