import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserCardComponent } from './new-user-card.component';



@NgModule({
  declarations: [NewUserCardComponent],
  imports: [
    CommonModule
  ],
  exports:[NewUserCardComponent]
})
export class NewUserCardModule { }
