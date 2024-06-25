//platform/src/app/components/home/home.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ObjectivesComponent } from './objectives/objectives.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { BenefitsComponent } from './benefits/benefits.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ObjectivesComponent, BenefitsComponent, RoadmapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
