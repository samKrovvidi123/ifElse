import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserCardComponent } from './new-user-card/new-user-card.component';
import { NewUserCardModule } from './new-user-card/new-user-card.module';



@NgModule({
  declarations: [
    // NewUserCardComponent
  ],
  imports: [
    CommonModule,
    NewUserCardModule
  ]
})
export class NewUserRegisterationsModule { }
