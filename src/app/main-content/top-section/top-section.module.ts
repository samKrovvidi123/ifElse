import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSectionComponent } from './top-section.component';
import { CardModule } from './card/card.module';



@NgModule({
  declarations: [TopSectionComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [TopSectionComponent]
})
export class TopSectionModule { }
