import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesStatasticsComponent } from './sales-statastics/sales-statastics.component';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { BottomSectionComponent } from './bottom-section.component';
import { FusionChartsModule } from 'angular-fusioncharts';



@NgModule({
  declarations: [
    BottomSectionComponent,
    SalesStatasticsComponent,
    BalanceOverviewComponent,
    TopProductsComponent
  ],
  imports: [
    CommonModule,
    FusionChartsModule
  ],
  exports:[
    BottomSectionComponent
  ]
})
export class BottomSectionModule { }
