import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AssessmentReport } from 'src/app/_core/models/assessment-report.model';

@Component({
  selector: 'app-canvas-chart',
  templateUrl: './canvas-chart.component.html',
  styles: [ ]
})
export class CanvasChartComponent implements OnInit, OnDestroy {

  @Input()
  assessmentReport: AssessmentReport | undefined = undefined;

  public chart: any;
  
  public ngOnInit(): void {
    this.createChart();
  };
  
  public ngOnDestroy(): void {    
    this.chart.clear();
    this.chart.destroy();
  };

  private createChart() : void {

    if (this.assessmentReport) {
      this.chart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: Object.keys(this.assessmentReport.data),
          datasets: [{
            data: Object.values(this.assessmentReport.data),
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    };
  };
};
