import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JoinusComponent } from './join-us.component';

const routes: Routes = [
  { path: '', component: JoinusComponent }
];

@NgModule({
  imports: [
    CommonModule,
    JoinusComponent,
    RouterModule.forChild(routes)
  ]
})
export class JoinUsModule { }
