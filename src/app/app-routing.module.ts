import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: '', redirectTo: 'Play/Start', pathMatch: 'full' },
  { path: 'Play', redirectTo: 'Play/Start' },
  { path: 'Play/:id', component: PlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
