import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Benefit {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.css'
})
export class RoadmapComponent {
  benefits: Benefit[] = [
    {
      icon: 'assets/icons/icon1.svg',
      title: 'Enhanced Skill Development'
    },
    {
      icon: 'assets/icons/icon2.svg',
      title: 'Increased confidence & Empowerment'
    },
    {
      icon: 'assets/icons/icon3.svg',
      title: 'Retention & Talent Development'
    },
    {
      icon: 'assets/icons/icon2.svg',
      title: 'Be the supreme choice for potential professionals'
    },
    {
      icon: 'assets/icons/icon2.svg',
      title: 'Stand out in the space for talent development'
    },
    {
      icon: 'assets/icons/icon2.svg',
      title: 'Strategic partnerships & support'
    },
    {
      icon: 'assets/icons/icon2.svg',
      title: 'Continuous Learning & Adaptation',
      //description: 'This is a description of benefit two.'
    }
  ];

  visibleBenefits: Benefit[] = [];
  currentPage = 0;
  itemsPerPage = 4;
  totalPages = Math.ceil(this.benefits.length / this.itemsPerPage);

  updateVisibleBenefits() {
    const start = this.currentPage * this.itemsPerPage;
    const end = Math.min(start + this.itemsPerPage, this.benefits.length);
    this.visibleBenefits = this.benefits.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateVisibleBenefits();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVisibleBenefits();
    }
  }

  ngOnInit() {
    this.updateVisibleBenefits();
  }
  
  activeTab: string = 'stats';

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}

