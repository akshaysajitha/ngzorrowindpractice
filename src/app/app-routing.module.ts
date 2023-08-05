import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {path:'form',component:MyComponentComponent},
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
