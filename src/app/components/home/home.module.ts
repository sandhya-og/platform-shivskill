import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { RoadmapComponent } from './roadmap/roadmap.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  
  imports: [
    HomeComponent,
    ObjectivesComponent,
    BenefitsComponent,
    RoadmapComponent,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
