import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesStatasticsComponent } from './sales-statastics/sales-statastics.component';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { BottomSectionComponent } from './bottom-section.component';



@NgModule({
  declarations: [
    BottomSectionComponent,
    SalesStatasticsComponent,
    BalanceOverviewComponent,
    TopProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BottomSectionComponent
  ]
})
export class BottomSectionModule { }
