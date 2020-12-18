import { Component, OnInit } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss'],
})
export class MyBarChartComponent implements OnInit {
  pie: any = 'PieChart';
  piedata: any[] = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ];

  combo :any= 'ComboChart';
  combodata:any = [
    ['Account', 3, 2, 2.5],
    ['HR', 2, 3, 2.5],
    ['IT', 1, 5, 3],
    ['Sales', 3, 9, 6],
    ['Marketing', 4, 2, 3],
  ];
  constructor() {}
  ngOnInit(): void {}
}
