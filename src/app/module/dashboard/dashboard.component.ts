import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [] as any;
  Cards = [] as any;
  Pie = [] as any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.Cards = this.dashboardService.cards();
    this.Pie = this.dashboardService.getPie();
  }

}
