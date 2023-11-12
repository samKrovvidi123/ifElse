import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FusionChartsComponent, FusionChartsModule } from 'angular-fusioncharts';

import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


@NgModule({
  declarations: [],
  providers:[FusionChartsComponent],
  imports: [
    CommonModule,
    FusionChartsModule
  ]
})
export class BalanceOverviewModule { }
