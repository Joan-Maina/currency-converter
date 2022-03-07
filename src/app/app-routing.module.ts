import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './pages/features/features.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    component: HomepageComponent,
    path: ''
  },
  {
    component: FeaturesComponent,
    path: 'features'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
