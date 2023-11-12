import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiddleSectionComponent } from './middle-section.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { NewUserRegisterationsComponent } from './new-user-registerations/new-user-registerations.component';
import { NewUserRegisterationsModule } from './new-user-registerations/new-user-registerations.module';
import { RecentOrdersModule } from './recent-orders/recent-orders.module';
import { NewUserCardComponent } from './new-user-registerations/new-user-card/new-user-card.component';
import { NewUserCardModule } from './new-user-registerations/new-user-card/new-user-card.module';



@NgModule({
  declarations: [MiddleSectionComponent, RecentOrdersComponent, NewUserRegisterationsComponent],
  imports: [
    CommonModule,
    NewUserRegisterationsModule,
    RecentOrdersModule,
    NewUserCardModule
  ],
  exports: [MiddleSectionComponent]
})
export class MiddleSectionModule { }
